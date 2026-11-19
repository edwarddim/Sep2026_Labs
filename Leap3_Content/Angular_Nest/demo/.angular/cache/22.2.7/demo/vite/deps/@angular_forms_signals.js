import { $n as Output, Ac as Injector, Al as ɵɵdefineInjectable, Bt as computed, Ca as ɵɵclassProp, Cc as EventEmitter, Cl as runInInjectionContext, Dn as Host, En as ElementRef, Fn as Injectable, Gt as resource, I as debounced, In as Input, Kc as RuntimeError, Kl as Observable, Kt as setInParamsFunction, L as declareExperimentalWebMcpTool, Mr as afterNextRender, O as booleanAttribute, Pn as Inject, Ql as Subscription, Qn as Optional, Qo as ɵɵlistener, T as afterRenderEffect, Tl as signal, Ul as Subject, Ut as isInParamsFunction, Vl as map, Wi as setClassMetadata, Wl as createOperatorSubscriber, Wt as linkedSignal, X as input, Xc as Version, _c as DOCUMENT, _l as makeEnvironmentProviders, aa as ɵɵControlFeature, al as formatRuntimeError, ao as ɵɵdefineNgModule, bi as isSubscribable, ca as ɵɵInheritDefinitionFeature, co as ɵɵdirectiveInject, dl as inject, dr as Service, du as SIGNAL, hc as CSP_NONCE, il as effect, io as ɵɵdefineDirective, ir as Renderer2, jl as ɵɵdefineInjector, jo as ɵɵgetInheritedFactory, kc as InjectionToken, la as ɵɵNgOnChangesFeature, ol as forwardRef, pc as APP_ID, pr as SkipSelf, qn as NgModule, qt as untracked, r as ChangeDetectorRef, so as ɵɵdefineService, tn as ApplicationRef, ua as ɵɵProvidersFeature, ur as Self, vc as DestroyRef, wn as Directive, ya as ɵɵattribute, yi as isPromise, zt as chain } from "./core-D4iryrxe.js";
import { G as getDOM, et as from, n as httpResource, nt as innerFrom, rt as popResultSelector } from "./http-CE3_CorA.js";
import { n as argsArgArrayOrObject, r as mapOneOrManyArgs, t as createObject } from "./createObject-voVm-fQs.js";
import "./common-CPSMxqA1.js";
// node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js
function forkJoin() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	var resultSelector = popResultSelector(args);
	var _a = argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
	var result = new Observable(function(subscriber) {
		var length = sources.length;
		if (!length) {
			subscriber.complete();
			return;
		}
		var values = new Array(length);
		var remainingCompletions = length;
		var remainingEmissions = length;
		var _loop_1 = function(sourceIndex) {
			var hasValue = false;
			innerFrom(sources[sourceIndex]).subscribe(createOperatorSubscriber(subscriber, function(value) {
				if (!hasValue) {
					hasValue = true;
					remainingEmissions--;
				}
				values[sourceIndex] = value;
			}, function() {
				return remainingCompletions--;
			}, void 0, function() {
				if (!remainingCompletions || !hasValue) {
					if (!remainingEmissions) subscriber.next(keys ? createObject(keys, values) : values);
					subscriber.complete();
				}
			}));
		};
		for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) _loop_1(sourceIndex);
	});
	return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
}
// node_modules/@angular/forms/fesm2022/forms.mjs
/**
* @license Angular v22.2.6
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var BaseControlValueAccessor = class BaseControlValueAccessor {
	_renderer;
	_elementRef;
	onChange = (_) => {};
	onTouched = () => {};
	constructor(_renderer, _elementRef) {
		this._renderer = _renderer;
		this._elementRef = _elementRef;
	}
	setProperty(key, value) {
		this._renderer.setProperty(this._elementRef.nativeElement, key, value);
	}
	registerOnTouched(fn) {
		this.onTouched = fn;
	}
	registerOnChange(fn) {
		this.onChange = fn;
	}
	setDisabledState(isDisabled) {
		this.setProperty("disabled", isDisabled);
	}
	static ɵfac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BaseControlValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({ type: BaseControlValueAccessor });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{ type: Directive }], () => [{ type: Renderer2 }, { type: ElementRef }], null);
})();
var BuiltInControlValueAccessor = class BuiltInControlValueAccessor extends BaseControlValueAccessor {
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵBuiltInControlValueAccessor_BaseFactory = void 0;
		return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
			return (ɵBuiltInControlValueAccessor_BaseFactory || (ɵBuiltInControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(BuiltInControlValueAccessor)))(__ngFactoryType__ || BuiltInControlValueAccessor);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: BuiltInControlValueAccessor,
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{ type: Directive }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => CheckboxControlValueAccessor),
	multi: true
};
var CheckboxControlValueAccessor = class CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
	writeValue(value) {
		this.setProperty("checked", value);
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵCheckboxControlValueAccessor_BaseFactory = void 0;
		return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
			return (ɵCheckboxControlValueAccessor_BaseFactory || (ɵCheckboxControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(CheckboxControlValueAccessor)))(__ngFactoryType__ || CheckboxControlValueAccessor);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: CheckboxControlValueAccessor,
		selectors: [
			[
				"input",
				"type",
				"checkbox",
				"formControlName",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"input",
				"type",
				"checkbox",
				"formControl",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"input",
				"type",
				"checkbox",
				"ngModel",
				"",
				3,
				"ngNoCva",
				""
			]
		],
		hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
				return ctx.onChange($event.target.checked);
			})("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
				return ctx.onTouched();
			});
		},
		standalone: false,
		features: [ɵɵProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
		type: Directive,
		args: [{
			selector: "input[type=checkbox]:not([ngNoCva])[formControlName],input[type=checkbox]:not([ngNoCva])[formControl],input[type=checkbox]:not([ngNoCva])[ngModel]",
			host: {
				"(change)": "onChange($any($event.target).checked)",
				"(blur)": "onTouched()"
			},
			providers: [CHECKBOX_VALUE_ACCESSOR],
			standalone: false
		}]
	}], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DefaultValueAccessor),
	multi: true
};
function _isAndroid() {
	const userAgent = getDOM() ? getDOM().getUserAgent() : "";
	return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class DefaultValueAccessor extends BaseControlValueAccessor {
	_compositionMode;
	_composing = false;
	constructor(renderer, elementRef, _compositionMode) {
		super(renderer, elementRef);
		this._compositionMode = _compositionMode;
		if (this._compositionMode == null) this._compositionMode = !_isAndroid();
	}
	writeValue(value) {
		const normalizedValue = value == null ? "" : value;
		this.setProperty("value", normalizedValue);
	}
	_handleInput(value) {
		if (!this._compositionMode || this._compositionMode && !this._composing) this.onChange(value);
	}
	_compositionStart() {
		this._composing = true;
	}
	_compositionEnd(value) {
		this._composing = false;
		this._compositionMode && this.onChange(value);
	}
	static ɵfac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DefaultValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(COMPOSITION_BUFFER_MODE, 8));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: DefaultValueAccessor,
		selectors: [
			[
				"input",
				"formControlName",
				"",
				3,
				"type",
				"checkbox",
				3,
				"ngNoCva",
				""
			],
			[
				"textarea",
				"formControlName",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"input",
				"formControl",
				"",
				3,
				"type",
				"checkbox",
				3,
				"ngNoCva",
				""
			],
			[
				"textarea",
				"formControl",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"input",
				"ngModel",
				"",
				3,
				"type",
				"checkbox",
				3,
				"ngNoCva",
				""
			],
			[
				"textarea",
				"ngModel",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"",
				"ngDefaultControl",
				""
			]
		],
		hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
				return ctx._handleInput($event.target.value);
			})("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
				return ctx.onTouched();
			})("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
				return ctx._compositionStart();
			})("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
				return ctx._compositionEnd($event.target.value);
			});
		},
		standalone: false,
		features: [ɵɵProvidersFeature([DEFAULT_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
		type: Directive,
		args: [{
			selector: "input:not([type=checkbox]):not([ngNoCva])[formControlName],textarea:not([ngNoCva])[formControlName],input:not([type=checkbox]):not([ngNoCva])[formControl],textarea:not([ngNoCva])[formControl],input:not([type=checkbox]):not([ngNoCva])[ngModel],textarea:not([ngNoCva])[ngModel],[ngDefaultControl]",
			host: {
				"(input)": "_handleInput($any($event.target).value)",
				"(blur)": "onTouched()",
				"(compositionstart)": "_compositionStart()",
				"(compositionend)": "_compositionEnd($any($event.target).value)"
			},
			providers: [DEFAULT_VALUE_ACCESSOR],
			standalone: false
		}]
	}], () => [
		{ type: Renderer2 },
		{ type: ElementRef },
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [COMPOSITION_BUFFER_MODE]
			}]
		}
	], null);
})();
function isEmptyInputValue(value) {
	return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
	if (value == null) return null;
	else if (Array.isArray(value) || typeof value === "string") return value.length;
	else if (value instanceof Set) return value.size;
	return null;
}
var NG_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP$1 = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
	static min(min) {
		return minValidator(min);
	}
	static max(max) {
		return maxValidator(max);
	}
	static required(control) {
		return requiredValidator(control);
	}
	static requiredTrue(control) {
		return requiredTrueValidator(control);
	}
	static email(control) {
		return emailValidator(control);
	}
	static minLength(minLength) {
		return minLengthValidator(minLength);
	}
	static maxLength(maxLength) {
		return maxLengthValidator(maxLength);
	}
	static pattern(pattern) {
		return patternValidator(pattern);
	}
	static nullValidator(control) {
		return nullValidator();
	}
	static compose(validators) {
		return compose(validators);
	}
	static composeAsync(validators) {
		return composeAsync(validators);
	}
};
function minValidator(min) {
	return (control) => {
		if (control.value == null || min == null) return null;
		const value = parseFloat(control.value);
		return !isNaN(value) && value < min ? { "min": {
			"min": min,
			"actual": control.value
		} } : null;
	};
}
function maxValidator(max) {
	return (control) => {
		if (control.value == null || max == null) return null;
		const value = parseFloat(control.value);
		return !isNaN(value) && value > max ? { "max": {
			"max": max,
			"actual": control.value
		} } : null;
	};
}
function requiredValidator(control) {
	return isEmptyInputValue(control.value) ? { "required": true } : null;
}
function requiredTrueValidator(control) {
	return control.value === true ? null : { "required": true };
}
function emailValidator(control) {
	if (isEmptyInputValue(control.value)) return null;
	return EMAIL_REGEXP$1.test(control.value) ? null : { "email": true };
}
function minLengthValidator(minLength) {
	return (control) => {
		const length = control.value?.length ?? lengthOrSize(control.value);
		if (length === null || length === 0) return null;
		return length < minLength ? { "minlength": {
			"requiredLength": minLength,
			"actualLength": length
		} } : null;
	};
}
function maxLengthValidator(maxLength) {
	return (control) => {
		const length = control.value?.length ?? lengthOrSize(control.value);
		if (length !== null && length > maxLength) return { "maxlength": {
			"requiredLength": maxLength,
			"actualLength": length
		} };
		return null;
	};
}
function patternValidator(pattern) {
	if (!pattern) return nullValidator;
	let regex;
	let regexStr;
	if (typeof pattern === "string") {
		regexStr = "";
		if (pattern.charAt(0) !== "^") regexStr += "^";
		regexStr += pattern;
		if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
		regex = new RegExp(regexStr);
	} else {
		regexStr = pattern.toString();
		regex = pattern;
	}
	return (control) => {
		if (isEmptyInputValue(control.value)) return null;
		const value = control.value;
		return regex.test(value) ? null : { "pattern": {
			"requiredPattern": regexStr,
			"actualValue": value
		} };
	};
}
function nullValidator(control) {
	return null;
}
function isPresent(o) {
	return o != null;
}
function toObservable(value) {
	const obs = isPromise(value) ? from(value) : value;
	if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
		let errorMessage = `Expected async validator to return Promise or Observable.`;
		if (typeof value === "object") errorMessage += " Are you using a synchronous validator where an async validator is expected?";
		throw new RuntimeError(-1101, errorMessage);
	}
	return obs;
}
function mergeErrors(arrayOfErrors) {
	let res = {};
	arrayOfErrors.forEach((errors) => {
		res = errors != null ? {
			...res,
			...errors
		} : res;
	});
	return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
	return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
	return !validator.validate;
}
function normalizeValidators(validators) {
	return validators.map((validator) => {
		return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
	});
}
function compose(validators) {
	if (!validators) return null;
	const presentValidators = validators.filter(isPresent);
	if (presentValidators.length == 0) return null;
	return function(control) {
		return mergeErrors(executeValidators(control, presentValidators));
	};
}
function composeValidators(validators) {
	return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
	if (!validators) return null;
	const presentValidators = validators.filter(isPresent);
	if (presentValidators.length == 0) return null;
	return function(control) {
		return forkJoin(executeValidators(control, presentValidators).map(toObservable)).pipe(map(mergeErrors));
	};
}
function composeAsyncValidators(validators) {
	return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
	if (controlValidators === null) return [dirValidator];
	return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
	return control._rawValidators;
}
function getControlAsyncValidators(control) {
	return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
	if (!validators) return [];
	return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
	return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
	const current = makeValidatorsArray(currentValidators);
	makeValidatorsArray(validators).forEach((v) => {
		if (!hasValidator(current, v)) current.push(v);
	});
	return current;
}
function removeValidators(validators, currentValidators) {
	return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
	get value() {
		return this.control ? this.control.value : null;
	}
	get valid() {
		return this.control ? this.control.valid : null;
	}
	get invalid() {
		return this.control ? this.control.invalid : null;
	}
	get pending() {
		return this.control ? this.control.pending : null;
	}
	get disabled() {
		return this.control ? this.control.disabled : null;
	}
	get enabled() {
		return this.control ? this.control.enabled : null;
	}
	get errors() {
		return this.control ? this.control.errors : null;
	}
	get pristine() {
		return this.control ? this.control.pristine : null;
	}
	get dirty() {
		return this.control ? this.control.dirty : null;
	}
	get touched() {
		return this.control ? this.control.touched : null;
	}
	get status() {
		return this.control ? this.control.status : null;
	}
	get untouched() {
		return this.control ? this.control.untouched : null;
	}
	get statusChanges() {
		return this.control ? this.control.statusChanges : null;
	}
	get valueChanges() {
		return this.control ? this.control.valueChanges : null;
	}
	get path() {
		return null;
	}
	_composedValidatorFn;
	_composedAsyncValidatorFn;
	_rawValidators = [];
	_rawAsyncValidators = [];
	_setValidators(validators) {
		this._rawValidators = validators || [];
		this._composedValidatorFn = composeValidators(this._rawValidators);
	}
	_setAsyncValidators(validators) {
		this._rawAsyncValidators = validators || [];
		this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
	}
	get validator() {
		return this._composedValidatorFn || null;
	}
	get asyncValidator() {
		return this._composedAsyncValidatorFn || null;
	}
	_onDestroyCallbacks = [];
	_registerOnDestroy(fn) {
		this._onDestroyCallbacks.push(fn);
	}
	_invokeOnDestroyCallbacks() {
		this._onDestroyCallbacks.forEach((fn) => fn());
		this._onDestroyCallbacks = [];
	}
	reset(value = void 0) {
		this.control?.reset(value);
	}
	hasError(errorCode, path) {
		return this.control ? this.control.hasError(errorCode, path) : false;
	}
	getError(errorCode, path) {
		return this.control ? this.control.getError(errorCode, path) : null;
	}
};
var ControlContainer = class extends AbstractControlDirective {
	name;
	get formDirective() {
		return null;
	}
	get path() {
		return null;
	}
};
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
var VERSION = /* @__PURE__ */ new Version("22.2.6");
function controlParentException(nameOrIndex) {
	return new RuntimeError(1050, `formControlName must be used with a parent formGroup or formArray directive. You'll want to add a formGroup/formArray
      directive and pass it an existing FormGroup/FormArray instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
	if (nameOrIndex == null || nameOrIndex === "") return "";
	return `Affected Form Control ${typeof nameOrIndex === "string" ? "name" : "index"}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
	return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function groupParentException() {
	return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
	return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
	return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://${VERSION.major !== "0" ? `v${VERSION.major}.` : ""}angular.dev/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}
  `;
}
function describeKey(isFormGroup, key) {
	return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
	return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
	return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
	return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
function missingControlForPathError(form, path) {
	const parent = path.length > 1 ? form.get(path.slice(0, -1)) : form;
	const controls = parent && parent.controls;
	const siblingKeys = controls ? Object.keys(controls) : [];
	const siblings = siblingKeys.length ? `Controls that do exist at this level: ${siblingKeys.join(", ")}.` : `No controls are registered at this level.`;
	return `Cannot find control with path: '${path.join(" -> ")}'. ${siblings}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {};
var ValueChangeEvent = class extends ControlEvent {
	value;
	source;
	constructor(value, source) {
		super();
		this.value = value;
		this.source = source;
	}
};
var PristineChangeEvent = class extends ControlEvent {
	pristine;
	source;
	constructor(pristine, source) {
		super();
		this.pristine = pristine;
		this.source = source;
	}
};
var TouchedChangeEvent = class extends ControlEvent {
	touched;
	source;
	constructor(touched, source) {
		super();
		this.touched = touched;
		this.source = source;
	}
};
var StatusChangeEvent = class extends ControlEvent {
	status;
	source;
	constructor(status, source) {
		super();
		this.status = status;
		this.source = source;
	}
};
var FormSubmittedEvent = class extends ControlEvent {
	source;
	constructor(source) {
		super();
		this.source = source;
	}
};
var FormResetEvent = class extends ControlEvent {
	source;
	constructor(source) {
		super();
		this.source = source;
	}
};
function pickValidators(validatorOrOpts) {
	return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
	return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
	if (typeof ngDevMode === "undefined" || ngDevMode) {
		if (isOptionsObj(validatorOrOpts) && asyncValidator) console.warn(asyncValidatorsDroppedWithOptsWarning);
	}
	return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
	return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
	return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
	const controls = parent.controls;
	if (!(isGroup ? Object.keys(controls) : controls).length) throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
	if (!hasOwnControl(controls, key)) throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
}
function assertAllValuesPresent(control, isGroup, value) {
	control._forEachChild((_, key) => {
		if (value[key] === void 0) throw new RuntimeError(-1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
	});
}
var ABSTRACT_CONTROL = /* @__PURE__ */ Symbol();
function isAbstractControl(value) {
	return typeof value === "object" && value !== null && value[ABSTRACT_CONTROL] === true;
}
var AbstractControl = class {
	_pendingDirty = false;
	_hasOwnPendingAsyncValidator = null;
	_pendingTouched = false;
	_onCollectionChange = () => {};
	_updateOn;
	_hasRequired = signal(false, ...ngDevMode ? [{ debugName: "_hasRequired" }] : []);
	_parent = null;
	_asyncValidationSubscription;
	_composedValidatorFn;
	_composedAsyncValidatorFn;
	_rawValidators;
	_rawAsyncValidators;
	value;
	constructor(validators, asyncValidators) {
		this[ABSTRACT_CONTROL] = true;
		this._assignValidators(validators);
		this._assignAsyncValidators(asyncValidators);
	}
	get validator() {
		return this._composedValidatorFn;
	}
	set validator(validatorFn) {
		this._rawValidators = this._composedValidatorFn = validatorFn;
		this._updateHasRequiredValidator();
	}
	get asyncValidator() {
		return this._composedAsyncValidatorFn;
	}
	set asyncValidator(asyncValidatorFn) {
		this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
	}
	get parent() {
		return this._parent;
	}
	get status() {
		return untracked(this.statusReactive);
	}
	set status(v) {
		untracked(() => this.statusReactive.set(v));
	}
	_status = computed(() => this.statusReactive(), ...ngDevMode ? [{ debugName: "_status" }] : []);
	statusReactive = signal(void 0, ...ngDevMode ? [{ debugName: "statusReactive" }] : []);
	get valid() {
		return this.status === VALID;
	}
	get invalid() {
		return this.status === INVALID;
	}
	get pending() {
		return this.status === PENDING;
	}
	get disabled() {
		return this.status === DISABLED;
	}
	get enabled() {
		return this.status !== DISABLED;
	}
	errors;
	get pristine() {
		return untracked(this.pristineReactive);
	}
	set pristine(v) {
		untracked(() => this.pristineReactive.set(v));
	}
	_pristine = computed(() => this.pristineReactive(), ...ngDevMode ? [{ debugName: "_pristine" }] : []);
	pristineReactive = signal(true, ...ngDevMode ? [{ debugName: "pristineReactive" }] : []);
	get dirty() {
		return !this.pristine;
	}
	get touched() {
		return untracked(this.touchedReactive);
	}
	set touched(v) {
		untracked(() => this.touchedReactive.set(v));
	}
	_touched = computed(() => this.touchedReactive(), ...ngDevMode ? [{ debugName: "_touched" }] : []);
	touchedReactive = signal(false, ...ngDevMode ? [{ debugName: "touchedReactive" }] : []);
	get untouched() {
		return !this.touched;
	}
	_events = new Subject();
	events = this._events.asObservable();
	valueChanges;
	statusChanges;
	get updateOn() {
		return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
	}
	setValidators(validators) {
		this._assignValidators(validators);
	}
	setAsyncValidators(validators) {
		this._assignAsyncValidators(validators);
	}
	addValidators(validators) {
		this.setValidators(addValidators(validators, this._rawValidators));
	}
	addAsyncValidators(validators) {
		this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
	}
	removeValidators(validators) {
		this.setValidators(removeValidators(validators, this._rawValidators));
	}
	removeAsyncValidators(validators) {
		this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
	}
	hasValidator(validator) {
		return hasValidator(this._rawValidators, validator);
	}
	hasAsyncValidator(validator) {
		return hasValidator(this._rawAsyncValidators, validator);
	}
	clearValidators() {
		this.validator = null;
	}
	clearAsyncValidators() {
		this.asyncValidator = null;
	}
	markAsTouched(opts = {}) {
		const changed = this.touched === false;
		this.touched = true;
		const sourceControl = opts.sourceControl ?? this;
		if (!opts.onlySelf) this._parent?.markAsTouched({
			...opts,
			sourceControl
		});
		if (changed && opts.emitEvent !== false) this._events.next(new TouchedChangeEvent(true, sourceControl));
	}
	markAllAsDirty(opts = {}) {
		this.markAsDirty({
			onlySelf: true,
			emitEvent: opts.emitEvent,
			sourceControl: this
		});
		this._forEachChild((control) => control.markAllAsDirty(opts));
	}
	markAllAsTouched(opts = {}) {
		this.markAsTouched({
			onlySelf: true,
			emitEvent: opts.emitEvent,
			sourceControl: this
		});
		this._forEachChild((control) => control.markAllAsTouched(opts));
	}
	markAsUntouched(opts = {}) {
		const changed = this.touched === true;
		this.touched = false;
		this._pendingTouched = false;
		const sourceControl = opts.sourceControl ?? this;
		this._forEachChild((control) => {
			control.markAsUntouched({
				onlySelf: true,
				emitEvent: opts.emitEvent,
				sourceControl
			});
		});
		if (!opts.onlySelf) this._parent?._updateTouched(opts, sourceControl);
		if (changed && opts.emitEvent !== false) this._events.next(new TouchedChangeEvent(false, sourceControl));
	}
	markAsDirty(opts = {}) {
		const changed = this.pristine === true;
		this.pristine = false;
		const sourceControl = opts.sourceControl ?? this;
		if (!opts.onlySelf) this._parent?.markAsDirty({
			...opts,
			sourceControl
		});
		if (changed && opts.emitEvent !== false) this._events.next(new PristineChangeEvent(false, sourceControl));
	}
	markAsPristine(opts = {}) {
		const changed = this.pristine === false;
		this.pristine = true;
		this._pendingDirty = false;
		const sourceControl = opts.sourceControl ?? this;
		this._forEachChild((control) => {
			control.markAsPristine({
				onlySelf: true,
				emitEvent: opts.emitEvent
			});
		});
		if (!opts.onlySelf) this._parent?._updatePristine(opts, sourceControl);
		if (changed && opts.emitEvent !== false) this._events.next(new PristineChangeEvent(true, sourceControl));
	}
	markAsPending(opts = {}) {
		this.status = PENDING;
		const sourceControl = opts.sourceControl ?? this;
		if (opts.emitEvent !== false) {
			this._events.next(new StatusChangeEvent(this.status, sourceControl));
			this.statusChanges.emit(this.status);
		}
		if (!opts.onlySelf) this._parent?.markAsPending({
			...opts,
			sourceControl
		});
	}
	disable(opts = {}) {
		const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
		this.status = DISABLED;
		this.errors = null;
		this._forEachChild((control) => {
			control.disable({
				...opts,
				onlySelf: true
			});
		});
		this._updateValue();
		const sourceControl = opts.sourceControl ?? this;
		if (opts.emitEvent !== false) {
			this._events.next(new ValueChangeEvent(this.value, sourceControl));
			this._events.next(new StatusChangeEvent(this.status, sourceControl));
			this.valueChanges.emit(this.value);
			this.statusChanges.emit(this.status);
		}
		this._updateAncestors({
			...opts,
			skipPristineCheck
		}, this);
		this._onDisabledChange.forEach((changeFn) => changeFn(true));
	}
	enable(opts = {}) {
		const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
		this.status = VALID;
		this._forEachChild((control) => {
			control.enable({
				...opts,
				onlySelf: true
			});
		});
		this.updateValueAndValidity({
			onlySelf: true,
			emitEvent: opts.emitEvent
		});
		this._updateAncestors({
			...opts,
			skipPristineCheck
		}, this);
		this._onDisabledChange.forEach((changeFn) => changeFn(false));
	}
	_updateAncestors(opts, sourceControl) {
		if (!opts.onlySelf) {
			this._parent?.updateValueAndValidity(opts);
			if (!opts.skipPristineCheck) this._parent?._updatePristine({}, sourceControl);
			this._parent?._updateTouched({}, sourceControl);
		}
	}
	setParent(parent) {
		this._parent = parent;
	}
	getRawValue() {
		return this.value;
	}
	updateValueAndValidity(opts = {}) {
		this._setInitialStatus();
		this._updateValue();
		if (this.enabled) {
			const shouldHaveEmitted = this._cancelExistingSubscription();
			this.errors = this._runValidator();
			this.status = this._calculateStatus();
			if (this.status === VALID || this.status === PENDING) this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
		}
		const sourceControl = opts.sourceControl ?? this;
		if (opts.emitEvent !== false) {
			this._events.next(new ValueChangeEvent(this.value, sourceControl));
			this._events.next(new StatusChangeEvent(this.status, sourceControl));
			this.valueChanges.emit(this.value);
			this.statusChanges.emit(this.status);
		}
		if (!opts.onlySelf) this._parent?.updateValueAndValidity({
			...opts,
			sourceControl
		});
	}
	_updateTreeValidity(opts = { emitEvent: true }) {
		this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
		this.updateValueAndValidity({
			onlySelf: true,
			emitEvent: opts.emitEvent
		});
	}
	_setInitialStatus() {
		this.status = this._allControlsDisabled() ? DISABLED : VALID;
	}
	_runValidator() {
		return this.validator ? this.validator(this) : null;
	}
	_runAsyncValidator(shouldHaveEmitted, emitEvent) {
		if (this.asyncValidator) {
			this.status = PENDING;
			this._hasOwnPendingAsyncValidator = {
				emitEvent: emitEvent !== false,
				shouldHaveEmitted: shouldHaveEmitted !== false
			};
			const obs = toObservable(this.asyncValidator(this));
			this._asyncValidationSubscription = obs.subscribe((errors) => {
				this._hasOwnPendingAsyncValidator = null;
				this.setErrors(errors, {
					emitEvent,
					shouldHaveEmitted
				});
			});
		}
	}
	_cancelExistingSubscription() {
		if (this._asyncValidationSubscription) {
			this._asyncValidationSubscription.unsubscribe();
			const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
			this._hasOwnPendingAsyncValidator = null;
			return shouldHaveEmitted;
		}
		return false;
	}
	setErrors(errors, opts = {}) {
		this.errors = errors;
		this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
	}
	get(path) {
		let currPath = path;
		if (currPath == null) return null;
		if (!Array.isArray(currPath)) currPath = currPath.split(".");
		if (currPath.length === 0) return null;
		return currPath.reduce((control, name) => control && control._find(name), this);
	}
	getError(errorCode, path) {
		const control = path ? this.get(path) : this;
		return control?.errors ? control.errors[errorCode] : null;
	}
	hasError(errorCode, path) {
		return !!this.getError(errorCode, path);
	}
	get root() {
		let x = this;
		while (x._parent) x = x._parent;
		return x;
	}
	_updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
		this.status = this._calculateStatus();
		if (emitEvent) this.statusChanges.emit(this.status);
		if (emitEvent || shouldHaveEmitted) this._events.next(new StatusChangeEvent(this.status, changedControl));
		if (this._parent) this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
	}
	_initObservables() {
		this.valueChanges = new EventEmitter();
		this.statusChanges = new EventEmitter();
	}
	_calculateStatus() {
		if (this._allControlsDisabled()) return DISABLED;
		if (this.errors) return INVALID;
		if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
		if (this._anyControlsHaveStatus(INVALID)) return INVALID;
		return VALID;
	}
	_anyControlsHaveStatus(status) {
		return this._anyControls((control) => control.status === status);
	}
	_anyControlsDirty() {
		return this._anyControls((control) => control.dirty);
	}
	_anyControlsTouched() {
		return this._anyControls((control) => control.touched);
	}
	_updatePristine(opts, changedControl) {
		const newPristine = !this._anyControlsDirty();
		const changed = this.pristine !== newPristine;
		this.pristine = newPristine;
		if (!opts.onlySelf) this._parent?._updatePristine(opts, changedControl);
		if (changed) this._events.next(new PristineChangeEvent(this.pristine, changedControl));
	}
	_updateTouched(opts = {}, changedControl) {
		this.touched = this._anyControlsTouched();
		this._events.next(new TouchedChangeEvent(this.touched, changedControl));
		if (!opts.onlySelf) this._parent?._updateTouched(opts, changedControl);
	}
	_onDisabledChange = [];
	_registerOnCollectionChange(fn) {
		this._onCollectionChange = fn;
	}
	_setUpdateStrategy(opts) {
		if (isOptionsObj(opts) && opts.updateOn != null) this._updateOn = opts.updateOn;
	}
	_parentMarkedDirty(onlySelf) {
		return !onlySelf && !!this._parent?.dirty && !this._parent._anyControlsDirty();
	}
	_find(name) {
		return null;
	}
	_assignValidators(validators) {
		this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
		this._composedValidatorFn = coerceToValidator(this._rawValidators);
		this._updateHasRequiredValidator();
	}
	_assignAsyncValidators(validators) {
		this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
		this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
	}
	_updateHasRequiredValidator() {
		untracked(() => this._hasRequired.set(this.hasValidator(Validators.required)));
	}
};
function hasOwnControl(controls, name) {
	return Object.hasOwn(controls, name);
}
function isNativeFormElement(element) {
	return element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA";
}
function elementAcceptsMinMax(element) {
	if (element.tagName !== "INPUT") return false;
	const type = element.type;
	return type === "number" || type === "range" || type === "date" || type === "month";
}
function isTextualFormElement(element) {
	return element.tagName === "INPUT" || element.tagName === "TEXTAREA";
}
function setNativeDomProperty(renderer, element, name, value) {
	switch (name) {
		case "name":
			renderer.setAttribute(element, name, value);
			break;
		case "disabled":
		case "readonly":
		case "required":
			if (value) renderer.setAttribute(element, name, "");
			else renderer.removeAttribute(element, name);
			break;
		case "max":
		case "min":
		case "minLength":
		case "maxLength": if (value !== void 0) renderer.setAttribute(element, name, value.toString());
		else renderer.removeAttribute(element, name);
	}
}
var ReactiveValidationError = class {
	kind;
	context;
	control;
	message;
	constructor({ kind, context, control }) {
		this.kind = kind;
		this.context = context;
		this.control = control;
	}
};
var ɵFORM_CONTROL_INTEGRATION = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "FORM_CONTROL_INTEGRATION" : "");
var CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", { factory: () => setDisabledStateDefault });
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
	return [...parent.path, name];
}
function setUpControlValueAccessor(control, dir, callSetDisabledState = setDisabledStateDefault) {
	if (typeof ngDevMode === "undefined" || ngDevMode) {
		if (!control) _throwError(dir, "Cannot find control with");
		if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
	}
	setUpValidators(control, dir);
	dir.valueAccessor.writeValue(control.value);
	if (control.disabled || callSetDisabledState === "always") dir.valueAccessor.setDisabledState?.(control.disabled);
	setUpViewChangePipeline(control, dir);
	setUpModelChangePipeline(control, dir);
	setUpBlurPipeline(control, dir);
	setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
	const noop = () => {
		if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) _noControlError(dir);
	};
	dir?.valueAccessor?.registerOnChange(noop);
	dir?.valueAccessor?.registerOnTouched(noop);
	cleanUpValidators(control, dir);
	if (control) {
		dir._invokeOnDestroyCallbacks();
		control._registerOnCollectionChange(() => {});
	}
}
function registerOnValidatorChange(validators, onChange) {
	validators.forEach((validator) => {
		if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
	});
}
function setUpDisabledChangeHandler(control, dir) {
	if (dir.valueAccessor.setDisabledState) {
		const onDisabledChange = (isDisabled) => {
			dir.valueAccessor.setDisabledState(isDisabled);
		};
		control.registerOnDisabledChange(onDisabledChange);
		dir._registerOnDestroy(() => {
			control._unregisterOnDisabledChange(onDisabledChange);
		});
	}
}
function setUpValidators(control, dir) {
	const validators = getControlValidators(control);
	if (dir.validator !== null) control.setValidators(mergeValidators(validators, dir.validator));
	else if (typeof validators === "function") control.setValidators([validators]);
	const asyncValidators = getControlAsyncValidators(control);
	if (dir.asyncValidator !== null) control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
	else if (typeof asyncValidators === "function") control.setAsyncValidators([asyncValidators]);
	const onValidatorChange = () => control.updateValueAndValidity();
	registerOnValidatorChange(dir._rawValidators, onValidatorChange);
	registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
	let isControlUpdated = false;
	if (control !== null) {
		if (dir.validator !== null) {
			const validators = getControlValidators(control);
			if (Array.isArray(validators) && validators.length > 0) {
				const updatedValidators = validators.filter((validator) => validator !== dir.validator);
				if (updatedValidators.length !== validators.length) {
					isControlUpdated = true;
					control.setValidators(updatedValidators);
				}
			}
		}
		if (dir.asyncValidator !== null) {
			const asyncValidators = getControlAsyncValidators(control);
			if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
				const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
				if (updatedAsyncValidators.length !== asyncValidators.length) {
					isControlUpdated = true;
					control.setAsyncValidators(updatedAsyncValidators);
				}
			}
		}
	}
	const noop = () => {};
	registerOnValidatorChange(dir._rawValidators, noop);
	registerOnValidatorChange(dir._rawAsyncValidators, noop);
	return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
	dir.valueAccessor.registerOnChange((newValue) => {
		control._pendingValue = newValue;
		control._pendingChange = true;
		control._pendingDirty = true;
		if (control.updateOn === "change") updateControl(control, dir);
	});
}
function setUpBlurPipeline(control, dir) {
	dir.valueAccessor.registerOnTouched(() => {
		control._pendingTouched = true;
		if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
		if (control.updateOn !== "submit") control.markAsTouched();
	});
}
function updateControl(control, dir) {
	if (control._pendingDirty) control.markAsDirty();
	control.setValue(control._pendingValue, { emitModelToViewChange: false });
	dir.viewToModelUpdate(control._pendingValue);
	control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
	const onChange = (newValue, emitModelEvent) => {
		dir.valueAccessor.writeValue(newValue);
		if (emitModelEvent) dir.viewToModelUpdate(newValue);
	};
	control.registerOnChange(onChange);
	dir._registerOnDestroy(() => {
		control._unregisterOnChange(onChange);
	});
}
function setUpFormContainer(control, dir) {
	if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
	setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
	return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
	return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
	const messageEnd = _describeControlLocation(dir);
	throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
	const path = dir.path;
	if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
	if (path?.[0]) return `name: '${path}'`;
	return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
	const loc = _describeControlLocation(dir);
	throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
	const loc = _describeControlLocation(dir);
	throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
	if (!Object.hasOwn(changes, "model")) return false;
	const change = changes["model"];
	if (change.isFirstChange()) return true;
	return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
	return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
	form._syncPendingControls();
	directives.forEach((dir) => {
		const control = dir.control;
		if (control.updateOn === "submit" && control._pendingChange) {
			dir.viewToModelUpdate(control._pendingValue);
			control._pendingChange = false;
		}
	});
}
function selectValueAccessor(dir, valueAccessors) {
	if (!valueAccessors) return null;
	if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
	let defaultAccessor = void 0;
	let builtinAccessor = void 0;
	let customAccessor = void 0;
	valueAccessors.forEach((v) => {
		if (v.constructor === DefaultValueAccessor) defaultAccessor = v;
		else if (isBuiltInAccessor(v)) {
			if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
			builtinAccessor = v;
		} else {
			if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
			customAccessor = v;
		}
	});
	if (customAccessor) return customAccessor;
	if (builtinAccessor) return builtinAccessor;
	if (defaultAccessor) return defaultAccessor;
	if (typeof ngDevMode === "undefined" || ngDevMode) _throwError(dir, "No valid value accessor for form control with");
	return null;
}
function removeListItem$1(list, el) {
	const index = list.indexOf(el);
	if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
	if (warningConfig === "never") return;
	if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
		console.warn(ngModelWarning(name));
		type._ngModelWarningSentOnce = true;
		instance._ngModelWarningSent = true;
	}
}
function toInteger(value) {
	return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
	return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class AbstractValidatorDirective {
	_validator = nullValidator;
	_onChange;
	_enabled;
	ngOnChanges(changes) {
		if (this.inputName in changes) {
			const input = this.normalizeInput(changes[this.inputName].currentValue);
			this._enabled = this.enabled(input);
			this._validator = this._enabled ? this.createValidator(input) : nullValidator;
			this._onChange?.();
		}
	}
	validate(control) {
		return this._validator(control);
	}
	registerOnValidatorChange(fn) {
		this._onChange = fn;
	}
	enabled(input) {
		return input != null;
	}
	static ɵfac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AbstractValidatorDirective)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: AbstractValidatorDirective,
		features: [ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{ type: Directive }], null, null);
})();
var MAX_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => MaxValidator),
	multi: true
};
var MaxValidator = class MaxValidator extends AbstractValidatorDirective {
	max;
	inputName = "max";
	normalizeInput = (input) => toFloat(input);
	createValidator = (max) => maxValidator(max);
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵMaxValidator_BaseFactory = void 0;
		return function MaxValidator_Factory(__ngFactoryType__) {
			return (ɵMaxValidator_BaseFactory || (ɵMaxValidator_BaseFactory = ɵɵgetInheritedFactory(MaxValidator)))(__ngFactoryType__ || MaxValidator);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: MaxValidator,
		selectors: [
			[
				"input",
				"type",
				"number",
				"max",
				"",
				"formControlName",
				""
			],
			[
				"input",
				"type",
				"number",
				"max",
				"",
				"formControl",
				""
			],
			[
				"input",
				"type",
				"number",
				"max",
				"",
				"ngModel",
				""
			]
		],
		hostVars: 1,
		hostBindings: function MaxValidator_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵattribute("max", ctx._enabled ? ctx.max : null);
		},
		inputs: { max: "max" },
		standalone: false,
		features: [ɵɵProvidersFeature([MAX_VALIDATOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
		type: Directive,
		args: [{
			selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
			providers: [MAX_VALIDATOR],
			host: { "[attr.max]": "_enabled ? max : null" },
			standalone: false
		}]
	}], null, { max: [{ type: Input }] });
})();
var MIN_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => MinValidator),
	multi: true
};
var MinValidator = class MinValidator extends AbstractValidatorDirective {
	min;
	inputName = "min";
	normalizeInput = (input) => toFloat(input);
	createValidator = (min) => minValidator(min);
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵMinValidator_BaseFactory = void 0;
		return function MinValidator_Factory(__ngFactoryType__) {
			return (ɵMinValidator_BaseFactory || (ɵMinValidator_BaseFactory = ɵɵgetInheritedFactory(MinValidator)))(__ngFactoryType__ || MinValidator);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: MinValidator,
		selectors: [
			[
				"input",
				"type",
				"number",
				"min",
				"",
				"formControlName",
				""
			],
			[
				"input",
				"type",
				"number",
				"min",
				"",
				"formControl",
				""
			],
			[
				"input",
				"type",
				"number",
				"min",
				"",
				"ngModel",
				""
			]
		],
		hostVars: 1,
		hostBindings: function MinValidator_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵattribute("min", ctx._enabled ? ctx.min : null);
		},
		inputs: { min: "min" },
		standalone: false,
		features: [ɵɵProvidersFeature([MIN_VALIDATOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
		type: Directive,
		args: [{
			selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
			providers: [MIN_VALIDATOR],
			host: { "[attr.min]": "_enabled ? min : null" },
			standalone: false
		}]
	}], null, { min: [{ type: Input }] });
})();
var REQUIRED_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => RequiredValidator),
	multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => CheckboxRequiredValidator),
	multi: true
};
var RequiredValidator = class RequiredValidator extends AbstractValidatorDirective {
	required;
	inputName = "required";
	normalizeInput = booleanAttribute;
	createValidator = (input) => requiredValidator;
	enabled(input) {
		return input;
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵRequiredValidator_BaseFactory = void 0;
		return function RequiredValidator_Factory(__ngFactoryType__) {
			return (ɵRequiredValidator_BaseFactory || (ɵRequiredValidator_BaseFactory = ɵɵgetInheritedFactory(RequiredValidator)))(__ngFactoryType__ || RequiredValidator);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: RequiredValidator,
		selectors: [
			[
				"",
				"required",
				"",
				"formControlName",
				"",
				3,
				"type",
				"checkbox"
			],
			[
				"",
				"required",
				"",
				"formControl",
				"",
				3,
				"type",
				"checkbox"
			],
			[
				"",
				"required",
				"",
				"ngModel",
				"",
				3,
				"type",
				"checkbox"
			]
		],
		hostVars: 1,
		hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵattribute("required", ctx._enabled ? "" : null);
		},
		inputs: { required: "required" },
		standalone: false,
		features: [ɵɵProvidersFeature([REQUIRED_VALIDATOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
		type: Directive,
		args: [{
			selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
			providers: [REQUIRED_VALIDATOR],
			host: { "[attr.required]": "_enabled ? \"\" : null" },
			standalone: false
		}]
	}], null, { required: [{ type: Input }] });
})();
var CheckboxRequiredValidator = class CheckboxRequiredValidator extends RequiredValidator {
	createValidator = (input) => requiredTrueValidator;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵCheckboxRequiredValidator_BaseFactory = void 0;
		return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
			return (ɵCheckboxRequiredValidator_BaseFactory || (ɵCheckboxRequiredValidator_BaseFactory = ɵɵgetInheritedFactory(CheckboxRequiredValidator)))(__ngFactoryType__ || CheckboxRequiredValidator);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: CheckboxRequiredValidator,
		selectors: [
			[
				"input",
				"type",
				"checkbox",
				"required",
				"",
				"formControlName",
				""
			],
			[
				"input",
				"type",
				"checkbox",
				"required",
				"",
				"formControl",
				""
			],
			[
				"input",
				"type",
				"checkbox",
				"required",
				"",
				"ngModel",
				""
			]
		],
		hostVars: 1,
		hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵattribute("required", ctx._enabled ? "" : null);
		},
		standalone: false,
		features: [ɵɵProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
		type: Directive,
		args: [{
			selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
			providers: [CHECKBOX_REQUIRED_VALIDATOR],
			host: { "[attr.required]": "_enabled ? \"\" : null" },
			standalone: false
		}]
	}], null, null);
})();
var EMAIL_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => EmailValidator),
	multi: true
};
var EmailValidator = class EmailValidator extends AbstractValidatorDirective {
	email;
	inputName = "email";
	normalizeInput = booleanAttribute;
	createValidator = (input) => emailValidator;
	enabled(input) {
		return input;
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵEmailValidator_BaseFactory = void 0;
		return function EmailValidator_Factory(__ngFactoryType__) {
			return (ɵEmailValidator_BaseFactory || (ɵEmailValidator_BaseFactory = ɵɵgetInheritedFactory(EmailValidator)))(__ngFactoryType__ || EmailValidator);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: EmailValidator,
		selectors: [
			[
				"",
				"email",
				"",
				"formControlName",
				""
			],
			[
				"",
				"email",
				"",
				"formControl",
				""
			],
			[
				"",
				"email",
				"",
				"ngModel",
				""
			]
		],
		inputs: { email: "email" },
		standalone: false,
		features: [ɵɵProvidersFeature([EMAIL_VALIDATOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
		type: Directive,
		args: [{
			selector: "[email][formControlName],[email][formControl],[email][ngModel]",
			providers: [EMAIL_VALIDATOR],
			standalone: false
		}]
	}], null, { email: [{ type: Input }] });
})();
var MIN_LENGTH_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => MinLengthValidator),
	multi: true
};
var MinLengthValidator = class MinLengthValidator extends AbstractValidatorDirective {
	minlength;
	inputName = "minlength";
	normalizeInput = (input) => toInteger(input);
	createValidator = (minlength) => minLengthValidator(minlength);
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵMinLengthValidator_BaseFactory = void 0;
		return function MinLengthValidator_Factory(__ngFactoryType__) {
			return (ɵMinLengthValidator_BaseFactory || (ɵMinLengthValidator_BaseFactory = ɵɵgetInheritedFactory(MinLengthValidator)))(__ngFactoryType__ || MinLengthValidator);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: MinLengthValidator,
		selectors: [
			[
				"",
				"minlength",
				"",
				"formControlName",
				""
			],
			[
				"",
				"minlength",
				"",
				"formControl",
				""
			],
			[
				"",
				"minlength",
				"",
				"ngModel",
				""
			]
		],
		hostVars: 1,
		hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵattribute("minlength", ctx._enabled ? ctx.minlength : null);
		},
		inputs: { minlength: "minlength" },
		standalone: false,
		features: [ɵɵProvidersFeature([MIN_LENGTH_VALIDATOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
		type: Directive,
		args: [{
			selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
			providers: [MIN_LENGTH_VALIDATOR],
			host: { "[attr.minlength]": "_enabled ? minlength : null" },
			standalone: false
		}]
	}], null, { minlength: [{ type: Input }] });
})();
var MAX_LENGTH_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => MaxLengthValidator),
	multi: true
};
var MaxLengthValidator = class MaxLengthValidator extends AbstractValidatorDirective {
	maxlength;
	inputName = "maxlength";
	normalizeInput = (input) => toInteger(input);
	createValidator = (maxlength) => maxLengthValidator(maxlength);
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵMaxLengthValidator_BaseFactory = void 0;
		return function MaxLengthValidator_Factory(__ngFactoryType__) {
			return (ɵMaxLengthValidator_BaseFactory || (ɵMaxLengthValidator_BaseFactory = ɵɵgetInheritedFactory(MaxLengthValidator)))(__ngFactoryType__ || MaxLengthValidator);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: MaxLengthValidator,
		selectors: [
			[
				"",
				"maxlength",
				"",
				"formControlName",
				""
			],
			[
				"",
				"maxlength",
				"",
				"formControl",
				""
			],
			[
				"",
				"maxlength",
				"",
				"ngModel",
				""
			]
		],
		hostVars: 1,
		hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵattribute("maxlength", ctx._enabled ? ctx.maxlength : null);
		},
		inputs: { maxlength: "maxlength" },
		standalone: false,
		features: [ɵɵProvidersFeature([MAX_LENGTH_VALIDATOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
		type: Directive,
		args: [{
			selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
			providers: [MAX_LENGTH_VALIDATOR],
			host: { "[attr.maxlength]": "_enabled ? maxlength : null" },
			standalone: false
		}]
	}], null, { maxlength: [{ type: Input }] });
})();
var PATTERN_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => PatternValidator),
	multi: true
};
var PatternValidator = class PatternValidator extends AbstractValidatorDirective {
	pattern;
	inputName = "pattern";
	normalizeInput = (input) => input;
	createValidator = (input) => patternValidator(input);
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵPatternValidator_BaseFactory = void 0;
		return function PatternValidator_Factory(__ngFactoryType__) {
			return (ɵPatternValidator_BaseFactory || (ɵPatternValidator_BaseFactory = ɵɵgetInheritedFactory(PatternValidator)))(__ngFactoryType__ || PatternValidator);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: PatternValidator,
		selectors: [
			[
				"",
				"pattern",
				"",
				"formControlName",
				""
			],
			[
				"",
				"pattern",
				"",
				"formControl",
				""
			],
			[
				"",
				"pattern",
				"",
				"ngModel",
				""
			]
		],
		hostVars: 1,
		hostBindings: function PatternValidator_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵattribute("pattern", ctx._enabled ? ctx.pattern : null);
		},
		inputs: { pattern: "pattern" },
		standalone: false,
		features: [ɵɵProvidersFeature([PATTERN_VALIDATOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
		type: Directive,
		args: [{
			selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
			providers: [PATTERN_VALIDATOR],
			host: { "[attr.pattern]": "_enabled ? pattern : null" },
			standalone: false
		}]
	}], null, { pattern: [{ type: Input }] });
})();
var NG_CONTROL_INTEGRATION_PROVIDER = {
	provide: ɵFORM_CONTROL_INTEGRATION,
	useFactory: () => {
		const control = inject(NgControl, { self: true });
		return {
			setParseErrors: (source) => {
				control.setParseErrorSource(source);
			},
			set onReset(callback) {
				control.onReset = callback;
			}
		};
	}
};
var NgControl = class extends AbstractControlDirective {
	_parent = null;
	name = null;
	valueAccessor = null;
	isCustomControlBased = false;
	userOnReset;
	resetSubscription;
	set onReset(callback) {
		this.userOnReset = callback;
		this.resetSubscription?.unsubscribe();
		this.resetSubscription = void 0;
		if (this.control) {
			this.resetSubscription = this.control.events.subscribe((event) => {
				if (event instanceof FormResetEvent && this.control) this.userOnReset?.(this.control.value);
			});
			this.subscription?.add(this.resetSubscription);
		}
	}
	isNativeFormElement = false;
	rawValueAccessors;
	_selectedValueAccessor = null;
	get selectedValueAccessor() {
		return this._selectedValueAccessor ??= selectValueAccessor(this, this.rawValueAccessors);
	}
	parseErrorsValidator = null;
	renderer;
	injector;
	requiredValidatorViaDi;
	subscription;
	customControlBindings = null;
	pendingCustomValue = void 0;
	hasPendingCustomValue = false;
	constructor(injector, renderer, rawValueAccessors) {
		super();
		this.injector = injector;
		this.renderer = renderer;
		this.rawValueAccessors = rawValueAccessors;
		this.injector?.get(DestroyRef)?.onDestroy(() => {
			this.removeParseErrorsValidator(this.control);
			this.subscription?.unsubscribe();
		});
	}
	setupCustomControl() {
		this.subscription?.unsubscribe();
		const control = this.control;
		const cdr = this.injector?.get(ChangeDetectorRef);
		if (!control || !cdr) return;
		const markForCheck = cdr.markForCheck.bind(cdr);
		this.subscription = new Subscription();
		this.subscription.add(() => this.discardPendingCustomValue(control));
		if (typeof control.registerOnChange === "function") {
			const onControlChange = (newValue, emitModelEvent) => {
				this.discardPendingCustomValue(control);
				if (emitModelEvent) this.viewToModelUpdate(newValue);
				markForCheck();
			};
			control.registerOnChange(onControlChange);
			this.subscription.add(() => control._unregisterOnChange(onControlChange));
		}
		this.subscription.add(control.valueChanges.subscribe(markForCheck));
		this.subscription.add(control.statusChanges.subscribe(markForCheck));
		this.resetSubscription?.unsubscribe();
		this.resetSubscription = void 0;
		if (this.userOnReset) {
			this.resetSubscription = control.events.subscribe((event) => {
				if (event instanceof FormResetEvent && this.control) this.userOnReset?.(this.control.value);
			});
			this.subscription.add(this.resetSubscription);
		}
		if (this.parseErrorsValidator) control.addValidators(this.parseErrorsValidator);
	}
	ngControlCreate(host) {
		if (!host.nativeElement.hasAttribute?.("ngNoCva") && (this.rawValueAccessors && this.rawValueAccessors.length > 0 || this.valueAccessor !== null) || !host.customControl) return;
		this.isCustomControlBased = true;
		host.listenToCustomControlModel((value) => {
			const control = this.control;
			if (!control) return;
			control._pendingValue = value;
			control._pendingChange = true;
			control._pendingDirty = true;
			this.pendingCustomValue = value;
			this.hasPendingCustomValue = true;
			if (control.updateOn === "change") this.updateControlFromCustom(control);
		});
		host.listenToCustomControlOutput("touch", () => {
			const control = this.control;
			if (!control) return;
			control._pendingTouched = true;
			if (control.updateOn === "blur" && control._pendingChange) this.updateControlFromCustom(control);
			if (control.updateOn !== "submit") control.markAsTouched();
		});
		this.customControlBindings = {};
		this.isNativeFormElement = isNativeFormElement(host.nativeElement);
		this.requiredValidatorViaDi = this._rawValidators.find((v) => v instanceof RequiredValidator);
	}
	updateControlFromCustom(control) {
		const value = control._pendingValue;
		control._pendingChange = false;
		this.clearPendingCustomValue();
		if (this.customControlBindings) this.customControlBindings.value = value;
		if (control._pendingDirty) control.markAsDirty();
		control.setValue(value, { emitModelToViewChange: false });
		this.viewToModelUpdate(control.value);
	}
	discardPendingCustomValue(control) {
		if (!this.hasPendingCustomValue) return;
		if (this.customControlBindings) this.customControlBindings.value = this.pendingCustomValue;
		this.clearPendingCustomValue();
		control._pendingValue = control.value;
		control._pendingChange = false;
		control._pendingDirty = false;
	}
	clearPendingCustomValue() {
		this.pendingCustomValue = void 0;
		this.hasPendingCustomValue = false;
	}
	ngControlUpdate(host, bindRequired) {
		if (!this.isCustomControlBased) return;
		const control = this.control;
		const bindings = this.customControlBindings;
		if (!control || !bindings) return;
		if (this.hasPendingCustomValue && !control._pendingChange) {
			bindings.value = this.pendingCustomValue;
			this.clearPendingCustomValue();
		}
		if (!Object.is(bindings.value, control.value)) {
			this.discardPendingCustomValue(control);
			bindings.value = control.value;
			host.setCustomControlModelInput(control.value);
		}
		this.bindControlProperty(host, bindings, "touched", control.touched);
		this.bindControlProperty(host, bindings, "dirty", control.dirty);
		this.bindControlProperty(host, bindings, "valid", control.valid);
		this.bindControlProperty(host, bindings, "invalid", control.invalid);
		this.bindControlProperty(host, bindings, "pending", control.pending);
		this.bindControlProperty(host, bindings, "disabled", control.disabled);
		if (this.shouldBindRequired) this.bindControlProperty(host, bindings, "required", this.isRequired);
		const errorObject = control.errors;
		if (bindings.errors !== errorObject) {
			bindings.errors = errorObject;
			const errorArray = this._convertErrors(errorObject);
			host.setInputOnDirectives("errors", errorArray);
		}
	}
	get isRequired() {
		return (this.requiredValidatorViaDi?._enabled || this.control?._hasRequired()) ?? false;
	}
	get shouldBindRequired() {
		return true;
	}
	bindControlProperty(host, bindings, name, value) {
		if (bindings[name] === value) return;
		bindings[name] = value;
		const wasSet = host.setInputOnDirectives(name, value);
		if (this.isNativeFormElement && !wasSet && (name === "disabled" || name === "required") && this.renderer) setNativeDomProperty(this.renderer, host.nativeElement, name, value);
	}
	_convertErrors(errors) {
		if (errors === null) return [];
		const control = this.control;
		return Object.entries(errors).map(([kind, context]) => {
			return new ReactiveValidationError({
				context,
				kind,
				control
			});
		});
	}
	setParseErrorSource(parseErrors) {
		if (parseErrors === void 0) return;
		let lastSeenErrors = null;
		const convertedParseErrors = computed(() => {
			const rawErrors = parseErrors();
			if (rawErrors.length === 0) return null;
			return rawErrors.reduce((acc, err) => {
				acc[err.kind] = err;
				return acc;
			}, {});
		}, ...ngDevMode ? [{ debugName: "convertedParseErrors" }] : []);
		this.parseErrorsValidator = () => {
			lastSeenErrors = untracked(convertedParseErrors);
			return lastSeenErrors;
		};
		effect(() => {
			const currentErrors = convertedParseErrors();
			if (currentErrors !== lastSeenErrors) {
				lastSeenErrors = currentErrors;
				this.control?.updateValueAndValidity({ emitEvent: false });
				this.injector?.get(ChangeDetectorRef)?.markForCheck();
			}
		}, { injector: this.injector });
	}
	removeParseErrorsValidator(control) {
		if (this.parseErrorsValidator) {
			control?.removeValidators(this.parseErrorsValidator);
			control?.updateValueAndValidity({ emitEvent: false });
		}
	}
};
var AbstractControlStatus = class {
	_cd;
	constructor(cd) {
		this._cd = cd;
	}
	get isTouched() {
		this._cd?.control?._touched?.();
		return !!this._cd?.control?.touched;
	}
	get isUntouched() {
		return !!this._cd?.control?.untouched;
	}
	get isPristine() {
		this._cd?.control?._pristine?.();
		return !!this._cd?.control?.pristine;
	}
	get isDirty() {
		return !!this._cd?.control?.dirty;
	}
	get isValid() {
		this._cd?.control?._status?.();
		return !!this._cd?.control?.valid;
	}
	get isInvalid() {
		return !!this._cd?.control?.invalid;
	}
	get isPending() {
		return !!this._cd?.control?.pending;
	}
	get isSubmitted() {
		this._cd?._submitted?.();
		return !!this._cd?.submitted;
	}
};
var ngControlStatusHost = {
	"[class.ng-untouched]": "isUntouched",
	"[class.ng-touched]": "isTouched",
	"[class.ng-pristine]": "isPristine",
	"[class.ng-dirty]": "isDirty",
	"[class.ng-valid]": "isValid",
	"[class.ng-invalid]": "isInvalid",
	"[class.ng-pending]": "isPending"
};
var NgControlStatus = class NgControlStatus extends AbstractControlStatus {
	constructor(cd) {
		super(cd);
	}
	static ɵfac = function NgControlStatus_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgControlStatus)(ɵɵdirectiveInject(NgControl, 2));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgControlStatus,
		selectors: [
			[
				"",
				"formControlName",
				""
			],
			[
				"",
				"ngModel",
				""
			],
			[
				"",
				"formControl",
				""
			]
		],
		hostVars: 14,
		hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵclassProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
		},
		standalone: false,
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
		type: Directive,
		args: [{
			selector: "[formControlName],[ngModel],[formControl]",
			host: ngControlStatusHost,
			standalone: false
		}]
	}], () => [{
		type: NgControl,
		decorators: [{ type: Self }]
	}], null);
})();
var NgControlStatusGroup = class NgControlStatusGroup extends AbstractControlStatus {
	constructor(cd) {
		super(cd);
	}
	static ɵfac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgControlStatusGroup)(ɵɵdirectiveInject(ControlContainer, 10));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgControlStatusGroup,
		selectors: [
			[
				"",
				"formGroupName",
				""
			],
			[
				"",
				"formArrayName",
				""
			],
			[
				"",
				"ngModelGroup",
				""
			],
			[
				"",
				"formGroup",
				""
			],
			[
				"",
				"formArray",
				""
			],
			[
				"form",
				3,
				"ngNoForm",
				""
			],
			[
				"",
				"ngForm",
				""
			]
		],
		hostVars: 16,
		hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵclassProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
		},
		standalone: false,
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
		type: Directive,
		args: [{
			selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]",
			host: {
				...ngControlStatusHost,
				"[class.ng-submitted]": "isSubmitted"
			},
			standalone: false
		}]
	}], () => [{
		type: ControlContainer,
		decorators: [{ type: Optional }, { type: Self }]
	}], null);
})();
var FormGroup = class extends AbstractControl {
	constructor(controls, validatorOrOpts, asyncValidator) {
		super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
		(typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
		this.controls = controls;
		this._initObservables();
		this._setUpdateStrategy(validatorOrOpts);
		this._setUpControls();
		this.updateValueAndValidity({
			onlySelf: true,
			emitEvent: !!this.asyncValidator
		});
	}
	controls;
	registerControl(name, control) {
		const existingControl = this._find(name);
		if (existingControl) return existingControl;
		this.controls[name] = control;
		control.setParent(this);
		control._registerOnCollectionChange(this._onCollectionChange);
		return control;
	}
	addControl(name, control, options = {}) {
		this.registerControl(name, control);
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
		this._onCollectionChange();
	}
	removeControl(name, options = {}) {
		const existingControl = this._find(name);
		if (existingControl) existingControl._registerOnCollectionChange(() => {});
		delete this.controls[name];
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
		this._onCollectionChange();
	}
	setControl(name, control, options = {}) {
		const existingControl = this._find(name);
		if (existingControl) existingControl._registerOnCollectionChange(() => {});
		delete this.controls[name];
		if (control) this.registerControl(name, control);
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
		this._onCollectionChange();
	}
	contains(controlName) {
		return this._find(controlName)?.enabled === true;
	}
	setValue(value, options = {}) {
		untracked(() => {
			assertAllValuesPresent(this, true, value);
			Object.keys(value).forEach((name) => {
				assertControlPresent(this, true, name);
				this.controls[name].setValue(value[name], {
					onlySelf: true,
					emitEvent: options.emitEvent
				});
			});
			this.updateValueAndValidity(options);
		});
	}
	patchValue(value, options = {}) {
		if (value == null) return;
		Object.keys(value).forEach((name) => {
			const existingControl = this._find(name);
			if (existingControl) existingControl.patchValue(value[name], {
				onlySelf: true,
				emitEvent: options.emitEvent
			});
		});
		this.updateValueAndValidity(options);
	}
	reset(value = {}, options = {}) {
		this._forEachChild((control, name) => {
			control.reset(value ? value[name] : null, {
				...options,
				onlySelf: true
			});
		});
		this._updatePristine(options, this);
		this._updateTouched(options, this);
		this.updateValueAndValidity(options);
		if (options?.emitEvent !== false) this._events.next(new FormResetEvent(this));
	}
	getRawValue() {
		return this._reduceChildren({}, (acc, control, name) => {
			acc[name] = control.getRawValue();
			return acc;
		});
	}
	_syncPendingControls() {
		let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
			return child._syncPendingControls() ? true : updated;
		});
		if (subtreeUpdated) this.updateValueAndValidity({ onlySelf: true });
		return subtreeUpdated;
	}
	_forEachChild(cb) {
		Object.keys(this.controls).forEach((key) => {
			const control = this.controls[key];
			control && cb(control, key);
		});
	}
	_setUpControls() {
		this._forEachChild((control) => {
			control.setParent(this);
			control._registerOnCollectionChange(this._onCollectionChange);
		});
	}
	_updateValue() {
		this.value = this._reduceValue();
	}
	_anyControls(condition) {
		for (const [controlName, control] of Object.entries(this.controls)) if (this.contains(controlName) && condition(control)) return true;
		return false;
	}
	_reduceValue() {
		return this._reduceChildren({}, (acc, control, name) => {
			if (control.enabled || this.disabled) acc[name] = control.value;
			return acc;
		});
	}
	_reduceChildren(initValue, fn) {
		let res = initValue;
		this._forEachChild((control, name) => {
			res = fn(res, control, name);
		});
		return res;
	}
	_allControlsDisabled() {
		for (const controlName of Object.keys(this.controls)) if (this.controls[controlName].enabled) return false;
		return Object.keys(this.controls).length > 0 || this.disabled;
	}
	_find(name) {
		return hasOwnControl(this.controls, name) ? this.controls[name] : null;
	}
};
function validateFormGroupControls(controls) {
	const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
	if (invalidKeys.length > 0) console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
}
var FormRecord = class extends FormGroup {};
var formDirectiveProvider$2 = {
	provide: ControlContainer,
	useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = /* @__PURE__ */ (() => Promise.resolve())();
var NgForm = class NgForm extends ControlContainer {
	callSetDisabledState;
	get submitted() {
		return untracked(this.submittedReactive);
	}
	_submitted = computed(() => this.submittedReactive(), ...ngDevMode ? [{ debugName: "_submitted" }] : []);
	submittedReactive = signal(false, ...ngDevMode ? [{ debugName: "submittedReactive" }] : []);
	_directives = /* @__PURE__ */ new Set();
	form;
	ngSubmit = new EventEmitter();
	options;
	constructor(validators, asyncValidators, callSetDisabledState) {
		super();
		this.callSetDisabledState = callSetDisabledState;
		this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	}
	ngAfterViewInit() {
		this._setUpdateStrategy();
	}
	get formDirective() {
		return this;
	}
	get control() {
		return this.form;
	}
	get path() {
		return [];
	}
	get controls() {
		return this.form.controls;
	}
	addControl(dir) {
		resolvedPromise$1.then(() => {
			dir.control = this._findContainer(dir.path).registerControl(dir.name, dir.control);
			dir._setupWithForm(this.callSetDisabledState);
			dir.control.updateValueAndValidity({ emitEvent: false });
			this._directives.add(dir);
		});
	}
	getControl(dir) {
		return this.form.get(dir.path);
	}
	removeControl(dir) {
		resolvedPromise$1.then(() => {
			this._findContainer(dir.path)?.removeControl(dir.name);
			this._directives.delete(dir);
		});
	}
	addFormGroup(dir) {
		resolvedPromise$1.then(() => {
			const container = this._findContainer(dir.path);
			const group = new FormGroup({});
			setUpFormContainer(group, dir);
			container.registerControl(dir.name, group);
			group.updateValueAndValidity({ emitEvent: false });
		});
	}
	removeFormGroup(dir) {
		resolvedPromise$1.then(() => {
			this._findContainer(dir.path)?.removeControl?.(dir.name);
		});
	}
	getFormGroup(dir) {
		return this.form.get(dir.path);
	}
	updateModel(dir, value) {
		resolvedPromise$1.then(() => {
			this.form.get(dir.path).setValue(value);
		});
	}
	setValue(value) {
		this.control.setValue(value);
	}
	onSubmit($event) {
		this.submittedReactive.set(true);
		syncPendingControls(this.form, this._directives);
		this.ngSubmit.emit($event);
		this.form._events.next(new FormSubmittedEvent(this.control));
		return $event?.target?.method === "dialog";
	}
	onReset() {
		this.resetForm();
	}
	resetForm(value = void 0) {
		this.form.reset(value);
		this.submittedReactive.set(false);
	}
	_setUpdateStrategy() {
		if (this.options && this.options.updateOn != null) this.form._updateOn = this.options.updateOn;
	}
	_findContainer(path) {
		path.pop();
		return path.length ? this.form.get(path) : this.form;
	}
	static ɵfac = function NgForm_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgForm)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgForm,
		selectors: [
			[
				"form",
				3,
				"ngNoForm",
				"",
				3,
				"formGroup",
				"",
				3,
				"formArray",
				""
			],
			["ng-form"],
			[
				"",
				"ngForm",
				""
			]
		],
		hostBindings: function NgForm_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("submit", function NgForm_submit_HostBindingHandler($event) {
				return ctx.onSubmit($event);
			})("reset", function NgForm_reset_HostBindingHandler() {
				return ctx.onReset();
			});
		},
		inputs: { options: [
			0,
			"ngFormOptions",
			"options"
		] },
		outputs: { ngSubmit: "ngSubmit" },
		exportAs: ["ngForm"],
		standalone: false,
		features: [ɵɵProvidersFeature([formDirectiveProvider$2]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
		type: Directive,
		args: [{
			selector: "form:not([ngNoForm]):not([formGroup]):not([formArray]),ng-form,[ngForm]",
			providers: [formDirectiveProvider$2],
			host: {
				"(submit)": "onSubmit($event)",
				"(reset)": "onReset()"
			},
			outputs: ["ngSubmit"],
			exportAs: "ngForm",
			standalone: false
		}]
	}], () => [
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [CALL_SET_DISABLED_STATE]
			}]
		}
	], { options: [{
		type: Input,
		args: ["ngFormOptions"]
	}] });
})();
function removeListItem(list, el) {
	const index = list.indexOf(el);
	if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
	return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl extends AbstractControl {
	defaultValue = null;
	_onChange = [];
	_pendingValue;
	_pendingChange = false;
	constructor(formState = null, validatorOrOpts, asyncValidator) {
		super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
		this._applyFormState(formState);
		this._setUpdateStrategy(validatorOrOpts);
		this._initObservables();
		this.updateValueAndValidity({
			onlySelf: true,
			emitEvent: !!this.asyncValidator
		});
		if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
			if (isFormControlState(formState)) this.defaultValue = formState.value;
			else this.defaultValue = formState;
		}
	}
	setValue(value, options = {}) {
		untracked(() => {
			this.value = this._pendingValue = value;
			if (this._onChange.length && options.emitModelToViewChange !== false) this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
			this.updateValueAndValidity(options);
		});
	}
	patchValue(value, options = {}) {
		this.setValue(value, options);
	}
	reset(formState = this.defaultValue, options = {}) {
		this._applyFormState(formState);
		this.markAsPristine(options);
		this.markAsUntouched(options);
		this.setValue(this.value, options);
		if (options.overwriteDefaultValue) this.defaultValue = this.value;
		this._pendingChange = false;
		if (options?.emitEvent !== false) this._events.next(new FormResetEvent(this));
	}
	_updateValue() {}
	_anyControls(condition) {
		return false;
	}
	_allControlsDisabled() {
		return this.disabled;
	}
	registerOnChange(fn) {
		this._onChange.push(fn);
	}
	_unregisterOnChange(fn) {
		removeListItem(this._onChange, fn);
	}
	registerOnDisabledChange(fn) {
		this._onDisabledChange.push(fn);
	}
	_unregisterOnDisabledChange(fn) {
		removeListItem(this._onDisabledChange, fn);
	}
	_forEachChild(cb) {}
	_syncPendingControls() {
		if (this.updateOn === "submit") {
			if (this._pendingDirty) this.markAsDirty();
			if (this._pendingTouched) this.markAsTouched();
			if (this._pendingChange) {
				this.setValue(this._pendingValue, {
					onlySelf: true,
					emitModelToViewChange: false
				});
				return true;
			}
		}
		return false;
	}
	_applyFormState(formState) {
		if (isFormControlState(formState)) {
			this.value = this._pendingValue = formState.value;
			formState.disabled ? this.disable({
				onlySelf: true,
				emitEvent: false
			}) : this.enable({
				onlySelf: true,
				emitEvent: false
			});
		} else this.value = this._pendingValue = formState;
	}
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class AbstractFormGroupDirective extends ControlContainer {
	_parent;
	ngOnInit() {
		this._checkParentType();
		this.formDirective.addFormGroup(this);
	}
	ngOnDestroy() {
		this.formDirective?.removeFormGroup(this);
	}
	get control() {
		return this.formDirective.getFormGroup(this);
	}
	get path() {
		return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
	}
	get formDirective() {
		return this._parent ? this._parent.formDirective : null;
	}
	_checkParentType() {}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵAbstractFormGroupDirective_BaseFactory = void 0;
		return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
			return (ɵAbstractFormGroupDirective_BaseFactory || (ɵAbstractFormGroupDirective_BaseFactory = ɵɵgetInheritedFactory(AbstractFormGroupDirective)))(__ngFactoryType__ || AbstractFormGroupDirective);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: AbstractFormGroupDirective,
		standalone: false,
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
		type: Directive,
		args: [{ standalone: false }]
	}], null, null);
})();
function modelParentException() {
	return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
	return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function ngModelInChildComponentWarning(containerTypeName) {
	return formatRuntimeError(-1354, `ngModel on a form control inside a child component cannot register with the ${containerTypeName} in the parent component because @Host() stops injection at the component boundary. To register this control with the parent form, add viewProviders to the child component: @Component({ ..., viewProviders: [{ provide: ControlContainer, useExisting: ${containerTypeName} }] }). Or, to opt out of form registration, use [ngModelOptions]="{standalone: true}".`);
}
function missingNameException() {
	return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
	return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
	provide: ControlContainer,
	useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class NgModelGroup extends AbstractFormGroupDirective {
	name = "";
	constructor(parent, validators, asyncValidators) {
		super();
		this._parent = parent;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	_checkParentType() {
		if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) throw modelGroupParentException();
	}
	static ɵfac = function NgModelGroup_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgModelGroup)(ɵɵdirectiveInject(ControlContainer, 5), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgModelGroup,
		selectors: [[
			"",
			"ngModelGroup",
			""
		]],
		inputs: { name: [
			0,
			"ngModelGroup",
			"name"
		] },
		exportAs: ["ngModelGroup"],
		standalone: false,
		features: [ɵɵProvidersFeature([modelGroupProvider]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
		type: Directive,
		args: [{
			selector: "[ngModelGroup]",
			providers: [modelGroupProvider],
			exportAs: "ngModelGroup",
			standalone: false
		}]
	}], () => [
		{
			type: ControlContainer,
			decorators: [{ type: Host }, { type: SkipSelf }]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		}
	], { name: [{
		type: Input,
		args: ["ngModelGroup"]
	}] });
})();
var AbstractFormDirective = class AbstractFormDirective extends ControlContainer {
	callSetDisabledState;
	get submitted() {
		return untracked(this._submittedReactive);
	}
	set submitted(value) {
		this._submittedReactive.set(value);
	}
	_submitted = computed(() => this._submittedReactive(), ...ngDevMode ? [{ debugName: "_submitted" }] : []);
	_submittedReactive = signal(false, ...ngDevMode ? [{ debugName: "_submittedReactive" }] : []);
	_oldForm;
	_onCollectionChange = () => this._updateDomValue();
	directives = [];
	constructor(validators, asyncValidators, callSetDisabledState) {
		super();
		this.callSetDisabledState = callSetDisabledState;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	ngOnChanges(changes) {
		this.onChanges(changes);
	}
	ngOnDestroy() {
		this.onDestroy();
	}
	onChanges(changes) {
		if (!this.form) throw new RuntimeError(1052, ngDevMode && `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
		if (Object.hasOwn(changes, "form")) {
			this._updateValidators();
			this._updateDomValue();
			this._updateRegistrations();
			this._oldForm = this.form;
		}
	}
	onDestroy() {
		if (this.form) {
			cleanUpValidators(this.form, this);
			if (this.form._onCollectionChange === this._onCollectionChange) this.form._registerOnCollectionChange(() => {});
		}
	}
	get formDirective() {
		return this;
	}
	get path() {
		return [];
	}
	addControl(dir) {
		const ctrl = this.form.get(dir.path);
		if (!ctrl) throw new RuntimeError(-1055, ngDevMode && missingControlForPathError(this.form, dir.path));
		dir._setupWithForm(ctrl, this.callSetDisabledState);
		ctrl.updateValueAndValidity({ emitEvent: false });
		this.directives.push(dir);
		return ctrl;
	}
	getControl(dir) {
		return this.form.get(dir.path);
	}
	removeControl(dir) {
		cleanUpControl(dir.control || null, dir, false);
		removeListItem$1(this.directives, dir);
	}
	addFormGroup(dir) {
		this._setUpFormContainer(dir);
	}
	removeFormGroup(dir) {
		this._cleanUpFormContainer(dir);
	}
	getFormGroup(dir) {
		return this.form.get(dir.path);
	}
	getFormArray(dir) {
		return this.form.get(dir.path);
	}
	addFormArray(dir) {
		this._setUpFormContainer(dir);
	}
	removeFormArray(dir) {
		this._cleanUpFormContainer(dir);
	}
	updateModel(dir, value) {
		this.form.get(dir.path).setValue(value);
	}
	onReset() {
		this.resetForm();
	}
	resetForm(value = void 0, options = {}) {
		this.form.reset(value, options);
		this._submittedReactive.set(false);
	}
	onSubmit($event) {
		this.submitted = true;
		syncPendingControls(this.form, this.directives);
		this.ngSubmit.emit($event);
		this.form._events.next(new FormSubmittedEvent(this.control));
		return $event?.target?.method === "dialog";
	}
	_updateDomValue() {
		this.directives.forEach((dir) => {
			const oldCtrl = dir.control;
			const newCtrl = this.form.get(dir.path);
			if (oldCtrl !== newCtrl) {
				cleanUpControl(oldCtrl || null, dir);
				if (isFormControl(newCtrl)) dir._setupWithForm(newCtrl, this.callSetDisabledState);
			}
		});
		this.form._updateTreeValidity({ emitEvent: false });
	}
	_setUpFormContainer(dir) {
		const ctrl = this.form.get(dir.path);
		setUpFormContainer(ctrl, dir);
		ctrl.updateValueAndValidity({ emitEvent: false });
	}
	_cleanUpFormContainer(dir) {
		const ctrl = this.form?.get(dir.path);
		if (ctrl) {
			if (cleanUpFormContainer(ctrl, dir)) ctrl.updateValueAndValidity({ emitEvent: false });
		}
	}
	_updateRegistrations() {
		this.form._registerOnCollectionChange(this._onCollectionChange);
		this._oldForm?._registerOnCollectionChange(() => {});
	}
	_updateValidators() {
		setUpValidators(this.form, this);
		if (this._oldForm) cleanUpValidators(this._oldForm, this);
	}
	static ɵfac = function AbstractFormDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AbstractFormDirective)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: AbstractFormDirective,
		features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormDirective, [{ type: Directive }], () => [
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [CALL_SET_DISABLED_STATE]
			}]
		}
	], null);
})();
var formDirectiveProvider$1 = {
	provide: ControlContainer,
	useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class FormGroupDirective extends AbstractFormDirective {
	form = null;
	ngSubmit = new EventEmitter();
	get control() {
		return this.form;
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵFormGroupDirective_BaseFactory = void 0;
		return function FormGroupDirective_Factory(__ngFactoryType__) {
			return (ɵFormGroupDirective_BaseFactory || (ɵFormGroupDirective_BaseFactory = ɵɵgetInheritedFactory(FormGroupDirective)))(__ngFactoryType__ || FormGroupDirective);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: FormGroupDirective,
		selectors: [[
			"",
			"formGroup",
			""
		]],
		hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
				return ctx.onSubmit($event);
			})("reset", function FormGroupDirective_reset_HostBindingHandler() {
				return ctx.onReset();
			});
		},
		inputs: { form: [
			0,
			"formGroup",
			"form"
		] },
		outputs: { ngSubmit: "ngSubmit" },
		exportAs: ["ngForm"],
		standalone: false,
		features: [ɵɵProvidersFeature([formDirectiveProvider$1]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
		type: Directive,
		args: [{
			selector: "[formGroup]",
			providers: [formDirectiveProvider$1],
			host: {
				"(submit)": "onSubmit($event)",
				"(reset)": "onReset()"
			},
			exportAs: "ngForm",
			standalone: false
		}]
	}], null, {
		form: [{
			type: Input,
			args: ["formGroup"]
		}],
		ngSubmit: [{ type: Output }]
	});
})();
var formControlBinding$1 = {
	provide: NgControl,
	useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = /* @__PURE__ */ (() => Promise.resolve())();
var NgModel = class NgModel extends NgControl {
	_changeDetectorRef;
	callSetDisabledState;
	control = new FormControl();
	static ngAcceptInputType_isDisabled;
	_registered = false;
	_ngModelInjector;
	viewModel;
	name = "";
	isDisabled;
	model;
	options;
	update = new EventEmitter();
	constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState, injector, renderer) {
		super(injector, renderer, valueAccessors);
		this._changeDetectorRef = _changeDetectorRef;
		this.callSetDisabledState = callSetDisabledState;
		this._parent = parent;
		if (typeof ngDevMode === "undefined" || ngDevMode) this._ngModelInjector = injector;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	ngOnChanges(changes) {
		if (!this._registered && (typeof ngDevMode === "undefined" || ngDevMode) && this._parent === null && !this.options?.standalone) {
			const parentContainer = this._ngModelInjector?.get(ControlContainer, null);
			if (parentContainer != null) {
				const typeName = parentContainer instanceof NgForm ? "NgForm" : parentContainer instanceof FormGroupDirective ? "FormGroupDirective" : parentContainer instanceof NgModelGroup ? "NgModelGroup" : parentContainer.constructor.name || "ControlContainer";
				console.warn(ngModelInChildComponentWarning(typeName));
			}
		}
		this._checkForErrors();
		if (!this._registered || "name" in changes) {
			if (this._registered) {
				this._checkName();
				if (this.formDirective) {
					const oldName = changes["name"].previousValue;
					this.formDirective.removeControl({
						name: oldName,
						path: this._getPath(oldName)
					});
				}
			}
			this._setUpControl();
		}
		if ("isDisabled" in changes) this._updateDisabled(changes);
		if (isPropertyUpdated(changes, this.viewModel)) {
			this._updateValue(this.model);
			this.viewModel = this.model;
		}
	}
	ngOnDestroy() {
		this.formDirective?.removeControl(this);
	}
	ɵngControlCreate(host) {
		super.ngControlCreate(host);
	}
	ɵngControlUpdate(host) {
		super.ngControlUpdate(host, false);
	}
	get shouldBindRequired() {
		return false;
	}
	get path() {
		return this._getPath(this.name);
	}
	get formDirective() {
		return this._parent ? this._parent.formDirective : null;
	}
	viewToModelUpdate(newValue) {
		this.viewModel = newValue;
		this.update.emit(newValue);
	}
	_setUpControl() {
		this._setUpdateStrategy();
		this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
		this._registered = true;
	}
	_setUpdateStrategy() {
		if (this.options && this.options.updateOn != null) this.control._updateOn = this.options.updateOn;
	}
	_isStandalone() {
		return !this._parent || !!(this.options && this.options.standalone);
	}
	_setUpStandalone() {
		if (!this.isCustomControlBased) {
			this.valueAccessor ??= this.selectedValueAccessor;
			setUpControlValueAccessor(this.control, this, this.callSetDisabledState);
		} else this.setupCustomControl();
		this.control.updateValueAndValidity({ emitEvent: false });
	}
	_setupWithForm(callSetDisabledState) {
		if (!this.isCustomControlBased) {
			this.valueAccessor ??= this.selectedValueAccessor;
			setUpControlValueAccessor(this.control, this, callSetDisabledState);
		} else this.setupCustomControl();
	}
	_checkForErrors() {
		if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) checkParentType$1(this._parent);
		this._checkName();
	}
	_checkName() {
		if (this.options && this.options.name) this.name = this.options.name;
		if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) throw missingNameException();
	}
	_updateValue(value) {
		resolvedPromise.then(() => {
			this.control.setValue(value, { emitViewToModelChange: false });
			this._changeDetectorRef?.markForCheck();
		});
	}
	_updateDisabled(changes) {
		const disabledValue = changes["isDisabled"].currentValue;
		const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
		resolvedPromise.then(() => {
			if (isDisabled && !this.control.disabled) this.control.disable();
			else if (!isDisabled && this.control.disabled) this.control.enable();
			this._changeDetectorRef?.markForCheck();
		});
	}
	_getPath(controlName) {
		return this._parent ? controlPath(controlName, this._parent) : [controlName];
	}
	static ɵfac = function NgModel_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgModel)(ɵɵdirectiveInject(ControlContainer, 9), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(ChangeDetectorRef, 8), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8), ɵɵdirectiveInject(Injector, 8), ɵɵdirectiveInject(Renderer2, 8));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgModel,
		selectors: [[
			"",
			"ngModel",
			"",
			3,
			"formControlName",
			"",
			3,
			"formControl",
			""
		]],
		inputs: {
			name: "name",
			isDisabled: [
				0,
				"disabled",
				"isDisabled"
			],
			model: [
				0,
				"ngModel",
				"model"
			],
			options: [
				0,
				"ngModelOptions",
				"options"
			]
		},
		outputs: { update: "ngModelChange" },
		exportAs: ["ngModel"],
		standalone: false,
		features: [
			ɵɵProvidersFeature([formControlBinding$1, NG_CONTROL_INTEGRATION_PROVIDER]),
			ɵɵInheritDefinitionFeature,
			ɵɵNgOnChangesFeature,
			ɵɵControlFeature(null)
		]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
		type: Directive,
		args: [{
			selector: "[ngModel]:not([formControlName]):not([formControl])",
			providers: [formControlBinding$1, NG_CONTROL_INTEGRATION_PROVIDER],
			exportAs: "ngModel",
			standalone: false
		}]
	}], () => [
		{
			type: ControlContainer,
			decorators: [{ type: Optional }, { type: Host }]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALUE_ACCESSOR]
				}
			]
		},
		{
			type: ChangeDetectorRef,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [ChangeDetectorRef]
			}]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [CALL_SET_DISABLED_STATE]
			}]
		},
		{
			type: Injector,
			decorators: [{ type: Optional }]
		},
		{
			type: Renderer2,
			decorators: [{ type: Optional }]
		}
	], {
		name: [{ type: Input }],
		isDisabled: [{
			type: Input,
			args: ["disabled"]
		}],
		model: [{
			type: Input,
			args: ["ngModel"]
		}],
		options: [{
			type: Input,
			args: ["ngModelOptions"]
		}],
		update: [{
			type: Output,
			args: ["ngModelChange"]
		}]
	});
})();
function checkParentType$1(parent) {
	if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) throw formGroupNameException();
	else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) throw modelParentException();
}
var ɵNgNoValidate = class ɵNgNoValidate {
	static ɵfac = function ɵNgNoValidate_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ɵNgNoValidate)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: ɵNgNoValidate,
		selectors: [[
			"form",
			3,
			"ngNoForm",
			"",
			3,
			"ngNativeValidate",
			""
		]],
		hostAttrs: ["novalidate", ""],
		standalone: false
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵNgNoValidate, [{
		type: Directive,
		args: [{
			selector: "form:not([ngNoForm]):not([ngNativeValidate])",
			host: { "novalidate": "" },
			standalone: false
		}]
	}], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => NumberValueAccessor),
	multi: true
};
var NumberValueAccessor = class NumberValueAccessor extends BuiltInControlValueAccessor {
	writeValue(value) {
		const normalizedValue = value == null ? "" : value;
		this.setProperty("value", normalizedValue);
	}
	registerOnChange(fn) {
		this.onChange = (value) => {
			fn(value == "" ? null : parseFloat(value));
		};
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵNumberValueAccessor_BaseFactory = void 0;
		return function NumberValueAccessor_Factory(__ngFactoryType__) {
			return (ɵNumberValueAccessor_BaseFactory || (ɵNumberValueAccessor_BaseFactory = ɵɵgetInheritedFactory(NumberValueAccessor)))(__ngFactoryType__ || NumberValueAccessor);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NumberValueAccessor,
		selectors: [
			[
				"input",
				"type",
				"number",
				"formControlName",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"input",
				"type",
				"number",
				"formControl",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"input",
				"type",
				"number",
				"ngModel",
				"",
				3,
				"ngNoCva",
				""
			]
		],
		hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
				return ctx.onChange($event.target.value);
			})("blur", function NumberValueAccessor_blur_HostBindingHandler() {
				return ctx.onTouched();
			});
		},
		standalone: false,
		features: [ɵɵProvidersFeature([NUMBER_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
		type: Directive,
		args: [{
			selector: "input[type=number]:not([ngNoCva])[formControlName],input[type=number]:not([ngNoCva])[formControl],input[type=number]:not([ngNoCva])[ngModel]",
			host: {
				"(input)": "onChange($any($event.target).value)",
				"(blur)": "onTouched()"
			},
			providers: [NUMBER_VALUE_ACCESSOR],
			standalone: false
		}]
	}], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => RadioControlValueAccessor),
	multi: true
};
function throwNameError() {
	throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class RadioControlRegistry {
	_accessors = [];
	add(control, accessor) {
		this._accessors.push([control, accessor]);
	}
	remove(accessor) {
		for (let i = this._accessors.length - 1; i >= 0; --i) if (this._accessors[i][1] === accessor) {
			this._accessors.splice(i, 1);
			return;
		}
	}
	select(accessor) {
		this._accessors.forEach((c) => {
			if (this._isSameGroup(c, accessor) && c[1] !== accessor) c[1].fireUncheck(accessor.value);
		});
	}
	_isSameGroup(controlPair, accessor) {
		if (!controlPair[0].control) return false;
		return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
	}
	static ɵfac = function RadioControlRegistry_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || RadioControlRegistry)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: RadioControlRegistry,
		factory: RadioControlRegistry.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{ type: Service }], null, null);
})();
var RadioControlValueAccessor = class RadioControlValueAccessor extends BuiltInControlValueAccessor {
	_registry;
	_injector;
	_state;
	_control;
	_fn;
	setDisabledStateFired = false;
	onChange = () => {};
	name;
	formControlName;
	value;
	callSetDisabledState = inject(CALL_SET_DISABLED_STATE, { optional: true }) ?? setDisabledStateDefault;
	constructor(renderer, elementRef, _registry, _injector) {
		super(renderer, elementRef);
		this._registry = _registry;
		this._injector = _injector;
	}
	ngOnChanges(changes) {
		const control = this._control?.control;
		if (changes["value"] && control) this.writeValue(control.value);
	}
	ngOnInit() {
		this._control = this._injector.get(NgControl);
		this._checkName();
		this._registry.add(this._control, this);
	}
	ngOnDestroy() {
		this._registry.remove(this);
	}
	writeValue(value) {
		this._state = value === this.value;
		this.setProperty("checked", this._state);
	}
	registerOnChange(fn) {
		this._fn = fn;
		this.onChange = () => {
			fn(this.value);
			this._registry.select(this);
		};
	}
	setDisabledState(isDisabled) {
		if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") this.setProperty("disabled", isDisabled);
		this.setDisabledStateFired = true;
	}
	fireUncheck(value) {
		this.writeValue(value);
	}
	_checkName() {
		if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) throwNameError();
		if (!this.name && this.formControlName) this.name = this.formControlName;
	}
	static ɵfac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || RadioControlValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(RadioControlRegistry), ɵɵdirectiveInject(Injector));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: RadioControlValueAccessor,
		selectors: [
			[
				"input",
				"type",
				"radio",
				"formControlName",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"input",
				"type",
				"radio",
				"formControl",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"input",
				"type",
				"radio",
				"ngModel",
				"",
				3,
				"ngNoCva",
				""
			]
		],
		hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
				return ctx.onChange();
			})("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
				return ctx.onTouched();
			});
		},
		inputs: {
			name: "name",
			formControlName: "formControlName",
			value: "value"
		},
		standalone: false,
		features: [
			ɵɵProvidersFeature([RADIO_VALUE_ACCESSOR]),
			ɵɵInheritDefinitionFeature,
			ɵɵNgOnChangesFeature
		]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
		type: Directive,
		args: [{
			selector: "input[type=radio]:not([ngNoCva])[formControlName],input[type=radio]:not([ngNoCva])[formControl],input[type=radio]:not([ngNoCva])[ngModel]",
			host: {
				"(change)": "onChange()",
				"(blur)": "onTouched()"
			},
			providers: [RADIO_VALUE_ACCESSOR],
			standalone: false
		}]
	}], () => [
		{ type: Renderer2 },
		{ type: ElementRef },
		{ type: RadioControlRegistry },
		{ type: Injector }
	], {
		name: [{ type: Input }],
		formControlName: [{ type: Input }],
		value: [{ type: Input }]
	});
})();
var RANGE_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => RangeValueAccessor),
	multi: true
};
var RangeValueAccessor = class RangeValueAccessor extends BuiltInControlValueAccessor {
	writeValue(value) {
		this.setProperty("value", parseFloat(value));
	}
	registerOnChange(fn) {
		this.onChange = (value) => {
			fn(value == "" ? null : parseFloat(value));
		};
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵRangeValueAccessor_BaseFactory = void 0;
		return function RangeValueAccessor_Factory(__ngFactoryType__) {
			return (ɵRangeValueAccessor_BaseFactory || (ɵRangeValueAccessor_BaseFactory = ɵɵgetInheritedFactory(RangeValueAccessor)))(__ngFactoryType__ || RangeValueAccessor);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: RangeValueAccessor,
		selectors: [
			[
				"input",
				"type",
				"range",
				"formControlName",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"input",
				"type",
				"range",
				"formControl",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"input",
				"type",
				"range",
				"ngModel",
				"",
				3,
				"ngNoCva",
				""
			]
		],
		hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
				return ctx.onChange($event.target.value);
			})("input", function RangeValueAccessor_input_HostBindingHandler($event) {
				return ctx.onChange($event.target.value);
			})("blur", function RangeValueAccessor_blur_HostBindingHandler() {
				return ctx.onTouched();
			});
		},
		standalone: false,
		features: [ɵɵProvidersFeature([RANGE_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
		type: Directive,
		args: [{
			selector: "input[type=range]:not([ngNoCva])[formControlName],input[type=range]:not([ngNoCva])[formControl],input[type=range]:not([ngNoCva])[ngModel]",
			host: {
				"(change)": "onChange($any($event.target).value)",
				"(input)": "onChange($any($event.target).value)",
				"(blur)": "onTouched()"
			},
			providers: [RANGE_VALUE_ACCESSOR],
			standalone: false
		}]
	}], null, null);
})();
var FormArray = class extends AbstractControl {
	constructor(controls, validatorOrOpts, asyncValidator) {
		super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
		this.controls = controls;
		this._initObservables();
		this._setUpdateStrategy(validatorOrOpts);
		this._setUpControls();
		this.updateValueAndValidity({
			onlySelf: true,
			emitEvent: !!this.asyncValidator
		});
	}
	controls;
	at(index) {
		return this.controls[this._adjustIndex(index)];
	}
	push(control, options = {}) {
		if (Array.isArray(control)) control.forEach((ctrl) => {
			this.controls.push(ctrl);
			this._registerControl(ctrl);
		});
		else {
			this.controls.push(control);
			this._registerControl(control);
		}
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
		this._onCollectionChange();
	}
	insert(index, control, options = {}) {
		this.controls.splice(index, 0, control);
		this._registerControl(control);
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
	}
	removeAt(index, options = {}) {
		let adjustedIndex = this._adjustIndex(index);
		if (adjustedIndex < 0) adjustedIndex = 0;
		if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {});
		this.controls.splice(adjustedIndex, 1);
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
	}
	setControl(index, control, options = {}) {
		let adjustedIndex = this._adjustIndex(index);
		if (adjustedIndex < 0) adjustedIndex = 0;
		if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {});
		this.controls.splice(adjustedIndex, 1);
		if (control) {
			this.controls.splice(adjustedIndex, 0, control);
			this._registerControl(control);
		}
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
		this._onCollectionChange();
	}
	get length() {
		return this.controls.length;
	}
	setValue(value, options = {}) {
		untracked(() => {
			assertAllValuesPresent(this, false, value);
			value.forEach((newValue, index) => {
				assertControlPresent(this, false, index);
				this.at(index).setValue(newValue, {
					onlySelf: true,
					emitEvent: options.emitEvent
				});
			});
			this.updateValueAndValidity(options);
		});
	}
	patchValue(value, options = {}) {
		if (value == null) return;
		value.forEach((newValue, index) => {
			if (this.at(index)) this.at(index).patchValue(newValue, {
				onlySelf: true,
				emitEvent: options.emitEvent
			});
		});
		this.updateValueAndValidity(options);
	}
	reset(value = [], options = {}) {
		this._forEachChild((control, index) => {
			control.reset(value[index], {
				...options,
				onlySelf: true
			});
		});
		this._updatePristine(options, this);
		this._updateTouched(options, this);
		this.updateValueAndValidity(options);
		if (options?.emitEvent !== false) this._events.next(new FormResetEvent(this));
	}
	getRawValue() {
		return this.controls.map((control) => control.getRawValue());
	}
	clear(options = {}) {
		if (this.controls.length < 1) return;
		this._forEachChild((control) => control._registerOnCollectionChange(() => {}));
		this.controls.splice(0);
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
	}
	_adjustIndex(index) {
		return index < 0 ? index + this.length : index;
	}
	_syncPendingControls() {
		let subtreeUpdated = this.controls.reduce((updated, child) => {
			return child._syncPendingControls() ? true : updated;
		}, false);
		if (subtreeUpdated) this.updateValueAndValidity({ onlySelf: true });
		return subtreeUpdated;
	}
	_forEachChild(cb) {
		this.controls.forEach((control, index) => {
			cb(control, index);
		});
	}
	_updateValue() {
		this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
	}
	_anyControls(condition) {
		return this.controls.some((control) => control.enabled && condition(control));
	}
	_setUpControls() {
		this._forEachChild((control) => this._registerControl(control));
	}
	_allControlsDisabled() {
		for (const control of this.controls) if (control.enabled) return false;
		return this.controls.length > 0 || this.disabled;
	}
	_registerControl(control) {
		control.setParent(this);
		control._registerOnCollectionChange(this._onCollectionChange);
	}
	_find(name) {
		return this.at(name) ?? null;
	}
};
var formDirectiveProvider = {
	provide: ControlContainer,
	useExisting: forwardRef(() => FormArrayDirective)
};
var FormArrayDirective = class FormArrayDirective extends AbstractFormDirective {
	form = null;
	ngSubmit = new EventEmitter();
	get control() {
		return this.form;
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵFormArrayDirective_BaseFactory = void 0;
		return function FormArrayDirective_Factory(__ngFactoryType__) {
			return (ɵFormArrayDirective_BaseFactory || (ɵFormArrayDirective_BaseFactory = ɵɵgetInheritedFactory(FormArrayDirective)))(__ngFactoryType__ || FormArrayDirective);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: FormArrayDirective,
		selectors: [[
			"",
			"formArray",
			""
		]],
		hostBindings: function FormArrayDirective_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("submit", function FormArrayDirective_submit_HostBindingHandler($event) {
				return ctx.onSubmit($event);
			})("reset", function FormArrayDirective_reset_HostBindingHandler() {
				return ctx.onReset();
			});
		},
		inputs: { form: [
			0,
			"formArray",
			"form"
		] },
		outputs: { ngSubmit: "ngSubmit" },
		exportAs: ["ngForm"],
		standalone: false,
		features: [ɵɵProvidersFeature([formDirectiveProvider]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayDirective, [{
		type: Directive,
		args: [{
			selector: "[formArray]",
			providers: [formDirectiveProvider],
			host: {
				"(submit)": "onSubmit($event)",
				"(reset)": "onReset()"
			},
			exportAs: "ngForm",
			standalone: false
		}]
	}], null, {
		form: [{
			type: Input,
			args: ["formArray"]
		}],
		ngSubmit: [{ type: Output }]
	});
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
	provide: NgControl,
	useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class FormControlDirective extends NgControl {
	_ngModelWarningConfig;
	callSetDisabledState;
	viewModel;
	form;
	set isDisabled(isDisabled) {
		if (typeof ngDevMode === "undefined" || ngDevMode) console.warn(disabledAttrWarning);
	}
	model;
	update = new EventEmitter();
	static _ngModelWarningSentOnce = false;
	_ngModelWarningSent = false;
	constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState, renderer, injector) {
		super(injector, renderer, valueAccessors);
		this._ngModelWarningConfig = _ngModelWarningConfig;
		this.callSetDisabledState = callSetDisabledState;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	ngOnChanges(changes) {
		if (this._isControlChanged(changes)) {
			const previousForm = changes["form"].previousValue;
			if (previousForm) {
				cleanUpControl(previousForm, this, false);
				this.removeParseErrorsValidator(previousForm);
			}
			if (!this.isCustomControlBased) {
				this.valueAccessor ??= this.selectedValueAccessor;
				setUpControlValueAccessor(this.form, this, this.callSetDisabledState);
			} else this.setupCustomControl();
			this.form.updateValueAndValidity({ emitEvent: false });
		}
		if (isPropertyUpdated(changes, this.viewModel)) {
			if (typeof ngDevMode === "undefined" || ngDevMode) _ngModelWarning("formControl", FormControlDirective, this, this._ngModelWarningConfig);
			this.form.setValue(this.model);
			this.viewModel = this.model;
		}
	}
	ngOnDestroy() {
		if (this.form) cleanUpControl(this.form, this, false);
	}
	get path() {
		return [];
	}
	get control() {
		return this.form;
	}
	viewToModelUpdate(newValue) {
		this.viewModel = newValue;
		this.update.emit(newValue);
	}
	_isControlChanged(changes) {
		return Object.hasOwn(changes, "form");
	}
	ɵngControlCreate(host) {
		super.ngControlCreate(host);
	}
	ɵngControlUpdate(host) {
		super.ngControlUpdate(host, true);
	}
	static ɵfac = function FormControlDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FormControlDirective)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8), ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(Injector, 8));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: FormControlDirective,
		selectors: [[
			"",
			"formControl",
			""
		]],
		inputs: {
			form: [
				0,
				"formControl",
				"form"
			],
			isDisabled: [
				0,
				"disabled",
				"isDisabled"
			],
			model: [
				0,
				"ngModel",
				"model"
			]
		},
		outputs: { update: "ngModelChange" },
		exportAs: ["ngForm"],
		standalone: false,
		features: [
			ɵɵProvidersFeature([formControlBinding, NG_CONTROL_INTEGRATION_PROVIDER]),
			ɵɵInheritDefinitionFeature,
			ɵɵNgOnChangesFeature,
			ɵɵControlFeature(null)
		]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
		type: Directive,
		args: [{
			selector: "[formControl]",
			providers: [formControlBinding, NG_CONTROL_INTEGRATION_PROVIDER],
			exportAs: "ngForm",
			standalone: false
		}]
	}], () => [
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALUE_ACCESSOR]
				}
			]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
			}]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [CALL_SET_DISABLED_STATE]
			}]
		},
		{
			type: Renderer2,
			decorators: [{ type: Optional }]
		},
		{
			type: Injector,
			decorators: [{ type: Optional }]
		}
	], {
		form: [{
			type: Input,
			args: ["formControl"]
		}],
		isDisabled: [{
			type: Input,
			args: ["disabled"]
		}],
		model: [{
			type: Input,
			args: ["ngModel"]
		}],
		update: [{
			type: Output,
			args: ["ngModelChange"]
		}]
	});
})();
var formGroupNameProvider = {
	provide: ControlContainer,
	useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class FormGroupName extends AbstractFormGroupDirective {
	name = null;
	constructor(parent, validators, asyncValidators) {
		super();
		this._parent = parent;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	_checkParentType() {
		if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) throw groupParentException();
	}
	static ɵfac = function FormGroupName_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FormGroupName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: FormGroupName,
		selectors: [[
			"",
			"formGroupName",
			""
		]],
		inputs: { name: [
			0,
			"formGroupName",
			"name"
		] },
		standalone: false,
		features: [ɵɵProvidersFeature([formGroupNameProvider]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
		type: Directive,
		args: [{
			selector: "[formGroupName]",
			providers: [formGroupNameProvider],
			standalone: false
		}]
	}], () => [
		{
			type: ControlContainer,
			decorators: [
				{ type: Optional },
				{ type: Host },
				{ type: SkipSelf }
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		}
	], { name: [{
		type: Input,
		args: ["formGroupName"]
	}] });
})();
var formArrayNameProvider = {
	provide: ControlContainer,
	useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class FormArrayName extends ControlContainer {
	_parent;
	name = null;
	constructor(parent, validators, asyncValidators) {
		super();
		this._parent = parent;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	ngOnInit() {
		if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) throw arrayParentException();
		this.formDirective.addFormArray(this);
	}
	ngOnDestroy() {
		this.formDirective?.removeFormArray(this);
	}
	get control() {
		return this.formDirective.getFormArray(this);
	}
	get formDirective() {
		return this._parent ? this._parent.formDirective : null;
	}
	get path() {
		return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
	}
	static ɵfac = function FormArrayName_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FormArrayName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: FormArrayName,
		selectors: [[
			"",
			"formArrayName",
			""
		]],
		inputs: { name: [
			0,
			"formArrayName",
			"name"
		] },
		standalone: false,
		features: [ɵɵProvidersFeature([formArrayNameProvider]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
		type: Directive,
		args: [{
			selector: "[formArrayName]",
			providers: [formArrayNameProvider],
			standalone: false
		}]
	}], () => [
		{
			type: ControlContainer,
			decorators: [
				{ type: Optional },
				{ type: Host },
				{ type: SkipSelf }
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		}
	], { name: [{
		type: Input,
		args: ["formArrayName"]
	}] });
})();
function hasInvalidParent(parent) {
	return !(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
	provide: NgControl,
	useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class FormControlName extends NgControl {
	_ngModelWarningConfig;
	_added = false;
	viewModel;
	control;
	name = null;
	set isDisabled(isDisabled) {
		if (typeof ngDevMode === "undefined" || ngDevMode) console.warn(disabledAttrWarning);
	}
	model;
	update = new EventEmitter();
	static _ngModelWarningSentOnce = false;
	_ngModelWarningSent = false;
	constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig, renderer, injector) {
		super(injector, renderer, valueAccessors);
		this._ngModelWarningConfig = _ngModelWarningConfig;
		this._parent = parent;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	_setupWithForm(control, callSetDisabledState) {
		this.control = control;
		if (!this.isCustomControlBased) {
			this.valueAccessor ??= this.selectedValueAccessor;
			setUpControlValueAccessor(control, this, callSetDisabledState);
		} else this.setupCustomControl();
	}
	ngOnChanges(changes) {
		if (!this._added) this._setUpControl();
		if (isPropertyUpdated(changes, this.viewModel)) {
			if (typeof ngDevMode === "undefined" || ngDevMode) _ngModelWarning("formControlName", FormControlName, this, this._ngModelWarningConfig);
			this.viewModel = this.model;
			this.formDirective.updateModel(this, this.model);
		}
	}
	ngOnDestroy() {
		this.formDirective?.removeControl(this);
	}
	viewToModelUpdate(newValue) {
		this.viewModel = newValue;
		this.update.emit(newValue);
	}
	get path() {
		return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
	}
	get formDirective() {
		return this._parent ? this._parent.formDirective : null;
	}
	_setUpControl() {
		if (typeof ngDevMode === "undefined" || ngDevMode) checkParentType(this._parent, this.name);
		this.control = this.formDirective.addControl(this);
		this._added = true;
	}
	ɵngControlCreate(host) {
		super.ngControlCreate(host);
	}
	ɵngControlUpdate(host) {
		if (!this.isCustomControlBased) return;
		if (!this._added) this._setUpControl();
		super.ngControlUpdate(host, true);
	}
	static ɵfac = function FormControlName_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FormControlName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(Injector, 8));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: FormControlName,
		selectors: [[
			"",
			"formControlName",
			""
		]],
		inputs: {
			name: [
				0,
				"formControlName",
				"name"
			],
			isDisabled: [
				0,
				"disabled",
				"isDisabled"
			],
			model: [
				0,
				"ngModel",
				"model"
			]
		},
		outputs: { update: "ngModelChange" },
		standalone: false,
		features: [
			ɵɵProvidersFeature([controlNameBinding, NG_CONTROL_INTEGRATION_PROVIDER]),
			ɵɵInheritDefinitionFeature,
			ɵɵNgOnChangesFeature,
			ɵɵControlFeature(null)
		]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
		type: Directive,
		args: [{
			selector: "[formControlName]",
			providers: [controlNameBinding, NG_CONTROL_INTEGRATION_PROVIDER],
			standalone: false
		}]
	}], () => [
		{
			type: ControlContainer,
			decorators: [
				{ type: Optional },
				{ type: Host },
				{ type: SkipSelf }
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALUE_ACCESSOR]
				}
			]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
			}]
		},
		{
			type: Renderer2,
			decorators: [{ type: Optional }]
		},
		{
			type: Injector,
			decorators: [{ type: Optional }]
		}
	], {
		name: [{
			type: Input,
			args: ["formControlName"]
		}],
		isDisabled: [{
			type: Input,
			args: ["disabled"]
		}],
		model: [{
			type: Input,
			args: ["ngModel"]
		}],
		update: [{
			type: Output,
			args: ["ngModelChange"]
		}]
	});
})();
function checkParentType(parent, name) {
	if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) throw ngModelGroupException();
	else if (!(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName)) throw controlParentException(name);
}
var SELECT_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => SelectControlValueAccessor),
	multi: true
};
function _buildValueString$1(id, value) {
	if (id == null) return `${value}`;
	if (value && typeof value === "object") value = "Object";
	return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
	return valueString.split(":")[0];
}
var SelectControlValueAccessor = class SelectControlValueAccessor extends BuiltInControlValueAccessor {
	value;
	_optionMap = /* @__PURE__ */ new Map();
	_idCounter = 0;
	set compareWith(fn) {
		if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
		this._compareWith = fn;
	}
	_compareWith = Object.is;
	appRefInjector = inject(ApplicationRef).injector;
	destroyRef = inject(DestroyRef);
	cdr = inject(ChangeDetectorRef);
	_queuedWrite = false;
	_writeValueAfterRender() {
		if (this._queuedWrite || this.appRefInjector.destroyed) return;
		this._queuedWrite = true;
		afterNextRender({ write: () => {
			if (this.destroyRef.destroyed) return;
			this._queuedWrite = false;
			this.writeValue(this.value);
		} }, { injector: this.appRefInjector });
	}
	writeValue(value) {
		this.cdr.markForCheck();
		this.value = value;
		const valueString = _buildValueString$1(this._getOptionId(value), value);
		this.setProperty("value", valueString);
	}
	registerOnChange(fn) {
		this.onChange = (valueString) => {
			this.value = this._getOptionValue(valueString);
			fn(this.value);
		};
	}
	_registerOption() {
		return (this._idCounter++).toString();
	}
	_getOptionId(value) {
		for (const id of this._optionMap.keys()) if (this._compareWith(this._optionMap.get(id), value)) return id;
		return null;
	}
	_getOptionValue(valueString) {
		const id = _extractId$1(valueString);
		return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵSelectControlValueAccessor_BaseFactory = void 0;
		return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
			return (ɵSelectControlValueAccessor_BaseFactory || (ɵSelectControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(SelectControlValueAccessor)))(__ngFactoryType__ || SelectControlValueAccessor);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: SelectControlValueAccessor,
		selectors: [
			[
				"select",
				"formControlName",
				"",
				3,
				"multiple",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"select",
				"formControl",
				"",
				3,
				"multiple",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"select",
				"ngModel",
				"",
				3,
				"multiple",
				"",
				3,
				"ngNoCva",
				""
			]
		],
		hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
				return ctx.onChange($event.target.value);
			})("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
				return ctx.onTouched();
			});
		},
		inputs: { compareWith: "compareWith" },
		standalone: false,
		features: [ɵɵProvidersFeature([SELECT_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
		type: Directive,
		args: [{
			selector: "select:not([multiple]):not([ngNoCva])[formControlName],select:not([multiple]):not([ngNoCva])[formControl],select:not([multiple]):not([ngNoCva])[ngModel]",
			host: {
				"(change)": "onChange($any($event.target).value)",
				"(blur)": "onTouched()"
			},
			providers: [SELECT_VALUE_ACCESSOR],
			standalone: false
		}]
	}], null, { compareWith: [{ type: Input }] });
})();
var NgSelectOption = class NgSelectOption {
	_element;
	_renderer;
	_select;
	id;
	constructor(_element, _renderer, _select) {
		this._element = _element;
		this._renderer = _renderer;
		this._select = _select;
		if (this._select) this.id = this._select._registerOption();
	}
	set ngValue(value) {
		if (this._select == null) return;
		this._select._optionMap.set(this.id, value);
		this._setElementValue(_buildValueString$1(this.id, value));
		this._select._writeValueAfterRender();
	}
	set value(value) {
		this._setElementValue(value);
		this._select?._writeValueAfterRender();
	}
	_setElementValue(value) {
		this._renderer.setProperty(this._element.nativeElement, "value", value);
	}
	ngOnDestroy() {
		this._select?._optionMap.delete(this.id);
		this._select?._writeValueAfterRender();
	}
	static ɵfac = function NgSelectOption_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgSelectOption)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SelectControlValueAccessor, 9));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgSelectOption,
		selectors: [["option"]],
		inputs: {
			ngValue: "ngValue",
			value: "value"
		},
		standalone: false
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
		type: Directive,
		args: [{
			selector: "option",
			standalone: false
		}]
	}], () => [
		{ type: ElementRef },
		{ type: Renderer2 },
		{
			type: SelectControlValueAccessor,
			decorators: [{ type: Optional }, { type: Host }]
		}
	], {
		ngValue: [{
			type: Input,
			args: ["ngValue"]
		}],
		value: [{
			type: Input,
			args: ["value"]
		}]
	});
})();
var NEGATIVE_ZERO = Symbol("negativeZero");
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
	multi: true
};
function _buildValueString(id, value) {
	if (id == null) return `${value}`;
	if (typeof value === "string") value = `'${value}'`;
	if (value && typeof value === "object") value = "Object";
	return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
	return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
	value;
	_optionMap = /* @__PURE__ */ new Map();
	_idCounter = 0;
	set compareWith(fn) {
		if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
		this._compareWith = fn;
	}
	_compareWith = Object.is;
	writeValue(value) {
		this.value = value;
		let optionSelectedStateSetter;
		if (Array.isArray(value)) {
			const ids = this._getOptionIds(value);
			optionSelectedStateSetter = (opt, id) => {
				opt._setSelected(ids.has(id));
			};
		} else optionSelectedStateSetter = (opt) => {
			opt._setSelected(false);
		};
		this._optionMap.forEach(optionSelectedStateSetter);
	}
	registerOnChange(fn) {
		this.onChange = (element) => {
			const selected = [];
			const selectedOptions = element.selectedOptions;
			if (selectedOptions !== void 0) {
				const options = selectedOptions;
				for (let i = 0; i < options.length; i++) {
					const opt = options[i];
					const val = this._getOptionValue(opt.value);
					selected.push(val);
				}
			} else {
				const options = element.options;
				for (let i = 0; i < options.length; i++) {
					const opt = options[i];
					if (opt.selected) {
						const val = this._getOptionValue(opt.value);
						selected.push(val);
					}
				}
			}
			this.value = selected;
			fn(selected);
		};
	}
	_registerOption(value) {
		const id = (this._idCounter++).toString();
		this._optionMap.set(id, value);
		return id;
	}
	_getOptionIds(values) {
		if (this._compareWith !== Object.is || values.length < 2) return new Set(values.map((value) => this._getOptionId(value)).filter((id) => id !== null));
		const remainingValues = /* @__PURE__ */ new Set();
		values.forEach((value) => remainingValues.add(value === 0 && Object.is(value, -0) ? NEGATIVE_ZERO : value));
		const ids = /* @__PURE__ */ new Set();
		for (const [id, option] of this._optionMap) {
			if (remainingValues.size === 0) break;
			const optionValue = option._value;
			const value = optionValue === 0 && Object.is(optionValue, -0) ? NEGATIVE_ZERO : optionValue;
			if (remainingValues.delete(value)) ids.add(id);
		}
		return ids;
	}
	_getOptionId(value) {
		for (const id of this._optionMap.keys()) if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
		return null;
	}
	_getOptionValue(valueString) {
		const id = _extractId(valueString);
		return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵSelectMultipleControlValueAccessor_BaseFactory = void 0;
		return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
			return (ɵSelectMultipleControlValueAccessor_BaseFactory || (ɵSelectMultipleControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(SelectMultipleControlValueAccessor)))(__ngFactoryType__ || SelectMultipleControlValueAccessor);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: SelectMultipleControlValueAccessor,
		selectors: [
			[
				"select",
				"multiple",
				"",
				"formControlName",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"select",
				"multiple",
				"",
				"formControl",
				"",
				3,
				"ngNoCva",
				""
			],
			[
				"select",
				"multiple",
				"",
				"ngModel",
				"",
				3,
				"ngNoCva",
				""
			]
		],
		hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
				return ctx.onChange($event.target);
			})("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
				return ctx.onTouched();
			});
		},
		inputs: { compareWith: "compareWith" },
		standalone: false,
		features: [ɵɵProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
		type: Directive,
		args: [{
			selector: "select[multiple]:not([ngNoCva])[formControlName],select[multiple]:not([ngNoCva])[formControl],select[multiple]:not([ngNoCva])[ngModel]",
			host: {
				"(change)": "onChange($event.target)",
				"(blur)": "onTouched()"
			},
			providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
			standalone: false
		}]
	}], null, { compareWith: [{ type: Input }] });
})();
var ɵNgSelectMultipleOption = class ɵNgSelectMultipleOption {
	_element;
	_renderer;
	_select;
	id;
	_value;
	constructor(_element, _renderer, _select) {
		this._element = _element;
		this._renderer = _renderer;
		this._select = _select;
		if (this._select) this.id = this._select._registerOption(this);
	}
	set ngValue(value) {
		if (this._select == null) return;
		this._value = value;
		this._setElementValue(_buildValueString(this.id, value));
		this._select.writeValue(this._select.value);
	}
	set value(value) {
		if (this._select) {
			this._value = value;
			this._setElementValue(_buildValueString(this.id, value));
			this._select.writeValue(this._select.value);
		} else this._setElementValue(value);
	}
	_setElementValue(value) {
		this._renderer.setProperty(this._element.nativeElement, "value", value);
	}
	_setSelected(selected) {
		this._renderer.setProperty(this._element.nativeElement, "selected", selected);
	}
	ngOnDestroy() {
		if (this._select) {
			this._select._optionMap.delete(this.id);
			this._select.writeValue(this._select.value);
		}
	}
	static ɵfac = function ɵNgSelectMultipleOption_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ɵNgSelectMultipleOption)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SelectMultipleControlValueAccessor, 9));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: ɵNgSelectMultipleOption,
		selectors: [["option"]],
		inputs: {
			ngValue: "ngValue",
			value: "value"
		},
		standalone: false
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵNgSelectMultipleOption, [{
		type: Directive,
		args: [{
			selector: "option",
			standalone: false
		}]
	}], () => [
		{ type: ElementRef },
		{ type: Renderer2 },
		{
			type: SelectMultipleControlValueAccessor,
			decorators: [{ type: Optional }, { type: Host }]
		}
	], {
		ngValue: [{
			type: Input,
			args: ["ngValue"]
		}],
		value: [{
			type: Input,
			args: ["value"]
		}]
	});
})();
var SHARED_FORM_DIRECTIVES = [
	ɵNgNoValidate,
	NgSelectOption,
	ɵNgSelectMultipleOption,
	DefaultValueAccessor,
	NumberValueAccessor,
	RangeValueAccessor,
	CheckboxControlValueAccessor,
	SelectControlValueAccessor,
	SelectMultipleControlValueAccessor,
	RadioControlValueAccessor,
	NgControlStatus,
	NgControlStatusGroup,
	RequiredValidator,
	MinLengthValidator,
	MaxLengthValidator,
	PatternValidator,
	CheckboxRequiredValidator,
	EmailValidator,
	MinValidator,
	MaxValidator
];
var TEMPLATE_DRIVEN_DIRECTIVES = [
	NgModel,
	NgModelGroup,
	NgForm
];
var REACTIVE_DRIVEN_DIRECTIVES = [
	FormControlDirective,
	FormGroupDirective,
	FormArrayDirective,
	FormControlName,
	FormGroupName,
	FormArrayName
];
var ɵInternalFormsSharedModule = class ɵInternalFormsSharedModule {
	static ɵfac = function ɵInternalFormsSharedModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ɵInternalFormsSharedModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: ɵInternalFormsSharedModule,
		declarations: [
			ɵNgNoValidate,
			NgSelectOption,
			ɵNgSelectMultipleOption,
			DefaultValueAccessor,
			NumberValueAccessor,
			RangeValueAccessor,
			CheckboxControlValueAccessor,
			SelectControlValueAccessor,
			SelectMultipleControlValueAccessor,
			RadioControlValueAccessor,
			NgControlStatus,
			NgControlStatusGroup,
			RequiredValidator,
			MinLengthValidator,
			MaxLengthValidator,
			PatternValidator,
			CheckboxRequiredValidator,
			EmailValidator,
			MinValidator,
			MaxValidator
		],
		exports: [
			ɵNgNoValidate,
			NgSelectOption,
			ɵNgSelectMultipleOption,
			DefaultValueAccessor,
			NumberValueAccessor,
			RangeValueAccessor,
			CheckboxControlValueAccessor,
			SelectControlValueAccessor,
			SelectMultipleControlValueAccessor,
			RadioControlValueAccessor,
			NgControlStatus,
			NgControlStatusGroup,
			RequiredValidator,
			MinLengthValidator,
			MaxLengthValidator,
			PatternValidator,
			CheckboxRequiredValidator,
			EmailValidator,
			MinValidator,
			MaxValidator
		]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵInternalFormsSharedModule, [{
		type: NgModule,
		args: [{
			declarations: SHARED_FORM_DIRECTIVES,
			exports: SHARED_FORM_DIRECTIVES
		}]
	}], null, null);
})();
function isAbstractControlOptions(options) {
	return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class FormBuilder {
	useNonNullable = false;
	get nonNullable() {
		const nnfb = new FormBuilder();
		nnfb.useNonNullable = true;
		return nnfb;
	}
	group(controls, options = null) {
		const reducedControls = this._reduceControls(controls);
		let newOptions = {};
		if (isAbstractControlOptions(options)) newOptions = options;
		else if (options !== null) {
			newOptions.validators = options.validator;
			newOptions.asyncValidators = options.asyncValidator;
		}
		return new FormGroup(reducedControls, newOptions);
	}
	record(controls, options = null) {
		return new FormRecord(this._reduceControls(controls), options);
	}
	control(formState, validatorOrOpts, asyncValidator) {
		let newOptions = {};
		if (!this.useNonNullable) return new FormControl(formState, validatorOrOpts, asyncValidator);
		if (isAbstractControlOptions(validatorOrOpts)) newOptions = validatorOrOpts;
		else {
			newOptions.validators = validatorOrOpts;
			newOptions.asyncValidators = asyncValidator;
		}
		return new FormControl(formState, {
			...newOptions,
			nonNullable: true
		});
	}
	array(controls, validatorOrOpts, asyncValidator) {
		return new FormArray(controls.map((c) => this._createControl(c)), validatorOrOpts, asyncValidator);
	}
	_reduceControls(controls) {
		const createdControls = {};
		Object.keys(controls).forEach((controlName) => {
			createdControls[controlName] = this._createControl(controls[controlName]);
		});
		return createdControls;
	}
	_createControl(controls) {
		if (controls instanceof FormControl) return controls;
		else if (controls instanceof AbstractControl) return controls;
		else if (Array.isArray(controls)) {
			const value = controls[0];
			const validator = controls.length > 1 ? controls[1] : null;
			const asyncValidator = controls.length > 2 ? controls[2] : null;
			return this.control(value, validator, asyncValidator);
		} else return this.control(controls);
	}
	static ɵfac = function FormBuilder_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FormBuilder)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: FormBuilder,
		factory: FormBuilder.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{ type: Service }], null, null);
})();
var NonNullableFormBuilder = class NonNullableFormBuilder {
	static ɵfac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NonNullableFormBuilder)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: NonNullableFormBuilder,
		factory: () => (() => inject(FormBuilder).nonNullable)()
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
		type: Service,
		args: [{ factory: () => inject(FormBuilder).nonNullable }]
	}], null, null);
})();
var UntypedFormBuilder = class UntypedFormBuilder extends FormBuilder {
	group(controlsConfig, options = null) {
		return super.group(controlsConfig, options);
	}
	control(formState, validatorOrOpts, asyncValidator) {
		return super.control(formState, validatorOrOpts, asyncValidator);
	}
	array(controlsConfig, validatorOrOpts, asyncValidator) {
		return super.array(controlsConfig, validatorOrOpts, asyncValidator);
	}
	static ɵfac = function UntypedFormBuilder_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || UntypedFormBuilder)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: UntypedFormBuilder,
		factory: UntypedFormBuilder.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{ type: Service }], null, null);
})();
var FormsModule = class FormsModule {
	static withConfig(opts) {
		return {
			ngModule: FormsModule,
			providers: [{
				provide: CALL_SET_DISABLED_STATE,
				useValue: opts.callSetDisabledState ?? setDisabledStateDefault
			}]
		};
	}
	static ɵfac = function FormsModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FormsModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: FormsModule,
		declarations: [
			NgModel,
			NgModelGroup,
			NgForm
		],
		exports: [
			ɵInternalFormsSharedModule,
			NgModel,
			NgModelGroup,
			NgForm
		]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [ɵInternalFormsSharedModule] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
		type: NgModule,
		args: [{
			declarations: TEMPLATE_DRIVEN_DIRECTIVES,
			exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
		}]
	}], null, null);
})();
var ReactiveFormsModule = class ReactiveFormsModule {
	static withConfig(opts) {
		return {
			ngModule: ReactiveFormsModule,
			providers: [{
				provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
				useValue: opts.warnOnNgModelWithFormControl ?? "always"
			}, {
				provide: CALL_SET_DISABLED_STATE,
				useValue: opts.callSetDisabledState ?? setDisabledStateDefault
			}]
		};
	}
	static ɵfac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ReactiveFormsModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: ReactiveFormsModule,
		declarations: [
			FormControlDirective,
			FormGroupDirective,
			FormArrayDirective,
			FormControlName,
			FormGroupName,
			FormArrayName
		],
		exports: [
			ɵInternalFormsSharedModule,
			FormControlDirective,
			FormGroupDirective,
			FormArrayDirective,
			FormControlName,
			FormGroupName,
			FormArrayName
		]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [ɵInternalFormsSharedModule] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
		type: NgModule,
		args: [{
			declarations: [REACTIVE_DRIVEN_DIRECTIVES],
			exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
		}]
	}], null, null);
})();
// node_modules/@angular/forms/fesm2022/_validation_errors-chunk.mjs
/**
* @license Angular v22.2.6
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var FIELD_TREE = /* @__PURE__ */ Symbol("FIELD_TREE");
var boundPathDepth = 0;
function getBoundPathDepth() {
	return boundPathDepth;
}
function setBoundPathDepthForResolution(fn, depth) {
	return (...args) => {
		try {
			boundPathDepth = depth;
			return fn(...args);
		} finally {
			boundPathDepth = 0;
		}
	};
}
function shortCircuitFalse(value) {
	return !value;
}
function shortCircuitTrue(value) {
	return value;
}
function isArray(value) {
	return Array.isArray(value);
}
function isObject(value) {
	return (typeof value === "object" || typeof value === "function") && value != null;
}
var DYNAMIC = Symbol();
var IGNORED = Symbol();
var AbstractLogic = class {
	predicates;
	fns = [];
	constructor(predicates) {
		this.predicates = predicates;
	}
	push(logicFn) {
		this.fns.push(wrapWithPredicates(this.predicates, logicFn));
	}
	mergeIn(other) {
		const fns = this.predicates ? other.fns.map((fn) => wrapWithPredicates(this.predicates, fn)) : other.fns;
		this.fns.push(...fns);
	}
	hasRules() {
		return this.fns.length > 0;
	}
};
var BooleanOrLogic = class extends AbstractLogic {
	get defaultValue() {
		return false;
	}
	compute(arg) {
		return this.fns.some((f) => {
			const result = f(arg);
			return result && result !== IGNORED;
		});
	}
};
var ArrayMergeIgnoreLogic = class ArrayMergeIgnoreLogic extends AbstractLogic {
	ignore;
	static ignoreNull(predicates) {
		return new ArrayMergeIgnoreLogic(predicates, (e) => e === null);
	}
	constructor(predicates, ignore) {
		super(predicates);
		this.ignore = ignore;
	}
	get defaultValue() {
		return [];
	}
	compute(arg) {
		return this.fns.reduce((prev, f) => {
			const value = f(arg);
			if (value === void 0 || value === IGNORED) return prev;
			else if (isArray(value)) return [...prev, ...this.ignore ? value.filter((e) => !this.ignore(e)) : value];
			else {
				if (this.ignore && this.ignore(value)) return prev;
				return [...prev, value];
			}
		}, []);
	}
};
var ArrayMergeLogic = class extends ArrayMergeIgnoreLogic {
	constructor(predicates) {
		super(predicates, void 0);
	}
};
var MetadataMergeLogic = class extends AbstractLogic {
	key;
	get defaultValue() {
		return this.key.reducer.getInitial();
	}
	constructor(predicates, key) {
		super(predicates);
		this.key = key;
	}
	compute(ctx) {
		if (this.fns.length === 0) return this.key.reducer.getInitial();
		let acc = this.key.reducer.getInitial();
		for (let i = 0; i < this.fns.length; i++) {
			const item = this.fns[i](ctx);
			if (item !== IGNORED) acc = this.key.reducer.reduce(acc, item);
		}
		return acc;
	}
};
function wrapWithPredicates(predicates, logicFn) {
	if (predicates.length === 0) return logicFn;
	return (arg) => {
		for (const predicate of predicates) {
			let predicateField = arg.stateOf(predicate.path);
			const depthDiff = untracked(predicateField.structure.pathKeys).length - predicate.depth;
			for (let i = 0; i < depthDiff; i++) predicateField = predicateField.structure.parent;
			if (!predicate.fn(predicateField.context)) return IGNORED;
		}
		return logicFn(arg);
	};
}
var LogicContainer = class {
	predicates;
	hidden;
	disabledReasons;
	readonly;
	syncErrors;
	syncTreeErrors;
	asyncErrors;
	metadata = /* @__PURE__ */ new Map();
	constructor(predicates) {
		this.predicates = predicates;
		this.hidden = new BooleanOrLogic(predicates);
		this.disabledReasons = new ArrayMergeLogic(predicates);
		this.readonly = new BooleanOrLogic(predicates);
		this.syncErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
		this.syncTreeErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
		this.asyncErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
	}
	hasAnyLogic() {
		return this.hidden.hasRules() || this.disabledReasons.hasRules() || this.readonly.hasRules() || this.syncErrors.hasRules() || this.syncTreeErrors.hasRules() || this.asyncErrors.hasRules() || this.metadata.size > 0;
	}
	hasMetadata(key) {
		return this.metadata.has(key);
	}
	hasMetadataKeys() {
		return this.metadata.size > 0;
	}
	getMetadataKeys() {
		return this.metadata.keys();
	}
	getMetadata(key) {
		if (!this.metadata.has(key)) this.metadata.set(key, new MetadataMergeLogic(this.predicates, key));
		return this.metadata.get(key);
	}
	mergeIn(other) {
		this.hidden.mergeIn(other.hidden);
		this.disabledReasons.mergeIn(other.disabledReasons);
		this.readonly.mergeIn(other.readonly);
		this.syncErrors.mergeIn(other.syncErrors);
		this.syncTreeErrors.mergeIn(other.syncTreeErrors);
		this.asyncErrors.mergeIn(other.asyncErrors);
		for (const key of other.getMetadataKeys()) {
			const metadataLogic = other.metadata.get(key);
			this.getMetadata(key).mergeIn(metadataLogic);
		}
	}
};
var AbstractLogicNodeBuilder = class {
	depth;
	constructor(depth) {
		this.depth = depth;
	}
	build() {
		return new LeafLogicNode(this, [], 0);
	}
};
var LogicNodeBuilder = class LogicNodeBuilder extends AbstractLogicNodeBuilder {
	constructor(depth) {
		super(depth);
	}
	current;
	all = [];
	addHiddenRule(logic) {
		this.getCurrent().addHiddenRule(logic);
	}
	addDisabledReasonRule(logic) {
		this.getCurrent().addDisabledReasonRule(logic);
	}
	addReadonlyRule(logic) {
		this.getCurrent().addReadonlyRule(logic);
	}
	addSyncErrorRule(logic) {
		this.getCurrent().addSyncErrorRule(logic);
	}
	addSyncTreeErrorRule(logic) {
		this.getCurrent().addSyncTreeErrorRule(logic);
	}
	addAsyncErrorRule(logic) {
		this.getCurrent().addAsyncErrorRule(logic);
	}
	addMetadataRule(key, logic) {
		this.getCurrent().addMetadataRule(key, logic);
	}
	getChild(key) {
		if (key === DYNAMIC) {
			const children = this.getCurrent().children;
			if (children.size > (children.has(DYNAMIC) ? 1 : 0)) this.current = void 0;
		}
		return this.getCurrent().getChild(key);
	}
	hasLogic(builder) {
		if (this === builder) return true;
		return this.all.some(({ builder: subBuilder }) => subBuilder.hasLogic(builder));
	}
	hasRules() {
		return this.all.length > 0;
	}
	anyChildHasLogic() {
		return this.all.some(({ builder }) => builder.anyChildHasLogic());
	}
	mergeIn(other, predicate) {
		if (predicate) this.all.push({
			builder: other,
			predicate: {
				fn: setBoundPathDepthForResolution(predicate.fn, this.depth),
				path: predicate.path
			}
		});
		else this.all.push({ builder: other });
		this.current = void 0;
	}
	getCurrent() {
		if (this.current === void 0) {
			this.current = new NonMergeableLogicNodeBuilder(this.depth);
			this.all.push({ builder: this.current });
		}
		return this.current;
	}
	static newRoot() {
		return new LogicNodeBuilder(0);
	}
};
var NonMergeableLogicNodeBuilder = class extends AbstractLogicNodeBuilder {
	logic = new LogicContainer([]);
	children = /* @__PURE__ */ new Map();
	constructor(depth) {
		super(depth);
	}
	addHiddenRule(logic) {
		this.logic.hidden.push(setBoundPathDepthForResolution(logic, this.depth));
	}
	addDisabledReasonRule(logic) {
		this.logic.disabledReasons.push(setBoundPathDepthForResolution(logic, this.depth));
	}
	addReadonlyRule(logic) {
		this.logic.readonly.push(setBoundPathDepthForResolution(logic, this.depth));
	}
	addSyncErrorRule(logic) {
		this.logic.syncErrors.push(setBoundPathDepthForResolution(logic, this.depth));
	}
	addSyncTreeErrorRule(logic) {
		this.logic.syncTreeErrors.push(setBoundPathDepthForResolution(logic, this.depth));
	}
	addAsyncErrorRule(logic) {
		this.logic.asyncErrors.push(setBoundPathDepthForResolution(logic, this.depth));
	}
	addMetadataRule(key, logic) {
		this.logic.getMetadata(key).push(setBoundPathDepthForResolution(logic, this.depth));
	}
	getChild(key) {
		if (!this.children.has(key)) this.children.set(key, new LogicNodeBuilder(this.depth + 1));
		return this.children.get(key);
	}
	hasLogic(builder) {
		return this === builder;
	}
	hasRules() {
		return this.logic.hasAnyLogic() || this.children.size > 0;
	}
	anyChildHasLogic() {
		for (const child of this.children.values()) if (child.hasRules()) return true;
		return false;
	}
};
var LeafLogicNode = class LeafLogicNode {
	builder;
	predicates;
	depth;
	logic;
	constructor(builder, predicates, depth) {
		this.builder = builder;
		this.predicates = predicates;
		this.depth = depth;
		this.logic = builder ? createLogic(builder, predicates, depth) : new LogicContainer([]);
	}
	getChild(key) {
		const childBuilders = this.builder ? getAllChildBuilders(this.builder, key) : [];
		if (childBuilders.length === 0) return new LeafLogicNode(void 0, [], this.depth + 1);
		else if (childBuilders.length === 1) {
			const { builder, predicates } = childBuilders[0];
			return new LeafLogicNode(builder, [...this.predicates, ...predicates.map((p) => bindLevel(p, this.depth))], this.depth + 1);
		} else return new CompositeLogicNode(childBuilders.map(({ builder, predicates }) => new LeafLogicNode(builder, [...this.predicates, ...predicates.map((p) => bindLevel(p, this.depth))], this.depth + 1)));
	}
	hasLogic(builder) {
		if (!this.builder) return false;
		return this.builder.hasLogic(builder);
	}
	hasRules() {
		return this.builder ? this.builder.hasRules() : false;
	}
	anyChildHasLogic() {
		return this.builder ? this.builder.anyChildHasLogic() : false;
	}
};
var CompositeLogicNode = class CompositeLogicNode {
	all;
	logic;
	constructor(all) {
		this.all = all;
		this.logic = new LogicContainer([]);
		for (const node of all) this.logic.mergeIn(node.logic);
	}
	getChild(key) {
		return new CompositeLogicNode(this.all.flatMap((child) => child.getChild(key)));
	}
	hasLogic(builder) {
		return this.all.some((node) => node.hasLogic(builder));
	}
	hasRules() {
		return this.all.some((node) => node.hasRules());
	}
	anyChildHasLogic() {
		return this.all.some((child) => child.anyChildHasLogic());
	}
};
function getAllChildBuilders(builder, key) {
	if (builder instanceof LogicNodeBuilder) return builder.all.flatMap(({ builder, predicate }) => {
		const children = getAllChildBuilders(builder, key);
		if (predicate) return children.map(({ builder, predicates }) => ({
			builder,
			predicates: [...predicates, predicate]
		}));
		return children;
	});
	else if (builder instanceof NonMergeableLogicNodeBuilder) return [...key !== DYNAMIC && builder.children.has(DYNAMIC) ? [{
		builder: builder.getChild(DYNAMIC),
		predicates: []
	}] : [], ...builder.children.has(key) ? [{
		builder: builder.getChild(key),
		predicates: []
	}] : []];
	else throw new RuntimeError(1909, ngDevMode && "Unknown LogicNodeBuilder type");
}
function createLogic(builder, predicates, depth) {
	const logic = new LogicContainer(predicates);
	if (builder instanceof LogicNodeBuilder) {
		const builtNodes = builder.all.map(({ builder, predicate }) => new LeafLogicNode(builder, predicate ? [...predicates, bindLevel(predicate, depth)] : predicates, depth));
		for (const node of builtNodes) logic.mergeIn(node.logic);
	} else if (builder instanceof NonMergeableLogicNodeBuilder) logic.mergeIn(builder.logic);
	else throw new RuntimeError(1909, ngDevMode && "Unknown LogicNodeBuilder type");
	return logic;
}
function bindLevel(predicate, depth) {
	return {
		...predicate,
		depth
	};
}
var PATH = Symbol("PATH");
var FieldPathNode = class FieldPathNode {
	keys;
	parent;
	keyInParent;
	root;
	children = /* @__PURE__ */ new Map();
	fieldPathProxy = new Proxy(this, FIELD_PATH_PROXY_HANDLER);
	logicBuilder;
	constructor(keys, root, parent, keyInParent) {
		this.keys = keys;
		this.parent = parent;
		this.keyInParent = keyInParent;
		this.root = root ?? this;
		if (!parent) this.logicBuilder = LogicNodeBuilder.newRoot();
	}
	get builder() {
		if (this.logicBuilder) return this.logicBuilder;
		return this.parent.builder.getChild(this.keyInParent);
	}
	getChild(key) {
		if (!this.children.has(key)) this.children.set(key, new FieldPathNode([...this.keys, key], this.root, this, key));
		return this.children.get(key);
	}
	mergeIn(other, predicate) {
		const path = other.compile();
		this.builder.mergeIn(path.builder, predicate);
	}
	static unwrapFieldPath(formPath) {
		return formPath[PATH];
	}
	static newRoot() {
		return new FieldPathNode([], void 0, void 0, void 0);
	}
};
var FIELD_PATH_PROXY_HANDLER = { get(node, property) {
	if (property === PATH) return node;
	return node.getChild(property).fieldPathProxy;
} };
var currentCompilingNode = void 0;
var compiledSchemas = /* @__PURE__ */ new Map();
var SchemaImpl = class SchemaImpl {
	schemaFn;
	constructor(schemaFn) {
		this.schemaFn = schemaFn;
	}
	compile() {
		if (compiledSchemas.has(this)) return compiledSchemas.get(this);
		const path = FieldPathNode.newRoot();
		compiledSchemas.set(this, path);
		let prevCompilingNode = currentCompilingNode;
		try {
			currentCompilingNode = path;
			this.schemaFn(path.fieldPathProxy);
		} finally {
			currentCompilingNode = prevCompilingNode;
		}
		return path;
	}
	static create(schema) {
		if (schema instanceof SchemaImpl) return schema;
		return new SchemaImpl(schema);
	}
	static rootCompile(schema) {
		try {
			compiledSchemas.clear();
			if (schema === void 0) return FieldPathNode.newRoot();
			if (schema instanceof SchemaImpl) return schema.compile();
			return new SchemaImpl(schema).compile();
		} finally {
			compiledSchemas.clear();
		}
	}
};
function isSchemaOrSchemaFn(value) {
	return value instanceof SchemaImpl || typeof value === "function";
}
function assertPathIsCurrent(path) {
	if (currentCompilingNode !== FieldPathNode.unwrapFieldPath(path).root) throw new RuntimeError(1908, ngDevMode && `A FieldPath can only be used directly within the Schema that owns it, **not** outside of it or within a sub-schema.`);
}
function metadata(path, key, logic) {
	assertPathIsCurrent(path);
	FieldPathNode.unwrapFieldPath(path).builder.addMetadataRule(key, logic);
	return key;
}
var MetadataReducer = {
	list() {
		return {
			reduce: (acc, item) => item === void 0 ? acc : [...acc, item],
			getInitial: () => []
		};
	},
	min() {
		return {
			reduce: (acc, item) => {
				if (acc === void 0 || item === void 0) return acc ?? item;
				return item < acc ? item : acc;
			},
			getInitial: () => void 0
		};
	},
	max() {
		return {
			reduce: (acc, item) => {
				if (acc === void 0 || item === void 0) return acc ?? item;
				return item > acc ? item : acc;
			},
			getInitial: () => void 0
		};
	},
	or() {
		return {
			reduce: (prev, next) => prev || next,
			getInitial: () => false
		};
	},
	and() {
		return {
			reduce: (prev, next) => prev && next,
			getInitial: () => true
		};
	},
	override
};
function override(getInitial) {
	return {
		reduce: (_, item) => item,
		getInitial: () => getInitial?.()
	};
}
var IS_ASYNC_VALIDATION_RESOURCE = Symbol("IS_ASYNC_VALIDATION_RESOURCE");
var MetadataKey = class {
	reducer;
	create;
	brand;
	[IS_ASYNC_VALIDATION_RESOURCE];
	constructor(reducer, create) {
		this.reducer = reducer;
		this.create = create;
	}
};
function createMetadataKey(reducer) {
	return new MetadataKey(reducer ?? MetadataReducer.override());
}
function createManagedMetadataKey(create, reducer) {
	return new MetadataKey(reducer ?? MetadataReducer.override(), create);
}
function createLimitSelectionKey() {
	return createMetadataKey();
}
var REQUIRED = createMetadataKey(MetadataReducer.or());
var MIN = createLimitSelectionKey();
var MIN_DATE = createMetadataKey(MetadataReducer.max());
var MIN_NUMBER = createMetadataKey(MetadataReducer.max());
var MAX = createLimitSelectionKey();
var MAX_DATE = createMetadataKey(MetadataReducer.min());
var MAX_NUMBER = createMetadataKey(MetadataReducer.min());
var MIN_LENGTH = createMetadataKey(MetadataReducer.max());
var MAX_LENGTH = createMetadataKey(MetadataReducer.min());
var PATTERN = createMetadataKey(MetadataReducer.list());
function shallowArrayEquals(a, b) {
	if (a === b) return true;
	if (!a || !b) return false;
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) if (!Object.is(a[i], b[i])) return false;
	return true;
}
function calculateValidationSelfStatus(state) {
	if (state.errors().length > 0) return "invalid";
	if (state.pending()) return "unknown";
	return "valid";
}
var FieldValidationState = class {
	node;
	constructor(node) {
		this.node = node;
	}
	rawSyncTreeErrors = computed(() => {
		if (this.shouldSkipValidation()) return [];
		return [...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context), ...this.node.structure.parent?.validationState.rawSyncTreeErrors() ?? []];
	}, {
		...ngDevMode ? { debugName: "rawSyncTreeErrors" } : {},
		equal: shallowArrayEquals
	});
	syncErrors = computed(() => {
		if (this.shouldSkipValidation()) return [];
		return [
			...this.node.logicNode.logic.syncErrors.compute(this.node.context),
			...this.syncTreeErrors(),
			...normalizeErrors$1(this.node.submitState.submissionErrors())
		];
	}, {
		...ngDevMode ? { debugName: "syncErrors" } : {},
		equal: shallowArrayEquals
	});
	syncValid = computed(() => {
		if (this.shouldSkipValidation()) return true;
		return this.node.structure.reduceChildren(this.syncErrors().length === 0, (child, value) => value && child.validationState.syncValid(), shortCircuitFalse);
	}, ...ngDevMode ? [{ debugName: "syncValid" }] : []);
	syncTreeErrors = computed(() => this.rawSyncTreeErrors().filter((err) => err.fieldTree === this.node.fieldTree), {
		...ngDevMode ? { debugName: "syncTreeErrors" } : {},
		equal: shallowArrayEquals
	});
	rawAsyncErrors = computed(() => {
		if (this.shouldSkipValidation()) return [];
		return [...this.node.logicNode.logic.asyncErrors.compute(this.node.context), ...this.node.structure.parent?.validationState.rawAsyncErrors() ?? []];
	}, {
		...ngDevMode ? { debugName: "rawAsyncErrors" } : {},
		equal: shallowArrayEquals
	});
	asyncErrors = computed(() => {
		if (this.shouldSkipValidation()) return [];
		return this.rawAsyncErrors().filter((err) => err === "pending" || err.fieldTree === this.node.fieldTree);
	}, {
		...ngDevMode ? { debugName: "asyncErrors" } : {},
		equal: shallowArrayEquals
	});
	parseErrors = computed(() => this.node.formFieldBindings().flatMap((field) => field.parseErrors()), {
		...ngDevMode ? { debugName: "parseErrors" } : {},
		equal: shallowArrayEquals
	});
	errors = computed(() => [
		...this.parseErrors(),
		...this.syncErrors(),
		...this.asyncErrors().filter((err) => err !== "pending")
	], {
		...ngDevMode ? { debugName: "errors" } : {},
		equal: shallowArrayEquals
	});
	errorSummary = computed(() => {
		const errors = this.node.structure.reduceChildren(this.errors(), (child, result) => [...result, ...child.errorSummary()]);
		untracked(() => errors.sort(compareErrorPosition));
		return errors;
	}, {
		...ngDevMode ? { debugName: "errorSummary" } : {},
		equal: shallowArrayEquals
	});
	pending = computed(() => this.node.structure.reduceChildren(this.asyncErrors().includes("pending"), (child, value) => value || child.validationState.pending()), ...ngDevMode ? [{ debugName: "pending" }] : []);
	status = computed(() => {
		if (this.shouldSkipValidation()) return "valid";
		let ownStatus = calculateValidationSelfStatus(this);
		return this.node.structure.reduceChildren(ownStatus, (child, value) => {
			if (value === "invalid" || child.validationState.status() === "invalid") return "invalid";
			else if (value === "unknown" || child.validationState.status() === "unknown") return "unknown";
			return "valid";
		}, (v) => v === "invalid");
	}, ...ngDevMode ? [{ debugName: "status" }] : []);
	valid = computed(() => this.status() === "valid", ...ngDevMode ? [{ debugName: "valid" }] : []);
	invalid = computed(() => this.status() === "invalid", ...ngDevMode ? [{ debugName: "invalid" }] : []);
	shouldSkipValidation = computed(() => this.node.hidden() || this.node.disabled() || this.node.readonly() || this.node.structure.isOrphaned(), ...ngDevMode ? [{ debugName: "shouldSkipValidation" }] : []);
};
function normalizeErrors$1(error) {
	if (error === void 0) return [];
	if (isArray(error)) return error;
	return [error];
}
function addDefaultField(errors, fieldTree) {
	if (isArray(errors)) for (const error of errors) error.fieldTree ??= fieldTree;
	else if (errors) errors.fieldTree ??= fieldTree;
	return errors;
}
function getFirstBoundElement(error) {
	if (error.formField) return error.formField.element;
	return error.fieldTree().formFieldBindings().reduce((el, binding) => {
		if (!el || !binding.element) return el ?? binding.element;
		return el.compareDocumentPosition(binding.element) & Node.DOCUMENT_POSITION_PRECEDING ? binding.element : el;
	}, void 0);
}
function compareErrorPosition(a, b) {
	const aEl = getFirstBoundElement(a);
	const bEl = getFirstBoundElement(b);
	if (aEl === bEl) return 0;
	if (aEl === void 0 || bEl === void 0) return aEl === void 0 ? 1 : -1;
	return aEl.compareDocumentPosition(bEl) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1;
}
var DEBOUNCER = createMetadataKey();
var FieldNodeContext = class {
	node;
	cache = /* @__PURE__ */ new WeakMap();
	constructor(node) {
		this.node = node;
		this.fieldTreeOf = this.fieldTreeOf.bind(this);
		this.stateOf = this.stateOf.bind(this);
	}
	resolve(target) {
		if (!this.cache.has(target)) {
			const resolver = computed(() => {
				const targetPathNode = FieldPathNode.unwrapFieldPath(target);
				let field = this.node;
				let stepsRemaining = getBoundPathDepth();
				while (stepsRemaining > 0 || !field.structure.logic.hasLogic(targetPathNode.root.builder)) {
					stepsRemaining--;
					field = field.structure.parent;
					if (field === void 0) throw new RuntimeError(1900, ngDevMode && "Path is not part of this field tree.");
				}
				for (let key of targetPathNode.keys) {
					field = field.structure.getChild(key);
					if (field === void 0) throw new RuntimeError(1901, ngDevMode && `Cannot resolve path .${targetPathNode.keys.join(".")} relative to field ${["<root>", ...this.node.structure.pathKeys()].join(".")}.`);
				}
				return field.fieldTree;
			}, ...ngDevMode ? [{ debugName: "resolver" }] : []);
			this.cache.set(target, resolver);
		}
		return this.cache.get(target)();
	}
	get fieldTree() {
		return this.node.fieldProxy;
	}
	get state() {
		return this.node;
	}
	get value() {
		return this.node.structure.value;
	}
	get key() {
		return this.node.structure.keyInParent;
	}
	get pathKeys() {
		return this.node.structure.pathKeys;
	}
	index = computed(() => {
		const key = this.key();
		if (!isArray(untracked(this.node.structure.parent.value))) throw new RuntimeError(1906, ngDevMode && "Cannot access index, parent field is not an array.");
		return Number(key);
	}, ...ngDevMode ? [{ debugName: "index" }] : []);
	fieldTreeOf(p) {
		return this.resolve(p);
	}
	stateOf(p) {
		return this.resolve(p)();
	}
	valueOf = (p) => {
		const result = this.resolve(p)().value();
		if (isAbstractControl(result)) throw new RuntimeError(1907, ngDevMode && `Tried to read an 'AbstractControl' value from a 'form()'. Did you mean to use 'compatForm()' instead?`);
		return result;
	};
};
var FieldMetadataState = class {
	node;
	metadata = /* @__PURE__ */ new Map();
	constructor(node) {
		this.node = node;
	}
	runMetadataCreateLifecycle() {
		if (!this.node.logicNode.logic.hasMetadataKeys()) return;
		const wasInParams = isInParamsFunction();
		if (wasInParams) setInParamsFunction(false);
		try {
			untracked(() => {
				for (const key of this.node.logicNode.logic.getMetadataKeys()) if (key.create) runInInjectionContext(this.node.structure.injector, () => {
					const logic = this.node.logicNode.logic.getMetadata(key);
					const result = key.create(this.node, computed(() => logic.compute(this.node.context)));
					this.metadata.set(key, result);
				});
			});
		} finally {
			if (wasInParams) setInParamsFunction(true);
		}
	}
	get(key) {
		if (this.has(key)) {
			if (!this.metadata.has(key)) {
				if (key.create) throw new RuntimeError(1912, ngDevMode && "Managed metadata cannot be created lazily");
				const logic = this.node.logicNode.logic.getMetadata(key);
				this.metadata.set(key, computed(() => logic.compute(this.node.context)));
			}
		}
		return this.metadata.get(key);
	}
	has(key) {
		return this.node.logicNode.logic.hasMetadata(key);
	}
};
var FIELD_PROXY_HANDLER = {
	get(getTgt, property, receiver) {
		if (property === FIELD_TREE) return true;
		const tgt = getTgt();
		const child = tgt.structure.getChild(property);
		if (child !== void 0) return child.fieldTree;
		const value = untracked(tgt.value);
		if (isArray(value)) {
			if (property === "length") return tgt.value().length;
			if (property === Symbol.iterator) return () => {
				tgt.value();
				return Array.prototype[Symbol.iterator].apply(tgt.fieldTree);
			};
		}
		if (isObject(value)) {
			if (property === Symbol.iterator) return function* () {
				for (const key in receiver) yield [key, receiver[key]];
			};
		}
	},
	getOwnPropertyDescriptor(getTgt, prop) {
		const value = untracked(getTgt().value);
		const desc = Reflect.getOwnPropertyDescriptor(value, prop);
		if (desc && !desc.configurable) desc.configurable = true;
		return desc;
	},
	ownKeys(getTgt) {
		const value = untracked(getTgt().value);
		return typeof value === "object" && value !== null ? Reflect.ownKeys(value) : [];
	}
};
function deepSignal(source, prop) {
	const read = computed(() => source()[prop()]);
	read[SIGNAL] = source[SIGNAL];
	read.set = (value) => {
		if (Object.is(untracked(read), value)) return;
		source.update((current) => valueForWrite(current, value, prop()));
	};
	read.update = (fn) => {
		read.set(fn(untracked(read)));
	};
	read.asReadonly = () => read;
	return read;
}
function valueForWrite(sourceValue, newPropValue, prop) {
	if (isArray(sourceValue)) {
		const newValue = [...sourceValue];
		newValue[prop] = newPropValue;
		return newValue;
	} else return {
		...sourceValue,
		[prop]: newPropValue
	};
}
var ORPHAN_TOKEN = Symbol(typeof ngDevMode !== "undefined" && ngDevMode ? "ORPHAN_TOKEN" : "");
var FALSE_SIGNAL = computed(() => false, ...ngDevMode ? [{ debugName: "FALSE_SIGNAL" }] : []);
var FieldNodeStructure = class {
	logic;
	node;
	createChildNode;
	identitySymbol = Symbol();
	_injector = void 0;
	_anyChildHasLogic;
	get injector() {
		this._injector ??= Injector.create({
			providers: [],
			parent: this.fieldManager.injector
		});
		return this._injector;
	}
	constructor(logic, node, createChildNode) {
		this.logic = logic;
		this.node = node;
		this.createChildNode = createChildNode;
	}
	children() {
		this.ensureChildrenMap();
		const map = this.childrenMap();
		if (map === void 0) return [];
		return Array.from(map.byPropertyKey.values()).map((child) => untracked(child.reader));
	}
	materializedChildren() {
		const map = this.childrenMap();
		if (map === void 0) return [];
		return Array.from(map.byPropertyKey.values()).map((child) => child.node);
	}
	_areChildrenMaterialized() {
		return untracked(this.childrenMap) !== void 0;
	}
	ensureChildrenMap() {
		if (this._areChildrenMaterialized()) return;
		untracked(() => {
			this.childrenMap.update((current) => this.computeChildrenMap(this.value(), current, true));
		});
	}
	getChild(key) {
		this.ensureChildrenMap();
		const strKey = key.toString();
		let reader = untracked(this.childrenMap)?.byPropertyKey.get(strKey)?.reader;
		if (!reader) reader = this.createReader(strKey);
		return reader();
	}
	reduceChildren(initialValue, fn, shortCircuit) {
		const map = this.childrenMap();
		if (!map) return initialValue;
		let value = initialValue;
		for (const child of map.byPropertyKey.values()) {
			if (shortCircuit?.(value)) break;
			value = fn(untracked(child.reader), value);
		}
		return value;
	}
	destroy() {
		this._injector?.destroy();
	}
	createKeyOrOrphanSignals(kind, identityInParent, initialKeyInParent) {
		if (kind === "root") return {
			keyInParent: ROOT_KEY_IN_PARENT,
			isOrphaned: FALSE_SIGNAL
		};
		const parent = this.parent;
		let lastKnownKey = initialKeyInParent;
		const keyOrOrphan = computed(() => {
			if (parent.structure.isOrphaned()) return ORPHAN_TOKEN;
			const map = parent.structure.childrenMap();
			if (!map) return ORPHAN_TOKEN;
			const lastKnownChild = map.byPropertyKey.get(lastKnownKey);
			if (lastKnownChild && lastKnownChild.node === this.node) return lastKnownKey;
			if (identityInParent === void 0) return ORPHAN_TOKEN;
			else {
				for (const [key, child] of map.byPropertyKey) if (child.node === this.node) return lastKnownKey = key;
				return ORPHAN_TOKEN;
			}
		}, ...ngDevMode ? [{ debugName: "keyOrOrphan" }] : []);
		const isOrphaned = computed(() => keyOrOrphan() === ORPHAN_TOKEN, ...ngDevMode ? [{ debugName: "isOrphaned" }] : []);
		return {
			keyInParent: computed(() => {
				const key = keyOrOrphan();
				if (key === ORPHAN_TOKEN) {
					if (identityInParent === void 0) throw new RuntimeError(-1902, ngDevMode && `Orphan field, looking for property '${initialKeyInParent}' of ${getDebugName(parent)}`);
					else throw new RuntimeError(1904, ngDevMode && `Orphan field, can't find element in array ${getDebugName(parent)}`);
				}
				return key;
			}, ...ngDevMode ? [{ debugName: "keyInParent" }] : []),
			isOrphaned
		};
	}
	createChildrenMap() {
		return linkedSignal({
			source: this.value,
			computation: (value, previous) => this.computeChildrenMap(value, previous?.value, false)
		});
	}
	computeChildrenMap(value, prevData, forceMaterialize) {
		if (!isObject(value)) return;
		if (!forceMaterialize && prevData === void 0) {
			if (!(this._anyChildHasLogic ??= this.logic.anyChildHasLogic())) return;
		}
		prevData ??= { byPropertyKey: /* @__PURE__ */ new Map() };
		let materializedChildren;
		const parentIsArray = isArray(value);
		if (prevData !== void 0) {
			if (parentIsArray) materializedChildren = maybeRemoveStaleArrayFields(prevData, value, this.identitySymbol);
			else materializedChildren = maybeRemoveStaleObjectFields(prevData, value);
		}
		for (const key of Object.keys(value)) {
			let trackingKey = void 0;
			const childValue = value[key];
			if (childValue === void 0) {
				if (prevData.byPropertyKey.has(key)) {
					materializedChildren ??= { ...prevData };
					materializedChildren.byPropertyKey.delete(key);
				}
				continue;
			}
			if (parentIsArray && isObject(childValue) && !isArray(childValue)) trackingKey = childValue[this.identitySymbol] ??= Symbol(ngDevMode ? `id:${globalId++}` : "");
			let childNode;
			if (trackingKey) {
				if (!prevData.byTrackingKey?.has(trackingKey)) {
					materializedChildren ??= { ...prevData };
					materializedChildren.byTrackingKey ??= /* @__PURE__ */ new Map();
					materializedChildren.byTrackingKey.set(trackingKey, this.createChildNode(key, trackingKey, parentIsArray));
				}
				childNode = (materializedChildren ?? prevData).byTrackingKey.get(trackingKey);
			}
			const child = prevData.byPropertyKey.get(key);
			if (child === void 0) {
				materializedChildren ??= { ...prevData };
				materializedChildren.byPropertyKey.set(key, {
					reader: this.createReader(key),
					node: childNode ?? this.createChildNode(key, trackingKey, parentIsArray)
				});
			} else if (childNode && childNode !== child.node) {
				materializedChildren ??= { ...prevData };
				child.node = childNode;
			}
		}
		return materializedChildren ?? prevData;
	}
	createReader(key) {
		return computed(() => this.childrenMap()?.byPropertyKey.get(key)?.node);
	}
};
var RootFieldNodeStructure = class extends FieldNodeStructure {
	fieldManager;
	value;
	get parent() {}
	get root() {
		return this.node;
	}
	get pathKeys() {
		return ROOT_PATH_KEYS;
	}
	get keyInParent() {
		return ROOT_KEY_IN_PARENT;
	}
	isOrphaned = FALSE_SIGNAL;
	childrenMap;
	constructor(node, logic, fieldManager, value, createChildNode) {
		super(logic, node, createChildNode);
		this.fieldManager = fieldManager;
		this.value = value;
		this.childrenMap = this.createChildrenMap();
	}
};
var ChildFieldNodeStructure = class extends FieldNodeStructure {
	logic;
	parent;
	root;
	pathKeys;
	keyInParent;
	value;
	childrenMap;
	isOrphaned;
	get fieldManager() {
		return this.root.structure.fieldManager;
	}
	constructor(node, logic, parent, identityInParent, initialKeyInParent, createChildNode) {
		super(logic, node, createChildNode);
		this.logic = logic;
		this.parent = parent;
		this.root = this.parent.structure.root;
		const signals = this.createKeyOrOrphanSignals("child", identityInParent, initialKeyInParent);
		this.isOrphaned = signals.isOrphaned;
		this.keyInParent = signals.keyInParent;
		this.pathKeys = computed(() => [...parent.structure.pathKeys(), this.keyInParent()], ...ngDevMode ? [{ debugName: "pathKeys" }] : []);
		this.value = deepSignal(this.parent.structure.value, this.keyInParent);
		this.childrenMap = this.createChildrenMap();
		this.fieldManager.structures.add(this);
	}
};
var globalId = 0;
var ROOT_PATH_KEYS = computed(() => [], ...ngDevMode ? [{ debugName: "ROOT_PATH_KEYS" }] : []);
var ROOT_KEY_IN_PARENT = computed(() => {
	throw new RuntimeError(1905, ngDevMode && "The top-level field in the form has no parent.");
}, ...ngDevMode ? [{ debugName: "ROOT_KEY_IN_PARENT" }] : []);
function getDebugName(node) {
	return `<root>.${node.structure.pathKeys().join(".")}`;
}
function maybeRemoveStaleArrayFields(prevData, value, identitySymbol) {
	let data;
	const oldKeys = new Set(prevData.byPropertyKey.keys());
	const oldTracking = prevData.byTrackingKey && new Set(prevData.byTrackingKey.keys());
	for (let i = 0; i < value.length; i++) {
		const childValue = value[i];
		oldKeys.delete(i.toString());
		if (oldTracking && isObject(childValue) && Object.hasOwn(childValue, identitySymbol)) oldTracking.delete(childValue[identitySymbol]);
	}
	if (oldKeys.size > 0) {
		data ??= { ...prevData };
		for (const key of oldKeys) data.byPropertyKey.delete(key);
	}
	if (oldTracking && oldTracking.size > 0) {
		data ??= { ...prevData };
		for (const id of oldTracking) data.byTrackingKey.delete(id);
	}
	return data;
}
function maybeRemoveStaleObjectFields(prevData, value) {
	let data;
	for (const key of prevData.byPropertyKey.keys()) if (!Object.hasOwn(value, key)) {
		data ??= { ...prevData };
		data.byPropertyKey.delete(key);
	}
	return data;
}
var FieldSubmitState = class {
	node;
	selfSubmitting = signal(false, ...ngDevMode ? [{ debugName: "selfSubmitting" }] : []);
	submissionErrors;
	constructor(node) {
		this.node = node;
		this.submissionErrors = linkedSignal({
			...ngDevMode ? { debugName: "submissionErrors" } : {},
			source: this.node.structure.value,
			computation: () => []
		});
	}
	submitting = computed(() => {
		return this.selfSubmitting() || (this.node.structure.parent?.submitting() ?? false);
	}, ...ngDevMode ? [{ debugName: "submitting" }] : []);
};
var FieldNode = class {
	structure;
	validationState;
	metadataState;
	nodeState;
	submitState;
	fieldAdapter;
	controlValue;
	_context = void 0;
	get context() {
		return this._context ??= new FieldNodeContext(this);
	}
	fieldProxy = new Proxy(() => this, FIELD_PROXY_HANDLER);
	pathNode;
	constructor(options) {
		this.pathNode = options.pathNode;
		this.fieldAdapter = options.fieldAdapter;
		this.structure = this.fieldAdapter.createStructure(this, options);
		this.validationState = this.fieldAdapter.createValidationState(this, options);
		this.nodeState = this.fieldAdapter.createNodeState(this, options);
		this.metadataState = new FieldMetadataState(this);
		this.submitState = new FieldSubmitState(this);
		this.controlValue = this.controlValueSignal();
		this.metadataState.runMetadataCreateLifecycle();
	}
	focusBoundControl(options) {
		this.getBindingForFocus()?.focus(options);
	}
	getBindingForFocus() {
		const own = this.formFieldBindings().filter((b) => b.focus !== void 0).reduce(firstInDom, void 0);
		if (own) return own;
		return this.structure.children().map((child) => child.getBindingForFocus()).reduce(firstInDom, void 0);
	}
	pendingSync = linkedSignal({
		...ngDevMode ? { debugName: "pendingSync" } : {},
		source: () => this.value(),
		computation: (_source, previous) => {
			previous?.value?.abort();
		}
	});
	get fieldTree() {
		return this.fieldProxy;
	}
	get logicNode() {
		return this.structure.logic;
	}
	get value() {
		return this.structure.value;
	}
	get keyInParent() {
		return this.structure.keyInParent;
	}
	get errors() {
		return this.validationState.errors;
	}
	get parseErrors() {
		return this.validationState.parseErrors;
	}
	get errorSummary() {
		return this.validationState.errorSummary;
	}
	get pending() {
		return this.validationState.pending;
	}
	get valid() {
		return this.validationState.valid;
	}
	get invalid() {
		return this.validationState.invalid;
	}
	get dirty() {
		return this.nodeState.dirty;
	}
	get touched() {
		return this.nodeState.touched;
	}
	get disabled() {
		return this.nodeState.disabled;
	}
	get disabledReasons() {
		return this.nodeState.disabledReasons;
	}
	get hidden() {
		return this.nodeState.hidden;
	}
	get readonly() {
		return this.nodeState.readonly;
	}
	get formFieldBindings() {
		return this.nodeState.formFieldBindings;
	}
	get submitting() {
		return this.submitState.submitting;
	}
	get name() {
		return this.nodeState.name;
	}
	get max() {
		const maxKey = this.metadata(MAX)?.();
		return maxKey ? this.metadata(maxKey) : void 0;
	}
	get maxLength() {
		return this.metadata(MAX_LENGTH);
	}
	get min() {
		const minKey = this.metadata(MIN)?.();
		return minKey ? this.metadata(minKey) : void 0;
	}
	get minLength() {
		return this.metadata(MIN_LENGTH);
	}
	get pattern() {
		return this.metadata(PATTERN) ?? EMPTY;
	}
	get required() {
		return this.metadata(REQUIRED) ?? FALSE;
	}
	metadata(key) {
		return this.metadataState.get(key);
	}
	getError(kind) {
		return this.errors().find((e) => e.kind === kind);
	}
	hasMetadata(key) {
		return this.metadataState.has(key);
	}
	markAsTouched(options) {
		if (this.structure.isOrphaned()) return;
		untracked(() => {
			this.markAsTouchedInternal(options);
		});
	}
	markAsTouchedInternal(options) {
		if (this.structure.isOrphaned()) return;
		const skipValidation = this.validationState.shouldSkipValidation();
		if (!skipValidation) this.nodeState.markAsTouched();
		this.flushSync();
		if (options?.skipDescendants) return;
		const children = skipValidation ? this.structure.materializedChildren() : this.structure.children();
		for (const child of children) child.markAsTouchedInternal();
	}
	markAsDirty() {
		this.nodeState.markAsDirty();
	}
	markAsPristine() {
		this.nodeState.markAsPristine();
	}
	markAsUntouched() {
		this.nodeState.markAsUntouched();
	}
	reset(value) {
		untracked(() => this._reset(value));
	}
	_reset(value) {
		this.pendingSync()?.abort();
		if (value !== void 0) this.value.set(value);
		this.controlValue.rawSet(this.value());
		this.nodeState.markAsUntouched();
		this.nodeState.markAsPristine();
		for (const binding of this.formFieldBindings()) binding.reset();
		for (const child of this.structure.materializedChildren()) child._reset();
	}
	reloadValidation() {
		untracked(() => this._reloadValidation());
	}
	_reloadValidation() {
		const keys = this.logicNode.logic.getMetadataKeys();
		for (const key of keys) if (key[IS_ASYNC_VALIDATION_RESOURCE]) this.metadata(key).reload?.();
		for (const child of this.structure.children()) child._reloadValidation();
	}
	controlValueSignal() {
		const controlValue = linkedSignal(this.value);
		controlValue.rawSet = controlValue.set;
		controlValue.set = (newValue) => {
			controlValue.rawSet(newValue);
			this.markAsDirty();
			this.debounceSync();
		};
		const rawUpdate = controlValue.update;
		controlValue.update = (updateFn) => {
			rawUpdate(updateFn);
			this.markAsDirty();
			this.debounceSync();
		};
		return controlValue;
	}
	sync() {
		this.value.set(this.controlValue());
	}
	flushSync() {
		const pending = this.pendingSync();
		if (pending && !pending.signal.aborted) {
			pending.abort();
			this.sync();
		}
	}
	async debounceSync() {
		const debouncer = untracked(() => {
			this.pendingSync()?.abort();
			return this.nodeState.debouncer();
		});
		if (debouncer) {
			const controller = new AbortController();
			const promise = debouncer(controller.signal);
			if (promise) {
				this.pendingSync.set(controller);
				await promise;
				if (controller.signal.aborted) return;
			}
		}
		if (this.structure.isOrphaned()) return;
		this.sync();
	}
	static newRoot(fieldManager, value, pathNode, adapter) {
		return adapter.newRoot(fieldManager, value, pathNode, adapter);
	}
	createStructure(options) {
		return options.kind === "root" ? new RootFieldNodeStructure(this, options.logic, options.fieldManager, options.value, this.newChild.bind(this)) : new ChildFieldNodeStructure(this, options.logic, options.parent, options.identityInParent, options.initialKeyInParent, this.newChild.bind(this));
	}
	newChild(key, trackingId, isArray) {
		let childPath;
		let childLogic;
		if (isArray) {
			childPath = this.pathNode.getChild(DYNAMIC);
			childLogic = this.structure.logic.getChild(DYNAMIC);
		} else {
			childPath = this.pathNode.getChild(key);
			childLogic = this.structure.logic.getChild(key);
		}
		return this.fieldAdapter.newChild({
			kind: "child",
			parent: this,
			pathNode: childPath,
			logic: childLogic,
			initialKeyInParent: key,
			identityInParent: trackingId,
			fieldAdapter: this.fieldAdapter
		});
	}
};
var EMPTY = computed(() => [], ...ngDevMode ? [{ debugName: "EMPTY" }] : []);
var FALSE = computed(() => false, ...ngDevMode ? [{ debugName: "FALSE" }] : []);
function firstInDom(a, b) {
	if (!a) return b;
	if (!b) return a;
	return a.element.compareDocumentPosition(b.element) & Node.DOCUMENT_POSITION_PRECEDING ? b : a;
}
var FieldNodeState = class {
	node;
	selfTouched = signal(false, ...ngDevMode ? [{ debugName: "selfTouched" }] : []);
	selfDirty = signal(false, ...ngDevMode ? [{ debugName: "selfDirty" }] : []);
	markAsTouched() {
		this.selfTouched.set(true);
	}
	markAsDirty() {
		this.selfDirty.set(true);
	}
	markAsPristine() {
		this.selfDirty.set(false);
	}
	markAsUntouched() {
		this.selfTouched.set(false);
	}
	formFieldBindings = signal([], ...ngDevMode ? [{ debugName: "formFieldBindings" }] : []);
	constructor(node) {
		this.node = node;
	}
	dirty = computed(() => {
		const selfDirtyValue = this.selfDirty() && !this.isNonInteractive();
		return this.node.structure.reduceChildren(selfDirtyValue, (child, value) => value || child.nodeState.dirty(), shortCircuitTrue);
	}, ...ngDevMode ? [{ debugName: "dirty" }] : []);
	touched = computed(() => {
		const selfTouchedValue = this.selfTouched() && !this.isNonInteractive();
		return this.node.structure.reduceChildren(selfTouchedValue, (child, value) => value || child.nodeState.touched(), shortCircuitTrue);
	}, ...ngDevMode ? [{ debugName: "touched" }] : []);
	disabledReasons = computed(() => [...this.node.structure.parent?.nodeState.disabledReasons() ?? [], ...this.node.logicNode.logic.disabledReasons.compute(this.node.context)], {
		...ngDevMode ? { debugName: "disabledReasons" } : {},
		equal: shallowArrayEquals
	});
	disabled = computed(() => !!this.disabledReasons().length, ...ngDevMode ? [{ debugName: "disabled" }] : []);
	readonly = computed(() => (this.node.structure.parent?.nodeState.readonly() || this.node.logicNode.logic.readonly.compute(this.node.context)) ?? false, ...ngDevMode ? [{ debugName: "readonly" }] : []);
	hidden = computed(() => (this.node.structure.parent?.nodeState.hidden() || this.node.logicNode.logic.hidden.compute(this.node.context)) ?? false, ...ngDevMode ? [{ debugName: "hidden" }] : []);
	name = computed(() => {
		const parent = this.node.structure.parent;
		if (!parent) return this.node.structure.fieldManager.rootName;
		return `${parent.name()}.${this.node.structure.keyInParent()}`;
	}, ...ngDevMode ? [{ debugName: "name" }] : []);
	debouncer = computed(() => {
		if (this.node.logicNode.logic.hasMetadata(DEBOUNCER)) {
			const debouncer = this.node.logicNode.logic.getMetadata(DEBOUNCER).compute(this.node.context);
			if (debouncer) return (signal) => debouncer(this.node.context, signal);
		}
		return this.node.structure.parent?.nodeState.debouncer?.();
	}, ...ngDevMode ? [{ debugName: "debouncer" }] : []);
	isNonInteractive = computed(() => this.hidden() || this.disabled() || this.readonly(), ...ngDevMode ? [{ debugName: "isNonInteractive" }] : []);
};
var BasicFieldAdapter = class {
	newRoot(fieldManager, value, pathNode, adapter) {
		return new FieldNode({
			kind: "root",
			fieldManager,
			value,
			pathNode,
			logic: pathNode.builder.build(),
			fieldAdapter: adapter
		});
	}
	newChild(options) {
		return new FieldNode(options);
	}
	createNodeState(node) {
		return new FieldNodeState(node);
	}
	createValidationState(node) {
		return new FieldValidationState(node);
	}
	createStructure(node, options) {
		return node.createStructure(options);
	}
};
var FormFieldManager = class {
	injector;
	rootName;
	submitOptions;
	constructor(injector, rootName, submitOptions) {
		this.injector = injector;
		this.rootName = rootName ?? `${this.injector.get(APP_ID)}.form${nextFormId++}`;
		this.submitOptions = submitOptions;
	}
	structures = /* @__PURE__ */ new Set();
	createFieldManagementEffect(root) {
		effect(() => {
			const liveStructures = /* @__PURE__ */ new Set();
			this.markStructuresLive(root, liveStructures);
			for (const structure of this.structures) if (!liveStructures.has(structure)) {
				this.structures.delete(structure);
				untracked(() => structure.destroy());
			}
		}, { injector: this.injector });
	}
	markStructuresLive(structure, liveStructures) {
		liveStructures.add(structure);
		for (const child of structure.children()) this.markStructuresLive(child.structure, liveStructures);
	}
};
var nextFormId = 0;
var REGISTER_WEBMCP_FORM = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "REGISTER_WEBMCP_FORM" : "");
function normalizeFormArgs(args) {
	const model = args[0];
	let schema;
	let options;
	if (isSchemaOrSchemaFn(args[1])) {
		schema = args[1];
		options = args[2];
	} else options = args[1] && args[2] ? {
		...args[1],
		...args[2]
	} : args[1] ?? args[2];
	return [
		model,
		schema,
		options
	];
}
function form(...args) {
	const [model, schema, options] = normalizeFormArgs(args);
	const injector = options?.injector ?? inject(Injector);
	const pathNode = runInInjectionContext(injector, () => SchemaImpl.rootCompile(schema));
	const fieldManager = new FormFieldManager(injector, options?.name, options?.submission);
	const adapter = options?.adapter ?? new BasicFieldAdapter();
	const fieldRoot = FieldNode.newRoot(fieldManager, model, pathNode, adapter);
	fieldManager.createFieldManagementEffect(fieldRoot.structure);
	const { experimentalWebMcpTool } = options ?? {};
	if (experimentalWebMcpTool) {
		const registerWebMcpForm = runInInjectionContext(injector, () => inject(REGISTER_WEBMCP_FORM, { optional: true }));
		if (registerWebMcpForm) runInInjectionContext(injector, () => registerWebMcpForm(fieldRoot.fieldTree, {
			name: experimentalWebMcpTool.name,
			description: experimentalWebMcpTool.description,
			annotations: experimentalWebMcpTool.annotations
		}));
		else if (typeof ngDevMode !== "undefined" && ngDevMode) throw new Error(`Cannot register form "${experimentalWebMcpTool.name}" as a WebMCP tool. Make sure to use \`provideExperimentalWebMcpForms()\` in your application bootstrap configuration.`);
	}
	return fieldRoot.fieldTree;
}
function applyEach(path, schema) {
	assertPathIsCurrent(path);
	const elementPath = FieldPathNode.unwrapFieldPath(path).getChild(DYNAMIC).fieldPathProxy;
	apply(elementPath, schema);
}
function apply(path, schema) {
	assertPathIsCurrent(path);
	FieldPathNode.unwrapFieldPath(path).mergeIn(SchemaImpl.create(schema));
}
function applyWhen(path, logic, schema) {
	assertPathIsCurrent(path);
	FieldPathNode.unwrapFieldPath(path).mergeIn(SchemaImpl.create(schema), {
		fn: logic,
		path
	});
}
function applyWhenValue(path, predicate, schema) {
	applyWhen(path, ({ value }) => predicate(value()), schema);
}
async function submit(form, options) {
	const node = untracked(form);
	if (untracked(node.submitState.submitting)) return false;
	const field = options === void 0 ? node.structure.root.fieldProxy : form;
	const detail = {
		root: node.structure.root.fieldProxy,
		submitted: form
	};
	options = typeof options === "function" ? { action: options } : options ?? node.structure.fieldManager.submitOptions;
	const action = options?.action;
	if (!action) throw new RuntimeError(1915, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot submit form with no submit action. Specify the action when creating the form, or as an additional argument to `submit()`.");
	node.markAsTouched();
	const onInvalid = options?.onInvalid;
	const shouldRun = shouldRunAction(node, options?.ignoreValidators);
	try {
		if (shouldRun) {
			node.submitState.selfSubmitting.set(true);
			const errors = await untracked(() => action?.(field, detail));
			errors && setSubmissionErrors(node, errors);
			return !errors || isArray(errors) && errors.length === 0;
		} else untracked(() => onInvalid?.(field, detail));
		return false;
	} finally {
		node.submitState.selfSubmitting.set(false);
	}
}
function schema(fn) {
	return SchemaImpl.create(fn);
}
function shouldRunAction(node, ignoreValidators) {
	switch (ignoreValidators) {
		case "all": return true;
		case "none": return untracked(node.valid);
		default: return !untracked(node.invalid);
	}
}
function setSubmissionErrors(submittedField, errors) {
	if (!isArray(errors)) errors = [errors];
	const errorsByField = /* @__PURE__ */ new Map();
	for (const error of errors) {
		const errorWithField = addDefaultField(error, submittedField.fieldTree);
		const field = errorWithField.fieldTree();
		let fieldErrors = errorsByField.get(field);
		if (!fieldErrors) {
			fieldErrors = [];
			errorsByField.set(field, fieldErrors);
		}
		fieldErrors.push(errorWithField);
	}
	for (const [field, fieldErrors] of errorsByField) field.submitState.submissionErrors.set(fieldErrors);
}
var CompatValidationError = class {
	kind = "compat";
	control;
	fieldTree;
	context;
	message;
	constructor({ context, kind, control }) {
		this.context = context;
		this.kind = kind;
		this.control = control;
	}
};
function signalErrorsToValidationErrors(errors) {
	if (errors.length === 0) return null;
	const errObj = {};
	for (const error of errors) errObj[error.kind] = error instanceof CompatValidationError ? error.context : error;
	return errObj;
}
function reactiveErrorsToSignalErrors(errors, control) {
	if (errors === null) return [];
	return Object.entries(errors).map(([kind, context]) => {
		return new CompatValidationError({
			context,
			kind,
			control
		});
	});
}
// node_modules/@angular/forms/fesm2022/signals.mjs
/**
* @license Angular v22.2.6
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
function isFieldTree(value) {
	return typeof value === "function" && value[FIELD_TREE] === true;
}
var SIGNAL_FORMS_CONFIG = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "SIGNAL_FORMS_CONFIG" : "");
function provideSignalFormsConfig(config) {
	return [{
		provide: SIGNAL_FORMS_CONFIG,
		useValue: config
	}];
}
function disabled(path, configOrLogic) {
	assertPathIsCurrent(path);
	const pathNode = FieldPathNode.unwrapFieldPath(path);
	let logic;
	if (typeof configOrLogic === "function" || typeof configOrLogic === "string") logic = configOrLogic;
	else logic = configOrLogic?.when;
	pathNode.builder.addDisabledReasonRule((ctx) => {
		let result = true;
		if (typeof logic === "string") result = logic;
		else if (logic) result = logic(ctx);
		if (typeof result === "string") return {
			fieldTree: ctx.fieldTree,
			message: result
		};
		return result ? { fieldTree: ctx.fieldTree } : void 0;
	});
}
function hidden(path, configOrLogic) {
	assertPathIsCurrent(path);
	const pathNode = FieldPathNode.unwrapFieldPath(path);
	const logic = typeof configOrLogic === "function" ? configOrLogic : configOrLogic?.when ?? (() => true);
	pathNode.builder.addHiddenRule(logic);
}
function readonly(path, configOrLogic) {
	assertPathIsCurrent(path);
	const pathNode = FieldPathNode.unwrapFieldPath(path);
	const logic = typeof configOrLogic === "function" ? configOrLogic : configOrLogic?.when ?? (() => true);
	pathNode.builder.addReadonlyRule(logic);
}
function getLengthOrSize(value) {
	const v = value;
	return typeof v.length === "number" ? v.length : v.size;
}
function getOption(opt, ctx) {
	return opt instanceof Function ? opt(ctx) : opt;
}
function isEmpty(value) {
	if (typeof value === "number") return isNaN(value);
	return value === "" || value === false || value == null;
}
function normalizeErrors(error) {
	if (error === void 0) return [];
	if (Array.isArray(error)) return error;
	return [error];
}
function validate(path, logic) {
	assertPathIsCurrent(path);
	FieldPathNode.unwrapFieldPath(path).builder.addSyncErrorRule((ctx) => {
		return addDefaultField(logic(ctx), ctx.fieldTree);
	});
}
function requiredError(options) {
	return new RequiredValidationError(options);
}
function minError(min, options) {
	return new MinValidationError(min, options);
}
function minDateError(minDate, options) {
	return new MinDateValidationError(minDate, options);
}
function maxError(max, options) {
	return new MaxValidationError(max, options);
}
function maxDateError(maxDate, options) {
	return new MaxDateValidationError(maxDate, options);
}
function minLengthError(minLength, options) {
	return new MinLengthValidationError(minLength, options);
}
function maxLengthError(maxLength, options) {
	return new MaxLengthValidationError(maxLength, options);
}
function patternError(pattern, options) {
	return new PatternValidationError(pattern, options);
}
function emailError(options) {
	return new EmailValidationError(options);
}
var BaseNgValidationError = class {
	__brand = void 0;
	kind = "";
	fieldTree;
	message;
	constructor(options) {
		if (options) Object.assign(this, options);
	}
};
var RequiredValidationError = class extends BaseNgValidationError {
	kind = "required";
};
var MinValidationError = class extends BaseNgValidationError {
	min;
	kind = "min";
	constructor(min, options) {
		super(options);
		this.min = min;
	}
};
var MinDateValidationError = class extends BaseNgValidationError {
	minDate;
	kind = "minDate";
	constructor(minDate, options) {
		super(options);
		this.minDate = minDate;
	}
};
var MaxValidationError = class extends BaseNgValidationError {
	max;
	kind = "max";
	constructor(max, options) {
		super(options);
		this.max = max;
	}
};
var MaxDateValidationError = class extends BaseNgValidationError {
	maxDate;
	kind = "maxDate";
	constructor(maxDate, options) {
		super(options);
		this.maxDate = maxDate;
	}
};
var MinLengthValidationError = class extends BaseNgValidationError {
	minLength;
	kind = "minLength";
	constructor(minLength, options) {
		super(options);
		this.minLength = minLength;
	}
};
var MaxLengthValidationError = class extends BaseNgValidationError {
	maxLength;
	kind = "maxLength";
	constructor(maxLength, options) {
		super(options);
		this.maxLength = maxLength;
	}
};
var PatternValidationError = class extends BaseNgValidationError {
	pattern;
	kind = "pattern";
	constructor(pattern, options) {
		super(options);
		this.pattern = pattern;
	}
};
var EmailValidationError = class extends BaseNgValidationError {
	kind = "email";
};
var NativeInputParseError = class extends BaseNgValidationError {
	kind = "parse";
};
var NgValidationError = BaseNgValidationError;
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function email(path, config) {
	validate(path, (ctx) => {
		if (config?.when && !config.when(ctx)) return;
		if (isEmpty(ctx.value())) return;
		if (!EMAIL_REGEXP.test(ctx.value())) {
			if (config?.error) return getOption(config.error, ctx);
			else return emailError({ message: getOption(config?.message, ctx) });
		}
	});
}
function max(path, maxValue, config) {
	const MAX_MEMO = createMetadataKey();
	metadata(path, MAX_MEMO, (ctx) => {
		if (config?.when && !config.when(ctx)) return;
		return typeof maxValue === "function" ? maxValue(ctx) : maxValue;
	});
	metadata(path, MAX_NUMBER, ({ state }) => state.metadata(MAX_MEMO)());
	metadata(path, MAX, () => MAX_NUMBER);
	validate(path, (ctx) => {
		const value = ctx.value();
		if (value === null || Number.isNaN(value)) return;
		const max = ctx.state.metadata(MAX_MEMO)();
		if (max === void 0 || Number.isNaN(max)) return;
		if (value > max) {
			if (config?.error) return getOption(config.error, ctx);
			else return maxError(max, { message: getOption(config?.message, ctx) });
		}
	});
}
function maxDate(path, maxDateValue, config) {
	const MAX_MEMO = createMetadataKey();
	metadata(path, MAX_MEMO, (ctx) => {
		if (config?.when && !config.when(ctx)) return;
		return typeof maxDateValue === "function" ? maxDateValue(ctx) : maxDateValue;
	});
	metadata(path, MAX_DATE, ({ state }) => state.metadata(MAX_MEMO)());
	metadata(path, MAX, () => MAX_DATE);
	validate(path, (ctx) => {
		const value = ctx.value();
		if (value === null || Number.isNaN(value.getTime())) return;
		const max = ctx.state.metadata(MAX_MEMO)();
		if (max === void 0 || Number.isNaN(max.getTime())) return;
		if (value > max) {
			if (config?.error) return getOption(config.error, ctx);
			else return maxDateError(max, { message: getOption(config?.message, ctx) });
		}
	});
}
function maxLength(path, maxLength, config) {
	const MAX_LENGTH_MEMO = metadata(path, createMetadataKey(), (ctx) => {
		if (config?.when && !config.when(ctx)) return;
		return typeof maxLength === "number" ? maxLength : maxLength(ctx);
	});
	metadata(path, MAX_LENGTH, ({ state }) => state.metadata(MAX_LENGTH_MEMO)());
	validate(path, (ctx) => {
		if (isEmpty(ctx.value())) return;
		const maxLength = ctx.state.metadata(MAX_LENGTH_MEMO)();
		if (maxLength === void 0) return;
		if (getLengthOrSize(ctx.value()) > maxLength) {
			if (config?.error) return getOption(config.error, ctx);
			else return maxLengthError(maxLength, { message: getOption(config?.message, ctx) });
		}
	});
}
function min(path, minValue, config) {
	const MIN_MEMO = createMetadataKey();
	metadata(path, MIN_MEMO, (ctx) => {
		if (config?.when && !config.when(ctx)) return;
		return typeof minValue === "function" ? minValue(ctx) : minValue;
	});
	metadata(path, MIN_NUMBER, ({ state }) => state.metadata(MIN_MEMO)());
	metadata(path, MIN, () => MIN_NUMBER);
	validate(path, (ctx) => {
		const value = ctx.value();
		if (value === null || Number.isNaN(value)) return;
		const min = ctx.state.metadata(MIN_MEMO)();
		if (min === void 0 || Number.isNaN(min)) return;
		if (value < min) {
			if (config?.error) return getOption(config.error, ctx);
			else return minError(min, { message: getOption(config?.message, ctx) });
		}
	});
}
function minDate(path, minDateValue, config) {
	const MIN_MEMO = createMetadataKey();
	metadata(path, MIN_MEMO, (ctx) => {
		if (config?.when && !config.when(ctx)) return;
		return typeof minDateValue === "function" ? minDateValue(ctx) : minDateValue;
	});
	metadata(path, MIN_DATE, ({ state }) => state.metadata(MIN_MEMO)());
	metadata(path, MIN, () => MIN_DATE);
	validate(path, (ctx) => {
		const value = ctx.value();
		if (value === null || Number.isNaN(value.getTime())) return;
		const min = ctx.state.metadata(MIN_MEMO)();
		if (min === void 0 || Number.isNaN(min.getTime())) return;
		if (value < min) {
			if (config?.error) return getOption(config.error, ctx);
			else return minDateError(min, { message: getOption(config?.message, ctx) });
		}
	});
}
function minLength(path, minLength, config) {
	const MIN_LENGTH_MEMO = metadata(path, createMetadataKey(), (ctx) => {
		if (config?.when && !config.when(ctx)) return;
		return typeof minLength === "number" ? minLength : minLength(ctx);
	});
	metadata(path, MIN_LENGTH, ({ state }) => state.metadata(MIN_LENGTH_MEMO)());
	validate(path, (ctx) => {
		if (isEmpty(ctx.value())) return;
		const minLength = ctx.state.metadata(MIN_LENGTH_MEMO)();
		if (minLength === void 0) return;
		if (getLengthOrSize(ctx.value()) < minLength) {
			if (config?.error) return getOption(config.error, ctx);
			else return minLengthError(minLength, { message: getOption(config?.message, ctx) });
		}
	});
}
function pattern(path, pattern, config) {
	const PATTERN_MEMO = metadata(path, createMetadataKey(), (ctx) => {
		if (config?.when && !config.when(ctx)) return;
		return pattern instanceof RegExp ? pattern : pattern(ctx);
	});
	metadata(path, PATTERN, ({ state }) => state.metadata(PATTERN_MEMO)());
	validate(path, (ctx) => {
		if (isEmpty(ctx.value())) return;
		const pattern = ctx.state.metadata(PATTERN_MEMO)();
		if (pattern === void 0) return;
		if (!pattern.test(ctx.value())) {
			if (config?.error) return getOption(config.error, ctx);
			else return patternError(pattern, { message: getOption(config?.message, ctx) });
		}
	});
}
function required(path, config) {
	const REQUIRED_MEMO = metadata(path, createMetadataKey(), (ctx) => config?.when ? config.when(ctx) : true);
	metadata(path, REQUIRED, ({ state }) => state.metadata(REQUIRED_MEMO)());
	validate(path, (ctx) => {
		if (ctx.state.metadata(REQUIRED_MEMO)() && isEmpty(ctx.value())) {
			if (config?.error) return getOption(config.error, ctx);
			else return requiredError({ message: getOption(config?.message, ctx) });
		}
	});
}
function validateAsync(path, opts) {
	assertPathIsCurrent(path);
	const pathNode = FieldPathNode.unwrapFieldPath(path);
	const RESOURCE = createManagedMetadataKey((_state, params) => {
		if (opts.debounce !== void 0) {
			const debouncedResource = debounced(() => params(), opts.debounce);
			const wrappedParams = computed(() => chain(debouncedResource), ...ngDevMode ? [{ debugName: "wrappedParams" }] : []);
			return opts.factory(wrappedParams);
		}
		return opts.factory(params);
	});
	RESOURCE[IS_ASYNC_VALIDATION_RESOURCE] = true;
	metadata(path, RESOURCE, (ctx) => {
		const validationState = ctx.stateOf(path).validationState;
		if (validationState.shouldSkipValidation() || !validationState.syncValid()) return;
		if (opts.when && !opts.when(ctx)) return;
		return opts.params(ctx);
	});
	pathNode.builder.addAsyncErrorRule((ctx) => {
		const res = ctx.state.metadata(RESOURCE);
		let errors;
		switch (res.status()) {
			case "idle": return;
			case "loading":
			case "reloading": return "pending";
			case "resolved":
			case "local":
				if (!res.hasValue()) return;
				errors = opts.onSuccess(res.value(), ctx);
				return addDefaultField(errors, ctx.fieldTree);
			case "error":
				errors = opts.onError(res.error(), ctx);
				return addDefaultField(errors, ctx.fieldTree);
		}
	});
}
function validateTree(path, logic) {
	assertPathIsCurrent(path);
	FieldPathNode.unwrapFieldPath(path).builder.addSyncTreeErrorRule((ctx) => addDefaultField(logic(ctx), ctx.fieldTree));
}
function validateStandardSchema(path, schema) {
	const VALIDATOR_MEMO = metadata(path, createMetadataKey(), (ctx) => {
		const resolvedSchema = typeof schema === "function" ? schema(ctx) : schema;
		return resolvedSchema ? resolvedSchema["~standard"].validate(ctx.value()) : void 0;
	});
	validateTree(path, ({ state, fieldTreeOf }) => {
		const result = state.metadata(VALIDATOR_MEMO)();
		if (!result || isPromise(result)) return [];
		return result?.issues?.map((issue) => standardIssueToFormTreeError(fieldTreeOf(path), issue)) ?? [];
	});
	validateAsync(path, {
		params: ({ state }) => {
			const result = state.metadata(VALIDATOR_MEMO)();
			return result && isPromise(result) ? result : void 0;
		},
		factory: (params) => {
			return resource({
				params,
				loader: async ({ params }) => (await params)?.issues ?? []
			});
		},
		onSuccess: (issues, { fieldTreeOf }) => {
			return issues.map((issue) => standardIssueToFormTreeError(fieldTreeOf(path), issue));
		},
		onError: () => {}
	});
}
function standardSchemaError(issue, options) {
	return new StandardSchemaValidationError(issue, options);
}
function standardIssueToFormTreeError(fieldTree, issue) {
	let target = fieldTree;
	for (const pathPart of issue.path ?? []) {
		const pathKey = typeof pathPart === "object" ? pathPart.key : pathPart;
		target = target[pathKey];
	}
	return addDefaultField(standardSchemaError(issue, { message: issue.message }), target);
}
var StandardSchemaValidationError = class extends BaseNgValidationError {
	issue;
	kind = "standardSchema";
	constructor(issue, options) {
		super(options);
		this.issue = issue;
	}
};
function validateHttp(path, opts) {
	validateAsync(path, {
		params: opts.request,
		debounce: opts.debounce,
		factory: (request) => httpResource(request, opts.options),
		onSuccess: opts.onSuccess,
		onError: opts.onError,
		when: opts.when
	});
}
function debounce(path, config) {
	assertPathIsCurrent(path);
	const pathNode = FieldPathNode.unwrapFieldPath(path);
	const debouncer = normalizeDebouncer(config);
	pathNode.builder.addMetadataRule(DEBOUNCER, () => debouncer);
}
function normalizeDebouncer(debouncer) {
	if (typeof debouncer === "function") return debouncer;
	if (debouncer === "blur") return debounceUntilBlur();
	if (debouncer > 0) return debounceForDuration(debouncer);
	return immediate;
}
function debounceForDuration(durationInMilliseconds) {
	return (_context, abortSignal) => {
		return new Promise((resolve) => {
			let timeoutId;
			const onAbort = () => {
				clearTimeout(timeoutId);
				resolve();
			};
			timeoutId = setTimeout(() => {
				abortSignal.removeEventListener("abort", onAbort);
				resolve();
			}, durationInMilliseconds);
			abortSignal.addEventListener("abort", onAbort, { once: true });
		});
	};
}
function debounceUntilBlur() {
	return (_context, abortSignal) => {
		return new Promise((resolve) => {
			abortSignal.addEventListener("abort", () => resolve(), { once: true });
		});
	};
}
function immediate() {}
function createParser(getValue, setValue, parse) {
	const errors = linkedSignal({
		...ngDevMode ? { debugName: "errors" } : {},
		source: getValue,
		computation: () => [],
		equal: shallowArrayEquals
	});
	const setRawValue = (rawValue) => {
		const result = parse(rawValue);
		errors.set(normalizeErrors(result.error));
		if (result.value !== void 0) setValue(result.value);
		errors.set(normalizeErrors(result.error));
	};
	const reset = () => {
		errors.set([]);
	};
	return {
		errors: errors.asReadonly(),
		setRawValue,
		reset
	};
}
function transformedValue(value, options) {
	const { parse, format } = options;
	const parser = createParser(value, value.set, parse);
	const rawValue = linkedSignal(() => format(value()), ...ngDevMode ? [{ debugName: "rawValue" }] : []);
	const result = rawValue;
	result.parseErrors = parser.errors;
	const originalSet = result.set.bind(result);
	const integration = inject(ɵFORM_CONTROL_INTEGRATION, {
		self: true,
		optional: true
	});
	if (integration) {
		integration.setParseErrors(parser.errors);
		integration.onReset = (resetValue) => {
			parser.reset();
			const modelValue = resetValue !== void 0 ? resetValue : value();
			originalSet(format(modelValue));
		};
	}
	result.set = (newRawValue) => {
		parser.setRawValue(newRawValue);
		originalSet(newRawValue);
	};
	result.update = (updateFn) => {
		result.set(updateFn(rawValue()));
	};
	return result;
}
var InteropNgControl = class {
	field;
	constructor(field) {
		this.field = field;
	}
	control = this;
	get value() {
		return this.field().controlValue();
	}
	get valid() {
		return this.field().valid();
	}
	get invalid() {
		return this.field().invalid();
	}
	get pending() {
		return this.field().pending();
	}
	get disabled() {
		return this.field().disabled();
	}
	get enabled() {
		return !this.field().disabled();
	}
	get errors() {
		return signalErrorsToValidationErrors(this.field().errors());
	}
	get pristine() {
		return !this.field().dirty();
	}
	get dirty() {
		return this.field().dirty();
	}
	get touched() {
		return this.field().touched();
	}
	get untouched() {
		return !this.field().touched();
	}
	get status() {
		if (this.field().disabled()) return "DISABLED";
		if (this.field().valid()) return "VALID";
		if (this.field().invalid()) return "INVALID";
		if (this.field().pending()) return "PENDING";
		throw new RuntimeError(1910, ngDevMode && "Unknown form control status");
	}
	valueAccessor = null;
	hasValidator(validator) {
		if (validator === Validators.required) return this.field().required();
		return false;
	}
	updateValueAndValidity() {}
};
var FIELD_STATE_KEY_TO_CONTROL_BINDING = {
	disabled: "disabled",
	disabledReasons: "disabledReasons",
	dirty: "dirty",
	errors: "errors",
	hidden: "hidden",
	invalid: "invalid",
	max: "max",
	maxLength: "maxLength",
	min: "min",
	minLength: "minLength",
	name: "name",
	pattern: "pattern",
	pending: "pending",
	readonly: "readonly",
	required: "required",
	touched: "touched"
};
var CONTROL_BINDING_TO_FIELD_STATE_KEY = /* @__PURE__ */ (() => {
	const map = {};
	for (const key of Object.keys(FIELD_STATE_KEY_TO_CONTROL_BINDING)) map[FIELD_STATE_KEY_TO_CONTROL_BINDING[key]] = key;
	return map;
})();
function readFieldStateBindingValue(fieldState, key) {
	return fieldState[CONTROL_BINDING_TO_FIELD_STATE_KEY[key]]?.();
}
var CONTROL_BINDING_NAMES = /* @__PURE__ */ (() => Object.values(FIELD_STATE_KEY_TO_CONTROL_BINDING))();
function createBindings() {
	return {};
}
function bindingUpdated(bindings, key, value) {
	if (!Object.is(bindings[key], value)) {
		bindings[key] = value;
		return true;
	}
	return false;
}
function getNativeControlValue(element, currentValue, validityMonitor) {
	let modelValue;
	if (isInput(element) && validityMonitor.isBadInput(element)) return { error: new NativeInputParseError() };
	switch (element.type) {
		case "checkbox": return { value: element.checked };
		case "number":
		case "range":
		case "datetime-local":
			modelValue = untracked(currentValue);
			if (typeof modelValue === "number" || modelValue === null) return { value: element.value === "" ? null : element.valueAsNumber };
			break;
		case "date":
		case "month":
		case "time":
		case "week":
			modelValue = untracked(currentValue);
			if (modelValue === null || modelValue instanceof Date) return { value: element.valueAsDate };
			else if (typeof modelValue === "number") return { value: element.valueAsNumber };
	}
	if (element.tagName === "INPUT" && element.type === "text") {
		modelValue ??= untracked(currentValue);
		if (typeof modelValue === "number" || modelValue === null) {
			if (element.value === "") return { value: null };
			const parsed = Number(element.value);
			if (Number.isNaN(parsed)) return { error: new NativeInputParseError() };
			return { value: parsed };
		}
	}
	return { value: element.value };
}
function setNativeControlValue(element, value) {
	switch (element.type) {
		case "checkbox":
			element.checked = value;
			return;
		case "radio":
			element.checked = value === element.value;
			return;
		case "number":
		case "range":
		case "datetime-local":
			if (typeof value === "number") {
				setNativeNumberControlValue(element, value);
				return;
			} else if (value === null) {
				element.value = "";
				return;
			}
			break;
		case "date":
		case "month":
		case "time":
		case "week": if (value === null || value instanceof Date) {
			element.valueAsDate = value;
			return;
		} else if (typeof value === "number") {
			setNativeNumberControlValue(element, value);
			return;
		}
	}
	if (element.tagName === "INPUT" && element.type === "text") {
		if (typeof value === "number") {
			element.value = isNaN(value) ? "" : String(value);
			return;
		}
		if (value === null) {
			if (typeof ngDevMode !== "undefined" && ngDevMode) console.warn(formatRuntimeError(1921, `The text input ${element.name} received a null value. Text inputs should use empty strings to represent null values.  The input's value will be set to an empty string instead.`));
			element.value = "";
			return;
		}
	}
	element.value = value;
}
function setNativeNumberControlValue(element, value) {
	if (isNaN(value)) element.value = "";
	else element.valueAsNumber = value;
}
function isInput(element) {
	return element.tagName === "INPUT";
}
function inputRequiresValidityTracking(input) {
	return input.type === "date" || input.type === "datetime-local" || input.type === "month" || input.type === "time" || input.type === "week";
}
function formatDateForInput(date, type) {
	const year = date.getUTCFullYear();
	const month = String(date.getUTCMonth() + 1).padStart(2, "0");
	if (type === "month") return `${year}-${month}`;
	return `${year}-${month}-${String(date.getUTCDate()).padStart(2, "0")}`;
}
function formatDateForMinMax(name, value, type) {
	if (value instanceof Date && (name === "min" || name === "max") && (type === "date" || type === "month")) return formatDateForInput(value, type);
	return value;
}
function customControlCreate(host, parent) {
	host.listenToCustomControlModel((value) => parent.state().controlValue.set(value));
	host.listenToCustomControlOutput("touch", () => parent.state().markAsTouched());
	parent.registerAsBinding(host.customControl);
	const bindings = createBindings();
	return () => {
		const state = parent.state();
		const controlValue = state.controlValue();
		if (bindingUpdated(bindings, "controlValue", controlValue)) host.setCustomControlModelInput(controlValue);
		for (const name of CONTROL_BINDING_NAMES) {
			let value;
			if (name === "errors") value = parent.errors();
			else value = readFieldStateBindingValue(state, name);
			if (bindingUpdated(bindings, name, value)) {
				host.setInputOnDirectives(name, value);
				if (parent.elementAcceptsNativeProperty(name) && !host.customControlHasInput(name)) {
					const domValue = formatDateForMinMax(name, value, parent.nativeFormElement.type);
					setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, domValue);
				}
			}
		}
	};
}
function isValidatorObject(v) {
	return typeof v === "object" && v !== null;
}
function cvaControlCreate(host, parent) {
	const bindings = createBindings();
	parent.controlValueAccessor.registerOnChange((value) => {
		bindings["controlValue"] = value;
		parent.state().controlValue.set(value);
	});
	parent.controlValueAccessor.registerOnTouched(() => parent.state().markAsTouched());
	const legacyValidators = parent.injector.get(NG_VALIDATORS, null, {
		optional: true,
		self: true
	});
	if (legacyValidators) {
		let version;
		for (const v of legacyValidators) if (isValidatorObject(v) && v.registerOnValidatorChange) {
			version ??= signal(0);
			v.registerOnValidatorChange(() => {
				version.update((n) => n + 1);
			});
		}
		const validatorFns = legacyValidators.map((v) => typeof v === "function" ? v : v.validate.bind(v));
		const mergedValidator = Validators.compose(validatorFns);
		const parseErrors = computed(() => {
			version?.();
			return reactiveErrorsToSignalErrors(mergedValidator ? mergedValidator(parent.interopNgControl.control) : null, parent.interopNgControl.control);
		}, ...ngDevMode ? [{ debugName: "parseErrors" }] : []);
		parent.parseErrorsSource.set(parseErrors);
	}
	parent.registerAsBinding({ reset: () => {
		const value = parent.state().value();
		bindings["controlValue"] = value;
		untracked(() => parent.controlValueAccessor.writeValue(value));
	} });
	return () => {
		const fieldState = parent.state();
		const controlValue = fieldState.controlValue();
		if (bindingUpdated(bindings, "controlValue", controlValue)) untracked(() => parent.controlValueAccessor.writeValue(controlValue));
		for (const name of CONTROL_BINDING_NAMES) {
			const value = readFieldStateBindingValue(fieldState, name);
			if (bindingUpdated(bindings, name, value)) {
				const propertyWasSet = host.setInputOnDirectives(name, value, name === "name" ? isDefinedPredicate : void 0);
				if (name === "disabled" && parent.controlValueAccessor.setDisabledState) untracked(() => parent.controlValueAccessor.setDisabledState(value));
				else if (!propertyWasSet && parent.elementAcceptsNativeProperty(name)) setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, value);
			}
		}
	};
}
function isDefinedPredicate(value) {
	return value == null;
}
function observeSelectMutations(select, onMutation, destroyRef) {
	if (typeof MutationObserver !== "function") return;
	const observer = new MutationObserver((mutations) => {
		if (mutations.some((m) => isRelevantSelectMutation(m))) onMutation();
	});
	observer.observe(select, {
		attributes: true,
		attributeFilter: ["value"],
		characterData: true,
		childList: true,
		subtree: true
	});
	destroyRef.onDestroy(() => observer.disconnect());
}
function isRelevantSelectMutation(mutation) {
	if (mutation.type === "childList" || mutation.type === "characterData") {
		if (mutation.target instanceof Comment) return false;
		for (const node of mutation.addedNodes) if (!(node instanceof Comment)) return true;
		for (const node of mutation.removedNodes) if (!(node instanceof Comment)) return true;
		return false;
	}
	if (mutation.type === "attributes" && mutation.target instanceof HTMLOptionElement) return true;
	return false;
}
function nativeControlCreate(host, parent, parseErrorsSource, validityMonitor) {
	let updateMode = false;
	const input = parent.nativeFormElement;
	const parser = createParser(() => parent.state().value(), (rawValue) => parent.state().controlValue.set(rawValue), (_rawValue) => getNativeControlValue(input, parent.state().value, validityMonitor));
	parseErrorsSource.set(parser.errors);
	parent.onReset = () => {
		parser.reset();
		const value = parent.state().value();
		bindings["controlValue"] = value;
		setNativeControlValue(input, value);
	};
	const nativeEl = host.nativeElement;
	const onInput = () => parser.setRawValue(void 0);
	nativeEl.addEventListener("input", onInput);
	const onBlur = () => parent.state().markAsTouched();
	nativeEl.addEventListener("blur", onBlur);
	parent.destroyRef.onDestroy(() => {
		nativeEl.removeEventListener("input", onInput);
		nativeEl.removeEventListener("blur", onBlur);
	});
	if (isInput(input) && inputRequiresValidityTracking(input)) validityMonitor.watchValidity(parent.destroyRef, input, () => parser.setRawValue(void 0));
	parent.registerAsBinding();
	if (input.tagName === "SELECT") observeSelectMutations(input, () => {
		if (!updateMode) return;
		input.value = parent.state().controlValue();
	}, parent.destroyRef);
	const bindings = createBindings();
	return () => {
		const state = parent.state();
		for (const name of CONTROL_BINDING_NAMES) {
			const value = readFieldStateBindingValue(state, name);
			if (bindingUpdated(bindings, name, value)) {
				host.setInputOnDirectives(name, value);
				if (parent.elementAcceptsNativeProperty(name)) {
					const domValue = formatDateForMinMax(name, value, input.type);
					setNativeDomProperty(parent.renderer, input, name, domValue);
				}
			}
		}
		const controlValue = state.controlValue();
		const controlValueChanged = bindingUpdated(bindings, "controlValue", controlValue);
		const radioValueChanged = input.type === "radio" && bindingUpdated(bindings, "radioValue", input.value);
		if (controlValueChanged || radioValueChanged) setNativeControlValue(input, controlValue);
		updateMode = true;
	};
}
var InputValidityMonitor = class InputValidityMonitor {
	static ɵfac = function InputValidityMonitor_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || InputValidityMonitor)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: InputValidityMonitor,
		factory: (__ngFactoryType__) => AnimationInputValidityMonitor.ɵfac(__ngFactoryType__),
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputValidityMonitor, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useClass: forwardRef(() => AnimationInputValidityMonitor)
		}]
	}], null, null);
})();
var AnimationInputValidityMonitor = class AnimationInputValidityMonitor extends InputValidityMonitor {
	document = inject(DOCUMENT);
	cspNonce = inject(CSP_NONCE, { optional: true });
	injectedStyles = /* @__PURE__ */ new WeakMap();
	watchValidity(destroyRef, element, callback) {
		const rootNode = element.getRootNode();
		if (!this.injectedStyles.has(rootNode)) this.injectedStyles.set(rootNode, this.createAnimationStyle(rootNode));
		const onAnimationStart = (event) => {
			const animationEvent = event;
			if (animationEvent.animationName === "ng-valid" || animationEvent.animationName === "ng-invalid") callback();
		};
		element.addEventListener("animationstart", onAnimationStart);
		destroyRef.onDestroy(() => {
			element.removeEventListener("animationstart", onAnimationStart);
		});
	}
	isBadInput(element) {
		return element.validity?.badInput ?? false;
	}
	createAnimationStyle(rootNode) {
		const element = this.document.createElement("style");
		if (this.cspNonce) element.nonce = this.cspNonce;
		element.textContent = `
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `;
		if (rootNode.nodeType === 9) rootNode.head?.appendChild(element);
		else rootNode.appendChild(element);
		return element;
	}
	ngOnDestroy() {
		this.injectedStyles.get(this.document)?.remove();
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵAnimationInputValidityMonitor_BaseFactory = void 0;
		return function AnimationInputValidityMonitor_Factory(__ngFactoryType__) {
			return (ɵAnimationInputValidityMonitor_BaseFactory || (ɵAnimationInputValidityMonitor_BaseFactory = ɵɵgetInheritedFactory(AnimationInputValidityMonitor)))(__ngFactoryType__ || AnimationInputValidityMonitor);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: AnimationInputValidityMonitor,
		factory: AnimationInputValidityMonitor.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationInputValidityMonitor, [{ type: Injectable }], null, null);
})();
var ɵNgFieldDirective = Symbol();
var FORM_FIELD = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "FORM_FIELD" : "");
var FormField = class FormField {
	field = input.required({
		...ngDevMode ? { debugName: "field" } : {},
		alias: "formField"
	});
	state = computed(() => this.field()(), ...ngDevMode ? [{ debugName: "state" }] : []);
	renderer = inject(Renderer2);
	destroyRef = inject(DestroyRef);
	injector = inject(Injector);
	element = inject(ElementRef).nativeElement;
	elementIsNativeFormElement = isNativeFormElement(this.element);
	elementAcceptsTextualValues = isTextualFormElement(this.element);
	_elementAcceptsMinMax;
	nativeFormElement = this.elementIsNativeFormElement ? this.element : void 0;
	focuser = (options) => this.element.focus(options);
	controlValueAccessors = inject(NG_VALUE_ACCESSOR, {
		optional: true,
		self: true
	});
	config = inject(SIGNAL_FORMS_CONFIG, { optional: true });
	validityMonitor = inject(InputValidityMonitor);
	parseErrorsSource = signal(void 0, ...ngDevMode ? [{ debugName: "parseErrorsSource" }] : []);
	_interopNgControl;
	get interopNgControl() {
		return this._interopNgControl ??= new InteropNgControl(this.state);
	}
	parseErrors = computed(() => this.parseErrorsSource()?.().map((err) => ({
		...err,
		fieldTree: untracked(this.state).fieldTree,
		formField: this
	})) ?? [], {
		...ngDevMode ? { debugName: "parseErrors" } : {},
		equal: shallowArrayEquals
	});
	errors = computed(() => this.state().errors().filter((err) => !err.formField || err.formField === this), {
		...ngDevMode ? { debugName: "errors" } : {},
		equal: shallowArrayEquals
	});
	isFieldBinding = false;
	resetter = () => {};
	parseErrorsResetCallback;
	setParseErrors(source) {
		this.parseErrorsSource.set(source);
	}
	set onReset(callback) {
		this.parseErrorsResetCallback = callback;
	}
	get onReset() {
		return this.parseErrorsResetCallback;
	}
	get controlValueAccessor() {
		if (!this.controlValueAccessors || this.controlValueAccessors.length === 0) return this.interopNgControl?.valueAccessor ?? void 0;
		return selectValueAccessor(this.interopNgControl, this.controlValueAccessors) ?? void 0;
	}
	installClassBindingEffect() {
		const classes = Object.entries(this.config?.classes ?? {}).map(([className, computation]) => [className, computed(() => computation(this))]);
		if (classes.length === 0) return;
		const bindings = createBindings();
		afterRenderEffect({ write: () => {
			if (this.state().structure.isOrphaned()) return;
			for (const [className, computation] of classes) {
				const active = computation();
				if (bindingUpdated(bindings, className, active)) {
					if (active) this.renderer.addClass(this.element, className);
					else this.renderer.removeClass(this.element, className);
				}
			}
		} }, { injector: this.injector });
	}
	focus(options) {
		this.focuser(options);
	}
	reset() {
		this.resetter();
		this.parseErrorsResetCallback?.(this.state().value());
	}
	registerAsBinding(bindingOptions) {
		if (this.isFieldBinding) throw new RuntimeError(1913, typeof ngDevMode !== "undefined" && ngDevMode && "FormField already registered as a binding");
		this.isFieldBinding = true;
		this.installClassBindingEffect();
		if (bindingOptions?.focus) this.focuser = (focusOptions) => bindingOptions.focus(focusOptions);
		if (bindingOptions?.reset) this.resetter = () => bindingOptions.reset();
		effect((onCleanup) => {
			const fieldNode = this.state();
			fieldNode.nodeState.formFieldBindings.update((controls) => [...controls, this]);
			onCleanup(() => {
				const remaining = fieldNode.nodeState.formFieldBindings().filter((c) => c !== this);
				fieldNode.nodeState.formFieldBindings.set(remaining);
				if (remaining.length === 0 && !fieldNode.structure.isOrphaned()) fieldNode.flushSync();
			});
		}, { injector: this.injector });
		if (typeof ngDevMode !== "undefined" && ngDevMode) effect(() => {
			const fieldNode = this.state();
			if (fieldNode.hidden()) {
				const path = fieldNode.structure.pathKeys().join(".") || "<root>";
				console.warn(formatRuntimeError(1916, `Field '${path}' is hidden but is being rendered. Hidden fields should be removed from the DOM using @if.`));
			}
		}, { injector: this.injector });
	}
	[ɵNgFieldDirective];
	ɵngControlCreate(host) {
		if (host.hasPassThrough) return;
		if (this.controlValueAccessor) this.ɵngControlUpdate = cvaControlCreate(host, this);
		else if (host.customControl) this.ɵngControlUpdate = customControlCreate(host, this);
		else if (this.elementIsNativeFormElement) this.ɵngControlUpdate = nativeControlCreate(host, this, this.parseErrorsSource, this.validityMonitor);
		else throw new RuntimeError(1914, typeof ngDevMode !== "undefined" && ngDevMode && `${host.descriptor} is an invalid [formField] directive host. The host must be a native form control (such as <input>', '<select>', or '<textarea>') or a custom form control with a 'value' or 'checked' model.`);
	}
	ɵngControlUpdate;
	elementAcceptsNativeProperty(key) {
		if (!this.elementIsNativeFormElement) return false;
		switch (key) {
			case "min":
			case "max": return this._elementAcceptsMinMax ??= elementAcceptsMinMax(this.element);
			case "minLength":
			case "maxLength": return this.elementAcceptsTextualValues;
			case "disabled":
			case "required":
			case "readonly":
			case "name": return true;
			default: return false;
		}
	}
	static ɵfac = function FormField_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FormField)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: FormField,
		selectors: [[
			"",
			"formField",
			""
		]],
		inputs: { field: [
			1,
			"formField",
			"field"
		] },
		exportAs: ["formField"],
		features: [ɵɵProvidersFeature([
			{
				provide: FORM_FIELD,
				useExisting: FormField
			},
			{
				provide: NgControl,
				useFactory: () => inject(FormField).interopNgControl
			},
			{
				provide: ɵFORM_CONTROL_INTEGRATION,
				useFactory: () => inject(FORM_FIELD, { self: true })
			}
		]), ɵɵControlFeature("formField")]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormField, [{
		type: Directive,
		args: [{
			selector: "[formField]",
			exportAs: "formField",
			providers: [
				{
					provide: FORM_FIELD,
					useExisting: FormField
				},
				{
					provide: NgControl,
					useFactory: () => inject(FormField).interopNgControl
				},
				{
					provide: ɵFORM_CONTROL_INTEGRATION,
					useFactory: () => inject(FORM_FIELD, { self: true })
				}
			]
		}]
	}], null, { field: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "formField",
			required: true
		}]
	}] });
})();
var FormRoot = class FormRoot {
	fieldTree = input.required({
		...ngDevMode ? { debugName: "fieldTree" } : {},
		alias: "formRoot"
	});
	onSubmit(event) {
		event.preventDefault();
		untracked(() => {
			const fieldTree = this.fieldTree();
			if (fieldTree().structure.fieldManager.submitOptions) submit(fieldTree);
		});
	}
	static ɵfac = function FormRoot_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FormRoot)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: FormRoot,
		selectors: [[
			"form",
			"formRoot",
			""
		]],
		hostAttrs: ["novalidate", ""],
		hostBindings: function FormRoot_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("submit", function FormRoot_submit_HostBindingHandler($event) {
				return ctx.onSubmit($event);
			});
		},
		inputs: { fieldTree: [
			1,
			"formRoot",
			"fieldTree"
		] }
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormRoot, [{
		type: Directive,
		args: [{
			selector: "form[formRoot]",
			host: {
				"novalidate": "",
				"(submit)": "onSubmit($event)"
			}
		}]
	}], null, { fieldTree: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "formRoot",
			required: true
		}]
	}] });
})();
var registerWebMcpForm = (formTree, options) => {
	const injector = inject(Injector);
	return new Promise((resolve, reject) => {
		effect(() => {
			untracked(() => {
				initWebMcpForm(formTree, options, injector).then(resolve, reject);
			});
		});
	});
};
async function initWebMcpForm(formTree, options, injector) {
	const node = formTree();
	const inputSchema = inferSchemaFromFieldNode(node);
	if (!inputSchema) throw new Error(`Could not accurately infer WebMCP schema for form "${options.name}". Ensure that the form model does not contain null, undefined, empty arrays, or unsupported types.`);
	await declareExperimentalWebMcpTool({
		name: options.name,
		description: options.description,
		inputSchema,
		annotations: {
			...options.annotations,
			readOnlyHint: false,
			untrustedContentHint: false
		},
		execute: async (args) => {
			node.value.set(args);
			if (await submit(formTree)) return { content: [{
				type: "text",
				text: "Form submitted successfully."
			}] };
			else return { content: [{
				type: "text",
				text: `Form submission failed:\n${node.errorSummary().map((err) => {
					const fieldName = err.fieldTree().structure.pathKeys().join(".");
					return `${fieldName ? `${fieldName}: ` : ""}${err.message || err.kind}`;
				}).join("\n")}`
			}] };
		}
	}, injector);
}
function inferSchemaFromFieldNode(node) {
	const value = node.value();
	if (typeof value === "string") return { type: "string" };
	if (typeof value === "number") return { type: "number" };
	if (typeof value === "boolean") return { type: "boolean" };
	if (value === null || value === void 0) return void 0;
	if (Array.isArray(value)) {
		if (value.length === 0) return void 0;
		const firstChild = node.structure.getChild("0");
		if (!firstChild) return void 0;
		const itemSchema = inferSchemaFromFieldNode(firstChild);
		if (!itemSchema) return void 0;
		return {
			type: "array",
			items: itemSchema
		};
	}
	if (typeof value === "object") {
		const properties = {};
		const required = [];
		const children = node.structure.children();
		for (const child of children) {
			const key = child.keyInParent();
			const childSchema = inferSchemaFromFieldNode(child);
			if (!childSchema) return void 0;
			properties[key] = childSchema;
			if (child.required()) required.push(key.toString());
		}
		return {
			type: "object",
			properties,
			required,
			additionalProperties: false
		};
	}
}
function provideExperimentalWebMcpForms() {
	return makeEnvironmentProviders([{
		provide: REGISTER_WEBMCP_FORM,
		useValue: registerWebMcpForm
	}]);
}
export { BaseNgValidationError, EmailValidationError, FORM_FIELD, FormField, FormRoot, IS_ASYNC_VALIDATION_RESOURCE, MAX, MAX_DATE, MAX_LENGTH, MAX_NUMBER, MIN, MIN_DATE, MIN_LENGTH, MIN_NUMBER, MaxDateValidationError, MaxLengthValidationError, MaxValidationError, MetadataKey, MetadataReducer, MinDateValidationError, MinLengthValidationError, MinValidationError, NativeInputParseError, NgValidationError, PATTERN, PatternValidationError, REQUIRED, RequiredValidationError, StandardSchemaValidationError, apply, applyEach, applyWhen, applyWhenValue, createLimitSelectionKey, createManagedMetadataKey, createMetadataKey, debounce, disabled, email, emailError, form, hidden, isFieldTree, max, maxDate, maxDateError, maxError, maxLength, maxLengthError, metadata, min, minDate, minDateError, minError, minLength, minLengthError, pattern, patternError, provideExperimentalWebMcpForms, provideSignalFormsConfig, readonly, required, requiredError, schema, standardSchemaError, submit, transformedValue, validate, validateAsync, validateHttp, validateStandardSchema, validateTree, ɵNgFieldDirective };
