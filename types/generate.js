import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'
import ts from 'typescript'

let source_content = await readFile(resolve(process.cwd(), 'input.d.ts'), 'utf-8')
let source_file = ts.createSourceFile('input.d.ts', source_content, ts.ScriptTarget.ESNext, true)
let output = 'declare function PhysX(target?: WebAssembly.Module | BufferSource): Promise<typeof PhysX & typeof PhysX.PxTopLevelFunctions>'

/**
 * @param {ts.Node} node
 */
let add_node = (node, indent = 0) => {
  output += `\n${' '.repeat(indent)}` + source_content.substring(node.pos, node.end)
}

/**
 * @param {ts.ClassDeclaration} node
 */
let add_class = (node, indent = 0) => {
  let value = source_content.substring(node.pos, node.end)

  if (node.name?.text == 'NativeArrayHelpers') {
    value = value.replaceAll('static ', '')
  }

  output += `\n${' '.repeat(indent)}` + value
}

/**
 * Prefixes enum values with e.
 * @param {ts.EnumDeclaration} node
 */
let add_enum = (node, indent = 0) => {
  output += `\n${' '.repeat(indent)}enum ` + node.name.getText() + ' {' // source_content.substring(node.pos, node.end)

  node.forEachChild((node) => {
    if (ts.isEnumMember(node)) {
      let value = node.getText()

      if (value.indexOf('::') != -1) {
        value = '\'' + value.split('::')[1]
      }
      else {
        value = '\'e' + value.slice(1)
      }

      output += `\n${' '.repeat(indent)}    ${value},`
    }
  })

  output += `\n${' '.repeat(indent)}}`
}

/**
 * @param {ts.ModuleDeclaration} module
 */
function add_module(module) {
  if (!module.body) {
    return
  }

  output += '\ndeclare namespace ' + module.name.getText() + ' {'

  module.body.forEachChild((node) => {
    if (ts.isClassDeclaration(node)) {
      add_class(node, 4)
    }
    else if (ts.isEnumDeclaration(node)) {
      add_enum(node, 4);
    }
    else {
      add_node(node, 4)
    }
  })

  output += '\n}'
}

source_file.forEachChild((node) => {
  if (ts.isFunctionDeclaration(node)) {
    return
  }
  
  if (ts.isClassDeclaration(node)) {
    add_class(node, 4)
  }
  else if (ts.isEnumDeclaration(node)) {
    add_enum(node)
  } else if (ts.isModuleDeclaration(node)) {
    add_module(node);
  }
  else {
    add_node(node)
  }
})

await writeFile(resolve(process.cwd(), './physx-js-webidl.d.ts'), output, 'utf-8')
