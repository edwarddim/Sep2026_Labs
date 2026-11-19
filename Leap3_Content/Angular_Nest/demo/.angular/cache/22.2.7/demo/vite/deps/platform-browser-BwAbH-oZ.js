import { $c as _global, $i as unwrapSafeValue, $r as findLocaleData, Ac as Injector, Al as ɵɵdefineInjectable, Ar as _sanitizeUrl, Bc as PLATFORM_ID, Bn as LOCALE_ID, Bo as ɵɵinjectAttribute, Br as bypassSanitizationTrustUrl, Cr as TracingService, Dc as INJECTOR_SCOPE, Dl as stringify, Dn as Host, Dr as ViewEncapsulation, En as ElementRef, Er as ViewContainerRef, F as createPlatformFactory, Fn as Injectable, In as Input, Ir as bypassSanitizationTrustHtml, Jr as createNgModule, Kc as RuntimeError, Ki as setDocument, Lr as bypassSanitizationTrustResourceUrl, Nr as allLeavingAnimations, Oc as INTERNAL_APPLICATION_ERROR_HANDLER, Pl as ɵɵinject, Pn as Inject, Pr as allowSanitizationBypassAndThrow, Pt as CACHE_ACTIVE, Qn as Optional, Rc as NgZone, Rr as bypassSanitizationTrustScript, Sc as ErrorHandler, Tr as USE_PENDING_TASKS, Vc as PLATFORM_INITIALIZER, Vn as LocaleDataIndex, Wi as setClassMetadata, Xc as Version, Xr as describeDomNode, Yt as APP_BOOTSTRAP_LISTENER, Z as internalCreateApplication, Zn as NgModuleRef$1, _c as DOCUMENT, _l as makeEnvironmentProviders, al as formatRuntimeError, ao as ɵɵdefineNgModule, ar as RendererFactory2, bi as isSubscribable, br as TestabilityRegistry, bt as withI18nSupport$1, co as ɵɵdirectiveInject, dl as inject, dr as Service, er as Pipe, fi as getLocalePluralCase$1, fn as Console, hc as CSP_NONCE, hr as TESTABILITY_GETTER, io as ɵɵdefineDirective, ir as Renderer2, jl as ɵɵdefineInjector, jn as IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, kc as InjectionToken, kr as _sanitizeHtml, la as ɵɵNgOnChangesFeature, m as KeyValueDiffers, ml as isSignal, mn as DEFAULT_CURRENCY_CODE, mr as TESTABILITY, nn as Attribute, ol as forwardRef, oo as ɵɵdefinePipe, or as RendererStyleFlags2, ot as platformCore, p as IterableDiffers, pc as APP_ID, qc as SecurityContext, qn as NgModule, qt as untracked, r as ChangeDetectorRef, so as ɵɵdefineService, sr as SHARED_STYLES_HOST, t as ApplicationModule, tn as ApplicationRef, ut as provideStabilityDebugging, vr as TemplateRef, vt as withDomHydration, wn as Directive, xt as withIncrementalHydration$1, yc as ENVIRONMENT_INITIALIZER, yi as isPromise, yr as Testability, yt as withEventReplay$1, zr as bypassSanitizationTrustStyle } from "./core-D4iryrxe.js";
import { G as getDOM, H as DomAdapter, K as setRootDomAdapter, W as PlatformLocation, q as parseCookieValue, r as withHttpTransferCache } from "./http-CE3_CorA.js";
import { c as LocationStrategy, d as normalizeQueryParams, n as PLATFORM_BROWSER_ID, o as APP_BASE_HREF, u as joinWithSlash } from "./common-CPSMxqA1.js";
// node_modules/@angular/common/fesm2022/_common_module-chunk.mjs
/**
* @license Angular v22.2.6
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var HashLocationStrategy = class HashLocationStrategy extends LocationStrategy {
	_platformLocation;
	_baseHref = "";
	_removeListenerFns = [];
	constructor(_platformLocation, _baseHref) {
		super();
		this._platformLocation = _platformLocation;
		if (_baseHref != null) this._baseHref = _baseHref;
	}
	ngOnDestroy() {
		while (this._removeListenerFns.length) this._removeListenerFns.pop()();
	}
	onPopState(fn) {
		this._removeListenerFns.push(this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn));
	}
	getBaseHref() {
		return this._baseHref;
	}
	path(includeHash = false) {
		const path = this._platformLocation.hash ?? "#";
		return path.length > 0 ? path.substring(1) : path;
	}
	prepareExternalUrl(internal) {
		const url = joinWithSlash(this._baseHref, internal);
		return url.length > 0 ? "#" + url : url;
	}
	pushState(state, title, path, queryParams) {
		const url = this.prepareExternalUrl(path + normalizeQueryParams(queryParams)) || this._platformLocation.pathname;
		this._platformLocation.pushState(state, title, url);
	}
	replaceState(state, title, path, queryParams) {
		const url = this.prepareExternalUrl(path + normalizeQueryParams(queryParams)) || this._platformLocation.pathname;
		this._platformLocation.replaceState(state, title, url);
	}
	forward() {
		this._platformLocation.forward();
	}
	back() {
		this._platformLocation.back();
	}
	getState() {
		return this._platformLocation.getState();
	}
	historyGo(relativePosition = 0) {
		this._platformLocation.historyGo?.(relativePosition);
	}
	static ɵfac = function HashLocationStrategy_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HashLocationStrategy)(ɵɵinject(PlatformLocation), ɵɵinject(APP_BASE_HREF, 8));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: HashLocationStrategy,
		factory: HashLocationStrategy.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HashLocationStrategy, [{ type: Injectable }], () => [{ type: PlatformLocation }, {
		type: void 0,
		decorators: [{ type: Optional }, {
			type: Inject,
			args: [APP_BASE_HREF]
		}]
	}], null);
})();
var CURRENCIES_EN = {
	"ADP": [
		void 0,
		void 0,
		0
	],
	"AFN": [
		void 0,
		"؋",
		0
	],
	"ALL": [
		void 0,
		void 0,
		0
	],
	"AMD": [
		void 0,
		"֏",
		2
	],
	"AOA": [void 0, "Kz"],
	"ARS": [void 0, "$"],
	"AUD": ["A$", "$"],
	"AZN": [void 0, "₼"],
	"BAM": [void 0, "KM"],
	"BBD": [void 0, "$"],
	"BDT": [void 0, "৳"],
	"BHD": [
		void 0,
		void 0,
		3
	],
	"BIF": [
		void 0,
		void 0,
		0
	],
	"BMD": [void 0, "$"],
	"BND": [void 0, "$"],
	"BOB": [void 0, "Bs"],
	"BRL": ["R$"],
	"BSD": [void 0, "$"],
	"BWP": [void 0, "P"],
	"BYN": [
		void 0,
		void 0,
		2
	],
	"BYR": [
		void 0,
		void 0,
		0
	],
	"BZD": [void 0, "$"],
	"CAD": [
		"CA$",
		"$",
		2
	],
	"CHF": [
		void 0,
		void 0,
		2
	],
	"CLF": [
		void 0,
		void 0,
		4
	],
	"CLP": [
		void 0,
		"$",
		0
	],
	"CNY": ["CN¥", "¥"],
	"COP": [
		void 0,
		"$",
		2
	],
	"CRC": [
		void 0,
		"₡",
		2
	],
	"CUC": [void 0, "$"],
	"CUP": [void 0, "$"],
	"CZK": [
		void 0,
		"Kč",
		2
	],
	"DJF": [
		void 0,
		void 0,
		0
	],
	"DKK": [
		void 0,
		"kr",
		2
	],
	"DOP": [void 0, "$"],
	"EGP": [void 0, "E£"],
	"ESP": [
		void 0,
		"₧",
		0
	],
	"EUR": ["€"],
	"FJD": [void 0, "$"],
	"FKP": [void 0, "£"],
	"GBP": ["£"],
	"GEL": [void 0, "₾"],
	"GHS": [void 0, "GH₵"],
	"GIP": [void 0, "£"],
	"GNF": [
		void 0,
		"FG",
		0
	],
	"GTQ": [void 0, "Q"],
	"GYD": [
		void 0,
		"$",
		2
	],
	"HKD": ["HK$", "$"],
	"HNL": [void 0, "L"],
	"HRK": [void 0, "kn"],
	"HUF": [
		void 0,
		"Ft",
		2
	],
	"IDR": [
		void 0,
		"Rp",
		2
	],
	"ILS": ["₪"],
	"INR": ["₹"],
	"IQD": [
		void 0,
		void 0,
		0
	],
	"IRR": [
		void 0,
		void 0,
		0
	],
	"ISK": [
		void 0,
		"kr",
		0
	],
	"ITL": [
		void 0,
		void 0,
		0
	],
	"JMD": [void 0, "$"],
	"JOD": [
		void 0,
		void 0,
		3
	],
	"JPY": [
		"¥",
		void 0,
		0
	],
	"KGS": [void 0, "⃀"],
	"KHR": [void 0, "៛"],
	"KMF": [
		void 0,
		"CF",
		0
	],
	"KPW": [
		void 0,
		"₩",
		0
	],
	"KRW": [
		"₩",
		void 0,
		0
	],
	"KWD": [
		void 0,
		void 0,
		3
	],
	"KYD": [void 0, "$"],
	"KZT": [void 0, "₸"],
	"LAK": [
		void 0,
		"₭",
		0
	],
	"LBP": [
		void 0,
		"L£",
		0
	],
	"LKR": [void 0, "Rs"],
	"LRD": [void 0, "$"],
	"LTL": [void 0, "Lt"],
	"LUF": [
		void 0,
		void 0,
		0
	],
	"LVL": [void 0, "Ls"],
	"LYD": [
		void 0,
		void 0,
		3
	],
	"MGA": [
		void 0,
		"Ar",
		0
	],
	"MGF": [
		void 0,
		void 0,
		0
	],
	"MMK": [
		void 0,
		"K",
		0
	],
	"MNT": [
		void 0,
		"₮",
		2
	],
	"MRO": [
		void 0,
		void 0,
		0
	],
	"MUR": [
		void 0,
		"Rs",
		2
	],
	"MXN": ["MX$", "$"],
	"MYR": [void 0, "RM"],
	"NAD": [void 0, "$"],
	"NGN": [void 0, "₦"],
	"NIO": [void 0, "C$"],
	"NOK": [
		void 0,
		"kr",
		2
	],
	"NPR": [void 0, "Rs"],
	"NZD": ["NZ$", "$"],
	"OMR": [
		void 0,
		void 0,
		3
	],
	"PHP": ["₱"],
	"PKR": [
		void 0,
		"Rs",
		2
	],
	"PLN": [void 0, "zł"],
	"PYG": [
		void 0,
		"₲",
		0
	],
	"RON": [void 0, "lei"],
	"RSD": [
		void 0,
		void 0,
		0
	],
	"RUB": [void 0, "₽"],
	"RWF": [
		void 0,
		"RF",
		0
	],
	"SBD": [void 0, "$"],
	"SEK": [
		void 0,
		"kr",
		2
	],
	"SGD": [void 0, "$"],
	"SHP": [void 0, "£"],
	"SLE": [
		void 0,
		void 0,
		2
	],
	"SLL": [
		void 0,
		void 0,
		0
	],
	"SOS": [
		void 0,
		void 0,
		0
	],
	"SRD": [void 0, "$"],
	"SSP": [void 0, "£"],
	"STD": [
		void 0,
		void 0,
		0
	],
	"STN": [void 0, "Db"],
	"SYP": [
		void 0,
		"£",
		0
	],
	"THB": [void 0, "฿"],
	"TMM": [
		void 0,
		void 0,
		0
	],
	"TND": [
		void 0,
		void 0,
		3
	],
	"TOP": [void 0, "T$"],
	"TRL": [
		void 0,
		void 0,
		0
	],
	"TRY": [void 0, "₺"],
	"TTD": [void 0, "$"],
	"TWD": [
		"NT$",
		"$",
		2
	],
	"TZS": [
		void 0,
		void 0,
		2
	],
	"UAH": [void 0, "₴"],
	"UGX": [
		void 0,
		void 0,
		0
	],
	"USD": ["$"],
	"UYI": [
		void 0,
		void 0,
		0
	],
	"UYU": [void 0, "$"],
	"UYW": [
		void 0,
		void 0,
		4
	],
	"UZS": [
		void 0,
		void 0,
		2
	],
	"VEF": [
		void 0,
		"Bs",
		2
	],
	"VND": [
		"₫",
		void 0,
		0
	],
	"VUV": [
		void 0,
		void 0,
		0
	],
	"XAF": [
		"FCFA",
		void 0,
		0
	],
	"XCD": ["EC$", "$"],
	"XCG": ["Cg."],
	"XOF": [
		"F CFA",
		void 0,
		0
	],
	"XPF": [
		"CFPF",
		void 0,
		0
	],
	"XXX": ["¤"],
	"YER": [
		void 0,
		void 0,
		0
	],
	"ZAR": [void 0, "R"],
	"ZMK": [
		void 0,
		void 0,
		0
	],
	"ZMW": [void 0, "ZK"],
	"ZWD": [
		void 0,
		void 0,
		0
	]
};
var NumberFormatStyle;
(function(NumberFormatStyle) {
	NumberFormatStyle[NumberFormatStyle["Decimal"] = 0] = "Decimal";
	NumberFormatStyle[NumberFormatStyle["Percent"] = 1] = "Percent";
	NumberFormatStyle[NumberFormatStyle["Currency"] = 2] = "Currency";
	NumberFormatStyle[NumberFormatStyle["Scientific"] = 3] = "Scientific";
})(NumberFormatStyle || (NumberFormatStyle = {}));
var Plural;
(function(Plural) {
	Plural[Plural["Zero"] = 0] = "Zero";
	Plural[Plural["One"] = 1] = "One";
	Plural[Plural["Two"] = 2] = "Two";
	Plural[Plural["Few"] = 3] = "Few";
	Plural[Plural["Many"] = 4] = "Many";
	Plural[Plural["Other"] = 5] = "Other";
})(Plural || (Plural = {}));
var FormStyle;
(function(FormStyle) {
	FormStyle[FormStyle["Format"] = 0] = "Format";
	FormStyle[FormStyle["Standalone"] = 1] = "Standalone";
})(FormStyle || (FormStyle = {}));
var TranslationWidth;
(function(TranslationWidth) {
	TranslationWidth[TranslationWidth["Narrow"] = 0] = "Narrow";
	TranslationWidth[TranslationWidth["Abbreviated"] = 1] = "Abbreviated";
	TranslationWidth[TranslationWidth["Wide"] = 2] = "Wide";
	TranslationWidth[TranslationWidth["Short"] = 3] = "Short";
})(TranslationWidth || (TranslationWidth = {}));
var FormatWidth;
(function(FormatWidth) {
	FormatWidth[FormatWidth["Short"] = 0] = "Short";
	FormatWidth[FormatWidth["Medium"] = 1] = "Medium";
	FormatWidth[FormatWidth["Long"] = 2] = "Long";
	FormatWidth[FormatWidth["Full"] = 3] = "Full";
})(FormatWidth || (FormatWidth = {}));
var NumberSymbol = {
	Decimal: 0,
	Group: 1,
	List: 2,
	PercentSign: 3,
	PlusSign: 4,
	MinusSign: 5,
	Exponential: 6,
	SuperscriptingExponent: 7,
	PerMille: 8,
	Infinity: 9,
	NaN: 10,
	TimeSeparator: 11,
	CurrencyDecimal: 12,
	CurrencyGroup: 13
};
var WeekDay;
(function(WeekDay) {
	WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
	WeekDay[WeekDay["Monday"] = 1] = "Monday";
	WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
	WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
	WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
	WeekDay[WeekDay["Friday"] = 5] = "Friday";
	WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
function getLocaleId(locale) {
	return findLocaleData(locale)[LocaleDataIndex.LocaleId];
}
function getLocaleDayPeriods(locale, formStyle, width) {
	const data = findLocaleData(locale);
	return getLastDefinedValue(getLastDefinedValue([data[LocaleDataIndex.DayPeriodsFormat], data[LocaleDataIndex.DayPeriodsStandalone]], formStyle), width);
}
function getLocaleDayNames(locale, formStyle, width) {
	const data = findLocaleData(locale);
	return getLastDefinedValue(getLastDefinedValue([data[LocaleDataIndex.DaysFormat], data[LocaleDataIndex.DaysStandalone]], formStyle), width);
}
function getLocaleMonthNames(locale, formStyle, width) {
	const data = findLocaleData(locale);
	return getLastDefinedValue(getLastDefinedValue([data[LocaleDataIndex.MonthsFormat], data[LocaleDataIndex.MonthsStandalone]], formStyle), width);
}
function getLocaleEraNames(locale, width) {
	const erasData = findLocaleData(locale)[LocaleDataIndex.Eras];
	return getLastDefinedValue(erasData, width);
}
function getLocaleDateFormat(locale, width) {
	return getLastDefinedValue(findLocaleData(locale)[LocaleDataIndex.DateFormat], width);
}
function getLocaleTimeFormat(locale, width) {
	return getLastDefinedValue(findLocaleData(locale)[LocaleDataIndex.TimeFormat], width);
}
function getLocaleDateTimeFormat(locale, width) {
	const dateTimeFormatData = findLocaleData(locale)[LocaleDataIndex.DateTimeFormat];
	return getLastDefinedValue(dateTimeFormatData, width);
}
function getLocaleNumberSymbol(locale, symbol) {
	const data = findLocaleData(locale);
	const res = data[LocaleDataIndex.NumberSymbols][symbol];
	if (typeof res === "undefined") {
		if (symbol === NumberSymbol.CurrencyDecimal) return data[LocaleDataIndex.NumberSymbols][NumberSymbol.Decimal];
		else if (symbol === NumberSymbol.CurrencyGroup) return data[LocaleDataIndex.NumberSymbols][NumberSymbol.Group];
	}
	return res;
}
function getLocaleNumberFormat(locale, type) {
	return findLocaleData(locale)[LocaleDataIndex.NumberFormats][type];
}
function getLocaleCurrencies(locale) {
	return findLocaleData(locale)[LocaleDataIndex.Currencies];
}
var getLocalePluralCase = getLocalePluralCase$1;
function checkFullData(data) {
	if (!data[LocaleDataIndex.ExtraData]) throw new RuntimeError(2303, ngDevMode && `Missing extra locale data for the locale "${data[LocaleDataIndex.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`);
}
function getLocaleExtraDayPeriodRules(locale) {
	const data = findLocaleData(locale);
	checkFullData(data);
	return (data[LocaleDataIndex.ExtraData][2] || []).map((rule) => {
		if (typeof rule === "string") return extractTime(rule);
		return [extractTime(rule[0]), extractTime(rule[1])];
	});
}
function getLocaleExtraDayPeriods(locale, formStyle, width) {
	const data = findLocaleData(locale);
	checkFullData(data);
	return getLastDefinedValue(getLastDefinedValue([data[LocaleDataIndex.ExtraData][0], data[LocaleDataIndex.ExtraData][1]], formStyle) || [], width) || [];
}
function getLastDefinedValue(data, index) {
	for (let i = index; i > -1; i--) if (typeof data[i] !== "undefined") return data[i];
	throw new RuntimeError(2304, ngDevMode && "Locale data API: locale data undefined");
}
function extractTime(time) {
	const [h, m] = time.split(":");
	return {
		hours: +h,
		minutes: +m
	};
}
function getCurrencySymbol(code, format, locale = "en") {
	const currency = getLocaleCurrencies(locale)[code] || CURRENCIES_EN[code] || [];
	const symbolNarrow = currency[1];
	if (format === "narrow" && typeof symbolNarrow === "string") return symbolNarrow;
	return currency[0] || code;
}
var DEFAULT_NB_OF_CURRENCY_DIGITS = 2;
function getNumberOfCurrencyDigits(code) {
	let digits;
	const currency = CURRENCIES_EN[code];
	if (currency) digits = currency[2];
	return typeof digits === "number" ? digits : DEFAULT_NB_OF_CURRENCY_DIGITS;
}
var ISO8601_DATE_REGEX = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
var NAMED_FORMATS = Object.create(null);
var DATE_FORMATS_SPLIT = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
var MAX_DATE_FORMAT_LENGTH = 256;
function formatDate(value, format, locale, timezone) {
	let date = toDate(value);
	assertValidDateFormatLength(format);
	format = getNamedFormat(locale, format) || format;
	let parts = [];
	let match;
	while (format) {
		match = DATE_FORMATS_SPLIT.exec(format);
		if (match) {
			parts = parts.concat(match.slice(1));
			const part = parts.pop();
			if (!part) break;
			format = part;
		} else {
			parts.push(format);
			break;
		}
	}
	if (typeof ngDevMode === "undefined" || ngDevMode) assertValidDateFormat(parts);
	let dateTimezoneOffset = date.getTimezoneOffset();
	if (timezone) {
		dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
		date = convertTimezoneToLocal(date, timezone);
	}
	let text = "";
	parts.forEach((value) => {
		const dateFormatter = getDateFormatter(value);
		text += dateFormatter ? dateFormatter(date, locale, dateTimezoneOffset) : value === "''" ? "'" : value.replace(/(^'|'$)/g, "").replace(/''/g, "'");
	});
	return text;
}
function assertValidDateFormatLength(format) {
	if (format.length > MAX_DATE_FORMAT_LENGTH) throw new RuntimeError(2300, ngDevMode && `Date format is too long. Exceeded maximum length of ${MAX_DATE_FORMAT_LENGTH} characters.`);
}
function assertValidDateFormat(parts) {
	if (parts.some((part) => /^Y+$/.test(part)) && !parts.some((part) => /^w+$/.test(part))) {
		const message = `Suspicious use of week-based year "Y" in date pattern "${parts.join("")}". Did you mean to use calendar year "y" instead?`;
		if (parts.length === 1) console.error(formatRuntimeError(2300, message));
		else throw new RuntimeError(2300, message);
	}
}
function createDate(year, month, date) {
	const newDate = /* @__PURE__ */ new Date(0);
	newDate.setFullYear(year, month, date);
	newDate.setHours(0, 0, 0);
	return newDate;
}
function getNamedFormat(locale, format) {
	const localeId = getLocaleId(locale);
	NAMED_FORMATS[localeId] ??= Object.create(null);
	if (NAMED_FORMATS[localeId][format]) return NAMED_FORMATS[localeId][format];
	let formatValue = "";
	switch (format) {
		case "shortDate":
			formatValue = getLocaleDateFormat(locale, FormatWidth.Short);
			break;
		case "mediumDate":
			formatValue = getLocaleDateFormat(locale, FormatWidth.Medium);
			break;
		case "longDate":
			formatValue = getLocaleDateFormat(locale, FormatWidth.Long);
			break;
		case "fullDate":
			formatValue = getLocaleDateFormat(locale, FormatWidth.Full);
			break;
		case "shortTime":
			formatValue = getLocaleTimeFormat(locale, FormatWidth.Short);
			break;
		case "mediumTime":
			formatValue = getLocaleTimeFormat(locale, FormatWidth.Medium);
			break;
		case "longTime":
			formatValue = getLocaleTimeFormat(locale, FormatWidth.Long);
			break;
		case "fullTime":
			formatValue = getLocaleTimeFormat(locale, FormatWidth.Full);
			break;
		case "short":
			const shortTime = getNamedFormat(locale, "shortTime");
			const shortDate = getNamedFormat(locale, "shortDate");
			formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Short), [shortTime, shortDate]);
			break;
		case "medium":
			const mediumTime = getNamedFormat(locale, "mediumTime");
			const mediumDate = getNamedFormat(locale, "mediumDate");
			formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Medium), [mediumTime, mediumDate]);
			break;
		case "long":
			const longTime = getNamedFormat(locale, "longTime");
			const longDate = getNamedFormat(locale, "longDate");
			formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Long), [longTime, longDate]);
			break;
		case "full":
			const fullTime = getNamedFormat(locale, "fullTime");
			const fullDate = getNamedFormat(locale, "fullDate");
			formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Full), [fullTime, fullDate]);
	}
	if (formatValue) NAMED_FORMATS[localeId][format] = formatValue;
	return formatValue;
}
function formatDateTime(str, opt_values) {
	if (opt_values) str = str.replace(/\{([^}]+)}/g, function(match, key) {
		return Object.hasOwn(opt_values, key) ? opt_values[key] : match;
	});
	return str;
}
function padNumber(num, digits, minusSign = "-", trim, negWrap) {
	let neg = "";
	if (num < 0 || negWrap && num <= 0) {
		if (negWrap) num = -num + 1;
		else {
			num = -num;
			neg = minusSign;
		}
	}
	let strNum = String(num);
	while (strNum.length < digits) strNum = "0" + strNum;
	if (trim) strNum = strNum.slice(strNum.length - digits);
	return neg + strNum;
}
function formatFractionalSeconds(milliseconds, digits) {
	return padNumber(milliseconds, 3).substring(0, digits);
}
function dateGetter(name, size, offset = 0, trim = false, negWrap = false) {
	return function(date, locale) {
		let part = getDatePart(name, date);
		if (offset > 0 || part > -offset) part += offset;
		if (name === 3) {
			if (part === 0 && offset === -12) part = 12;
		} else if (name === 6) return formatFractionalSeconds(part, size);
		const localeMinus = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
		return padNumber(part, size, localeMinus, trim, negWrap);
	};
}
function getDatePart(part, date) {
	switch (part) {
		case 0: return date.getFullYear();
		case 1: return date.getMonth();
		case 2: return date.getDate();
		case 3: return date.getHours();
		case 4: return date.getMinutes();
		case 5: return date.getSeconds();
		case 6: return date.getMilliseconds();
		case 7: return date.getDay();
		default: throw new RuntimeError(2301, ngDevMode && `Unknown DateType value "${part}".`);
	}
}
function dateStrGetter(name, width, form = FormStyle.Format, extended = false) {
	return function(date, locale) {
		return getDateTranslation(date, locale, name, width, form, extended);
	};
}
function getDateTranslation(date, locale, name, width, form, extended) {
	switch (name) {
		case 2: return getLocaleMonthNames(locale, form, width)[date.getMonth()];
		case 1: return getLocaleDayNames(locale, form, width)[date.getDay()];
		case 0:
			const currentHours = date.getHours();
			const currentMinutes = date.getMinutes();
			if (extended) {
				const rules = getLocaleExtraDayPeriodRules(locale);
				const dayPeriods = getLocaleExtraDayPeriods(locale, form, width);
				const index = rules.findIndex((rule) => {
					if (Array.isArray(rule)) {
						const [from, to] = rule;
						const afterFrom = currentHours >= from.hours && currentMinutes >= from.minutes;
						const beforeTo = currentHours < to.hours || currentHours === to.hours && currentMinutes < to.minutes;
						if (from.hours < to.hours) {
							if (afterFrom && beforeTo) return true;
						} else if (afterFrom || beforeTo) return true;
					} else if (rule.hours === currentHours && rule.minutes === currentMinutes) return true;
					return false;
				});
				if (index !== -1) return dayPeriods[index];
			}
			return getLocaleDayPeriods(locale, form, width)[currentHours < 12 ? 0 : 1];
		case 3: return getLocaleEraNames(locale, width)[date.getFullYear() <= 0 ? 0 : 1];
		default:
			const unexpected = name;
			throw new RuntimeError(2302, ngDevMode && `unexpected translation type ${unexpected}`);
	}
}
function timeZoneGetter(width) {
	return function(date, locale, offset) {
		const zone = -1 * offset;
		const minusSign = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
		const hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);
		switch (width) {
			case 0: return (zone >= 0 ? "+" : "") + padNumber(hours, 2, minusSign) + padNumber(Math.abs(zone % 60), 2, minusSign);
			case 1: return "GMT" + (zone >= 0 ? "+" : "") + padNumber(hours, 1, minusSign);
			case 2: return "GMT" + (zone >= 0 ? "+" : "") + padNumber(hours, 2, minusSign) + ":" + padNumber(Math.abs(zone % 60), 2, minusSign);
			case 3: if (offset === 0) return "Z";
			else return (zone >= 0 ? "+" : "") + padNumber(hours, 2, minusSign) + ":" + padNumber(Math.abs(zone % 60), 2, minusSign);
			default: throw new RuntimeError(2310, ngDevMode && `Unknown zone width "${width}"`);
		}
	};
}
var JANUARY = 0;
var THURSDAY = 4;
function getFirstThursdayOfYear(year) {
	const firstDayOfYear = createDate(year, JANUARY, 1).getDay();
	return createDate(year, 0, 1 + (firstDayOfYear <= THURSDAY ? THURSDAY : 11) - firstDayOfYear);
}
function getThursdayThisIsoWeek(datetime) {
	const currentDay = datetime.getDay();
	const deltaToThursday = currentDay === 0 ? -3 : THURSDAY - currentDay;
	return createDate(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + deltaToThursday);
}
function weekGetter(size, monthBased = false) {
	return function(date, locale) {
		let result;
		if (monthBased) {
			const nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
			const today = date.getDate();
			result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
		} else {
			const thisThurs = getThursdayThisIsoWeek(date);
			const firstThurs = getFirstThursdayOfYear(thisThurs.getFullYear());
			const diff = thisThurs.getTime() - firstThurs.getTime();
			result = 1 + Math.round(diff / 6048e5);
		}
		return padNumber(result, size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
	};
}
function weekNumberingYearGetter(size, trim = false) {
	return function(date, locale) {
		return padNumber(getThursdayThisIsoWeek(date).getFullYear(), size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign), trim);
	};
}
var DATE_FORMATS = Object.create(null);
function getDateFormatter(format) {
	if (DATE_FORMATS[format]) return DATE_FORMATS[format];
	let formatter;
	switch (format) {
		case "G":
		case "GG":
		case "GGG":
			formatter = dateStrGetter(3, TranslationWidth.Abbreviated);
			break;
		case "GGGG":
			formatter = dateStrGetter(3, TranslationWidth.Wide);
			break;
		case "GGGGG":
			formatter = dateStrGetter(3, TranslationWidth.Narrow);
			break;
		case "y":
			formatter = dateGetter(0, 1, 0, false, true);
			break;
		case "yy":
			formatter = dateGetter(0, 2, 0, true, true);
			break;
		case "yyy":
			formatter = dateGetter(0, 3, 0, false, true);
			break;
		case "yyyy":
			formatter = dateGetter(0, 4, 0, false, true);
			break;
		case "Y":
			formatter = weekNumberingYearGetter(1);
			break;
		case "YY":
			formatter = weekNumberingYearGetter(2, true);
			break;
		case "YYY":
			formatter = weekNumberingYearGetter(3);
			break;
		case "YYYY":
			formatter = weekNumberingYearGetter(4);
			break;
		case "M":
		case "L":
			formatter = dateGetter(1, 1, 1);
			break;
		case "MM":
		case "LL":
			formatter = dateGetter(1, 2, 1);
			break;
		case "MMM":
			formatter = dateStrGetter(2, TranslationWidth.Abbreviated);
			break;
		case "MMMM":
			formatter = dateStrGetter(2, TranslationWidth.Wide);
			break;
		case "MMMMM":
			formatter = dateStrGetter(2, TranslationWidth.Narrow);
			break;
		case "LLL":
			formatter = dateStrGetter(2, TranslationWidth.Abbreviated, FormStyle.Standalone);
			break;
		case "LLLL":
			formatter = dateStrGetter(2, TranslationWidth.Wide, FormStyle.Standalone);
			break;
		case "LLLLL":
			formatter = dateStrGetter(2, TranslationWidth.Narrow, FormStyle.Standalone);
			break;
		case "w":
			formatter = weekGetter(1);
			break;
		case "ww":
			formatter = weekGetter(2);
			break;
		case "W":
			formatter = weekGetter(1, true);
			break;
		case "d":
			formatter = dateGetter(2, 1);
			break;
		case "dd":
			formatter = dateGetter(2, 2);
			break;
		case "c":
		case "cc":
			formatter = dateGetter(7, 1);
			break;
		case "ccc":
			formatter = dateStrGetter(1, TranslationWidth.Abbreviated, FormStyle.Standalone);
			break;
		case "cccc":
			formatter = dateStrGetter(1, TranslationWidth.Wide, FormStyle.Standalone);
			break;
		case "ccccc":
			formatter = dateStrGetter(1, TranslationWidth.Narrow, FormStyle.Standalone);
			break;
		case "cccccc":
			formatter = dateStrGetter(1, TranslationWidth.Short, FormStyle.Standalone);
			break;
		case "E":
		case "EE":
		case "EEE":
			formatter = dateStrGetter(1, TranslationWidth.Abbreviated);
			break;
		case "EEEE":
			formatter = dateStrGetter(1, TranslationWidth.Wide);
			break;
		case "EEEEE":
			formatter = dateStrGetter(1, TranslationWidth.Narrow);
			break;
		case "EEEEEE":
			formatter = dateStrGetter(1, TranslationWidth.Short);
			break;
		case "a":
		case "aa":
		case "aaa":
			formatter = dateStrGetter(0, TranslationWidth.Abbreviated);
			break;
		case "aaaa":
			formatter = dateStrGetter(0, TranslationWidth.Wide);
			break;
		case "aaaaa":
			formatter = dateStrGetter(0, TranslationWidth.Narrow);
			break;
		case "b":
		case "bb":
		case "bbb":
			formatter = dateStrGetter(0, TranslationWidth.Abbreviated, FormStyle.Standalone, true);
			break;
		case "bbbb":
			formatter = dateStrGetter(0, TranslationWidth.Wide, FormStyle.Standalone, true);
			break;
		case "bbbbb":
			formatter = dateStrGetter(0, TranslationWidth.Narrow, FormStyle.Standalone, true);
			break;
		case "B":
		case "BB":
		case "BBB":
			formatter = dateStrGetter(0, TranslationWidth.Abbreviated, FormStyle.Format, true);
			break;
		case "BBBB":
			formatter = dateStrGetter(0, TranslationWidth.Wide, FormStyle.Format, true);
			break;
		case "BBBBB":
			formatter = dateStrGetter(0, TranslationWidth.Narrow, FormStyle.Format, true);
			break;
		case "h":
			formatter = dateGetter(3, 1, -12);
			break;
		case "hh":
			formatter = dateGetter(3, 2, -12);
			break;
		case "H":
			formatter = dateGetter(3, 1);
			break;
		case "HH":
			formatter = dateGetter(3, 2);
			break;
		case "m":
			formatter = dateGetter(4, 1);
			break;
		case "mm":
			formatter = dateGetter(4, 2);
			break;
		case "s":
			formatter = dateGetter(5, 1);
			break;
		case "ss":
			formatter = dateGetter(5, 2);
			break;
		case "S":
			formatter = dateGetter(6, 1);
			break;
		case "SS":
			formatter = dateGetter(6, 2);
			break;
		case "SSS":
			formatter = dateGetter(6, 3);
			break;
		case "Z":
		case "ZZ":
		case "ZZZ":
			formatter = timeZoneGetter(0);
			break;
		case "ZZZZZ":
			formatter = timeZoneGetter(3);
			break;
		case "O":
		case "OO":
		case "OOO":
		case "z":
		case "zz":
		case "zzz":
			formatter = timeZoneGetter(1);
			break;
		case "OOOO":
		case "ZZZZ":
		case "zzzz":
			formatter = timeZoneGetter(2);
			break;
		default: return null;
	}
	DATE_FORMATS[format] = formatter;
	return formatter;
}
function timezoneToOffset(timezone, fallback) {
	timezone = timezone.replace(/:/g, "");
	const requestedTimezoneOffset = Date.parse("Jan 01, 1970 00:00:00 " + timezone) / 6e4;
	return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
}
function addDateMinutes(date, minutes) {
	date = new Date(date.getTime());
	date.setMinutes(date.getMinutes() + minutes);
	return date;
}
function convertTimezoneToLocal(date, timezone, reverse) {
	const reverseValue = -1;
	const dateTimezoneOffset = date.getTimezoneOffset();
	return addDateMinutes(date, reverseValue * (timezoneToOffset(timezone, dateTimezoneOffset) - dateTimezoneOffset));
}
function toDate(value) {
	if (isDate(value)) return value;
	if (typeof value === "number" && !isNaN(value)) return new Date(value);
	if (typeof value === "string") {
		value = value.trim();
		if (/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(value)) {
			const [y, m = 1, d = 1] = value.split("-").map((val) => +val);
			return createDate(y, m - 1, d);
		}
		const parsedNb = parseFloat(value);
		if (!isNaN(value - parsedNb)) return new Date(parsedNb);
		let match;
		if (match = value.match(ISO8601_DATE_REGEX)) return isoStringToDate(match);
	}
	const date = new Date(value);
	if (!isDate(date)) throw new RuntimeError(2311, ngDevMode && `Unable to convert "${value}" into a date`);
	return date;
}
function isoStringToDate(match) {
	const date = /* @__PURE__ */ new Date(0);
	let tzHour = 0;
	let tzMin = 0;
	const dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
	const timeSetter = match[8] ? date.setUTCHours : date.setHours;
	if (match[9]) {
		tzHour = Number(match[9] + match[10]);
		tzMin = Number(match[9] + match[11]);
	}
	dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
	const h = Number(match[4] || 0) - tzHour;
	const m = Number(match[5] || 0) - tzMin;
	const s = Number(match[6] || 0);
	const ms = Math.floor(parseFloat("0." + (match[7] || 0)) * 1e3);
	timeSetter.call(date, h, m, s, ms);
	return date;
}
function isDate(value) {
	return value instanceof Date && !isNaN(value.valueOf());
}
var NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
var MAX_DIGITS = 22;
var DECIMAL_SEP = ".";
var ZERO_CHAR = "0";
var PATTERN_SEP = ";";
var GROUP_SEP = ",";
var DIGIT_CHAR = "#";
var CURRENCY_CHAR = "¤";
var PERCENT_CHAR = "%";
function formatNumberToLocaleString(value, pattern, locale, groupSymbol, decimalSymbol, digitsInfo, isPercent = false) {
	let formattedText = "";
	let isZero = false;
	if (!isFinite(value)) formattedText = getLocaleNumberSymbol(locale, Number.isNaN(value) ? NumberSymbol.NaN : NumberSymbol.Infinity);
	else {
		let parsedNumber = parseNumber(value);
		if (isPercent) parsedNumber = toPercent(parsedNumber);
		let minInt = pattern.minInt;
		let minFraction = pattern.minFrac;
		let maxFraction = pattern.maxFrac;
		if (digitsInfo) {
			const parts = digitsInfo.match(NUMBER_FORMAT_REGEXP);
			if (parts === null) throw new RuntimeError(2306, ngDevMode && `${digitsInfo} is not a valid digit info`);
			const minIntPart = parts[1];
			const minFractionPart = parts[3];
			const maxFractionPart = parts[5];
			if (minIntPart != null) minInt = parseIntAutoRadix(minIntPart);
			if (minFractionPart != null) minFraction = parseIntAutoRadix(minFractionPart);
			if (maxFractionPart != null) maxFraction = parseIntAutoRadix(maxFractionPart);
			else if (minFractionPart != null && minFraction > maxFraction) maxFraction = minFraction;
			const MAX_ALLOWED_DIGITS = 100;
			if (minInt > MAX_ALLOWED_DIGITS || minFraction > MAX_ALLOWED_DIGITS || maxFraction > MAX_ALLOWED_DIGITS) throw new RuntimeError(2306, ngDevMode && `${digitsInfo} is not a valid digit info. Exceeded maximum limits of ${MAX_ALLOWED_DIGITS} digits.`);
		}
		roundNumber(parsedNumber, minFraction, maxFraction);
		let digits = parsedNumber.digits;
		let integerLen = parsedNumber.integerLen;
		const exponent = parsedNumber.exponent;
		let decimals = [];
		isZero = digits.every((d) => !d);
		for (; integerLen < minInt; integerLen++) digits.unshift(0);
		for (; integerLen < 0; integerLen++) digits.unshift(0);
		if (integerLen > 0) decimals = digits.splice(integerLen, digits.length);
		else {
			decimals = digits;
			digits = [0];
		}
		const groups = [];
		if (digits.length >= pattern.lgSize) groups.unshift(digits.splice(-pattern.lgSize, digits.length).join(""));
		while (digits.length > pattern.gSize) groups.unshift(digits.splice(-pattern.gSize, digits.length).join(""));
		if (digits.length) groups.unshift(digits.join(""));
		formattedText = groups.join(getLocaleNumberSymbol(locale, groupSymbol));
		if (decimals.length) formattedText += getLocaleNumberSymbol(locale, decimalSymbol) + decimals.join("");
		if (exponent) formattedText += getLocaleNumberSymbol(locale, NumberSymbol.Exponential) + "+" + exponent;
	}
	if (value < 0 && !isZero) formattedText = pattern.negPre + formattedText + pattern.negSuf;
	else formattedText = pattern.posPre + formattedText + pattern.posSuf;
	return formattedText;
}
function formatCurrency(value, locale, currency, currencyCode, digitsInfo) {
	const pattern = parseNumberFormat(getLocaleNumberFormat(locale, NumberFormatStyle.Currency), getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
	pattern.minFrac = getNumberOfCurrencyDigits(currencyCode);
	pattern.maxFrac = pattern.minFrac;
	return formatNumberToLocaleString(value, pattern, locale, NumberSymbol.CurrencyGroup, NumberSymbol.CurrencyDecimal, digitsInfo).replace(CURRENCY_CHAR, currency).replace(CURRENCY_CHAR, "").trim();
}
function formatPercent(value, locale, digitsInfo) {
	return formatNumberToLocaleString(value, parseNumberFormat(getLocaleNumberFormat(locale, NumberFormatStyle.Percent), getLocaleNumberSymbol(locale, NumberSymbol.MinusSign)), locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo, true).replace(new RegExp(PERCENT_CHAR, "g"), getLocaleNumberSymbol(locale, NumberSymbol.PercentSign));
}
function formatNumber(value, locale, digitsInfo) {
	return formatNumberToLocaleString(value, parseNumberFormat(getLocaleNumberFormat(locale, NumberFormatStyle.Decimal), getLocaleNumberSymbol(locale, NumberSymbol.MinusSign)), locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo);
}
function parseNumberFormat(format, minusSign = "-") {
	const p = {
		minInt: 1,
		minFrac: 0,
		maxFrac: 0,
		posPre: "",
		posSuf: "",
		negPre: "",
		negSuf: "",
		gSize: 0,
		lgSize: 0
	};
	const patternParts = format.split(PATTERN_SEP);
	const positive = patternParts[0];
	const negative = patternParts[1];
	const positiveParts = positive.indexOf(DECIMAL_SEP) !== -1 ? positive.split(DECIMAL_SEP) : [positive.substring(0, positive.lastIndexOf(ZERO_CHAR) + 1), positive.substring(positive.lastIndexOf(ZERO_CHAR) + 1)], integer = positiveParts[0], fraction = positiveParts[1] || "";
	p.posPre = integer.substring(0, integer.indexOf(DIGIT_CHAR));
	for (let i = 0; i < fraction.length; i++) {
		const ch = fraction.charAt(i);
		if (ch === ZERO_CHAR) p.minFrac = p.maxFrac = i + 1;
		else if (ch === DIGIT_CHAR) p.maxFrac = i + 1;
		else p.posSuf += ch;
	}
	const groups = integer.split(GROUP_SEP);
	p.gSize = groups[1] ? groups[1].length : 0;
	p.lgSize = groups[2] || groups[1] ? (groups[2] || groups[1]).length : 0;
	if (negative) {
		const trunkLen = positive.length - p.posPre.length - p.posSuf.length, pos = negative.indexOf(DIGIT_CHAR);
		p.negPre = negative.substring(0, pos).replace(/'/g, "");
		p.negSuf = negative.slice(pos + trunkLen).replace(/'/g, "");
	} else {
		p.negPre = minusSign + p.posPre;
		p.negSuf = p.posSuf;
	}
	return p;
}
function toPercent(parsedNumber) {
	if (parsedNumber.digits[0] === 0) return parsedNumber;
	const fractionLen = parsedNumber.digits.length - parsedNumber.integerLen;
	if (parsedNumber.exponent) parsedNumber.exponent += 2;
	else {
		if (fractionLen === 0) parsedNumber.digits.push(0, 0);
		else if (fractionLen === 1) parsedNumber.digits.push(0);
		parsedNumber.integerLen += 2;
	}
	return parsedNumber;
}
function parseNumber(num) {
	let numStr = Math.abs(num) + "";
	let exponent = 0, digits, integerLen;
	let i, j, zeros;
	if ((integerLen = numStr.indexOf(DECIMAL_SEP)) > -1) numStr = numStr.replace(DECIMAL_SEP, "");
	if ((i = numStr.search(/e/i)) > 0) {
		if (integerLen < 0) integerLen = i;
		integerLen += +numStr.slice(i + 1);
		numStr = numStr.substring(0, i);
	} else if (integerLen < 0) integerLen = numStr.length;
	for (i = 0; numStr.charAt(i) === ZERO_CHAR; i++);
	if (i === (zeros = numStr.length)) {
		digits = [0];
		integerLen = 1;
	} else {
		zeros--;
		while (numStr.charAt(zeros) === ZERO_CHAR) zeros--;
		integerLen -= i;
		digits = [];
		for (j = 0; i <= zeros; i++, j++) digits[j] = Number(numStr.charAt(i));
	}
	if (integerLen > MAX_DIGITS) {
		digits = digits.splice(0, 21);
		exponent = integerLen - 1;
		integerLen = 1;
	}
	return {
		digits,
		exponent,
		integerLen
	};
}
function roundNumber(parsedNumber, minFrac, maxFrac) {
	if (minFrac > maxFrac) throw new RuntimeError(2307, ngDevMode && `The minimum number of digits after fraction (${minFrac}) is higher than the maximum (${maxFrac}).`);
	let digits = parsedNumber.digits;
	let fractionLen = digits.length - parsedNumber.integerLen;
	const fractionSize = Math.min(Math.max(minFrac, fractionLen), maxFrac);
	let roundAt = fractionSize + parsedNumber.integerLen;
	let digit = digits[roundAt];
	if (roundAt > 0) {
		digits.splice(Math.max(parsedNumber.integerLen, roundAt));
		for (let j = roundAt; j < digits.length; j++) digits[j] = 0;
	} else {
		fractionLen = Math.max(0, fractionLen);
		parsedNumber.integerLen = 1;
		digits.length = Math.max(1, roundAt = fractionSize + 1);
		digits[0] = 0;
		for (let i = 1; i < roundAt; i++) digits[i] = 0;
	}
	if (digit >= 5) {
		if (roundAt - 1 < 0) {
			for (let k = 0; k > roundAt; k--) {
				digits.unshift(0);
				parsedNumber.integerLen++;
			}
			digits.unshift(1);
			parsedNumber.integerLen++;
		} else digits[roundAt - 1]++;
	}
	for (; fractionLen < Math.max(0, fractionSize); fractionLen++) digits.push(0);
	let dropTrailingZeros = fractionSize !== 0;
	const minLen = minFrac + parsedNumber.integerLen;
	const carry = digits.reduceRight(function(carry, d, i, digits) {
		d = d + carry;
		digits[i] = d < 10 ? d : d - 10;
		if (dropTrailingZeros) {
			if (digits[i] === 0 && i >= minLen) digits.pop();
			else dropTrailingZeros = false;
		}
		return d >= 10 ? 1 : 0;
	}, 0);
	if (carry) {
		digits.unshift(carry);
		parsedNumber.integerLen++;
	}
}
function parseIntAutoRadix(text) {
	const result = parseInt(text);
	if (isNaN(result)) throw new RuntimeError(2305, ngDevMode && "Invalid integer literal when parsing " + text);
	return result;
}
var NgLocalization = class NgLocalization {
	static ɵfac = function NgLocalization_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgLocalization)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: NgLocalization,
		factory: () => (() => new NgLocaleLocalization(inject(LOCALE_ID)))()
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLocalization, [{
		type: Service,
		args: [{ factory: () => new NgLocaleLocalization(inject(LOCALE_ID)) }]
	}], null, null);
})();
function getPluralCategory(value, cases, ngLocalization, locale) {
	let key = `=${value}`;
	if (cases.indexOf(key) > -1) return key;
	key = ngLocalization.getPluralCategory(value, locale);
	if (cases.indexOf(key) > -1) return key;
	if (cases.indexOf("other") > -1) return "other";
	throw new RuntimeError(2308, ngDevMode && `No plural message found for value "${value}"`);
}
var NgLocaleLocalization = class NgLocaleLocalization extends NgLocalization {
	locale;
	constructor(locale) {
		super();
		this.locale = locale;
	}
	getPluralCategory(value, locale) {
		switch (getLocalePluralCase(locale || this.locale)(value)) {
			case Plural.Zero: return "zero";
			case Plural.One: return "one";
			case Plural.Two: return "two";
			case Plural.Few: return "few";
			case Plural.Many: return "many";
			default: return "other";
		}
	}
	static ɵfac = function NgLocaleLocalization_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgLocaleLocalization)(ɵɵinject(LOCALE_ID));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: NgLocaleLocalization,
		factory: NgLocaleLocalization.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLocaleLocalization, [{ type: Injectable }], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [LOCALE_ID]
		}]
	}], null);
})();
var WS_REGEXP = /\s+/;
var EMPTY_ARRAY = [];
var NgClass = class NgClass {
	_ngEl;
	_renderer;
	initialClasses = EMPTY_ARRAY;
	rawClass;
	stateMap = /* @__PURE__ */ new Map();
	constructor(_ngEl, _renderer) {
		this._ngEl = _ngEl;
		this._renderer = _renderer;
	}
	set klass(value) {
		this.initialClasses = value != null ? value.trim().split(WS_REGEXP) : EMPTY_ARRAY;
	}
	set ngClass(value) {
		this.rawClass = typeof value === "string" ? value.trim().split(WS_REGEXP) : value;
	}
	ngDoCheck() {
		for (const klass of this.initialClasses) this._updateState(klass, true);
		const rawClass = this.rawClass;
		if (Array.isArray(rawClass) || rawClass instanceof Set) for (const klass of rawClass) this._updateState(klass, true);
		else if (rawClass != null) for (const klass of Object.keys(rawClass)) this._updateState(klass, Boolean(rawClass[klass]));
		this._applyStateDiff();
	}
	_updateState(klass, nextEnabled) {
		const state = this.stateMap.get(klass);
		if (state !== void 0) {
			if (state.enabled !== nextEnabled) {
				state.changed = true;
				state.enabled = nextEnabled;
			}
			state.touched = true;
		} else this.stateMap.set(klass, {
			enabled: nextEnabled,
			changed: true,
			touched: true
		});
	}
	_applyStateDiff() {
		for (const stateEntry of this.stateMap) {
			const klass = stateEntry[0];
			const state = stateEntry[1];
			if (state.changed) {
				this._toggleClass(klass, state.enabled);
				state.changed = false;
			} else if (!state.touched) {
				if (state.enabled) this._toggleClass(klass, false);
				this.stateMap.delete(klass);
			}
			state.touched = false;
		}
	}
	_toggleClass(klass, enabled) {
		if (ngDevMode) {
			if (typeof klass !== "string") throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${stringify(klass)}`);
		}
		klass = klass.trim();
		if (klass.length > 0) klass.split(WS_REGEXP).forEach((klass) => {
			if (enabled) this._renderer.addClass(this._ngEl.nativeElement, klass);
			else this._renderer.removeClass(this._ngEl.nativeElement, klass);
		});
	}
	static ɵfac = function NgClass_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgClass)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgClass,
		selectors: [[
			"",
			"ngClass",
			""
		]],
		inputs: {
			klass: [
				0,
				"class",
				"klass"
			],
			ngClass: "ngClass"
		}
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgClass, [{
		type: Directive,
		args: [{ selector: "[ngClass]" }]
	}], () => [{ type: ElementRef }, { type: Renderer2 }], {
		klass: [{
			type: Input,
			args: ["class"]
		}],
		ngClass: [{
			type: Input,
			args: ["ngClass"]
		}]
	});
})();
var NgComponentOutlet = class NgComponentOutlet {
	_viewContainerRef;
	ngComponentOutlet = null;
	ngComponentOutletInputs;
	ngComponentOutletInjector;
	ngComponentOutletEnvironmentInjector;
	ngComponentOutletContent;
	ngComponentOutletNgModule;
	_componentRef;
	_moduleRef;
	_inputsUsed = /* @__PURE__ */ new Map();
	get componentInstance() {
		return this._componentRef?.instance ?? null;
	}
	constructor(_viewContainerRef) {
		this._viewContainerRef = _viewContainerRef;
	}
	_needToReCreateNgModuleInstance(changes) {
		return changes["ngComponentOutletNgModule"] !== void 0;
	}
	_needToReCreateComponentInstance(changes) {
		return changes["ngComponentOutlet"] !== void 0 || changes["ngComponentOutletContent"] !== void 0 || changes["ngComponentOutletInjector"] !== void 0 || changes["ngComponentOutletEnvironmentInjector"] !== void 0 || this._needToReCreateNgModuleInstance(changes);
	}
	ngOnChanges(changes) {
		if (this._needToReCreateComponentInstance(changes)) {
			this._viewContainerRef.clear();
			this._inputsUsed.clear();
			this._componentRef = void 0;
			if (this.ngComponentOutlet) {
				const injector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
				if (this._needToReCreateNgModuleInstance(changes)) {
					this._moduleRef?.destroy();
					if (this.ngComponentOutletNgModule) this._moduleRef = createNgModule(this.ngComponentOutletNgModule, getParentInjector(injector));
					else this._moduleRef = void 0;
				}
				this._componentRef = this._viewContainerRef.createComponent(this.ngComponentOutlet, {
					injector,
					ngModuleRef: this._moduleRef,
					projectableNodes: this.ngComponentOutletContent,
					environmentInjector: this.ngComponentOutletEnvironmentInjector
				});
			}
		}
	}
	ngDoCheck() {
		if (this._componentRef) {
			if (this.ngComponentOutletInputs) for (const inputName of Object.keys(this.ngComponentOutletInputs)) this._inputsUsed.set(inputName, true);
			this._applyInputStateDiff(this._componentRef);
		}
	}
	ngOnDestroy() {
		this._moduleRef?.destroy();
	}
	_applyInputStateDiff(componentRef) {
		for (const [inputName, touched] of this._inputsUsed) if (!touched) {
			componentRef.setInput(inputName, void 0);
			this._inputsUsed.delete(inputName);
		} else {
			componentRef.setInput(inputName, this.ngComponentOutletInputs[inputName]);
			this._inputsUsed.set(inputName, false);
		}
	}
	static ɵfac = function NgComponentOutlet_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgComponentOutlet)(ɵɵdirectiveInject(ViewContainerRef));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgComponentOutlet,
		selectors: [[
			"",
			"ngComponentOutlet",
			""
		]],
		inputs: {
			ngComponentOutlet: "ngComponentOutlet",
			ngComponentOutletInputs: "ngComponentOutletInputs",
			ngComponentOutletInjector: "ngComponentOutletInjector",
			ngComponentOutletEnvironmentInjector: "ngComponentOutletEnvironmentInjector",
			ngComponentOutletContent: "ngComponentOutletContent",
			ngComponentOutletNgModule: "ngComponentOutletNgModule"
		},
		exportAs: ["ngComponentOutlet"],
		features: [ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgComponentOutlet, [{
		type: Directive,
		args: [{
			selector: "[ngComponentOutlet]",
			exportAs: "ngComponentOutlet"
		}]
	}], () => [{ type: ViewContainerRef }], {
		ngComponentOutlet: [{ type: Input }],
		ngComponentOutletInputs: [{ type: Input }],
		ngComponentOutletInjector: [{ type: Input }],
		ngComponentOutletEnvironmentInjector: [{ type: Input }],
		ngComponentOutletContent: [{ type: Input }],
		ngComponentOutletNgModule: [{ type: Input }]
	});
})();
function getParentInjector(injector) {
	return injector.get(NgModuleRef$1).injector;
}
var NgForOfContext = class {
	$implicit;
	ngForOf;
	index;
	count;
	constructor($implicit, ngForOf, index, count) {
		this.$implicit = $implicit;
		this.ngForOf = ngForOf;
		this.index = index;
		this.count = count;
	}
	get first() {
		return this.index === 0;
	}
	get last() {
		return this.index === this.count - 1;
	}
	get even() {
		return this.index % 2 === 0;
	}
	get odd() {
		return !this.even;
	}
};
var NgForOf = class NgForOf {
	_viewContainer;
	_template;
	_differs;
	set ngForOf(ngForOf) {
		this._ngForOf = ngForOf;
		this._ngForOfDirty = true;
	}
	set ngForTrackBy(fn) {
		if ((typeof ngDevMode === "undefined" || ngDevMode) && fn != null && typeof fn !== "function") console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}. See https://angular.dev/api/common/NgForOf#change-propagation for more information.`);
		this._trackByFn = fn;
	}
	get ngForTrackBy() {
		return this._trackByFn;
	}
	_ngForOf = null;
	_ngForOfDirty = true;
	_differ = null;
	_trackByFn;
	constructor(_viewContainer, _template, _differs) {
		this._viewContainer = _viewContainer;
		this._template = _template;
		this._differs = _differs;
	}
	set ngForTemplate(value) {
		if (value) this._template = value;
	}
	ngDoCheck() {
		if (this._ngForOfDirty) {
			this._ngForOfDirty = false;
			const value = this._ngForOf;
			if (!this._differ && value) {
				if (typeof ngDevMode === "undefined" || ngDevMode) try {
					this._differ = this._differs.find(value).create(this.ngForTrackBy);
				} catch {
					let errorMessage = `Cannot find a differ supporting object '${value}' of type '${getTypeName(value)}'. NgFor only supports binding to Iterables, such as Arrays.`;
					if (typeof value === "object") errorMessage += " Did you mean to use the keyvalue pipe?";
					throw new RuntimeError(-2200, errorMessage);
				}
				else this._differ = this._differs.find(value).create(this.ngForTrackBy);
			}
		}
		if (this._differ) {
			const changes = this._differ.diff(this._ngForOf);
			if (changes) this._applyChanges(changes);
		}
	}
	_applyChanges(changes) {
		const viewContainer = this._viewContainer;
		changes.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
			if (item.previousIndex == null) viewContainer.createEmbeddedView(this._template, new NgForOfContext(item.item, this._ngForOf, -1, -1), currentIndex === null ? void 0 : currentIndex);
			else if (currentIndex == null) viewContainer.remove(adjustedPreviousIndex === null ? void 0 : adjustedPreviousIndex);
			else if (adjustedPreviousIndex !== null) {
				const view = viewContainer.get(adjustedPreviousIndex);
				viewContainer.move(view, currentIndex);
				applyViewChange(view, item);
			}
		});
		for (let i = 0, ilen = viewContainer.length; i < ilen; i++) {
			const context = viewContainer.get(i).context;
			context.index = i;
			context.count = ilen;
			context.ngForOf = this._ngForOf;
		}
		changes.forEachIdentityChange((record) => {
			applyViewChange(viewContainer.get(record.currentIndex), record);
		});
	}
	static ngTemplateContextGuard(dir, ctx) {
		return true;
	}
	static ɵfac = function NgForOf_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgForOf)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(IterableDiffers));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgForOf,
		selectors: [[
			"",
			"ngFor",
			"",
			"ngForOf",
			""
		]],
		inputs: {
			ngForOf: "ngForOf",
			ngForTrackBy: "ngForTrackBy",
			ngForTemplate: "ngForTemplate"
		}
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForOf, [{
		type: Directive,
		args: [{ selector: "[ngFor][ngForOf]" }]
	}], () => [
		{ type: ViewContainerRef },
		{ type: TemplateRef },
		{ type: IterableDiffers }
	], {
		ngForOf: [{ type: Input }],
		ngForTrackBy: [{ type: Input }],
		ngForTemplate: [{ type: Input }]
	});
})();
function applyViewChange(view, record) {
	view.context.$implicit = record.item;
}
function getTypeName(type) {
	return type["name"] || typeof type;
}
var NgIf = class NgIf {
	_viewContainer;
	_context = new NgIfContext();
	_thenTemplateRef = null;
	_elseTemplateRef = null;
	_thenViewRef = null;
	_elseViewRef = null;
	constructor(_viewContainer, templateRef) {
		this._viewContainer = _viewContainer;
		this._thenTemplateRef = templateRef;
	}
	set ngIf(condition) {
		this._context.$implicit = this._context.ngIf = condition;
		this._updateView();
	}
	set ngIfThen(templateRef) {
		assertTemplate(templateRef, (typeof ngDevMode === "undefined" || ngDevMode) && "ngIfThen");
		this._thenTemplateRef = templateRef;
		this._thenViewRef = null;
		this._updateView();
	}
	set ngIfElse(templateRef) {
		assertTemplate(templateRef, (typeof ngDevMode === "undefined" || ngDevMode) && "ngIfElse");
		this._elseTemplateRef = templateRef;
		this._elseViewRef = null;
		this._updateView();
	}
	_updateView() {
		if (this._context.$implicit) {
			if (!this._thenViewRef) {
				this._viewContainer.clear();
				this._elseViewRef = null;
				if (this._thenTemplateRef) this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
			}
		} else if (!this._elseViewRef) {
			this._viewContainer.clear();
			this._thenViewRef = null;
			if (this._elseTemplateRef) this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
		}
	}
	static ngIfUseIfTypeGuard;
	static ngTemplateGuard_ngIf;
	static ngTemplateContextGuard(dir, ctx) {
		return true;
	}
	static ɵfac = function NgIf_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgIf)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgIf,
		selectors: [[
			"",
			"ngIf",
			""
		]],
		inputs: {
			ngIf: "ngIf",
			ngIfThen: "ngIfThen",
			ngIfElse: "ngIfElse"
		}
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgIf, [{
		type: Directive,
		args: [{ selector: "[ngIf]" }]
	}], () => [{ type: ViewContainerRef }, { type: TemplateRef }], {
		ngIf: [{ type: Input }],
		ngIfThen: [{ type: Input }],
		ngIfElse: [{ type: Input }]
	});
})();
var NgIfContext = class {
	$implicit = null;
	ngIf = null;
};
function assertTemplate(templateRef, property) {
	if (templateRef && !templateRef.createEmbeddedView) throw new RuntimeError(2020, (typeof ngDevMode === "undefined" || ngDevMode) && `${property} must be a TemplateRef, but received '${stringify(templateRef)}'.`);
}
var SwitchView = class {
	_viewContainerRef;
	_templateRef;
	_created = false;
	constructor(_viewContainerRef, _templateRef) {
		this._viewContainerRef = _viewContainerRef;
		this._templateRef = _templateRef;
	}
	create() {
		this._created = true;
		this._viewContainerRef.createEmbeddedView(this._templateRef);
	}
	destroy() {
		this._created = false;
		this._viewContainerRef.clear();
	}
	enforceState(created) {
		if (created && !this._created) this.create();
		else if (!created && this._created) this.destroy();
	}
};
var NgSwitch = class NgSwitch {
	_defaultViews = [];
	_defaultUsed = false;
	_caseCount = 0;
	_lastCaseCheckIndex = 0;
	_lastCasesMatched = false;
	_ngSwitch;
	set ngSwitch(newValue) {
		this._ngSwitch = newValue;
		if (this._caseCount === 0) this._updateDefaultCases(true);
	}
	_addCase() {
		return this._caseCount++;
	}
	_addDefault(view) {
		this._defaultViews.push(view);
	}
	_matchCase(value) {
		const matched = value === this._ngSwitch;
		this._lastCasesMatched ||= matched;
		this._lastCaseCheckIndex++;
		if (this._lastCaseCheckIndex === this._caseCount) {
			this._updateDefaultCases(!this._lastCasesMatched);
			this._lastCaseCheckIndex = 0;
			this._lastCasesMatched = false;
		}
		return matched;
	}
	_updateDefaultCases(useDefault) {
		if (this._defaultViews.length > 0 && useDefault !== this._defaultUsed) {
			this._defaultUsed = useDefault;
			for (const defaultView of this._defaultViews) defaultView.enforceState(useDefault);
		}
	}
	static ɵfac = function NgSwitch_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgSwitch)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgSwitch,
		selectors: [[
			"",
			"ngSwitch",
			""
		]],
		inputs: { ngSwitch: "ngSwitch" }
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSwitch, [{
		type: Directive,
		args: [{ selector: "[ngSwitch]" }]
	}], null, { ngSwitch: [{ type: Input }] });
})();
var NgSwitchCase = class NgSwitchCase {
	ngSwitch;
	_view;
	ngSwitchCase;
	constructor(viewContainer, templateRef, ngSwitch) {
		this.ngSwitch = ngSwitch;
		if ((typeof ngDevMode === "undefined" || ngDevMode) && !ngSwitch) throwNgSwitchProviderNotFoundError("ngSwitchCase", "NgSwitchCase");
		ngSwitch._addCase();
		this._view = new SwitchView(viewContainer, templateRef);
	}
	ngDoCheck() {
		this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
	}
	static ɵfac = function NgSwitchCase_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgSwitchCase)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(NgSwitch, 9));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgSwitchCase,
		selectors: [[
			"",
			"ngSwitchCase",
			""
		]],
		inputs: { ngSwitchCase: "ngSwitchCase" }
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSwitchCase, [{
		type: Directive,
		args: [{ selector: "[ngSwitchCase]" }]
	}], () => [
		{ type: ViewContainerRef },
		{ type: TemplateRef },
		{
			type: NgSwitch,
			decorators: [{ type: Optional }, { type: Host }]
		}
	], { ngSwitchCase: [{ type: Input }] });
})();
var NgSwitchDefault = class NgSwitchDefault {
	constructor(viewContainer, templateRef, ngSwitch) {
		if ((typeof ngDevMode === "undefined" || ngDevMode) && !ngSwitch) throwNgSwitchProviderNotFoundError("ngSwitchDefault", "NgSwitchDefault");
		ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
	}
	static ɵfac = function NgSwitchDefault_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgSwitchDefault)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(NgSwitch, 9));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgSwitchDefault,
		selectors: [[
			"",
			"ngSwitchDefault",
			""
		]]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSwitchDefault, [{
		type: Directive,
		args: [{ selector: "[ngSwitchDefault]" }]
	}], () => [
		{ type: ViewContainerRef },
		{ type: TemplateRef },
		{
			type: NgSwitch,
			decorators: [{ type: Optional }, { type: Host }]
		}
	], null);
})();
function throwNgSwitchProviderNotFoundError(attrName, directiveName) {
	throw new RuntimeError(2e3, `An element with the "${attrName}" attribute (matching the "${directiveName}" directive) must be located inside an element with the "ngSwitch" attribute (matching "NgSwitch" directive)`);
}
var NgPlural = class NgPlural {
	_localization;
	_activeView;
	_caseViews = {};
	constructor(_localization) {
		this._localization = _localization;
	}
	set ngPlural(value) {
		this._updateView(value);
	}
	addCase(value, switchView) {
		this._caseViews[value] = switchView;
	}
	_updateView(switchValue) {
		this._clearViews();
		const key = getPluralCategory(switchValue, Object.keys(this._caseViews), this._localization);
		this._activateView(this._caseViews[key]);
	}
	_clearViews() {
		if (this._activeView) this._activeView.destroy();
	}
	_activateView(view) {
		if (view) {
			this._activeView = view;
			this._activeView.create();
		}
	}
	static ɵfac = function NgPlural_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgPlural)(ɵɵdirectiveInject(NgLocalization));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgPlural,
		selectors: [[
			"",
			"ngPlural",
			""
		]],
		inputs: { ngPlural: "ngPlural" }
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgPlural, [{
		type: Directive,
		args: [{ selector: "[ngPlural]" }]
	}], () => [{ type: NgLocalization }], { ngPlural: [{ type: Input }] });
})();
var NgPluralCase = class NgPluralCase {
	value;
	constructor(value, template, viewContainer, ngPlural) {
		this.value = value;
		const isANumber = !isNaN(Number(value));
		ngPlural.addCase(isANumber ? `=${value}` : value, new SwitchView(viewContainer, template));
	}
	static ɵfac = function NgPluralCase_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgPluralCase)(ɵɵinjectAttribute("ngPluralCase"), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(NgPlural, 1));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgPluralCase,
		selectors: [[
			"",
			"ngPluralCase",
			""
		]]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgPluralCase, [{
		type: Directive,
		args: [{ selector: "[ngPluralCase]" }]
	}], () => [
		{
			type: void 0,
			decorators: [{
				type: Attribute,
				args: ["ngPluralCase"]
			}]
		},
		{ type: TemplateRef },
		{ type: ViewContainerRef },
		{
			type: NgPlural,
			decorators: [{ type: Host }]
		}
	], null);
})();
var NgStyle = class NgStyle {
	_ngEl;
	_differs;
	_renderer;
	_ngStyle = null;
	_differ = null;
	constructor(_ngEl, _differs, _renderer) {
		this._ngEl = _ngEl;
		this._differs = _differs;
		this._renderer = _renderer;
	}
	set ngStyle(values) {
		this._ngStyle = values;
		if (!this._differ && values) this._differ = this._differs.find(values).create();
	}
	ngDoCheck() {
		if (this._differ) {
			const changes = this._differ.diff(this._ngStyle);
			if (changes) this._applyChanges(changes);
		}
	}
	_setStyle(nameAndUnit, value) {
		const [name, unit] = nameAndUnit.split(".");
		const flags = name.indexOf("-") === -1 ? void 0 : RendererStyleFlags2.DashCase;
		if (value != null) this._renderer.setStyle(this._ngEl.nativeElement, name, unit ? `${value}${unit}` : value, flags);
		else this._renderer.removeStyle(this._ngEl.nativeElement, name, flags);
	}
	_applyChanges(changes) {
		changes.forEachRemovedItem((record) => this._setStyle(record.key, null));
		changes.forEachAddedItem((record) => this._setStyle(record.key, record.currentValue));
		changes.forEachChangedItem((record) => this._setStyle(record.key, record.currentValue));
	}
	static ɵfac = function NgStyle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgStyle)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(Renderer2));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgStyle,
		selectors: [[
			"",
			"ngStyle",
			""
		]],
		inputs: { ngStyle: "ngStyle" }
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgStyle, [{
		type: Directive,
		args: [{ selector: "[ngStyle]" }]
	}], () => [
		{ type: ElementRef },
		{ type: KeyValueDiffers },
		{ type: Renderer2 }
	], { ngStyle: [{
		type: Input,
		args: ["ngStyle"]
	}] });
})();
var NgTemplateOutlet = class NgTemplateOutlet {
	_viewContainerRef;
	_viewRef = null;
	ngTemplateOutletContext = null;
	ngTemplateOutlet = null;
	ngTemplateOutletInjector = null;
	injector = inject(Injector);
	constructor(_viewContainerRef) {
		this._viewContainerRef = _viewContainerRef;
	}
	ngOnChanges(changes) {
		if (this._shouldRecreateView(changes)) {
			const viewContainerRef = this._viewContainerRef;
			if (this._viewRef) viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
			if (!this.ngTemplateOutlet) {
				this._viewRef = null;
				return;
			}
			const viewContext = this._createContextForwardProxy();
			this._viewRef = viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, viewContext, { injector: this._getInjector() });
		}
	}
	_getInjector() {
		if (this.ngTemplateOutletInjector === "outlet") return this.injector;
		return this.ngTemplateOutletInjector ?? void 0;
	}
	_shouldRecreateView(changes) {
		return !!changes["ngTemplateOutlet"] || !!changes["ngTemplateOutletInjector"];
	}
	_createContextForwardProxy() {
		return new Proxy({}, {
			set: (_target, prop, newValue) => {
				if (!this.ngTemplateOutletContext) return false;
				return Reflect.set(this.ngTemplateOutletContext, prop, newValue);
			},
			get: (_target, prop, receiver) => {
				if (!this.ngTemplateOutletContext) return;
				return Reflect.get(this.ngTemplateOutletContext, prop, receiver);
			}
		});
	}
	static ɵfac = function NgTemplateOutlet_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgTemplateOutlet)(ɵɵdirectiveInject(ViewContainerRef));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgTemplateOutlet,
		selectors: [[
			"",
			"ngTemplateOutlet",
			""
		]],
		inputs: {
			ngTemplateOutletContext: "ngTemplateOutletContext",
			ngTemplateOutlet: "ngTemplateOutlet",
			ngTemplateOutletInjector: "ngTemplateOutletInjector"
		},
		features: [ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgTemplateOutlet, [{
		type: Directive,
		args: [{ selector: "[ngTemplateOutlet]" }]
	}], () => [{ type: ViewContainerRef }], {
		ngTemplateOutletContext: [{ type: Input }],
		ngTemplateOutlet: [{ type: Input }],
		ngTemplateOutletInjector: [{ type: Input }]
	});
})();
var COMMON_DIRECTIVES = [
	NgClass,
	NgComponentOutlet,
	NgForOf,
	NgIf,
	NgTemplateOutlet,
	NgStyle,
	NgSwitch,
	NgSwitchCase,
	NgSwitchDefault,
	NgPlural,
	NgPluralCase
];
function invalidPipeArgumentError(type, value) {
	return new RuntimeError(2100, ngDevMode && `InvalidPipeArgument: '${value}' for pipe '${stringify(type)}'`);
}
function warnIfSignal(pipeName, value) {
	if (isSignal(value)) console.warn(`The ${pipeName} does not unwrap signals. Received a signal with value:`, value());
}
var SubscribableStrategy = class {
	createSubscription(async, updateLatestValue, onError) {
		return untracked(() => async.subscribe({
			next: updateLatestValue,
			error: onError
		}));
	}
	dispose(subscription) {
		untracked(() => subscription.unsubscribe());
	}
};
var PromiseStrategy = class {
	createSubscription(async, updateLatestValue, onError) {
		async.then((v) => updateLatestValue?.(v), (e) => onError?.(e));
		return { unsubscribe: () => {
			updateLatestValue = null;
			onError = null;
		} };
	}
	dispose(subscription) {
		subscription.unsubscribe();
	}
};
var _promiseStrategy = new PromiseStrategy();
var _subscribableStrategy = new SubscribableStrategy();
var AsyncPipe = class AsyncPipe {
	_ref;
	_latestValue = null;
	markForCheckOnValueUpdate = true;
	_subscription = null;
	_obj = null;
	_strategy = null;
	applicationErrorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
	constructor(ref) {
		this._ref = ref;
	}
	ngOnDestroy() {
		if (this._subscription) this._dispose();
		this._ref = null;
	}
	transform(obj) {
		if (!this._obj) {
			if (obj) try {
				this.markForCheckOnValueUpdate = false;
				this._subscribe(obj);
			} finally {
				this.markForCheckOnValueUpdate = true;
			}
			return this._latestValue;
		}
		if (obj !== this._obj) {
			this._dispose();
			return this.transform(obj);
		}
		return this._latestValue;
	}
	_subscribe(obj) {
		this._obj = obj;
		this._strategy = this._selectStrategy(obj);
		this._subscription = this._strategy.createSubscription(obj, (value) => this._updateLatestValue(obj, value), (e) => this.applicationErrorHandler(e));
	}
	_selectStrategy(obj) {
		if (isPromise(obj)) return _promiseStrategy;
		if (isSubscribable(obj)) return _subscribableStrategy;
		throw invalidPipeArgumentError(AsyncPipe, obj);
	}
	_dispose() {
		this._strategy.dispose(this._subscription);
		this._latestValue = null;
		this._subscription = null;
		this._obj = null;
	}
	_updateLatestValue(async, value) {
		if (async === this._obj) {
			this._latestValue = value;
			if (this.markForCheckOnValueUpdate) this._ref?.markForCheck();
		}
	}
	static ɵfac = function AsyncPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AsyncPipe)(ɵɵdirectiveInject(ChangeDetectorRef, 16));
	};
	static ɵpipe = /*@__PURE__*/ ɵɵdefinePipe({
		name: "async",
		type: AsyncPipe,
		pure: false
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncPipe, [{
		type: Pipe,
		args: [{
			name: "async",
			pure: false
		}]
	}], () => [{ type: ChangeDetectorRef }], null);
})();
var LowerCasePipe = class LowerCasePipe {
	transform(value) {
		if (value == null) return null;
		assertPipeArgument(LowerCasePipe, value);
		return value.toLowerCase();
	}
	static ɵfac = function LowerCasePipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || LowerCasePipe)();
	};
	static ɵpipe = /*@__PURE__*/ ɵɵdefinePipe({
		name: "lowercase",
		type: LowerCasePipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LowerCasePipe, [{
		type: Pipe,
		args: [{ name: "lowercase" }]
	}], null, null);
})();
var unicodeWordMatch = /(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;
var TitleCasePipe = class TitleCasePipe {
	transform(value) {
		if (value == null) return null;
		assertPipeArgument(TitleCasePipe, value);
		return value.replace(unicodeWordMatch, (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase());
	}
	static ɵfac = function TitleCasePipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || TitleCasePipe)();
	};
	static ɵpipe = /*@__PURE__*/ ɵɵdefinePipe({
		name: "titlecase",
		type: TitleCasePipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleCasePipe, [{
		type: Pipe,
		args: [{ name: "titlecase" }]
	}], null, null);
})();
var UpperCasePipe = class UpperCasePipe {
	transform(value) {
		if (value == null) return null;
		assertPipeArgument(UpperCasePipe, value);
		return value.toUpperCase();
	}
	static ɵfac = function UpperCasePipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || UpperCasePipe)();
	};
	static ɵpipe = /*@__PURE__*/ ɵɵdefinePipe({
		name: "uppercase",
		type: UpperCasePipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpperCasePipe, [{
		type: Pipe,
		args: [{ name: "uppercase" }]
	}], null, null);
})();
function assertPipeArgument(pipe, value) {
	if (typeof value !== "string") throw invalidPipeArgumentError(pipe, value);
}
var DEFAULT_DATE_FORMAT = "mediumDate";
var DATE_PIPE_DEFAULT_TIMEZONE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "DATE_PIPE_DEFAULT_TIMEZONE" : "");
var DATE_PIPE_DEFAULT_OPTIONS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "DATE_PIPE_DEFAULT_OPTIONS" : "");
var DatePipe = class DatePipe {
	locale;
	defaultTimezone;
	defaultOptions;
	constructor(locale, defaultTimezone, defaultOptions) {
		this.locale = locale;
		this.defaultTimezone = defaultTimezone;
		this.defaultOptions = defaultOptions;
	}
	transform(value, format, timezone, locale) {
		if (value == null || value === "" || value !== value) return null;
		try {
			const _format = format ?? this.defaultOptions?.dateFormat ?? DEFAULT_DATE_FORMAT;
			const _timezone = timezone ?? this.defaultOptions?.timezone ?? this.defaultTimezone ?? void 0;
			return formatDate(value, _format, locale || this.locale, _timezone);
		} catch (error) {
			throw invalidPipeArgumentError(DatePipe, error.message);
		}
	}
	static ɵfac = function DatePipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DatePipe)(ɵɵdirectiveInject(LOCALE_ID, 16), ɵɵdirectiveInject(DATE_PIPE_DEFAULT_TIMEZONE, 24), ɵɵdirectiveInject(DATE_PIPE_DEFAULT_OPTIONS, 24));
	};
	static ɵpipe = /*@__PURE__*/ ɵɵdefinePipe({
		name: "date",
		type: DatePipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePipe, [{
		type: Pipe,
		args: [{ name: "date" }]
	}], () => [
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [LOCALE_ID]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [DATE_PIPE_DEFAULT_TIMEZONE]
			}, { type: Optional }]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [DATE_PIPE_DEFAULT_OPTIONS]
			}, { type: Optional }]
		}
	], null);
})();
var _INTERPOLATION_REGEXP = /#/g;
var I18nPluralPipe = class I18nPluralPipe {
	_localization;
	constructor(_localization) {
		this._localization = _localization;
	}
	transform(value, pluralMap, locale) {
		if (value == null) return "";
		if (typeof pluralMap !== "object" || pluralMap === null) throw invalidPipeArgumentError(I18nPluralPipe, pluralMap);
		return pluralMap[getPluralCategory(value, Object.keys(pluralMap), this._localization, locale)].replace(_INTERPOLATION_REGEXP, value.toString());
	}
	static ɵfac = function I18nPluralPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || I18nPluralPipe)(ɵɵdirectiveInject(NgLocalization, 16));
	};
	static ɵpipe = /*@__PURE__*/ ɵɵdefinePipe({
		name: "i18nPlural",
		type: I18nPluralPipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nPluralPipe, [{
		type: Pipe,
		args: [{ name: "i18nPlural" }]
	}], () => [{ type: NgLocalization }], null);
})();
var I18nSelectPipe = class I18nSelectPipe {
	transform(value, mapping) {
		if (value == null) return "";
		if (typeof mapping !== "object" || typeof value !== "string") throw invalidPipeArgumentError(I18nSelectPipe, mapping);
		if (Object.hasOwn(mapping, value)) return mapping[value];
		if (Object.hasOwn(mapping, "other")) return mapping["other"];
		return "";
	}
	static ɵfac = function I18nSelectPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || I18nSelectPipe)();
	};
	static ɵpipe = /*@__PURE__*/ ɵɵdefinePipe({
		name: "i18nSelect",
		type: I18nSelectPipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nSelectPipe, [{
		type: Pipe,
		args: [{ name: "i18nSelect" }]
	}], null, null);
})();
var JsonPipe = class JsonPipe {
	transform(value) {
		ngDevMode && warnIfSignal("JsonPipe", value);
		return JSON.stringify(value, null, 2);
	}
	static ɵfac = function JsonPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || JsonPipe)();
	};
	static ɵpipe = /*@__PURE__*/ ɵɵdefinePipe({
		name: "json",
		type: JsonPipe,
		pure: false
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonPipe, [{
		type: Pipe,
		args: [{
			name: "json",
			pure: false
		}]
	}], null, null);
})();
function makeKeyValuePair(key, value) {
	return {
		key,
		value
	};
}
var KeyValuePipe = class KeyValuePipe {
	differs;
	constructor(differs) {
		this.differs = differs;
	}
	differ;
	keyValues = [];
	compareFn = defaultComparator;
	transform(input, compareFn = defaultComparator) {
		ngDevMode && warnIfSignal("KeyValuePipe", input);
		if (!input || !(input instanceof Map) && typeof input !== "object") return null;
		this.differ ??= this.differs.find(input).create();
		const differChanges = this.differ.diff(input);
		const compareFnChanged = compareFn !== this.compareFn;
		if (differChanges || compareFnChanged) {
			this.keyValues = [];
			if (differChanges) differChanges.forEachItem((r) => {
				this.keyValues.push(makeKeyValuePair(r.key, r.currentValue));
			});
			else if (input instanceof Map) input.forEach((value, key) => this.keyValues.push(makeKeyValuePair(key, value)));
			else for (const key of Object.keys(input)) this.keyValues.push(makeKeyValuePair(key, input[key]));
			if (compareFn) this.keyValues.sort(compareFn);
			this.compareFn = compareFn;
		}
		return this.keyValues;
	}
	static ɵfac = function KeyValuePipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || KeyValuePipe)(ɵɵdirectiveInject(KeyValueDiffers, 16));
	};
	static ɵpipe = /*@__PURE__*/ ɵɵdefinePipe({
		name: "keyvalue",
		type: KeyValuePipe,
		pure: false
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyValuePipe, [{
		type: Pipe,
		args: [{
			name: "keyvalue",
			pure: false
		}]
	}], () => [{ type: KeyValueDiffers }], null);
})();
function defaultComparator(keyValueA, keyValueB) {
	const a = keyValueA.key;
	const b = keyValueB.key;
	if (a === b) return 0;
	if (a == null) return 1;
	if (b == null) return -1;
	if (typeof a == "string" && typeof b == "string") return a < b ? -1 : 1;
	if (typeof a == "number" && typeof b == "number") return a - b;
	if (typeof a == "boolean" && typeof b == "boolean") return a < b ? -1 : 1;
	const aString = String(a);
	const bString = String(b);
	return aString == bString ? 0 : aString < bString ? -1 : 1;
}
var DecimalPipe = class DecimalPipe {
	_locale;
	constructor(_locale) {
		this._locale = _locale;
	}
	transform(value, digitsInfo, locale) {
		if (!isValue(value)) return null;
		locale ||= this._locale;
		try {
			return formatNumber(strToNumber(value), locale, digitsInfo);
		} catch (error) {
			throw invalidPipeArgumentError(DecimalPipe, error.message);
		}
	}
	static ɵfac = function DecimalPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DecimalPipe)(ɵɵdirectiveInject(LOCALE_ID, 16));
	};
	static ɵpipe = /*@__PURE__*/ ɵɵdefinePipe({
		name: "number",
		type: DecimalPipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DecimalPipe, [{
		type: Pipe,
		args: [{ name: "number" }]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [LOCALE_ID]
		}]
	}], null);
})();
var PercentPipe = class PercentPipe {
	_locale;
	constructor(_locale) {
		this._locale = _locale;
	}
	transform(value, digitsInfo, locale) {
		if (!isValue(value)) return null;
		locale ||= this._locale;
		try {
			return formatPercent(strToNumber(value), locale, digitsInfo);
		} catch (error) {
			throw invalidPipeArgumentError(PercentPipe, error.message);
		}
	}
	static ɵfac = function PercentPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PercentPipe)(ɵɵdirectiveInject(LOCALE_ID, 16));
	};
	static ɵpipe = /*@__PURE__*/ ɵɵdefinePipe({
		name: "percent",
		type: PercentPipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PercentPipe, [{
		type: Pipe,
		args: [{ name: "percent" }]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [LOCALE_ID]
		}]
	}], null);
})();
var CurrencyPipe = class CurrencyPipe {
	_locale;
	_defaultCurrencyCode;
	constructor(_locale, _defaultCurrencyCode = "USD") {
		this._locale = _locale;
		this._defaultCurrencyCode = _defaultCurrencyCode;
	}
	transform(value, currencyCode = this._defaultCurrencyCode, display = "symbol", digitsInfo, locale) {
		if (!isValue(value)) return null;
		locale ||= this._locale;
		if (typeof display === "boolean") {
			if (typeof ngDevMode === "undefined" || ngDevMode) console.warn(`Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".`);
			display = display ? "symbol" : "code";
		}
		let currency = currencyCode || this._defaultCurrencyCode;
		if (display !== "code") {
			if (display === "symbol" || display === "symbol-narrow") currency = getCurrencySymbol(currency, display === "symbol" ? "wide" : "narrow", locale);
			else currency = display;
		}
		try {
			return formatCurrency(strToNumber(value), locale, currency, currencyCode, digitsInfo);
		} catch (error) {
			throw invalidPipeArgumentError(CurrencyPipe, error.message);
		}
	}
	static ɵfac = function CurrencyPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || CurrencyPipe)(ɵɵdirectiveInject(LOCALE_ID, 16), ɵɵdirectiveInject(DEFAULT_CURRENCY_CODE, 16));
	};
	static ɵpipe = /*@__PURE__*/ ɵɵdefinePipe({
		name: "currency",
		type: CurrencyPipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencyPipe, [{
		type: Pipe,
		args: [{ name: "currency" }]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [LOCALE_ID]
		}]
	}, {
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DEFAULT_CURRENCY_CODE]
		}]
	}], null);
})();
function isValue(value) {
	return !(value == null || value === "" || value !== value);
}
function strToNumber(value) {
	if (typeof value === "string" && !isNaN(Number(value) - parseFloat(value))) return Number(value);
	if (typeof value !== "number") throw new RuntimeError(2309, ngDevMode && `${value} is not a number`);
	return value;
}
var SlicePipe = class SlicePipe {
	transform(value, start, end) {
		if (value == null) return null;
		if (!(typeof value === "string" || Array.isArray(value))) throw invalidPipeArgumentError(SlicePipe, value);
		return value.slice(start, end);
	}
	static ɵfac = function SlicePipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || SlicePipe)();
	};
	static ɵpipe = /*@__PURE__*/ ɵɵdefinePipe({
		name: "slice",
		type: SlicePipe,
		pure: false
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlicePipe, [{
		type: Pipe,
		args: [{
			name: "slice",
			pure: false
		}]
	}], null, null);
})();
var COMMON_PIPES = [
	AsyncPipe,
	UpperCasePipe,
	LowerCasePipe,
	JsonPipe,
	SlicePipe,
	DecimalPipe,
	PercentPipe,
	TitleCasePipe,
	CurrencyPipe,
	DatePipe,
	I18nPluralPipe,
	I18nSelectPipe,
	KeyValuePipe
];
var CommonModule = class CommonModule {
	static ɵfac = function CommonModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || CommonModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: CommonModule,
		imports: [
			NgClass,
			NgComponentOutlet,
			NgForOf,
			NgIf,
			NgTemplateOutlet,
			NgStyle,
			NgSwitch,
			NgSwitchCase,
			NgSwitchDefault,
			NgPlural,
			NgPluralCase,
			AsyncPipe,
			UpperCasePipe,
			LowerCasePipe,
			JsonPipe,
			SlicePipe,
			DecimalPipe,
			PercentPipe,
			TitleCasePipe,
			CurrencyPipe,
			DatePipe,
			I18nPluralPipe,
			I18nSelectPipe,
			KeyValuePipe
		],
		exports: [
			NgClass,
			NgComponentOutlet,
			NgForOf,
			NgIf,
			NgTemplateOutlet,
			NgStyle,
			NgSwitch,
			NgSwitchCase,
			NgSwitchDefault,
			NgPlural,
			NgPluralCase,
			AsyncPipe,
			UpperCasePipe,
			LowerCasePipe,
			JsonPipe,
			SlicePipe,
			DecimalPipe,
			PercentPipe,
			TitleCasePipe,
			CurrencyPipe,
			DatePipe,
			I18nPluralPipe,
			I18nSelectPipe,
			KeyValuePipe
		]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonModule, [{
		type: NgModule,
		args: [{
			imports: [COMMON_DIRECTIVES, COMMON_PIPES],
			exports: [COMMON_DIRECTIVES, COMMON_PIPES]
		}]
	}], null, null);
})();
// node_modules/@angular/platform-browser/fesm2022/_dom_renderer-chunk.mjs
/**
* @license Angular v22.2.6
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var EventManagerPlugin = class {
	_doc;
	constructor(_doc) {
		this._doc = _doc;
	}
	manager;
};
var DomEventsPlugin = class DomEventsPlugin extends EventManagerPlugin {
	constructor(doc) {
		super(doc);
	}
	supports(eventName) {
		return true;
	}
	addEventListener(element, eventName, handler, options) {
		element.addEventListener(eventName, handler, options);
		return () => this.removeEventListener(element, eventName, handler, options);
	}
	removeEventListener(target, eventName, callback, options) {
		return target.removeEventListener(eventName, callback, options);
	}
	static ɵfac = function DomEventsPlugin_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DomEventsPlugin)(ɵɵinject(DOCUMENT));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: DomEventsPlugin,
		factory: DomEventsPlugin.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomEventsPlugin, [{ type: Injectable }], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DOCUMENT]
		}]
	}], null);
})();
var EVENT_MANAGER_PLUGINS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "EventManagerPlugins" : "");
var EventManager = class EventManager {
	_zone;
	_plugins;
	_eventNameToPlugin = /* @__PURE__ */ new Map();
	constructor(plugins, _zone) {
		this._zone = _zone;
		plugins.forEach((plugin) => {
			plugin.manager = this;
		});
		const otherPlugins = plugins.filter((p) => !(p instanceof DomEventsPlugin));
		this._plugins = otherPlugins.slice().reverse();
		const domEventPlugin = plugins.find((p) => p instanceof DomEventsPlugin);
		if (domEventPlugin) this._plugins.push(domEventPlugin);
	}
	addEventListener(element, eventName, handler, options) {
		return this._findPluginFor(eventName).addEventListener(element, eventName, handler, options);
	}
	getZone() {
		return this._zone;
	}
	_findPluginFor(eventName) {
		let plugin = this._eventNameToPlugin.get(eventName);
		if (plugin) return plugin;
		plugin = this._plugins.find((plugin) => plugin.supports(eventName));
		if (!plugin) throw new RuntimeError(-5101, (typeof ngDevMode === "undefined" || ngDevMode) && `No event manager plugin found for event ${eventName}`);
		this._eventNameToPlugin.set(eventName, plugin);
		return plugin;
	}
	static ɵfac = function EventManager_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || EventManager)(ɵɵinject(EVENT_MANAGER_PLUGINS), ɵɵinject(NgZone));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: EventManager,
		factory: EventManager.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventManager, [{ type: Injectable }], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [EVENT_MANAGER_PLUGINS]
		}]
	}, { type: NgZone }], null);
})();
var APP_ID_ATTRIBUTE_NAME = "ng-app-id";
function removeElements(elements) {
	for (const element of elements) element.remove();
}
function createStyleElement(style, doc) {
	const styleElement = doc.createElement("style");
	styleElement.textContent = style;
	return styleElement;
}
function addServerStyles(doc, appId, inline, external) {
	const elements = doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${appId}"],link[${APP_ID_ATTRIBUTE_NAME}="${appId}"]`);
	if (!elements || elements.length === 0) return false;
	for (const styleElement of elements) {
		styleElement.removeAttribute(APP_ID_ATTRIBUTE_NAME);
		if (styleElement instanceof HTMLLinkElement) external.set(styleElement.href.slice(styleElement.href.lastIndexOf("/") + 1), {
			usage: 0,
			elements: [styleElement]
		});
		else if (styleElement.textContent) inline.set(styleElement.textContent, {
			usage: 0,
			elements: [styleElement]
		});
	}
	return true;
}
function createLinkElement(url, doc) {
	const linkElement = doc.createElement("link");
	linkElement.setAttribute("rel", "stylesheet");
	linkElement.setAttribute("href", url);
	return linkElement;
}
var SharedStylesHost = class SharedStylesHost {
	doc;
	appId;
	nonce;
	inline = /* @__PURE__ */ new Map();
	external = /* @__PURE__ */ new Map();
	hosts = /* @__PURE__ */ new Set();
	constructor(doc, appId, nonce, platformId = {}) {
		this.doc = doc;
		this.appId = appId;
		this.nonce = nonce;
		if (addServerStyles(doc, appId, this.inline, this.external)) this.hosts.add(doc.head);
	}
	addStyles(styles, urls) {
		for (const value of styles) this.addUsage(value, this.inline, createStyleElement);
		urls?.forEach((value) => this.addUsage(value, this.external, createLinkElement));
	}
	removeStyles(styles, urls) {
		for (const value of styles) this.removeUsage(value, this.inline);
		urls?.forEach((value) => this.removeUsage(value, this.external));
	}
	addUsage(value, usages, creator) {
		const record = usages.get(value);
		if (record) {
			if ((typeof ngDevMode === "undefined" || ngDevMode) && record.usage === 0) record.elements.forEach((element) => element.setAttribute("ng-style-reused", ""));
			record.usage++;
		} else usages.set(value, {
			usage: 1,
			elements: [...this.hosts].map((host) => this.addElement(host, creator(value, this.doc)))
		});
	}
	removeUsage(value, usages) {
		const record = usages.get(value);
		if (record) {
			record.usage--;
			if (record.usage <= 0) {
				removeElements(record.elements);
				usages.delete(value);
			}
		}
	}
	ngOnDestroy() {
		for (const [, { elements }] of [...this.inline, ...this.external]) removeElements(elements);
		this.hosts.clear();
	}
	addHost(hostNode) {
		if (this.hosts.has(hostNode)) return;
		this.hosts.add(hostNode);
		for (const [style, { elements }] of this.inline) elements.push(this.addElement(hostNode, createStyleElement(style, this.doc)));
		for (const [url, { elements }] of this.external) elements.push(this.addElement(hostNode, createLinkElement(url, this.doc)));
	}
	removeHost(hostNode) {
		this.hosts.delete(hostNode);
		for (const record of [...this.inline.values(), ...this.external.values()]) {
			const remaining = [];
			for (const element of record.elements) if (element.parentNode === hostNode) element.remove();
			else remaining.push(element);
			record.elements = remaining;
		}
	}
	addElement(host, element) {
		if (this.nonce) element.setAttribute("nonce", this.nonce);
		return host.appendChild(element);
	}
	static ɵfac = function SharedStylesHost_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || SharedStylesHost)(ɵɵinject(DOCUMENT), ɵɵinject(APP_ID), ɵɵinject(CSP_NONCE, 8), ɵɵinject(PLATFORM_ID));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: SharedStylesHost,
		factory: SharedStylesHost.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedStylesHost, [{ type: Injectable }], () => [
		{
			type: Document,
			decorators: [{
				type: Inject,
				args: [DOCUMENT]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [APP_ID]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [CSP_NONCE]
			}, { type: Optional }]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [PLATFORM_ID]
			}]
		}
	], null);
})();
var NAMESPACE_URIS = {
	"svg": "http://www.w3.org/2000/svg",
	"xhtml": "http://www.w3.org/1999/xhtml",
	"xlink": "http://www.w3.org/1999/xlink",
	"xml": "http://www.w3.org/XML/1998/namespace",
	"xmlns": "http://www.w3.org/2000/xmlns/",
	"math": "http://www.w3.org/1998/Math/MathML"
};
var COMPONENT_REGEX = /%COMP%/g;
var SOURCEMAP_URL_REGEXP = /\/\*#\s*sourceMappingURL=([^\s*]+)\s*\*\//;
var PROTOCOL_REGEXP = /^https?:/;
var COMPONENT_VARIABLE = "%COMP%";
var HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
var CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
var REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
var REMOVE_STYLES_ON_COMPONENT_DESTROY = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "RemoveStylesOnCompDestroy" : "", { factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT });
var CSS_VAR_NAMESPACE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "CSS_VAR_NAMESPACE" : "");
function provideCssVarNamespacing(namespace) {
	return makeEnvironmentProviders([{
		provide: CSS_VAR_NAMESPACE,
		useFactory: (appId) => `${namespace ?? appId}_`,
		deps: [APP_ID]
	}]);
}
function shimContentAttribute(componentShortId) {
	return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
	return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
	return styles.map((s) => s.replace(COMPONENT_REGEX, compId));
}
function addBaseHrefToCssSourceMap(baseHref, styles) {
	if (!baseHref) return styles;
	const absoluteBaseHrefUrl = new URL(baseHref, "http://localhost");
	return styles.map((cssContent) => {
		if (!cssContent.includes("sourceMappingURL=")) return cssContent;
		return cssContent.replace(SOURCEMAP_URL_REGEXP, (_, sourceMapUrl) => {
			if (sourceMapUrl[0] === "/" || sourceMapUrl.startsWith("data:") || PROTOCOL_REGEXP.test(sourceMapUrl)) return `/*# sourceMappingURL=${sourceMapUrl} */`;
			const { pathname: resolvedSourceMapUrl } = new URL(sourceMapUrl, absoluteBaseHrefUrl);
			return `/*# sourceMappingURL=${resolvedSourceMapUrl} */`;
		});
	});
}
var DomRendererFactory2 = class DomRendererFactory2 {
	eventManager;
	sharedStylesHost;
	appId;
	removeStylesOnCompDestroy;
	doc;
	ngZone;
	nonce;
	tracingService;
	rendererByCompId = /* @__PURE__ */ new Map();
	defaultRenderer;
	cssVarNamespace;
	constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, ngZone, nonce = null, tracingService = null, cssVarNamespace = null) {
		this.eventManager = eventManager;
		this.sharedStylesHost = sharedStylesHost;
		this.appId = appId;
		this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
		this.doc = doc;
		this.ngZone = ngZone;
		this.nonce = nonce;
		this.tracingService = tracingService;
		this.cssVarNamespace = cssVarNamespace ?? "";
		this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.tracingService, this.cssVarNamespace);
	}
	createRenderer(element, type) {
		if (!element || !type) return this.defaultRenderer;
		const renderer = this.getOrCreateRenderer(element, type);
		if (renderer instanceof EmulatedEncapsulationDomRenderer2) renderer.applyToHost(element);
		else if (renderer instanceof NoneEncapsulationDomRenderer) renderer.applyStyles();
		return renderer;
	}
	getOrCreateRenderer(element, type) {
		const rendererByCompId = this.rendererByCompId;
		let renderer = rendererByCompId.get(type.id);
		if (!renderer) {
			const doc = this.doc;
			const ngZone = this.ngZone;
			const eventManager = this.eventManager;
			const sharedStylesHost = this.sharedStylesHost;
			const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
			const tracingService = this.tracingService;
			switch (type.encapsulation) {
				case ViewEncapsulation.Emulated:
					renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, tracingService, this.cssVarNamespace);
					break;
				case ViewEncapsulation.ShadowDom: return new ShadowDomRenderer(eventManager, element, type, doc, ngZone, this.nonce, tracingService, this.cssVarNamespace, sharedStylesHost);
				case ViewEncapsulation.ExperimentalIsolatedShadowDom: return new ShadowDomRenderer(eventManager, element, type, doc, ngZone, this.nonce, tracingService, this.cssVarNamespace);
				default: renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, tracingService, this.cssVarNamespace);
			}
			rendererByCompId.set(type.id, renderer);
		}
		return renderer;
	}
	ngOnDestroy() {
		this.rendererByCompId.clear();
	}
	componentReplaced(componentId) {
		this.rendererByCompId.delete(componentId);
	}
	static ɵfac = function DomRendererFactory2_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DomRendererFactory2)(ɵɵinject(EventManager), ɵɵinject(SHARED_STYLES_HOST), ɵɵinject(APP_ID), ɵɵinject(REMOVE_STYLES_ON_COMPONENT_DESTROY), ɵɵinject(DOCUMENT), ɵɵinject(NgZone), ɵɵinject(CSP_NONCE), ɵɵinject(TracingService, 8), ɵɵinject(CSS_VAR_NAMESPACE, 8));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: DomRendererFactory2,
		factory: DomRendererFactory2.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomRendererFactory2, [{ type: Injectable }], () => [
		{ type: EventManager },
		{
			type: SharedStylesHost,
			decorators: [{
				type: Inject,
				args: [SHARED_STYLES_HOST]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [APP_ID]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [REMOVE_STYLES_ON_COMPONENT_DESTROY]
			}]
		},
		{
			type: Document,
			decorators: [{
				type: Inject,
				args: [DOCUMENT]
			}]
		},
		{ type: NgZone },
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [CSP_NONCE]
			}]
		},
		{
			type: TracingService,
			decorators: [{
				type: Inject,
				args: [TracingService]
			}, { type: Optional }]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [CSS_VAR_NAMESPACE]
			}, { type: Optional }]
		}
	], null);
})();
var DefaultDomRenderer2 = class {
	eventManager;
	doc;
	ngZone;
	tracingService;
	cssVarNamespace;
	data = Object.create(null);
	throwOnSyntheticProps = true;
	constructor(eventManager, doc, ngZone, tracingService, cssVarNamespace = "") {
		this.eventManager = eventManager;
		this.doc = doc;
		this.ngZone = ngZone;
		this.tracingService = tracingService;
		this.cssVarNamespace = cssVarNamespace;
	}
	destroy() {}
	destroyNode = null;
	createElement(name, namespace) {
		if (namespace) return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
		return this.doc.createElement(name);
	}
	createComment(value) {
		return this.doc.createComment(value);
	}
	createText(value) {
		return this.doc.createTextNode(value);
	}
	appendChild(parent, newChild) {
		(isTemplateNode(parent) ? parent.content : parent).appendChild(newChild);
	}
	insertBefore(parent, newChild, refChild) {
		if (parent) {
			const targetParent = isTemplateNode(parent) ? parent.content : parent;
			if (refChild != null && refChild.parentNode !== targetParent) throw new RuntimeError(-5106, ngDevMode && `Angular could not insert a node before ${describeDomNode(refChild)} because it is no longer a child of ${describeDomNode(targetParent)}. This can happen when code outside of Angular's control (for example, a browser extension or a script that directly manipulates the DOM) has moved or removed a node that Angular is still managing.`);
			targetParent.insertBefore(newChild, refChild);
		}
	}
	removeChild(_parent, oldChild) {
		oldChild.remove();
	}
	selectRootElement(selectorOrNode, preserveContent) {
		let el = typeof selectorOrNode === "string" ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
		if (!el) throw new RuntimeError(-5104, (typeof ngDevMode === "undefined" || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
		if (!preserveContent) el.textContent = "";
		return el;
	}
	parentNode(node) {
		return node.parentNode;
	}
	nextSibling(node) {
		return node.nextSibling;
	}
	setAttribute(el, name, value, namespace) {
		if (namespace) {
			name = namespace + ":" + name;
			const namespaceUri = NAMESPACE_URIS[namespace];
			if (namespaceUri) el.setAttributeNS(namespaceUri, name, value);
			else el.setAttribute(name, value);
		} else el.setAttribute(name, value);
	}
	removeAttribute(el, name, namespace) {
		if (namespace) {
			const namespaceUri = NAMESPACE_URIS[namespace];
			if (namespaceUri) el.removeAttributeNS(namespaceUri, name);
			else el.removeAttribute(`${namespace}:${name}`);
		} else el.removeAttribute(name);
	}
	addClass(el, name) {
		el.classList.add(name);
	}
	removeClass(el, name) {
		el.classList.remove(name);
	}
	setStyle(el, style, value, flags) {
		const isVariable = style.startsWith("--");
		if (isVariable) style = style.replace("%NS%", this.cssVarNamespace);
		if (isVariable || flags & (RendererStyleFlags2.DashCase | RendererStyleFlags2.Important)) el.style.setProperty(style, value, flags & RendererStyleFlags2.Important ? "important" : "");
		else el.style[style] = value;
	}
	removeStyle(el, style, flags) {
		const isVariable = style.startsWith("--");
		if (isVariable) style = style.replace("%NS%", this.cssVarNamespace);
		if (isVariable || flags & RendererStyleFlags2.DashCase) el.style.removeProperty(style);
		else el.style[style] = "";
	}
	setProperty(el, name, value) {
		if (el == null) return;
		(typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, "property");
		el[name] = value;
	}
	setValue(node, value) {
		node.nodeValue = value;
	}
	listen(target, event, callback, options) {
		(typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, "listener");
		if (typeof target === "string") {
			target = getDOM().getGlobalEventTarget(this.doc, target);
			if (!target) throw new RuntimeError(-5102, (typeof ngDevMode === "undefined" || ngDevMode) && `Unsupported event target ${target} for event ${event}`);
		}
		let wrappedCallback = this.decoratePreventDefault(callback);
		if (this.tracingService?.wrapEventListener) wrappedCallback = this.tracingService.wrapEventListener(target, event, wrappedCallback);
		return this.eventManager.addEventListener(target, event, wrappedCallback, options);
	}
	decoratePreventDefault(eventHandler) {
		return (event) => {
			if (event === "__ngUnwrap__") return eventHandler;
			if (eventHandler(event) === false) event.preventDefault();
		};
	}
};
function disableThrowOnSyntheticProps(renderer) {
	if (renderer instanceof DefaultDomRenderer2) renderer.throwOnSyntheticProps = false;
}
var AT_CHARCODE = /* @__PURE__ */ (() => "@".charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
	if (name.charCodeAt(0) === AT_CHARCODE) throw new RuntimeError(5105, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Make sure \`provideAnimationsAsync()\`, \`provideAnimations()\` or \`provideNoopAnimations()\` call was added to a list of providers used to bootstrap an application.
  - There is a corresponding animation configuration named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.dev/api/core/Component#animations).`);
}
function isTemplateNode(node) {
	return node.tagName === "TEMPLATE" && node.content !== void 0;
}
var ShadowDomRenderer = class extends DefaultDomRenderer2 {
	hostEl;
	sharedStylesHost;
	shadowRoot;
	constructor(eventManager, hostEl, component, doc, ngZone, nonce, tracingService, cssVarNamespace, sharedStylesHost) {
		super(eventManager, doc, ngZone, tracingService, cssVarNamespace);
		this.hostEl = hostEl;
		this.sharedStylesHost = sharedStylesHost;
		this.shadowRoot = hostEl.attachShadow({ mode: "open" });
		if (this.sharedStylesHost) this.sharedStylesHost.addHost(this.shadowRoot);
		let styles = component.styles;
		if (ngDevMode) styles = addBaseHrefToCssSourceMap(getDOM().getBaseHref(doc) ?? "", styles);
		styles = shimStylesContent(component.id, styles).map((s) => s.replace(/%NS%/g, cssVarNamespace));
		for (const style of styles) {
			const styleEl = document.createElement("style");
			if (nonce) styleEl.setAttribute("nonce", nonce);
			styleEl.textContent = style;
			this.shadowRoot.appendChild(styleEl);
		}
		const styleUrls = component.getExternalStyles?.();
		if (styleUrls) for (const styleUrl of styleUrls) {
			const linkEl = createLinkElement(styleUrl, doc);
			if (nonce) linkEl.setAttribute("nonce", nonce);
			this.shadowRoot.appendChild(linkEl);
		}
	}
	nodeOrShadowRoot(node) {
		return node === this.hostEl ? this.shadowRoot : node;
	}
	appendChild(parent, newChild) {
		return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
	}
	insertBefore(parent, newChild, refChild) {
		return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
	}
	removeChild(_parent, oldChild) {
		return super.removeChild(null, oldChild);
	}
	parentNode(node) {
		return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
	}
	destroy() {
		if (this.sharedStylesHost) this.sharedStylesHost.removeHost(this.shadowRoot);
	}
};
var NoneEncapsulationDomRenderer = class extends DefaultDomRenderer2 {
	sharedStylesHost;
	removeStylesOnCompDestroy;
	styles;
	styleUrls;
	constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, tracingService, cssVarNamespace, compId) {
		super(eventManager, doc, ngZone, tracingService, cssVarNamespace);
		this.sharedStylesHost = sharedStylesHost;
		this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
		let styles = component.styles;
		if (ngDevMode) styles = addBaseHrefToCssSourceMap(getDOM().getBaseHref(doc) ?? "", styles);
		const shimmed = compId ? shimStylesContent(compId, styles) : styles;
		this.styles = shimmed.map((s) => s.replace(/%NS%/g, cssVarNamespace));
		this.styleUrls = component.getExternalStyles?.(compId);
	}
	applyStyles() {
		this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
	}
	destroy() {
		if (!this.removeStylesOnCompDestroy) return;
		if (allLeavingAnimations.size === 0) this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
	}
};
var EmulatedEncapsulationDomRenderer2 = class extends NoneEncapsulationDomRenderer {
	contentAttr;
	hostAttr;
	constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, tracingService, cssVarNamespace) {
		const compId = appId + "-" + component.id;
		super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, tracingService, cssVarNamespace, compId);
		this.contentAttr = shimContentAttribute(compId);
		this.hostAttr = shimHostAttribute(compId);
	}
	applyToHost(element) {
		this.applyStyles();
		this.setAttribute(element, this.hostAttr, "");
	}
	createElement(parent, name) {
		const el = super.createElement(parent, name);
		super.setAttribute(el, this.contentAttr, "");
		return el;
	}
};
// node_modules/@angular/platform-browser/fesm2022/_browser-chunk.mjs
/**
* @license Angular v22.2.6
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var BrowserDomAdapter = class BrowserDomAdapter extends DomAdapter {
	supportsDOMEvents = true;
	static makeCurrent() {
		setRootDomAdapter(new BrowserDomAdapter());
	}
	onAndCancel(el, evt, listener, options) {
		el.addEventListener(evt, listener, options);
		return () => {
			el.removeEventListener(evt, listener, options);
		};
	}
	dispatchEvent(el, evt) {
		el.dispatchEvent(evt);
	}
	remove(node) {
		node.remove();
	}
	createElement(tagName, doc) {
		doc = doc || this.getDefaultDocument();
		return doc.createElement(tagName);
	}
	createHtmlDocument() {
		return document.implementation.createHTMLDocument("fakeTitle");
	}
	getDefaultDocument() {
		return document;
	}
	isElementNode(node) {
		return node.nodeType === Node.ELEMENT_NODE;
	}
	isShadowRoot(node) {
		return node instanceof DocumentFragment;
	}
	getGlobalEventTarget(doc, target) {
		if (target === "window") return window;
		if (target === "document") return doc;
		if (target === "body") return doc.body;
		return null;
	}
	getBaseHref(doc) {
		const href = getBaseElementHref();
		return href == null ? null : relativePath(href);
	}
	resetBaseElement() {
		baseElement = null;
	}
	getUserAgent() {
		return window.navigator.userAgent;
	}
	getCookie(name) {
		return parseCookieValue(document.cookie, name);
	}
};
var baseElement = null;
function getBaseElementHref() {
	baseElement = baseElement || document.head.querySelector("base");
	return baseElement ? baseElement.getAttribute("href") : null;
}
function relativePath(url) {
	return new URL(url, document.baseURI).pathname;
}
var BrowserGetTestability = class {
	addToWindow(registry) {
		_global["getAngularTestability"] = (elem, findInAncestors = true) => {
			const testability = registry.findTestabilityInTree(elem, findInAncestors);
			if (testability == null) throw new RuntimeError(5103, (typeof ngDevMode === "undefined" || ngDevMode) && "Could not find testability for element.");
			return testability;
		};
		_global["getAllAngularTestabilities"] = () => registry.getAllTestabilities();
		_global["getAllAngularRootElements"] = () => registry.getAllRootElements();
		const whenAllStable = (callback) => {
			const testabilities = _global["getAllAngularTestabilities"]();
			let count = testabilities.length;
			const decrement = function() {
				count--;
				if (count == 0) callback();
			};
			testabilities.forEach((testability) => {
				testability.whenStable(decrement);
			});
		};
		if (!_global["frameworkStabilizers"]) _global["frameworkStabilizers"] = [];
		_global["frameworkStabilizers"].push(whenAllStable);
	}
	findTestabilityInTree(registry, elem, findInAncestors) {
		if (elem == null) return null;
		const t = registry.getTestability(elem);
		if (t != null) return t;
		else if (!findInAncestors) return null;
		if (getDOM().isShadowRoot(elem)) return this.findTestabilityInTree(registry, elem.host, true);
		return this.findTestabilityInTree(registry, elem.parentElement, true);
	}
};
var MODIFIER_KEYS = [
	"alt",
	"control",
	"meta",
	"shift"
];
var _keyMap = {
	"\b": "Backspace",
	"	": "Tab",
	"": "Delete",
	"\x1B": "Escape",
	"Del": "Delete",
	"Esc": "Escape",
	"Left": "ArrowLeft",
	"Right": "ArrowRight",
	"Up": "ArrowUp",
	"Down": "ArrowDown",
	"Menu": "ContextMenu",
	"Scroll": "ScrollLock",
	"Win": "OS"
};
var MODIFIER_KEY_GETTERS = {
	"alt": (event) => event.altKey,
	"control": (event) => event.ctrlKey,
	"meta": (event) => event.metaKey,
	"shift": (event) => event.shiftKey
};
var KeyEventsPlugin = class KeyEventsPlugin extends EventManagerPlugin {
	constructor(doc) {
		super(doc);
	}
	supports(eventName) {
		return KeyEventsPlugin.parseEventName(eventName) != null;
	}
	addEventListener(element, eventName, handler, options) {
		const parsedEvent = KeyEventsPlugin.parseEventName(eventName);
		const outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent["fullKey"], handler, this.manager.getZone());
		return this.manager.getZone().runOutsideAngular(() => {
			return getDOM().onAndCancel(element, parsedEvent["domEventName"], outsideHandler, options);
		});
	}
	static parseEventName(eventName) {
		const parts = eventName.toLowerCase().split(".");
		const domEventName = parts.shift();
		if (parts.length === 0 || !(domEventName === "keydown" || domEventName === "keyup")) return null;
		const key = KeyEventsPlugin._normalizeKey(parts.pop());
		let fullKey = "";
		let codeIX = parts.indexOf("code");
		if (codeIX > -1) {
			parts.splice(codeIX, 1);
			fullKey = "code.";
		}
		MODIFIER_KEYS.forEach((modifierName) => {
			const index = parts.indexOf(modifierName);
			if (index > -1) {
				parts.splice(index, 1);
				fullKey += modifierName + ".";
			}
		});
		fullKey += key;
		if (parts.length != 0 || key.length === 0) return null;
		const result = {};
		result["domEventName"] = domEventName;
		result["fullKey"] = fullKey;
		return result;
	}
	static matchEventFullKeyCode(event, fullKeyCode) {
		let keycode = _keyMap[event.key] || event.key;
		let key = "";
		if (fullKeyCode.indexOf("code.") > -1) {
			keycode = event.code;
			key = "code.";
		}
		if (keycode == null || !keycode) return false;
		keycode = keycode.toLowerCase();
		if (keycode === " ") keycode = "space";
		else if (keycode === ".") keycode = "dot";
		MODIFIER_KEYS.forEach((modifierName) => {
			if (modifierName !== keycode) {
				const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
				if (modifierGetter(event)) key += modifierName + ".";
			}
		});
		key += keycode;
		return key === fullKeyCode;
	}
	static eventCallback(fullKey, handler, zone) {
		return (event) => {
			if (KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) zone.runGuarded(() => handler(event));
		};
	}
	static _normalizeKey(keyName) {
		return keyName === "esc" ? "escape" : keyName;
	}
	static ɵfac = function KeyEventsPlugin_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || KeyEventsPlugin)(ɵɵinject(DOCUMENT));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: KeyEventsPlugin,
		factory: KeyEventsPlugin.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyEventsPlugin, [{ type: Injectable }], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DOCUMENT]
		}]
	}], null);
})();
async function bootstrapApplication(rootComponent, options, context) {
	const config = {
		rootComponent,
		...createProvidersConfig(options, context)
	};
	return internalCreateApplication(config);
}
async function createApplication(options, context) {
	return internalCreateApplication(createProvidersConfig(options, context));
}
function createProvidersConfig(options, context) {
	return {
		platformRef: context?.platformRef,
		appProviders: [...BROWSER_MODULE_PROVIDERS, ...options?.providers ?? []],
		platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
	};
}
function provideProtractorTestingSupport(options = {}) {
	return [...TESTABILITY_PROVIDERS, options?.usePendingTasksForStability !== void 0 ? {
		provide: USE_PENDING_TASKS,
		useValue: options.usePendingTasksForStability ?? false
	} : []];
}
function initDomAdapter() {
	BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
	return new ErrorHandler();
}
function _document() {
	setDocument(document);
	return document;
}
var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
	{
		provide: PLATFORM_ID,
		useValue: PLATFORM_BROWSER_ID
	},
	{
		provide: PLATFORM_INITIALIZER,
		useValue: initDomAdapter,
		multi: true
	},
	{
		provide: DOCUMENT,
		useFactory: _document
	}
];
var platformBrowser = createPlatformFactory(platformCore, "browser", INTERNAL_BROWSER_PLATFORM_PROVIDERS);
var BROWSER_MODULE_PROVIDERS_MARKER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "BrowserModule Providers Marker" : "");
var TESTABILITY_PROVIDERS = [
	{
		provide: TESTABILITY_GETTER,
		useClass: BrowserGetTestability
	},
	{
		provide: TESTABILITY,
		useClass: Testability,
		deps: [
			NgZone,
			TestabilityRegistry,
			TESTABILITY_GETTER
		]
	},
	{
		provide: Testability,
		useClass: Testability,
		deps: [
			NgZone,
			TestabilityRegistry,
			TESTABILITY_GETTER
		]
	}
];
var BROWSER_MODULE_PROVIDERS = [
	{
		provide: INJECTOR_SCOPE,
		useValue: "root"
	},
	{
		provide: ErrorHandler,
		useFactory: errorHandler
	},
	{
		provide: EVENT_MANAGER_PLUGINS,
		useClass: DomEventsPlugin,
		multi: true
	},
	{
		provide: EVENT_MANAGER_PLUGINS,
		useClass: KeyEventsPlugin,
		multi: true
	},
	DomRendererFactory2,
	{
		provide: SHARED_STYLES_HOST,
		useClass: SharedStylesHost
	},
	{
		provide: SharedStylesHost,
		useExisting: SHARED_STYLES_HOST
	},
	EventManager,
	{
		provide: RendererFactory2,
		useExisting: DomRendererFactory2
	},
	typeof ngDevMode === "undefined" || ngDevMode ? {
		provide: BROWSER_MODULE_PROVIDERS_MARKER,
		useValue: true
	} : []
];
var BrowserModule = class BrowserModule {
	constructor() {
		if (typeof ngDevMode === "undefined" || ngDevMode) {
			if (inject(BROWSER_MODULE_PROVIDERS_MARKER, {
				optional: true,
				skipSelf: true
			})) throw new RuntimeError(5100, "Providers from the `BrowserModule` have already been loaded. If you need access to common directives such as NgIf and NgFor, import the `CommonModule` instead.");
		}
	}
	static ɵfac = function BrowserModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BrowserModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: BrowserModule,
		exports: [CommonModule, ApplicationModule]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({
		providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
		imports: [CommonModule, ApplicationModule]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserModule, [{
		type: NgModule,
		args: [{
			providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
			exports: [CommonModule, ApplicationModule]
		}]
	}], () => [], null);
})();
// node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
/**
* @license Angular v22.2.6
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var Meta = class Meta {
	_doc = inject(DOCUMENT);
	_dom = getDOM();
	addTag(tag, forceCreation = false) {
		if (!tag) return null;
		return this._getOrCreateElement(tag, forceCreation);
	}
	addTags(tags, forceCreation = false) {
		return tags.filter((tag) => !!tag).map((tag) => this._getOrCreateElement(tag, forceCreation));
	}
	getTag(attrSelector) {
		if (!attrSelector) return null;
		const meta = this._doc.querySelector(buildMetaSelector(attrSelector));
		return isMetaTag(meta) ? meta : null;
	}
	getTags(attrSelector) {
		if (!attrSelector) return [];
		const list = this._doc.querySelectorAll(buildMetaSelector(attrSelector));
		return list ? Array.from(list).filter((elem) => isMetaTag(elem)) : [];
	}
	updateTag(tag, selector) {
		validateMetaDefinition(tag);
		selector ??= parseSelector(tag);
		const meta = this.getTag(selector);
		if (meta) {
			setMetaElementAttributes(tag, meta);
			return meta;
		}
		return this._getOrCreateElement(tag, true);
	}
	removeTag(attrSelector) {
		this.removeTagElement(this.getTag(attrSelector));
	}
	removeTagElement(meta) {
		if (meta) this._dom.remove(meta);
	}
	_getOrCreateElement(meta, forceCreation = false) {
		validateMetaDefinition(meta);
		if (!forceCreation) {
			const selector = parseSelector(meta);
			const elem = this.getTags(selector).filter((elem) => containsAttributes(meta, elem))[0];
			if (elem !== void 0) return elem;
		}
		const element = this._dom.createElement("meta");
		setMetaElementAttributes(meta, element);
		this._doc.getElementsByTagName("head")[0].appendChild(element);
		return element;
	}
	static ɵfac = function Meta_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Meta)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: Meta,
		factory: Meta.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Meta, [{ type: Service }], null, null);
})();
function buildMetaSelector(attrSelector) {
	return `meta[${attrSelector}]`;
}
function setMetaElementAttributes(tag, el) {
	Object.keys(tag).forEach((prop) => el.setAttribute(getMetaKeyMap(prop), tag[prop]));
}
function validateMetaDefinition(tag) {
	for (const prop of Object.keys(tag)) {
		const attributeName = getMetaKeyMap(prop);
		if (attributeName.toLowerCase().startsWith("on")) throw new RuntimeError(5203, (typeof ngDevMode === "undefined" || ngDevMode) && `The Meta service does not allow setting event handler attribute '${attributeName}' for security reasons.`);
	}
}
function parseSelector(tag) {
	const attr = tag.name ? "name" : "property";
	return `${attr}=${escapeSelectorValue(String(tag[attr]))}`;
}
function escapeSelectorValue(value) {
	return `"${value.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`;
}
function containsAttributes(tag, elem) {
	return Object.keys(tag).every((key) => elem.getAttribute(getMetaKeyMap(key)) === tag[key]);
}
function getMetaKeyMap(prop) {
	return Object.hasOwn(META_KEYS_MAP, prop) ? META_KEYS_MAP[prop] : prop;
}
function isMetaTag(tag) {
	return tag?.nodeName.toLowerCase() === "meta";
}
var META_KEYS_MAP = { httpEquiv: "http-equiv" };
var Title = class Title {
	_doc;
	constructor(_doc) {
		this._doc = _doc;
	}
	getTitle() {
		return this._doc.title;
	}
	setTitle(newTitle) {
		this._doc.title = newTitle || "";
	}
	static ɵfac = function Title_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Title)(ɵɵinject(DOCUMENT));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: Title,
		factory: Title.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Title, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DOCUMENT]
		}]
	}], null);
})();
function exportNgVar(name, value) {
	if (typeof COMPILED === "undefined" || !COMPILED) {
		const ng = _global["ng"] = _global["ng"] || {};
		ng[name] = value;
	}
}
var ChangeDetectionPerfRecord = class {
	msPerTick;
	numTicks;
	constructor(msPerTick, numTicks) {
		this.msPerTick = msPerTick;
		this.numTicks = numTicks;
	}
};
var AngularProfiler = class {
	appRef;
	constructor(ref) {
		this.appRef = ref.injector.get(ApplicationRef);
	}
	timeChangeDetection(config) {
		const record = config && config["record"];
		const profileName = "Change Detection";
		if (record && "profile" in console && typeof console.profile === "function") console.profile(profileName);
		const start = performance.now();
		let numTicks = 0;
		while (numTicks < 5 || performance.now() - start < 500) {
			this.appRef.tick();
			numTicks++;
		}
		const end = performance.now();
		if (record && "profileEnd" in console && typeof console.profileEnd === "function") console.profileEnd(profileName);
		const msPerTick = (end - start) / numTicks;
		console.log(`ran ${numTicks} change detection cycles`);
		console.log(`${msPerTick.toFixed(2)} ms per check`);
		return new ChangeDetectionPerfRecord(msPerTick, numTicks);
	}
};
var PROFILER_GLOBAL_NAME = "profiler";
function enableDebugTools(ref) {
	exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
	return ref;
}
function disableDebugTools() {
	exportNgVar(PROFILER_GLOBAL_NAME, null);
}
var By = class {
	static all() {
		return () => true;
	}
	static css(selector) {
		return (debugElement) => {
			return debugElement.nativeElement != null ? elementMatches(debugElement.nativeElement, selector) : false;
		};
	}
	static directive(type) {
		return (debugNode) => debugNode.providerTokens.indexOf(type) !== -1;
	}
};
function elementMatches(n, selector) {
	if (getDOM().isElementNode(n)) return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
	return false;
}
var CssVarNamespacer = class CssVarNamespacer {
	namespacePrefix = inject(CSS_VAR_NAMESPACE, { optional: true }) ?? "";
	namespace(name) {
		if (typeof ngDevMode === "undefined" || ngDevMode) {
			if (!name.startsWith("--")) throw new Error(`CSS variable names passed to \`CssVarNamespacer\` must start with '--', got: '${name}'`);
		}
		if (!this.namespacePrefix) return name;
		return `--${this.namespacePrefix}${name.substring(2)}`;
	}
	static ɵfac = function CssVarNamespacer_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || CssVarNamespacer)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: CssVarNamespacer,
		factory: CssVarNamespacer.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CssVarNamespacer, [{ type: Service }], null, null);
})();
var HydrationFeatureKind;
(function(HydrationFeatureKind) {
	HydrationFeatureKind[HydrationFeatureKind["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
	HydrationFeatureKind[HydrationFeatureKind["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
	HydrationFeatureKind[HydrationFeatureKind["I18nSupport"] = 2] = "I18nSupport";
	HydrationFeatureKind[HydrationFeatureKind["EventReplay"] = 3] = "EventReplay";
	HydrationFeatureKind[HydrationFeatureKind["IncrementalHydration"] = 4] = "IncrementalHydration";
	HydrationFeatureKind[HydrationFeatureKind["NoIncrementalHydration"] = 5] = "NoIncrementalHydration";
})(HydrationFeatureKind || (HydrationFeatureKind = {}));
function hydrationFeature(ɵkind, ɵproviders = [], ɵoptions = {}) {
	return {
		ɵkind,
		ɵproviders
	};
}
function withNoHttpTransferCache() {
	return hydrationFeature(HydrationFeatureKind.NoHttpTransferCache);
}
function withHttpTransferCacheOptions(options) {
	return hydrationFeature(HydrationFeatureKind.HttpTransferCacheOptions, withHttpTransferCache(options));
}
function withI18nSupport() {
	return hydrationFeature(HydrationFeatureKind.I18nSupport, withI18nSupport$1());
}
function withEventReplay() {
	return hydrationFeature(HydrationFeatureKind.EventReplay, withEventReplay$1());
}
function withIncrementalHydration() {
	return hydrationFeature(HydrationFeatureKind.IncrementalHydration, withIncrementalHydration$1());
}
function withNoIncrementalHydration() {
	return hydrationFeature(HydrationFeatureKind.NoIncrementalHydration);
}
function provideEnabledBlockingInitialNavigationDetector() {
	return [{
		provide: ENVIRONMENT_INITIALIZER,
		useValue: () => {
			if (inject(IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, { optional: true })) {
				const console = inject(Console);
				const message = formatRuntimeError(5001, "Configuration error: found both hydration and enabledBlocking initial navigation in the same application, which is a contradiction.");
				console.warn(message);
			}
		},
		multi: true
	}];
}
function provideClientHydration(...features) {
	const providers = [];
	const featuresKind = /* @__PURE__ */ new Set();
	for (const { ɵproviders, ɵkind } of features) {
		featuresKind.add(ɵkind);
		if (ɵproviders.length) providers.push(ɵproviders);
	}
	const hasHttpTransferCacheOptions = featuresKind.has(HydrationFeatureKind.HttpTransferCacheOptions);
	if (typeof ngDevMode !== "undefined" && ngDevMode) {
		if (featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) && hasHttpTransferCacheOptions) throw new RuntimeError(5001, "Configuration error: found both withHttpTransferCacheOptions() and withNoHttpTransferCache() in the same call to provideClientHydration(), which is a contradiction.");
		if (featuresKind.has(HydrationFeatureKind.IncrementalHydration) && featuresKind.has(HydrationFeatureKind.NoIncrementalHydration)) throw new RuntimeError(5001, "Configuration error: found both withIncrementalHydration() and withNoIncrementalHydration() in the same call to provideClientHydration(), which is a contradiction.");
	}
	return makeEnvironmentProviders([
		typeof ngDevMode !== "undefined" && ngDevMode ? provideEnabledBlockingInitialNavigationDetector() : [],
		typeof ngDevMode !== "undefined" && ngDevMode ? provideStabilityDebugging() : [],
		withDomHydration(),
		featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) || hasHttpTransferCacheOptions ? [] : withHttpTransferCache({}),
		featuresKind.has(HydrationFeatureKind.NoIncrementalHydration) ? [] : withIncrementalHydration$1(),
		providers,
		{
			provide: CACHE_ACTIVE,
			useValue: { isActive: true }
		},
		{
			provide: APP_BOOTSTRAP_LISTENER,
			multi: true,
			useFactory: () => {
				const appRef = inject(ApplicationRef);
				const cacheState = inject(CACHE_ACTIVE);
				return () => {
					appRef.whenStable().then(() => {
						cacheState.isActive = false;
					});
				};
			}
		}
	]);
}
var DomSanitizer = class DomSanitizer {
	static ɵfac = function DomSanitizer_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DomSanitizer)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: DomSanitizer,
		factory: function DomSanitizer_Factory(__ngFactoryType__) {
			let __ngConditionalFactory__ = null;
			if (__ngFactoryType__) __ngConditionalFactory__ = new (__ngFactoryType__ || DomSanitizer)();
			else __ngConditionalFactory__ = ɵɵinject(DomSanitizerImpl);
			return __ngConditionalFactory__;
		},
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizer, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useExisting: forwardRef(() => DomSanitizerImpl)
		}]
	}], null, null);
})();
var DomSanitizerImpl = class DomSanitizerImpl extends DomSanitizer {
	_doc = inject(DOCUMENT);
	sanitize(ctx, value) {
		if (value == null) return null;
		switch (ctx) {
			case SecurityContext.NONE: return value;
			case SecurityContext.HTML:
				if (allowSanitizationBypassAndThrow(value, "HTML")) return unwrapSafeValue(value);
				return _sanitizeHtml(this._doc, String(value)).toString();
			case SecurityContext.STYLE:
				if (allowSanitizationBypassAndThrow(value, "Style")) return unwrapSafeValue(value);
				return value;
			case SecurityContext.SCRIPT:
				if (allowSanitizationBypassAndThrow(value, "Script")) return unwrapSafeValue(value);
				throw new RuntimeError(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
			case SecurityContext.URL:
				if (allowSanitizationBypassAndThrow(value, "URL")) return unwrapSafeValue(value);
				return _sanitizeUrl(String(value));
			case SecurityContext.RESOURCE_URL:
				if (allowSanitizationBypassAndThrow(value, "ResourceURL")) return unwrapSafeValue(value);
				throw new RuntimeError(-5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss)`);
			default: throw new RuntimeError(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss)`);
		}
	}
	bypassSecurityTrustHtml(value) {
		return bypassSanitizationTrustHtml(value);
	}
	bypassSecurityTrustStyle(value) {
		return bypassSanitizationTrustStyle(value);
	}
	bypassSecurityTrustScript(value) {
		return bypassSanitizationTrustScript(value);
	}
	bypassSecurityTrustUrl(value) {
		return bypassSanitizationTrustUrl(value);
	}
	bypassSecurityTrustResourceUrl(value) {
		return bypassSanitizationTrustResourceUrl(value);
	}
	static ɵfac = function DomSanitizerImpl_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DomSanitizerImpl)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: DomSanitizerImpl,
		factory: DomSanitizerImpl.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizerImpl, [{ type: Service }], null, null);
})();
var VERSION = /* @__PURE__ */ new Version("22.2.6");
export { EventManagerPlugin as A, createApplication as C, DomRendererFactory2 as D, DomEventsPlugin as E, HashLocationStrategy as F, SharedStylesHost as M, disableThrowOnSyntheticProps as N, EVENT_MANAGER_PLUGINS as O, provideCssVarNamespacing as P, bootstrapApplication as S, provideProtractorTestingSupport as T, withNoIncrementalHydration as _, HydrationFeatureKind as a, BrowserModule as b, VERSION as c, provideClientHydration as d, withEventReplay as f, withNoHttpTransferCache as g, withIncrementalHydration as h, DomSanitizerImpl as i, REMOVE_STYLES_ON_COMPONENT_DESTROY as j, EventManager as k, disableDebugTools as l, withI18nSupport as m, CssVarNamespacer as n, Meta as o, withHttpTransferCacheOptions as p, DomSanitizer as r, Title as s, By as t, enableDebugTools as u, BrowserDomAdapter as v, platformBrowser as w, KeyEventsPlugin as x, BrowserGetTestability as y };
