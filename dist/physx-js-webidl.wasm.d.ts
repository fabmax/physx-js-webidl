export default PhysX;
declare function PhysX<T>(target?: T): Promise<T & typeof PhysX>;
declare module PhysX {
    function destroy(obj: any): void;
    function _malloc(size: number): number;
    function _free(ptr: number): void;
    const HEAP8: Int8Array;
    const HEAP16: Int16Array;
    const HEAP32: Int32Array;
    const HEAPU8: Uint8Array;
    const HEAPU16: Uint16Array;
    const HEAPU32: Uint32Array;
    const HEAPF32: Float32Array;
    const HEAPF64: Float64Array;
    class PxTopLevelFunctions {
        static readonly PHYSICS_VERSION: number;
        static DefaultFilterShader(): PxSimulationFilterShader;
        static setupPassThroughFilterShader(sceneDesc: PxSceneDesc, filterShader: PassThroughFilterShader): void;
        static CreateControllerManager(scene: PxScene, lockingEnabled?: boolean): PxControllerManager;
        static CreateCooking(version: number, foundation: PxFoundation, scale: PxCookingParams): PxCooking;
        static CreateFoundation(version: number, allocator: PxDefaultAllocator, errorCallback: PxErrorCallback): PxFoundation;
        static CreatePhysics(version: number, foundation: PxFoundation, params: PxTolerancesScale, pvd?: PxPvd): PxPhysics;
        static DefaultCpuDispatcherCreate(numThreads: number): PxDefaultCpuDispatcher;
        static InitExtensions(physics: PxPhysics): boolean;
        static CloseExtensions(): void;
        static CreateCudaContextManager(foundation: PxFoundation, desc: PxCudaContextManagerDesc): PxCudaContextManager;
        static CreatePvd(foundation: PxFoundation): PxPvd;
        static D6JointCreate(physics: PxPhysics, actor0: PxRigidActor, localFrame0: PxTransform, actor1: PxRigidActor, localFrame1: PxTransform): PxD6Joint;
        static DistanceJointCreate(physics: PxPhysics, actor0: PxRigidActor, localFrame0: PxTransform, actor1: PxRigidActor, localFrame1: PxTransform): PxDistanceJoint;
        static FixedJointCreate(physics: PxPhysics, actor0: PxRigidActor, localFrame0: PxTransform, actor1: PxRigidActor, localFrame1: PxTransform): PxFixedJoint;
        static PrismaticJointCreate(physics: PxPhysics, actor0: PxRigidActor, localFrame0: PxTransform, actor1: PxRigidActor, localFrame1: PxTransform): PxPrismaticJoint;
        static RevoluteJointCreate(physics: PxPhysics, actor0: PxRigidActor, localFrame0: PxTransform, actor1: PxRigidActor, localFrame1: PxTransform): PxRevoluteJoint;
        static SphericalJointCreate(physics: PxPhysics, actor0: PxRigidActor, localFrame0: PxTransform, actor1: PxRigidActor, localFrame1: PxTransform): PxSphericalJoint;
    }
    class PxActor extends PxBase {
        getType(): PxActorTypeEnum;
        getScene(): PxScene;
        setName(name: string): void;
        getName(): string;
        getWorldBounds(inflation?: number): PxBounds3;
        setActorFlags(flags: PxActorFlags): void;
        getActorFlags(): PxActorFlags;
        setDominanceGroup(dominanceGroup: number): void;
        getDominanceGroup(): number;
        setOwnerClient(inClient: number): void;
        getOwnerClient(): number;
        userData: unknown;
    }
    enum PxActorFlagEnum {
        'VISUALIZATION',
        'DISABLE_GRAVITY',
        'SEND_SLEEP_NOTIFIES',
        'DISABLE_SIMULATION'
    }
    class PxActorFlags {
        constructor(flags: number);
        isSet(flag: PxActorFlagEnum): boolean;
        set(flag: PxActorFlagEnum): void;
        clear(flag: PxActorFlagEnum): void;
    }
    class PxActorShape {
        actor: PxRigidActor;
        shape: PxShape;
    }
    class PxActorTypeFlags {
        constructor(flags: number);
        isSet(flag: PxActorTypeFlagEnum): boolean;
        set(flag: PxActorTypeFlagEnum): void;
        clear(flag: PxActorTypeFlagEnum): void;
    }
    enum PxActorTypeEnum {
        'RIGID_STATIC',
        'RIGID_DYNAMIC',
        'ARTICULATION_LINK',
        'ACTOR_COUNT',
        'ACTOR_FORCE_DWORD'
    }
    enum PxActorTypeFlagEnum {
        'RIGID_STATIC',
        'RIGID_DYNAMIC'
    }
    class PxAggregate extends PxBase {
        addActor(actor: PxActor, bvhStructure?: PxBVHStructure): boolean;
        removeActor(actor: PxActor): boolean;
        addArticulation(articulation: PxArticulationBase): boolean;
        removeArticulation(articulation: PxArticulationBase): boolean;
        getNbActors(): number;
        getMaxNbActors(): number;
        getScene(): PxScene;
        getSelfCollision(): boolean;
    }
    class PxArticulation extends PxArticulationBase {
        setMaxProjectionIterations(iterations: number): void;
        getMaxProjectionIterations(): number;
        setSeparationTolerance(tolerance: number): void;
        getSeparationTolerance(): number;
        setInternalDriveIterations(iterations: number): void;
        getInternalDriveIterations(): number;
        setExternalDriveIterations(iterations: number): void;
        getExternalDriveIterations(): number;
        createDriveCache(compliance: number, driveIterations: number): PxArticulationDriveCache;
        updateDriveCache(driveCache: PxArticulationDriveCache, compliance: number, driveIterations: number): void;
        releaseDriveCache(driveCache: PxArticulationDriveCache): void;
        applyImpulse(link: PxArticulationLink, driveCache: PxArticulationDriveCache, linearImpulse: PxVec3, angularImpulse: PxVec3): void;
        computeImpulseResponse(link: PxArticulationLink, linearResponse: PxVec3, angularResponse: PxVec3, driveCache: PxArticulationDriveCache, linearImpulse: PxVec3, angularImpulse: PxVec3): void;
    }
    enum PxArticulationAxisEnum {
        'TWIST',
        'SWING1',
        'SWING2',
        'X',
        'Y',
        'Z',
        'COUNT'
    }
    class PxArticulationBase extends PxBase {
        getScene(): PxScene;
        setSolverIterationCounts(minPositionIters: number, minVelocityIters: number): void;
        isSleeping(): boolean;
        setSleepThreshold(threshold: number): void;
        getSleepThreshold(): number;
        setStabilizationThreshold(threshold: number): void;
        getStabilizationThreshold(): number;
        setWakeCounter(wakeCounterValue: number): void;
        getWakeCounter(): number;
        wakeUp(): void;
        putToSleep(): void;
        createLink(parent: PxArticulationLink, pose: PxTransform): PxArticulationLink;
        getNbLinks(): number;
        setName(name: string): void;
        getName(): string;
        getWorldBounds(): PxBounds3;
        getAggregate(): PxAggregate;
        userData: unknown;
    }
    class PxArticulationCache {
    }
    enum PxArticulationCacheEnum {
        'VELOCITY',
        'ACCELERATION',
        'POSITION',
        'FORCE',
        'LINKVELOCITY',
        'LINKACCELERATION',
        'ROOT',
        'ALL'
    }
    class PxArticulationCacheFlags {
        constructor(flags: number);
        isSet(flag: PxArticulationCacheEnum): boolean;
        set(flag: PxArticulationCacheEnum): void;
        clear(flag: PxArticulationCacheEnum): void;
    }
    class PxArticulationDriveCache {
    }
    enum PxArticulationDriveTypeEnum {
        'FORCE',
        'ACCELERATION',
        'TARGET',
        'VELOCITY',
        'NONE'
    }
    enum PxArticulationFlagEnum {
        'FIX_BASE',
        'DRIVE_LIMITS_ARE_FORCES'
    }
    class PxArticulationFlags {
        constructor(flags: number);
        isSet(flag: PxArticulationFlagEnum): boolean;
        set(flag: PxArticulationFlagEnum): void;
        clear(flag: PxArticulationFlagEnum): void;
    }
    class PxArticulationJoint extends PxArticulationJointBase {
        setTargetOrientation(orientation: PxQuat): void;
        getTargetOrientation(): PxQuat;
        setTargetVelocity(velocity: PxVec3): void;
        getTargetVelocity(): PxVec3;
        setDriveType(driveType: PxArticulationJointDriveTypeEnum): void;
        getDriveType(): PxArticulationJointDriveTypeEnum;
        setStiffness(spring: number): void;
        getStiffness(): number;
        setDamping(damping: number): void;
        getDamping(): number;
        setInternalCompliance(compliance: number): void;
        getInternalCompliance(): number;
        setExternalCompliance(compliance: number): void;
        getExternalCompliance(): number;
        setSwingLimit(zLimit: number, yLimit: number): void;
        setTangentialStiffness(spring: number): void;
        getTangentialStiffness(): number;
        setTangentialDamping(damping: number): void;
        getTangentialDamping(): number;
        setSwingLimitContactDistance(contactDistance: number): void;
        getSwingLimitContactDistance(): number;
        setSwingLimitEnabled(enabled: boolean): void;
        getSwingLimitEnabled(): boolean;
        setTwistLimit(lower: number, upper: number): void;
        setTwistLimitEnabled(enabled: boolean): void;
        getTwistLimitEnabled(): boolean;
        setTwistLimitContactDistance(contactDistance: number): void;
        getTwistLimitContactDistance(): number;
    }
    class PxArticulationJointBase extends PxBase {
        getParentArticulationLink(): PxArticulationLink;
        setParentPose(pose: PxTransform): void;
        getParentPose(): PxTransform;
        getChildArticulationLink(): PxArticulationLink;
        setChildPose(pose: PxTransform): void;
        getChildPose(): PxTransform;
    }
    enum PxArticulationJointDriveTypeEnum {
        'TARGET',
        'ERROR'
    }
    enum PxArticulationMotionEnum {
        'LOCKED',
        'LIMITED',
        'FREE'
    }
    class PxArticulationJointReducedCoordinate extends PxArticulationJointBase {
        setJointType(jointType: PxArticulationJointTypeEnum): void;
        getJointType(): PxArticulationJointTypeEnum;
        setMotion(axis: PxArticulationAxisEnum, motion: PxArticulationMotionEnum): void;
        getMotion(axis: PxArticulationAxisEnum): PxArticulationMotionEnum;
        setLimit(axis: PxArticulationAxisEnum, lowLimit: number, highLimit: number): void;
        setDrive(axis: PxArticulationAxisEnum, stiffness: number, damping: number, maxForce: number, driveType?: PxArticulationDriveTypeEnum): void;
        setDriveTarget(axis: PxArticulationAxisEnum, target: number): void;
        setDriveVelocity(axis: PxArticulationAxisEnum, targetVel: number): void;
        getDriveTarget(axis: PxArticulationAxisEnum): number;
        getDriveVelocity(axis: PxArticulationAxisEnum): number;
        setFrictionCoefficient(coefficient: number): void;
        getFrictionCoefficient(): number;
        setMaxJointVelocity(maxJointV: number): void;
        getMaxJointVelocity(): number;
    }
    enum PxArticulationJointTypeEnum {
        'PRISMATIC',
        'REVOLUTE',
        'SPHERICAL',
        'FIX',
        'UNDEFINED'
    }
    class PxArticulationLink extends PxRigidBody {
        getArticulation(): PxArticulationBase;
        getInboundJoint(): PxArticulationJointBase;
        getInboundJointDof(): number;
        getNbChildren(): number;
        getLinkIndex(): number;
    }
    class PxArticulationReducedCoordinate extends PxArticulationBase {
        setArticulationFlags(flags: PxArticulationFlags): void;
        setArticulationFlag(flag: PxArticulationFlagEnum, value: boolean): void;
        getArticulationFlags(): PxArticulationFlags;
        getDofs(): number;
        createCache(): PxArticulationCache;
        getCacheDataSize(): number;
        zeroCache(cache: PxArticulationCache): void;
        applyCache(cache: PxArticulationCache, flag: PxArticulationCacheFlags, autowake?: boolean): void;
        copyInternalStateToCache(cache: PxArticulationCache, flag: PxArticulationCacheFlags): void;
        releaseCache(cache: PxArticulationCache): void;
        packJointData(maximum: PxRealPtr, reduced: PxRealPtr): void;
        unpackJointData(reduced: PxRealPtr, maximum: PxRealPtr): void;
        commonInit(): void;
        computeGeneralizedGravityForce(cache: PxArticulationCache): void;
        computeCoriolisAndCentrifugalForce(cache: PxArticulationCache): void;
        computeGeneralizedExternalForce(cache: PxArticulationCache): void;
        computeJointAcceleration(cache: PxArticulationCache): void;
        computeJointForce(cache: PxArticulationCache): void;
        computeCoefficientMatrix(cache: PxArticulationCache): void;
        computeLambda(cache: PxArticulationCache, initialState: PxArticulationCache, jointTorque: PxRealPtr, maxIter: number): void;
        computeGeneralizedMassMatrix(cache: PxArticulationCache): void;
        addLoopJoint(joint: PxJoint): void;
        removeLoopJoint(joint: PxJoint): void;
        getNbLoopJoints(): number;
        getCoefficientMatrixSize(): number;
        teleportRootLink(pose: PxTransform, autowake: boolean): void;
        getLinkVelocity(linkId: number): PxSpatialVelocity;
        getLinkAcceleration(linkId: number): PxSpatialVelocity;
    }
    class PxBatchQuery {
        execute(): void;
        getPreFilterShader(): PxBatchQueryPreFilterShader;
        getPostFilterShader(): PxBatchQueryPostFilterShader;
        getFilterShaderData(): any;
        getFilterShaderDataSize(): number;
        setUserMemory(userMemory: PxBatchQueryMemory): void;
        getUserMemory(): PxBatchQueryMemory;
        release(): void;
    }
    class PxBatchQueryDesc {
        constructor(maxRaycastsPerExecute: number, maxSweepsPerExecute: number, maxOverlapsPerExecute: number);
        isValid(): boolean;
        filterShaderData: any;
        filterShaderDataSize: number;
        preFilterShader: PxBatchQueryPreFilterShader;
        postFilterShader: PxBatchQueryPostFilterShader;
        queryMemory: PxBatchQueryMemory;
    }
    class PxBatchQueryMemory {
        userRaycastResultBuffer: PxRaycastQueryResult;
        userRaycastTouchBuffer: PxRaycastHit;
        userSweepResultBuffer: PxSweepQueryResult;
        userSweepTouchBuffer: PxSweepHit;
        userOverlapResultBuffer: PxOverlapQueryResult;
        userOverlapTouchBuffer: PxOverlapHit;
        raycastTouchBufferSize: number;
        sweepTouchBufferSize: number;
        overlapTouchBufferSize: number;
    }
    class PxBatchQueryPostFilterShader {
    }
    class PxBatchQueryPreFilterShader {
    }
    class PxBroadPhaseCaps {
        constructor();
        maxNbRegions: number;
        maxNbObjects: number;
        needsPredefinedBounds: boolean;
    }
    class PxBroadPhaseRegion {
        constructor();
        bounds: PxBounds3;
        userData: unknown;
    }
    class PxBroadPhaseRegionInfo {
        constructor();
        region: PxBroadPhaseRegion;
        nbStaticObjects: number;
        nbDynamicObjects: number;
        active: boolean;
        overlap: boolean;
    }
    enum PxBroadPhaseTypeEnum {
        'SAP',
        'MBP',
        'ABP',
        'GPU',
        'LAST'
    }
    enum PxCombineModeEnum {
        'AVERAGE',
        'MIN',
        'MULTIPLY',
        'MAX'
    }
    class PxConstraint extends PxBase {
        release(): void;
        getScene(): PxScene;
        setActors(actor0: PxRigidActor, actor1: PxRigidActor): void;
        markDirty(): void;
        setFlags(flags: PxConstraintFlags): void;
        getFlags(): PxConstraintFlags;
        setFlag(flag: PxConstraintFlagEnum, value: boolean): void;
        getForce(linear: PxVec3, angular: PxVec3): void;
        isValid(): boolean;
        setBreakForce(linear: number, angular: number): void;
        setMinResponseThreshold(threshold: number): void;
        getMinResponseThreshold(): number;
    }
    enum PxConstraintFlagEnum {
        'BROKEN',
        'PROJECT_TO_ACTOR0',
        'PROJECT_TO_ACTOR1',
        'PROJECTION',
        'COLLISION_ENABLED',
        'VISUALIZATION',
        'DRIVE_LIMITS_ARE_FORCES',
        'IMPROVED_SLERP',
        'DISABLE_PREPROCESSING',
        'ENABLE_EXTENDED_LIMITS',
        'GPU_COMPATIBLE'
    }
    class PxConstraintFlags {
        constructor(flags: number);
        isSet(flag: PxConstraintFlagEnum): boolean;
        set(flag: PxConstraintFlagEnum): void;
        clear(flag: PxConstraintFlagEnum): void;
    }
    class PxConstraintInfo {
        constraint: PxConstraint;
        externalReference: unknown;
        type: number;
    }
    enum PxContactPairHeaderFlagEnum {
        'REMOVED_ACTOR_0',
        'REMOVED_ACTOR_1'
    }
    class PxContactPairHeaderFlags {
        constructor(flags: number);
        isSet(flag: PxContactPairHeaderFlagEnum): boolean;
        set(flag: PxContactPairHeaderFlagEnum): void;
        clear(flag: PxContactPairHeaderFlagEnum): void;
    }
    class PxContactPair {
        extractContacts(userBuffer: PxContactPairPoint, bufferSize: number): number;
        shapes: ReadonlyArray<PxShape>;
        contactCount: number;
        patchCount: number;
        flags: PxContactPairFlags;
        events: PxPairFlags;
    }
    enum PxContactPairFlagEnum {
        'REMOVED_SHAPE_0',
        'REMOVED_SHAPE_1',
        'ACTOR_PAIR_HAS_FIRST_TOUCH',
        'ACTOR_PAIR_LOST_TOUCH',
        'INTERNAL_HAS_IMPULSES',
        'INTERNAL_CONTACTS_ARE_FLIPPED'
    }
    class PxContactPairFlags {
        constructor(flags: number);
        isSet(flag: PxContactPairFlagEnum): boolean;
        set(flag: PxContactPairFlagEnum): void;
        clear(flag: PxContactPairFlagEnum): void;
    }
    class PxContactPairHeader {
        actors: ReadonlyArray<PxRigidActor>;
        flags: PxContactPairHeaderFlags;
        pairs: PxContactPair;
        nbPairs: number;
    }
    class PxContactPairPoint {
        position: PxVec3;
        separation: number;
        normal: PxVec3;
        internalFaceIndex0: number;
        impulse: PxVec3;
        internalFaceIndex1: number;
    }
    class PxDominanceGroupPair {
        constructor(a: number, b: number);
        dominance0: number;
        dominance1: number;
    }
    class PxgDynamicsMemoryConfig {
        constructor();
        constraintBufferCapacity: number;
        contactBufferCapacity: number;
        tempBufferCapacity: number;
        contactStreamSize: number;
        patchStreamSize: number;
        forceStreamCapacity: number;
        heapCapacity: number;
        foundLostPairsCapacity: number;
    }
    class PxFilterData {
        constructor();
        constructor(w0: number, w1: number, w2: number, w3: number);
        word0: number;
        word1: number;
        word2: number;
        word3: number;
    }
    enum PxFilterFlagEnum {
        'KILL',
        'SUPPRESS',
        'CALLBACK',
        'NOTIFY',
        'DEFAULT'
    }
    enum PxFilterObjectFlagEnum {
        'KINEMATIC',
        'TRIGGER'
    }
    enum PxForceModeEnum {
        'FORCE',
        'IMPULSE',
        'VELOCITY_CHANGE',
        'ACCELERATION'
    }
    enum PxFrictionTypeEnum {
        'PATCH',
        'ONE_DIRECTIONAL',
        'TWO_DIRECTIONAL',
        'FRICTION_COUNT'
    }
    enum PxHitFlagEnum {
        'POSITION',
        'NORMAL',
        'UV',
        'ASSUME_NO_INITIAL_OVERLAP',
        'MESH_MULTIPLE',
        'MESH_ANY',
        'MESH_BOTH_SIDES',
        'PRECISE_SWEEP',
        'MTD',
        'FACE_INDEX',
        'DEFAULT',
        'MODIFIABLE_FLAGS'
    }
    class PxHitFlags {
        constructor(flags: number);
        isSet(flag: PxHitFlagEnum): boolean;
        set(flag: PxHitFlagEnum): void;
        clear(flag: PxHitFlagEnum): void;
    }
    class PxLocationHit extends PxQueryHit {
        flags: PxHitFlags;
        position: PxVec3;
        normal: PxVec3;
        distance: number;
    }
    class PxOverlapBuffer10 extends PxOverlapCallback {
        constructor();
        getNbAnyHits(): number;
        getAnyHit(index: number): PxOverlapHit;
        getNbTouches(): number;
        getTouches(): PxOverlapHit;
        getTouch(index: number): PxOverlapHit;
        getMaxNbTouches(): number;
        block: PxOverlapHit;
        hasBlock: boolean;
    }
    class PxOverlapCallback {
        hasAnyHits(): boolean;
    }
    class PxOverlapHit extends PxQueryHit {
    }
    class PxOverlapQueryResult {
        getNbAnyHits(): number;
        getAnyHit(index: number): PxOverlapHit;
        block: PxOverlapHit;
        touches: PxOverlapHit;
        nbTouches: number;
        userData: any;
        queryStatus: number;
        hasBlock: boolean;
    }
    class PxMaterial extends PxBase {
        getReferenceCount(): number;
        acquireReference(): void;
        setDynamicFriction(coef: number): void;
        getDynamicFriction(): number;
        setStaticFriction(coef: number): void;
        getStaticFriction(): number;
        setRestitution(coef: number): void;
        getRestitution(): number;
        setFlag(flag: PxMaterialFlagEnum, b: boolean): void;
        setFlags(flags: PxMaterialFlags): void;
        getFlags(): PxMaterialFlags;
        setFrictionCombineMode(combMode: PxCombineModeEnum): void;
        getFrictionCombineMode(): PxCombineModeEnum;
        setRestitutionCombineMode(combMode: PxCombineModeEnum): void;
        getRestitutionCombineMode(): PxCombineModeEnum;
        userData: unknown;
    }
    enum PxMaterialFlagEnum {
        'DISABLE_FRICTION',
        'DISABLE_STRONG_FRICTION',
        'IMPROVED_PATCH_FRICTION'
    }
    class PxMaterialFlags {
        constructor(flags: number);
        isSet(flag: PxMaterialFlagEnum): boolean;
        set(flag: PxMaterialFlagEnum): void;
        clear(flag: PxMaterialFlagEnum): void;
    }
    enum PxPairFilteringModeEnum {
        'KEEP',
        'SUPPRESS',
        'KILL',
        'DEFAULT'
    }
    enum PxPairFlagEnum {
        'SOLVE_CONTACT',
        'MODIFY_CONTACTS',
        'NOTIFY_TOUCH_FOUND',
        'NOTIFY_TOUCH_PERSISTS',
        'NOTIFY_TOUCH_LOST',
        'NOTIFY_TOUCH_CCD',
        'NOTIFY_THRESHOLD_FORCE_FOUND',
        'NOTIFY_THRESHOLD_FORCE_PERSISTS',
        'NOTIFY_THRESHOLD_FORCE_LOST',
        'NOTIFY_CONTACT_POINTS',
        'DETECT_DISCRETE_CONTACT',
        'DETECT_CCD_CONTACT',
        'PRE_SOLVER_VELOCITY',
        'POST_SOLVER_VELOCITY',
        'CONTACT_EVENT_POSE',
        'NEXT_FREE',
        'CONTACT_DEFAULT',
        'TRIGGER_DEFAULT'
    }
    class PxPairFlags {
        constructor(flags: number);
        isSet(flag: PxPairFlagEnum): boolean;
        set(flag: PxPairFlagEnum): void;
        clear(flag: PxPairFlagEnum): void;
    }
    class PxPhysics {
        release(): void;
        getFoundation(): PxFoundation;
        createAggregate(size: number, enableSelfCollision: boolean): PxAggregate;
        getTolerancesScale(): PxTolerancesScale;
        createScene(sceneDesc: PxSceneDesc): PxScene;
        createRigidStatic(pose: PxTransform): PxRigidStatic;
        createRigidDynamic(pose: PxTransform): PxRigidDynamic;
        createShape(geometry: PxGeometry, material: PxMaterial, isExclusive?: boolean, shapeFlags?: PxShapeFlags): PxShape;
        getNbShapes(): number;
        createArticulation(): PxArticulation;
        createArticulationReducedCoordinate(): PxArticulationReducedCoordinate;
        createMaterial(staticFriction: number, dynamicFriction: number, restitution: number): PxMaterial;
        getPhysicsInsertionCallback(): PxPhysicsInsertionCallback;
    }
    enum PxPruningStructureTypeEnum {
        'NONE',
        'DYNAMIC_AABB_TREE',
        'STATIC_AABB_TREE',
        'LAST'
    }
    class PxQueryFilterData {
        constructor();
        constructor(fd: PxFilterData, f: PxQueryFlags);
        constructor(f: PxQueryFlags);
        data: PxFilterData;
        flags: PxQueryFlags;
    }
    enum PxQueryFlagEnum {
        'STATIC',
        'DYNAMIC',
        'PREFILTER',
        'POSTFILTER',
        'ANY_HIT',
        'NO_BLOCK'
    }
    class PxQueryFlags {
        constructor(flags: number);
        isSet(flag: PxQueryFlagEnum): boolean;
        set(flag: PxQueryFlagEnum): void;
        clear(flag: PxQueryFlagEnum): void;
    }
    class PxQueryHit extends PxActorShape {
        faceIndex: number;
    }
    class PxRaycastBuffer10 extends PxRaycastCallback {
        constructor();
        getNbAnyHits(): number;
        getAnyHit(index: number): PxRaycastHit;
        getNbTouches(): number;
        getTouches(): PxRaycastHit;
        getTouch(index: number): PxRaycastHit;
        getMaxNbTouches(): number;
        block: PxRaycastHit;
        hasBlock: boolean;
    }
    class PxRaycastCallback {
        hasAnyHits(): boolean;
    }
    class PxRaycastHit extends PxLocationHit {
        constructor();
        u: number;
        v: number;
    }
    class PxRaycastQueryResult {
        getNbAnyHits(): number;
        getAnyHit(index: number): PxRaycastHit;
        block: PxRaycastHit;
        touches: PxRaycastHit;
        nbTouches: number;
        userData: any;
        queryStatus: number;
        hasBlock: boolean;
    }
    class PxRigidActor extends PxActor {
        getGlobalPose(): PxTransform;
        setGlobalPose(pose: PxTransform, autowake?: boolean): void;
        attachShape(shape: PxShape): boolean;
        detachShape(shape: PxShape, wakeOnLostTouch?: boolean): void;
        getNbShapes(): number;
    }
    class PxRigidBody extends PxRigidActor {
        setCMassLocalPose(pose: PxTransform): void;
        getCMassLocalPose(): PxTransform;
        setMass(mass: number): void;
        getMass(): number;
        getInvMass(): number;
        setMassSpaceInertiaTensor(m: PxVec3): void;
        getMassSpaceInertiaTensor(): PxVec3;
        getMassSpaceInvInertiaTensor(): PxVec3;
        setLinearDamping(linDamp: number): void;
        getLinearDamping(): number;
        setAngularDamping(angDamp: number): void;
        getAngularDamping(): number;
        getLinearVelocity(): PxVec3;
        setLinearVelocity(linVel: PxVec3, autowake?: boolean): void;
        getAngularVelocity(): PxVec3;
        setAngularVelocity(angVel: PxVec3, autowake?: boolean): void;
        getMaxLinearVelocity(): number;
        setMaxLinearVelocity(maxLinVel: number): void;
        getMaxAngularVelocity(): number;
        setMaxAngularVelocity(maxAngVel: number): void;
        addForce(force: PxVec3, mode?: PxForceModeEnum, autowake?: boolean): void;
        addTorque(torque: PxVec3, mode?: PxForceModeEnum, autowake?: boolean): void;
        clearForce(mode: PxForceModeEnum): void;
        clearTorque(mode: PxForceModeEnum): void;
        setForceAndTorque(force: PxVec3, torque: PxVec3, mode?: PxForceModeEnum): void;
        setRigidBodyFlag(flag: PxRigidBodyFlagEnum, value: boolean): void;
        setRigidBodyFlags(inFlags: PxRigidBodyFlags): void;
        getRigidBodyFlags(): PxRigidBodyFlags;
        setMinCCDAdvanceCoefficient(advanceCoefficient: number): void;
        getMinCCDAdvanceCoefficient(): number;
        setMaxDepenetrationVelocity(biasClamp: number): void;
        getMaxDepenetrationVelocity(): number;
        setMaxContactImpulse(maxImpulse: number): void;
        getMaxContactImpulse(): number;
        getInternalIslandNodeIndex(): number;
    }
    enum PxRigidBodyFlagEnum {
        'KINEMATIC',
        'USE_KINEMATIC_TARGET_FOR_SCENE_QUERIES',
        'ENABLE_CCD',
        'ENABLE_CCD_FRICTION',
        'ENABLE_POSE_INTEGRATION_PREVIEW',
        'ENABLE_SPECULATIVE_CCD',
        'ENABLE_CCD_MAX_CONTACT_IMPULSE',
        'RETAIN_ACCELERATIONS'
    }
    class PxRigidBodyFlags {
        constructor(flags: number);
        isSet(flag: PxRigidBodyFlagEnum): boolean;
        set(flag: PxRigidBodyFlagEnum): void;
        clear(flag: PxRigidBodyFlagEnum): void;
    }
    class PxRigidDynamic extends PxRigidBody {
        setKinematicTarget(destination: PxTransform): void;
        getKinematicTarget(target: PxTransform): boolean;
        isSleeping(): boolean;
        setSleepThreshold(threshold: number): void;
        getSleepThreshold(): number;
        setStabilizationThreshold(threshold: number): void;
        getStabilizationThreshold(): number;
        getRigidDynamicLockFlags(): PxRigidDynamicLockFlags;
        setRigidDynamicLockFlag(flag: PxRigidDynamicLockFlagEnum, value: boolean): void;
        setRigidDynamicLockFlags(flags: PxRigidDynamicLockFlags): void;
        setWakeCounter(wakeCounterValue: number): void;
        getWakeCounter(): number;
        wakeUp(): void;
        putToSleep(): void;
        setSolverIterationCounts(minPositionIters: number, minVelocityIters?: number): void;
        getContactReportThreshold(): number;
        setContactReportThreshold(threshold: number): void;
    }
    enum PxRigidDynamicLockFlagEnum {
        'LOCK_LINEAR_X',
        'LOCK_LINEAR_Y',
        'LOCK_LINEAR_Z',
        'LOCK_ANGULAR_X',
        'LOCK_ANGULAR_Y',
        'LOCK_ANGULAR_Z'
    }
    class PxRigidDynamicLockFlags {
        constructor(flags: number);
        isSet(flag: PxRigidDynamicLockFlagEnum): boolean;
        set(flag: PxRigidDynamicLockFlagEnum): void;
        clear(flag: PxRigidDynamicLockFlagEnum): void;
    }
    class PxRigidStatic extends PxRigidActor {
    }
    class PxScene {
        addActor(actor: PxActor, bvhStructure?: PxBVHStructure): void;
        removeActor(actor: PxActor, wakeOnLostTouch?: boolean): void;
        addAggregate(aggregate: PxAggregate): void;
        removeAggregate(aggregate: PxAggregate, wakeOnLostTouch?: boolean): void;
        addCollection(collection: PxCollection): void;
        getWakeCounterResetValue(): number;
        shiftOrigin(shift: PxVec3): void;
        addArticulation(articulation: PxArticulationBase): void;
        removeArticulation(articulation: PxArticulationBase, wakeOnLostTouch?: boolean): void;
        getNbActors(types: PxActorTypeFlags): number;
        getNbArticulations(): number;
        getNbConstraints(): number;
        getNbAggregates(): number;
        setDominanceGroupPair(group1: number, group2: number, dominance: PxDominanceGroupPair): void;
        getCpuDispatcher(): PxCpuDispatcher;
        getCudaContextManager(): PxCudaContextManager;
        createClient(): number;
        setSimulationEventCallback(callback: PxSimulationEventCallback): void;
        getSimulationEventCallback(): PxSimulationEventCallback;
        setFilterShaderData(data: unknown, dataSize: number): void;
        getFilterShaderData(): unknown;
        getFilterShaderDataSize(): number;
        getFilterShader(): PxSimulationFilterShader;
        resetFiltering(actor: PxActor): void;
        getKinematicKinematicFilteringMode(): PxPairFilteringModeEnum;
        getStaticKinematicFilteringMode(): PxPairFilteringModeEnum;
        simulate(elapsedTime: number, completionTask?: PxBaseTask, scratchMemBlock?: unknown, scratchMemBlockSize?: number, controlSimulation?: boolean): void;
        advance(completionTask?: PxBaseTask): void;
        collide(elapsedTime: number, completionTask?: PxBaseTask, scratchMemBlock?: unknown, scratchMemBlockSize?: number, controlSimulation?: boolean): void;
        checkResults(block?: boolean): boolean;
        fetchCollision(block?: boolean): boolean;
        fetchResults(block?: boolean): boolean;
        processCallbacks(continuation: PxBaseTask): void;
        flushSimulation(sendPendingReports?: boolean): void;
        setGravity(vec: PxVec3): void;
        getGravity(): PxVec3;
        setBounceThresholdVelocity(t: number): void;
        getBounceThresholdVelocity(): number;
        setCCDMaxPasses(ccdMaxPasses: number): void;
        getCCDMaxPasses(): number;
        getFrictionOffsetThreshold(): number;
        setFrictionType(frictionType: PxFrictionTypeEnum): void;
        getFrictionType(): PxFrictionTypeEnum;
        getSimulationStatistics(stats: PxSimulationStatistics): void;
        getStaticStructure(): PxPruningStructureTypeEnum;
        getDynamicStructure(): PxPruningStructureTypeEnum;
        flushQueryUpdates(): void;
        createBatchQuery(desc: PxBatchQueryDesc): PxBatchQuery;
        setDynamicTreeRebuildRateHint(dynamicTreeRebuildRateHint: number): void;
        getDynamicTreeRebuildRateHint(): number;
        forceDynamicTreeRebuild(rebuildStaticStructure: boolean, rebuildDynamicStructure: boolean): void;
        setSceneQueryUpdateMode(updateMode: PxSceneQueryUpdateModeEnum): void;
        getSceneQueryUpdateMode(): PxSceneQueryUpdateModeEnum;
        sceneQueriesUpdate(completionTask?: PxBaseTask, controlSimulation?: boolean): void;
        checkQueries(block?: boolean): boolean;
        fetchQueries(block?: boolean): boolean;
        raycast(origin: PxVec3, unitDir: PxVec3, distance: number, hitCall: PxRaycastCallback, hitFlags?: PxHitFlags, filterData?: PxQueryFilterData): boolean;
        sweep(geometry: PxGeometry, pose: PxTransform, unitDir: PxVec3, distance: number, hitCall: PxSweepCallback, hitFlags?: PxHitFlags, filterData?: PxQueryFilterData): boolean;
        overlap(geometry: PxGeometry, pose: PxTransform, hitCall: PxOverlapCallback, filterData?: PxQueryFilterData): boolean;
        getSceneQueryStaticTimestamp(): number;
        getBroadPhaseType(): PxBroadPhaseTypeEnum;
        getBroadPhaseCaps(caps: PxBroadPhaseCaps): boolean;
        getNbBroadPhaseRegions(): number;
        getBroadPhaseRegions(userBuffer: PxBroadPhaseRegionInfo, bufferSize: number, startIndex?: number): number;
        addBroadPhaseRegion(region: PxBroadPhaseRegion, populateRegion?: boolean): number;
        removeBroadPhaseRegion(handle: number): boolean;
        lockRead(file?: string, line?: number): void;
        unlockRead(): void;
        lockWrite(file?: string, line?: number): void;
        unlockWrite(): void;
        setNbContactDataBlocks(numBlocks: number): void;
        getNbContactDataBlocksUsed(): number;
        getMaxNbContactDataBlocksUsed(): number;
        getContactReportStreamBufferSize(): number;
        setSolverBatchSize(solverBatchSize: number): void;
        getSolverBatchSize(): number;
        setSolverArticulationBatchSize(solverBatchSize: number): void;
        getSolverArticulationBatchSize(): number;
        release(): void;
        setFlag(flag: PxSceneFlagEnum, value: boolean): void;
        getFlags(): PxSceneFlags;
        setLimits(limits: PxSceneLimits): void;
        getLimits(): PxSceneLimits;
        getPhysics(): PxPhysics;
        getTimestamp(): number;
        userData: unknown;
    }
    class PxSceneDesc {
        constructor(scale: PxTolerancesScale);
        setToDefault(scale: PxTolerancesScale): void;
        isValid(): boolean;
        gravity: PxVec3;
        simulationEventCallback: PxSimulationEventCallback;
        filterShaderData: unknown;
        filterShaderDataSize: number;
        filterShader: PxSimulationFilterShader;
        kineKineFilteringMode: PxPairFilteringModeEnum;
        staticKineFilteringMode: PxPairFilteringModeEnum;
        broadPhaseType: PxBroadPhaseTypeEnum;
        limits: PxSceneLimits;
        frictionType: PxFrictionTypeEnum;
        solverType: PxSolverTypeEnum;
        bounceThresholdVelocity: number;
        frictionOffsetThreshold: number;
        ccdMaxSeparation: number;
        solverOffsetSlop: number;
        flags: PxSceneFlags;
        cpuDispatcher: PxCpuDispatcher;
        cudaContextManager: PxCudaContextManager;
        staticStructure: PxPruningStructureTypeEnum;
        dynamicStructure: PxPruningStructureTypeEnum;
        dynamicTreeRebuildRateHint: number;
        sceneQueryUpdateMode: PxSceneQueryUpdateModeEnum;
        userData: unknown;
        solverBatchSize: number;
        solverArticulationBatchSize: number;
        nbContactDataBlocks: number;
        maxBiasCoefficient: number;
        contactReportStreamBufferSize: number;
        ccdMaxPasses: number;
        ccdThreshold: number;
        wakeCounterResetValue: number;
        sanityBounds: PxBounds3;
        gpuDynamicsConfig: PxgDynamicsMemoryConfig;
        gpuMaxNumPartitions: number;
        gpuComputeVersion: number;
    }
    enum PxSceneFlagEnum {
        'ENABLE_ACTIVE_ACTORS',
        'ENABLE_CCD',
        'DISABLE_CCD_RESWEEP',
        'ADAPTIVE_FORCE',
        'ENABLE_PCM',
        'DISABLE_CONTACT_REPORT_BUFFER_RESIZE',
        'DISABLE_CONTACT_CACHE',
        'REQUIRE_RW_LOCK',
        'ENABLE_STABILIZATION',
        'ENABLE_AVERAGE_POINT',
        'EXCLUDE_KINEMATICS_FROM_ACTIVE_ACTORS',
        'ENABLE_GPU_DYNAMICS',
        'ENABLE_ENHANCED_DETERMINISM',
        'ENABLE_FRICTION_EVERY_ITERATION',
        'MUTABLE_FLAGS'
    }
    class PxSceneFlags {
        constructor(flags: number);
        isSet(flag: PxSceneFlagEnum): boolean;
        set(flag: PxSceneFlagEnum): void;
        clear(flag: PxSceneFlagEnum): void;
    }
    enum PxSceneQueryUpdateModeEnum {
        'BUILD_ENABLED_COMMIT_ENABLED',
        'BUILD_ENABLED_COMMIT_DISABLED',
        'BUILD_DISABLED_COMMIT_DISABLED'
    }
    class PxSceneLimits {
        constructor();
        setToDefault(): void;
        isValid(): boolean;
        maxNbActors: number;
        maxNbBodies: number;
        maxNbStaticShapes: number;
        maxNbDynamicShapes: number;
        maxNbAggregates: number;
        maxNbConstraints: number;
        maxNbRegions: number;
        maxNbBroadPhaseOverlaps: number;
    }
    class PxShape extends PxBase {
        getReferenceCount(): number;
        acquireReference(): void;
        getGeometryType(): PxGeometryTypeEnum;
        setGeometry(geometry: PxGeometry): void;
        getGeometry(): PxGeometryHolder;
        getBoxGeometry(geometry: PxBoxGeometry): boolean;
        getSphereGeometry(geometry: PxSphereGeometry): boolean;
        getCapsuleGeometry(geometry: PxCapsuleGeometry): boolean;
        getPlaneGeometry(geometry: PxPlaneGeometry): boolean;
        getConvexMeshGeometry(geometry: PxConvexMeshGeometry): boolean;
        getTriangleMeshGeometry(geometry: PxTriangleMeshGeometry): boolean;
        getHeightFieldGeometry(geometry: PxHeightFieldGeometry): boolean;
        getActor(): PxRigidActor;
        setMaterials(materials: PxMaterialPtr, materialCount: number): void;
        getNbMaterials(): number;
        getMaterials(userBuffer: PxMaterialPtr, bufferSize: number, startIndex: number): number;
        getMaterialFromInternalFaceIndex(faceIndex: number): PxMaterial;
        setContactOffset(contactOffset: number): void;
        getContactOffset(): number;
        setRestOffset(restOffset: number): void;
        getRestOffset(): number;
        setTorsionalPatchRadius(radius: number): void;
        getTorsionalPatchRadius(): number;
        setMinTorsionalPatchRadius(radius: number): void;
        getMinTorsionalPatchRadius(): number;
        setFlag(flag: PxShapeFlagEnum, value: boolean): void;
        setFlags(inFlags: PxShapeFlags): void;
        getFlags(): PxShapeFlags;
        isExclusive(): boolean;
        setName(name: string): void;
        getName(): string;
        setLocalPose(pose: PxTransform): void;
        getLocalPose(): PxTransform;
        setSimulationFilterData(data: PxFilterData): void;
        getSimulationFilterData(): PxFilterData;
        setQueryFilterData(data: PxFilterData): void;
        getQueryFilterData(): PxFilterData;
        userData: unknown;
    }
    enum PxShapeFlagEnum {
        'SIMULATION_SHAPE',
        'SCENE_QUERY_SHAPE',
        'TRIGGER_SHAPE',
        'VISUALIZATION'
    }
    class PxShapeFlags {
        constructor(flags: number);
        isSet(flag: PxShapeFlagEnum): boolean;
        set(flag: PxShapeFlagEnum): void;
        clear(flag: PxShapeFlagEnum): void;
    }
    class PxSimulationEventCallback {
    }
    class SimpleSimulationEventCallback extends PxSimulationEventCallback {
        onConstraintBreak(constraints: PxConstraintInfo, count: number): void;
        onWake(actors: PxActorPtr, count: number): void;
        onSleep(actors: PxActorPtr, count: number): void;
        onContact(pairHeader: PxContactPairHeader, pairs: PxContactPair, nbPairs: number): void;
        onTrigger(pairs: PxTriggerPair, count: number): void;
    }
    class JavaSimulationEventCallback {
        constructor();
        onConstraintBreak(constraints: PxConstraintInfo, count: number): void;
        onWake(actors: PxActorPtr, count: number): void;
        onSleep(actors: PxActorPtr, count: number): void;
        onContact(pairHeader: PxContactPairHeader, pairs: PxContactPair, nbPairs: number): void;
        onTrigger(pairs: PxTriggerPair, count: number): void;
    }
    class PxSimulationFilterShader {
    }
    class PxSimulationStatistics {
        nbActiveConstraints: number;
        nbActiveDynamicBodies: number;
        nbActiveKinematicBodies: number;
        nbStaticBodies: number;
        nbDynamicBodies: number;
        nbKinematicBodies: number;
        nbShapes: ReadonlyArray<number>;
        nbAggregates: number;
        nbArticulations: number;
        nbAxisSolverConstraints: number;
        compressedContactSize: number;
        requiredContactConstraintMemory: number;
        peakConstraintMemory: number;
        nbDiscreteContactPairsTotal: number;
        nbDiscreteContactPairsWithCacheHits: number;
        nbDiscreteContactPairsWithContacts: number;
        nbNewPairs: number;
        nbLostPairs: number;
        nbNewTouches: number;
        nbLostTouches: number;
        nbPartitions: number;
        nbBroadPhaseAdds: number;
        nbBroadPhaseRemoves: number;
    }
    enum PxSolverTypeEnum {
        'PGS',
        'TGS'
    }
    class PxSpatialVelocity {
        linear: PxVec3;
        angular: PxVec3;
    }
    class PxSweepBuffer10 extends PxSweepCallback {
        constructor();
        getNbAnyHits(): number;
        getAnyHit(index: number): PxSweepHit;
        getNbTouches(): number;
        getTouches(): PxSweepHit;
        getTouch(index: number): PxSweepHit;
        getMaxNbTouches(): number;
        block: PxSweepHit;
        hasBlock: boolean;
    }
    class PxSweepCallback {
        hasAnyHits(): boolean;
    }
    class PxSweepHit extends PxLocationHit {
    }
    class PxSweepQueryResult {
        getNbAnyHits(): number;
        getAnyHit(index: number): PxSweepHit;
        block: PxSweepHit;
        touches: PxSweepHit;
        nbTouches: number;
        userData: any;
        queryStatus: number;
        hasBlock: boolean;
    }
    class PxTriggerPair {
        triggerShape: PxShape;
        triggerActor: PxRigidActor;
        otherShape: PxShape;
        otherActor: PxRigidActor;
        status: PxPairFlagEnum;
        flags: PxTriggerPairFlags;
    }
    enum PxTriggerPairFlagEnum {
        'REMOVED_SHAPE_TRIGGER',
        'REMOVED_SHAPE_OTHER',
        'NEXT_FREE'
    }
    class PxTriggerPairFlags {
        constructor(flags: number);
        isSet(flag: PxTriggerPairFlagEnum): boolean;
        set(flag: PxTriggerPairFlagEnum): void;
        clear(flag: PxTriggerPairFlagEnum): void;
    }
    class PxVehicleTopLevelFunctions {
        static InitVehicleSDK(physics: PxPhysics): boolean;
        static PxVehicleComputeSprungMasses(nbSprungMasses: number, sprungMassCoordinates: PxVec3, centreOfMass: PxVec3, totalMass: number, gravityDirection: number, sprungMasses: PxRealPtr): void;
        static PxVehicleSuspensionRaycasts(batchQuery: PxBatchQuery, vehicles: Vector_PxVehicleWheels, nbSceneQueryResults: number, sceneQueryResults: PxRaycastQueryResult): void;
        static PxVehicleUpdates(timestep: number, gravity: PxVec3, vehicleDrivableSurfaceToTireFrictionPairs: PxVehicleDrivableSurfaceToTireFrictionPairs, vehicles: Vector_PxVehicleWheels, vehicleWheelQueryResults: PxVehicleWheelQueryResult): void;
        static VehicleSetBasisVectors(up: PxVec3, forward: PxVec3): void;
        static VehicleSetUpdateMode(vehicleUpdateMode: PxVehicleUpdateModeEnum): void;
        static PxVehicleTireData_getFrictionVsSlipGraph(tireData: PxVehicleTireData, m: number, n: number): number;
        static PxVehicleTireData_setFrictionVsSlipGraph(tireData: PxVehicleTireData, m: number, n: number, value: number): void;
        static DefaultWheelSceneQueryPreFilterBlocking(): PxBatchQueryPreFilterShader;
        static DefaultWheelSceneQueryPostFilterBlocking(): PxBatchQueryPostFilterShader;
    }
    class PxVehicleAckermannGeometryData {
        constructor();
        mAccuracy: number;
        mFrontWidth: number;
        mRearWidth: number;
        mAxleSeparation: number;
    }
    class PxVehicleAntiRollBarData {
        constructor();
        mWheel0: number;
        mWheel1: number;
        mStiffness: number;
    }
    class PxVehicleAutoBoxData {
        constructor();
        setLatency(latency: number): void;
        getLatency(): number;
        getUpRatios(a: PxVehicleGearEnum): number;
        setUpRatios(a: PxVehicleGearEnum, ratio: number): void;
        getDownRatios(a: PxVehicleGearEnum): number;
        setDownRatios(a: PxVehicleGearEnum, ratio: number): void;
        mUpRatios: ReadonlyArray<number>;
        mDownRatios: ReadonlyArray<number>;
    }
    class PxVehicleChassisData {
        constructor();
        mMOI: PxVec3;
        mMass: number;
        mCMOffset: PxVec3;
    }
    enum PxVehicleClutchAccuracyModeEnum {
        'ESTIMATE',
        'BEST_POSSIBLE'
    }
    class PxVehicleClutchData {
        constructor();
        mStrength: number;
        mAccuracyMode: PxVehicleClutchAccuracyModeEnum;
        mEstimateIterations: number;
    }
    class PxVehicleDifferential4WData {
        constructor();
        mFrontRearSplit: number;
        mFrontLeftRightSplit: number;
        mRearLeftRightSplit: number;
        mCentreBias: number;
        mFrontBias: number;
        mRearBias: number;
        mType: PxVehicleDifferential4WDataEnum;
    }
    enum PxVehicleDifferential4WDataEnum {
        'DIFF_TYPE_LS_4WD',
        'DIFF_TYPE_LS_FRONTWD',
        'DIFF_TYPE_LS_REARWD',
        'DIFF_TYPE_OPEN_4WD',
        'DIFF_TYPE_OPEN_FRONTWD',
        'DIFF_TYPE_OPEN_REARWD',
        'MAX_NB_DIFF_TYPES'
    }
    class PxVehicleDifferentialNWData {
        constructor();
        setDrivenWheel(wheelId: number, drivenState: boolean): void;
        getIsDrivenWheel(wheelId: number): boolean;
        getDrivenWheelStatus(): number;
        setDrivenWheelStatus(status: number): void;
    }
    class PxVehicleDrivableSurfaceToTireFrictionPairs {
        static allocate(maxNbTireTypes: number, maxNbSurfaceTypes: number): PxVehicleDrivableSurfaceToTireFrictionPairs;
        setup(nbTireTypes: number, nbSurfaceTypes: number, drivableSurfaceMaterials: PxMaterialConstPtr, drivableSurfaceTypes: PxVehicleDrivableSurfaceType): void;
        release(): void;
        setTypePairFriction(surfaceType: number, tireType: number, value: number): void;
        getTypePairFriction(surfaceType: number, tireType: number): number;
        getMaxNbSurfaceTypes(): number;
        getMaxNbTireTypes(): number;
    }
    class PxVehicleDrivableSurfaceType {
        constructor();
        mType: number;
    }
    class PxVehicleDrive extends PxVehicleWheels {
        mDriveDynData: PxVehicleDriveDynData;
    }
    class PxVehicleDrive4W extends PxVehicleDrive {
        static allocate(nbWheels: number): PxVehicleDrive4W;
        free(): void;
        setup(physics: PxPhysics, vehActor: PxRigidDynamic, wheelsData: PxVehicleWheelsSimData, driveData: PxVehicleDriveSimData4W, nbNonDrivenWheels: number): void;
        setToRestState(): void;
        mDriveSimData: PxVehicleDriveSimData4W;
    }
    enum PxVehicleDrive4WControlEnum {
        'ANALOG_INPUT_ACCEL',
        'ANALOG_INPUT_BRAKE',
        'ANALOG_INPUT_HANDBRAKE',
        'ANALOG_INPUT_STEER_LEFT',
        'ANALOG_INPUT_STEER_RIGHT',
        'MAX_NB_DRIVE4W_ANALOG_INPUTS'
    }
    class PxVehicleDriveDynData {
        setToRestState(): void;
        setAnalogInput(type: number, analogVal: number): void;
        getAnalogInput(type: number): number;
        setGearUp(digitalVal: boolean): void;
        setGearDown(digitalVal: boolean): void;
        getGearUp(): boolean;
        getGearDown(): boolean;
        setUseAutoGears(useAutoGears: boolean): void;
        getUseAutoGears(): boolean;
        toggleAutoGears(): void;
        setCurrentGear(currentGear: number): void;
        getCurrentGear(): number;
        setTargetGear(targetGear: number): void;
        getTargetGear(): number;
        startGearChange(targetGear: number): void;
        forceGearChange(targetGear: number): void;
        setEngineRotationSpeed(speed: number): void;
        getEngineRotationSpeed(): number;
        getGearSwitchTime(): number;
        getAutoBoxSwitchTime(): number;
        getNbAnalogInput(): number;
        setGearChange(gearChange: number): void;
        getGearChange(): number;
        setGearSwitchTime(switchTime: number): void;
        setAutoBoxSwitchTime(autoBoxSwitchTime: number): void;
        mControlAnalogVals: ReadonlyArray<number>;
        mUseAutoGears: boolean;
        mGearUpPressed: boolean;
        mGearDownPressed: boolean;
        mCurrentGear: number;
        mTargetGear: number;
        mEnginespeed: number;
        mGearSwitchTime: number;
        mAutoBoxSwitchTime: number;
    }
    class PxVehicleDriveNW extends PxVehicleDrive {
        static allocate(nbWheels: number): PxVehicleDriveNW;
        free(): void;
        setup(physics: PxPhysics, vehActor: PxRigidDynamic, wheelsData: PxVehicleWheelsSimData, driveData: PxVehicleDriveSimDataNW, nbWheels: number): void;
        setToRestState(): void;
        mDriveSimData: PxVehicleDriveSimDataNW;
    }
    class PxVehicleDriveSimData {
        constructor();
        getEngineData(): PxVehicleEngineData;
        setEngineData(engine: PxVehicleEngineData): void;
        getGearsData(): PxVehicleGearsData;
        setGearsData(gears: PxVehicleGearsData): void;
        getClutchData(): PxVehicleClutchData;
        setClutchData(clutch: PxVehicleClutchData): void;
        getAutoBoxData(): PxVehicleAutoBoxData;
        setAutoBoxData(clutch: PxVehicleAutoBoxData): void;
    }
    class PxVehicleDriveSimData4W extends PxVehicleDriveSimData {
        constructor();
        getDiffData(): PxVehicleDifferential4WData;
        getAckermannGeometryData(): PxVehicleAckermannGeometryData;
        setDiffData(diff: PxVehicleDifferential4WData): void;
        setAckermannGeometryData(ackermannData: PxVehicleAckermannGeometryData): void;
    }
    class PxVehicleDriveSimDataNW extends PxVehicleDriveSimData {
        constructor();
        getDiffData(): PxVehicleDifferentialNWData;
        setDiffData(diff: PxVehicleDifferentialNWData): void;
    }
    class PxVehicleDriveTank extends PxVehicleDrive {
        static allocate(nbWheels: number): PxVehicleDriveTank;
        free(): void;
        setup(physics: PxPhysics, vehActor: PxRigidDynamic, wheelsData: PxVehicleWheelsSimData, driveData: PxVehicleDriveSimData, nbDrivenWheels: number): void;
        setDriveModel(driveModel: PxVehicleDriveTankControlModelEnum): void;
        getDriveModel(): PxVehicleDriveTankControlModelEnum;
        setToRestState(): void;
        mDriveSimData: PxVehicleDriveSimData;
    }
    enum PxVehicleDriveTankControlModelEnum {
        'STANDARD',
        'SPECIAL'
    }
    class PxVehicleEngineData {
        constructor();
        mTorqueCurve: PxEngineTorqueLookupTable;
        mMOI: number;
        mPeakTorque: number;
        mMaxOmega: number;
        mDampingRateFullThrottle: number;
        mDampingRateZeroThrottleClutchEngaged: number;
        mDampingRateZeroThrottleClutchDisengaged: number;
    }
    class PxEngineTorqueLookupTable {
        constructor();
        addPair(x: number, y: number): void;
        getYVal(x: number): number;
        getNbDataPairs(): number;
        clear(): void;
        getX(i: number): number;
        getY(i: number): number;
        mDataPairs: ReadonlyArray<number>;
        mNbDataPairs: number;
    }
    class PxVehicleGearsData {
        constructor();
        getGearRatio(a: PxVehicleGearEnum): number;
        setGearRatio(a: PxVehicleGearEnum, ratio: number): void;
        mRatios: ReadonlyArray<number>;
        mFinalRatio: number;
        mNbRatios: number;
        mSwitchTime: number;
    }
    enum PxVehicleGearEnum {
        'REVERSE',
        'NEUTRAL',
        'FIRST',
        'SECOND',
        'THIRD',
        'FOURTH',
        'FIFTH',
        'SIXTH',
        'SEVENTH',
        'EIGHTH',
        'NINTH',
        'TENTH',
        'ELEVENTH',
        'TWELFTH',
        'THIRTEENTH',
        'FOURTEENTH',
        'FIFTEENTH',
        'SIXTEENTH',
        'SEVENTEENTH',
        'EIGHTEENTH',
        'NINETEENTH',
        'TWENTIETH',
        'TWENTYFIRST',
        'TWENTYSECOND',
        'TWENTYTHIRD',
        'TWENTYFOURTH',
        'TWENTYFIFTH',
        'TWENTYSIXTH',
        'TWENTYSEVENTH',
        'TWENTYEIGHTH',
        'TWENTYNINTH',
        'THIRTIETH',
        'GEARSRATIO_COUNT'
    }
    class PxVehicleNoDrive extends PxVehicleWheels {
        static allocate(nbWheels: number): PxVehicleNoDrive;
        free(): void;
        setup(physics: PxPhysics, vehActor: PxRigidDynamic, wheelsData: PxVehicleWheelsSimData): void;
        setToRestState(): void;
        setBrakeTorque(id: number, brakeTorque: number): void;
        setDriveTorque(id: number, driveTorque: number): void;
        setSteerAngle(id: number, steerAngle: number): void;
        getBrakeTorque(id: number): number;
        getDriveTorque(id: number): number;
        getSteerAngle(id: number): number;
        getNbSteerAngle(): number;
        getNbDriveTorque(): number;
        getNbBrakeTorque(): number;
    }
    class PxVehicleSuspensionData {
        constructor();
        setMassAndPreserveNaturalFrequency(newSprungMass: number): void;
        mSpringStrength: number;
        mSpringDamperRate: number;
        mMaxCompression: number;
        mMaxDroop: number;
        mSprungMass: number;
        mCamberAtRest: number;
        mCamberAtMaxCompression: number;
        mCamberAtMaxDroop: number;
    }
    class PxVehicleTireData {
        constructor();
        mLatStiffX: number;
        mLatStiffY: number;
        mLongitudinalStiffnessPerUnitGravity: number;
        mCamberStiffnessPerUnitGravity: number;
        mType: number;
    }
    class PxVehicleTireLoadFilterData {
        constructor();
        getDenominator(): number;
        mMinNormalisedLoad: number;
        mMinFilteredNormalisedLoad: number;
        mMaxNormalisedLoad: number;
        mMaxFilteredNormalisedLoad: number;
    }
    enum PxVehicleUpdateModeEnum {
        'VELOCITY_CHANGE',
        'ACCELERATION'
    }
    class PxVehicleWheelData {
        constructor();
        mRadius: number;
        mWidth: number;
        mMass: number;
        mMOI: number;
        mDampingRate: number;
        mMaxBrakeTorque: number;
        mMaxHandBrakeTorque: number;
        mMaxSteer: number;
        mToeAngle: number;
    }
    class PxVehicleWheelQueryResult {
        constructor();
        wheelQueryResults: PxWheelQueryResult;
        nbWheelQueryResults: number;
    }
    class PxVehicleWheels extends PxBase {
        getVehicleType(): number;
        getRigidDynamicActor(): PxRigidDynamic;
        computeForwardSpeed(): number;
        computeSidewaysSpeed(): number;
        getNbNonDrivenWheels(): number;
        mWheelsSimData: PxVehicleWheelsSimData;
        mWheelsDynData: PxVehicleWheelsDynData;
    }
    class PxVehicleWheelsDynData {
        setToRestState(): void;
        setWheelRotationSpeed(wheelIdx: number, speed: number): void;
        getWheelRotationSpeed(wheelIdx: number): number;
        setWheelRotationAngle(wheelIdx: number, angle: number): void;
        getWheelRotationAngle(wheelIdx: number): number;
        copy(src: PxVehicleWheelsDynData, srcWheel: number, trgWheel: number): void;
        getNbWheelRotationSpeed(): number;
        getNbWheelRotationAngle(): number;
    }
    class PxVehicleWheelsSimData {
        static allocate(nbWheels: number): PxVehicleWheelsSimData;
        setChassisMass(chassisMass: number): void;
        free(): void;
        copy(src: PxVehicleWheelsSimData, srcWheel: number, trgWheel: number): void;
        getNbWheels(): number;
        getSuspensionData(id: number): PxVehicleSuspensionData;
        getWheelData(id: number): PxVehicleWheelData;
        getTireData(id: number): PxVehicleTireData;
        getSuspTravelDirection(id: number): PxVec3;
        getSuspForceAppPointOffset(id: number): PxVec3;
        getTireForceAppPointOffset(id: number): PxVec3;
        getWheelCentreOffset(id: number): PxVec3;
        getWheelShapeMapping(wheelId: number): number;
        getSceneQueryFilterData(suspId: number): PxFilterData;
        getNbAntiRollBars(): number;
        getAntiRollBarData(antiRollId: number): PxVehicleAntiRollBarData;
        getTireLoadFilterData(): PxVehicleTireLoadFilterData;
        setSuspensionData(id: number, susp: PxVehicleSuspensionData): void;
        setWheelData(id: number, wheel: PxVehicleWheelData): void;
        setTireData(id: number, tire: PxVehicleTireData): void;
        setSuspTravelDirection(id: number, dir: PxVec3): void;
        setSuspForceAppPointOffset(id: number, offset: PxVec3): void;
        setTireForceAppPointOffset(id: number, offset: PxVec3): void;
        setWheelCentreOffset(id: number, offset: PxVec3): void;
        setWheelShapeMapping(wheelId: number, shapeId: number): void;
        setSceneQueryFilterData(suspId: number, sqFilterData: PxFilterData): void;
        setTireLoadFilterData(tireLoadFilter: PxVehicleTireLoadFilterData): void;
        addAntiRollBarData(antiRoll: PxVehicleAntiRollBarData): number;
        disableWheel(wheel: number): void;
        enableWheel(wheel: number): void;
        getIsWheelDisabled(wheel: number): boolean;
        setSubStepCount(thresholdLongitudinalSpeed: number, lowForwardSpeedSubStepCount: number, highForwardSpeedSubStepCount: number): void;
        setMinLongSlipDenominator(minLongSlipDenominator: number): void;
        setFlags(flags: PxVehicleWheelsSimFlags): void;
        getFlags(): PxVehicleWheelsSimFlags;
        getNbWheels4(): number;
        getNbSuspensionData(): number;
        getNbWheelData(): number;
        getNbSuspTravelDirection(): number;
        getNbTireData(): number;
        getNbSuspForceAppPointOffset(): number;
        getNbTireForceAppPointOffset(): number;
        getNbWheelCentreOffset(): number;
        getNbWheelShapeMapping(): number;
        getNbSceneQueryFilterData(): number;
        getMinLongSlipDenominator(): number;
        setThresholdLongSpeed(f: number): void;
        getThresholdLongSpeed(): number;
        setLowForwardSpeedSubStepCount(f: number): void;
        getLowForwardSpeedSubStepCount(): number;
        setHighForwardSpeedSubStepCount(f: number): void;
        getHighForwardSpeedSubStepCount(): number;
        setWheelEnabledState(wheel: number, state: boolean): void;
        getWheelEnabledState(wheel: number): boolean;
        getNbWheelEnabledState(): number;
        getNbAntiRollBars4(): number;
        getNbAntiRollBarData(): number;
        setAntiRollBarData(id: number, antiRoll: PxVehicleAntiRollBarData): void;
    }
    enum PxVehicleWheelsSimFlagEnum {
        'LIMIT_SUSPENSION_EXPANSION_VELOCITY'
    }
    class PxVehicleWheelsSimFlags {
        constructor(flags: number);
        isSet(flag: PxVehicleWheelsSimFlagEnum): boolean;
        set(flag: PxVehicleWheelsSimFlagEnum): void;
        clear(flag: PxVehicleWheelsSimFlagEnum): void;
    }
    class PxWheelQueryResult {
        constructor();
        suspLineStart: PxVec3;
        suspLineDir: PxVec3;
        suspLineLength: number;
        isInAir: boolean;
        tireContactActor: PxActor;
        tireContactShape: PxShape;
        tireSurfaceMaterial: PxMaterial;
        tireSurfaceType: number;
        tireContactPoint: PxVec3;
        tireContactNormal: PxVec3;
        tireFriction: number;
        suspJounce: number;
        suspSpringForce: number;
        tireLongitudinalDir: PxVec3;
        tireLateralDir: PxVec3;
        longitudinalSlip: number;
        lateralSlip: number;
        steerAngle: number;
        localPose: PxTransform;
    }
    enum VehicleSurfaceTypeMask {
        'DRIVABLE_SURFACE',
        'UNDRIVABLE_SURFACE'
    }
    class PxBoxGeometry extends PxGeometry {
        constructor(hx: number, hy: number, hz: number);
    }
    class PxBVHStructure extends PxBase {
    }
    class PxCapsuleGeometry extends PxGeometry {
        constructor(radius: number, halfHeight: number);
    }
    class PxConvexMesh extends PxBase {
        getNbVertices(): number;
        getVertices(): PxVec3;
        getIndexBuffer(): PxU8ConstPtr;
        getNbPolygons(): number;
        getPolygonData(index: number, data: PxHullPolygon): boolean;
        getReferenceCount(): number;
        acquireReference(): void;
        getLocalBounds(): PxBounds3;
        isGpuCompatible(): boolean;
    }
    class PxConvexMeshGeometry extends PxGeometry {
        constructor(mesh: PxConvexMesh, scaling?: PxMeshScale, flags?: PxConvexMeshGeometryFlags);
    }
    enum PxConvexMeshGeometryFlagEnum {
        'TIGHT_BOUNDS'
    }
    class PxConvexMeshGeometryFlags {
        constructor(flags: number);
        isSet(flag: PxConvexMeshGeometryFlagEnum): boolean;
        set(flag: PxConvexMeshGeometryFlagEnum): void;
        clear(flag: PxConvexMeshGeometryFlagEnum): void;
    }
    class PxGeometry {
        getType(): PxGeometryTypeEnum;
    }
    class PxGeometryHolder {
        constructor();
        constructor(geometry: PxGeometry);
        getType(): PxGeometryTypeEnum;
        sphere(): PxSphereGeometry;
        plane(): PxPlaneGeometry;
        capsule(): PxCapsuleGeometry;
        box(): PxBoxGeometry;
        convexMesh(): PxConvexMeshGeometry;
        triangleMesh(): PxTriangleMeshGeometry;
        heightField(): PxHeightFieldGeometry;
        storeAny(geometry: PxGeometry): void;
    }
    class PxGeometryQuery {
        static sweep(unitDir: PxVec3, maxDist: number, geom0: PxGeometry, pose0: PxTransform, geom1: PxGeometry, pose1: PxTransform, sweepHit: PxSweepHit, hitFlags?: PxHitFlags, inflation?: number): boolean;
        static overlap(geom0: PxGeometry, pose0: PxTransform, geom1: PxGeometry, pose1: PxTransform): boolean;
        static raycast(origin: PxVec3, unitDir: PxVec3, geom: PxGeometry, pose: PxTransform, maxDist: number, hitFlags: PxHitFlags, maxHits: number, rayHits: PxRaycastHit): number;
        static pointDistance(point: PxVec3, geom: PxGeometry, pose: PxTransform, closestPoint?: PxVec3): number;
        static getWorldBounds(geom: PxGeometry, pose: PxTransform, inflation?: number): PxBounds3;
        static isValid(geom: PxGeometry): boolean;
    }
    enum PxGeometryTypeEnum {
        'SPHERE',
        'PLANE',
        'CAPSULE',
        'BOX',
        'CONVEXMESH',
        'TRIANGLEMESH',
        'HEIGHTFIELD'
    }
    class PxHeightField extends PxBase {
        saveCells(destBuffer: unknown, destBufferSize: number): number;
        modifySamples(startCol: number, startRow: number, subfieldDesc: PxHeightFieldDesc, shrinkBounds?: boolean): boolean;
        getNbRows(): number;
        getNbColumns(): number;
        getFormat(): PxHeightFieldFormatEnum;
        getSampleStride(): number;
        getConvexEdgeThreshold(): number;
        getFlags(): PxHeightFieldFlags;
        getHeight(x: number, z: number): number;
        getReferenceCount(): number;
        acquireReference(): void;
        getTriangleMaterialIndex(triangleIndex: number): number;
        getTriangleNormal(triangleIndex: number): PxVec3;
        getSample(row: number, column: number): PxHeightFieldSample;
        getTimestamp(): number;
    }
    class PxHeightFieldDesc {
        constructor();
        setToDefault(): void;
        isValid(): boolean;
        nbRows: number;
        nbColumns: number;
        format: PxHeightFieldFormatEnum;
        samples: PxStridedData;
        convexEdgeThreshold: number;
        flags: PxHeightFieldFlags;
    }
    class PxHeightFieldFlags {
        constructor(flags: number);
        isSet(flag: PxHeightFieldFlagEnum): boolean;
        set(flag: PxHeightFieldFlagEnum): void;
        clear(flag: PxHeightFieldFlagEnum): void;
    }
    enum PxHeightFieldFlagEnum {
        'NO_BOUNDARY_EDGES'
    }
    enum PxHeightFieldFormatEnum {
        'S16_TM'
    }
    class PxHeightFieldGeometry extends PxGeometry {
        constructor();
        constructor(hf: PxHeightField, flags: PxMeshGeometryFlags, heightScale: number, rowScale: number, columnScale: number);
        isValid(): boolean;
        heightField: PxHeightField;
        heightScale: number;
        rowScale: number;
        columnScale: number;
        heightFieldFlags: PxMeshGeometryFlags;
    }
    class PxHeightFieldSample {
        height: number;
        materialIndex0: number;
        materialIndex1: number;
    }
    class PxHullPolygon {
        constructor();
        mPlane: ReadonlyArray<number>;
        mNbVerts: number;
        mIndexBase: number;
    }
    enum PxMeshFlagEnum {
        'FLIPNORMALS',
        '16_BIT_INDICES'
    }
    class PxMeshFlags {
        constructor(flags: number);
        isSet(flag: PxMeshFlagEnum): boolean;
        set(flag: PxMeshFlagEnum): void;
        clear(flag: PxMeshFlagEnum): void;
    }
    enum PxMeshGeometryFlagEnum {
        'DOUBLE_SIDED'
    }
    class PxMeshGeometryFlags {
        constructor(flags: number);
        isSet(flag: PxMeshGeometryFlagEnum): boolean;
        set(flag: PxMeshGeometryFlagEnum): void;
        clear(flag: PxMeshGeometryFlagEnum): void;
    }
    class PxMeshScale {
        constructor();
        constructor(r: number);
        constructor(s: PxVec3, r: PxQuat);
    }
    class PxPlaneGeometry extends PxGeometry {
        constructor();
    }
    class PxSimpleTriangleMesh {
        constructor();
        setToDefault(): void;
        isValid(): boolean;
        points: PxBoundedData;
        triangles: PxBoundedData;
        flags: PxMeshFlags;
    }
    class PxSphereGeometry extends PxGeometry {
        constructor(ir: number);
    }
    class PxTriangle {
        constructor();
        constructor(p0: PxVec3, p1: PxVec3, p2: PxVec3);
        normal(normal: PxVec3): void;
        denormalizedNormal(normal: PxVec3): void;
        area(): number;
        pointFromUV(u: number, v: number): PxVec3;
    }
    class PxTriangleMesh extends PxBase {
        getNbVertices(): number;
        getVertices(): PxVec3;
        getVerticesForModification(): PxVec3;
        refitBVH(): PxBounds3;
        getNbTriangles(): number;
        getTriangles(): unknown;
        getTriangleMeshFlags(): PxTriangleMeshFlags;
        getTrianglesRemap(): PxU32ConstPtr;
        getTriangleMaterialIndex(triangleIndex: number): number;
        getLocalBounds(): PxBounds3;
        getReferenceCount(): number;
        acquireReference(): void;
    }
    enum PxTriangleMeshFlagEnum {
        '16_BIT_INDICES',
        'ADJACENCY_INFO'
    }
    class PxTriangleMeshFlags {
        constructor(flags: number);
        isSet(flag: PxTriangleMeshFlagEnum): boolean;
        set(flag: PxTriangleMeshFlagEnum): void;
        clear(flag: PxTriangleMeshFlagEnum): void;
    }
    class PxTriangleMeshGeometry extends PxGeometry {
        constructor(mesh: PxTriangleMesh, scaling?: PxMeshScale, flags?: PxMeshGeometryFlags);
        isValid(): boolean;
    }
    class PxBVH33MidphaseDesc {
        setToDefault(): void;
        isValid(): boolean;
        meshSizePerformanceTradeOff: number;
        meshCookingHint: PxMeshCookingHintEnum;
    }
    class PxBVH34MidphaseDesc {
        setToDefault(): void;
        isValid(): boolean;
        numPrimsPerLeaf: number;
    }
    enum PxConvexFlagEnum {
        '16_BIT_INDICES',
        'COMPUTE_CONVEX',
        'CHECK_ZERO_AREA_TRIANGLES',
        'QUANTIZE_INPUT',
        'DISABLE_MESH_VALIDATION',
        'PLANE_SHIFTING',
        'FAST_INERTIA_COMPUTATION',
        'GPU_COMPATIBLE',
        'SHIFT_VERTICES'
    }
    class PxConvexFlags {
        constructor(flags: number);
        isSet(flag: PxConvexFlagEnum): boolean;
        set(flag: PxConvexFlagEnum): void;
        clear(flag: PxConvexFlagEnum): void;
    }
    class PxConvexMeshDesc {
        constructor();
        points: PxBoundedData;
        flags: PxConvexFlags;
    }
    enum PxConvexMeshCookingTypeEnum {
        'QUICKHULL'
    }
    class PxCooking {
        release(): void;
        createConvexMesh(desc: PxConvexMeshDesc, insertionCallback: PxPhysicsInsertionCallback): PxConvexMesh;
        createTriangleMesh(desc: PxTriangleMeshDesc, insertionCallback: PxPhysicsInsertionCallback): PxTriangleMesh;
        createHeightField(desc: PxHeightFieldDesc, insertionCallback: PxPhysicsInsertionCallback): PxHeightField;
    }
    class PxCookingParams {
        constructor(sc: PxTolerancesScale);
        areaTestEpsilon: number;
        planeTolerance: number;
        convexMeshCookingType: PxConvexMeshCookingTypeEnum;
        suppressTriangleMeshRemapTable: boolean;
        buildTriangleAdjacencies: boolean;
        buildGPUData: boolean;
        scale: PxTolerancesScale;
        meshPreprocessParams: PxMeshPreprocessingFlags;
        meshWeldTolerance: number;
        midphaseDesc: PxMidphaseDesc;
        gaussMapLimit: number;
    }
    enum PxMeshCookingHintEnum {
        'SIM_PERFORMANCE',
        'COOKING_PERFORMANCE'
    }
    enum PxMeshPreprocessingFlagEnum {
        'WELD_VERTICES',
        'DISABLE_CLEAN_MESH',
        'DISABLE_ACTIVE_EDGES_PRECOMPUTE',
        'FORCE_32BIT_INDICES'
    }
    class PxMeshPreprocessingFlags {
        constructor(flags: number);
        isSet(flag: PxMeshPreprocessingFlagEnum): boolean;
        set(flag: PxMeshPreprocessingFlagEnum): void;
        clear(flag: PxMeshPreprocessingFlagEnum): void;
    }
    class PxMidphaseDesc {
        constructor();
        getType(): PxMeshMidPhaseEnum;
        setToDefault(type: PxMeshMidPhaseEnum): void;
        isValid(): boolean;
        mBVH33Desc: PxBVH33MidphaseDesc;
        mBVH34Desc: PxBVH34MidphaseDesc;
    }
    enum PxMeshMidPhaseEnum {
        'BVH33',
        'BVH34'
    }
    class PxTriangleMeshDesc extends PxSimpleTriangleMesh {
        constructor();
        setToDefault(): void;
        isValid(): boolean;
        materialIndices: PxU16StridedData;
    }
    class PxBase {
        release(): void;
        getConcreteTypeName(): string;
        getConcreteType(): number;
        setBaseFlag(flag: PxBaseFlagEnum, value: boolean): void;
        setBaseFlags(inFlags: PxBaseFlags): void;
        getBaseFlags(): PxBaseFlags;
        isReleasable(): boolean;
    }
    enum PxBaseFlagEnum {
        'OWNS_MEMORY',
        'IS_RELEASABLE'
    }
    class PxBaseFlags {
        constructor(flags: number);
        isSet(flag: PxBaseFlagEnum): boolean;
        set(flag: PxBaseFlagEnum): void;
        clear(flag: PxBaseFlagEnum): void;
    }
    class PxBaseTask {
    }
    class PxBoundedData {
        constructor();
        count: number;
        stride: number;
        data: unknown;
    }
    class PxBounds3 {
        constructor();
        constructor(minimum: PxVec3, maximum: PxVec3);
        setEmpty(): void;
        setMaximal(): void;
        include(v: PxVec3): void;
        isEmpty(): boolean;
        intersects(b: PxBounds3): boolean;
        intersects1D(b: PxBounds3, axis: number): boolean;
        contains(v: PxVec3): boolean;
        isInside(box: PxBounds3): boolean;
        getCenter(): PxVec3;
        getDimensions(): PxVec3;
        getExtents(): PxVec3;
        scaleSafe(scale: number): void;
        scaleFast(scale: number): void;
        fattenSafe(distance: number): void;
        fattenFast(distance: number): void;
        isFinite(): boolean;
        isValid(): boolean;
        minimum: PxVec3;
        maximum: PxVec3;
    }
    class PxCollection {
        add(obj: PxBase, id?: number): void;
        remove(obj: PxBase): void;
        contains(obj: PxBase): boolean;
        addId(obj: PxBase, id: number): void;
        removeId(id: number): void;
        getNbObjects(): number;
        getObject(index: number): PxBase;
        find(id: number): PxBase;
        getNbIds(): number;
        getId(obj: PxBase): number;
        release(): void;
    }
    class PxCpuDispatcher {
    }
    class PxCudaContextManager {
        contextIsValid(): boolean;
        supportsArchSM10(): boolean;
        supportsArchSM11(): boolean;
        supportsArchSM12(): boolean;
        supportsArchSM13(): boolean;
        supportsArchSM20(): boolean;
        supportsArchSM30(): boolean;
        supportsArchSM35(): boolean;
        supportsArchSM50(): boolean;
        supportsArchSM52(): boolean;
        isIntegrated(): boolean;
        canMapHostMemory(): boolean;
        getDriverVersion(): number;
        getDeviceTotalMemBytes(): number;
        getMultiprocessorCount(): number;
        getClockRate(): number;
        getSharedMemPerBlock(): number;
        getMaxThreadsPerBlock(): number;
        getDeviceName(): string;
        getInteropMode(): PxCudaInteropModeEnum;
        setUsingConcurrentStreams(flag: boolean): void;
        getUsingConcurrentStreams(): boolean;
        usingDedicatedGPU(): number;
        release(): void;
    }
    class PxCudaContextManagerDesc {
        constructor();
        graphicsDevice: unknown;
        interopMode: PxCudaInteropModeEnum;
        maxMemorySize: ReadonlyArray<number>;
        memoryBaseSize: ReadonlyArray<number>;
        memoryPageSize: ReadonlyArray<number>;
    }
    enum PxCudaBufferMemorySpaceEnum {
        'PxCudaBufferMemorySpaceEnum::T_GPU',
        'PxCudaBufferMemorySpaceEnum::T_PINNED_HOST',
        'PxCudaBufferMemorySpaceEnum::T_WRITE_COMBINED',
        'PxCudaBufferMemorySpaceEnum::T_HOST'
    }
    enum PxCudaInteropModeEnum {
        'PxCudaInteropModeEnum::NO_INTEROP',
        'PxCudaInteropModeEnum::D3D10_INTEROP',
        'PxCudaInteropModeEnum::D3D11_INTEROP',
        'PxCudaInteropModeEnum::OGL_INTEROP'
    }
    class PxDefaultErrorCallback extends PxErrorCallback {
        constructor();
    }
    class PxErrorCallback {
        reportError(code: PxErrorCodeEnum, message: string, file: string, line: number): void;
    }
    class JavaErrorCallback {
        constructor();
        reportError(code: PxErrorCodeEnum, message: string, file: string, line: number): void;
    }
    enum PxErrorCodeEnum {
        'NO_ERROR',
        'DEBUG_INFO',
        'DEBUG_WARNING',
        'INVALID_PARAMETER',
        'INVALID_OPERATION',
        'OUT_OF_MEMORY',
        'INTERNAL_ERROR',
        'ABORT',
        'PERF_WARNING',
        'MASK_ALL'
    }
    class PxFoundation {
        release(): void;
    }
    enum PxIDENTITYEnum {
        'PxIDENTITYEnum::PxIdentity'
    }
    class PxInputData {
    }
    class PxOutputStream {
    }
    class PxPhysicsInsertionCallback {
    }
    class PxQuat {
        constructor();
        constructor(r: PxIDENTITYEnum);
        constructor(x: number, y: number, z: number, w: number);
        x: number;
        y: number;
        z: number;
        w: number;
    }
    class PxTolerancesScale {
        constructor();
    }
    class PxTransform {
        constructor();
        constructor(r: PxIDENTITYEnum);
        constructor(p0: PxVec3, q0: PxQuat);
        q: PxQuat;
        p: PxVec3;
    }
    class PxStridedData {
        stride: number;
        data: unknown;
    }
    class PxU16StridedData {
        stride: number;
        data: PxU16ConstPtr;
    }
    class PxVec3 {
        constructor();
        constructor(x: number, y: number, z: number);
        x: number;
        y: number;
        z: number;
    }
    class PxCollectionExt {
        static releaseObjects(collection: PxCollection, releaseExclusiveShapes?: boolean): void;
        static remove(collection: PxCollection, concreteType: number, to?: PxCollection): void;
        static createCollection(scene: PxScene): PxCollection;
    }
    enum PxD6AxisEnum {
        'X',
        'Y',
        'Z',
        'TWIST',
        'SWING1',
        'SWING2',
        'COUNT'
    }
    enum PxD6DriveEnum {
        'X',
        'Y',
        'Z',
        'SWING',
        'TWIST',
        'SLERP',
        'COUNT'
    }
    class PxD6Joint extends PxJoint {
        setMotion(axis: PxD6AxisEnum, type: PxD6MotionEnum): void;
        getMotion(axis: PxD6AxisEnum): PxD6MotionEnum;
        getTwistAngle(): number;
        getSwingYAngle(): number;
        getSwingZAngle(): number;
        setDistanceLimit(limit: PxJointLinearLimit): void;
        setLinearLimit(axis: PxD6AxisEnum, limit: PxJointLinearLimitPair): void;
        setTwistLimit(limit: PxJointAngularLimitPair): void;
        setSwingLimit(limit: PxJointLimitCone): void;
        setPyramidSwingLimit(limit: PxJointLimitPyramid): void;
        setDrive(index: PxD6DriveEnum, drive: PxD6JointDrive): void;
        getDrive(index: PxD6DriveEnum): PxD6JointDrive;
        setDrivePosition(pose: PxTransform, autowake?: boolean): void;
        getDrivePosition(): PxTransform;
        setDriveVelocity(linear: PxVec3, angular: PxVec3): void;
        getDriveVelocity(linear: PxVec3, angular: PxVec3): void;
        setProjectionLinearTolerance(tolerance: number): void;
        getProjectionLinearTolerance(): number;
        setProjectionAngularTolerance(tolerance: number): void;
        getProjectionAngularTolerance(): number;
    }
    class PxD6JointDrive extends PxSpring {
        constructor();
        constructor(driveStiffness: number, driveDamping: number, driveForceLimit: number, isAcceleration?: boolean);
        forceLimit: number;
        flags: PxD6JointDriveFlags;
    }
    enum PxD6JointDriveFlagEnum {
        'ACCELERATION'
    }
    class PxD6JointDriveFlags {
        constructor(flags: number);
        isSet(flag: PxD6JointDriveFlagEnum): boolean;
        set(flag: PxD6JointDriveFlagEnum): void;
        clear(flag: PxD6JointDriveFlagEnum): void;
    }
    enum PxD6MotionEnum {
        'LOCKED',
        'LIMITED',
        'FREE'
    }
    class PxDefaultAllocator {
        constructor();
    }
    class PxDefaultCpuDispatcher extends PxCpuDispatcher {
    }
    class PxDefaultMemoryInputData extends PxInputData {
        constructor(data: PxU8Ptr, length: number);
        read(dest: unknown, count: number): number;
        getLength(): number;
        seek(pos: number): void;
        tell(): number;
    }
    class PxDefaultMemoryOutputStream extends PxOutputStream {
        constructor();
        write(src: unknown, count: number): void;
        getSize(): number;
        getData(): unknown;
    }
    class PxDistanceJoint extends PxJoint {
        getDistance(): number;
        setMinDistance(distance: number): void;
        getMinDistance(): number;
        setMaxDistance(distance: number): void;
        getMaxDistance(): number;
        setTolerance(tolerance: number): void;
        getTolerance(): number;
        setStiffness(stiffness: number): void;
        getStiffness(): number;
        setDamping(damping: number): void;
        getDamping(): number;
        setDistanceJointFlags(flags: PxDistanceJointFlags): void;
        setDistanceJointFlag(flag: PxDistanceJointFlagEnum, value: boolean): void;
        getDistanceJointFlags(): PxDistanceJointFlags;
    }
    enum PxDistanceJointFlagEnum {
        'MAX_DISTANCE_ENABLED',
        'MIN_DISTANCE_ENABLED',
        'SPRING_ENABLED'
    }
    class PxDistanceJointFlags {
        constructor(flags: number);
        isSet(flag: PxDistanceJointFlagEnum): boolean;
        set(flag: PxDistanceJointFlagEnum): void;
        clear(flag: PxDistanceJointFlagEnum): void;
    }
    class PxFixedJoint extends PxJoint {
        setProjectionLinearTolerance(tolerance: number): void;
        getProjectionLinearTolerance(): number;
        setProjectionAngularTolerance(tolerance: number): void;
        getProjectionAngularTolerance(): number;
    }
    class PxJoint extends PxBase {
        setActors(actor0: PxRigidActor, actor1: PxRigidActor): void;
        setLocalPose(actor: PxJointActorIndexEnum, localPose: PxTransform): void;
        getLocalPose(actor: PxJointActorIndexEnum): PxTransform;
        getRelativeTransform(): PxTransform;
        getRelativeLinearVelocity(): PxVec3;
        getRelativeAngularVelocity(): PxVec3;
        setBreakForce(force: number, torque: number): void;
        setConstraintFlags(flags: PxConstraintFlags): void;
        setConstraintFlag(flag: PxConstraintFlagEnum, value: boolean): void;
        getConstraintFlags(): PxConstraintFlags;
        setInvMassScale0(invMassScale: number): void;
        getInvMassScale0(): number;
        setInvMassScale1(invMassScale: number): void;
        getInvMassScale1(): number;
        getConstraint(): PxConstraint;
        setName(name: string): void;
        getName(): string;
        release(): void;
        getScene(): PxScene;
        userData: unknown;
    }
    enum PxJointActorIndexEnum {
        'ACTOR0',
        'ACTOR1',
        'PxJointActorIndexEnum::COUNT'
    }
    class PxJointAngularLimitPair extends PxJointLimitParameters {
        constructor(lowerLimit: number, upperLimit: number, spring: PxSpring);
        upper: number;
        lower: number;
    }
    class PxJointLimitCone extends PxJointLimitParameters {
        constructor(yLimitAngle: number, zLimitAngle: number, spring: PxSpring);
        yAngle: number;
        zAngle: number;
    }
    class PxJointLimitParameters {
        isValid(): boolean;
        isSoft(): boolean;
        restitution: number;
        bounceThreshold: number;
        stiffness: number;
        damping: number;
        contactDistance: number;
    }
    class PxJointLimitPyramid extends PxJointLimitParameters {
        constructor(yLimitAngleMin: number, yLimitAngleMax: number, zLimitAngleMin: number, zLimitAngleMax: number, spring: PxSpring);
        yAngleMin: number;
        yAngleMax: number;
        zAngleMin: number;
        zAngleMax: number;
    }
    class PxJointLinearLimit {
        constructor(extent: number, spring: PxSpring);
        value: number;
    }
    class PxJointLinearLimitPair extends PxJointLimitParameters {
        constructor(lowerLimit: number, upperLimit: number, spring: PxSpring);
        upper: number;
        lower: number;
    }
    class PxMeshOverlapUtil {
        constructor();
        findOverlap(geom: PxGeometry, geomPose: PxTransform, meshGeom: PxTriangleMeshGeometry, meshPose: PxTransform): number;
        getResults(): PxU32ConstPtr;
        getNbResults(): number;
    }
    class PxPrismaticJoint extends PxJoint {
        getPosition(): number;
        getVelocity(): number;
        setLimit(limit: PxJointLinearLimitPair): void;
        setPrismaticJointFlags(flags: PxPrismaticJointFlags): void;
        setPrismaticJointFlag(flag: PxPrismaticJointFlagEnum, value: boolean): void;
        getPrismaticJointFlags(): PxPrismaticJointFlags;
        setProjectionLinearTolerance(tolerance: number): void;
        getProjectionLinearTolerance(): number;
        setProjectionAngularTolerance(tolerance: number): void;
        getProjectionAngularTolerance(): number;
    }
    enum PxPrismaticJointFlagEnum {
        'LIMIT_ENABLED'
    }
    class PxPrismaticJointFlags {
        constructor(flags: number);
        isSet(flag: PxPrismaticJointFlagEnum): boolean;
        set(flag: PxPrismaticJointFlagEnum): void;
        clear(flag: PxPrismaticJointFlagEnum): void;
    }
    class PxRigidActorExt {
        static createExclusiveShape(actor: PxRigidActor, geometry: PxGeometry, material: PxMaterial, flags?: PxShapeFlags): PxShape;
    }
    class PxRigidBodyExt {
        static updateMassAndInertia(body: PxRigidBody, density: number, massLocalPose?: PxVec3, includeNonSimShapes?: boolean): boolean;
        static setMassAndUpdateInertia(body: PxRigidBody, mass: number, massLocalPose?: PxVec3, includeNonSimShapes?: boolean): boolean;
        static addForceAtPos(body: PxRigidBody, force: PxVec3, pos: PxVec3, mode?: PxForceModeEnum, wakeup?: boolean): void;
        static addForceAtLocalPos(body: PxRigidBody, force: PxVec3, pos: PxVec3, mode?: PxForceModeEnum, wakeup?: boolean): void;
        static addLocalForceAtPos(body: PxRigidBody, force: PxVec3, pos: PxVec3, mode?: PxForceModeEnum, wakeup?: boolean): void;
        static addLocalForceAtLocalPos(body: PxRigidBody, force: PxVec3, pos: PxVec3, mode?: PxForceModeEnum, wakeup?: boolean): void;
        static getVelocityAtPos(body: PxRigidBody, pos: PxVec3): PxVec3;
        static getLocalVelocityAtLocalPos(body: PxRigidBody, pos: PxVec3): PxVec3;
        static getVelocityAtOffset(body: PxRigidBody, pos: PxVec3): PxVec3;
        static computeVelocityDeltaFromImpulse(body: PxRigidBody, impulsiveForce: PxVec3, impulsiveTorque: PxVec3, deltaLinearVelocity: PxVec3, deltaAngularVelocity: PxVec3): void;
        static computeVelocityDeltaFromImpulse(body: PxRigidBody, globalPose: PxTransform, point: PxVec3, impulse: PxVec3, invMassScale: number, invInertiaScale: number, deltaLinearVelocity: PxVec3, deltaAngularVelocity: PxVec3): void;
        static computeLinearAngularImpulse(body: PxRigidBody, globalPose: PxTransform, point: PxVec3, impulse: PxVec3, invMassScale: number, invInertiaScale: number, linearImpulse: PxVec3, angularImpulse: PxVec3): void;
    }
    class PxRevoluteJoint extends PxJoint {
        getAngle(): number;
        getVelocity(): number;
        setLimit(limits: PxJointAngularLimitPair): void;
        setDriveVelocity(velocity: number, autowake?: boolean): void;
        getDriveVelocity(): number;
        setDriveForceLimit(limit: number): void;
        getDriveForceLimit(): number;
        setDriveGearRatio(ratio: number): void;
        getDriveGearRatio(): number;
        setRevoluteJointFlags(flags: PxRevoluteJointFlags): void;
        setRevoluteJointFlag(flag: PxRevoluteJointFlagEnum, value: boolean): void;
        getRevoluteJointFlags(): PxRevoluteJointFlags;
        setProjectionLinearTolerance(tolerance: number): void;
        getProjectionLinearTolerance(): number;
        setProjectionAngularTolerance(tolerance: number): void;
        getProjectionAngularTolerance(): number;
    }
    enum PxRevoluteJointFlagEnum {
        'LIMIT_ENABLED',
        'DRIVE_ENABLED',
        'DRIVE_FREESPIN'
    }
    class PxRevoluteJointFlags {
        constructor(flags: number);
        isSet(flag: PxRevoluteJointFlagEnum): boolean;
        set(flag: PxRevoluteJointFlagEnum): void;
        clear(flag: PxRevoluteJointFlagEnum): void;
    }
    class PxSerialization {
        static isSerializable(collection: PxCollection, sr: PxSerializationRegistry, externalReferences?: PxCollection): boolean;
        static complete(collection: PxCollection, sr: PxSerializationRegistry, exceptFor?: PxCollection, followJoints?: boolean): void;
        static createSerialObjectIds(collection: PxCollection, base: number): void;
        static createCollectionFromXml(inputData: PxInputData, cooking: PxCooking, sr: PxSerializationRegistry, externalRefs?: PxCollection): PxCollection;
        static createCollectionFromBinary(memBlock: unknown, sr: PxSerializationRegistry, externalRefs?: PxCollection): PxCollection;
        static serializeCollectionToXml(outputStream: PxOutputStream, collection: PxCollection, sr: PxSerializationRegistry, cooking?: PxCooking, externalRefs?: PxCollection): boolean;
        static serializeCollectionToBinary(outputStream: PxOutputStream, collection: PxCollection, sr: PxSerializationRegistry, externalRefs?: PxCollection, exportNames?: boolean): boolean;
        static createSerializationRegistry(physics: PxPhysics): PxSerializationRegistry;
    }
    class PxSerializationRegistry {
        release(): void;
    }
    class PxSphericalJoint extends PxJoint {
        setLimitCone(limitCone: PxJointLimitCone): void;
        getSwingYAngle(): number;
        getSwingZAngle(): number;
        setSphericalJointFlags(flags: PxSphericalJointFlags): void;
        setSphericalJointFlag(flag: PxSphericalJointFlagEnum, value: boolean): void;
        getSphericalJointFlags(): PxSphericalJointFlags;
        setProjectionLinearTolerance(tolerance: number): void;
        getProjectionLinearTolerance(): number;
    }
    enum PxSphericalJointFlagEnum {
        'LIMIT_ENABLED'
    }
    class PxSphericalJointFlags {
        constructor(flags: number);
        isSet(flag: PxSphericalJointFlagEnum): boolean;
        set(flag: PxSphericalJointFlagEnum): void;
        clear(flag: PxSphericalJointFlagEnum): void;
    }
    class PxSpring {
        constructor(stiffness: number, damping: number);
        stiffness: number;
        damping: number;
    }
    class BatchVehicleUpdateDesc {
        constructor();
        foundation: PxFoundation;
        scene: PxScene;
        frictionPairs: PxVehicleDrivableSurfaceToTireFrictionPairs;
        maxNbVehicles: number;
        maxNbWheelsPerVehicle: number;
        maxNbHitPointsPerWheel: number;
        numWorkers: number;
        batchSize: number;
        preFilterShader: PxBatchQueryPreFilterShader;
        postFilterShader: PxBatchQueryPostFilterShader;
    }
    class BatchVehicleUpdate {
        constructor(desc: BatchVehicleUpdateDesc);
        addVehicle(vehicle: PxVehicleWheels): void;
        removeVehicle(vehicle: PxVehicleWheels): void;
        removeAllVehicles(): void;
        indexOf(vehicle: PxVehicleWheels): number;
        batchUpdate(timestep: number): void;
        getWheelQueryResult(vehicleId: number, wheelId: number): PxWheelQueryResult;
    }
    class PxBoxController extends PxController {
        getHalfHeight(): number;
        getHalfSideExtent(): number;
        getHalfForwardExtent(): number;
        setHalfHeight(halfHeight: number): void;
        setHalfSideExtent(halfSideExtent: number): void;
        setHalfForwardExtent(halfForwardExtent: number): void;
    }
    class PxBoxControllerDesc extends PxControllerDesc {
        constructor();
        setToDefault(): void;
        isValid(): boolean;
        halfHeight: number;
        halfSideExtent: number;
        halfForwardExtent: number;
    }
    class PxBoxObstacle extends PxObstacle {
        constructor();
        mHalfExtents: PxVec3;
    }
    enum PxCapsuleClimbingModeEnum {
        'EASY',
        'CONSTRAINED'
    }
    class PxCapsuleController extends PxController {
        getRadius(): number;
        setRadius(radius: number): void;
        getHeight(): number;
        setHeight(height: number): void;
        getClimbingMode(): PxCapsuleClimbingModeEnum;
        setClimbingMode(mode: PxCapsuleClimbingModeEnum): boolean;
    }
    class PxCapsuleControllerDesc extends PxControllerDesc {
        constructor();
        setToDefault(): void;
        isValid(): boolean;
        radius: number;
        height: number;
        climbingMode: PxCapsuleClimbingModeEnum;
    }
    class PxCapsuleObstacle extends PxObstacle {
        constructor();
        mHalfHeight: number;
        mRadius: number;
    }
    class PxController {
        getType(): PxControllerShapeTypeEnum;
        release(): void;
        move(disp: PxVec3, minDist: number, elapsedTime: number, filters: PxControllerFilters, obstacles?: PxObstacleContext): PxControllerCollisionFlags;
        setPosition(position: PxExtendedVec3): boolean;
        getPosition(): PxExtendedVec3;
        setFootPosition(position: PxExtendedVec3): boolean;
        getFootPosition(): PxExtendedVec3;
        getActor(): PxRigidDynamic;
        setStepOffset(offset: number): void;
        getStepOffset(): number;
        setNonWalkableMode(flag: PxControllerNonWalkableModeEnum): void;
        getNonWalkableMode(): PxControllerNonWalkableModeEnum;
        getContactOffset(): number;
        setContactOffset(offset: number): void;
        getUpDirection(): PxVec3;
        setUpDirection(up: PxVec3): void;
        getSlopeLimit(): number;
        setSlopeLimit(slopeLimit: number): void;
        invalidateCache(): void;
        getScene(): PxScene;
        getUserData(): unknown;
        setUserData(userData: unknown): void;
        getState(state: PxControllerState): void;
        getStats(stats: PxControllerStats): void;
        resize(height: number): void;
    }
    class PxControllerBehaviorCallback {
    }
    class SimpleControllerBehaviorCallback extends PxControllerBehaviorCallback {
        getShapeBehaviorFlags(shape: PxShape, actor: PxActor): number;
        getControllerBehaviorFlags(controller: PxController): number;
        getObstacleBehaviorFlags(obstacle: PxObstacle): number;
    }
    class JavaControllerBehaviorCallback {
        constructor();
        getShapeBehaviorFlags(shape: PxShape, actor: PxActor): number;
        getControllerBehaviorFlags(controller: PxController): number;
        getObstacleBehaviorFlags(obstacle: PxObstacle): number;
    }
    enum PxControllerBehaviorFlagEnum {
        'CCT_CAN_RIDE_ON_OBJECT',
        'CCT_SLIDE',
        'CCT_USER_DEFINED_RIDE'
    }
    class PxControllerBehaviorFlags {
        constructor(flags: number);
        isSet(flag: PxControllerBehaviorFlagEnum): boolean;
        set(flag: PxControllerBehaviorFlagEnum): void;
        clear(flag: PxControllerBehaviorFlagEnum): void;
    }
    enum PxControllerCollisionFlagEnum {
        'COLLISION_SIDES',
        'COLLISION_UP',
        'COLLISION_DOWN'
    }
    class PxControllerCollisionFlags {
        constructor(flags: number);
        isSet(flag: PxControllerCollisionFlagEnum): boolean;
        set(flag: PxControllerCollisionFlagEnum): void;
        clear(flag: PxControllerCollisionFlagEnum): void;
    }
    class PxControllerDesc {
        isValid(): boolean;
        getType(): PxControllerShapeTypeEnum;
        position: PxExtendedVec3;
        upDirection: PxVec3;
        slopeLimit: number;
        invisibleWallHeight: number;
        maxJumpHeight: number;
        contactOffset: number;
        stepOffset: number;
        density: number;
        scaleCoeff: number;
        volumeGrowth: number;
        reportCallback: PxUserControllerHitReport;
        behaviorCallback: PxControllerBehaviorCallback;
        nonWalkableMode: PxControllerNonWalkableModeEnum;
        material: PxMaterial;
        registerDeletionListener: boolean;
        userData: unknown;
    }
    class PxControllerFilters {
        constructor(filterData?: PxFilterData);
        mFilterData: PxFilterData;
        mFilterFlags: PxQueryFlags;
    }
    class PxControllerHit {
        controller: PxController;
        worldPos: PxExtendedVec3;
        worldNormal: PxVec3;
        dir: PxVec3;
        length: number;
    }
    class PxControllerManager {
        release(): void;
        getScene(): PxScene;
        getNbControllers(): number;
        getController(index: number): PxController;
        createController(desc: PxControllerDesc): PxController;
        purgeControllers(): void;
        getNbObstacleContexts(): number;
        getObstacleContext(index: number): PxObstacleContext;
        createObstacleContext(): PxObstacleContext;
        computeInteractions(elapsedTime: number): void;
        setTessellation(flag: boolean, maxEdgeLength: number): void;
        setOverlapRecoveryModule(flag: boolean): void;
        setPreciseSweeps(flags: boolean): void;
        setPreventVerticalSlidingAgainstCeiling(flag: boolean): void;
        shiftOrigin(shift: PxVec3): void;
    }
    enum PxControllerNonWalkableModeEnum {
        'PREVENT_CLIMBING',
        'PREVENT_CLIMBING_AND_FORCE_SLIDING'
    }
    class PxControllerObstacleHit extends PxControllerHit {
        userData: unknown;
    }
    class PxControllerShapeHit extends PxControllerHit {
        shape: PxShape;
        actor: PxRigidActor;
        triangleIndex: number;
    }
    class PxControllersHit extends PxControllerHit {
        other: PxController;
    }
    enum PxControllerShapeTypeEnum {
        'BOX',
        'CAPSULE'
    }
    class PxControllerState {
        constructor();
        deltaXP: PxVec3;
        touchedShape: PxShape;
        touchedActor: PxRigidActor;
        touchedObstacleHandle: number;
        collisionFlags: number;
        standOnAnotherCCT: boolean;
        standOnObstacle: boolean;
        isMovingUp: boolean;
    }
    class PxControllerStats {
        nbIterations: number;
        nbFullUpdates: number;
        nbPartialUpdates: number;
        nbTessellation: number;
    }
    class PxExtendedVec3 {
        constructor();
        constructor(x: number, y: number, z: number);
        x: number;
        y: number;
        z: number;
    }
    class PxObstacle {
        getType(): PxGeometryTypeEnum;
        mUserData: unknown;
        mPos: PxExtendedVec3;
        mRot: PxQuat;
    }
    class PxObstacleContext {
        release(): void;
        getControllerManager(): PxControllerManager;
        addObstacle(obstacle: PxObstacle): number;
        removeObstacle(handle: number): boolean;
        updateObstacle(handle: number, obstacle: PxObstacle): boolean;
        getNbObstacles(): number;
        getObstacle(i: number): PxObstacle;
        getObstacleByHandle(handle: number): PxObstacle;
    }
    class PxUserControllerHitReport {
        onShapeHit(hit: PxControllerShapeHit): void;
        onControllerHit(hit: PxControllersHit): void;
        onObstacleHit(hit: PxControllerObstacleHit): void;
    }
    class JavaUserControllerHitReport {
        constructor();
        onShapeHit(hit: PxControllerShapeHit): void;
        onControllerHit(hit: PxControllersHit): void;
        onObstacleHit(hit: PxControllerObstacleHit): void;
    }
    class SupportFunctions {
        static PxActor_getShape(actor: PxRigidActor, index: number): PxShape;
        static PxContactPairHeader_getActor(pairHeader: PxContactPairHeader, index: number): PxActor;
        static PxScene_getActiveActors(scene: PxScene): Vector_PxActorPtr;
    }
    class PxActorPtr {
    }
    class PxMaterialPtr {
    }
    class PxMaterialConstPtr {
    }
    class PxVehicleWheelsPtr {
    }
    class PxRealPtr {
    }
    class PxU8Ptr extends PxU8ConstPtr {
    }
    class PxU8ConstPtr {
    }
    class PxU16Ptr extends PxU16ConstPtr {
    }
    class PxU16ConstPtr {
    }
    class PxU32Ptr extends PxU32ConstPtr {
    }
    class PxU32ConstPtr {
    }
    class TypeHelpers {
        static getU8At(base: PxU8ConstPtr, index: number): number;
        static getU16At(base: PxU16ConstPtr, index: number): number;
        static getU32At(base: PxU32ConstPtr, index: number): number;
        static getRealAt(base: PxRealPtr, index: number): number;
        static getActorAt(base: PxActor, index: number): PxActor;
        static getContactPairAt(base: PxContactPair, index: number): PxContactPair;
        static getContactPairHeaderAt(base: PxContactPairHeader, index: number): PxContactPairHeader;
        static getControllerAt(base: PxController, index: number): PxController;
        static getObstacleAt(base: PxObstacle, index: number): PxObstacle;
        static getShapeAt(base: PxShape, index: number): PxShape;
        static getTriggerPairAt(base: PxTriggerPair, index: number): PxTriggerPair;
        static getVec3At(base: PxVec3, index: number): PxVec3;
        static voidToU8Ptr(voidPtr: unknown): PxU8Ptr;
        static voidToU16Ptr(voidPtr: unknown): PxU16Ptr;
        static voidToU32Ptr(voidPtr: unknown): PxU32Ptr;
        static voidToRealPtr(voidPtr: unknown): PxRealPtr;
        static articulationBaseJointToJoint(baseJoint: PxArticulationJointBase): PxArticulationJoint;
        static voidToAny(voidPtr: unknown): any;
    }
    class Vector_PxMaterialConst {
        constructor();
        constructor(size: number);
        at(index: number): PxMaterial;
        data(): PxMaterialConstPtr;
        size(): number;
        push_back(value: PxMaterial): void;
        clear(): void;
    }
    class Vector_PxHeightFieldSample {
        constructor();
        constructor(size: number);
        at(index: number): PxHeightFieldSample;
        data(): PxHeightFieldSample;
        size(): number;
        push_back(value: PxHeightFieldSample): void;
        clear(): void;
    }
    class Vector_PxReal {
        constructor();
        constructor(size: number);
        at(index: number): number;
        data(): unknown;
        size(): number;
        push_back(value: number): void;
        clear(): void;
    }
    class Vector_PxU8 {
        constructor();
        constructor(size: number);
        at(index: number): number;
        data(): unknown;
        size(): number;
        push_back(value: number): void;
        clear(): void;
    }
    class Vector_PxU16 {
        constructor();
        constructor(size: number);
        at(index: number): number;
        data(): unknown;
        size(): number;
        push_back(value: number): void;
        clear(): void;
    }
    class Vector_PxU32 {
        constructor();
        constructor(size: number);
        at(index: number): number;
        data(): unknown;
        size(): number;
        push_back(value: number): void;
        clear(): void;
    }
    class Vector_PxVec3 {
        constructor();
        constructor(size: number);
        at(index: number): PxVec3;
        data(): PxVec3;
        size(): number;
        push_back(value: PxVec3): void;
        clear(): void;
    }
    class Vector_PxActorPtr {
        constructor();
        constructor(size: number);
        at(index: number): PxActor;
        data(): PxActorPtr;
        size(): number;
        push_back(value: PxActor): void;
        clear(): void;
    }
    class Vector_PxContactPairPoint {
        constructor();
        constructor(size: number);
        at(index: number): PxContactPairPoint;
        data(): PxContactPairPoint;
        size(): number;
        push_back(value: PxContactPairPoint): void;
        clear(): void;
    }
    class Vector_PxRaycastQueryResult {
        constructor();
        constructor(size: number);
        at(index: number): PxRaycastQueryResult;
        data(): PxRaycastQueryResult;
        size(): number;
        push_back(value: PxRaycastQueryResult): void;
        clear(): void;
    }
    class Vector_PxSweepQueryResult {
        constructor();
        constructor(size: number);
        at(index: number): PxSweepQueryResult;
        data(): PxSweepQueryResult;
        size(): number;
        push_back(value: PxSweepQueryResult): void;
        clear(): void;
    }
    class Vector_PxRaycastHit {
        constructor();
        constructor(size: number);
        at(index: number): PxRaycastHit;
        data(): PxRaycastHit;
        size(): number;
        push_back(value: PxRaycastHit): void;
        clear(): void;
    }
    class Vector_PxSweepHit {
        constructor();
        constructor(size: number);
        at(index: number): PxSweepHit;
        data(): PxSweepHit;
        size(): number;
        push_back(value: PxSweepHit): void;
        clear(): void;
    }
    class Vector_PxVehicleDrivableSurfaceType {
        constructor();
        constructor(size: number);
        at(index: number): PxVehicleDrivableSurfaceType;
        data(): PxVehicleDrivableSurfaceType;
        size(): number;
        push_back(value: PxVehicleDrivableSurfaceType): void;
        clear(): void;
    }
    class Vector_PxWheelQueryResult {
        constructor();
        constructor(size: number);
        at(index: number): PxWheelQueryResult;
        data(): PxWheelQueryResult;
        size(): number;
        push_back(value: PxWheelQueryResult): void;
        clear(): void;
    }
    class Vector_PxVehicleWheels {
        constructor();
        constructor(size: number);
        at(index: number): PxVehicleWheels;
        data(): PxVehicleWheelsPtr;
        size(): number;
        push_back(value: PxVehicleWheels): void;
        clear(): void;
    }
    class PxPvdTransport {
        connect(): boolean;
        disconnect(): void;
        isConnected(): boolean;
    }
    class SimplePvdTransport extends PxPvdTransport {
        connect(): boolean;
        send(inBytes: any, inLength: number): void;
    }
    class JSPvdTransport {
        constructor();
        connect(): boolean;
        send(inBytes: any, inLength: number): void;
    }
    enum PxPvdInstrumentationFlagEnum {
        'DEBUG',
        'PROFILE',
        'MEMORY',
        'ALL'
    }
    class PxPvdInstrumentationFlags {
        constructor(flags: number);
        isSet(flag: PxPvdInstrumentationFlagEnum): boolean;
        set(flag: PxPvdInstrumentationFlagEnum): void;
        clear(flag: PxPvdInstrumentationFlagEnum): void;
    }
    class PxPvd {
        connect(transport: PxPvdTransport, flags: PxPvdInstrumentationFlags): boolean;
    }
    class PassThroughFilterShader extends PxSimulationFilterShader {
        filterShader(attributes0: number, filterData0w0: number, filterData0w1: number, filterData0w2: number, filterData0w3: number, attributes1: number, filterData1w0: number, filterData1w1: number, filterData1w2: number, filterData1w3: number): number;
        outputPairFlags: number;
    }
    class JavaPassThroughFilterShader {
        constructor();
        filterShader(attributes0: number, filterData0w0: number, filterData0w1: number, filterData0w2: number, filterData0w3: number, attributes1: number, filterData1w0: number, filterData1w1: number, filterData1w2: number, filterData1w3: number): number;
    }
}