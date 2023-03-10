export declare const useSmoothPage: import("pinia").StoreDefinition<"publicSmoothPage", import("pinia")._UnwrapAll<Pick<{
    settings: import("vue").ComputedRef<{
        mode?: import("../interfaces/settings.interface").ModeType | undefined;
        smoothness?: number | undefined;
        wheelIntensity?: number | undefined;
        touchmoveIntensity?: number | undefined;
        safariWheelIntensity?: number | undefined;
        safariTouchmoveIntensity?: number | undefined;
        chromeWheelIntensity?: number | undefined;
        chromeTouchmoveIntensity?: number | undefined;
        operaWheelIntensity?: number | undefined;
        operaTouchmoveIntensity?: number | undefined;
        edgeWheelIntensity?: number | undefined;
        edgeTouchmoveIntensity?: number | undefined;
        mozillaWheelIntensity?: number | undefined;
        mozillaTouchmoveIntensity?: number | undefined;
        watchIsEnabledOn?: import("../interfaces/settings.interface").WatchIsEnabledOnType | undefined;
        minWidth?: number | undefined;
        renderDelay?: number | undefined;
        enableOnTouchDevices?: boolean | undefined;
        minTouchmoveDistance?: number | undefined;
        resetScrollPositionOnStateChanging?: boolean | undefined;
        reloadPageOnStateChanging?: boolean | undefined;
        enableScrollOnKeyboard?: boolean | undefined;
        scrollDownOnKeys?: {
            code: number;
            distance: number;
        }[] | undefined;
        scrollUpOnKeys?: {
            code: number;
            distance: number;
        }[] | undefined;
        scrollRightOnKeys?: {
            code: number;
            distance: number;
        }[] | undefined;
        scrollLeftOnKeys?: {
            code: number;
            distance: number;
        }[] | undefined;
        preventScrollOnHoldKeys?: {
            code: number[];
        }[] | undefined;
        enableScrollbar?: boolean | undefined;
        enableScrollbarWhileSmoothpageDisabled?: boolean | undefined;
        scrollbarComponent?: import("vue").FunctionalComponent<any, any> | {
            new (...args: any[]): any;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } | {
            [x: string]: any;
            setup?: ((this: void, props: Readonly<import("@vue/shared").LooseRequired<any>>, ctx: {
                attrs: {
                    [x: string]: unknown;
                };
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                emit: ((event: unknown, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                expose: (exposed?: Record<string, any> | undefined) => void;
            }) => any) | undefined;
            name?: string | undefined;
            template?: string | object | undefined;
            render?: Function | undefined;
            components?: Record<string, import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>> | undefined;
            directives?: Record<string, import("vue").Directive<any, any>> | undefined;
            inheritAttrs?: boolean | undefined;
            emits?: any;
            expose?: string[] | undefined;
            serverPrefetch?: (() => void | Promise<any>) | undefined;
            compilerOptions?: {
                isCustomElement?: ((tag: string) => boolean) | undefined;
                whitespace?: "preserve" | "condense" | undefined;
                comments?: boolean | undefined;
                delimiters?: [string, string] | undefined;
            } | undefined;
            call?: ((this: unknown, ...args: unknown[]) => never) | undefined;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
            __defaults?: {} | undefined;
            compatConfig?: {
                GLOBAL_MOUNT?: boolean | "suppress-warning" | undefined;
                GLOBAL_MOUNT_CONTAINER?: boolean | "suppress-warning" | undefined;
                GLOBAL_EXTEND?: boolean | "suppress-warning" | undefined;
                GLOBAL_PROTOTYPE?: boolean | "suppress-warning" | undefined;
                GLOBAL_SET?: boolean | "suppress-warning" | undefined;
                GLOBAL_DELETE?: boolean | "suppress-warning" | undefined;
                GLOBAL_OBSERVABLE?: boolean | "suppress-warning" | undefined;
                GLOBAL_PRIVATE_UTIL?: boolean | "suppress-warning" | undefined;
                CONFIG_SILENT?: boolean | "suppress-warning" | undefined;
                CONFIG_DEVTOOLS?: boolean | "suppress-warning" | undefined;
                CONFIG_KEY_CODES?: boolean | "suppress-warning" | undefined;
                CONFIG_PRODUCTION_TIP?: boolean | "suppress-warning" | undefined;
                CONFIG_IGNORED_ELEMENTS?: boolean | "suppress-warning" | undefined;
                CONFIG_WHITESPACE?: boolean | "suppress-warning" | undefined;
                CONFIG_OPTION_MERGE_STRATS?: boolean | "suppress-warning" | undefined;
                INSTANCE_SET?: boolean | "suppress-warning" | undefined;
                INSTANCE_DELETE?: boolean | "suppress-warning" | undefined;
                INSTANCE_DESTROY?: boolean | "suppress-warning" | undefined;
                INSTANCE_EVENT_EMITTER?: boolean | "suppress-warning" | undefined;
                INSTANCE_EVENT_HOOKS?: boolean | "suppress-warning" | undefined;
                INSTANCE_CHILDREN?: boolean | "suppress-warning" | undefined;
                INSTANCE_LISTENERS?: boolean | "suppress-warning" | undefined;
                INSTANCE_SCOPED_SLOTS?: boolean | "suppress-warning" | undefined;
                INSTANCE_ATTRS_CLASS_STYLE?: boolean | "suppress-warning" | undefined;
                OPTIONS_DATA_FN?: boolean | "suppress-warning" | undefined;
                OPTIONS_DATA_MERGE?: boolean | "suppress-warning" | undefined;
                OPTIONS_BEFORE_DESTROY?: boolean | "suppress-warning" | undefined;
                OPTIONS_DESTROYED?: boolean | "suppress-warning" | undefined;
                WATCH_ARRAY?: boolean | "suppress-warning" | undefined;
                PROPS_DEFAULT_THIS?: boolean | "suppress-warning" | undefined;
                V_ON_KEYCODE_MODIFIER?: boolean | "suppress-warning" | undefined;
                CUSTOM_DIR?: boolean | "suppress-warning" | undefined;
                ATTR_FALSE_VALUE?: boolean | "suppress-warning" | undefined;
                ATTR_ENUMERATED_COERCION?: boolean | "suppress-warning" | undefined;
                TRANSITION_CLASSES?: boolean | "suppress-warning" | undefined;
                TRANSITION_GROUP_ROOT?: boolean | "suppress-warning" | undefined;
                COMPONENT_ASYNC?: boolean | "suppress-warning" | undefined;
                COMPONENT_FUNCTIONAL?: boolean | "suppress-warning" | undefined;
                COMPONENT_V_MODEL?: boolean | "suppress-warning" | undefined;
                RENDER_FUNCTION?: boolean | "suppress-warning" | undefined;
                FILTERS?: boolean | "suppress-warning" | undefined;
                PRIVATE_APIS?: boolean | "suppress-warning" | undefined;
                MODE?: 2 | 3 | ((comp: import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | null) => 2 | 3) | undefined;
            } | undefined;
            data?: ((this: any, vm: any) => any) | undefined;
            computed?: import("vue").ComputedOptions | undefined;
            methods?: import("vue").MethodOptions | undefined;
            watch?: {
                [x: string]: (string | import("vue").WatchCallback<any, any> | ({
                    handler: string | import("vue").WatchCallback<any, any>;
                } & import("vue").WatchOptions<boolean>)) | (string | import("vue").WatchCallback<any, any> | ({
                    handler: string | import("vue").WatchCallback<any, any>;
                } & import("vue").WatchOptions<boolean>))[];
            } | undefined;
            provide?: import("vue").ComponentProvideOptions | undefined;
            inject?: {} | string[] | undefined;
            filters?: Record<string, Function> | undefined;
            mixins?: any[] | undefined;
            extends?: any;
            beforeCreate?: (() => void) | undefined;
            created?: (() => void) | undefined;
            beforeMount?: (() => void) | undefined;
            mounted?: (() => void) | undefined;
            beforeUpdate?: (() => void) | undefined;
            updated?: (() => void) | undefined;
            activated?: (() => void) | undefined;
            deactivated?: (() => void) | undefined;
            beforeDestroy?: (() => void) | undefined;
            beforeUnmount?: (() => void) | undefined;
            destroyed?: (() => void) | undefined;
            unmounted?: (() => void) | undefined;
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | undefined;
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | undefined;
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | undefined;
            delimiters?: [string, string] | undefined;
            __differentiator?: string | number | symbol | undefined;
            __isBuiltIn?: boolean | undefined;
            __file?: string | undefined;
            __name?: string | undefined;
        } | undefined;
        scrollbarSettings?: {
            trackWidth?: string | undefined;
            thumbHeight?: string | undefined;
            thumbWidth?: string | undefined;
        } | undefined;
        defaultClassNames?: {
            smoothPage?: string | undefined;
            smoothPageBody?: string | undefined;
            smoothPageBodyPosition?: string | undefined;
            smoothPageEnabled?: string | undefined;
            smoothPageVertical?: string | undefined;
            smoothPageVerticalReverse?: string | undefined;
            smoothPageHorizontal?: string | undefined;
            smoothPageHorizontalReverse?: string | undefined;
            scrollbarEnabled?: string | undefined;
        } | undefined;
        additionalClassNames?: {
            smoothPage?: string | undefined;
            smoothPageBody?: string | undefined;
            smoothPageBodyPosition?: string | undefined;
            smoothPageEnabled?: string | undefined;
            smoothPageVertical?: string | undefined;
            smoothPageVerticalReverse?: string | undefined;
            smoothPageHorizontal?: string | undefined;
            smoothPageHorizontalReverse?: string | undefined;
            scrollbarEnabled?: string | undefined;
        } | undefined;
    } | null>;
    currentScrollPosition: import("vue").ComputedRef<number>;
    isEnabled: import("vue").ComputedRef<boolean>;
    isTriggeringScrollPosition: import("vue").ComputedRef<boolean>;
    isMounted: import("vue").ComputedRef<boolean>;
    isInited: import("vue").ComputedRef<boolean>;
    deviceType: import("vue").ComputedRef<import("../utils/getDeviceType").DeviceType>;
    browser: import("vue").ComputedRef<import("../utils/getBrowser").BrowserType>;
    isPreventScroll: import("vue").ComputedRef<boolean>;
    preventScroll: (value: any) => void;
    reload: (resetPosition?: boolean) => void;
    destroy: (resetPosition?: boolean) => void;
    init: (resetPosition?: boolean) => void;
}, never>>, Pick<{
    settings: import("vue").ComputedRef<{
        mode?: import("../interfaces/settings.interface").ModeType | undefined;
        smoothness?: number | undefined;
        wheelIntensity?: number | undefined;
        touchmoveIntensity?: number | undefined;
        safariWheelIntensity?: number | undefined;
        safariTouchmoveIntensity?: number | undefined;
        chromeWheelIntensity?: number | undefined;
        chromeTouchmoveIntensity?: number | undefined;
        operaWheelIntensity?: number | undefined;
        operaTouchmoveIntensity?: number | undefined;
        edgeWheelIntensity?: number | undefined;
        edgeTouchmoveIntensity?: number | undefined;
        mozillaWheelIntensity?: number | undefined;
        mozillaTouchmoveIntensity?: number | undefined;
        watchIsEnabledOn?: import("../interfaces/settings.interface").WatchIsEnabledOnType | undefined;
        minWidth?: number | undefined;
        renderDelay?: number | undefined;
        enableOnTouchDevices?: boolean | undefined;
        minTouchmoveDistance?: number | undefined;
        resetScrollPositionOnStateChanging?: boolean | undefined;
        reloadPageOnStateChanging?: boolean | undefined;
        enableScrollOnKeyboard?: boolean | undefined;
        scrollDownOnKeys?: {
            code: number;
            distance: number;
        }[] | undefined;
        scrollUpOnKeys?: {
            code: number;
            distance: number;
        }[] | undefined;
        scrollRightOnKeys?: {
            code: number;
            distance: number;
        }[] | undefined;
        scrollLeftOnKeys?: {
            code: number;
            distance: number;
        }[] | undefined;
        preventScrollOnHoldKeys?: {
            code: number[];
        }[] | undefined;
        enableScrollbar?: boolean | undefined;
        enableScrollbarWhileSmoothpageDisabled?: boolean | undefined;
        scrollbarComponent?: import("vue").FunctionalComponent<any, any> | {
            new (...args: any[]): any;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } | {
            [x: string]: any;
            setup?: ((this: void, props: Readonly<import("@vue/shared").LooseRequired<any>>, ctx: {
                attrs: {
                    [x: string]: unknown;
                };
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                emit: ((event: unknown, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                expose: (exposed?: Record<string, any> | undefined) => void;
            }) => any) | undefined;
            name?: string | undefined;
            template?: string | object | undefined;
            render?: Function | undefined;
            components?: Record<string, import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>> | undefined;
            directives?: Record<string, import("vue").Directive<any, any>> | undefined;
            inheritAttrs?: boolean | undefined;
            emits?: any;
            expose?: string[] | undefined;
            serverPrefetch?: (() => void | Promise<any>) | undefined;
            compilerOptions?: {
                isCustomElement?: ((tag: string) => boolean) | undefined;
                whitespace?: "preserve" | "condense" | undefined;
                comments?: boolean | undefined;
                delimiters?: [string, string] | undefined;
            } | undefined;
            call?: ((this: unknown, ...args: unknown[]) => never) | undefined;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
            __defaults?: {} | undefined;
            compatConfig?: {
                GLOBAL_MOUNT?: boolean | "suppress-warning" | undefined;
                GLOBAL_MOUNT_CONTAINER?: boolean | "suppress-warning" | undefined;
                GLOBAL_EXTEND?: boolean | "suppress-warning" | undefined;
                GLOBAL_PROTOTYPE?: boolean | "suppress-warning" | undefined;
                GLOBAL_SET?: boolean | "suppress-warning" | undefined;
                GLOBAL_DELETE?: boolean | "suppress-warning" | undefined;
                GLOBAL_OBSERVABLE?: boolean | "suppress-warning" | undefined;
                GLOBAL_PRIVATE_UTIL?: boolean | "suppress-warning" | undefined;
                CONFIG_SILENT?: boolean | "suppress-warning" | undefined;
                CONFIG_DEVTOOLS?: boolean | "suppress-warning" | undefined;
                CONFIG_KEY_CODES?: boolean | "suppress-warning" | undefined;
                CONFIG_PRODUCTION_TIP?: boolean | "suppress-warning" | undefined;
                CONFIG_IGNORED_ELEMENTS?: boolean | "suppress-warning" | undefined;
                CONFIG_WHITESPACE?: boolean | "suppress-warning" | undefined;
                CONFIG_OPTION_MERGE_STRATS?: boolean | "suppress-warning" | undefined;
                INSTANCE_SET?: boolean | "suppress-warning" | undefined;
                INSTANCE_DELETE?: boolean | "suppress-warning" | undefined;
                INSTANCE_DESTROY?: boolean | "suppress-warning" | undefined;
                INSTANCE_EVENT_EMITTER?: boolean | "suppress-warning" | undefined;
                INSTANCE_EVENT_HOOKS?: boolean | "suppress-warning" | undefined;
                INSTANCE_CHILDREN?: boolean | "suppress-warning" | undefined;
                INSTANCE_LISTENERS?: boolean | "suppress-warning" | undefined;
                INSTANCE_SCOPED_SLOTS?: boolean | "suppress-warning" | undefined;
                INSTANCE_ATTRS_CLASS_STYLE?: boolean | "suppress-warning" | undefined;
                OPTIONS_DATA_FN?: boolean | "suppress-warning" | undefined;
                OPTIONS_DATA_MERGE?: boolean | "suppress-warning" | undefined;
                OPTIONS_BEFORE_DESTROY?: boolean | "suppress-warning" | undefined;
                OPTIONS_DESTROYED?: boolean | "suppress-warning" | undefined;
                WATCH_ARRAY?: boolean | "suppress-warning" | undefined;
                PROPS_DEFAULT_THIS?: boolean | "suppress-warning" | undefined;
                V_ON_KEYCODE_MODIFIER?: boolean | "suppress-warning" | undefined;
                CUSTOM_DIR?: boolean | "suppress-warning" | undefined;
                ATTR_FALSE_VALUE?: boolean | "suppress-warning" | undefined;
                ATTR_ENUMERATED_COERCION?: boolean | "suppress-warning" | undefined;
                TRANSITION_CLASSES?: boolean | "suppress-warning" | undefined;
                TRANSITION_GROUP_ROOT?: boolean | "suppress-warning" | undefined;
                COMPONENT_ASYNC?: boolean | "suppress-warning" | undefined;
                COMPONENT_FUNCTIONAL?: boolean | "suppress-warning" | undefined;
                COMPONENT_V_MODEL?: boolean | "suppress-warning" | undefined;
                RENDER_FUNCTION?: boolean | "suppress-warning" | undefined;
                FILTERS?: boolean | "suppress-warning" | undefined;
                PRIVATE_APIS?: boolean | "suppress-warning" | undefined;
                MODE?: 2 | 3 | ((comp: import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | null) => 2 | 3) | undefined;
            } | undefined;
            data?: ((this: any, vm: any) => any) | undefined;
            computed?: import("vue").ComputedOptions | undefined;
            methods?: import("vue").MethodOptions | undefined;
            watch?: {
                [x: string]: (string | import("vue").WatchCallback<any, any> | ({
                    handler: string | import("vue").WatchCallback<any, any>;
                } & import("vue").WatchOptions<boolean>)) | (string | import("vue").WatchCallback<any, any> | ({
                    handler: string | import("vue").WatchCallback<any, any>;
                } & import("vue").WatchOptions<boolean>))[];
            } | undefined;
            provide?: import("vue").ComponentProvideOptions | undefined;
            inject?: {} | string[] | undefined;
            filters?: Record<string, Function> | undefined;
            mixins?: any[] | undefined;
            extends?: any;
            beforeCreate?: (() => void) | undefined;
            created?: (() => void) | undefined;
            beforeMount?: (() => void) | undefined;
            mounted?: (() => void) | undefined;
            beforeUpdate?: (() => void) | undefined;
            updated?: (() => void) | undefined;
            activated?: (() => void) | undefined;
            deactivated?: (() => void) | undefined;
            beforeDestroy?: (() => void) | undefined;
            beforeUnmount?: (() => void) | undefined;
            destroyed?: (() => void) | undefined;
            unmounted?: (() => void) | undefined;
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | undefined;
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | undefined;
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | undefined;
            delimiters?: [string, string] | undefined;
            __differentiator?: string | number | symbol | undefined;
            __isBuiltIn?: boolean | undefined;
            __file?: string | undefined;
            __name?: string | undefined;
        } | undefined;
        scrollbarSettings?: {
            trackWidth?: string | undefined;
            thumbHeight?: string | undefined;
            thumbWidth?: string | undefined;
        } | undefined;
        defaultClassNames?: {
            smoothPage?: string | undefined;
            smoothPageBody?: string | undefined;
            smoothPageBodyPosition?: string | undefined;
            smoothPageEnabled?: string | undefined;
            smoothPageVertical?: string | undefined;
            smoothPageVerticalReverse?: string | undefined;
            smoothPageHorizontal?: string | undefined;
            smoothPageHorizontalReverse?: string | undefined;
            scrollbarEnabled?: string | undefined;
        } | undefined;
        additionalClassNames?: {
            smoothPage?: string | undefined;
            smoothPageBody?: string | undefined;
            smoothPageBodyPosition?: string | undefined;
            smoothPageEnabled?: string | undefined;
            smoothPageVertical?: string | undefined;
            smoothPageVerticalReverse?: string | undefined;
            smoothPageHorizontal?: string | undefined;
            smoothPageHorizontalReverse?: string | undefined;
            scrollbarEnabled?: string | undefined;
        } | undefined;
    } | null>;
    currentScrollPosition: import("vue").ComputedRef<number>;
    isEnabled: import("vue").ComputedRef<boolean>;
    isTriggeringScrollPosition: import("vue").ComputedRef<boolean>;
    isMounted: import("vue").ComputedRef<boolean>;
    isInited: import("vue").ComputedRef<boolean>;
    deviceType: import("vue").ComputedRef<import("../utils/getDeviceType").DeviceType>;
    browser: import("vue").ComputedRef<import("../utils/getBrowser").BrowserType>;
    isPreventScroll: import("vue").ComputedRef<boolean>;
    preventScroll: (value: any) => void;
    reload: (resetPosition?: boolean) => void;
    destroy: (resetPosition?: boolean) => void;
    init: (resetPosition?: boolean) => void;
}, "settings" | "currentScrollPosition" | "isEnabled" | "isTriggeringScrollPosition" | "isMounted" | "isInited" | "deviceType" | "browser" | "isPreventScroll">, Pick<{
    settings: import("vue").ComputedRef<{
        mode?: import("../interfaces/settings.interface").ModeType | undefined;
        smoothness?: number | undefined;
        wheelIntensity?: number | undefined;
        touchmoveIntensity?: number | undefined;
        safariWheelIntensity?: number | undefined;
        safariTouchmoveIntensity?: number | undefined;
        chromeWheelIntensity?: number | undefined;
        chromeTouchmoveIntensity?: number | undefined;
        operaWheelIntensity?: number | undefined;
        operaTouchmoveIntensity?: number | undefined;
        edgeWheelIntensity?: number | undefined;
        edgeTouchmoveIntensity?: number | undefined;
        mozillaWheelIntensity?: number | undefined;
        mozillaTouchmoveIntensity?: number | undefined;
        watchIsEnabledOn?: import("../interfaces/settings.interface").WatchIsEnabledOnType | undefined;
        minWidth?: number | undefined;
        renderDelay?: number | undefined;
        enableOnTouchDevices?: boolean | undefined;
        minTouchmoveDistance?: number | undefined;
        resetScrollPositionOnStateChanging?: boolean | undefined;
        reloadPageOnStateChanging?: boolean | undefined;
        enableScrollOnKeyboard?: boolean | undefined;
        scrollDownOnKeys?: {
            code: number;
            distance: number;
        }[] | undefined;
        scrollUpOnKeys?: {
            code: number;
            distance: number;
        }[] | undefined;
        scrollRightOnKeys?: {
            code: number;
            distance: number;
        }[] | undefined;
        scrollLeftOnKeys?: {
            code: number;
            distance: number;
        }[] | undefined;
        preventScrollOnHoldKeys?: {
            code: number[];
        }[] | undefined;
        enableScrollbar?: boolean | undefined;
        enableScrollbarWhileSmoothpageDisabled?: boolean | undefined;
        scrollbarComponent?: import("vue").FunctionalComponent<any, any> | {
            new (...args: any[]): any;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } | {
            [x: string]: any;
            setup?: ((this: void, props: Readonly<import("@vue/shared").LooseRequired<any>>, ctx: {
                attrs: {
                    [x: string]: unknown;
                };
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                emit: ((event: unknown, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                expose: (exposed?: Record<string, any> | undefined) => void;
            }) => any) | undefined;
            name?: string | undefined;
            template?: string | object | undefined;
            render?: Function | undefined;
            components?: Record<string, import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>> | undefined;
            directives?: Record<string, import("vue").Directive<any, any>> | undefined;
            inheritAttrs?: boolean | undefined;
            emits?: any;
            expose?: string[] | undefined;
            serverPrefetch?: (() => void | Promise<any>) | undefined;
            compilerOptions?: {
                isCustomElement?: ((tag: string) => boolean) | undefined;
                whitespace?: "preserve" | "condense" | undefined;
                comments?: boolean | undefined;
                delimiters?: [string, string] | undefined;
            } | undefined;
            call?: ((this: unknown, ...args: unknown[]) => never) | undefined;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
            __defaults?: {} | undefined;
            compatConfig?: {
                GLOBAL_MOUNT?: boolean | "suppress-warning" | undefined;
                GLOBAL_MOUNT_CONTAINER?: boolean | "suppress-warning" | undefined;
                GLOBAL_EXTEND?: boolean | "suppress-warning" | undefined;
                GLOBAL_PROTOTYPE?: boolean | "suppress-warning" | undefined;
                GLOBAL_SET?: boolean | "suppress-warning" | undefined;
                GLOBAL_DELETE?: boolean | "suppress-warning" | undefined;
                GLOBAL_OBSERVABLE?: boolean | "suppress-warning" | undefined;
                GLOBAL_PRIVATE_UTIL?: boolean | "suppress-warning" | undefined;
                CONFIG_SILENT?: boolean | "suppress-warning" | undefined;
                CONFIG_DEVTOOLS?: boolean | "suppress-warning" | undefined;
                CONFIG_KEY_CODES?: boolean | "suppress-warning" | undefined;
                CONFIG_PRODUCTION_TIP?: boolean | "suppress-warning" | undefined;
                CONFIG_IGNORED_ELEMENTS?: boolean | "suppress-warning" | undefined;
                CONFIG_WHITESPACE?: boolean | "suppress-warning" | undefined;
                CONFIG_OPTION_MERGE_STRATS?: boolean | "suppress-warning" | undefined;
                INSTANCE_SET?: boolean | "suppress-warning" | undefined;
                INSTANCE_DELETE?: boolean | "suppress-warning" | undefined;
                INSTANCE_DESTROY?: boolean | "suppress-warning" | undefined;
                INSTANCE_EVENT_EMITTER?: boolean | "suppress-warning" | undefined;
                INSTANCE_EVENT_HOOKS?: boolean | "suppress-warning" | undefined;
                INSTANCE_CHILDREN?: boolean | "suppress-warning" | undefined;
                INSTANCE_LISTENERS?: boolean | "suppress-warning" | undefined;
                INSTANCE_SCOPED_SLOTS?: boolean | "suppress-warning" | undefined;
                INSTANCE_ATTRS_CLASS_STYLE?: boolean | "suppress-warning" | undefined;
                OPTIONS_DATA_FN?: boolean | "suppress-warning" | undefined;
                OPTIONS_DATA_MERGE?: boolean | "suppress-warning" | undefined;
                OPTIONS_BEFORE_DESTROY?: boolean | "suppress-warning" | undefined;
                OPTIONS_DESTROYED?: boolean | "suppress-warning" | undefined;
                WATCH_ARRAY?: boolean | "suppress-warning" | undefined;
                PROPS_DEFAULT_THIS?: boolean | "suppress-warning" | undefined;
                V_ON_KEYCODE_MODIFIER?: boolean | "suppress-warning" | undefined;
                CUSTOM_DIR?: boolean | "suppress-warning" | undefined;
                ATTR_FALSE_VALUE?: boolean | "suppress-warning" | undefined;
                ATTR_ENUMERATED_COERCION?: boolean | "suppress-warning" | undefined;
                TRANSITION_CLASSES?: boolean | "suppress-warning" | undefined;
                TRANSITION_GROUP_ROOT?: boolean | "suppress-warning" | undefined;
                COMPONENT_ASYNC?: boolean | "suppress-warning" | undefined;
                COMPONENT_FUNCTIONAL?: boolean | "suppress-warning" | undefined;
                COMPONENT_V_MODEL?: boolean | "suppress-warning" | undefined;
                RENDER_FUNCTION?: boolean | "suppress-warning" | undefined;
                FILTERS?: boolean | "suppress-warning" | undefined;
                PRIVATE_APIS?: boolean | "suppress-warning" | undefined;
                MODE?: 2 | 3 | ((comp: import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | null) => 2 | 3) | undefined;
            } | undefined;
            data?: ((this: any, vm: any) => any) | undefined;
            computed?: import("vue").ComputedOptions | undefined;
            methods?: import("vue").MethodOptions | undefined;
            watch?: {
                [x: string]: (string | import("vue").WatchCallback<any, any> | ({
                    handler: string | import("vue").WatchCallback<any, any>;
                } & import("vue").WatchOptions<boolean>)) | (string | import("vue").WatchCallback<any, any> | ({
                    handler: string | import("vue").WatchCallback<any, any>;
                } & import("vue").WatchOptions<boolean>))[];
            } | undefined;
            provide?: import("vue").ComponentProvideOptions | undefined;
            inject?: {} | string[] | undefined;
            filters?: Record<string, Function> | undefined;
            mixins?: any[] | undefined;
            extends?: any;
            beforeCreate?: (() => void) | undefined;
            created?: (() => void) | undefined;
            beforeMount?: (() => void) | undefined;
            mounted?: (() => void) | undefined;
            beforeUpdate?: (() => void) | undefined;
            updated?: (() => void) | undefined;
            activated?: (() => void) | undefined;
            deactivated?: (() => void) | undefined;
            beforeDestroy?: (() => void) | undefined;
            beforeUnmount?: (() => void) | undefined;
            destroyed?: (() => void) | undefined;
            unmounted?: (() => void) | undefined;
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | undefined;
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | undefined;
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | undefined;
            delimiters?: [string, string] | undefined;
            __differentiator?: string | number | symbol | undefined;
            __isBuiltIn?: boolean | undefined;
            __file?: string | undefined;
            __name?: string | undefined;
        } | undefined;
        scrollbarSettings?: {
            trackWidth?: string | undefined;
            thumbHeight?: string | undefined;
            thumbWidth?: string | undefined;
        } | undefined;
        defaultClassNames?: {
            smoothPage?: string | undefined;
            smoothPageBody?: string | undefined;
            smoothPageBodyPosition?: string | undefined;
            smoothPageEnabled?: string | undefined;
            smoothPageVertical?: string | undefined;
            smoothPageVerticalReverse?: string | undefined;
            smoothPageHorizontal?: string | undefined;
            smoothPageHorizontalReverse?: string | undefined;
            scrollbarEnabled?: string | undefined;
        } | undefined;
        additionalClassNames?: {
            smoothPage?: string | undefined;
            smoothPageBody?: string | undefined;
            smoothPageBodyPosition?: string | undefined;
            smoothPageEnabled?: string | undefined;
            smoothPageVertical?: string | undefined;
            smoothPageVerticalReverse?: string | undefined;
            smoothPageHorizontal?: string | undefined;
            smoothPageHorizontalReverse?: string | undefined;
            scrollbarEnabled?: string | undefined;
        } | undefined;
    } | null>;
    currentScrollPosition: import("vue").ComputedRef<number>;
    isEnabled: import("vue").ComputedRef<boolean>;
    isTriggeringScrollPosition: import("vue").ComputedRef<boolean>;
    isMounted: import("vue").ComputedRef<boolean>;
    isInited: import("vue").ComputedRef<boolean>;
    deviceType: import("vue").ComputedRef<import("../utils/getDeviceType").DeviceType>;
    browser: import("vue").ComputedRef<import("../utils/getBrowser").BrowserType>;
    isPreventScroll: import("vue").ComputedRef<boolean>;
    preventScroll: (value: any) => void;
    reload: (resetPosition?: boolean) => void;
    destroy: (resetPosition?: boolean) => void;
    init: (resetPosition?: boolean) => void;
}, "preventScroll" | "reload" | "destroy" | "init">>;
//# sourceMappingURL=public.d.ts.map