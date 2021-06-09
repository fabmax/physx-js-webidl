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
        get_PHYSICS_VERSION(): number;
        set_PHYSICS_VERSION(PHYSICS_VERSION: number): void;
        readonly PHYSICS_VERSION: number;
        DefaultFilterShader(): PxSimulationFilterShader;
        CreateControllerManager(scene: PxScene, lockingEnabled?: boolean): PxControllerManager;
        CreateCooking(version: number, foundation: PxFoundation, scale: PxCookingParams): PxCooking;
        CreateFoundation(version: number, allocator: PxDefaultAllocator, errorCallback: PxErrorCallback): PxFoundation;
        CreatePhysics(version: number, foundation: PxFoundation, params: PxTolerancesScale): PxPhysics;
        DefaultCpuDispatcherCreate(numThreads: number): PxDefaultCpuDispatcher;
        InitExtensions(physics: PxPhysics): boolean;
        CreateCudaContextManager(foundation: PxFoundation, desc: PxCudaContextManagerDesc): PxCudaContextManager;
        D6JointCreate(physics: PxPhysics, actor0: PxRigidActor, localFrame0: PxTransform, actor1: PxRigidActor, localFrame1: PxTransform): PxD6Joint;
        DistanceJointCreate(physics: PxPhysics, actor0: PxRigidActor, localFrame0: PxTransform, actor1: PxRigidActor, localFrame1: PxTransform): PxDistanceJoint;
        FixedJointCreate(physics: PxPhysics, actor0: PxRigidActor, localFrame0: PxTransform, actor1: PxRigidActor, localFrame1: PxTransform): PxFixedJoint;
        PrismaticJointCreate(physics: PxPhysics, actor0: PxRigidActor, localFrame0: PxTransform, actor1: PxRigidActor, localFrame1: PxTransform): PxPrismaticJoint;
        RevoluteJointCreate(physics: PxPhysics, actor0: PxRigidActor, localFrame0: PxTransform, actor1: PxRigidActor, localFrame1: PxTransform): PxRevoluteJoint;
        SphericalJointCreate(physics: PxPhysics, actor0: PxRigidActor, localFrame0: PxTransform, actor1: PxRigidActor, localFrame1: PxTransform): PxSphericalJoint;
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
        get_userData(): unknown;
        set_userData(userData: unknown): void;
        userData: unknown;
    }
    type PxActorFlagEnum = "PxActorFlagEnum::eVISUALIZATION" | "PxActorFlagEnum::eDISABLE_GRAVITY" | "PxActorFlagEnum::eSEND_SLEEP_NOTIFIES" | "PxActorFlagEnum::eDISABLE_SIMULATION";
    class PxActorFlags {
        constructor(flags: number);
        isSet(flag: PxActorFlagEnum): boolean;
        set(flag: PxActorFlagEnum): void;
        clear(flag: PxActorFlagEnum): void;
    }
    class PxActorShape {
        get_actor(): PxRigidActor;
        set_actor(actor: PxRigidActor): void;
        actor: PxRigidActor;
        get_shape(): PxShape;
        set_shape(shape: PxShape): void;
        shape: PxShape;
    }
    class PxActorTypeFlags {
        constructor(flags: number);
        isSet(flag: PxActorTypeFlagEnum): boolean;
        set(flag: PxActorTypeFlagEnum): void;
        clear(flag: PxActorTypeFlagEnum): void;
    }
    type PxActorTypeEnum = "PxActorTypeEnum::eRIGID_STATIC" | "PxActorTypeEnum::eRIGID_DYNAMIC" | "PxActorTypeEnum::eARTICULATION_LINK" | "PxActorTypeEnum::eACTOR_COUNT" | "PxActorTypeEnum::eACTOR_FORCE_DWORD";
    type PxActorTypeFlagEnum = "PxActorTypeFlagEnum::eRIGID_STATIC" | "PxActorTypeFlagEnum::eRIGID_DYNAMIC";
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
    type PxArticulationAxisEnum = "PxArticulationAxisEnum::eTWIST" | "PxArticulationAxisEnum::eSWING1" | "PxArticulationAxisEnum::eSWING2" | "PxArticulationAxisEnum::eX" | "PxArticulationAxisEnum::eY" | "PxArticulationAxisEnum::eZ" | "PxArticulationAxisEnum::eCOUNT";
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
    }
    class PxArticulationCache {
    }
    type PxArticulationCacheEnum = "PxArticulationCacheEnum::eVELOCITY" | "PxArticulationCacheEnum::eACCELERATION" | "PxArticulationCacheEnum::ePOSITION" | "PxArticulationCacheEnum::eFORCE" | "PxArticulationCacheEnum::eLINKVELOCITY" | "PxArticulationCacheEnum::eLINKACCELERATION" | "PxArticulationCacheEnum::eROOT" | "PxArticulationCacheEnum::eALL";
    class PxArticulationCacheFlags {
        constructor(flags: number);
        isSet(flag: PxArticulationCacheEnum): boolean;
        set(flag: PxArticulationCacheEnum): void;
        clear(flag: PxArticulationCacheEnum): void;
    }
    class PxArticulationDriveCache {
    }
    type PxArticulationDriveTypeEnum = "PxArticulationDriveTypeEnum::eFORCE" | "PxArticulationDriveTypeEnum::eACCELERATION" | "PxArticulationDriveTypeEnum::eTARGET" | "PxArticulationDriveTypeEnum::eVELOCITY" | "PxArticulationDriveTypeEnum::eNONE";
    type PxArticulationFlagEnum = "PxArticulationFlagEnum::eFIX_BASE" | "PxArticulationFlagEnum::eDRIVE_LIMITS_ARE_FORCES";
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
    type PxArticulationJointDriveTypeEnum = "PxArticulationJointDriveTypeEnum::eTARGET" | "PxArticulationJointDriveTypeEnum::eERROR";
    type PxArticulationMotionEnum = "PxArticulationMotionEnum::eLOCKED" | "PxArticulationMotionEnum::eLIMITED" | "PxArticulationMotionEnum::eFREE";
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
    type PxArticulationJointTypeEnum = "PxArticulationJointTypeEnum::ePRISMATIC" | "PxArticulationJointTypeEnum::eREVOLUTE" | "PxArticulationJointTypeEnum::eSPHERICAL" | "PxArticulationJointTypeEnum::eFIX" | "PxArticulationJointTypeEnum::eUNDEFINED";
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
        get_filterShaderData(): any;
        set_filterShaderData(filterShaderData: any): void;
        filterShaderData: any;
        get_filterShaderDataSize(): number;
        set_filterShaderDataSize(filterShaderDataSize: number): void;
        filterShaderDataSize: number;
        get_preFilterShader(): PxBatchQueryPreFilterShader;
        set_preFilterShader(preFilterShader: PxBatchQueryPreFilterShader): void;
        preFilterShader: PxBatchQueryPreFilterShader;
        get_postFilterShader(): PxBatchQueryPostFilterShader;
        set_postFilterShader(postFilterShader: PxBatchQueryPostFilterShader): void;
        postFilterShader: PxBatchQueryPostFilterShader;
        get_queryMemory(): PxBatchQueryMemory;
        set_queryMemory(queryMemory: PxBatchQueryMemory): void;
        queryMemory: PxBatchQueryMemory;
    }
    class PxBatchQueryMemory {
        get_userRaycastResultBuffer(): PxRaycastQueryResult;
        set_userRaycastResultBuffer(userRaycastResultBuffer: PxRaycastQueryResult): void;
        userRaycastResultBuffer: PxRaycastQueryResult;
        get_userRaycastTouchBuffer(): PxRaycastHit;
        set_userRaycastTouchBuffer(userRaycastTouchBuffer: PxRaycastHit): void;
        userRaycastTouchBuffer: PxRaycastHit;
        get_userSweepResultBuffer(): PxSweepQueryResult;
        set_userSweepResultBuffer(userSweepResultBuffer: PxSweepQueryResult): void;
        userSweepResultBuffer: PxSweepQueryResult;
        get_userSweepTouchBuffer(): PxSweepHit;
        set_userSweepTouchBuffer(userSweepTouchBuffer: PxSweepHit): void;
        userSweepTouchBuffer: PxSweepHit;
        get_userOverlapResultBuffer(): PxOverlapQueryResult;
        set_userOverlapResultBuffer(userOverlapResultBuffer: PxOverlapQueryResult): void;
        userOverlapResultBuffer: PxOverlapQueryResult;
        get_userOverlapTouchBuffer(): PxOverlapHit;
        set_userOverlapTouchBuffer(userOverlapTouchBuffer: PxOverlapHit): void;
        userOverlapTouchBuffer: PxOverlapHit;
        get_raycastTouchBufferSize(): number;
        set_raycastTouchBufferSize(raycastTouchBufferSize: number): void;
        raycastTouchBufferSize: number;
        get_sweepTouchBufferSize(): number;
        set_sweepTouchBufferSize(sweepTouchBufferSize: number): void;
        sweepTouchBufferSize: number;
        get_overlapTouchBufferSize(): number;
        set_overlapTouchBufferSize(overlapTouchBufferSize: number): void;
        overlapTouchBufferSize: number;
    }
    class PxBatchQueryPostFilterShader {
    }
    class PxBatchQueryPreFilterShader {
    }
    class PxBroadPhaseCaps {
        constructor();
        get_maxNbRegions(): number;
        set_maxNbRegions(maxNbRegions: number): void;
        maxNbRegions: number;
        get_maxNbObjects(): number;
        set_maxNbObjects(maxNbObjects: number): void;
        maxNbObjects: number;
        get_needsPredefinedBounds(): boolean;
        set_needsPredefinedBounds(needsPredefinedBounds: boolean): void;
        needsPredefinedBounds: boolean;
    }
    class PxBroadPhaseRegion {
        constructor();
        get_bounds(): PxBounds3;
        set_bounds(bounds: PxBounds3): void;
        bounds: PxBounds3;
        get_userData(): unknown;
        set_userData(userData: unknown): void;
        userData: unknown;
    }
    class PxBroadPhaseRegionInfo {
        constructor();
        get_region(): PxBroadPhaseRegion;
        set_region(region: PxBroadPhaseRegion): void;
        region: PxBroadPhaseRegion;
        get_nbStaticObjects(): number;
        set_nbStaticObjects(nbStaticObjects: number): void;
        nbStaticObjects: number;
        get_nbDynamicObjects(): number;
        set_nbDynamicObjects(nbDynamicObjects: number): void;
        nbDynamicObjects: number;
        get_active(): boolean;
        set_active(active: boolean): void;
        active: boolean;
        get_overlap(): boolean;
        set_overlap(overlap: boolean): void;
        overlap: boolean;
    }
    type PxBroadPhaseTypeEnum = "PxBroadPhaseTypeEnum::eSAP" | "PxBroadPhaseTypeEnum::eMBP" | "PxBroadPhaseTypeEnum::eABP" | "PxBroadPhaseTypeEnum::eGPU" | "PxBroadPhaseTypeEnum::eLAST";
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
    type PxConstraintFlagEnum = "PxConstraintFlagEnum::eBROKEN" | "PxConstraintFlagEnum::ePROJECT_TO_ACTOR0" | "PxConstraintFlagEnum::ePROJECT_TO_ACTOR1" | "PxConstraintFlagEnum::ePROJECTION" | "PxConstraintFlagEnum::eCOLLISION_ENABLED" | "PxConstraintFlagEnum::eVISUALIZATION" | "PxConstraintFlagEnum::eDRIVE_LIMITS_ARE_FORCES" | "PxConstraintFlagEnum::eIMPROVED_SLERP" | "PxConstraintFlagEnum::eDISABLE_PREPROCESSING" | "PxConstraintFlagEnum::eENABLE_EXTENDED_LIMITS" | "PxConstraintFlagEnum::eGPU_COMPATIBLE";
    class PxConstraintFlags {
        constructor(flags: number);
        isSet(flag: PxConstraintFlagEnum): boolean;
        set(flag: PxConstraintFlagEnum): void;
        clear(flag: PxConstraintFlagEnum): void;
    }
    class PxConstraintInfo {
        get_constraint(): PxConstraint;
        set_constraint(constraint: PxConstraint): void;
        constraint: PxConstraint;
        get_externalReference(): unknown;
        set_externalReference(externalReference: unknown): void;
        externalReference: unknown;
        get_type(): number;
        set_type(type: number): void;
        type: number;
    }
    type PxContactPairHeaderFlagEnum = "PxContactPairHeaderFlagEnum::eREMOVED_ACTOR_0" | "PxContactPairHeaderFlagEnum::eREMOVED_ACTOR_1";
    class PxContactPairHeaderFlags {
        constructor(flags: number);
        isSet(flag: PxContactPairHeaderFlagEnum): boolean;
        set(flag: PxContactPairHeaderFlagEnum): void;
        clear(flag: PxContactPairHeaderFlagEnum): void;
    }
    class PxContactPair {
        get_shapes(): ReadonlyArray<PxShape>;
        set_shapes(shapes: ReadonlyArray<PxShape>): void;
        shapes: ReadonlyArray<PxShape>;
        get_contactCount(): number;
        set_contactCount(contactCount: number): void;
        contactCount: number;
        get_patchCount(): number;
        set_patchCount(patchCount: number): void;
        patchCount: number;
        get_flags(): PxContactPairFlags;
        set_flags(flags: PxContactPairFlags): void;
        flags: PxContactPairFlags;
        get_events(): PxPairFlags;
        set_events(events: PxPairFlags): void;
        events: PxPairFlags;
    }
    type PxContactPairFlagEnum = "PxContactPairFlagEnum::eREMOVED_SHAPE_0" | "PxContactPairFlagEnum::eREMOVED_SHAPE_1" | "PxContactPairFlagEnum::eACTOR_PAIR_HAS_FIRST_TOUCH" | "PxContactPairFlagEnum::eACTOR_PAIR_LOST_TOUCH" | "PxContactPairFlagEnum::eINTERNAL_HAS_IMPULSES" | "PxContactPairFlagEnum::eINTERNAL_CONTACTS_ARE_FLIPPED";
    class PxContactPairFlags {
        constructor(flags: number);
        isSet(flag: PxContactPairFlagEnum): boolean;
        set(flag: PxContactPairFlagEnum): void;
        clear(flag: PxContactPairFlagEnum): void;
    }
    class PxContactPairHeader {
        get_actors(): ReadonlyArray<PxRigidActor>;
        set_actors(actors: ReadonlyArray<PxRigidActor>): void;
        actors: ReadonlyArray<PxRigidActor>;
        get_flags(): PxContactPairHeaderFlags;
        set_flags(flags: PxContactPairHeaderFlags): void;
        flags: PxContactPairHeaderFlags;
        get_pairs(): PxContactPair;
        set_pairs(pairs: PxContactPair): void;
        pairs: PxContactPair;
        get_nbPairs(): number;
        set_nbPairs(nbPairs: number): void;
        nbPairs: number;
    }
    class PxDominanceGroupPair {
        constructor(a: number, b: number);
        get_dominance0(): number;
        set_dominance0(dominance0: number): void;
        dominance0: number;
        get_dominance1(): number;
        set_dominance1(dominance1: number): void;
        dominance1: number;
    }
    class PxgDynamicsMemoryConfig {
        constructor();
        get_constraintBufferCapacity(): number;
        set_constraintBufferCapacity(constraintBufferCapacity: number): void;
        constraintBufferCapacity: number;
        get_contactBufferCapacity(): number;
        set_contactBufferCapacity(contactBufferCapacity: number): void;
        contactBufferCapacity: number;
        get_tempBufferCapacity(): number;
        set_tempBufferCapacity(tempBufferCapacity: number): void;
        tempBufferCapacity: number;
        get_contactStreamSize(): number;
        set_contactStreamSize(contactStreamSize: number): void;
        contactStreamSize: number;
        get_patchStreamSize(): number;
        set_patchStreamSize(patchStreamSize: number): void;
        patchStreamSize: number;
        get_forceStreamCapacity(): number;
        set_forceStreamCapacity(forceStreamCapacity: number): void;
        forceStreamCapacity: number;
        get_heapCapacity(): number;
        set_heapCapacity(heapCapacity: number): void;
        heapCapacity: number;
        get_foundLostPairsCapacity(): number;
        set_foundLostPairsCapacity(foundLostPairsCapacity: number): void;
        foundLostPairsCapacity: number;
    }
    class PxFilterData {
        constructor();
        constructor(w0: number, w1: number, w2: number, w3: number);
        get_word0(): number;
        set_word0(word0: number): void;
        word0: number;
        get_word1(): number;
        set_word1(word1: number): void;
        word1: number;
        get_word2(): number;
        set_word2(word2: number): void;
        word2: number;
        get_word3(): number;
        set_word3(word3: number): void;
        word3: number;
    }
    type PxForceModeEnum = "PxForceModeEnum::eFORCE" | "PxForceModeEnum::eIMPULSE" | "PxForceModeEnum::eVELOCITY_CHANGE" | "PxForceModeEnum::eACCELERATION";
    type PxFrictionTypeEnum = "PxFrictionTypeEnum::ePATCH" | "PxFrictionTypeEnum::eONE_DIRECTIONAL" | "PxFrictionTypeEnum::eTWO_DIRECTIONAL" | "PxFrictionTypeEnum::eFRICTION_COUNT";
    type PxHitFlagEnum = "PxHitFlagEnum::ePOSITION" | "PxHitFlagEnum::eNORMAL" | "PxHitFlagEnum::eUV" | "PxHitFlagEnum::eASSUME_NO_INITIAL_OVERLAP" | "PxHitFlagEnum::eMESH_MULTIPLE" | "PxHitFlagEnum::eMESH_ANY" | "PxHitFlagEnum::eMESH_BOTH_SIDES" | "PxHitFlagEnum::ePRECISE_SWEEP" | "PxHitFlagEnum::eMTD" | "PxHitFlagEnum::eFACE_INDEX" | "PxHitFlagEnum::eDEFAULT" | "PxHitFlagEnum::eMODIFIABLE_FLAGS";
    class PxHitFlags {
        constructor(flags: number);
        isSet(flag: PxHitFlagEnum): boolean;
        set(flag: PxHitFlagEnum): void;
        clear(flag: PxHitFlagEnum): void;
    }
    class PxLocationHit extends PxQueryHit {
        get_flags(): PxHitFlags;
        set_flags(flags: PxHitFlags): void;
        flags: PxHitFlags;
        get_position(): PxVec3;
        set_position(position: PxVec3): void;
        position: PxVec3;
        get_normal(): PxVec3;
        set_normal(normal: PxVec3): void;
        normal: PxVec3;
        get_distance(): number;
        set_distance(distance: number): void;
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
        get_block(): PxOverlapHit;
        set_block(block: PxOverlapHit): void;
        block: PxOverlapHit;
        get_hasBlock(): boolean;
        set_hasBlock(hasBlock: boolean): void;
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
        get_block(): PxOverlapHit;
        set_block(block: PxOverlapHit): void;
        block: PxOverlapHit;
        get_touches(): PxOverlapHit;
        set_touches(touches: PxOverlapHit): void;
        touches: PxOverlapHit;
        get_nbTouches(): number;
        set_nbTouches(nbTouches: number): void;
        nbTouches: number;
        get_userData(): any;
        set_userData(userData: any): void;
        userData: any;
        get_queryStatus(): number;
        set_queryStatus(queryStatus: number): void;
        queryStatus: number;
        get_hasBlock(): boolean;
        set_hasBlock(hasBlock: boolean): void;
        hasBlock: boolean;
    }
    class PxMaterial extends PxBase {
        get_userData(): unknown;
        set_userData(userData: unknown): void;
        userData: unknown;
    }
    type PxPairFilteringModeEnum = "PxPairFilteringModeEnum::eKEEP" | "PxPairFilteringModeEnum::eSUPPRESS" | "PxPairFilteringModeEnum::eKILL" | "PxPairFilteringModeEnum::eDEFAULT";
    type PxPairFlagEnum = "PxPairFlagEnum::eSOLVE_CONTACT" | "PxPairFlagEnum::eMODIFY_CONTACTS" | "PxPairFlagEnum::eNOTIFY_TOUCH_FOUND" | "PxPairFlagEnum::eNOTIFY_TOUCH_PERSISTS" | "PxPairFlagEnum::eNOTIFY_TOUCH_LOST" | "PxPairFlagEnum::eNOTIFY_TOUCH_CCD" | "PxPairFlagEnum::eNOTIFY_THRESHOLD_FORCE_FOUND" | "PxPairFlagEnum::eNOTIFY_THRESHOLD_FORCE_PERSISTS" | "PxPairFlagEnum::eNOTIFY_THRESHOLD_FORCE_LOST" | "PxPairFlagEnum::eNOTIFY_CONTACT_POINTS" | "PxPairFlagEnum::eDETECT_DISCRETE_CONTACT" | "PxPairFlagEnum::eDETECT_CCD_CONTACT" | "PxPairFlagEnum::ePRE_SOLVER_VELOCITY" | "PxPairFlagEnum::ePOST_SOLVER_VELOCITY" | "PxPairFlagEnum::eCONTACT_EVENT_POSE" | "PxPairFlagEnum::eNEXT_FREE" | "PxPairFlagEnum::eCONTACT_DEFAULT";
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
    type PxPruningStructureTypeEnum = "PxPruningStructureTypeEnum::eNONE" | "PxPruningStructureTypeEnum::eDYNAMIC_AABB_TREE" | "PxPruningStructureTypeEnum::eSTATIC_AABB_TREE" | "PxPruningStructureTypeEnum::eLAST";
    class PxQueryFilterData {
        constructor();
        constructor(fd: PxFilterData, f: PxQueryFlags);
        constructor(f: PxQueryFlags);
        get_data(): PxFilterData;
        set_data(data: PxFilterData): void;
        data: PxFilterData;
        get_flags(): PxQueryFlags;
        set_flags(flags: PxQueryFlags): void;
        flags: PxQueryFlags;
    }
    type PxQueryFlagEnum = "PxQueryFlagEnum::eSTATIC" | "PxQueryFlagEnum::eDYNAMIC" | "PxQueryFlagEnum::ePREFILTER" | "PxQueryFlagEnum::ePOSTFILTER" | "PxQueryFlagEnum::eANY_HIT" | "PxQueryFlagEnum::eNO_BLOCK";
    class PxQueryFlags {
        constructor(flags: number);
        isSet(flag: PxQueryFlagEnum): boolean;
        set(flag: PxQueryFlagEnum): void;
        clear(flag: PxQueryFlagEnum): void;
    }
    class PxQueryHit extends PxActorShape {
        get_faceIndex(): number;
        set_faceIndex(faceIndex: number): void;
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
        get_block(): PxRaycastHit;
        set_block(block: PxRaycastHit): void;
        block: PxRaycastHit;
        get_hasBlock(): boolean;
        set_hasBlock(hasBlock: boolean): void;
        hasBlock: boolean;
    }
    class PxRaycastCallback {
        hasAnyHits(): boolean;
    }
    class PxRaycastHit extends PxLocationHit {
        constructor();
        get_u(): number;
        set_u(u: number): void;
        u: number;
        get_v(): number;
        set_v(v: number): void;
        v: number;
    }
    class PxRaycastQueryResult {
        getNbAnyHits(): number;
        getAnyHit(index: number): PxRaycastHit;
        get_block(): PxRaycastHit;
        set_block(block: PxRaycastHit): void;
        block: PxRaycastHit;
        get_touches(): PxRaycastHit;
        set_touches(touches: PxRaycastHit): void;
        touches: PxRaycastHit;
        get_nbTouches(): number;
        set_nbTouches(nbTouches: number): void;
        nbTouches: number;
        get_userData(): any;
        set_userData(userData: any): void;
        userData: any;
        get_queryStatus(): number;
        set_queryStatus(queryStatus: number): void;
        queryStatus: number;
        get_hasBlock(): boolean;
        set_hasBlock(hasBlock: boolean): void;
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
    type PxRigidBodyFlagEnum = "PxRigidBodyFlagEnum::eKINEMATIC" | "PxRigidBodyFlagEnum::eUSE_KINEMATIC_TARGET_FOR_SCENE_QUERIES" | "PxRigidBodyFlagEnum::eENABLE_CCD" | "PxRigidBodyFlagEnum::eENABLE_CCD_FRICTION" | "PxRigidBodyFlagEnum::eENABLE_POSE_INTEGRATION_PREVIEW" | "PxRigidBodyFlagEnum::eENABLE_SPECULATIVE_CCD" | "PxRigidBodyFlagEnum::eENABLE_CCD_MAX_CONTACT_IMPULSE" | "PxRigidBodyFlagEnum::eRETAIN_ACCELERATIONS";
    class PxRigidBodyFlags {
        constructor(flags: number);
        isSet(flag: PxRigidBodyFlagEnum): boolean;
        set(flag: PxRigidBodyFlagEnum): void;
        clear(flag: PxRigidBodyFlagEnum): void;
    }
    class PxRigidDynamic extends PxRigidBody {
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
    type PxRigidDynamicLockFlagEnum = "PxRigidDynamicLockFlagEnum::eLOCK_LINEAR_X" | "PxRigidDynamicLockFlagEnum::eLOCK_LINEAR_Y" | "PxRigidDynamicLockFlagEnum::eLOCK_LINEAR_Z" | "PxRigidDynamicLockFlagEnum::eLOCK_ANGULAR_X" | "PxRigidDynamicLockFlagEnum::eLOCK_ANGULAR_Y" | "PxRigidDynamicLockFlagEnum::eLOCK_ANGULAR_Z";
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
        get_userData(): unknown;
        set_userData(userData: unknown): void;
        userData: unknown;
    }
    class PxSceneDesc {
        constructor(scale: PxTolerancesScale);
        setToDefault(scale: PxTolerancesScale): void;
        isValid(): boolean;
        get_gravity(): PxVec3;
        set_gravity(gravity: PxVec3): void;
        gravity: PxVec3;
        get_simulationEventCallback(): PxSimulationEventCallback;
        set_simulationEventCallback(simulationEventCallback: PxSimulationEventCallback): void;
        simulationEventCallback: PxSimulationEventCallback;
        get_filterShaderData(): unknown;
        set_filterShaderData(filterShaderData: unknown): void;
        filterShaderData: unknown;
        get_filterShaderDataSize(): number;
        set_filterShaderDataSize(filterShaderDataSize: number): void;
        filterShaderDataSize: number;
        get_filterShader(): PxSimulationFilterShader;
        set_filterShader(filterShader: PxSimulationFilterShader): void;
        filterShader: PxSimulationFilterShader;
        get_kineKineFilteringMode(): PxPairFilteringModeEnum;
        set_kineKineFilteringMode(kineKineFilteringMode: PxPairFilteringModeEnum): void;
        kineKineFilteringMode: PxPairFilteringModeEnum;
        get_staticKineFilteringMode(): PxPairFilteringModeEnum;
        set_staticKineFilteringMode(staticKineFilteringMode: PxPairFilteringModeEnum): void;
        staticKineFilteringMode: PxPairFilteringModeEnum;
        get_broadPhaseType(): PxBroadPhaseTypeEnum;
        set_broadPhaseType(broadPhaseType: PxBroadPhaseTypeEnum): void;
        broadPhaseType: PxBroadPhaseTypeEnum;
        get_limits(): PxSceneLimits;
        set_limits(limits: PxSceneLimits): void;
        limits: PxSceneLimits;
        get_frictionType(): PxFrictionTypeEnum;
        set_frictionType(frictionType: PxFrictionTypeEnum): void;
        frictionType: PxFrictionTypeEnum;
        get_solverType(): PxSolverTypeEnum;
        set_solverType(solverType: PxSolverTypeEnum): void;
        solverType: PxSolverTypeEnum;
        get_bounceThresholdVelocity(): number;
        set_bounceThresholdVelocity(bounceThresholdVelocity: number): void;
        bounceThresholdVelocity: number;
        get_frictionOffsetThreshold(): number;
        set_frictionOffsetThreshold(frictionOffsetThreshold: number): void;
        frictionOffsetThreshold: number;
        get_ccdMaxSeparation(): number;
        set_ccdMaxSeparation(ccdMaxSeparation: number): void;
        ccdMaxSeparation: number;
        get_solverOffsetSlop(): number;
        set_solverOffsetSlop(solverOffsetSlop: number): void;
        solverOffsetSlop: number;
        get_flags(): PxSceneFlags;
        set_flags(flags: PxSceneFlags): void;
        flags: PxSceneFlags;
        get_cpuDispatcher(): PxCpuDispatcher;
        set_cpuDispatcher(cpuDispatcher: PxCpuDispatcher): void;
        cpuDispatcher: PxCpuDispatcher;
        get_cudaContextManager(): PxCudaContextManager;
        set_cudaContextManager(cudaContextManager: PxCudaContextManager): void;
        cudaContextManager: PxCudaContextManager;
        get_staticStructure(): PxPruningStructureTypeEnum;
        set_staticStructure(staticStructure: PxPruningStructureTypeEnum): void;
        staticStructure: PxPruningStructureTypeEnum;
        get_dynamicStructure(): PxPruningStructureTypeEnum;
        set_dynamicStructure(dynamicStructure: PxPruningStructureTypeEnum): void;
        dynamicStructure: PxPruningStructureTypeEnum;
        get_dynamicTreeRebuildRateHint(): number;
        set_dynamicTreeRebuildRateHint(dynamicTreeRebuildRateHint: number): void;
        dynamicTreeRebuildRateHint: number;
        get_sceneQueryUpdateMode(): PxSceneQueryUpdateModeEnum;
        set_sceneQueryUpdateMode(sceneQueryUpdateMode: PxSceneQueryUpdateModeEnum): void;
        sceneQueryUpdateMode: PxSceneQueryUpdateModeEnum;
        get_userData(): unknown;
        set_userData(userData: unknown): void;
        userData: unknown;
        get_solverBatchSize(): number;
        set_solverBatchSize(solverBatchSize: number): void;
        solverBatchSize: number;
        get_solverArticulationBatchSize(): number;
        set_solverArticulationBatchSize(solverArticulationBatchSize: number): void;
        solverArticulationBatchSize: number;
        get_nbContactDataBlocks(): number;
        set_nbContactDataBlocks(nbContactDataBlocks: number): void;
        nbContactDataBlocks: number;
        get_maxBiasCoefficient(): number;
        set_maxBiasCoefficient(maxBiasCoefficient: number): void;
        maxBiasCoefficient: number;
        get_contactReportStreamBufferSize(): number;
        set_contactReportStreamBufferSize(contactReportStreamBufferSize: number): void;
        contactReportStreamBufferSize: number;
        get_ccdMaxPasses(): number;
        set_ccdMaxPasses(ccdMaxPasses: number): void;
        ccdMaxPasses: number;
        get_ccdThreshold(): number;
        set_ccdThreshold(ccdThreshold: number): void;
        ccdThreshold: number;
        get_wakeCounterResetValue(): number;
        set_wakeCounterResetValue(wakeCounterResetValue: number): void;
        wakeCounterResetValue: number;
        get_sanityBounds(): PxBounds3;
        set_sanityBounds(sanityBounds: PxBounds3): void;
        sanityBounds: PxBounds3;
        get_gpuDynamicsConfig(): PxgDynamicsMemoryConfig;
        set_gpuDynamicsConfig(gpuDynamicsConfig: PxgDynamicsMemoryConfig): void;
        gpuDynamicsConfig: PxgDynamicsMemoryConfig;
        get_gpuMaxNumPartitions(): number;
        set_gpuMaxNumPartitions(gpuMaxNumPartitions: number): void;
        gpuMaxNumPartitions: number;
        get_gpuComputeVersion(): number;
        set_gpuComputeVersion(gpuComputeVersion: number): void;
        gpuComputeVersion: number;
    }
    type PxSceneFlagEnum = "PxSceneFlagEnum::eENABLE_ACTIVE_ACTORS" | "PxSceneFlagEnum::eENABLE_CCD" | "PxSceneFlagEnum::eDISABLE_CCD_RESWEEP" | "PxSceneFlagEnum::eADAPTIVE_FORCE" | "PxSceneFlagEnum::eENABLE_PCM" | "PxSceneFlagEnum::eDISABLE_CONTACT_REPORT_BUFFER_RESIZE" | "PxSceneFlagEnum::eDISABLE_CONTACT_CACHE" | "PxSceneFlagEnum::eREQUIRE_RW_LOCK" | "PxSceneFlagEnum::eENABLE_STABILIZATION" | "PxSceneFlagEnum::eENABLE_AVERAGE_POINT" | "PxSceneFlagEnum::eEXCLUDE_KINEMATICS_FROM_ACTIVE_ACTORS" | "PxSceneFlagEnum::eENABLE_GPU_DYNAMICS" | "PxSceneFlagEnum::eENABLE_ENHANCED_DETERMINISM" | "PxSceneFlagEnum::eENABLE_FRICTION_EVERY_ITERATION" | "PxSceneFlagEnum::eMUTABLE_FLAGS";
    class PxSceneFlags {
        constructor(flags: number);
        isSet(flag: PxSceneFlagEnum): boolean;
        set(flag: PxSceneFlagEnum): void;
        clear(flag: PxSceneFlagEnum): void;
    }
    type PxSceneQueryUpdateModeEnum = "PxSceneQueryUpdateModeEnum::eBUILD_ENABLED_COMMIT_ENABLED" | "PxSceneQueryUpdateModeEnum::eBUILD_ENABLED_COMMIT_DISABLED" | "PxSceneQueryUpdateModeEnum::eBUILD_DISABLED_COMMIT_DISABLED";
    class PxSceneLimits {
        constructor();
        setToDefault(): void;
        isValid(): boolean;
        get_maxNbActors(): number;
        set_maxNbActors(maxNbActors: number): void;
        maxNbActors: number;
        get_maxNbBodies(): number;
        set_maxNbBodies(maxNbBodies: number): void;
        maxNbBodies: number;
        get_maxNbStaticShapes(): number;
        set_maxNbStaticShapes(maxNbStaticShapes: number): void;
        maxNbStaticShapes: number;
        get_maxNbDynamicShapes(): number;
        set_maxNbDynamicShapes(maxNbDynamicShapes: number): void;
        maxNbDynamicShapes: number;
        get_maxNbAggregates(): number;
        set_maxNbAggregates(maxNbAggregates: number): void;
        maxNbAggregates: number;
        get_maxNbConstraints(): number;
        set_maxNbConstraints(maxNbConstraints: number): void;
        maxNbConstraints: number;
        get_maxNbRegions(): number;
        set_maxNbRegions(maxNbRegions: number): void;
        maxNbRegions: number;
        get_maxNbBroadPhaseOverlaps(): number;
        set_maxNbBroadPhaseOverlaps(maxNbBroadPhaseOverlaps: number): void;
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
        get_userData(): unknown;
        set_userData(userData: unknown): void;
        userData: unknown;
    }
    type PxShapeFlagEnum = "PxShapeFlagEnum::eSIMULATION_SHAPE" | "PxShapeFlagEnum::eSCENE_QUERY_SHAPE" | "PxShapeFlagEnum::eTRIGGER_SHAPE" | "PxShapeFlagEnum::eVISUALIZATION";
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
        get_nbActiveConstraints(): number;
        set_nbActiveConstraints(nbActiveConstraints: number): void;
        nbActiveConstraints: number;
        get_nbActiveDynamicBodies(): number;
        set_nbActiveDynamicBodies(nbActiveDynamicBodies: number): void;
        nbActiveDynamicBodies: number;
        get_nbActiveKinematicBodies(): number;
        set_nbActiveKinematicBodies(nbActiveKinematicBodies: number): void;
        nbActiveKinematicBodies: number;
        get_nbStaticBodies(): number;
        set_nbStaticBodies(nbStaticBodies: number): void;
        nbStaticBodies: number;
        get_nbDynamicBodies(): number;
        set_nbDynamicBodies(nbDynamicBodies: number): void;
        nbDynamicBodies: number;
        get_nbKinematicBodies(): number;
        set_nbKinematicBodies(nbKinematicBodies: number): void;
        nbKinematicBodies: number;
        get_nbAggregates(): number;
        set_nbAggregates(nbAggregates: number): void;
        nbAggregates: number;
        get_nbArticulations(): number;
        set_nbArticulations(nbArticulations: number): void;
        nbArticulations: number;
        get_nbAxisSolverConstraints(): number;
        set_nbAxisSolverConstraints(nbAxisSolverConstraints: number): void;
        nbAxisSolverConstraints: number;
        get_compressedContactSize(): number;
        set_compressedContactSize(compressedContactSize: number): void;
        compressedContactSize: number;
        get_requiredContactConstraintMemory(): number;
        set_requiredContactConstraintMemory(requiredContactConstraintMemory: number): void;
        requiredContactConstraintMemory: number;
        get_peakConstraintMemory(): number;
        set_peakConstraintMemory(peakConstraintMemory: number): void;
        peakConstraintMemory: number;
        get_nbDiscreteContactPairsTotal(): number;
        set_nbDiscreteContactPairsTotal(nbDiscreteContactPairsTotal: number): void;
        nbDiscreteContactPairsTotal: number;
        get_nbDiscreteContactPairsWithCacheHits(): number;
        set_nbDiscreteContactPairsWithCacheHits(nbDiscreteContactPairsWithCacheHits: number): void;
        nbDiscreteContactPairsWithCacheHits: number;
        get_nbDiscreteContactPairsWithContacts(): number;
        set_nbDiscreteContactPairsWithContacts(nbDiscreteContactPairsWithContacts: number): void;
        nbDiscreteContactPairsWithContacts: number;
        get_nbNewPairs(): number;
        set_nbNewPairs(nbNewPairs: number): void;
        nbNewPairs: number;
        get_nbLostPairs(): number;
        set_nbLostPairs(nbLostPairs: number): void;
        nbLostPairs: number;
        get_nbNewTouches(): number;
        set_nbNewTouches(nbNewTouches: number): void;
        nbNewTouches: number;
        get_nbLostTouches(): number;
        set_nbLostTouches(nbLostTouches: number): void;
        nbLostTouches: number;
        get_nbPartitions(): number;
        set_nbPartitions(nbPartitions: number): void;
        nbPartitions: number;
        get_nbBroadPhaseAdds(): number;
        set_nbBroadPhaseAdds(nbBroadPhaseAdds: number): void;
        nbBroadPhaseAdds: number;
        get_nbBroadPhaseRemoves(): number;
        set_nbBroadPhaseRemoves(nbBroadPhaseRemoves: number): void;
        nbBroadPhaseRemoves: number;
    }
    type PxSolverTypeEnum = "PxSolverTypeEnum::ePGS" | "PxSolverTypeEnum::eTGS";
    class PxSpatialVelocity {
        get_linear(): PxVec3;
        set_linear(linear: PxVec3): void;
        linear: PxVec3;
        get_angular(): PxVec3;
        set_angular(angular: PxVec3): void;
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
        get_block(): PxSweepHit;
        set_block(block: PxSweepHit): void;
        block: PxSweepHit;
        get_hasBlock(): boolean;
        set_hasBlock(hasBlock: boolean): void;
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
        get_block(): PxSweepHit;
        set_block(block: PxSweepHit): void;
        block: PxSweepHit;
        get_touches(): PxSweepHit;
        set_touches(touches: PxSweepHit): void;
        touches: PxSweepHit;
        get_nbTouches(): number;
        set_nbTouches(nbTouches: number): void;
        nbTouches: number;
        get_userData(): any;
        set_userData(userData: any): void;
        userData: any;
        get_queryStatus(): number;
        set_queryStatus(queryStatus: number): void;
        queryStatus: number;
        get_hasBlock(): boolean;
        set_hasBlock(hasBlock: boolean): void;
        hasBlock: boolean;
    }
    class PxTriggerPair {
        get_triggerShape(): PxShape;
        set_triggerShape(triggerShape: PxShape): void;
        triggerShape: PxShape;
        get_triggerActor(): PxRigidActor;
        set_triggerActor(triggerActor: PxRigidActor): void;
        triggerActor: PxRigidActor;
        get_otherShape(): PxShape;
        set_otherShape(otherShape: PxShape): void;
        otherShape: PxShape;
        get_otherActor(): PxRigidActor;
        set_otherActor(otherActor: PxRigidActor): void;
        otherActor: PxRigidActor;
        get_status(): PxPairFlagEnum;
        set_status(status: PxPairFlagEnum): void;
        status: PxPairFlagEnum;
        get_flags(): PxTriggerPairFlags;
        set_flags(flags: PxTriggerPairFlags): void;
        flags: PxTriggerPairFlags;
    }
    type PxTriggerPairFlagEnum = "PxTriggerPairFlagEnum::eREMOVED_SHAPE_TRIGGER" | "PxTriggerPairFlagEnum::eREMOVED_SHAPE_OTHER" | "PxTriggerPairFlagEnum::eNEXT_FREE";
    class PxTriggerPairFlags {
        constructor(flags: number);
        isSet(flag: PxTriggerPairFlagEnum): boolean;
        set(flag: PxTriggerPairFlagEnum): void;
        clear(flag: PxTriggerPairFlagEnum): void;
    }
    class PxVehicleTopLevelFunctions {
        InitVehicleSDK(physics: PxPhysics): boolean;
        PxVehicleComputeSprungMasses(nbSprungMasses: number, sprungMassCoordinates: PxVec3, centreOfMass: PxVec3, totalMass: number, gravityDirection: number, sprungMasses: PxRealPtr): void;
        PxVehicleSuspensionRaycasts(batchQuery: PxBatchQuery, vehicles: Vector_PxVehicleWheels, nbSceneQueryResults: number, sceneQueryResults: PxRaycastQueryResult): void;
        PxVehicleUpdates(timestep: number, gravity: PxVec3, vehicleDrivableSurfaceToTireFrictionPairs: PxVehicleDrivableSurfaceToTireFrictionPairs, vehicles: Vector_PxVehicleWheels, vehicleWheelQueryResults: PxVehicleWheelQueryResult): void;
        VehicleSetBasisVectors(up: PxVec3, forward: PxVec3): void;
        VehicleSetUpdateMode(vehicleUpdateMode: PxVehicleUpdateModeEnum): void;
        PxVehicleTireData_getFrictionVsSlipGraph(tireData: PxVehicleTireData, m: number, n: number): number;
        PxVehicleTireData_setFrictionVsSlipGraph(tireData: PxVehicleTireData, m: number, n: number, value: number): void;
        DefaultWheelSceneQueryPreFilterBlocking(): PxBatchQueryPreFilterShader;
        DefaultWheelSceneQueryPostFilterBlocking(): PxBatchQueryPostFilterShader;
    }
    class PxVehicleAckermannGeometryData {
        constructor();
        get_mAccuracy(): number;
        set_mAccuracy(mAccuracy: number): void;
        mAccuracy: number;
        get_mFrontWidth(): number;
        set_mFrontWidth(mFrontWidth: number): void;
        mFrontWidth: number;
        get_mRearWidth(): number;
        set_mRearWidth(mRearWidth: number): void;
        mRearWidth: number;
        get_mAxleSeparation(): number;
        set_mAxleSeparation(mAxleSeparation: number): void;
        mAxleSeparation: number;
    }
    class PxVehicleAntiRollBarData {
        constructor();
        get_mWheel0(): number;
        set_mWheel0(mWheel0: number): void;
        mWheel0: number;
        get_mWheel1(): number;
        set_mWheel1(mWheel1: number): void;
        mWheel1: number;
        get_mStiffness(): number;
        set_mStiffness(mStiffness: number): void;
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
        get_mUpRatios(): ReadonlyArray<number>;
        set_mUpRatios(mUpRatios: ReadonlyArray<number>): void;
        mUpRatios: ReadonlyArray<number>;
        get_mDownRatios(): ReadonlyArray<number>;
        set_mDownRatios(mDownRatios: ReadonlyArray<number>): void;
        mDownRatios: ReadonlyArray<number>;
    }
    class PxVehicleChassisData {
        constructor();
        get_mMOI(): PxVec3;
        set_mMOI(mMOI: PxVec3): void;
        mMOI: PxVec3;
        get_mMass(): number;
        set_mMass(mMass: number): void;
        mMass: number;
        get_mCMOffset(): PxVec3;
        set_mCMOffset(mCMOffset: PxVec3): void;
        mCMOffset: PxVec3;
    }
    type PxVehicleClutchAccuracyModeEnum = "PxVehicleClutchAccuracyModeEnum::eESTIMATE" | "PxVehicleClutchAccuracyModeEnum::eBEST_POSSIBLE";
    class PxVehicleClutchData {
        constructor();
        get_mStrength(): number;
        set_mStrength(mStrength: number): void;
        mStrength: number;
        get_mAccuracyMode(): PxVehicleClutchAccuracyModeEnum;
        set_mAccuracyMode(mAccuracyMode: PxVehicleClutchAccuracyModeEnum): void;
        mAccuracyMode: PxVehicleClutchAccuracyModeEnum;
        get_mEstimateIterations(): number;
        set_mEstimateIterations(mEstimateIterations: number): void;
        mEstimateIterations: number;
    }
    class PxVehicleDifferential4WData {
        constructor();
        get_mFrontRearSplit(): number;
        set_mFrontRearSplit(mFrontRearSplit: number): void;
        mFrontRearSplit: number;
        get_mFrontLeftRightSplit(): number;
        set_mFrontLeftRightSplit(mFrontLeftRightSplit: number): void;
        mFrontLeftRightSplit: number;
        get_mRearLeftRightSplit(): number;
        set_mRearLeftRightSplit(mRearLeftRightSplit: number): void;
        mRearLeftRightSplit: number;
        get_mCentreBias(): number;
        set_mCentreBias(mCentreBias: number): void;
        mCentreBias: number;
        get_mFrontBias(): number;
        set_mFrontBias(mFrontBias: number): void;
        mFrontBias: number;
        get_mRearBias(): number;
        set_mRearBias(mRearBias: number): void;
        mRearBias: number;
        get_mType(): PxVehicleDifferential4WDataEnum;
        set_mType(mType: PxVehicleDifferential4WDataEnum): void;
        mType: PxVehicleDifferential4WDataEnum;
    }
    type PxVehicleDifferential4WDataEnum = "PxVehicleDifferential4WDataEnum::eDIFF_TYPE_LS_4WD" | "PxVehicleDifferential4WDataEnum::eDIFF_TYPE_LS_FRONTWD" | "PxVehicleDifferential4WDataEnum::eDIFF_TYPE_LS_REARWD" | "PxVehicleDifferential4WDataEnum::eDIFF_TYPE_OPEN_4WD" | "PxVehicleDifferential4WDataEnum::eDIFF_TYPE_OPEN_FRONTWD" | "PxVehicleDifferential4WDataEnum::eDIFF_TYPE_OPEN_REARWD" | "PxVehicleDifferential4WDataEnum::eMAX_NB_DIFF_TYPES";
    class PxVehicleDifferentialNWData {
        constructor();
        setDrivenWheel(wheelId: number, drivenState: boolean): void;
        getIsDrivenWheel(wheelId: number): boolean;
        getDrivenWheelStatus(): number;
        setDrivenWheelStatus(status: number): void;
    }
    class PxVehicleDrivableSurfaceToTireFrictionPairs {
        allocate(maxNbTireTypes: number, maxNbSurfaceTypes: number): PxVehicleDrivableSurfaceToTireFrictionPairs;
        setup(nbTireTypes: number, nbSurfaceTypes: number, drivableSurfaceMaterials: PxMaterialConstPtr, drivableSurfaceTypes: PxVehicleDrivableSurfaceType): void;
        release(): void;
        setTypePairFriction(surfaceType: number, tireType: number, value: number): void;
        getTypePairFriction(surfaceType: number, tireType: number): number;
        getMaxNbSurfaceTypes(): number;
        getMaxNbTireTypes(): number;
    }
    class PxVehicleDrivableSurfaceType {
        constructor();
        get_mType(): number;
        set_mType(mType: number): void;
        mType: number;
    }
    class PxVehicleDrive extends PxVehicleWheels {
        get_mDriveDynData(): PxVehicleDriveDynData;
        set_mDriveDynData(mDriveDynData: PxVehicleDriveDynData): void;
        mDriveDynData: PxVehicleDriveDynData;
    }
    class PxVehicleDrive4W extends PxVehicleDrive {
        allocate(nbWheels: number): PxVehicleDrive4W;
        free(): void;
        setup(physics: PxPhysics, vehActor: PxRigidDynamic, wheelsData: PxVehicleWheelsSimData, driveData: PxVehicleDriveSimData4W, nbNonDrivenWheels: number): void;
        setToRestState(): void;
        get_mDriveSimData(): PxVehicleDriveSimData4W;
        set_mDriveSimData(mDriveSimData: PxVehicleDriveSimData4W): void;
        mDriveSimData: PxVehicleDriveSimData4W;
    }
    type PxVehicleDrive4WControlEnum = "PxVehicleDrive4WControlEnum::eANALOG_INPUT_ACCEL" | "PxVehicleDrive4WControlEnum::eANALOG_INPUT_BRAKE" | "PxVehicleDrive4WControlEnum::eANALOG_INPUT_HANDBRAKE" | "PxVehicleDrive4WControlEnum::eANALOG_INPUT_STEER_LEFT" | "PxVehicleDrive4WControlEnum::eANALOG_INPUT_STEER_RIGHT" | "PxVehicleDrive4WControlEnum::eMAX_NB_DRIVE4W_ANALOG_INPUTS";
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
        get_mControlAnalogVals(): ReadonlyArray<number>;
        set_mControlAnalogVals(mControlAnalogVals: ReadonlyArray<number>): void;
        mControlAnalogVals: ReadonlyArray<number>;
        get_mUseAutoGears(): boolean;
        set_mUseAutoGears(mUseAutoGears: boolean): void;
        mUseAutoGears: boolean;
        get_mGearUpPressed(): boolean;
        set_mGearUpPressed(mGearUpPressed: boolean): void;
        mGearUpPressed: boolean;
        get_mGearDownPressed(): boolean;
        set_mGearDownPressed(mGearDownPressed: boolean): void;
        mGearDownPressed: boolean;
        get_mCurrentGear(): number;
        set_mCurrentGear(mCurrentGear: number): void;
        mCurrentGear: number;
        get_mTargetGear(): number;
        set_mTargetGear(mTargetGear: number): void;
        mTargetGear: number;
        get_mEnginespeed(): number;
        set_mEnginespeed(mEnginespeed: number): void;
        mEnginespeed: number;
        get_mGearSwitchTime(): number;
        set_mGearSwitchTime(mGearSwitchTime: number): void;
        mGearSwitchTime: number;
        get_mAutoBoxSwitchTime(): number;
        set_mAutoBoxSwitchTime(mAutoBoxSwitchTime: number): void;
        mAutoBoxSwitchTime: number;
    }
    class PxVehicleDriveNW extends PxVehicleDrive {
        allocate(nbWheels: number): PxVehicleDriveNW;
        free(): void;
        setup(physics: PxPhysics, vehActor: PxRigidDynamic, wheelsData: PxVehicleWheelsSimData, driveData: PxVehicleDriveSimDataNW, nbWheels: number): void;
        setToRestState(): void;
        get_mDriveSimData(): PxVehicleDriveSimDataNW;
        set_mDriveSimData(mDriveSimData: PxVehicleDriveSimDataNW): void;
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
        allocate(nbWheels: number): PxVehicleDriveTank;
        free(): void;
        setup(physics: PxPhysics, vehActor: PxRigidDynamic, wheelsData: PxVehicleWheelsSimData, driveData: PxVehicleDriveSimData, nbDrivenWheels: number): void;
        setDriveModel(driveModel: PxVehicleDriveTankControlModelEnum): void;
        getDriveModel(): PxVehicleDriveTankControlModelEnum;
        setToRestState(): void;
        get_mDriveSimData(): PxVehicleDriveSimData;
        set_mDriveSimData(mDriveSimData: PxVehicleDriveSimData): void;
        mDriveSimData: PxVehicleDriveSimData;
    }
    type PxVehicleDriveTankControlModelEnum = "PxVehicleDriveTankControlModelEnum::eSTANDARD" | "PxVehicleDriveTankControlModelEnum::eSPECIAL";
    class PxVehicleEngineData {
        constructor();
        get_mTorqueCurve(): PxEngineTorqueLookupTable;
        set_mTorqueCurve(mTorqueCurve: PxEngineTorqueLookupTable): void;
        mTorqueCurve: PxEngineTorqueLookupTable;
        get_mMOI(): number;
        set_mMOI(mMOI: number): void;
        mMOI: number;
        get_mPeakTorque(): number;
        set_mPeakTorque(mPeakTorque: number): void;
        mPeakTorque: number;
        get_mMaxOmega(): number;
        set_mMaxOmega(mMaxOmega: number): void;
        mMaxOmega: number;
        get_mDampingRateFullThrottle(): number;
        set_mDampingRateFullThrottle(mDampingRateFullThrottle: number): void;
        mDampingRateFullThrottle: number;
        get_mDampingRateZeroThrottleClutchEngaged(): number;
        set_mDampingRateZeroThrottleClutchEngaged(mDampingRateZeroThrottleClutchEngaged: number): void;
        mDampingRateZeroThrottleClutchEngaged: number;
        get_mDampingRateZeroThrottleClutchDisengaged(): number;
        set_mDampingRateZeroThrottleClutchDisengaged(mDampingRateZeroThrottleClutchDisengaged: number): void;
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
        get_mDataPairs(): ReadonlyArray<number>;
        set_mDataPairs(mDataPairs: ReadonlyArray<number>): void;
        mDataPairs: ReadonlyArray<number>;
        get_mNbDataPairs(): number;
        set_mNbDataPairs(mNbDataPairs: number): void;
        mNbDataPairs: number;
    }
    class PxVehicleGearsData {
        constructor();
        getGearRatio(a: PxVehicleGearEnum): number;
        setGearRatio(a: PxVehicleGearEnum, ratio: number): void;
        get_mRatios(): ReadonlyArray<number>;
        set_mRatios(mRatios: ReadonlyArray<number>): void;
        mRatios: ReadonlyArray<number>;
        get_mFinalRatio(): number;
        set_mFinalRatio(mFinalRatio: number): void;
        mFinalRatio: number;
        get_mNbRatios(): number;
        set_mNbRatios(mNbRatios: number): void;
        mNbRatios: number;
        get_mSwitchTime(): number;
        set_mSwitchTime(mSwitchTime: number): void;
        mSwitchTime: number;
    }
    type PxVehicleGearEnum = "PxVehicleGearEnum::eREVERSE" | "PxVehicleGearEnum::eNEUTRAL" | "PxVehicleGearEnum::eFIRST" | "PxVehicleGearEnum::eSECOND" | "PxVehicleGearEnum::eTHIRD" | "PxVehicleGearEnum::eFOURTH" | "PxVehicleGearEnum::eFIFTH" | "PxVehicleGearEnum::eSIXTH" | "PxVehicleGearEnum::eSEVENTH" | "PxVehicleGearEnum::eEIGHTH" | "PxVehicleGearEnum::eNINTH" | "PxVehicleGearEnum::eTENTH" | "PxVehicleGearEnum::eELEVENTH" | "PxVehicleGearEnum::eTWELFTH" | "PxVehicleGearEnum::eTHIRTEENTH" | "PxVehicleGearEnum::eFOURTEENTH" | "PxVehicleGearEnum::eFIFTEENTH" | "PxVehicleGearEnum::eSIXTEENTH" | "PxVehicleGearEnum::eSEVENTEENTH" | "PxVehicleGearEnum::eEIGHTEENTH" | "PxVehicleGearEnum::eNINETEENTH" | "PxVehicleGearEnum::eTWENTIETH" | "PxVehicleGearEnum::eTWENTYFIRST" | "PxVehicleGearEnum::eTWENTYSECOND" | "PxVehicleGearEnum::eTWENTYTHIRD" | "PxVehicleGearEnum::eTWENTYFOURTH" | "PxVehicleGearEnum::eTWENTYFIFTH" | "PxVehicleGearEnum::eTWENTYSIXTH" | "PxVehicleGearEnum::eTWENTYSEVENTH" | "PxVehicleGearEnum::eTWENTYEIGHTH" | "PxVehicleGearEnum::eTWENTYNINTH" | "PxVehicleGearEnum::eTHIRTIETH" | "PxVehicleGearEnum::eGEARSRATIO_COUNT";
    class PxVehicleNoDrive extends PxVehicleWheels {
        allocate(nbWheels: number): PxVehicleNoDrive;
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
        get_mSpringStrength(): number;
        set_mSpringStrength(mSpringStrength: number): void;
        mSpringStrength: number;
        get_mSpringDamperRate(): number;
        set_mSpringDamperRate(mSpringDamperRate: number): void;
        mSpringDamperRate: number;
        get_mMaxCompression(): number;
        set_mMaxCompression(mMaxCompression: number): void;
        mMaxCompression: number;
        get_mMaxDroop(): number;
        set_mMaxDroop(mMaxDroop: number): void;
        mMaxDroop: number;
        get_mSprungMass(): number;
        set_mSprungMass(mSprungMass: number): void;
        mSprungMass: number;
        get_mCamberAtRest(): number;
        set_mCamberAtRest(mCamberAtRest: number): void;
        mCamberAtRest: number;
        get_mCamberAtMaxCompression(): number;
        set_mCamberAtMaxCompression(mCamberAtMaxCompression: number): void;
        mCamberAtMaxCompression: number;
        get_mCamberAtMaxDroop(): number;
        set_mCamberAtMaxDroop(mCamberAtMaxDroop: number): void;
        mCamberAtMaxDroop: number;
    }
    class PxVehicleTireData {
        constructor();
        get_mLatStiffX(): number;
        set_mLatStiffX(mLatStiffX: number): void;
        mLatStiffX: number;
        get_mLatStiffY(): number;
        set_mLatStiffY(mLatStiffY: number): void;
        mLatStiffY: number;
        get_mLongitudinalStiffnessPerUnitGravity(): number;
        set_mLongitudinalStiffnessPerUnitGravity(mLongitudinalStiffnessPerUnitGravity: number): void;
        mLongitudinalStiffnessPerUnitGravity: number;
        get_mCamberStiffnessPerUnitGravity(): number;
        set_mCamberStiffnessPerUnitGravity(mCamberStiffnessPerUnitGravity: number): void;
        mCamberStiffnessPerUnitGravity: number;
        get_mType(): number;
        set_mType(mType: number): void;
        mType: number;
    }
    class PxVehicleTireLoadFilterData {
        constructor();
        getDenominator(): number;
        get_mMinNormalisedLoad(): number;
        set_mMinNormalisedLoad(mMinNormalisedLoad: number): void;
        mMinNormalisedLoad: number;
        get_mMinFilteredNormalisedLoad(): number;
        set_mMinFilteredNormalisedLoad(mMinFilteredNormalisedLoad: number): void;
        mMinFilteredNormalisedLoad: number;
        get_mMaxNormalisedLoad(): number;
        set_mMaxNormalisedLoad(mMaxNormalisedLoad: number): void;
        mMaxNormalisedLoad: number;
        get_mMaxFilteredNormalisedLoad(): number;
        set_mMaxFilteredNormalisedLoad(mMaxFilteredNormalisedLoad: number): void;
        mMaxFilteredNormalisedLoad: number;
    }
    type PxVehicleUpdateModeEnum = "PxVehicleUpdateModeEnum::eVELOCITY_CHANGE" | "PxVehicleUpdateModeEnum::eACCELERATION";
    class PxVehicleWheelData {
        constructor();
        get_mRadius(): number;
        set_mRadius(mRadius: number): void;
        mRadius: number;
        get_mWidth(): number;
        set_mWidth(mWidth: number): void;
        mWidth: number;
        get_mMass(): number;
        set_mMass(mMass: number): void;
        mMass: number;
        get_mMOI(): number;
        set_mMOI(mMOI: number): void;
        mMOI: number;
        get_mDampingRate(): number;
        set_mDampingRate(mDampingRate: number): void;
        mDampingRate: number;
        get_mMaxBrakeTorque(): number;
        set_mMaxBrakeTorque(mMaxBrakeTorque: number): void;
        mMaxBrakeTorque: number;
        get_mMaxHandBrakeTorque(): number;
        set_mMaxHandBrakeTorque(mMaxHandBrakeTorque: number): void;
        mMaxHandBrakeTorque: number;
        get_mMaxSteer(): number;
        set_mMaxSteer(mMaxSteer: number): void;
        mMaxSteer: number;
        get_mToeAngle(): number;
        set_mToeAngle(mToeAngle: number): void;
        mToeAngle: number;
    }
    class PxVehicleWheelQueryResult {
        constructor();
        get_wheelQueryResults(): PxWheelQueryResult;
        set_wheelQueryResults(wheelQueryResults: PxWheelQueryResult): void;
        wheelQueryResults: PxWheelQueryResult;
        get_nbWheelQueryResults(): number;
        set_nbWheelQueryResults(nbWheelQueryResults: number): void;
        nbWheelQueryResults: number;
    }
    class PxVehicleWheels extends PxBase {
        getVehicleType(): number;
        getRigidDynamicActor(): PxRigidDynamic;
        computeForwardSpeed(): number;
        computeSidewaysSpeed(): number;
        getNbNonDrivenWheels(): number;
        get_mWheelsSimData(): PxVehicleWheelsSimData;
        set_mWheelsSimData(mWheelsSimData: PxVehicleWheelsSimData): void;
        mWheelsSimData: PxVehicleWheelsSimData;
        get_mWheelsDynData(): PxVehicleWheelsDynData;
        set_mWheelsDynData(mWheelsDynData: PxVehicleWheelsDynData): void;
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
        allocate(nbWheels: number): PxVehicleWheelsSimData;
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
    type PxVehicleWheelsSimFlagEnum = "PxVehicleWheelsSimFlagEnum::eLIMIT_SUSPENSION_EXPANSION_VELOCITY";
    class PxVehicleWheelsSimFlags {
        constructor(flags: number);
        isSet(flag: PxVehicleWheelsSimFlagEnum): boolean;
        set(flag: PxVehicleWheelsSimFlagEnum): void;
        clear(flag: PxVehicleWheelsSimFlagEnum): void;
    }
    class PxWheelQueryResult {
        constructor();
        get_suspLineStart(): PxVec3;
        set_suspLineStart(suspLineStart: PxVec3): void;
        suspLineStart: PxVec3;
        get_suspLineDir(): PxVec3;
        set_suspLineDir(suspLineDir: PxVec3): void;
        suspLineDir: PxVec3;
        get_suspLineLength(): number;
        set_suspLineLength(suspLineLength: number): void;
        suspLineLength: number;
        get_isInAir(): boolean;
        set_isInAir(isInAir: boolean): void;
        isInAir: boolean;
        get_tireContactActor(): PxActor;
        set_tireContactActor(tireContactActor: PxActor): void;
        tireContactActor: PxActor;
        get_tireContactShape(): PxShape;
        set_tireContactShape(tireContactShape: PxShape): void;
        tireContactShape: PxShape;
        get_tireSurfaceMaterial(): PxMaterial;
        set_tireSurfaceMaterial(tireSurfaceMaterial: PxMaterial): void;
        tireSurfaceMaterial: PxMaterial;
        get_tireSurfaceType(): number;
        set_tireSurfaceType(tireSurfaceType: number): void;
        tireSurfaceType: number;
        get_tireContactPoint(): PxVec3;
        set_tireContactPoint(tireContactPoint: PxVec3): void;
        tireContactPoint: PxVec3;
        get_tireContactNormal(): PxVec3;
        set_tireContactNormal(tireContactNormal: PxVec3): void;
        tireContactNormal: PxVec3;
        get_tireFriction(): number;
        set_tireFriction(tireFriction: number): void;
        tireFriction: number;
        get_suspJounce(): number;
        set_suspJounce(suspJounce: number): void;
        suspJounce: number;
        get_suspSpringForce(): number;
        set_suspSpringForce(suspSpringForce: number): void;
        suspSpringForce: number;
        get_tireLongitudinalDir(): PxVec3;
        set_tireLongitudinalDir(tireLongitudinalDir: PxVec3): void;
        tireLongitudinalDir: PxVec3;
        get_tireLateralDir(): PxVec3;
        set_tireLateralDir(tireLateralDir: PxVec3): void;
        tireLateralDir: PxVec3;
        get_longitudinalSlip(): number;
        set_longitudinalSlip(longitudinalSlip: number): void;
        longitudinalSlip: number;
        get_lateralSlip(): number;
        set_lateralSlip(lateralSlip: number): void;
        lateralSlip: number;
        get_steerAngle(): number;
        set_steerAngle(steerAngle: number): void;
        steerAngle: number;
        get_localPose(): PxTransform;
        set_localPose(localPose: PxTransform): void;
        localPose: PxTransform;
    }
    type VehicleSurfaceTypeMask = "DRIVABLE_SURFACE" | "UNDRIVABLE_SURFACE";
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
    type PxConvexMeshGeometryFlagEnum = "PxConvexMeshGeometryFlagEnum::eTIGHT_BOUNDS";
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
        sweep(unitDir: PxVec3, maxDist: number, geom0: PxGeometry, pose0: PxTransform, geom1: PxGeometry, pose1: PxTransform, sweepHit: PxSweepHit, hitFlags?: PxHitFlags, inflation?: number): boolean;
        overlap(geom0: PxGeometry, pose0: PxTransform, geom1: PxGeometry, pose1: PxTransform): boolean;
        raycast(origin: PxVec3, unitDir: PxVec3, geom: PxGeometry, pose: PxTransform, maxDist: number, hitFlags: PxHitFlags, maxHits: number, rayHits: PxRaycastHit): number;
        pointDistance(point: PxVec3, geom: PxGeometry, pose: PxTransform, closestPoint?: PxVec3): number;
        getWorldBounds(geom: PxGeometry, pose: PxTransform, inflation?: number): PxBounds3;
        isValid(geom: PxGeometry): boolean;
    }
    type PxGeometryTypeEnum = "PxGeometryTypeEnum::eSPHERE" | "PxGeometryTypeEnum::ePLANE" | "PxGeometryTypeEnum::eCAPSULE" | "PxGeometryTypeEnum::eBOX" | "PxGeometryTypeEnum::eCONVEXMESH" | "PxGeometryTypeEnum::eTRIANGLEMESH" | "PxGeometryTypeEnum::eHEIGHTFIELD";
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
        get_nbRows(): number;
        set_nbRows(nbRows: number): void;
        nbRows: number;
        get_nbColumns(): number;
        set_nbColumns(nbColumns: number): void;
        nbColumns: number;
        get_format(): PxHeightFieldFormatEnum;
        set_format(format: PxHeightFieldFormatEnum): void;
        format: PxHeightFieldFormatEnum;
        get_samples(): PxStridedData;
        set_samples(samples: PxStridedData): void;
        samples: PxStridedData;
        get_convexEdgeThreshold(): number;
        set_convexEdgeThreshold(convexEdgeThreshold: number): void;
        convexEdgeThreshold: number;
        get_flags(): PxHeightFieldFlags;
        set_flags(flags: PxHeightFieldFlags): void;
        flags: PxHeightFieldFlags;
    }
    class PxHeightFieldFlags {
        constructor(flags: number);
        isSet(flag: PxHeightFieldFlagEnum): boolean;
        set(flag: PxHeightFieldFlagEnum): void;
        clear(flag: PxHeightFieldFlagEnum): void;
    }
    type PxHeightFieldFlagEnum = "PxHeightFieldFlagEnum::eNO_BOUNDARY_EDGES";
    type PxHeightFieldFormatEnum = "PxHeightFieldFormatEnum::eS16_TM";
    class PxHeightFieldGeometry extends PxGeometry {
        constructor();
        constructor(hf: PxHeightField, flags: PxMeshGeometryFlags, heightScale: number, rowScale: number, columnScale: number);
        isValid(): boolean;
        get_heightField(): PxHeightField;
        set_heightField(heightField: PxHeightField): void;
        heightField: PxHeightField;
        get_heightScale(): number;
        set_heightScale(heightScale: number): void;
        heightScale: number;
        get_rowScale(): number;
        set_rowScale(rowScale: number): void;
        rowScale: number;
        get_columnScale(): number;
        set_columnScale(columnScale: number): void;
        columnScale: number;
        get_heightFieldFlags(): PxMeshGeometryFlags;
        set_heightFieldFlags(heightFieldFlags: PxMeshGeometryFlags): void;
        heightFieldFlags: PxMeshGeometryFlags;
    }
    class PxHeightFieldSample {
        get_height(): number;
        set_height(height: number): void;
        height: number;
        get_materialIndex0(): number;
        set_materialIndex0(materialIndex0: number): void;
        materialIndex0: number;
        get_materialIndex1(): number;
        set_materialIndex1(materialIndex1: number): void;
        materialIndex1: number;
    }
    class PxHullPolygon {
        constructor();
        get_mPlane(): ReadonlyArray<number>;
        set_mPlane(mPlane: ReadonlyArray<number>): void;
        mPlane: ReadonlyArray<number>;
        get_mNbVerts(): number;
        set_mNbVerts(mNbVerts: number): void;
        mNbVerts: number;
        get_mIndexBase(): number;
        set_mIndexBase(mIndexBase: number): void;
        mIndexBase: number;
    }
    type PxMeshFlagEnum = "PxMeshFlagEnum::eFLIPNORMALS" | "PxMeshFlagEnum::e16_BIT_INDICES";
    class PxMeshFlags {
        constructor(flags: number);
        isSet(flag: PxMeshFlagEnum): boolean;
        set(flag: PxMeshFlagEnum): void;
        clear(flag: PxMeshFlagEnum): void;
    }
    type PxMeshGeometryFlagEnum = "PxMeshGeometryFlagEnum::eDOUBLE_SIDED";
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
        get_points(): PxBoundedData;
        set_points(points: PxBoundedData): void;
        points: PxBoundedData;
        get_triangles(): PxBoundedData;
        set_triangles(triangles: PxBoundedData): void;
        triangles: PxBoundedData;
        get_flags(): PxMeshFlags;
        set_flags(flags: PxMeshFlags): void;
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
    type PxTriangleMeshFlagEnum = "PxTriangleMeshFlagEnum::e16_BIT_INDICES" | "PxTriangleMeshFlagEnum::eADJACENCY_INFO";
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
        get_meshSizePerformanceTradeOff(): number;
        set_meshSizePerformanceTradeOff(meshSizePerformanceTradeOff: number): void;
        meshSizePerformanceTradeOff: number;
        get_meshCookingHint(): PxMeshCookingHintEnum;
        set_meshCookingHint(meshCookingHint: PxMeshCookingHintEnum): void;
        meshCookingHint: PxMeshCookingHintEnum;
    }
    class PxBVH34MidphaseDesc {
        setToDefault(): void;
        isValid(): boolean;
        get_numPrimsPerLeaf(): number;
        set_numPrimsPerLeaf(numPrimsPerLeaf: number): void;
        numPrimsPerLeaf: number;
    }
    type PxConvexFlagEnum = "PxConvexFlagEnum::e16_BIT_INDICES" | "PxConvexFlagEnum::eCOMPUTE_CONVEX" | "PxConvexFlagEnum::eCHECK_ZERO_AREA_TRIANGLES" | "PxConvexFlagEnum::eQUANTIZE_INPUT" | "PxConvexFlagEnum::eDISABLE_MESH_VALIDATION" | "PxConvexFlagEnum::ePLANE_SHIFTING" | "PxConvexFlagEnum::eFAST_INERTIA_COMPUTATION" | "PxConvexFlagEnum::eGPU_COMPATIBLE" | "PxConvexFlagEnum::eSHIFT_VERTICES";
    class PxConvexFlags {
        constructor(flags: number);
        isSet(flag: PxConvexFlagEnum): boolean;
        set(flag: PxConvexFlagEnum): void;
        clear(flag: PxConvexFlagEnum): void;
    }
    class PxConvexMeshDesc {
        constructor();
        get_points(): PxBoundedData;
        set_points(points: PxBoundedData): void;
        points: PxBoundedData;
        get_flags(): PxConvexFlags;
        set_flags(flags: PxConvexFlags): void;
        flags: PxConvexFlags;
    }
    type PxConvexMeshCookingTypeEnum = "PxConvexMeshCookingTypeEnum::eQUICKHULL";
    class PxCooking {
        release(): void;
        createConvexMesh(desc: PxConvexMeshDesc, insertionCallback: PxPhysicsInsertionCallback): PxConvexMesh;
        createTriangleMesh(desc: PxTriangleMeshDesc, insertionCallback: PxPhysicsInsertionCallback): PxTriangleMesh;
        createHeightField(desc: PxHeightFieldDesc, insertionCallback: PxPhysicsInsertionCallback): PxHeightField;
    }
    class PxCookingParams {
        constructor(sc: PxTolerancesScale);
        get_areaTestEpsilon(): number;
        set_areaTestEpsilon(areaTestEpsilon: number): void;
        areaTestEpsilon: number;
        get_planeTolerance(): number;
        set_planeTolerance(planeTolerance: number): void;
        planeTolerance: number;
        get_convexMeshCookingType(): PxConvexMeshCookingTypeEnum;
        set_convexMeshCookingType(convexMeshCookingType: PxConvexMeshCookingTypeEnum): void;
        convexMeshCookingType: PxConvexMeshCookingTypeEnum;
        get_suppressTriangleMeshRemapTable(): boolean;
        set_suppressTriangleMeshRemapTable(suppressTriangleMeshRemapTable: boolean): void;
        suppressTriangleMeshRemapTable: boolean;
        get_buildTriangleAdjacencies(): boolean;
        set_buildTriangleAdjacencies(buildTriangleAdjacencies: boolean): void;
        buildTriangleAdjacencies: boolean;
        get_buildGPUData(): boolean;
        set_buildGPUData(buildGPUData: boolean): void;
        buildGPUData: boolean;
        get_scale(): PxTolerancesScale;
        set_scale(scale: PxTolerancesScale): void;
        scale: PxTolerancesScale;
        get_meshPreprocessParams(): PxMeshPreprocessingFlags;
        set_meshPreprocessParams(meshPreprocessParams: PxMeshPreprocessingFlags): void;
        meshPreprocessParams: PxMeshPreprocessingFlags;
        get_meshWeldTolerance(): number;
        set_meshWeldTolerance(meshWeldTolerance: number): void;
        meshWeldTolerance: number;
        get_midphaseDesc(): PxMidphaseDesc;
        set_midphaseDesc(midphaseDesc: PxMidphaseDesc): void;
        midphaseDesc: PxMidphaseDesc;
        get_gaussMapLimit(): number;
        set_gaussMapLimit(gaussMapLimit: number): void;
        gaussMapLimit: number;
    }
    type PxMeshCookingHintEnum = "PxMeshCookingHintEnum::eSIM_PERFORMANCE" | "PxMeshCookingHintEnum::eCOOKING_PERFORMANCE";
    type PxMeshPreprocessingFlagEnum = "PxMeshPreprocessingFlagEnum::eWELD_VERTICES" | "PxMeshPreprocessingFlagEnum::eDISABLE_CLEAN_MESH" | "PxMeshPreprocessingFlagEnum::eDISABLE_ACTIVE_EDGES_PRECOMPUTE" | "PxMeshPreprocessingFlagEnum::eFORCE_32BIT_INDICES";
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
        get_mBVH33Desc(): PxBVH33MidphaseDesc;
        set_mBVH33Desc(mBVH33Desc: PxBVH33MidphaseDesc): void;
        mBVH33Desc: PxBVH33MidphaseDesc;
        get_mBVH34Desc(): PxBVH34MidphaseDesc;
        set_mBVH34Desc(mBVH34Desc: PxBVH34MidphaseDesc): void;
        mBVH34Desc: PxBVH34MidphaseDesc;
    }
    type PxMeshMidPhaseEnum = "PxMeshMidPhaseEnum::eBVH33" | "PxMeshMidPhaseEnum::eBVH34";
    class PxTriangleMeshDesc extends PxSimpleTriangleMesh {
        constructor();
        setToDefault(): void;
        isValid(): boolean;
        get_materialIndices(): PxU16StridedData;
        set_materialIndices(materialIndices: PxU16StridedData): void;
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
    type PxBaseFlagEnum = "PxBaseFlagEnum::eOWNS_MEMORY" | "PxBaseFlagEnum::eIS_RELEASABLE";
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
        get_count(): number;
        set_count(count: number): void;
        count: number;
        get_stride(): number;
        set_stride(stride: number): void;
        stride: number;
        get_data(): unknown;
        set_data(data: unknown): void;
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
        get_minimum(): PxVec3;
        set_minimum(minimum: PxVec3): void;
        minimum: PxVec3;
        get_maximum(): PxVec3;
        set_maximum(maximum: PxVec3): void;
        maximum: PxVec3;
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
        get_graphicsDevice(): unknown;
        set_graphicsDevice(graphicsDevice: unknown): void;
        graphicsDevice: unknown;
        get_interopMode(): PxCudaInteropModeEnum;
        set_interopMode(interopMode: PxCudaInteropModeEnum): void;
        interopMode: PxCudaInteropModeEnum;
    }
    type PxCudaBufferMemorySpaceEnum = "PxCudaBufferMemorySpaceEnum::T_GPU" | "PxCudaBufferMemorySpaceEnum::T_PINNED_HOST" | "PxCudaBufferMemorySpaceEnum::T_WRITE_COMBINED" | "PxCudaBufferMemorySpaceEnum::T_HOST";
    type PxCudaInteropModeEnum = "PxCudaInteropModeEnum::NO_INTEROP" | "PxCudaInteropModeEnum::D3D10_INTEROP" | "PxCudaInteropModeEnum::D3D11_INTEROP" | "PxCudaInteropModeEnum::OGL_INTEROP";
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
    type PxErrorCodeEnum = "PxErrorCodeEnum::eNO_ERROR" | "PxErrorCodeEnum::eDEBUG_INFO" | "PxErrorCodeEnum::eDEBUG_WARNING" | "PxErrorCodeEnum::eINVALID_PARAMETER" | "PxErrorCodeEnum::eINVALID_OPERATION" | "PxErrorCodeEnum::eOUT_OF_MEMORY" | "PxErrorCodeEnum::eINTERNAL_ERROR" | "PxErrorCodeEnum::eABORT" | "PxErrorCodeEnum::ePERF_WARNING" | "PxErrorCodeEnum::eMASK_ALL";
    class PxFoundation {
        release(): void;
    }
    type PxIDENTITYEnum = "PxIDENTITYEnum::PxIdentity";
    class PxPhysicsInsertionCallback {
    }
    class PxQuat {
        constructor();
        constructor(x: number, y: number, z: number, w: number);
        get_x(): number;
        set_x(x: number): void;
        x: number;
        get_y(): number;
        set_y(y: number): void;
        y: number;
        get_z(): number;
        set_z(z: number): void;
        z: number;
        get_w(): number;
        set_w(w: number): void;
        w: number;
    }
    class PxTolerancesScale {
        constructor();
    }
    class PxTransform {
        constructor(r: PxIDENTITYEnum);
        constructor(p0: PxVec3, q0: PxQuat);
        get_q(): PxQuat;
        set_q(q: PxQuat): void;
        q: PxQuat;
        get_p(): PxVec3;
        set_p(p: PxVec3): void;
        p: PxVec3;
    }
    class PxStridedData {
        get_stride(): number;
        set_stride(stride: number): void;
        stride: number;
        get_data(): unknown;
        set_data(data: unknown): void;
        data: unknown;
    }
    class PxU16StridedData {
        get_stride(): number;
        set_stride(stride: number): void;
        stride: number;
        get_data(): PxU16ConstPtr;
        set_data(data: PxU16ConstPtr): void;
        data: PxU16ConstPtr;
    }
    class PxVec3 {
        constructor();
        constructor(x: number, y: number, z: number);
        get_x(): number;
        set_x(x: number): void;
        x: number;
        get_y(): number;
        set_y(y: number): void;
        y: number;
        get_z(): number;
        set_z(z: number): void;
        z: number;
    }
    type PxD6AxisEnum = "PxD6AxisEnum::eX" | "PxD6AxisEnum::eY" | "PxD6AxisEnum::eZ" | "PxD6AxisEnum::eTWIST" | "PxD6AxisEnum::eSWING1" | "PxD6AxisEnum::eSWING2" | "PxD6AxisEnum::eCOUNT";
    type PxD6DriveEnum = "PxD6DriveEnum::eX" | "PxD6DriveEnum::eY" | "PxD6DriveEnum::eZ" | "PxD6DriveEnum::eSWING" | "PxD6DriveEnum::eTWIST" | "PxD6DriveEnum::eSLERP" | "PxD6DriveEnum::eCOUNT";
    class PxD6Joint {
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
        get_forceLimit(): number;
        set_forceLimit(forceLimit: number): void;
        forceLimit: number;
        get_flags(): PxD6JointDriveFlags;
        set_flags(flags: PxD6JointDriveFlags): void;
        flags: PxD6JointDriveFlags;
    }
    type PxD6JointDriveFlagEnum = "PxD6JointDriveFlagEnum::eACCELERATION";
    class PxD6JointDriveFlags {
        constructor(flags: number);
        isSet(flag: PxD6JointDriveFlagEnum): boolean;
        set(flag: PxD6JointDriveFlagEnum): void;
        clear(flag: PxD6JointDriveFlagEnum): void;
    }
    type PxD6MotionEnum = "PxD6MotionEnum::eLOCKED" | "PxD6MotionEnum::eLIMITED" | "PxD6MotionEnum::eFREE";
    class PxDefaultAllocator {
        constructor();
    }
    class PxDefaultCpuDispatcher extends PxCpuDispatcher {
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
    type PxDistanceJointFlagEnum = "PxDistanceJointFlagEnum::eMAX_DISTANCE_ENABLED" | "PxDistanceJointFlagEnum::eMIN_DISTANCE_ENABLED" | "PxDistanceJointFlagEnum::eSPRING_ENABLED";
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
    }
    type PxJointActorIndexEnum = "PxJointActorIndexEnum::eACTOR0" | "PxJointActorIndexEnum::eACTOR1" | "PxJointActorIndexEnum::COUNT";
    class PxJointAngularLimitPair extends PxJointLimitParameters {
        constructor(lowerLimit: number, upperLimit: number, spring: PxSpring);
        get_upper(): number;
        set_upper(upper: number): void;
        upper: number;
        get_lower(): number;
        set_lower(lower: number): void;
        lower: number;
    }
    class PxJointLimitCone extends PxJointLimitParameters {
        constructor(yLimitAngle: number, zLimitAngle: number, spring: PxSpring);
        get_yAngle(): number;
        set_yAngle(yAngle: number): void;
        yAngle: number;
        get_zAngle(): number;
        set_zAngle(zAngle: number): void;
        zAngle: number;
    }
    class PxJointLimitParameters {
        isValid(): boolean;
        isSoft(): boolean;
        get_restitution(): number;
        set_restitution(restitution: number): void;
        restitution: number;
        get_bounceThreshold(): number;
        set_bounceThreshold(bounceThreshold: number): void;
        bounceThreshold: number;
        get_stiffness(): number;
        set_stiffness(stiffness: number): void;
        stiffness: number;
        get_damping(): number;
        set_damping(damping: number): void;
        damping: number;
        get_contactDistance(): number;
        set_contactDistance(contactDistance: number): void;
        contactDistance: number;
    }
    class PxJointLimitPyramid extends PxJointLimitParameters {
        constructor(yLimitAngleMin: number, yLimitAngleMax: number, zLimitAngleMin: number, zLimitAngleMax: number, spring: PxSpring);
        get_yAngleMin(): number;
        set_yAngleMin(yAngleMin: number): void;
        yAngleMin: number;
        get_yAngleMax(): number;
        set_yAngleMax(yAngleMax: number): void;
        yAngleMax: number;
        get_zAngleMin(): number;
        set_zAngleMin(zAngleMin: number): void;
        zAngleMin: number;
        get_zAngleMax(): number;
        set_zAngleMax(zAngleMax: number): void;
        zAngleMax: number;
    }
    class PxJointLinearLimit {
        constructor(extent: number, spring: PxSpring);
        get_value(): number;
        set_value(value: number): void;
        value: number;
    }
    class PxJointLinearLimitPair extends PxJointLimitParameters {
        constructor(lowerLimit: number, upperLimit: number, spring: PxSpring);
        get_upper(): number;
        set_upper(upper: number): void;
        upper: number;
        get_lower(): number;
        set_lower(lower: number): void;
        lower: number;
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
    type PxPrismaticJointFlagEnum = "PxPrismaticJointFlagEnum::eLIMIT_ENABLED";
    class PxPrismaticJointFlags {
        constructor(flags: number);
        isSet(flag: PxPrismaticJointFlagEnum): boolean;
        set(flag: PxPrismaticJointFlagEnum): void;
        clear(flag: PxPrismaticJointFlagEnum): void;
    }
    class PxRigidActorExt {
        createExclusiveShape(actor: PxRigidActor, geometry: PxGeometry, material: PxMaterial, flags?: PxShapeFlags): PxShape;
    }
    class PxRigidBodyExt {
        updateMassAndInertia(body: PxRigidBody, density: number, massLocalPose?: PxVec3, includeNonSimShapes?: boolean): boolean;
        setMassAndUpdateInertia(body: PxRigidBody, mass: number, massLocalPose?: PxVec3, includeNonSimShapes?: boolean): boolean;
        addForceAtPos(body: PxRigidBody, force: PxVec3, pos: PxVec3, mode?: PxForceModeEnum, wakeup?: boolean): void;
        addForceAtLocalPos(body: PxRigidBody, force: PxVec3, pos: PxVec3, mode?: PxForceModeEnum, wakeup?: boolean): void;
        addLocalForceAtPos(body: PxRigidBody, force: PxVec3, pos: PxVec3, mode?: PxForceModeEnum, wakeup?: boolean): void;
        addLocalForceAtLocalPos(body: PxRigidBody, force: PxVec3, pos: PxVec3, mode?: PxForceModeEnum, wakeup?: boolean): void;
        getVelocityAtPos(body: PxRigidBody, pos: PxVec3): PxVec3;
        getLocalVelocityAtLocalPos(body: PxRigidBody, pos: PxVec3): PxVec3;
        getVelocityAtOffset(body: PxRigidBody, pos: PxVec3): PxVec3;
        computeVelocityDeltaFromImpulse(body: PxRigidBody, impulsiveForce: PxVec3, impulsiveTorque: PxVec3, deltaLinearVelocity: PxVec3, deltaAngularVelocity: PxVec3): void;
        computeVelocityDeltaFromImpulse(body: PxRigidBody, globalPose: PxTransform, point: PxVec3, impulse: PxVec3, invMassScale: number, invInertiaScale: number, deltaLinearVelocity: PxVec3, deltaAngularVelocity: PxVec3): void;
        computeLinearAngularImpulse(body: PxRigidBody, globalPose: PxTransform, point: PxVec3, impulse: PxVec3, invMassScale: number, invInertiaScale: number, linearImpulse: PxVec3, angularImpulse: PxVec3): void;
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
    type PxRevoluteJointFlagEnum = "PxRevoluteJointFlagEnum::eLIMIT_ENABLED" | "PxRevoluteJointFlagEnum::eDRIVE_ENABLED" | "PxRevoluteJointFlagEnum::eDRIVE_FREESPIN";
    class PxRevoluteJointFlags {
        constructor(flags: number);
        isSet(flag: PxRevoluteJointFlagEnum): boolean;
        set(flag: PxRevoluteJointFlagEnum): void;
        clear(flag: PxRevoluteJointFlagEnum): void;
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
    type PxSphericalJointFlagEnum = "PxSphericalJointFlagEnum::eLIMIT_ENABLED";
    class PxSphericalJointFlags {
        constructor(flags: number);
        isSet(flag: PxSphericalJointFlagEnum): boolean;
        set(flag: PxSphericalJointFlagEnum): void;
        clear(flag: PxSphericalJointFlagEnum): void;
    }
    class PxSpring {
        constructor(stiffness: number, damping: number);
        get_stiffness(): number;
        set_stiffness(stiffness: number): void;
        stiffness: number;
        get_damping(): number;
        set_damping(damping: number): void;
        damping: number;
    }
    class BatchVehicleUpdateDesc {
        constructor();
        get_foundation(): PxFoundation;
        set_foundation(foundation: PxFoundation): void;
        foundation: PxFoundation;
        get_scene(): PxScene;
        set_scene(scene: PxScene): void;
        scene: PxScene;
        get_frictionPairs(): PxVehicleDrivableSurfaceToTireFrictionPairs;
        set_frictionPairs(frictionPairs: PxVehicleDrivableSurfaceToTireFrictionPairs): void;
        frictionPairs: PxVehicleDrivableSurfaceToTireFrictionPairs;
        get_maxNbVehicles(): number;
        set_maxNbVehicles(maxNbVehicles: number): void;
        maxNbVehicles: number;
        get_maxNbWheelsPerVehicle(): number;
        set_maxNbWheelsPerVehicle(maxNbWheelsPerVehicle: number): void;
        maxNbWheelsPerVehicle: number;
        get_maxNbHitPointsPerWheel(): number;
        set_maxNbHitPointsPerWheel(maxNbHitPointsPerWheel: number): void;
        maxNbHitPointsPerWheel: number;
        get_numWorkers(): number;
        set_numWorkers(numWorkers: number): void;
        numWorkers: number;
        get_batchSize(): number;
        set_batchSize(batchSize: number): void;
        batchSize: number;
        get_preFilterShader(): PxBatchQueryPreFilterShader;
        set_preFilterShader(preFilterShader: PxBatchQueryPreFilterShader): void;
        preFilterShader: PxBatchQueryPreFilterShader;
        get_postFilterShader(): PxBatchQueryPostFilterShader;
        set_postFilterShader(postFilterShader: PxBatchQueryPostFilterShader): void;
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
        get_halfHeight(): number;
        set_halfHeight(halfHeight: number): void;
        halfHeight: number;
        get_halfSideExtent(): number;
        set_halfSideExtent(halfSideExtent: number): void;
        halfSideExtent: number;
        get_halfForwardExtent(): number;
        set_halfForwardExtent(halfForwardExtent: number): void;
        halfForwardExtent: number;
    }
    class PxBoxObstacle extends PxObstacle {
        constructor();
        get_mHalfExtents(): PxVec3;
        set_mHalfExtents(mHalfExtents: PxVec3): void;
        mHalfExtents: PxVec3;
    }
    type PxCapsuleClimbingModeEnum = "PxCapsuleClimbingModeEnum::eEASY" | "PxCapsuleClimbingModeEnum::eCONSTRAINED";
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
        get_radius(): number;
        set_radius(radius: number): void;
        radius: number;
        get_height(): number;
        set_height(height: number): void;
        height: number;
        get_climbingMode(): PxCapsuleClimbingModeEnum;
        set_climbingMode(climbingMode: PxCapsuleClimbingModeEnum): void;
        climbingMode: PxCapsuleClimbingModeEnum;
    }
    class PxCapsuleObstacle extends PxObstacle {
        constructor();
        get_mHalfHeight(): number;
        set_mHalfHeight(mHalfHeight: number): void;
        mHalfHeight: number;
        get_mRadius(): number;
        set_mRadius(mRadius: number): void;
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
    type PxControllerCollisionFlagEnum = "PxControllerCollisionFlagEnum::eCOLLISION_SIDES" | "PxControllerCollisionFlagEnum::eCOLLISION_UP" | "PxControllerCollisionFlagEnum::eCOLLISION_DOWN";
    class PxControllerCollisionFlags {
        constructor(flags: number);
        isSet(flag: PxControllerCollisionFlagEnum): boolean;
        set(flag: PxControllerCollisionFlagEnum): void;
        clear(flag: PxControllerCollisionFlagEnum): void;
    }
    class PxControllerDesc {
        isValid(): boolean;
        getType(): PxControllerShapeTypeEnum;
        get_position(): PxExtendedVec3;
        set_position(position: PxExtendedVec3): void;
        position: PxExtendedVec3;
        get_upDirection(): PxVec3;
        set_upDirection(upDirection: PxVec3): void;
        upDirection: PxVec3;
        get_slopeLimit(): number;
        set_slopeLimit(slopeLimit: number): void;
        slopeLimit: number;
        get_invisibleWallHeight(): number;
        set_invisibleWallHeight(invisibleWallHeight: number): void;
        invisibleWallHeight: number;
        get_maxJumpHeight(): number;
        set_maxJumpHeight(maxJumpHeight: number): void;
        maxJumpHeight: number;
        get_contactOffset(): number;
        set_contactOffset(contactOffset: number): void;
        contactOffset: number;
        get_stepOffset(): number;
        set_stepOffset(stepOffset: number): void;
        stepOffset: number;
        get_density(): number;
        set_density(density: number): void;
        density: number;
        get_scaleCoeff(): number;
        set_scaleCoeff(scaleCoeff: number): void;
        scaleCoeff: number;
        get_volumeGrowth(): number;
        set_volumeGrowth(volumeGrowth: number): void;
        volumeGrowth: number;
        get_reportCallback(): PxUserControllerHitReport;
        set_reportCallback(reportCallback: PxUserControllerHitReport): void;
        reportCallback: PxUserControllerHitReport;
        get_nonWalkableMode(): PxControllerNonWalkableModeEnum;
        set_nonWalkableMode(nonWalkableMode: PxControllerNonWalkableModeEnum): void;
        nonWalkableMode: PxControllerNonWalkableModeEnum;
        get_material(): PxMaterial;
        set_material(material: PxMaterial): void;
        material: PxMaterial;
        get_registerDeletionListener(): boolean;
        set_registerDeletionListener(registerDeletionListener: boolean): void;
        registerDeletionListener: boolean;
        get_userData(): unknown;
        set_userData(userData: unknown): void;
        userData: unknown;
    }
    class PxControllerFilters {
        constructor(filterData?: PxFilterData);
        get_mFilterData(): PxFilterData;
        set_mFilterData(mFilterData: PxFilterData): void;
        mFilterData: PxFilterData;
        get_mFilterFlags(): PxQueryFlags;
        set_mFilterFlags(mFilterFlags: PxQueryFlags): void;
        mFilterFlags: PxQueryFlags;
    }
    class PxControllerHit {
        get_controller(): PxController;
        set_controller(controller: PxController): void;
        controller: PxController;
        get_worldPos(): PxExtendedVec3;
        set_worldPos(worldPos: PxExtendedVec3): void;
        worldPos: PxExtendedVec3;
        get_worldNormal(): PxVec3;
        set_worldNormal(worldNormal: PxVec3): void;
        worldNormal: PxVec3;
        get_dir(): PxVec3;
        set_dir(dir: PxVec3): void;
        dir: PxVec3;
        get_length(): number;
        set_length(length: number): void;
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
    type PxControllerNonWalkableModeEnum = "PxControllerNonWalkableModeEnum::ePREVENT_CLIMBING" | "PxControllerNonWalkableModeEnum::ePREVENT_CLIMBING_AND_FORCE_SLIDING";
    class PxControllerObstacleHit extends PxControllerHit {
        get_userData(): unknown;
        set_userData(userData: unknown): void;
        userData: unknown;
    }
    class PxControllerShapeHit extends PxControllerHit {
        get_shape(): PxShape;
        set_shape(shape: PxShape): void;
        shape: PxShape;
        get_actor(): PxRigidActor;
        set_actor(actor: PxRigidActor): void;
        actor: PxRigidActor;
        get_triangleIndex(): number;
        set_triangleIndex(triangleIndex: number): void;
        triangleIndex: number;
    }
    class PxControllersHit extends PxControllerHit {
        get_other(): PxController;
        set_other(other: PxController): void;
        other: PxController;
    }
    type PxControllerShapeTypeEnum = "PxControllerShapeTypeEnum::eBOX" | "PxControllerShapeTypeEnum::eCAPSULE";
    class PxControllerState {
        constructor();
        get_deltaXP(): PxVec3;
        set_deltaXP(deltaXP: PxVec3): void;
        deltaXP: PxVec3;
        get_touchedShape(): PxShape;
        set_touchedShape(touchedShape: PxShape): void;
        touchedShape: PxShape;
        get_touchedActor(): PxRigidActor;
        set_touchedActor(touchedActor: PxRigidActor): void;
        touchedActor: PxRigidActor;
        get_touchedObstacleHandle(): number;
        set_touchedObstacleHandle(touchedObstacleHandle: number): void;
        touchedObstacleHandle: number;
        get_collisionFlags(): number;
        set_collisionFlags(collisionFlags: number): void;
        collisionFlags: number;
        get_standOnAnotherCCT(): boolean;
        set_standOnAnotherCCT(standOnAnotherCCT: boolean): void;
        standOnAnotherCCT: boolean;
        get_standOnObstacle(): boolean;
        set_standOnObstacle(standOnObstacle: boolean): void;
        standOnObstacle: boolean;
        get_isMovingUp(): boolean;
        set_isMovingUp(isMovingUp: boolean): void;
        isMovingUp: boolean;
    }
    class PxControllerStats {
        get_nbIterations(): number;
        set_nbIterations(nbIterations: number): void;
        nbIterations: number;
        get_nbFullUpdates(): number;
        set_nbFullUpdates(nbFullUpdates: number): void;
        nbFullUpdates: number;
        get_nbPartialUpdates(): number;
        set_nbPartialUpdates(nbPartialUpdates: number): void;
        nbPartialUpdates: number;
        get_nbTessellation(): number;
        set_nbTessellation(nbTessellation: number): void;
        nbTessellation: number;
    }
    class PxExtendedVec3 {
        constructor();
        constructor(x: number, y: number, z: number);
        get_x(): number;
        set_x(x: number): void;
        x: number;
        get_y(): number;
        set_y(y: number): void;
        y: number;
        get_z(): number;
        set_z(z: number): void;
        z: number;
    }
    class PxObstacle {
        getType(): PxGeometryTypeEnum;
        get_mUserData(): unknown;
        set_mUserData(mUserData: unknown): void;
        mUserData: unknown;
        get_mPos(): PxExtendedVec3;
        set_mPos(mPos: PxExtendedVec3): void;
        mPos: PxExtendedVec3;
        get_mRot(): PxQuat;
        set_mRot(mRot: PxQuat): void;
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
        PxActor_getShape(actor: PxRigidActor, index: number): PxShape;
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
    class PxU8Ptr {
    }
    class PxU8ConstPtr {
    }
    class PxU16Ptr {
    }
    class PxU16ConstPtr {
    }
    class PxU32Ptr {
    }
    class PxU32ConstPtr {
    }
    class TypeHelpers {
        getU8At(base: PxU8ConstPtr, index: number): number;
        getU16At(base: PxU16ConstPtr, index: number): number;
        getU32At(base: PxU32ConstPtr, index: number): number;
        getRealAt(base: PxRealPtr, index: number): number;
        getContactPairAt(base: PxContactPair, index: number): PxContactPair;
        getTriggerPairAt(base: PxTriggerPair, index: number): PxTriggerPair;
        getVec3At(base: PxVec3, index: number): PxVec3;
        voidToU8ConstPtr(voidPtr: unknown): PxU8ConstPtr;
        voidToU16ConstPtr(voidPtr: unknown): PxU16ConstPtr;
        voidToU32ConstPtr(voidPtr: unknown): PxU32ConstPtr;
        voidToRealPtr(voidPtr: unknown): PxRealPtr;
        articulationBaseJointToJoint(baseJoint: PxArticulationJointBase): PxArticulationJoint;
        voidToAny(voidPtr: unknown): any;
    }
    class Vector_PxMaterialConst {
        constructor();
        constructor(size: number);
        at(index: number): PxMaterial;
        data(): PxMaterialConstPtr;
        size(): number;
        push_back(value: PxMaterial): void;
    }
    class Vector_PxHeightFieldSample {
        constructor();
        constructor(size: number);
        at(index: number): PxHeightFieldSample;
        data(): PxHeightFieldSample;
        size(): number;
        push_back(value: PxHeightFieldSample): void;
    }
    class Vector_PxReal {
        constructor();
        constructor(size: number);
        at(index: number): number;
        data(): unknown;
        size(): number;
        push_back(value: number): void;
    }
    class Vector_PxU16 {
        constructor();
        constructor(size: number);
        at(index: number): number;
        data(): unknown;
        size(): number;
        push_back(value: number): void;
    }
    class Vector_PxU32 {
        constructor();
        constructor(size: number);
        at(index: number): number;
        data(): unknown;
        size(): number;
        push_back(value: number): void;
    }
    class Vector_PxVec3 {
        constructor();
        constructor(size: number);
        at(index: number): PxVec3;
        data(): PxVec3;
        size(): number;
        push_back(value: PxVec3): void;
    }
    class Vector_PxRaycastQueryResult {
        constructor();
        constructor(size: number);
        at(index: number): PxRaycastQueryResult;
        data(): PxRaycastQueryResult;
        size(): number;
        push_back(value: PxRaycastQueryResult): void;
    }
    class Vector_PxSweepQueryResult {
        constructor();
        constructor(size: number);
        at(index: number): PxSweepQueryResult;
        data(): PxSweepQueryResult;
        size(): number;
        push_back(value: PxSweepQueryResult): void;
    }
    class Vector_PxRaycastHit {
        constructor();
        constructor(size: number);
        at(index: number): PxRaycastHit;
        data(): PxRaycastHit;
        size(): number;
        push_back(value: PxRaycastHit): void;
    }
    class Vector_PxSweepHit {
        constructor();
        constructor(size: number);
        at(index: number): PxSweepHit;
        data(): PxSweepHit;
        size(): number;
        push_back(value: PxSweepHit): void;
    }
    class Vector_PxVehicleDrivableSurfaceType {
        constructor();
        constructor(size: number);
        at(index: number): PxVehicleDrivableSurfaceType;
        data(): PxVehicleDrivableSurfaceType;
        size(): number;
        push_back(value: PxVehicleDrivableSurfaceType): void;
    }
    class Vector_PxWheelQueryResult {
        constructor();
        constructor(size: number);
        at(index: number): PxWheelQueryResult;
        data(): PxWheelQueryResult;
        size(): number;
        push_back(value: PxWheelQueryResult): void;
    }
    class Vector_PxVehicleWheels {
        constructor();
        constructor(size: number);
        at(index: number): PxVehicleWheels;
        data(): PxVehicleWheelsPtr;
        size(): number;
        push_back(value: PxVehicleWheels): void;
    }
}