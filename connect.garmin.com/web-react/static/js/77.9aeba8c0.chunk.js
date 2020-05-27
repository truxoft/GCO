(window.webpackJsonp = window.webpackJsonp || []).push([[77], {
    1222: function(t, e, a) {
        (e = t.exports = a(35)(!0)).push([t.i, "/* breakpoints */\n/* Using .9375 on the max-widths prevents overlap at the breakpoint pixel. 1em by default equals 16px, .9375 is 15/16ths */", "", {
            version: 3,
            sources: ["/var/lib/jenkins/workspace/web-react_release_4.30/node_modules/ui-connect/styles/variables.module.css"],
            names: [],
            mappings: "AAMA,iBAAgB;AAChB,2HAA0H",
            file: "variables.module.css",
            sourcesContent: ["@value spacingXS: 11px;\n@value spacingSM: 22px;\n@value spacingMD: 33px;\n@value spacingLG: 44px;\n@value spacingXL: 55px;\n\n/* breakpoints */\n/* Using .9375 on the max-widths prevents overlap at the breakpoint pixel. 1em by default equals 16px, .9375 is 15/16ths */\n@value endXS:     47.9375em;\n@value startSM:   48em;\n@value endSM:     61.9375em;\n@value startMD:   62em;\n@value endMD:     74.9375em;\n@value startLG:   75em;"],
            sourceRoot: ""
        }]),
        e.locals = {
            spacingXS: "11px",
            spacingSM: "22px",
            spacingMD: "33px",
            spacingLG: "44px",
            spacingXL: "55px",
            endXS: "47.9375em",
            startSM: "48em",
            endSM: "61.9375em",
            startMD: "62em",
            endMD: "74.9375em",
            startLG: "75em"
        }
    },
    1258: function(t, e, a) {
        "use strict";
        a.d(e, "c", function() {
            return r
        }),
        a.d(e, "b", function() {
            return s
        }),
        a.d(e, "a", function() {
            return n
        }),
        a.d(e, "d", function() {
            return o
        }),
        a.d(e, "e", function() {
            return l
        }),
        a.d(e, "f", function() {
            return c
        }),
        a.d(e, "g", function() {
            return h
        });
        var i = a(46)
          , r = {
            black: "#000000",
            white: "#ffffff",
            deep_sleep: i.blue_dark_3,
            light_sleep: i.blue_primary,
            rem_sleep: i.violet_dark_3,
            total_sleep: i.purple_dark_1,
            awake: i.violet_light_1,
            stress: "#2a88e6",
            manually_entered: "#64AFCD",
            unmeasurable: i.darkui_accent_2,
            grey_1: "#282828",
            grey_2: "#C5C5C5",
            grey_3: "#E6E6E6",
            grey_4: "#F9F9F9",
            pulse_ox: "#9E9E9E",
            blue_1: "#11a9ed",
            blue_2: "#67C7F2",
            blue_3: "#BFE7F8",
            blue_4: "#76ccf3",
            backgroundChart: "#6D8595",
            respiration: i.color_222
        }
          , s = {
            levels: "tab_levels",
            score: "tab_score",
            pulseOx: "tab_pulseOx",
            respiration: "tab_respiration"
        }
          , n = {
            levels: "chart_levels",
            movement: "chart_movement",
            pulseOx: "chart_pulseOx",
            respiration: "chart_respiration"
        }
          , o = .35
          , l = 100
          , c = {
            total_sleep: {
                key: "total_sleep",
                translation_ns: "wellness",
                translation_key: "sleep_duration"
            },
            deep_sleep: {
                key: "deep_sleep",
                translation_ns: "wellness",
                translation_key: "deep"
            },
            rem_sleep: {
                key: "rem_sleep",
                translation_ns: "wellness",
                translation_key: "rem"
            },
            awake: {
                key: "awake",
                translation_ns: "wellness",
                translation_key: "awake_time",
                idealDuration: 300
            },
            stress: {
                key: "stress",
                translation_ns: "stress",
                translation_key: "label_stress"
            }
        }
          , h = {
            sleep: "sleep",
            awake: "awake"
        }
    },
    1289: function(t, e, a) {
        "use strict";
        a.d(e, "a", function() {
            return h
        });
        var i = a(14)
          , r = a(83)
          , s = a(84)
          , n = a(1258)
          , o = a(30)
          , l = a(85)
          , c = a(1324)
          , h = function() {
            function t() {
                Object(r.a)(this, t)
            }
            return Object(s.a)(t, null, [{
                key: "getBedTime",
                value: function(t, e) {
                    if (!e)
                        return null;
                    var a = (t.sleepStartTimestampGMT - l.a.parseISOUTC(e.wellnessStartTimeGmt).getTime()) / 1e3;
                    return a < 0 && (a = 86400 + a),
                    a
                }
            }, {
                key: "getWakeTime",
                value: function(t, e) {
                    if (!e)
                        return null;
                    var a = (t.sleepEndTimestampGMT - l.a.parseISOUTC(e.wellnessStartTimeGmt).getTime()) / 1e3;
                    return a < 0 && (a = 86400 + a),
                    a
                }
            }, {
                key: "getTotalSleepTypeDurations",
                value: function(e, a, i) {
                    var r, s, n, o, c = l.a.parseISOUTC(t.getSleepTimeGMT(a)), h = l.a.parseISOUTC(t.getWakeTimeGMT(a)), d = {
                        unmeasurableSleep: 0,
                        deepSleep: 0,
                        lightSleep: 0,
                        remSleep: 0,
                        awake: 0
                    };
                    if (e.length <= 0)
                        return !1;
                    for (var u = 0, p = e.length; u < p; u++)
                        r = e[u],
                        s = l.a.parseISOUTC(r.startGMT),
                        n = l.a.parseISOUTC(r.endGMT),
                        s.getTime() < c.getTime() || n.getTime() > h.getTime() || (o = this.calculateDuration(s, n) / 1e3,
                        i ? -1 === r.activityLevel ? d.unmeasurableSleep += o : 0 === r.activityLevel ? d.deepSleep += o : 1 === r.activityLevel ? d.lightSleep += o : 2 === r.activityLevel ? d.remSleep += o : 3 === r.activityLevel && (d.awake += o) : 0 === r.activityLevel ? d.deepSleep += o : 1 === r.activityLevel ? d.lightSleep += o : d.awake += o);
                    return d
                }
            }, {
                key: "calculateDuration",
                value: function(t, e) {
                    return t && e ? e.getTime() - t.getTime() : 0
                }
            }, {
                key: "getSleepBuffer",
                value: function(t) {
                    return t <= 3600 ? 0 : t > 36e3 ? Math.round(.1 * t / 60) : 60
                }
            }, {
                key: "getLevelChartColor",
                value: function(t, e) {
                    return -1 === t ? n.c.unmeasurable : 0 === t ? n.c.deep_sleep : 1 === t ? n.c.light_sleep : e && 2 === t ? n.c.rem_sleep : 2 === t || 3 === t ? n.c.awake : "transparent"
                }
            }, {
                key: "getLevelChartLabel",
                value: function(t, e) {
                    if (-1 === t)
                        return o.a.t("wellness:unmeasurable");
                    if (0 === t)
                        return o.a.t("wellness:deep");
                    if (1 === t)
                        return o.a.t("wellness:light");
                    if (e) {
                        if (2 === t)
                            return o.a.t("wellness:rem");
                        if (3 === t)
                            return o.a.t("wellness:awake")
                    } else if (2 === t)
                        return o.a.t("wellness:awake")
                }
            }, {
                key: "getDeviceId",
                value: function(t, e) {
                    if (c.a.hasDeviceWithCapability(t, e)) {
                        var a = c.a.getDevicesWithCapability(e, t)
                          , i = a.find(function(t) {
                            return t.primaryActivityTrackerIndicator
                        });
                        return i ? i.deviceId : a[0].deviceId
                    }
                }
            }, {
                key: "getIsManuallyEnteredSleep",
                value: function(t) {
                    return "off_wrist" === t.sleepWindowConfirmationType && t.sleepWindowConfirmed || "manually_confirmed" === t.sleepWindowConfirmationType && t.sleepWindowConfirmed && null === t.deepSleepSeconds && null === t.lightSleepSeconds && null === t.remSleepSeconds && null === t.awakeSleepSeconds && null === t.unmeasurableSleepSeconds
                }
            }, {
                key: "getIsUnmeasurableSleep",
                value: function(t) {
                    if (t) {
                        var e = t.dailySleepDTO;
                        if (e)
                            return ("off_wrist" === e.sleepWindowConfirmationType || "unconfirmed" === e.sleepWindowConfirmationType) && !e.sleepWindowConfirmed
                    }
                    return null
                }
            }, {
                key: "getForegroundChartFromActiveTab",
                value: function(t) {
                    var e = null;
                    switch (t) {
                    case n.b.levels:
                        e = n.a.levels;
                        break;
                    case n.b.pulseOx:
                        e = n.a.pulseOx;
                        break;
                    case n.b.respiration:
                        e = n.a.respiration
                    }
                    return e
                }
            }, {
                key: "getSleepTimeGMT",
                value: function(t) {
                    return t ? t.sleepStartTimestampGMT || t.autoSleepStartTimestampGMT : null
                }
            }, {
                key: "getWakeTimeGMT",
                value: function(t) {
                    return t ? t.sleepEndTimestampGMT || t.autoSleepEndTimestampGMT : null
                }
            }, {
                key: "getSleepChartMinAndMaxX",
                value: function(t) {
                    if (!t)
                        return null;
                    var e = t.dailySleepDTO
                      , a = this.getSleepTimeGMT(e)
                      , i = this.getWakeTimeGMT(e)
                      , r = this.getSleepBuffer(e.sleepTimeSeconds);
                    return {
                        min: a - 6e4 * r,
                        max: i + 6e4 * r
                    }
                }
            }, {
                key: "getBufferLevelSeries",
                value: function(t, e, a) {
                    for (var i = [], r = t; r <= e; r += a)
                        i.push([r, n.d]);
                    return {
                        type: "area",
                        data: i,
                        color: "transparent",
                        showInLegend: !1,
                        states: {
                            hover: {
                                enabled: !1,
                                halo: null
                            }
                        }
                    }
                }
            }, {
                key: "buildLevelSeriesForChart",
                value: function(e, a, i, r) {
                    var s = e.sleepLevels || []
                      , o = []
                      , c = this.getSleepTimeGMT(e.dailySleepDTO)
                      , h = this.getWakeTimeGMT(e.dailySleepDTO)
                      , d = this.getSleepChartMinAndMaxX(e)
                      , u = d.min
                      , p = d.max
                      , g = this.getIsUnmeasurableSleep(e)
                      , m = this.getIsManuallyEnteredSleep(e.dailySleepDTO);
                    if (i && !g) {
                        var f = u
                          , v = l.a.parseISOUTC(s && 0 !== s.length ? s[0].startGMT : c).getTime();
                        o.push(this.getBufferLevelSeries(f, v, 6e4))
                    }
                    if (m) {
                        var T = {
                            type: "area",
                            color: n.c.manually_entered,
                            showInLegend: !1,
                            data: [[c, n.d], [h, n.d]],
                            states: {
                                hover: {
                                    enabled: !1
                                }
                            }
                        };
                        o.push(T)
                    } else if (g) {
                        var _ = {
                            type: "area",
                            color: n.c.unmeasurable,
                            showInLegend: !1,
                            data: r ? [[c, 1], [h, 1]] : [[c, 0], [h, 0]],
                            states: {
                                hover: {
                                    enabled: !1
                                }
                            }
                        };
                        o.push(_)
                    } else
                        s.forEach(function(e) {
                            for (var r = l.a.parseISOUTC(e.startGMT), s = l.a.parseISOUTC(e.endGMT), c = t.getLevelChartColor(e.activityLevel, a), h = [], d = r.getTime(); d <= s.getTime(); d += 6e4) {
                                var u = i ? n.d : e.activityLevel + 1;
                                h.push([d, u])
                            }
                            o.push({
                                type: "area",
                                data: h,
                                color: c,
                                showInLegend: !1,
                                states: {
                                    hover: {
                                        enabled: !1
                                    }
                                }
                            })
                        });
                    if (i && !g) {
                        var A = p
                          , y = l.a.parseISOUTC(s && 0 !== s.length ? s[s.length - 1].endGMT : h).getTime();
                        o.push(this.getBufferLevelSeries(y, A, 6e4))
                    }
                    return [].concat(o)
                }
            }, {
                key: "getDynamicTextForSleepScoreFactorAndAgeGroup",
                value: function(t, e, a, i) {
                    if ("UNDEFINED" === e)
                        return null;
                    var r = "".concat(n.f[t].translation_key, "_dynamic_ideal")
                      , s = "".concat(a, "-").concat(i)
                      , l = "sleep_score_age_group_".concat(e);
                    return "".concat(o.a.t("wellness:" + r, {
                        0: s
                    }), " ").concat(o.a.t("wellness:" + l))
                }
            }, {
                key: "getEducationalTextsKeys",
                value: function(t) {
                    var e = t.reduce(function(t, e) {
                        return e.length > 1 ? [].concat(Object(i.a)(t), [e[Math.floor(Math.random() * e.length)]]) : [].concat(Object(i.a)(t), [e[0]])
                    }, []);
                    return [].concat(Object(i.a)(e), [e[e.length - 1] + "_LINK"])
                }
            }]),
            t
        }()
    },
    1295: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(13)
          , c = a(1323)
          , h = a(85)
          , d = a(216)
          , u = a(1233)
          , p = a.n(u)
          , g = a(1256)
          , m = a.n(g)
          , f = a(1420)
          , v = a.n(f)
          , T = a(15)
          , _ = a.n(T);
        m()(p.a),
        v()(p.a);
        e.a = n.a.View.extend({
            initialize: function(t) {
                this.report = t.report,
                this.reportType = t.reportType,
                this.activeTab = t.activeTab,
                this.metricList = t.metricList,
                this.metricPeriod = t.metricPeriod,
                this.userPreferences = t.userPreferences,
                this.daysInMonth = t.daysInMonth,
                this.chartType = t.chartType,
                this.chartFormat = t.chartFormat,
                this.currentDateOffset = t.currentDateOffset,
                this.startDateStr = t.startDateStr,
                this.fromDate = h.a.parseISO(this.startDateStr),
                this.untilDateStr = t.untilDateStr,
                this.toDate = h.a.parseISO(this.untilDateStr),
                this.initExportData(),
                this.initializeChart(t)
            },
            initExportData: function() {
                this.exportDataCount = 0,
                this.exportData = {
                    title: o.a.localize(this.report.metricName),
                    rows: []
                }
            },
            initializeChart: function(t) {},
            render: function() {
                this.calcStartingMonthDayAndYearNumbers(),
                this.getXAxisCategories(),
                this.yAxisTitle = this.determineYAxisTitle(),
                this.yAxisLabel = this.determineYAxisLabel(),
                this.initializeChartSeries(),
                this.createExportDataRowHeader(),
                this.compileStats(),
                null != this.chartSeries && (this.options = this.createOption(),
                this.setCategories(),
                this.setSeries(),
                this.customizeOptions(),
                this.chartObj = new p.a.Chart(this.el,this.options),
                this.postRender())
            },
            postRender: function() {},
            initializeChartSeries: function() {
                this.chartSeries = {}
            },
            createExportDataRowHeader: function() {},
            determineYAxisLabel: function() {
                return ""
            },
            compileStats: function() {
                this.metricList.each(this.processMetricList, this)
            },
            processMetricList: function(t) {
                var e = t.get("metricsMap")[this.report.metricName];
                if (e) {
                    this.metricAvailable = e.length;
                    for (var a = 0; a < e.length; a++)
                        this.addMetricToDataset(e[a])
                }
            },
            createZeroArray: function() {
                switch (this.metricPeriod) {
                case "daily":
                    return [0, 0, 0, 0, 0, 0, 0];
                case "weekly":
                    return [0, 0, 0, 0];
                case "monthly":
                    return [0, 0, 0, 0, 0, 0];
                case "yearly":
                    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
            },
            createNullArray: function() {
                switch (this.metricPeriod) {
                case "daily":
                    return [null, null, null, null, null, null, null];
                case "weekly":
                    return [null, null, null, null];
                case "monthly":
                    return [null, null, null, null, null, null];
                case "yearly":
                    return [null, null, null, null, null, null, null, null, null, null, null, null]
                }
            },
            getXAxisCategories: function() {
                switch (this.metricPeriod) {
                case "daily":
                    this.getDailyCategories();
                    break;
                case "weekly":
                    this.getWeeklyCategories();
                    break;
                case "monthly":
                    this.getMonthlyCategories();
                    break;
                case "yearly":
                    this.getYearlyCategories()
                }
            },
            createOption: function() {
                var t = {
                    chart: {
                        renderTo: "report-graph",
                        type: this.chartType,
                        backgroundColor: "transparent"
                    },
                    exporting: {
                        enabled: !1
                    },
                    credits: {
                        enabled: !1
                    },
                    title: {
                        text: ""
                    },
                    xAxis: {},
                    yAxis: {
                        min: 0,
                        title: {
                            text: "",
                            style: {
                                color: "#222"
                            }
                        },
                        labels: {
                            formatter: function() {
                                return l.a.formatDecimalNumber(this.value, 0) + " " + e.yAxisLabel
                            }
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: "#808080"
                        }],
                        allowDecimals: !1
                    },
                    legend: {
                        enabled: !1,
                        itemStyle: {
                            fontWeight: "normal"
                        }
                    },
                    plotOptions: {},
                    tooltip: {}
                }
                  , e = this;
                return "widget" == this.chartFormat ? (t.chart.height = 180,
                t.chart.width = 290,
                t.chart.events = {
                    click: function(t) {
                        t.preventDefault();
                        var a = "/report/" + e.report.metricId + "/" + e.reportType + "/" + e.activeTab;
                        n.a.history.navigate(a, {
                            trigger: !0
                        })
                    }
                }) : t.chart.zoomType = "x",
                t
            },
            setCategories: function() {
                this.options.xAxis = {
                    categories: this.categories
                }
            },
            setSeries: function() {
                this.options.series = r.a.toArray(this.chartSeries)
            },
            getDailyCategories: function() {
                this.categories = [];
                for (var t = -6; t <= 0; t++) {
                    var e = new Date;
                    e.setHours(12),
                    e.setMinutes(0),
                    e.setMilliseconds(0),
                    e.setDate(e.getDate() + this.currentDateOffset),
                    e.setDate(e.getDate() + t);
                    var a, i = e.getDay().toString();
                    a = o.a.localize("day." + i + ".short"),
                    this.categories.push(a)
                }
            },
            getWeeklyCategories: function() {
                if (this.categories = [],
                this.startDateStr)
                    for (var t = h.a.parseISO(this.startDateStr), e = this.userPreferences.get("dateFormat").formatKey, a = 0; a < 4; a++) {
                        var i = c.a.formatMonthDate(d.a.addDays(t, 7 * a), e);
                        this.categories.push(i)
                    }
                else {
                    var r = "0";
                    switch (this.userPreferences.get("firstDayOfWeek").dayName) {
                    case "saturday":
                        r = "6";
                        break;
                    case "monday":
                        r = "1"
                    }
                    for (a = this.daysInMonth; a <= 0; a++) {
                        var s = new Date;
                        if (s.setHours(12),
                        s.setMinutes(0),
                        s.setMilliseconds(0),
                        s.setDate(s.getDate() + this.currentDateOffset),
                        s.setDate(s.getDate() + a),
                        s.getDay().toString() == r) {
                            var n = s.getDate().toString()
                              , l = (s.getMonth() + 1).toString()
                              , u = this.userPreferences.get("dateFormat");
                            i = "";
                            i = "mmddyyyy" == u.formatKey || "yyyymmdd" == u.formatKey ? o.a.localize("month.abbr." + (l.length > 1 ? l : "0" + l)) + " " + n : n + " " + o.a.localize("month.abbr." + (l.length > 1 ? l : "0" + l)),
                            this.categories.push(i)
                        }
                    }
                }
            },
            getMonthlyCategories: function() {
                this.categories = [];
                for (var t = this.startMonth, e = this.startYear, a = 0; a < 6; a++) {
                    var i = new Date(e,t + 1,0,0,0,0,0).getMonth() + 1;
                    this.categories.push(o.a.localize("month.abbr." + (i > 9 ? i : "0" + i))),
                    ++t > 11 && (e++,
                    t = 0)
                }
            },
            getYearlyCategories: function() {
                this.categories = [];
                var t = _()(this.startDateStr)
                  , e = _()(this.untilDateStr);
                for (this.startMonth = t.month(); t.isBefore(e); ) {
                    t.add(1, "M");
                    var a = t.month();
                    this.categories.push(o.a.localize("month.abbr." + d.a.pad2(a || 12)))
                }
            },
            calcStartingMonthDayAndYearNumbers: function() {
                var t = new Date;
                switch (t.setHours(12),
                t.setMinutes(0),
                t.setMilliseconds(0),
                t.setDate(t.getDate() + this.currentDateOffset),
                this.metricPeriod) {
                case "daily":
                    break;
                case "weekly":
                    t.setMonth(t.getMonth() - 1);
                    break;
                case "monthly":
                    t.setMonth(t.getMonth() - 5);
                    break;
                case "yearly":
                    t.setMonth(t.getMonth() - 11)
                }
                this.startMonth = t.getMonth(),
                this.startYear = t.getFullYear(),
                this.startDate = t.getDate()
            },
            calculateDailyDataIndex: function(t) {
                var e = c.a.formatDate(this.currentDateOffset)
                  , a = 7 - c.a.determineNumberOfDays(t, e);
                return a < 0 || a > 6 ? -1 : a
            },
            calculateWeeklyDataIndex: function(t) {
                var e = t.split("-")
                  , a = new Date(e[0],e[1] - 1,e[2],0,0,0)
                  , i = a.getMonth() + 1
                  , r = a.getDate()
                  , s = this.userPreferences.get("dateFormat")
                  , n = "";
                n = "mmddyyyy" == s.formatKey || "yyyymmdd" == s.formatKey ? o.a.localize("month.abbr." + (i > 9 ? i : "0" + i)) + " " + r : r + " " + o.a.localize("month.abbr." + (i > 9 ? i : "0" + i));
                var l = this.categories.indexOf(n);
                return l < 0 || l > 3 ? -1 : l
            },
            calculateMonthlyDataIndex: function(t) {
                var e = o.a.localize("month.abbr." + (t > 9 ? t : "0" + t))
                  , a = this.categories.indexOf(e);
                return a < 0 || a > 5 ? -1 : a
            },
            calculateYearlyDataIndex: function(t, e) {
                var a = t - this.startMonth + 12 * (e - this.startYear);
                return a < 0 || a > 11 ? -1 : a
            },
            determineDataIndex: function(t) {
                var e = "";
                switch (this.metricPeriod) {
                case "daily":
                    e = this.calculateDailyDataIndex(t.calendarDate);
                    break;
                case "weekly":
                    e = this.calculateWeeklyDataIndex(t.startDateOfWeek);
                    break;
                case "monthly":
                    var a = t.month;
                    e = this.calculateMonthlyDataIndex(a.monthId);
                    break;
                case "yearly":
                    a = t.month;
                    e = this.calculateYearlyDataIndex(a.monthId - 1, a.year, this.startMonth, this.startYear)
                }
                return e
            },
            getExportData: function() {
                return this.exportData
            }
        })
    },
    1297: function(t, e, a) {
        "use strict";
        a.d(e, "a", function() {
            return s
        }),
        a.d(e, "e", function() {
            return d
        }),
        a.d(e, "b", function() {
            return u
        }),
        a.d(e, "d", function() {
            return p
        }),
        a.d(e, "c", function() {
            return g
        });
        var i = a(14)
          , r = a(1307)
          , s = {
            NORMAL: "#4BA900",
            MODERATE: "#FFF000",
            LOW: "#FF9900",
            HARMFUL: "#CC6600",
            UNMEASURABLE: "#888888",
            BLACK: "#000000",
            WHITE: "#FFFFFF",
            BACKGROUND_CHART: "#6D8595"
        }
          , n = "green"
          , o = "yellow"
          , l = "orange"
          , c = "red"
          , h = "grey"
          , d = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
              , e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return {
                max: 100,
                min: 60,
                tickInterval: 10,
                startOnTick: !1,
                gridLineWidth: t ? 1 : 0,
                labels: {
                    enabled: t,
                    align: "left",
                    x: 0,
                    y: -5,
                    formatter: function() {
                        return this.isFirst || e ? null : this.value + "%"
                    }
                },
                title: {
                    text: ""
                }
            }
        }
          , u = function(t, e) {
            switch (!0) {
            case 90 <= t && t <= 100:
                return e ? n : s.NORMAL;
            case 80 <= t && t < 90:
                return e ? o : s.MODERATE;
            case 70 <= t && t < 80:
                return e ? l : s.LOW;
            case t < 70:
                return e ? c : s.HARMFUL;
            default:
                return e ? h : s.UNMEASURABLE
            }
        }
          , p = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return {
                type: t ? "spline" : "areaspline",
                threshold: 101,
                negativeColor: t ? null : s.BACKGROUND_CHART,
                lineWidth: t ? 4 : 1,
                lineColor: t ? null : "transparent",
                showInLegend: !1,
                fillOpacity: t ? 1 : .25,
                zIndex: t ? void 0 : -1,
                marker: {
                    enabled: !1,
                    symbol: "circle",
                    states: {
                        hover: {
                            radius: 4,
                            fillColor: s.BLACK,
                            lineWidthPlus: 0
                        }
                    }
                },
                states: {
                    hover: {
                        halo: null,
                        lineWidthPlus: 0
                    }
                },
                zones: t ? [].concat(Object(i.a)(m(s.HARMFUL, s.LOW, 68, 72, 20)), Object(i.a)(m(s.LOW, s.MODERATE, 78, 82, 20)), Object(i.a)(m(s.MODERATE, s.NORMAL, 88, 92, 20)), [{
                    value: 101,
                    color: s.NORMAL
                }]) : null
            }
        }
          , g = function(t) {
            return t < 0 ? "--" : "".concat(t, "%")
        }
          , m = function(t, e, a, s) {
            var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 10;
            if (!t || !e || !a || !s)
                return null;
            for (var o = [], l = Object(r.a)(t), c = Object(r.a)(e), h = s - a, d = 0; d <= n; d++) {
                var u = Number((h / n * d).toFixed(2))
                  , p = u / h;
                o.push({
                    value: a + u,
                    color: r.d.apply(void 0, Object(i.a)(Object(r.c)(l, c, p)))
                })
            }
            return o
        }
    },
    1302: function(t, e, a) {
        "use strict";
        e.a = {
            ACTIVITY_ACTIVE_CALORIES: "ACTIVITY_ACTIVE_CALORIES",
            ACTIVITY_AVERAGE_SPEED: "ACTIVITY_AVERAGE_SPEED",
            ACTIVITY_AVERAGE_PACE: "ACTIVITY_AVERAGE_PACE",
            ACTIVITY_AVERAGE_SWIM_PACE: "ACTIVITY_AVERAGE_SWIM_PACE",
            ACTIVITY_AVERAGE_HEART_RATE: "ACTIVITY_AVERAGE_HEART_RATE",
            ACTIVITY_MAX_HEART_RATE: "ACTIVITY_MAX_HEART_RATE",
            ACTIVITY_AVERAGE_POWER: "ACTIVITY_AVERAGE_POWER",
            ACTIVITY_AVERAGE_BIKE_CADENCE: "ACTIVITY_AVERAGE_BIKE_CADENCE",
            ACTIVITY_AVERAGE_RUN_CADENCE: "ACTIVITY_AVERAGE_RUN_CADENCE",
            ACTIVITY_NORMALIZED_POWER: "ACTIVITY_NORMALIZED_POWER",
            ACTIVITY_MAX_20_MIN_AVERAGE_POWER: "ACTIVITY_MAX_20_MIN_AVERAGE_POWER",
            ACTIVITY_VERTICAL_OSCILLATION: "ACTIVITY_VERTICAL_OSCILLATION",
            ACTIVITY_GROUND_CONTACT_TIME: "ACTIVITY_GROUND_CONTACT_TIME",
            ACTIVITY_AVERAGE_STROKES: "ACTIVITY_AVERAGE_STROKES",
            ACTIVITY_AVERAGE_SWOLF: "ACTIVITY_AVERAGE_SWOLF",
            ACTIVITY_MINIMUM_SWOLF: "ACTIVITY_MINIMUM_SWOLF",
            ACTIVITY_NUMBER_OF_ACTIVITIES: "ACTIVITY_NUMBER_OF_ACTIVITIES",
            ACTIVITY_TOTAL_DISTANCE: "ACTIVITY_TOTAL_DISTANCE",
            ACTIVITY_TOTAL_DURATION: "ACTIVITY_TOTAL_DURATION",
            ACTIVITY_TRAINING_STRESS_SCORE: "ACTIVITY_TRAINING_STRESS_SCORE",
            ACTIVITY_VO2_MAX: "ACTIVITY_VO2_MAX",
            ACTIVITY_VO2_MAX_CYCLING: "ACTIVITY_VO2_MAX_CYCLING",
            ACTIVITY_AVG_GROUND_CONTACT_BALANCE: "ACTIVITY_AVG_GROUND_CONTACT_BALANCE",
            ACTIVITY_AVG_STRIDE_LENGTH: "ACTIVITY_AVG_STRIDE_LENGTH",
            ACTIVITY_AVG_VERTICAL_RATIO: "ACTIVITY_AVG_VERTICAL_RATIO",
            ACTIVITY_AVG_LACTATE_THRESHOLD_BPM: "ACTIVITY_AVG_LACTATE_THRESHOLD_BPM",
            ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC: "ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC",
            COMMON_TOTAL_CALORIES: "COMMON_TOTAL_CALORIES",
            WELLNESS_TOTAL_STEPS: "WELLNESS_TOTAL_STEPS",
            SLEEP_SLEEP_DURATION: "SLEEP_SLEEP_DURATION",
            SLEEP_SLEEP_SCORE: "SLEEP_SLEEP_SCORE",
            FOOD_CALORIES_CONSUMED: "FOOD_CALORIES_CONSUMED",
            ACTIVITY_MAX_FTP: "ACTIVITY_MAX_FTP",
            FOOD_CALORIES_REMAINING: "FOOD_CALORIES_REMAINING",
            WELLNESS_FLOORS_ASCENDED: "WELLNESS_FLOORS_ASCENDED",
            WELLNESS_MODERATE_INTENSITY_MINUTES: "WELLNESS_MODERATE_INTENSITY_MINUTES",
            WELLNESS_RESTING_HEART_RATE: "WELLNESS_RESTING_HEART_RATE",
            ACTIVITY_AEROBIC_TRAINING_EFFECT: "ACTIVITY_AEROBIC_TRAINING_EFFECT",
            ACTIVITY_ANAEROBIC_TRAINING_EFFECT: "ACTIVITY_ANAEROBIC_TRAINING_EFFECT",
            ACTIVITY_AEROBIC_TRAINING_EFFECT_CYCLING: "ACTIVITY_AEROBIC_TRAINING_EFFECT_CYCLING",
            ACTIVITY_ANAEROBIC_TRAINING_EFFECT_CYCLING: "ACTIVITY_ANAEROBIC_TRAINING_EFFECT_CYCLING",
            WELLNESS_AVERAGE_STRESS: "WELLNESS_AVERAGE_STRESS",
            ACTIVITY_TRAINING_STATUS: "ACTIVITY_TRAINING_STATUS",
            ACTIVITY_TRAINING_STATUS_CYCLING: "ACTIVITY_TRAINING_STATUS_CYCLING",
            ACTIVITY_HRV_STRESS_TEST: "ACTIVITY_HRV_STRESS_TEST",
            STRENGTH_TRAINING: "STRENGTH_TRAINING",
            PILATES: "PILATES",
            WELLNESS_BODYBATTERY_CHARGED: "WELLNESS_BODYBATTERY_CHARGED",
            WELLNESS_BODYBATTERY_DRAINED: "WELLNESS_BODYBATTERY_DRAINED",
            OUTDOOR_PULSE_OX_ACCLIMATION: "OUTDOOR_PULSE_OX_ACCLIMATION",
            ACTIVITY_POWER_CURVE_CYCLING: "ACTIVITY_POWER_CURVE_CYCLING",
            WELLNESS_HYDRATION: "WELLNESS_HYDRATION",
            MENSTRUAL_CYCLE_TRACKING_REPORTS: "MENSTRUAL_CYCLE_TRACKING_REPORTS",
            ALL_DAY_PULSE_OX: "ALL_DAY_PULSE_OX",
            ALL_DAY_RESPIRATION: "ALL_DAY_RESPIRATION",
            ACTIVITY_AVERAGE_RESPIRATION_RATE: "ACTIVITY_AVERAGE_RESPIRATION_RATE",
            ACTIVITY_TOTAL_DURATION_WITH_FILTERING: "ACTIVITY_TOTAL_DURATION_WITH_FILTERING",
            REPORTS_AVERAGE_SWIM_PACE: "REPORTS_AVERAGE_SWIM_PACE",
            REPORTS_AVERAGE_CYCLING_PACE: "REPORTS_AVERAGE_CYCLING_PACE",
            REPORTS_AVERAGE_RUNNING_PACE: "REPORTS_AVERAGE_RUNNING_PACE",
            PREGNANCY_TRACKING_REPORTS: "PREGNANCY_TRACKING_REPORTS"
        }
    },
    1307: function(t, e, a) {
        "use strict";
        a.d(e, "a", function() {
            return i
        }),
        a.d(e, "b", function() {
            return r
        }),
        a.d(e, "d", function() {
            return s
        }),
        a.d(e, "c", function() {
            return n
        });
        var i = function(t) {
            t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, a, i) {
                return e + e + a + a + i + i
            });
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : null
        }
          , r = function(t) {
            var e = i(t);
            return "rgba(".concat(e[0], ", ").concat(e[1], ", ").concat(e[2], ", 1)")
        }
          , s = function(t, e, a) {
            return "#" + ((1 << 24) + (t << 16) + (e << 8) + a).toString(16).slice(1)
        }
          , n = function(t, e, a) {
            var i = (2 * (1 - a) - 1 + 1) / 2
              , r = 1 - i;
            return [Math.round(t[0] * i + e[0] * r), Math.round(t[1] * i + e[1] * r), Math.round(t[2] * i + e[2] * r)]
        }
    },
    1324: function(t, e, a) {
        "use strict";
        e.a = {
            calendarSyncCapMap: [{
                header: "training.plans.workouts",
                bodyText: "training.plans.workouts",
                capabilities: ["trainingPlanCapable", "workoutCapable"]
            }],
            getCapabilityValue: function(t, e) {
                var a = !1;
                return t && e.forEach(function(e) {
                    a = t[e]
                }),
                a
            },
            hasDeviceWithCapability: function(t, e) {
                var a = !1;
                return !!t && (t.forEach(function(t) {
                    t[e] && (a = !0)
                }),
                a)
            },
            getDevicesWithCapability: function(t, e) {
                var a = [];
                return e.forEach(function(e) {
                    e[t] && a.push(e)
                }),
                a
            }
        }
    },
    1356: function(t, e, a) {
        "use strict";
        var i = {
            SECS_IN_ONE_HOUR: 3600,
            SECS_IN_ONE_DAY: 86400,
            MS_IN_ONE_HOUR: 36e5,
            MS_IN_ONE_DAY: 864e5,
            MAX_REST: 25,
            SECS_IN_ONE_MIN: 60,
            MS_IN_ONE_MIN: 6e4
        };
        e.a = i
    },
    1420: function(t, e, a) {
        var i, r;
        r = function(t) {
            !function(t) {
                var e = t.defaultOptions
                  , a = t.doc
                  , i = t.Chart
                  , r = t.addEvent
                  , s = t.removeEvent
                  , n = t.fireEvent
                  , o = t.createElement
                  , l = t.discardElement
                  , c = t.css
                  , h = t.merge
                  , d = t.pick
                  , u = t.each
                  , p = t.objectEach
                  , g = t.extend
                  , m = t.isTouchDevice
                  , f = t.win
                  , v = f.navigator.userAgent
                  , T = t.Renderer.prototype.symbols;
                /Edge\/|Trident\/|MSIE /.test(v),
                /firefox/i.test(v),
                g(e.lang, {
                    printChart: "Print chart",
                    downloadPNG: "Download PNG image",
                    downloadJPEG: "Download JPEG image",
                    downloadPDF: "Download PDF document",
                    downloadSVG: "Download SVG vector image",
                    contextButtonTitle: "Chart context menu"
                }),
                e.navigation = {
                    buttonOptions: {
                        theme: {},
                        symbolSize: 14,
                        symbolX: 12.5,
                        symbolY: 10.5,
                        align: "right",
                        buttonSpacing: 3,
                        height: 22,
                        verticalAlign: "top",
                        width: 24
                    }
                },
                h(!0, e.navigation, {
                    menuStyle: {
                        border: "1px solid #999999",
                        background: "#ffffff",
                        padding: "5px 0"
                    },
                    menuItemStyle: {
                        padding: "0.5em 1em",
                        background: "none",
                        color: "#333333",
                        fontSize: m ? "14px" : "11px",
                        transition: "background 250ms, color 250ms"
                    },
                    menuItemHoverStyle: {
                        background: "#335cad",
                        color: "#ffffff"
                    },
                    buttonOptions: {
                        symbolFill: "#666666",
                        symbolStroke: "#666666",
                        symbolStrokeWidth: 3,
                        theme: {
                            fill: "#ffffff",
                            stroke: "none",
                            padding: 5
                        }
                    }
                }),
                e.exporting = {
                    type: "image/png",
                    url: "https://export.highcharts.com/",
                    printMaxWidth: 780,
                    scale: 2,
                    buttons: {
                        contextButton: {
                            className: "highcharts-contextbutton",
                            menuClassName: "highcharts-contextmenu",
                            symbol: "menu",
                            titleKey: "contextButtonTitle",
                            menuItems: "printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")
                        }
                    },
                    menuItemDefinitions: {
                        printChart: {
                            textKey: "printChart",
                            onclick: function() {
                                this.print()
                            }
                        },
                        separator: {
                            separator: !0
                        },
                        downloadPNG: {
                            textKey: "downloadPNG",
                            onclick: function() {
                                this.exportChart()
                            }
                        },
                        downloadJPEG: {
                            textKey: "downloadJPEG",
                            onclick: function() {
                                this.exportChart({
                                    type: "image/jpeg"
                                })
                            }
                        },
                        downloadPDF: {
                            textKey: "downloadPDF",
                            onclick: function() {
                                this.exportChart({
                                    type: "application/pdf"
                                })
                            }
                        },
                        downloadSVG: {
                            textKey: "downloadSVG",
                            onclick: function() {
                                this.exportChart({
                                    type: "image/svg+xml"
                                })
                            }
                        }
                    }
                },
                t.post = function(t, e, i) {
                    var r = o("form", h({
                        method: "post",
                        action: t,
                        enctype: "multipart/form-data"
                    }, i), {
                        display: "none"
                    }, a.body);
                    p(e, function(t, e) {
                        o("input", {
                            type: "hidden",
                            name: e,
                            value: t
                        }, null, r)
                    }),
                    r.submit(),
                    l(r)
                }
                ,
                g(i.prototype, {
                    sanitizeSVG: function(t, e) {
                        if (e && e.exporting && e.exporting.allowHTML) {
                            var a = t.match(/<\/svg>(.*?$)/);
                            a && a[1] && (a = '<foreignObject x="0" y="0" width="' + e.chart.width + '" height="' + e.chart.height + '"><body xmlns="http://www.w3.org/1999/xhtml">' + a[1] + "</body></foreignObject>",
                            t = t.replace("</svg>", a + "</svg>"))
                        }
                        return t = t.replace(/zIndex="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g, "url($2)").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+\:)href=/g, " xlink:href=").replace(/\n/, " ").replace(/<\/svg>.*?$/, "</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, "\xa0").replace(/&shy;/g, "\xad"),
                        this.ieSanitizeSVG && (t = this.ieSanitizeSVG(t)),
                        t
                    },
                    getChartHTML: function() {
                        return this.container.innerHTML
                    },
                    getSVG: function(e) {
                        var i, r, s, c, d, p = h(this.options, e);
                        return r = o("div", null, {
                            position: "absolute",
                            top: "-9999em",
                            width: this.chartWidth + "px",
                            height: this.chartHeight + "px"
                        }, a.body),
                        s = this.renderTo.style.width,
                        d = this.renderTo.style.height,
                        s = p.exporting.sourceWidth || p.chart.width || /px$/.test(s) && parseInt(s, 10) || 600,
                        d = p.exporting.sourceHeight || p.chart.height || /px$/.test(d) && parseInt(d, 10) || 400,
                        g(p.chart, {
                            animation: !1,
                            renderTo: r,
                            forExport: !0,
                            renderer: "SVGRenderer",
                            width: s,
                            height: d
                        }),
                        p.exporting.enabled = !1,
                        delete p.data,
                        p.series = [],
                        u(this.series, function(t) {
                            (c = h(t.userOptions, {
                                animation: !1,
                                enableMouseTracking: !1,
                                showCheckbox: !1,
                                visible: t.visible
                            })).isInternal || p.series.push(c)
                        }),
                        u(this.axes, function(e) {
                            e.userOptions.internalKey || (e.userOptions.internalKey = t.uniqueKey())
                        }),
                        i = new t.Chart(p,this.callback),
                        e && u(["xAxis", "yAxis", "series"], function(t) {
                            var a = {};
                            e[t] && (a[t] = e[t],
                            i.update(a))
                        }),
                        u(this.axes, function(e) {
                            var a = t.find(i.axes, function(t) {
                                return t.options.internalKey === e.userOptions.internalKey
                            })
                              , r = (s = e.getExtremes()).userMin
                              , s = s.userMax;
                            a && (void 0 !== r && r !== a.min || void 0 !== s && s !== a.max) && a.setExtremes(r, s, !0, !1)
                        }),
                        s = i.getChartHTML(),
                        n(this, "getSVG", {
                            chartCopy: i
                        }),
                        s = this.sanitizeSVG(s, p),
                        p = null,
                        i.destroy(),
                        l(r),
                        s
                    },
                    getSVGForExport: function(t, e) {
                        var a = this.options.exporting;
                        return this.getSVG(h({
                            chart: {
                                borderRadius: 0
                            }
                        }, a.chartOptions, e, {
                            exporting: {
                                sourceWidth: t && t.sourceWidth || a.sourceWidth,
                                sourceHeight: t && t.sourceHeight || a.sourceHeight
                            }
                        }))
                    },
                    exportChart: function(e, a) {
                        a = this.getSVGForExport(e, a),
                        e = h(this.options.exporting, e),
                        t.post(e.url, {
                            filename: e.filename || "chart",
                            type: e.type,
                            width: e.width || 0,
                            scale: e.scale,
                            svg: a
                        }, e.formAttributes)
                    },
                    print: function() {
                        var t, e, i = this, r = i.container, s = [], o = r.parentNode, l = a.body, c = l.childNodes, h = i.options.exporting.printMaxWidth;
                        i.isPrinting || (i.isPrinting = !0,
                        i.pointer.reset(null, 0),
                        n(i, "beforePrint"),
                        (e = h && i.chartWidth > h) && (t = [i.options.chart.width, void 0, !1],
                        i.setSize(h, void 0, !1)),
                        u(c, function(t, e) {
                            1 === t.nodeType && (s[e] = t.style.display,
                            t.style.display = "none")
                        }),
                        l.appendChild(r),
                        setTimeout(function() {
                            f.focus(),
                            f.print(),
                            setTimeout(function() {
                                o.appendChild(r),
                                u(c, function(t, e) {
                                    1 === t.nodeType && (t.style.display = s[e])
                                }),
                                i.isPrinting = !1,
                                e && i.setSize.apply(i, t),
                                n(i, "afterPrint")
                            }, 1e3)
                        }, 1))
                    },
                    contextMenu: function(e, i, s, n, l, h, d) {
                        var p, m = this, f = m.options.navigation, v = m.chartWidth, T = m.chartHeight, _ = "cache-" + e, A = m[_], y = Math.max(l, h);
                        A || (m.exportContextMenu = m[_] = A = o("div", {
                            className: e
                        }, {
                            position: "absolute",
                            zIndex: 1e3,
                            padding: y + "px",
                            pointerEvents: "auto"
                        }, m.fixedDiv || m.container),
                        p = o("div", {
                            className: "highcharts-menu"
                        }, null, A),
                        c(p, g({
                            MozBoxShadow: "3px 3px 10px #888",
                            WebkitBoxShadow: "3px 3px 10px #888",
                            boxShadow: "3px 3px 10px #888"
                        }, f.menuStyle)),
                        A.hideMenu = function() {
                            c(A, {
                                display: "none"
                            }),
                            d && d.setState(0),
                            m.openMenu = !1,
                            t.clearTimeout(A.hideTimer)
                        }
                        ,
                        m.exportEvents.push(r(A, "mouseleave", function() {
                            A.hideTimer = setTimeout(A.hideMenu, 500)
                        }), r(A, "mouseenter", function() {
                            t.clearTimeout(A.hideTimer)
                        }), r(a, "mouseup", function(t) {
                            m.pointer.inClass(t.target, e) || A.hideMenu()
                        }), r(A, "click", function() {
                            m.openMenu && A.hideMenu()
                        })),
                        u(i, function(e) {
                            var a;
                            ("string" === typeof e && (e = m.options.exporting.menuItemDefinitions[e]),
                            t.isObject(e, !0)) && (e.separator ? a = o("hr", null, null, p) : ((a = o("div", {
                                className: "highcharts-menu-item",
                                onclick: function(t) {
                                    t && t.stopPropagation(),
                                    A.hideMenu(),
                                    e.onclick && e.onclick.apply(m, arguments)
                                },
                                innerHTML: e.text || m.options.lang[e.textKey]
                            }, null, p)).onmouseover = function() {
                                c(this, f.menuItemHoverStyle)
                            }
                            ,
                            a.onmouseout = function() {
                                c(this, f.menuItemStyle)
                            }
                            ,
                            c(a, g({
                                cursor: "pointer"
                            }, f.menuItemStyle))),
                            m.exportDivElements.push(a))
                        }),
                        m.exportDivElements.push(p, A),
                        m.exportMenuWidth = A.offsetWidth,
                        m.exportMenuHeight = A.offsetHeight),
                        i = {
                            display: "block"
                        },
                        s + m.exportMenuWidth > v ? i.right = v - s - l - y + "px" : i.left = s - y + "px",
                        n + h + m.exportMenuHeight > T && "top" !== d.alignOptions.verticalAlign ? i.bottom = T - n - y + "px" : i.top = n + h - y + "px",
                        c(A, i),
                        m.openMenu = !0
                    },
                    addButton: function(t) {
                        var e, a, i = this, r = i.renderer, s = h(i.options.navigation.buttonOptions, t), n = s.onclick, o = s.menuItems, l = s.symbolSize || 12;
                        if (i.btnCount || (i.btnCount = 0),
                        i.exportDivElements || (i.exportDivElements = [],
                        i.exportSVGElements = []),
                        !1 !== s.enabled) {
                            var c, u = s.theme, p = (m = u.states) && m.hover, m = m && m.select;
                            delete u.states,
                            n ? c = function(t) {
                                t && t.stopPropagation(),
                                n.call(i, t)
                            }
                            : o && (c = function(t) {
                                t && t.stopPropagation(),
                                i.contextMenu(a.menuClassName, o, a.translateX, a.translateY, a.width, a.height, a),
                                a.setState(2)
                            }
                            ),
                            s.text && s.symbol ? u.paddingLeft = d(u.paddingLeft, 25) : s.text || g(u, {
                                width: s.width,
                                height: s.height,
                                padding: 0
                            }),
                            (a = r.button(s.text, 0, 0, c, u, p, m).addClass(t.className).attr({
                                "stroke-linecap": "round",
                                title: d(i.options.lang[s._titleKey || s.titleKey], "")
                            })).menuClassName = t.menuClassName || "highcharts-menu-" + i.btnCount++,
                            s.symbol && (e = r.symbol(s.symbol, s.symbolX - l / 2, s.symbolY - l / 2, l, l, {
                                width: l,
                                height: l
                            }).addClass("highcharts-button-symbol").attr({
                                zIndex: 1
                            }).add(a)).attr({
                                stroke: s.symbolStroke,
                                fill: s.symbolFill,
                                "stroke-width": s.symbolStrokeWidth || 1
                            }),
                            a.add(i.exportingGroup).align(g(s, {
                                width: a.width,
                                x: d(s.x, i.buttonOffset)
                            }), !0, "spacingBox"),
                            i.buttonOffset += (a.width + s.buttonSpacing) * ("right" === s.align ? -1 : 1),
                            i.exportSVGElements.push(a, e)
                        }
                    },
                    destroyExport: function(e) {
                        var a = e ? e.target : this;
                        e = a.exportSVGElements;
                        var i, r = a.exportDivElements, n = a.exportEvents;
                        e && (u(e, function(t, e) {
                            t && (t.onclick = t.ontouchstart = null,
                            i = "cache-" + t.menuClassName,
                            a[i] && delete a[i],
                            a.exportSVGElements[e] = t.destroy())
                        }),
                        e.length = 0),
                        a.exportingGroup && (a.exportingGroup.destroy(),
                        delete a.exportingGroup),
                        r && (u(r, function(e, i) {
                            t.clearTimeout(e.hideTimer),
                            s(e, "mouseleave"),
                            a.exportDivElements[i] = e.onmouseout = e.onmouseover = e.ontouchstart = e.onclick = null,
                            l(e)
                        }),
                        r.length = 0),
                        n && (u(n, function(t) {
                            t()
                        }),
                        n.length = 0)
                    }
                }),
                T.menu = function(t, e, a, i) {
                    return ["M", t, e + 2.5, "L", t + a, e + 2.5, "M", t, e + i / 2 + .5, "L", t + a, e + i / 2 + .5, "M", t, e + i - 1.5, "L", t + a, e + i - 1.5]
                }
                ,
                i.prototype.renderExporting = function() {
                    var t = this
                      , e = t.options.exporting
                      , a = e.buttons
                      , i = t.isDirtyExporting || !t.exportSVGElements;
                    t.buttonOffset = 0,
                    t.isDirtyExporting && t.destroyExport(),
                    i && !1 !== e.enabled && (t.exportEvents = [],
                    t.exportingGroup = t.exportingGroup || t.renderer.g("exporting-group").attr({
                        zIndex: 3
                    }).add(),
                    p(a, function(e) {
                        t.addButton(e)
                    }),
                    t.isDirtyExporting = !1),
                    r(t, "destroy", t.destroyExport)
                }
                ,
                r(i, "init", function() {
                    var t = this;
                    u(["exporting", "navigation"], function(e) {
                        t[e] = {
                            update: function(a, i) {
                                t.isDirtyExporting = !0,
                                h(!0, t.options[e], a),
                                d(i, !0) && t.redraw()
                            }
                        }
                    })
                }),
                i.prototype.callbacks.push(function(t) {
                    t.renderExporting(),
                    r(t, "redraw", t.renderExporting)
                })
            }(t)
        }
        ,
        "object" === typeof t && t.exports ? t.exports = r : void 0 === (i = function() {
            return r
        }
        .call(e, a, e, t)) || (t.exports = i)
    },
    1450: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i).a.Model.extend({});
        e.a = r
    },
    1458: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = (a(6),
        a(104))
          , l = a(1544)
          , c = a.n(l);
        e.a = n.a.View.extend({
            template: r.a.template(c.a),
            initialize: function(t) {
                if (this.reactComponent = t.reactComponent,
                !this.reactComponent)
                    throw Error("reactComponent is required!");
                this.additionalClasses = t.additionalClasses || "",
                this.args = t
            },
            render: function() {
                return this.$el.html(this.template({
                    additionalClasses: this.additionalClasses
                })),
                this.r = new o.a,
                this.r.renderComponent(this.reactComponent, this.$(".react-placeholder")[0], this.args.props),
                this
            },
            destroy: function() {
                this.r && this.r.removeComponent()
            }
        })
    },
    1459: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = a(85)
          , n = a(216)
          , o = {
            Beginner: "lt-grey",
            Intermediate: "lt-grey"
        };
        e.a = r.a.Model.extend({
            isHeartRateBased: function() {
                return !1
            },
            isPowerBased: function() {
                return !1
            },
            getActivityIconClass: function() {
                return "icon-activity-" + (this.has("trainingType") ? this.get("trainingType").typeKey.toLowerCase() : "running")
            },
            getLevelColor: function(t) {
                return o[t]
            },
            getPlanUrl: function() {
                return "/training-plans/plan/" + this.get("athletePlanId")
            },
            isAdaptive: function() {
                return !0
            },
            getCoachName: function() {
                return this.has("coach") ? this.get("coach").firstName + " " + this.get("coach").lastName : ""
            },
            get: function(t) {
                switch (t) {
                case "durationInWeeks":
                    return n.a.calculateWeekDifference(this.get("registrationDate").split("T")[0], this.get("athleteRace").raceDay) + 1;
                case "avgWeeklyWorkouts":
                    return this.get("workoutsPerWeek");
                case "startDate":
                    return s.a.parseISO(this.get("registrationDate"));
                case "endDate":
                    return s.a.parseISO(this.get("athleteRace").raceDay);
                default:
                    return r.a.Model.prototype.get.call(this, t)
                }
            }
        })
    },
    1485: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i).a.Model.extend({
            idAttribute: "activityId",
            initialize: function(t) {
                this.displayName = t.displayName
            },
            url: function() {
                return "/proxy/activitylist-service/activities/commentsById/" + this.displayName + "?id=" + this.id
            }
        });
        e.a = r
    },
    1498: function(t, e, a) {
        "use strict";
        var i = a(85)
          , r = {
            AVAILABLE_CHARTS: {
                levels: "chart_levels",
                movement: "chart_movement",
                pulseOx: "chart_pulseOx",
                respiration: "chart_respiration"
            },
            CHART_52_WEEKS_LENGTH: 13,
            SCORE_YEAR_REPORT_WEEKS_COUNT: 52,
            getTotalSleepTypeDurations: function(t) {
                var e, a, r, s, n = t.sleepLevelsData, o = t.isRemCapable, l = i.a.parseISOUTC(t.sleepStartTimestampGMT), c = i.a.parseISOUTC(t.sleepEndTimestampGMT), h = {
                    unmeasurableSleep: 0,
                    deepSleep: 0,
                    lightSleep: 0,
                    remSleep: 0,
                    awake: 0
                };
                if (!n || n.length <= 0)
                    return !1;
                for (var d = 0, u = n.length; d < u; d++)
                    e = n[d],
                    a = i.a.parseISOUTC(e.startGMT),
                    r = i.a.parseISOUTC(e.endGMT),
                    a.getTime() < l.getTime() || r.getTime() > c.getTime() || (s = this.calculateDuration(a, r) / 1e3,
                    o ? -1 === e.activityLevel ? h.unmeasurableSleep += s : 0 === e.activityLevel ? h.deepSleep += s : 1 === e.activityLevel ? h.lightSleep += s : 2 === e.activityLevel ? h.remSleep += s : 3 === e.activityLevel && (h.awake += s) : 0 === e.activityLevel ? h.deepSleep += s : 1 === e.activityLevel ? h.lightSleep += s : h.awake += s);
                return h
            },
            calculateDuration: function(t, e) {
                return t && e ? e.getTime() - t.getTime() : 0
            }
        };
        e.a = r
    },
    1511: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = a(1459).a.extend({});
        e.a = r.a.Collection.extend({
            model: s,
            url: function() {
                return "/proxy/atp/athlete/active"
            }
        })
    },
    1541: function(t, e, a) {
        "use strict";
        var i = a(83)
          , r = a(84)
          , s = a(103)
          , n = a(101)
          , o = a(102)
          , l = a(11)
          , c = a.n(l)
          , h = a(1297)
          , d = a(1289)
          , u = a(186)
          , p = a(1542)
          , g = a.n(p)
          , m = function(t) {
            function e() {
                return Object(i.a)(this, e),
                Object(s.a)(this, Object(n.a)(e).apply(this, arguments))
            }
            return Object(o.a)(e, t),
            Object(r.a)(e, [{
                key: "getPulseOxLevels",
                value: function() {
                    return [{
                        color: h.a.NORMAL,
                        description: c.a.createElement(u.a, {
                            ns: "pulse_ox",
                            content: "pulse_ox_key_normal"
                        })
                    }, {
                        color: h.a.MODERATE,
                        description: c.a.createElement(u.a, {
                            ns: "pulse_ox",
                            content: "pulse_ox_key_moderate"
                        })
                    }, {
                        color: h.a.LOW,
                        description: c.a.createElement(u.a, {
                            ns: "pulse_ox",
                            content: "pulse_ox_key_low"
                        })
                    }, {
                        color: h.a.HARMFUL,
                        description: c.a.createElement(u.a, {
                            ns: "pulse_ox",
                            content: "pulse_ox_key_harmful"
                        })
                    }]
                }
            }, {
                key: "render",
                value: function() {
                    var t = g.a.container
                      , e = g.a.mainContainer
                      , a = g.a.mainTitle
                      , i = this.props
                      , r = i.registeredDeviceList
                      , s = i.hideTitle
                      , n = r ? d.a.getDeviceId(r, "pulseOxSleepCapable") || d.a.getDeviceId(r, "pulseOxAllDayCapable") : null;
                    return c.a.createElement(c.a.Fragment, null, !s && c.a.createElement("h3", {
                        className: a
                    }, c.a.createElement(u.a, {
                        ns: "wellness",
                        content: "sleep_help_title_21"
                    })), c.a.createElement(u.a, {
                        tag: "p",
                        ns: "device",
                        content: "pulse_ox_help_text_1"
                    }), c.a.createElement(u.a, {
                        tag: "p",
                        ns: "device",
                        content: "pulse_ox_help_text_2"
                    }), this.renderPulseOxLevels(), c.a.createElement("div", {
                        className: t
                    }, c.a.createElement("h5", {
                        className: e
                    }, c.a.createElement(u.a, {
                        ns: "device",
                        content: "pulse_ox_help_title_1"
                    })), c.a.createElement("p", null, c.a.createElement(u.a, {
                        ns: "device",
                        content: "pulse_ox_help_text_3"
                    })), c.a.createElement("h5", {
                        className: e
                    }, c.a.createElement(u.a, {
                        ns: "wellness",
                        content: "sleep_modal_pulse_ox_getting_started"
                    })), c.a.createElement("p", null, c.a.createElement(u.a, {
                        ns: "device",
                        content: "pulse_ox_help_text_4"
                    })), c.a.createElement("p", null, c.a.createElement(u.a, {
                        ns: "device",
                        content: "pulse_ox_help_text_5"
                    })), c.a.createElement("p", null, c.a.createElement(u.a, {
                        ns: "device",
                        content: "pulse_ox_help_text_6"
                    })), n && c.a.createElement(u.a, {
                        tag: "p",
                        ns: "device",
                        content: "pulse_ox_help_text_7"
                    })))
                }
            }, {
                key: "renderPulseOxLevels",
                value: function() {
                    var t = g.a.colorCircle
                      , e = g.a.descriptionContainer;
                    return this.getPulseOxLevels().map(function(a) {
                        return c.a.createElement("div", {
                            key: a.color,
                            className: e
                        }, c.a.createElement("div", {
                            className: t
                        }, c.a.createElement("span", {
                            style: {
                                backgroundColor: a.color
                            }
                        })), c.a.createElement("p", {
                            className: "marBottomXS"
                        }, a.description))
                    })
                }
            }]),
            e
        }(c.a.Component);
        e.a = m
    },
    1542: function(t, e, a) {
        var i = a(1543);
        "string" === typeof i && (i = [[t.i, i, ""]]);
        var r = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a(37)(i, r);
        i.locals && (t.exports = i.locals)
    },
    1543: function(t, e, a) {
        (e = t.exports = a(35)(!0)).i(a(278), void 0),
        e.push([t.i, ".PulseOxHelp_mainTitle__1uRkf {\n    color: " + a(278).locals.color_100 + ";\n    font-size: 22px;\n    font-weight: 600;\n}\n.PulseOxHelp_descriptionContainer__2LZw4 {\n    display: -webkit-flex;\n    display: flex;\n}\n.PulseOxHelp_colorCircle__rgIjX {\n    margin-right: 10px;\n    padding-top: 4px;\n}\n.PulseOxHelp_colorCircle__rgIjX span {\n    border-radius: 50%;\n    display: block;\n    height: 16px;\n    width: 16px;\n}\n.PulseOxHelp_mainContainer__3HDr6 {\n    margin-top: 4px;\n    margin-bottom: 8px;\n}\n", "", {
            version: 3,
            sources: ["/var/lib/jenkins/workspace/web-react_release_4.30/src/PulseOx/components/PulseOxHelp/PulseOxHelp.css"],
            names: [],
            mappings: "AAEA;IACI,mCAAgB;IAChB,gBAAe;IACf,iBAAgB;CACpB;AAEA;IACI,sBAAa;IAAb,cAAa;CACjB;AAEA;IACI,mBAAkB;IAClB,iBAAgB;CACpB;AAEA;IACI,mBAAkB;IAClB,eAAc;IACd,aAAY;IACZ,YAAW;CACf;AAEA;IACI,gBAAe;IACf,mBAAkB;CACtB",
            file: "PulseOxHelp.css",
            sourcesContent: ["@value color_100 from 'ui-connect/styles/colors.module.css';\n\n.mainTitle {\n    color: color_100;\n    font-size: 22px;\n    font-weight: 600;\n}\n\n.descriptionContainer {\n    display: flex;\n}\n\n.colorCircle {\n    margin-right: 10px;\n    padding-top: 4px;\n}\n\n.colorCircle span {\n    border-radius: 50%;\n    display: block;\n    height: 16px;\n    width: 16px;\n}\n\n.mainContainer {\n    margin-top: 4px;\n    margin-bottom: 8px;\n}\n"],
            sourceRoot: ""
        }]),
        e.locals = {
            color_100: "" + a(278).locals.color_100,
            mainTitle: "PulseOxHelp_mainTitle__1uRkf",
            descriptionContainer: "PulseOxHelp_descriptionContainer__2LZw4",
            colorCircle: "PulseOxHelp_colorCircle__rgIjX",
            mainContainer: "PulseOxHelp_mainContainer__3HDr6"
        }
    },
    1544: function(t, e) {
        t.exports = '<span class="react-placeholder <%- additionalClasses %>"></span>'
    },
    1545: function(t, e, a) {
        "use strict";
        var i = a(400).a.extend({
            url: function() {
                return "/proxy/device-service/deviceregistration/devices/all/" + this.getDisplayName()
            }
        });
        e.a = i
    },
    1608: function(t, e, a) {
        var i = a(1943);
        "string" === typeof i && (i = [[t.i, i, ""]]);
        var r = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a(37)(i, r);
        i.locals && (t.exports = i.locals)
    },
    1715: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i).a.Model.extend({
            initialize: function(t) {
                this.latestDate = t ? t.latestDate : new Date
            },
            url: function() {
                if (0 === this.latestDate.length)
                    throw new Error("Date must be given.");
                return "/proxy/weight-service/weight/latest?date=" + this.latestDate + "&ignorePriority=true"
            },
            setLatestDate: function(t) {
                this.latestDate = t
            }
        });
        e.a = r
    },
    1716: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(9)
              , r = a.n(i)
              , s = (a(15),
            a(23),
            r.a.Model.extend({
                initialize: function(t) {},
                url: function() {
                    var t = "/proxy/weight-service/weight";
                    return "undefined" != typeof this.get("isFirst") && (t += "/first"),
                    t
                },
                destroy: function(e) {
                    var a = "/proxy/biometric-service/biometric/" + this.get("date")
                      , i = t.extend({
                        url: a
                    }, e || {});
                    return r.a.Model.prototype.destroy.call(this, i)
                },
                save: function(e, a) {
                    var i = t.extend({
                        url: "/proxy/weight-service/user-weight"
                    }, a || {});
                    return r.a.Model.prototype.save.call(this, e, i)
                }
            }));
            e.a = s
        }
        ).call(this, a(7))
    },
    1718: function(t, e, a) {
        var i = a(3254);
        "string" === typeof i && (i = [[t.i, i, ""]]);
        var r = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a(37)(i, r);
        i.locals && (t.exports = i.locals)
    },
    1847: function(t, e, a) {
        var i = a(1954);
        "string" === typeof i && (i = [[t.i, i, ""]]);
        var r = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a(37)(i, r);
        i.locals && (t.exports = i.locals)
    },
    1870: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i).a.Model.extend({
            url: function() {
                return "/proxy/userprofile-service/biometric/current/" + this.displayName
            },
            initialize: function(t) {
                this.displayName = t.displayName
            }
        });
        r.BiometricConstants = {
            LACTATE_THRESHOLD_SPEED: "lactateThresholdSpeed",
            LACTATE_THRESHOLD_BPM: "lactateThresholdHeartRate",
            FTP: "functionalThresholdPower"
        },
        e.a = r
    },
    1871: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(7)
              , r = a.n(i)
              , s = a(9)
              , n = a.n(s)
              , o = a(6)
              , l = a(13)
              , c = a(38)
              , h = a(1716)
              , d = a(1226)
              , u = a(41)
              , p = a(217)
              , g = a(95)
              , m = a(219)
              , f = a(2070)
              , v = a.n(f)
              , T = {
                WEIGHT_SUCCESS: "WEIGHT_SUCCESS",
                WEIGHT_ERROR: "WEIGHT_ERROR",
                WEIGHT_LOADED: "WEIGHT_LOADED"
            }
              , _ = n.a.View.extend(u.a).extend({
                template: r.a.template(v.a),
                events: {
                    "click .btn-form": "onSaveButtonClicked"
                },
                propertyFiles: ["/main/js/properties/units/units", "/main/js/properties/common/common", "/main/js/properties/reportswidget/reportswidget", "/main/js/properties/userprofile/userprofile"],
                initialize: function(t) {
                    this.displaySaveButton = !r.a.isUndefined(t.displaySaveButton) && t.displaySaveButton,
                    this.displayWeightLabel = !!r.a.isUndefined(t.displayWeightLabel) || t.displayWeightLabel,
                    this.maxView = !!r.a.isUndefined(t.maxView) || t.maxView,
                    this.prompt = t.prompt,
                    this.title = t.title || null,
                    this.weightDate = t.weightDate || null,
                    this.parser = new m.a
                },
                render: function() {
                    var t = o.a.localize("weight_unit_statute");
                    this.isMetric() && (t = o.a.localize("weight_unit_metric"));
                    var e = this.template({
                        Localizer: o.a,
                        Personalizer: l.a,
                        weightLabel: t,
                        maxLength: 5,
                        displaySaveButton: this.displaySaveButton,
                        maxView: this.maxView,
                        prompt: this.prompt,
                        title: this.title
                    });
                    this.$el.html(e),
                    this.displayWeightLabel || this.$(".weight-label").hide(),
                    this.setupWeightValidator(),
                    this.trigger(T.WEIGHT_LOADED)
                },
                destroy: function() {
                    this.$(".tooltip-error").remove()
                },
                setupWeightValidator: function() {
                    var t = this
                      , e = new p.a({
                        message: o.a.localize("invalid_weight_message_short"),
                        element: this.$("input#user-weight"),
                        container: this.$el
                    });
                    this.weightValidator = new d.a({
                        element: this.$("input#user-weight"),
                        minValue: g.a.minWeight,
                        maxValue: g.a.maxWeight,
                        required: !0,
                        reporter: e,
                        parser: {
                            parse: function(e) {
                                if ("decimal_comma" === c.a.getNumberFormat() && e.includes("."))
                                    throw "invalid number";
                                if ("decimal_period" === c.a.getNumberFormat() && e.includes(","))
                                    throw "invalid number";
                                return t.parser.parse(e)
                            }
                        }
                    })
                },
                isMetric: function() {
                    return c.a.getMeasurementSystem() === l.a.MeasurementSystems.METRIC
                },
                onSaveButtonClicked: function(e) {
                    if (e && e.preventDefault(),
                    this.weightValidator.validateInputNow())
                        return !1;
                    var a = (new m.a).parse(this.$("#user-weight").val())
                      , i = l.a.convertWeightToKg(a);
                    if (t.trim(i).length > 0) {
                        var s = r.a.isNull(this.weightDate) ? t.datepicker.formatDate("yy-mm-dd", new Date) : this.weightDate
                          , n = new h.a({
                            value: i,
                            unitKey: "kg",
                            date: s
                        })
                          , o = this;
                        return n.save(n.attributes, {
                            success: function(t, e, a) {
                                o.$(".alert-error").hide(),
                                o.trigger(T.WEIGHT_SUCCESS, t.get("value"))
                            },
                            error: function(t, e, a) {
                                o.$(".alert-error").show(),
                                o.trigger(T.WEIGHT_ERROR, {
                                    model: t,
                                    response: e,
                                    options: a
                                })
                            }
                        }),
                        !0
                    }
                    return !1
                }
            });
            _.Events = T,
            e.a = _
        }
        ).call(this, a(10))
    },
    1872: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = a(15)
          , n = a.n(s)
          , o = r.a.Model.extend({
            urlRoot: "/proxy/metrics-service/metrics/maxmet/latest/",
            initialize: function(t) {
                this.calendarDate = t.calendarDate || n()().format("YYYY-MM-DD"),
                this.sport = t.sport || null
            },
            url: function() {
                return this.sport ? this.urlRoot + "".concat(this.calendarDate, "?sport=").concat(this.sport) : this.urlRoot + this.calendarDate
            },
            getCyclingVO2Max: function() {
                return this.has("cycling") ? this.get("cycling") : null
            },
            getGenericVO2Max: function() {
                return this.has("generic") ? this.get("generic") : null
            },
            getHeatAltitudeAcclimation: function() {
                return this.hasAcclimationData() ? this.get("heatAltitudeAcclimation") : null
            },
            getAltitudeAcclimation: function() {
                return this.getHeatAltitudeAcclimation() ? this.getHeatAltitudeAcclimation().altitudeAcclimation : null
            },
            getAltitudeAcclimationTrend: function() {
                return this.getHeatAltitudeAcclimation() ? this.getHeatAltitudeAcclimation().altitudeTrend : null
            },
            getHeatAcclimation: function() {
                return this.getHeatAltitudeAcclimation() ? this.getHeatAltitudeAcclimation().heatAcclimationPercentage : null
            },
            getHeatAcclimationTrend: function() {
                return this.getHeatAltitudeAcclimation() ? this.getHeatAltitudeAcclimation().heatTrend : null
            },
            hasAcclimationData: function() {
                return this.has("heatAltitudeAcclimation")
            },
            hasMultipleVO2MaxMetrics: function() {
                return this.has("cycling") && this.has("generic")
            },
            hasIdenticalVO2MaxMetrics: function() {
                return this.hasMultipleVO2MaxMetrics() && this.getCyclingVO2Max().vo2MaxValue === this.getGenericVO2Max().vo2MaxValue && this.getCyclingVO2Max().calendarDate === this.getGenericVO2Max().calendarDate
            },
            getVO2MaxMetricsForTrainingStatus: function() {
                return this.hasIdenticalVO2MaxMetrics() ? this.getCyclingVO2Max() : {
                    cycling: this.getCyclingVO2Max(),
                    running: this.getGenericVO2Max()
                }
            }
        });
        e.a = o
    },
    1943: function(t, e, a) {
        (e = t.exports = a(35)(!0)).i(a(278), void 0),
        e.push([t.i, ".MenstrualCycleTrackingReportChart_symptomsReportsChart__28v_2 {\n}\n.MenstrualCycleTrackingReportChart_symptomsReportsChart__28v_2 .MenstrualCycleTrackingReportChart_chartLineInner__12TL3:last-of-type .MenstrualCycleTrackingReportChart_lineContent__1up3p {\n    border-bottom: 2px solid " + a(278).locals.color_140 + ";\n}\n.MenstrualCycleTrackingReportChart_lineContentTable__x7Imm {\n    table-layout: fixed;\n    width: 100%;\n}\n.MenstrualCycleTrackingReportChart_symptomBox__yaoN4 {\n    border-collapse: collapse;\n    box-sizing: border-box;\n    height: 25px;\n    border-top: 1px solid " + a(278).locals.color_110 + ";\n}\n.MenstrualCycleTrackingReportChart_borderedSymptomBox__2y-m4 {\n    border-left: 1px solid " + a(278).locals.color_110 + ";\n}\n.MenstrualCycleTrackingReportChart_isLoggedSymptomDay__1_jMO {\n    background: " + a(278).locals.color_110 + ";\n}\n.MenstrualCycleTrackingReportChart_symptoms__3nEq7 .MenstrualCycleTrackingReportChart_isLoggedSymptomDay__1_jMO {\n    background: " + a(278).locals.color_702 + ";\n}\n.MenstrualCycleTrackingReportChart_moods__zX7rG .MenstrualCycleTrackingReportChart_isLoggedSymptomDay__1_jMO {\n    background: " + a(278).locals.color_707 + ";\n}\n.MenstrualCycleTrackingReportChart_discharge__myy-K .MenstrualCycleTrackingReportChart_isLoggedSymptomDay__1_jMO {\n    background: " + a(278).locals.color_420 + ";\n}\n.MenstrualCycleTrackingReportChart_sexDrive__VoQHw .MenstrualCycleTrackingReportChart_isLoggedSymptomDay__1_jMO {\n    background: " + a(278).locals.color_142 + ";\n}\n.MenstrualCycleTrackingReportChart_sexualActivity__2C9FR .MenstrualCycleTrackingReportChart_isLoggedSymptomDay__1_jMO {\n    background: " + a(278).locals.color_144 + ";\n}\n.MenstrualCycleTrackingReportChart_flow__3Vy-s .MenstrualCycleTrackingReportChart_isLoggedSymptomDay__1_jMO {\n    background: " + a(278).locals.color_704 + ";\n}\n.MenstrualCycleTrackingReportChart_ovulationDay__3KjuY .MenstrualCycleTrackingReportChart_isLoggedSymptomDay__1_jMO {\n    background: " + a(278).locals.color_417 + ";\n}\n.MenstrualCycleTrackingReportChart_afterCycleDay__30YQc {\n    background: " + a(278).locals.color_145 + ";\n    border: none;\n}\n.MenstrualCycleTrackingReportChart_borderedSymptomBox__2y-m4:last-of-type {\n    border-right: 1px solid " + a(278).locals.color_110 + ";\n}\n.MenstrualCycleTrackingReportChart_chartTitle__O9X7r {\n    font-size: 14px;\n}\n.MenstrualCycleTrackingReportChart_chartContainer__1z-vm {\n    margin-bottom: 40px;\n    float: left;\n    width: 100%;\n}\n.MenstrualCycleTrackingReportChart_lineTitle__3aawo {\n    font-size: 12px;\n    color: " + a(278).locals.color_102 + ";\n    float: left;\n    width: 110px;\n    padding-right: 10px;\n    text-align: right;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.MenstrualCycleTrackingReportChart_chartLineInner__12TL3 {\n    width: 100%;\n    clear: both;\n    float: left;\n}\n.MenstrualCycleTrackingReportChart_lineContent__1up3p {\n    /*remove width and padding from label*/\n    width: calc(100% - 120px);\n    float: left;\n}\n.MenstrualCycleTrackingReportChart_isOnLastLine__3hqC6 {\n    position: relative;\n}\n.MenstrualCycleTrackingReportChart_isOnLastLine__3hqC6:after {\n    content: '';\n    display: block;\n    position: absolute;\n    z-index: 1;\n    border-left: 1px solid " + a(278).locals.color_140 + ";\n    height: 8px;\n    top: 25px;\n    left: -1px;\n}\n.MenstrualCycleTrackingReportChart_chartMileMark__13UlL {\n    font-size: 11px;\n    color: " + a(278).locals.color_113 + ";\n    position: absolute;\n    z-index: 1;\n    top: 35px;\n    left: -5px;\n}\n.MenstrualCycleTrackingReportChart_isOnLastLine__3hqC6:last-of-type .MenstrualCycleTrackingReportChart_chartMileMark__13UlL {\n    left: calc(100% - 4px);\n}\n.MenstrualCycleTrackingReportChart_isOnLastLine__3hqC6:last-of-type:after {\n    right: -1px;\n    left: auto;\n}\n.MenstrualCycleTrackingReportChart_noLoggedSymptomsMessage__1olR6 {\n    font-size: 22px;\n    margin-top: 30px;\n    color: " + a(278).locals.color_139 + ";\n    float: left;\n    width: 100%;\n    text-align: center;\n}\n", "", {
            version: 3,
            sources: ["/var/lib/jenkins/workspace/web-react_release_4.30/src/MenstrualCycleTracking/components/MenstrualCycleTrackingReports/MenstrualCycleTrackingReportChart.css"],
            names: [],
            mappings: "AAEA;CACA;AAEA;IACI,qDAAkC;CACtC;AAEA;IACI,oBAAmB;IACnB,YAAW;CACf;AACA;IACI,0BAAyB;IACzB,uBAAsB;IACtB,aAAY;IACZ,kDAA+B;CACnC;AACA;IACI,mDAAgC;CACpC;AAEA;IACI,wCAAqB;CACzB;AAEA;IACI,yCAAqB;CACzB;AAEA;IACI,yCAAqB;CACzB;AAEA;IACI,wCAAqB;CACzB;AAEA;IACI,wCAAqB;CACzB;AAEA;IACI,wCAAqB;CACzB;AAEA;IACI,yCAAqB;CACzB;AAEA;IACI,wCAAqB;CACzB;AAEA;IACI,wCAAqB;IACrB,aAAY;CAChB;AACA;IACI,oDAAiC;CACrC;AACA;IACI,gBAAe;CACnB;AACA;IACI,oBAAmB;IACnB,YAAW;IACX,YAAW;CACf;AACA;IACI,gBAAe;IACf,mCAAgB;IAChB,YAAW;IACX,aAAY;IACZ,oBAAmB;IACnB,kBAAiB;IACjB,oBAAmB;IACnB,iBAAgB;IAChB,wBAAuB;CAC3B;AACA;IACI,YAAW;IACX,YAAW;IACX,YAAW;CACf;AACA;IACI,uCAAsC;IACtC,0BAAyB;IACzB,YAAW;CACf;AACA;IACI,mBAAkB;CACtB;AAEA;IACI,YAAW;IACX,eAAc;IACd,mBAAkB;IAClB,WAAU;IACV,mDAAgC;IAChC,YAAW;IACX,UAAS;IACT,WAAU;CACd;AAEA;IACI,gBAAe;IACf,mCAAgB;IAChB,mBAAkB;IAClB,WAAU;IACV,UAAS;IACT,WAAU;CACd;AACA;IACI,uBAAsB;CAC1B;AACA;IACI,YAAW;IACX,WAAU;CACd;AACA;IACI,gBAAe;IACf,iBAAgB;IAChB,mCAAgB;IAChB,YAAW;IACX,YAAW;IACX,mBAAkB;CACtB",
            file: "MenstrualCycleTrackingReportChart.css",
            sourcesContent: ["@value (color_102, color_113, color_145, color_139, color_140,color_142, color_144, color_110, color_417, color_420, color_702, color_704, color_707) from 'ui-connect/styles/colors.module.css';\n\n.symptomsReportsChart {\n}\n\n.symptomsReportsChart .chartLineInner:last-of-type .lineContent {\n    border-bottom: 2px solid color_140;\n}\n\n.lineContentTable {\n    table-layout: fixed;\n    width: 100%;\n}\n.symptomBox {\n    border-collapse: collapse;\n    box-sizing: border-box;\n    height: 25px;\n    border-top: 1px solid color_110;\n}\n.borderedSymptomBox {\n    border-left: 1px solid color_110;\n}\n\n.isLoggedSymptomDay {\n    background: color_110;\n}\n\n.symptoms .isLoggedSymptomDay {\n    background: color_702;\n}\n\n.moods .isLoggedSymptomDay {\n    background: color_707;\n}\n\n.discharge .isLoggedSymptomDay {\n    background: color_420;\n}\n\n.sexDrive .isLoggedSymptomDay {\n    background: color_142;\n}\n\n.sexualActivity .isLoggedSymptomDay {\n    background: color_144;\n}\n\n.flow .isLoggedSymptomDay {\n    background: color_704;\n}\n\n.ovulationDay .isLoggedSymptomDay {\n    background: color_417;\n}\n\n.afterCycleDay {\n    background: color_145;\n    border: none;\n}\n.borderedSymptomBox:last-of-type {\n    border-right: 1px solid color_110;\n}\n.chartTitle {\n    font-size: 14px;\n}\n.chartContainer {\n    margin-bottom: 40px;\n    float: left;\n    width: 100%;\n}\n.lineTitle {\n    font-size: 12px;\n    color: color_102;\n    float: left;\n    width: 110px;\n    padding-right: 10px;\n    text-align: right;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.chartLineInner {\n    width: 100%;\n    clear: both;\n    float: left;\n}\n.lineContent {\n    /*remove width and padding from label*/\n    width: calc(100% - 120px);\n    float: left;\n}\n.isOnLastLine {\n    position: relative;\n}\n\n.isOnLastLine:after {\n    content: '';\n    display: block;\n    position: absolute;\n    z-index: 1;\n    border-left: 1px solid color_140;\n    height: 8px;\n    top: 25px;\n    left: -1px;\n}\n\n.chartMileMark {\n    font-size: 11px;\n    color: color_113;\n    position: absolute;\n    z-index: 1;\n    top: 35px;\n    left: -5px;\n}\n.isOnLastLine:last-of-type .chartMileMark {\n    left: calc(100% - 4px);\n}\n.isOnLastLine:last-of-type:after {\n    right: -1px;\n    left: auto;\n}\n.noLoggedSymptomsMessage {\n    font-size: 22px;\n    margin-top: 30px;\n    color: color_139;\n    float: left;\n    width: 100%;\n    text-align: center;\n}\n"],
            sourceRoot: ""
        }]),
        e.locals = {
            color_102: "" + a(278).locals.color_102,
            color_113: "" + a(278).locals.color_113,
            color_145: "" + a(278).locals.color_145,
            color_139: "" + a(278).locals.color_139,
            color_140: "" + a(278).locals.color_140,
            color_142: "" + a(278).locals.color_142,
            color_144: "" + a(278).locals.color_144,
            color_110: "" + a(278).locals.color_110,
            color_417: "" + a(278).locals.color_417,
            color_420: "" + a(278).locals.color_420,
            color_702: "" + a(278).locals.color_702,
            color_704: "" + a(278).locals.color_704,
            color_707: "" + a(278).locals.color_707,
            symptomsReportsChart: "MenstrualCycleTrackingReportChart_symptomsReportsChart__28v_2",
            chartLineInner: "MenstrualCycleTrackingReportChart_chartLineInner__12TL3",
            lineContent: "MenstrualCycleTrackingReportChart_lineContent__1up3p",
            lineContentTable: "MenstrualCycleTrackingReportChart_lineContentTable__x7Imm",
            symptomBox: "MenstrualCycleTrackingReportChart_symptomBox__yaoN4",
            borderedSymptomBox: "MenstrualCycleTrackingReportChart_borderedSymptomBox__2y-m4",
            isLoggedSymptomDay: "MenstrualCycleTrackingReportChart_isLoggedSymptomDay__1_jMO",
            symptoms: "MenstrualCycleTrackingReportChart_symptoms__3nEq7",
            moods: "MenstrualCycleTrackingReportChart_moods__zX7rG",
            discharge: "MenstrualCycleTrackingReportChart_discharge__myy-K",
            sexDrive: "MenstrualCycleTrackingReportChart_sexDrive__VoQHw",
            sexualActivity: "MenstrualCycleTrackingReportChart_sexualActivity__2C9FR",
            flow: "MenstrualCycleTrackingReportChart_flow__3Vy-s",
            ovulationDay: "MenstrualCycleTrackingReportChart_ovulationDay__3KjuY",
            afterCycleDay: "MenstrualCycleTrackingReportChart_afterCycleDay__30YQc",
            chartTitle: "MenstrualCycleTrackingReportChart_chartTitle__O9X7r",
            chartContainer: "MenstrualCycleTrackingReportChart_chartContainer__1z-vm",
            lineTitle: "MenstrualCycleTrackingReportChart_lineTitle__3aawo",
            isOnLastLine: "MenstrualCycleTrackingReportChart_isOnLastLine__3hqC6",
            chartMileMark: "MenstrualCycleTrackingReportChart_chartMileMark__13UlL",
            noLoggedSymptomsMessage: "MenstrualCycleTrackingReportChart_noLoggedSymptomsMessage__1olR6"
        }
    },
    1954: function(t, e, a) {
        (e = t.exports = a(35)(!0)).i(a(278), void 0),
        e.push([t.i, "/*  ======================\n    Component styles on page load\n    ====================== */\n.TrainingStatus_modalHeader__3w-GT h4 {\n    color: " + a(278).locals.darkui_accent_1 + ";\n    font-weight: 400;\n}\n.TrainingStatus_modalHeader__3w-GT p {\n    font-size: 18px;\n    letter-spacing: 0.15px;\n    font-weight: 100;\n}\n.TrainingStatus_pauseTrainingStatus__2p_sc span {\n    color: " + a(278).locals.iconPrimary + ";\n}\n.TrainingStatus_pauseTrainingStatus__2p_sc span:hover {\n    cursor: pointer;\n}\n", "", {
            version: 3,
            sources: ["/var/lib/jenkins/workspace/web-react_release_4.30/src/TrainingStatus/components/TrainingStatus.css"],
            names: [],
            mappings: "AAEA;;6BAE4B;AAE5B;IACI,mCAAsB;IACtB,iBAAgB;CACpB;AAEA;IACI,gBAAe;IACf,uBAAsB;IACtB,iBAAgB;CACpB;AAEA;IACI,mCAAkB;CACtB;AAEA;IACI,gBAAe;CACnB",
            file: "TrainingStatus.css",
            sourcesContent: ["@value (darkui_accent_1, iconPrimary) from 'ui-connect/styles/colors.module.css';\n\n/*  ======================\n    Component styles on page load\n    ====================== */\n\n.modalHeader h4 {\n    color: darkui_accent_1;\n    font-weight: 400;\n}\n\n.modalHeader p {\n    font-size: 18px;\n    letter-spacing: 0.15px;\n    font-weight: 100;\n}\n\n.pauseTrainingStatus span {\n    color: iconPrimary;\n}\n\n.pauseTrainingStatus span:hover {\n    cursor: pointer;\n}\n"],
            sourceRoot: ""
        }]),
        e.locals = {
            darkui_accent_1: "" + a(278).locals.darkui_accent_1,
            iconPrimary: "" + a(278).locals.iconPrimary,
            modalHeader: "TrainingStatus_modalHeader__3w-GT",
            pauseTrainingStatus: "TrainingStatus_pauseTrainingStatus__2p_sc"
        }
    },
    1988: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = a(1485)
          , n = {
            NO_MORE_ACTIVITIES: "NO_MORE_ACTIVITIES",
            ACTIVITIES_FETCHED: "ACTIVITIES_FETCHED"
        }
          , o = r.a.Collection.extend({
            model: s.a,
            initialize: function(t, e) {
                this.initializeBaseCollection(t, e)
            },
            initializeBaseCollection: function(t, e) {
                this.pollStartTime = null,
                this.pollingEnabled = !0,
                this.fetching = !1,
                this.maxCount = e.maxCount,
                this.fetchSize = e.fetchSize,
                this.startIndex = e.startIndex,
                this.startIndex || (this.startIndex = 1),
                this.mayHaveMoreModels = !0,
                this.comparator = function(t) {
                    var e = t.get("startTimeGMT");
                    return "undefined" != typeof e && null != e ? -Date.parse(e) : -9999999999
                }
            },
            fetch: function(t) {
                return "undefined" != typeof t && null != t || (t = {}),
                t.cache = !1,
                this.log("Activities.fetch(" + JSON.stringify(t) + ")"),
                this.log("Activities.fetch " + this.url()),
                r.a.Collection.prototype.fetch.call(this, t)
            },
            parse: function(t, e) {
                return this.requestorRelationship = t.requestorRelationship,
                this.length + t.activityList.length < this.startIndex + this.fetchSize - 1 && (this.mayHaveMoreModels = !1,
                this.trigger(n.NO_MORE_ACTIVITIES)),
                t.activityList
            },
            getDisplayName: function() {
                return this.displayName
            },
            poll: function() {
                if (!this.fetching) {
                    this.log("Activities.poll()"),
                    this.fetching = !0,
                    this.length > 0 ? this.pollStartTime = this.first().get("startTimeGMT") : this.pollStartTime = null;
                    this.fetch({
                        add: !0,
                        success: function(t) {
                            t.fetching = !1
                        },
                        error: this.onPollingError
                    })
                }
            },
            onPollingError: function(t, e) {
                t.fetching = !1,
                t.pollingEnabled = !1,
                "undefined" !== typeof console && "undefined" !== typeof console.log && console.log((new Date).toString() + " - Error polling: " + e.status + " " + e.statusText)
            },
            isPollingEnabled: function() {
                return this.pollingEnabled
            },
            fetchMore: function() {
                if (this.pollStartTime = null,
                !this.fetching) {
                    if (this.fetching = !0,
                    this.startIndex += this.fetchSize,
                    this.startIndex > this.maxCount)
                        return void this.trigger(n.NO_MORE_ACTIVITIES);
                    this.startIndex + this.fetchSize - 1 > this.maxCount && (this.fetchSize = this.maxCount - this.startIndex + 1);
                    this.log("Activities.fetchMore()"),
                    this.fetch({
                        add: !0,
                        remove: !1,
                        success: this.onFetchMoreSuccess,
                        error: this.onFetchMoreError
                    })
                }
            },
            onFetchMoreSuccess: function(t, e) {
                t.fetching = !1,
                t.trigger(n.ACTIVITIES_FETCHED),
                t.length < t.startIndex + t.fetchSize - 1 && (t.mayHaveMoreModels = !1,
                t.trigger(n.NO_MORE_ACTIVITIES))
            },
            onFetchMoreError: function(t, e) {
                t.fetching = !1,
                "undefined" !== typeof console && "undefined" !== typeof console.log && console.log((new Date).toString() + " - fetching more: " + e.status + " " + e.statusText)
            },
            log: function(t) {
                0
            }
        });
        o.Events = n,
        e.a = o
    },
    2065: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i).a.Model.extend({
            urlRoot: "/proxy/userstats-service/statistics/chartconfig/",
            idAttribute: "metricId"
        });
        e.a = r
    },
    2066: function(t, e, a) {
        "use strict";
        var i = a(1988)
          , r = a(23)
          , s = i.a.extend({
            url: function() {
                var t = "/proxy/activitylist-service/activities/list/" + this.getDisplayName()
                  , e = [];
                return this.activityTypeId && e.push("activityTypeId=" + this.activityTypeId),
                this.fetchSize && e.push("limit=" + this.fetchSize),
                this.startTimestampLocal ? e.push("startTimestampLocal=" + this.startTimestampLocal) : e.push("startTimestampLocal=" + r.a.formatConnectTimestamp(new Date(0))),
                this.endTimestampLocal ? e.push("endTimestampLocal=" + this.endTimestampLocal) : e.push("endTimestampLocal=" + r.a.formatConnectTimestamp(new Date)),
                this.startIndex && e.push("start=" + this.startIndex),
                t + (e.length > 0 ? "?" + e.join("&") : "")
            },
            initialize: function(t, e) {
                if (this.initializeBaseCollection(t, e),
                "undefined" === typeof e.displayName)
                    throw "Invalid displayName in ActivitiesByActivityType Collection.";
                if ("undefined" === typeof e.activityTypeId)
                    throw "Invalid activity type id in ActivitiesByActivityType Collection.";
                this.displayName = e.displayName,
                this.activityTypeId = e.activityTypeId,
                this.fetchSize = e.fetchSize,
                this.startTimestampLocal = e.startTimestampLocal,
                this.endTimestampLocal = e.endTimestampLocal
            }
        });
        e.a = s
    },
    2067: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(1)
              , r = a(14)
              , s = a(32)
              , n = a(7)
              , o = a.n(n)
              , l = a(9)
              , c = a.n(l)
              , h = a(6)
              , d = a(13)
              , u = a(3164)
              , p = a(3165)
              , g = a(3167)
              , m = a(3168)
              , f = a(3169)
              , v = a(3170)
              , T = a(3171)
              , _ = a(3176)
              , A = a(3177)
              , y = a(2439)
              , C = a(3182)
              , b = a(3184)
              , E = a(1871)
              , D = a(3186)
              , I = a(3187)
              , x = a(3189)
              , S = a(3191)
              , M = a(2071)
              , w = a(3193)
              , O = a(3195)
              , R = a(3196)
              , L = a(3198)
              , N = a(3199)
              , z = a(3200)
              , V = a(5139)
              , k = a(2069)
              , P = a(3204)
              , F = a(3206)
              , G = a(3207)
              , B = a(3208)
              , Y = a(3209)
              , H = a(3210)
              , W = a(3211)
              , U = a(3213)
              , j = a(3215)
              , $ = a(3216)
              , K = a(5140)
              , X = a(5081)
              , q = a(3225)
              , Z = a(5141)
              , Q = a(2341)
              , J = a(3237)
              , tt = a(3239)
              , et = a(39)
              , at = a(129)
              , it = a(3240)
              , rt = a(2075)
              , st = a(3242)
              , nt = a(3243)
              , ot = a(2320)
              , lt = a(2081)
              , ct = a(3245)
              , ht = a(2066)
              , dt = a(5078)
              , ut = a(5142)
              , pt = a(5143)
              , gt = a(5144)
              , mt = a(3246)
              , ft = a(3247)
              , vt = a(3248)
              , Tt = a(3249)
              , _t = a(5145)
              , At = a(5167)
              , yt = a(1545)
              , Ct = a(366)
              , bt = a(21)
              , Et = a(3250)
              , Dt = a(1872)
              , It = a(3251)
              , xt = a(2072)
              , St = a(2443)
              , Mt = a(2082)
              , wt = a(2083)
              , Ot = a(3252)
              , Rt = a(3253)
              , Lt = a(5152)
              , Nt = a(5060)
              , zt = a(1511)
              , Vt = a(1323)
              , kt = a(2084)
              , Pt = a(1302)
              , Ft = a(371)
              , Gt = a(2445)
              , Bt = a(27)
              , Yt = a(18)
              , Ht = a(106)
              , Wt = a(85)
              , Ut = a(23)
              , jt = a(216)
              , $t = a(15)
              , Kt = a.n($t)
              , Xt = a(223)
              , qt = a(94)
              , Zt = a(3267)
              , Qt = a(3268)
              , Jt = a(104)
              , te = a(3269)
              , ee = a(3270)
              , ae = a(446)
              , ie = a(3271)
              , re = a.n(ie)
              , se = (a(3272),
            a(1498))
              , ne = {
                ON_VO2_MAX_SHOW_COMPARE: "ON_VO2_MAX_SHOW_COMPARE",
                ON_VO2_MAX_TOGGLE: "ON_VO2_MAX_TOGGLE",
                ON_TAB_CHANGED: "ON_TAB_CHANGED",
                ON_FTP_MAX_TOGGLE: "ON_FTP_MAX_TOGGLE",
                DISPLAY_FTP_WEIGHT: "DISPLAY_FTP_WEIGHT",
                FTP_WEIGHT_ENTERED: "FTP_WEIGHT_ENTERED",
                MODEL_SYNC_FAIL: "MODEL_SYNC_FAIL",
                TOGGLE_EXPORT_AND_PRINT_BUTTONS: "TOGGLE_EXPORT_AND_PRINT_BUTTONS",
                ON_UPDATE_TRAINING_STATUS_PAUSED_DATE: "ON_UPDATE_TRAINING_STATUS_PAUSED_DATE"
            }
              , oe = c.a.View.extend({
                events: {
                    "click .js-current": "onCurrentClicked",
                    "click .js-last_seven_days": "onSevenDaysClicked",
                    "click .js-last_four_weeks": "onFourWeeksClicked",
                    "click .js-last_six_months": "onSixMonthsClicked",
                    "click .js-last_three_months": "onThreeMonthsClicked",
                    "click .js-last_year": "onTwelveMonthsClicked",
                    "click .js-today-btn": "onTodayButtonClicked",
                    "click .icon-arrow-left": "onPreviousClicked",
                    "click .icon-arrow-right": "onNextClicked",
                    "click .vo2-widget-filter": "onVo2MaxFilterClicked",
                    "click .ftp-watts-kg": "onFtpMaxFilterClicked",
                    "click .ftp-watts": "onFtpMaxFilterClicked",
                    "click .ftp-watts-kg-trend": "onFtpTrendClicked",
                    "click .ftp-watts-trend": "onFtpTrendClicked",
                    "click .te-help": "onTEHelpClicked",
                    "click .ts-help": "onTSHelpClicked",
                    "click .hrv-help": "renderHRVInfoModal",
                    "click .modal-hrv-stress": "renderHRVInfoModal",
                    "click .vo2-max-help-modal": "onVo2MaxHelpModal",
                    "click .show-more": "onShowMoreClicked",
                    "click .watts-trend": "onWattsClicked",
                    "click .watts-kg-trend": "onWattsClicked",
                    "click .modal-pulse-ox": "renderPulseOxInfoModal",
                    "click .training-status-help-modal": "renderTrainingStatusInfoModal",
                    "click .training-status-pause-help": "onTrainingStatusPauseHelpClicked",
                    "click .training-status-pause": "onTrainingStatusPauseClicked",
                    "click .training-status-resume": "onTrainingStatusResumeClicked"
                },
                initialize: function(t) {
                    this.template = o.a.template(re.a),
                    this.reports = t.reports,
                    this.report = t.report,
                    this.reportType = t.reportType,
                    this.chartFormat = t.chartFormat,
                    this.userPreferences = t.userPreferences,
                    this.displayName = t.displayName,
                    this.activeTab = t.activeTab,
                    this.vo2MaxToggle = t.vo2MaxToggle,
                    this.ftpMaxToggle = t.ftpMaxToggle,
                    this.wattsToggle = t.wattsToggle || "watts-trend",
                    this.userSettings = t.userSettings,
                    this.cycleType = this.getCycleType(),
                    this.profileId = bt.a.get("profileId"),
                    this.reportMetricsFetched = !1,
                    this.vo2MaxDataFetched = !1,
                    this.metricColorRangesFetched = !1,
                    this.reportAveragesFetched = !1,
                    this.pageOffset = 0,
                    this.displayGaugeChart = !0,
                    this.displayTEGaugeChart = !1,
                    this.trainingEffectMetricPeriod = !1,
                    this.hrvStressReportMetricPeriod = !1,
                    this.showAnaerobicTE = !0,
                    this.showAerobicTE = !0,
                    this.lactateThreshold = this.report.get("metricName") === Pt.a.ACTIVITY_AVG_LACTATE_THRESHOLD_BPM || this.report.get("metricName") === Pt.a.ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC,
                    this.trainingStatusData = null,
                    this.prevRecordedDevices = null,
                    this.mostRecentStatuses = null,
                    this.activityTypes = t.activityTypes,
                    this.activityListEnabled = t.activityListEnabled,
                    this.isRespirationRateEnabled = t.isRespirationRateEnabled,
                    this.hasAcclimationCapableDevice = t.hasAcclimationCapableDevice,
                    this.hasLoadBalanceCapableDevice = t.hasLoadBalanceCapableDevice,
                    this.hasTrainingStatusPauseCapableDevice = t.hasTrainingStatusPauseCapableDevice,
                    this.reportService = new dt.a,
                    this.widgetState = t.widgetState,
                    this.pregnancyFeatureEnabled = t.pregnancyFeatureEnabled,
                    this.pregnancy9MoReportEnabled = t.pregnancy9MoReportEnabled,
                    this.trainingStatusPausedDate = this.userSettings.has("userData") && this.userSettings.get("userData").trainingStatusPausedDate,
                    this.isTrainingPauseEnabled = t.isTrainingPauseEnabled,
                    this.pregnancysnapshots = null,
                    this.showPregnancyEmptyState = !1,
                    this.commonTemplateParams = {
                        Localizer: h.a,
                        Personalizer: d.a,
                        chartFormat: this.chartFormat,
                        report: this.report.toJSON(),
                        activeTab: this.activeTab,
                        url: Yt.default.url,
                        isMct: this.isMenstrualCycleTab(),
                        reportUrl: this.reportUrl || "",
                        isRespirationRateEnabled: this.isRespirationRateEnabled,
                        pregnancy9MoReportEnabled: this.pregnancy9MoReportEnabled,
                        isPregnancyReport: this.isPregnancyReport(),
                        trainingStatusPausedDate: this.trainingStatusPausedDate,
                        hasTrainingStatusPauseCapableDevice: this.hasTrainingStatusPauseCapableDevice,
                        isTrainingPauseEnabled: this.isTrainingPauseEnabled
                    }
                },
                render: function() {
                    var e = this.report.get("metricId");
                    "-9" === e ? (this.reportUrl = "/report/-1/",
                    this.reportType,
                    this.lactateThreshold && "current" === this.activeTab || this.activeTab) : e === Ft.a.REPORTS_AVERAGE_CYCLING_PACE.id.toString() ? this.reportUrl = "/report/" + Ft.a.ACTIVITY_AVERAGE_PACE.id + "/cycling" + (this.lactateThreshold && "current" === this.activeTab ? "/last_four_weeks" : "/" + this.activeTab) : e === Ft.a.REPORTS_AVERAGE_RUNNING_PACE.id.toString() ? this.reportUrl = "/report/" + Ft.a.ACTIVITY_AVERAGE_PACE.id + "/running" + (this.lactateThreshold && "current" === this.activeTab ? "/last_four_weeks" : "/" + this.activeTab) : e === Ft.a.REPORTS_AVERAGE_SWIM_PACE.id.toString() ? this.reportUrl = "/report/" + Ft.a.ACTIVITY_AVERAGE_SWIM_PACE.id + "/swimming" + (this.lactateThreshold && "current" === this.activeTab ? "/last_four_weeks" : "/" + this.activeTab) : e === Ft.a.MENSTRUAL_CYCLE_TRACKING_REPORTS.id.toString() ? this.pregnancyFeatureEnabled ? this.reportUrl = "/report/" + Ft.a.MENSTRUAL_CYCLE_TRACKING_REPORTS.id + "/womens-health" + (this.lactateThreshold && "current" === this.activeTab ? "/last_four_weeks" : "/" + this.activeTab) : this.reportUrl = "/report/" + Ft.a.MENSTRUAL_CYCLE_TRACKING_REPORTS.id + "/wellness" + (this.lactateThreshold && "current" === this.activeTab ? "/last_four_weeks" : "/" + this.activeTab) : this.reportUrl = "/report/" + e + "/" + this.reportType + (this.lactateThreshold && "current" === this.activeTab ? "/last_four_weeks" : "/" + this.activeTab);
                    var a = this.template(this.commonTemplateParams);
                    if (t(this.el).html(a),
                    this.$(".vo2-info-trigger").hide(),
                    this.$(".ftp-filter").hide(),
                    this.$(".watts-filter").hide(),
                    this.$(".hrv-info-trigger").hide(),
                    this.hideThreeMonthsTab(),
                    this.report.get("metricName") === Pt.a.ACTIVITY_VO2_MAX || this.report.get("metricName") === Pt.a.ACTIVITY_VO2_MAX_CYCLING)
                        this.activeTab && "undefined" !== this.activeTab || (this.activeTab = "current"),
                        this.vo2MaxToggle ? this.$(".vo2-sport-filter-" + this.vo2MaxToggle).addClass("active") : this.$(".vo2-sport-filter-running").addClass("active"),
                        this.showCurrentTab(),
                        this.hideSevenDayTab();
                    else if (this.report.get("metricName") === Pt.a.ACTIVITY_MAX_FTP)
                        this.activeTab && "undefined" !== this.activeTab || (this.activeTab = "current"),
                        this.ftpMaxToggle ? this.$("." + this.ftpMaxToggle).addClass("active") : this.$(".ftp-watts").addClass("active"),
                        this.showCurrentTab(),
                        this.hideSevenDayTab();
                    else if (this.report.get("metricName") === Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT || this.report.get("metricName") === Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT)
                        this.activeTab && "undefined" !== this.activeTab || (this.activeTab = "last_seven_days"),
                        this.hideCurrentTab(),
                        this.hideSixMonthsTab(),
                        this.hideTwelveMonthsTab();
                    else if (this.report.get("metricName") === Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT_CYCLING || this.report.get("metricName") === Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT_CYCLING)
                        this.activeTab && "undefined" !== this.activeTab || (this.activeTab = "current"),
                        this.showCurrentTab(),
                        this.hideSixMonthsTab(),
                        this.hideTwelveMonthsTab();
                    else if (this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS || this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS_CYCLING)
                        this.activeTab && "undefined" !== this.activeTab || (this.activeTab = "last_four_weeks"),
                        this.hideCurrentTab(),
                        this.hideSevenDayTab();
                    else if (this.report.get("metricName") === Pt.a.ACTIVITY_HRV_STRESS_TEST)
                        this.activeTab && "undefined" !== this.activeTab || (this.activeTab = "last_seven_days"),
                        this.hideCurrentTab(),
                        this.hideSixMonthsTab(),
                        this.hideTwelveMonthsTab();
                    else if (this.report.get("metricName") === Pt.a.WELLNESS_BODYBATTERY_CHARGED || this.report.get("metricName") === Pt.a.WELLNESS_BODYBATTERY_DRAINED)
                        this.activeTab && "undefined" !== this.activeTab || (this.activeTab = "last_seven_days"),
                        this.hideCurrentTab(),
                        this.hideFourWeeksTab(),
                        this.hideSixMonthsTab(),
                        this.hideTwelveMonthsTab();
                    else if (this.report.get("metricName") === Pt.a.OUTDOOR_PULSE_OX_ACCLIMATION || this.report.get("metricName") === Pt.a.ALL_DAY_PULSE_OX) {
                        this.activeTab && "undefined" !== this.activeTab || (this.activeTab = "last_seven_days"),
                        this.hideCurrentTab(),
                        this.hideSixMonthsTab(),
                        this.hideTwelveMonthsTab(),
                        new S.a({
                            el: this.$(".js-popup-placeholder")
                        }).render()
                    } else
                        this.report.get("metricName") === Pt.a.ACTIVITY_POWER_CURVE_CYCLING ? ("last_six_months" === this.activeTab && (this.activeTab = "last_three_months",
                        this.updateUrl()),
                        this.hideCurrentTab(),
                        this.hideSevenDayTab(),
                        this.hideSixMonthsTab(),
                        this.showThreeMonthsTab(),
                        this.resetReportUrl()) : this.report.get("metricName") === Pt.a.MENSTRUAL_CYCLE_TRACKING_REPORTS ? (("last_seven_days" === this.activeTab || "last_three_months" === this.activeTab || this.isInactiveOrCycleTypeNone()) && (this.activeTab = "last_four_weeks",
                        this.updateUrl()),
                        this.hideCurrentTab(),
                        this.hideSevenDayTab(),
                        this.hideThreeMonthsTab(),
                        this.resetReportUrl(),
                        this.isInactiveOrCycleTypeNone() && (this.$(".js-last_four_weeks").hide(),
                        this.hideSixMonthsTab(),
                        this.hideTwelveMonthsTab())) : this.report.get("metricName") === Pt.a.SLEEP_SLEEP_SCORE ? (this.activeTab && "undefined" !== this.activeTab || (this.activeTab = "last_seven_days"),
                        this.hideCurrentTab(),
                        this.hideThreeMonthsTab(),
                        this.hideSixMonthsTab()) : this.report.get("metricName") === Pt.a.PREGNANCY_TRACKING_REPORTS ? "last_four_weeks" !== this.activeTab && (this.activeTab = "last_four_weeks",
                        this.updateUrl()) : (this.vo2MaxToggle = "",
                        this.ftpMaxToggle = "",
                        this.activeTab && "undefined" !== this.activeTab ? "last_three_months" === this.activeTab && (this.activeTab = "last_four_weeks",
                        this.updateUrl()) : this.activeTab = "last_seven_days",
                        this.hideCurrentTab());
                    if (this.determineAndProcessActiveTab(),
                    this.report.get("metricName") === Pt.a.ACTIVITY_MAX_FTP)
                        new C.a({
                            el: this.$(".js-popup-placeholder"),
                            report: this.report,
                            chartFormat: this.chartFormat
                        }).render();
                    else if (this.report.get("metricName") === Pt.a.ACTIVITY_HRV_STRESS_TEST) {
                        new x.a({
                            el: this.$(".js-popup-placeholder")
                        }).render()
                    }
                    Xt.a.renderTooltips.call(this)
                },
                hideCurrentTab: function() {
                    "page" === this.chartFormat && this.$("#tab-pane0").hide()
                },
                showCurrentTab: function() {
                    "page" === this.chartFormat && this.$("#tab-pane0").show()
                },
                hideSevenDayTab: function() {
                    "page" === this.chartFormat && (this.$("#tab-pane1").hide(),
                    "last_seven_days" === this.activeTab && (this.activeTab = "last_four_weeks",
                    this.updateUrl()))
                },
                hideFourWeeksTab: function() {
                    "page" === this.chartFormat && (this.$("#tab-pane2").hide(),
                    "last_four_weeks" === this.activeTab && (this.activeTab = "last_seven_days",
                    this.updateUrl()))
                },
                hideThreeMonthsTab: function() {
                    "page" === this.chartFormat && this.$("#tab-pane3").hide()
                },
                showThreeMonthsTab: function() {
                    "page" === this.chartFormat && this.$("#tab-pane3").show()
                },
                hideSixMonthsTab: function() {
                    "page" === this.chartFormat && (this.$("#tab-pane4").hide(),
                    "last_six_months" === this.activeTab && (this.activeTab = "last_seven_days",
                    this.updateUrl()))
                },
                hideTwelveMonthsTab: function() {
                    "page" === this.chartFormat && (this.$("#tab-pane5").hide(),
                    "last_year" === this.activeTab && (this.activeTab = "last_seven_days",
                    this.updateUrl()))
                },
                determineAndProcessActiveTab: function() {
                    var t = 1;
                    switch (this.activeTab) {
                    case "current":
                        t = 0;
                        break;
                    case "last_seven_days":
                        t = 1;
                        break;
                    case "last_four_weeks":
                        t = 2;
                        break;
                    case "last_three_months":
                        t = 3;
                        break;
                    case "last_six_months":
                        t = 4;
                        break;
                    case "last_year":
                        t = 5
                    }
                    switch (this.$("#tab-pane" + t).addClass("active"),
                    this.$("#pane" + t).addClass("active"),
                    this.activeTab) {
                    case "current":
                        this.processCurrentTab();
                        break;
                    case "last_seven_days":
                        this.processSevenDayTab();
                        break;
                    case "last_four_weeks":
                        this.processFourWeekTab();
                        break;
                    case "last_three_months":
                        this.processThreeMonthTab();
                        break;
                    case "last_six_months":
                        this.processSixMonthTab();
                        break;
                    case "last_year":
                        this.processTwelveMonthTab()
                    }
                },
                processCurrentTab: function() {
                    switch (this.displayGaugeChart = !0,
                    this.tabSelection = "current",
                    this.report.get("chartType")) {
                    case kt.a.BAR:
                    case kt.a.BAR_STACKED:
                    case kt.a.LINE_WITH_GAUGE:
                    case kt.a.LINE_MULTI_GROUPED:
                        this.metricPeriod = "daily";
                        break;
                    case kt.a.LINE:
                    case kt.a.SCATTERED_WITH_AVG:
                    case kt.a.BAR_NEGATIVE_STACKED:
                    case kt.a.PIE:
                        0 == this.report.get("metricName").indexOf("SLEEP") || -1 != this.report.get("metricName").indexOf("RESTING_HEART_RATE") || 0 == this.report.get("metricName").indexOf("FOOD") ? this.metricPeriod = "daily" : this.metricPeriod = "all"
                    }
                    this.displayPeriod = "daily",
                    this.report.get("metricName") === Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT || this.report.get("metricName") === Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT || this.report.get("metricName") === Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT_CYCLING || this.report.get("metricName") === Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT_CYCLING ? (this.displayTEGaugeChart = !0,
                    this.startDateOffset = -365 * (this.pageOffset + 1) + 1,
                    this.currentDateOffset = -365 * this.pageOffset,
                    this.startDate = Vt.a.formatAdjustedStartDate(this.startDateOffset, this.userPreferences, this.metricPeriod),
                    this.untilDate = Vt.a.formatDate(this.currentDateOffset)) : (this.startDate = Vt.a.formatDate(0),
                    this.untilDate = Vt.a.formatDate(0)),
                    Date.parse(this.startDate) <= Date.parse("2006-01-01") && (this.startDate = "2006-01-01"),
                    this.retrieveChartMetrics(),
                    this.resetReportUrl()
                },
                processSevenDayTab: function() {
                    switch (this.displayGaugeChart = !1,
                    this.displayTEGaugeChart = !1,
                    this.trainingEffectMetricPeriod = !0,
                    this.hrvStressReportMetricPeriod = !0,
                    this.tabSelection = "seven-day",
                    this.displayPeriod = "daily",
                    this.report.get("chartType")) {
                    case kt.a.BAR:
                    case kt.a.BAR_STACKED:
                    case kt.a.LINE_WITH_GAUGE:
                    case kt.a.LINE_MULTI_GROUPED:
                    case kt.a.PIE:
                        this.metricPeriod = "daily";
                        break;
                    case kt.a.LINE:
                    case kt.a.SCATTERED_WITH_AVG:
                    case kt.a.BAR_NEGATIVE_STACKED:
                        0 == this.report.get("metricName").indexOf("SLEEP") || -1 != this.report.get("metricName").indexOf("RESTING_HEART_RATE") || -1 !== this.report.get("metricName").indexOf("WELLNESS_AVERAGE_STRESS") || 0 == this.report.get("metricName").indexOf("FOOD") || this.report.get("metricName") === Pt.a.ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC || this.report.get("metricName") === Pt.a.ACTIVITY_AVG_LACTATE_THRESHOLD_BPM ? this.metricPeriod = "daily" : this.metricPeriod = "all";
                        break;
                    case kt.a.NONSTANDARD:
                        this.metricPeriod = "daily"
                    }
                    if (this.report.get("metricName") !== Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT && this.report.get("metricName") !== Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT && this.report.get("metricName") !== Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT_CYCLING && this.report.get("metricName") !== Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT_CYCLING || (this.metricPeriod = "all"),
                    this.report.get("metricName") === Pt.a.WELLNESS_BODYBATTERY_CHARGED && (this.metricPeriod = "daily"),
                    this.report.get("metricName") !== Pt.a.OUTDOOR_PULSE_OX_ACCLIMATION && this.report.get("metricName") !== Pt.a.ALL_DAY_PULSE_OX || (this.metricPeriod = "daily",
                    this.displayPeriod = "daily"),
                    this.report.get("metricName") === Pt.a.ACTIVITY_HRV_STRESS_TEST && (this.metricPeriod = "daily"),
                    this.report.get("metricName") === Pt.a.WELLNESS_MODERATE_INTENSITY_MINUTES || this.report.get("metricName") === Pt.a.WELLNESS_BODYBATTERY_CHARGED || this.report.get("metricName") === Pt.a.WELLNESS_BODYBATTERY_DRAINED) {
                        var t = 1 - (new Date).getDay();
                        t > 0 && (t -= 7),
                        this.startDateOffset = t + -7 * this.pageOffset,
                        this.currentDateOffset = t + 6 + -7 * this.pageOffset
                    } else
                        this.startDateOffset = -7 * (this.pageOffset + 1) + 1,
                        this.currentDateOffset = -7 * this.pageOffset;
                    this.startDate = Vt.a.formatDate(this.startDateOffset),
                    this.untilDate = Vt.a.formatDate(this.currentDateOffset),
                    Date.parse(this.startDate) <= Date.parse("2006-01-01") && (this.startDate = "2006-01-01"),
                    this.retrieveChartMetrics(),
                    this.resetReportUrl()
                },
                processFourWeekTab: function() {
                    switch (this.displayGaugeChart = !1,
                    this.displayTEGaugeChart = !1,
                    this.trainingEffectMetricPeriod = !1,
                    this.hrvStressReportMetricPeriod = !1,
                    this.tabSelection = "four-week",
                    this.report.get("chartType")) {
                    case kt.a.BAR:
                    case kt.a.BAR_STACKED:
                    case kt.a.LINE_WITH_GAUGE:
                    case kt.a.LINE_MULTI_GROUPED:
                        this.metricPeriod = "weekly";
                        break;
                    case kt.a.LINE:
                    case kt.a.SCATTERED_WITH_AVG:
                    case kt.a.BAR_NEGATIVE_STACKED:
                    case kt.a.PIE:
                        0 == this.report.get("metricName").indexOf("SLEEP") || 0 == this.report.get("metricName").indexOf("FOOD") ? this.metricPeriod = "daily" : -1 != this.report.get("metricName").indexOf("RESTING_HEART_RATE") || -1 !== this.report.get("metricName").indexOf(Pt.a.WELLNESS_AVERAGE_STRESS) || this.report.get("metricName") === Pt.a.ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC || this.report.get("metricName") === Pt.a.ACTIVITY_AVG_LACTATE_THRESHOLD_BPM ? this.metricPeriod = "weekly" : this.metricPeriod = "all";
                        break;
                    default:
                        this.metricPeriod = "weekly"
                    }
                    this.report.get("metricName") !== Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT && this.report.get("metricName") !== Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT && this.report.get("metricName") !== Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT_CYCLING && this.report.get("metricName") !== Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT_CYCLING || (this.metricPeriod = "all"),
                    this.startDateOffset = -28 * (this.pageOffset + 1) + 1,
                    this.currentDateOffset = -28 * this.pageOffset;
                    var t = this.userPreferences.get("firstDayOfWeek").dayId
                      , e = jt.a.getFirstDateOfWeek(new Date, t)
                      , a = new Date(e.getTime() - 18144e5);
                    if (this.report.get("metricName") === Pt.a.PREGNANCY_TRACKING_REPORTS) {
                        if (!this.untilDate && !this.startDate || this.showPregnancyEmptyState) {
                            var i = new Date(a - 28 * this.pageOffset * 864e5)
                              , r = 0 === this.pageOffset ? new Date : new Date(i.getTime() + 23328e5)
                              , s = Yt.default.getQueryParameterByName("date");
                            s && (r = Kt()(s).toDate(),
                            i = Kt()(s).subtract(4, "weeks").toDate()),
                            this.untilDate = jt.a.toISODateString(r),
                            this.startDate = jt.a.toISODateString(i)
                        }
                    } else {
                        i = new Date(a - 28 * this.pageOffset * 864e5),
                        r = 0 === this.pageOffset ? new Date : new Date(i.getTime() + 23328e5);
                        this.untilDate = jt.a.toISODateString(r),
                        this.startDate = jt.a.toISODateString(i)
                    }
                    this.displayPeriod = "weekly",
                    Date.parse(this.startDate) <= Date.parse("2006-01-01") && (this.startDate = "2006-01-01"),
                    this.report.get("metricName") === Pt.a.ACTIVITY_HRV_STRESS_TEST ? this.metricPeriod = "daily" : this.report.get("metricName") === Pt.a.ACTIVITY_AVERAGE_RESPIRATION_RATE ? this.metricPeriod = "daily" : this.report.get("metricName") === Pt.a.SLEEP_SLEEP_SCORE && (this.configureWeeklyViewAs28Days(),
                    this.metricPeriod = "daily"),
                    this.retrieveChartMetrics(),
                    this.resetReportUrl()
                },
                processSixMonthTab: function() {
                    this.displayGaugeChart = !1,
                    this.tabSelection = "six-month",
                    this.startDateOffset = -180 * (this.pageOffset + 1) + 1,
                    this.currentDateOffset = -180 * this.pageOffset;
                    var t = Vt.a.getDateOfMonthsAgo(1, 6 * this.pageOffset + 5);
                    this.startDate = jt.a.toISODateString(t);
                    var e = Kt()(t);
                    switch (e.add(5, "M").endOf("M"),
                    this.untilDate = jt.a.toISODateString(e.toDate()),
                    this.report.get("chartType")) {
                    case kt.a.BAR:
                    case kt.a.BAR_STACKED:
                    case kt.a.LINE_WITH_GAUGE:
                    case kt.a.LINE_MULTI_GROUPED:
                        this.metricPeriod = "monthly";
                        break;
                    case kt.a.PIE:
                        this.metricPeriod = "daily",
                        this.startDate = Vt.a.formatDate(this.startDateOffset),
                        this.untilDate = Vt.a.formatDate(this.currentDateOffset);
                        break;
                    case kt.a.LINE:
                    case kt.a.SCATTERED_WITH_AVG:
                    case kt.a.BAR_NEGATIVE_STACKED:
                        this.report.get("metricName").indexOf("SLEEP_DURATION") > -1 ? (this.metricPeriod = "weekly",
                        this.startDate = Vt.a.formatAdjustedStartDate(this.startDateOffset, this.userPreferences, this.metricPeriod),
                        // TX GCOverrides v1.15 "daily" in the line below (org. monthly)
                        this.untilDate = Vt.a.formatDate(this.currentDateOffset)) : -1 != this.report.get("metricName").indexOf("_HEART_RATE") || -1 !== this.report.get("metricName").indexOf(Pt.a.WELLNESS_AVERAGE_STRESS) || this.report.get("metricName") === Pt.a.ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC || this.report.get("metricName") === Pt.a.ACTIVITY_AVG_LACTATE_THRESHOLD_BPM ? this.metricPeriod = "daily" : "widget" == this.chartFormat ? (this.metricPeriod = "weekly",
                        this.startDate = Vt.a.formatAdjustedStartDate(this.startDateOffset, this.userPreferences, this.metricPeriod),
                        this.untilDate = Vt.a.formatDate(this.currentDateOffset)) : 0 == this.report.get("metricName").indexOf("FOOD") ? (this.metricPeriod = "daily",
                        this.startDate = Vt.a.formatDate(this.startDateOffset),
                        this.untilDate = Vt.a.formatDate(this.currentDateOffset)) : this.metricPeriod = "daily"; // TX GCOverrides v1.15 (org. monthly)
                        break;
                    default:
                        this.metricPeriod = "monthly" 
                    }
                    this.displayPeriod = "monthly",
                    Date.parse(this.startDate) <= Date.parse("2006-01-01") && (this.startDate = "2006-01-01"),
                    this.retrieveChartMetrics(),
                    this.resetReportUrl()
                },
                processThreeMonthTab: function() {
                    this.displayGaugeChart = !1,
                    this.tabSelection = "three-month",
                    this.displayPeriod = "monthly",
                    this.metricPeriod = "monthly",
                    this.startDateOffset = -90 * (this.pageOffset + 1) + 1,
                    this.currentDateOffset = -90 * this.pageOffset;
                    var t = Vt.a.getDateOfMonthsAgo(1, 3 * this.pageOffset + 2);
                    this.startDate = jt.a.toISODateString(t);
                    var e = Kt()(t);
                    e.add(2, "M").endOf("M"),
                    this.untilDate = jt.a.toISODateString(e.toDate()),
                    Date.parse(this.startDate) <= Date.parse("2006-01-01") && (this.startDate = "2006-01-01"),
                    this.retrieveChartMetrics(),
                    this.resetReportUrl()
                },
                processTwelveMonthTab: function() {
                    this.displayGaugeChart = !1,
                    this.tabSelection = "twelve-month",
                    this.startDateOffset = -365 * (this.pageOffset + 1) + 1,
                    this.currentDateOffset = -365 * this.pageOffset;
                    var t = Vt.a.getDateOfMonthsAgo(1, 12 * this.pageOffset + 11);
                    this.startDate = jt.a.toISODateString(t);
                    var e = Kt()(t);
                    switch (e.add(11, "M").endOf("M"),
                    this.untilDate = jt.a.toISODateString(e.toDate()),
                    this.report.get("chartType")) {
                    case kt.a.BAR:
                    case kt.a.BAR_STACKED:
                    case kt.a.LINE_WITH_GAUGE:
                    case kt.a.LINE_MULTI_GROUPED:
                        this.report.get("metricName") === Pt.a.ACTIVITY_ACTIVE_CALORIES ? this.metricPeriod = "monthly" : this.metricPeriod = "yearly";
                        break;
                    case kt.a.PIE:
                        this.metricPeriod = "daily",
                        this.startDate = Vt.a.formatDate(this.startDateOffset),
                        this.untilDate = Vt.a.formatDate(this.currentDateOffset);
                        break;
                    case kt.a.LINE:
                    case kt.a.SCATTERED_WITH_AVG:
                    case kt.a.BAR_NEGATIVE_STACKED:
                        this.report.get("metricName").indexOf("SLEEP_DURATION") > -1 ? (this.metricPeriod = "weekly",
                        this.startDate = Vt.a.formatAdjustedStartDate(this.startDateOffset, this.userPreferences, this.metricPeriod),
                        // TX GCOverrides v1.15 "daily" in the line below (org. monthly)
                        this.untilDate = Vt.a.formatDate(this.currentDateOffset)) : this.report.get("metricName") === Pt.a.ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC || this.report.get("metricName") === Pt.a.ACTIVITY_AVG_LACTATE_THRESHOLD_BPM ? this.metricPeriod = "yearly" : -1 != this.report.get("metricName").indexOf("_HEART_RATE") || -1 !== this.report.get("metricName").indexOf(Pt.a.WELLNESS_AVERAGE_STRESS) ? this.metricPeriod = "daily" : "widget" == this.chartFormat ? (this.metricPeriod = "weekly",
                        this.startDate = Vt.a.formatAdjustedStartDate(this.startDateOffset, this.userPreferences, this.metricPeriod),
                        this.untilDate = Vt.a.formatDate(this.currentDateOffset)) : 0 == this.report.get("metricName").indexOf("FOOD") ? (this.metricPeriod = "daily",
                        this.startDate = Vt.a.formatDate(this.startDateOffset),
                        this.untilDate = Vt.a.formatDate(this.currentDateOffset)) : this.metricPeriod = "daily"; // TX GCOverrides v1.15 (org. monthly)
                        break;
                    case kt.a.NONSTANDARD:
                        this.report.get("metricName") === Pt.a.ACTIVITY_POWER_CURVE_CYCLING ? this.metricPeriod = "yearly" : this.metricPeriod = "monthly",
                        this.startDate = Vt.a.formatAdjustedStartDate(this.startDateOffset, this.userPreferences, this.metricPeriod),
                        this.report.get("metricName") === Pt.a.SLEEP_SLEEP_SCORE && (this.metricPeriod = "weekly",
                        this.startDate = Vt.a.formatDate(this.startDateOffset),
                        this.untilDate = Vt.a.formatDate(this.currentDateOffset));
                        break;
                    default:
                        this.metricPeriod = "monthly"
                    }
                    this.displayPeriod = "yearly",
                    Date.parse(this.startDate) <= Date.parse("2006-01-01") && (this.startDate = "2006-01-01"),
                    this.retrieveChartMetrics(),
                    this.resetReportUrl()
                },
                resetReportUrl: function() {
                    var t = +this.report.get("metricId");
                    if (t === Ft.a.ACTIVITY_AEROBIC_TRAINING_EFFECT_CYCLING.id ? t = Ft.a.ACTIVITY_AEROBIC_TRAINING_EFFECT.id : t === Ft.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT_CYCLING.id ? t = Ft.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT.id : t === Ft.a.ACTIVITY_TRAINING_STATUS_CYCLING.id && (t = Ft.a.ACTIVITY_TRAINING_STATUS.id),
                    this.ftpMaxToggle)
                        this.reportUrl = "/report/" + t + "/" + this.reportType + "/" + this.activeTab + "/" + this.ftpMaxToggle;
                    else if (t < 0) {
                        if (this.report.get("metricName") === Pt.a.MENSTRUAL_CYCLE_TRACKING_REPORTS)
                            return this.pregnancyFeatureEnabled ? "/report/" + t + "/womens-health/" + this.activeTab : "/report/" + t + "/wellness/" + this.activeTab;
                        if (this.report.get("metricName") === Pt.a.WELLNESS_HYDRATION)
                            this.reportUrl = "/report/" + t + "/wellness/" + this.activeTab;
                        else if (this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS_CYCLING)
                            this.reportUrl = "/report/-1/" + this.reportType + "/" + this.activeTab;
                        else {
                            if (this.report.get("metricName") === Pt.a.REPORTS_AVERAGE_SWIM_PACE)
                                return "/report/" + Ft.a.ACTIVITY_AVERAGE_SWIM_PACE.id + "/swimming/" + this.activeTab;
                            if (this.report.get("metricName") === Pt.a.REPORTS_AVERAGE_CYCLING_PACE)
                                return "/report/" + Ft.a.ACTIVITY_AVERAGE_PACE.id + "/cycling/" + this.activeTab;
                            if (this.report.get("metricName") === Pt.a.REPORTS_AVERAGE_RUNNING_PACE)
                                return "/report/" + Ft.a.ACTIVITY_AVERAGE_PACE.id + "/running/" + this.activeTab;
                            this.reportUrl = "/report/" + this.report.get("metricName").toLowerCase() + "/" + this.reportType + "/" + this.activeTab
                        }
                    } else
                        this.reportUrl = "/report/" + t + "/" + this.reportType + (this.lactateThreshold && "current" === this.activeTab ? "/last_four_weeks" : "/" + this.activeTab);
                    this.$(".js-select-report").attr("href", Yt.default.url(this.reportUrl))
                },
                retrieveChartMetrics: function() {
                    var t, e = this, a = new Bt.a, i = this, r = !1;
                    if (this.report.get("metricName") === Pt.a.ACTIVITY_VERTICAL_OSCILLATION || this.report.get("metricName") === Pt.a.ACTIVITY_GROUND_CONTACT_TIME || this.report.get("metricName") === Pt.a.ACTIVITY_AVERAGE_RUN_CADENCE || this.report.get("metricName") === Pt.a.ACTIVITY_HRV_STRESS_TEST) {
                        this.metricColorRangesFetched = !1;
                        var s = new pt.a({
                            metricName: this.report.get("metricName")
                        });
                        a.addModel({
                            model: s,
                            required: !0
                        }),
                        a.bind(Bt.a.Events.SYNCHRONIZED, function() {
                            i.onMetricColorRangeReadyToRender(s)
                        }, this)
                    } else
                        this.metricColorRangesFetched = !0;
                    if (this.reportMetricsFetched = !1,
                    0 == this.report.get("metricName").indexOf("ACTIVITY") ? this.metricType = "activities" : this.metricType = "wellness",
                    this.report.get("metricName") === Pt.a.ACTIVITY_NUMBER_OF_ACTIVITIES || this.report.get("metricName") === Pt.a.ACTIVITY_ACTIVE_CALORIES || this.report.get("metricName") === Pt.a.ACTIVITY_TOTAL_DISTANCE || this.report.get("metricName") === Pt.a.ACTIVITY_TOTAL_DURATION ? this.groupResults = !0 : this.groupResults = !1,
                    this.report.get("metricName") === Pt.a.ACTIVITY_NUMBER_OF_ACTIVITIES || this.report.get("metricName") === Pt.a.ACTIVITY_ACTIVE_CALORIES || this.report.get("metricName") === Pt.a.ACTIVITY_TOTAL_DISTANCE || this.report.get("metricName") === Pt.a.ACTIVITY_TOTAL_DURATION || this.report.get("metricName") === Pt.a.STRENGTH_TRAINING || this.report.get("metricName") === Pt.a.PILATES && "page" === this.chartFormat && this.activityListEnabled || this.report.get("metricName") === Pt.a.ACTIVITY_TOTAL_DURATION_WITH_FILTERING && "page" === this.chartFormat && this.activityListEnabled) {
                        this.report.get("metricName") !== Pt.a.STRENGTH_TRAINING && this.report.get("metricName") !== Pt.a.PILATES && this.report.get("metricName") !== Pt.a.ACTIVITY_TOTAL_DURATION_WITH_FILTERING || this.configureWeeklyViewAs28Days();
                        var n = Ut.a.formatConnectTimestamp(Wt.a.parseISO(this.startDate))
                          , o = Kt()(Wt.a.parseISO(this.untilDate)).endOf("day");
                        o = Ut.a.formatConnectTimestamp(o.toDate()),
                        this.aggregation = "monthly" === this.metricPeriod || "yearly" === this.metricPeriod ? "monthly" : "weekly",
                        this.activityList = new ht.a(null,{
                            displayName: this.displayName,
                            activityTypeId: "all" !== this.reportType ? this.activityTypes.findByTypeKey(this.reportType).get("typeId") : null,
                            fetchSize: 5,
                            startTimestampLocal: n,
                            endTimestampLocal: o
                        }),
                        a.addModel({
                            model: this.activityList,
                            required: !0
                        })
                    }
                    if (this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS || this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS_CYCLING)
                        this.registeredDevices = new yt.a({
                            displayName: this.userPreferences.get("displayName")
                        }),
                        a.addModel({
                            model: this.registeredDevices,
                            required: !0
                        }),
                        "widget" === this.chartFormat ? t = new It.a({
                            calendarDate: Vt.a.formatDate(0)
                        }) : (null === this.mostRecentStatuses && (this.mostRecentStatuses = new It.a({
                            calendarDate: Vt.a.formatDate(0)
                        }),
                        a.addModel({
                            model: this.mostRecentStatuses,
                            required: !0
                        })),
                        this.vo2Metrics = this.reportService.getService({
                            reportType: this.report.get("metricName"),
                            metricType: this.metricType,
                            displayName: this.userPreferences.get("displayName"),
                            duration: "weekly" === this.metricPeriod ? "daily" : "weekly",
                            startDate: this.startDate,
                            endDate: this.untilDate,
                            shouldGroup: this.groupResults || !1,
                            metricIdList: this.buildMetricIdList(),
                            activityIdList: this.buildActivityIdList(),
                            activityTypes: this.activityTypes
                        }),
                        a.addModel({
                            model: this.vo2Metrics,
                            required: !0
                        }),
                        this.exerciseLoadMetrics = new At.a({
                            startDate: this.startDate,
                            endDate: this.untilDate,
                            metricIdList: this.buildExerciseLoadMetricIdList()
                        }),
                        a.addModel({
                            model: this.exerciseLoadMetrics,
                            required: !0
                        }),
                        this.trainingLoadBalance = new St.a({
                            calendarDate: Vt.a.formatDate(0)
                        }),
                        a.addModel({
                            model: this.trainingLoadBalance,
                            required: !0
                        }),
                        this.heatAltitudeAcclimationMetrics = new Lt.a({
                            duration: "weekly" === this.metricPeriod ? "daily" : "weekly",
                            startDate: this.startDate,
                            untilDate: this.untilDate
                        }),
                        a.addModel({
                            model: this.heatAltitudeAcclimationMetrics,
                            required: !0
                        }),
                        t = new xt.a({
                            metricPeriod: this.metricPeriod,
                            displayName: this.displayName,
                            startDate: this.startDate,
                            endDate: this.untilDate
                        }),
                        this.trainingStatusPausedDate && (this.activeATPs = new zt.a,
                        a.addModel({
                            model: this.activeATPs,
                            required: !0
                        })));
                    else if (this.report.get("metricName") === Pt.a.STRENGTH_TRAINING || this.report.get("metricName") === Pt.a.PILATES || this.report.get("metricName") === Pt.a.ACTIVITY_TOTAL_DURATION_WITH_FILTERING) {
                        var l = "daily";
                        "monthly" !== this.metricPeriod && "yearly" !== this.metricPeriod || (l = "monthly"),
                        this.configureWeeklyViewAs28Days(),
                        this.aggregation = l,
                        t = new ut.a({
                            aggregation: l,
                            startDate: this.startDate,
                            untilDate: this.untilDate,
                            activityTypeKey: this.reportType
                        })
                    } else if (this.report.get("metricName") === Pt.a.OUTDOOR_PULSE_OX_ACCLIMATION || this.report.get("metricName") === Pt.a.ALL_DAY_PULSE_OX)
                        this.registeredDevices = new yt.a({
                            displayName: this.userPreferences.get("displayName")
                        }),
                        a.addModel({
                            model: this.registeredDevices,
                            required: !0
                        }),
                        t = new Rt.a({
                            startDate: this.startDate,
                            untilDate: this.untilDate
                        });
                    else if (this.report.get("metricName") === Pt.a.WELLNESS_BODYBATTERY_CHARGED)
                        t = new gt.a({
                            startDate: this.startDate,
                            untilDate: this.untilDate
                        });
                    else if (this.report.get("metricName") === Pt.a.MENSTRUAL_CYCLE_TRACKING_REPORTS) {
                        var c = "last_year" === this.activeTab ? 12 : "last_six_months" === this.activeTab ? 6 : 1;
                        this.setInitialNextOrPrevMonthForInactiveUsers();
                        var h = this.nextOrPrevMonth ? Kt()(this.nextOrPrevMonth).format("YYYY-MM-DD") : Kt()(this.untilDate).format("YYYY-MM-DD");
                        t = new Tt.a({
                            cycleCount: c,
                            calendarDate: h,
                            reportType: this.isInactiveOrCycleTypeNone() ? "MONTH" : "CYCLE",
                            next: this.getNextMenstrualCycleReports
                        }),
                        this.getNextMenstrualCycleReports = !1,
                        this.isInactiveOrCycleTypeNone() || (this.nextOrPrevMonth = null)
                    } else if (this.report.get("metricName") === Pt.a.WELLNESS_HYDRATION)
                        this.configureWeeklyViewAs28Days(),
                        t = new mt.a({
                            aggregation: -1 !== ["daily", "weekly"].indexOf(this.metricPeriod) ? "daily" : "monthly",
                            startDate: this.startDate,
                            untilDate: this.untilDate
                        });
                    else if (this.report.get("metricName") === Pt.a.ACTIVITY_POWER_CURVE_CYCLING)
                        this.configureWeeklyViewAs28Days(),
                        this.loadPowerCurveLifetimeTotals(),
                        r = !0;
                    else if (this.report.get("metricName") === Pt.a.ACTIVITY_ACTIVE_CALORIES)
                        t = new wt.a({
                            aggregation: this.metricPeriod,
                            startDate: this.startDate,
                            endDate: this.untilDate,
                            groupByActivityType: "true",
                            metric: ["calories"],
                            activityType: "all" === this.reportType ? null : this.reportType,
                            firstDayOfWeek: this.userPreferences.get("firstDayOfWeek")
                        });
                    else if (this.report.get("metricName") === Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT || this.report.get("metricName") === Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT || this.report.get("metricName") === Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT_CYCLING || this.report.get("metricName") === Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT_CYCLING)
                        t = new At.a({
                            startDate: this.startDate,
                            endDate: this.untilDate,
                            metricIdList: this.buildTrainingEffectMetricIdList(),
                            activityType: this.reportType
                        });
                    else if (this.report.get("metricName") === Pt.a.SLEEP_SLEEP_SCORE)
                        t = "daily" === this.metricPeriod ? new ft.a({
                            startDate: this.startDate,
                            untilDate: this.untilDate
                        }) : new vt.a({
                            untilDate: this.untilDate,
                            noOfWeeks: se.a.SCORE_YEAR_REPORT_WEEKS_COUNT
                        });
                    else if (this.report.get("metricName") === Pt.a.PREGNANCY_TRACKING_REPORTS)
                        if (r = !0,
                        this.pregnancysnapshots)
                            this.initPregnancyTrackingReports();
                        else {
                            this.pregnancysnapshots = new ae.a;
                            var d = new Bt.a;
                            d.addModel({
                                model: this.pregnancysnapshots,
                                required: !0
                            }),
                            d.bind(Bt.a.Events.SYNCHRONIZED, function() {
                                e.initPregnancyTrackingReports()
                            }, this),
                            d.fetchModels()
                        }
                    else
                        t = this.reportService.getService({
                            reportType: this.report.get("metricName"),
                            metricType: this.metricType,
                            displayName: this.userPreferences.get("displayName"),
                            firstDayOfWeek: this.userPreferences.get("firstDayOfWeek"),
                            duration: this.metricPeriod,
                            startDate: this.startDate,
                            endDate: this.untilDate,
                            shouldGroup: this.groupResults || !1,
                            metricIdList: this.buildMetricIdList(),
                            activityIdList: this.buildActivityIdList(),
                            activityTypes: this.activityTypes,
                            sport: "running" === this.reportType || "cycling" === this.reportType ? this.reportType : null
                        });
                    if (r || (a.addModel({
                        model: t,
                        required: !0
                    }),
                    a.bind(Bt.a.Events.SYNCHRONIZED, function() {
                        i.onReportMetricsReadyToRender(t)
                    }, this)),
                    this.report.get("metricName") === Pt.a.WELLNESS_TOTAL_STEPS && "widget" === this.chartFormat) {
                        this.reportAveragesFetched = !1;
                        var u = new Et.a({
                            displayName: this.displayName,
                            startDate: this.startDate,
                            endDate: this.untilDate
                        });
                        a.addModel({
                            model: u,
                            required: !0
                        }),
                        a.bind(Bt.a.Events.SYNCHRONIZED, function() {
                            i.onReportAveragesReadyToRender(u)
                        }, this)
                    } else
                        this.reportAveragesFetched = !0;
                    a.fetchModels()
                },
                isMenstrualCycleTab: function() {
                    return this.report.get("metricName") === Pt.a.MENSTRUAL_CYCLE_TRACKING_REPORTS
                },
                isMenstrualCycleTabAndNoPreviousDatesAvailable: function() {
                    return this.isMenstrualCycleTab() && this.reportMetrics && null === this.reportMetrics.at(0).get("prevReportDate") && !this.isInactiveOrCycleTypeNone()
                },
                getCycleType: function(t) {
                    return "PREVIOUS" === t ? this.reportMetrics.at(0) && this.reportMetrics.at(0).get("prevCycleInfo") && this.reportMetrics.at(0).get("prevCycleInfo").cycleType : "NEXT" === t ? this.reportMetrics.at(0) && this.reportMetrics.at(0).get("nextCycleInfo") && this.reportMetrics.at(0).get("nextCycleInfo").cycleType : this.userSettings && this.userSettings.get("userMenstrualCycleSettings") && this.userSettings.get("userMenstrualCycleSettings").menstrualCycleType
                },
                isInactiveOrCycleTypeNone: function() {
                    return this.cycleType === s.d || null === this.cycleType
                },
                setInitialNextOrPrevMonthForInactiveUsers: function(t) {
                    !this.isInactiveOrCycleTypeNone() || this.nextOrPrevMonth && !t || (this.nextOrPrevMonth = Kt()(new Date).startOf("month").format(s.g))
                },
                setNextOrPrevCycleReportDate: function(t) {
                    this.nextOrPrevMonth = t ? this.reportMetrics && this.reportMetrics.at(0) && this.reportMetrics.at(0).get("prevReportDate") : this.reportMetrics && this.reportMetrics.at(0) && this.reportMetrics.at(0).get("nextReportDate"),
                    this.$(".icon-arrow-right").addClass("disabled"),
                    this.$(".icon-arrow-right").attr("disabled", !0),
                    this.$(".icon-arrow-left").addClass("disabled"),
                    this.$(".icon-arrow-left").attr("disabled", !0)
                },
                reportHasCycleSummaries: function(t) {
                    return t.at(0) && t.at(0).get("cycleSummaries") && t.at(0).get("cycleSummaries")[0]
                },
                hasReportCycleSummaryOrSymptomsLogged: function(t) {
                    return t.at(0) && (t.at(0).get("cycleSummaries") && t.at(0).get("cycleSummaries")[0] || t.at(0).get("dailyLogs") && t.at(0).get("dailyLogs")[0])
                },
                sortByDate: function(t, e) {
                    return t.startDate < e.startDate ? -1 : t.startDate > e.startDate ? 1 : 0
                },
                configureViewAsCycleLengthAfterRequest: function(t) {
                    if (this.reportHasCycleSummaries(t)) {
                        var e = t.at(0).get("cycleSummaries").sort(this.sortByDate)
                          , a = e[0].startDate;
                        this.startDate = Kt()(a).format("YYYY-MM-DD");
                        var i, r = e[t.at(0).get("cycleSummaries").length - 1], n = r.startDate;
                        i = r.gapCycle ? t.at(0).avgCycleLength ? t.at(0).avgCycleLength : 30 : r.cycleLength,
                        this.untilDate = Kt()(n).add(i, "d").format("YYYY-MM-DD")
                    } else
                        this.isInactiveOrCycleTypeNone() && this.nextOrPrevMonth && (this.startDate = Kt()(this.nextOrPrevMonth).startOf("month").format(s.g),
                        this.untilDate = Kt()(this.nextOrPrevMonth).endOf("month").format(s.g))
                },
                configureWeeklyViewAs28Days: function() {
                    if ("weekly" === this.metricPeriod) {
                        var t = Kt()().subtract(28 * (this.pageOffset + 1) - 1, "days")
                          , e = t.clone().add(27, "days");
                        this.startDate = t.format("YYYY-MM-DD"),
                        this.untilDate = e.format("YYYY-MM-DD")
                    }
                },
                buildMetricIdList: function() {
                    var t = [];
                    if (this.report.get("metricId"))
                        switch (this.report.get("metricName")) {
                        case Pt.a.COMMON_TOTAL_CALORIES:
                            t.push(this.report.get("metricId")),
                            t.push(Ft.a.COMMON_ACTIVE_CALORIES.id),
                            t.push(Ft.a.WELLNESS_BMR_CALORIES.id);
                            break;
                        case Pt.a.WELLNESS_TOTAL_STEPS:
                            t.push(this.report.get("metricId")),
                            t.push(Ft.a.WELLNESS_TOTAL_STEP_GOAL.id);
                            break;
                        case Pt.a.WELLNESS_FLOORS_ASCENDED:
                            t.push(this.report.get("metricId")),
                            t.push(Ft.a.WELLNESS_FLOORS_DESCENDED.id),
                            t.push(Ft.a.WELLNESS_USER_FLOORS_ASCENDED_GOAL.id);
                            break;
                        case Pt.a.WELLNESS_MODERATE_INTENSITY_MINUTES:
                            t.push(Ft.a.WELLNESS_MODERATE_INTENSITY_MINUTES.id),
                            t.push(Ft.a.WELLNESS_VIGOROUS_INTENSITY_MINUTES.id),
                            t.push(Ft.a.WELLNESS_USER_INTENSITY_MINUTES_GOAL.id);
                            break;
                        case Pt.a.ACTIVITY_TRAINING_STRESS_SCORE:
                            t.push(this.report.get("metricId")),
                            t.push(Ft.a.ACTIVITY_INTENSITY_FACTOR.id);
                            break;
                        case Pt.a.ACTIVITY_AVERAGE_PACE:
                        case Pt.a.ACTIVITY_AVERAGE_SPEED:
                        case Pt.a.ACTIVITY_AVERAGE_SWIM_PACE:
                            t.push(this.report.get("metricId")),
                            t.push(Ft.a.ACTIVITY_TOTAL_DISTANCE.id),
                            t.push(Ft.a.ACTIVITY_TOTAL_DURATION.id);
                            break;
                        case Pt.a.ACTIVITY_VO2_MAX:
                        case Pt.a.ACTIVITY_VO2_MAX_CYCLING:
                        case Pt.a.ACTIVITY_TRAINING_STATUS:
                        case Pt.a.ACTIVITY_TRAINING_STATUS_CYCLING:
                            this.vo2MaxMetricIdList(t);
                            break;
                        case Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT:
                        case Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT:
                            t.push(Ft.a.ACTIVITY_AEROBIC_TRAINING_EFFECT.id),
                            t.push(Ft.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT.id),
                            t.push(Ft.a.Activity_Id.id);
                            break;
                        case Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT_CYCLING:
                        case Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT_CYCLING:
                            t.push(Ft.a.ACTIVITY_AEROBIC_TRAINING_EFFECT.id),
                            t.push(Ft.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT.id),
                            t.push(Ft.a.Activity_Id.id);
                            break;
                        case Pt.a.ACTIVITY_AVG_LACTATE_THRESHOLD_BPM:
                        case Pt.a.ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC:
                            this.lactateMetricIdList(t);
                        case Pt.a.ACTIVITY_HRV_STRESS_TEST:
                            t.push(this.report.get("metricId"));
                            break;
                        case Pt.a.REPORTS_AVERAGE_SWIM_PACE:
                            t.push(Ft.a.ACTIVITY_AVERAGE_SWIM_PACE.id),
                            t.push(Ft.a.ACTIVITY_TOTAL_DISTANCE.id),
                            t.push(Ft.a.ACTIVITY_TOTAL_DURATION.id);
                            break;
                        case Pt.a.REPORTS_AVERAGE_CYCLING_PACE:
                        case Pt.a.REPORTS_AVERAGE_RUNNING_PACE:
                            t.push(Ft.a.ACTIVITY_AVERAGE_PACE.id),
                            t.push(Ft.a.ACTIVITY_TOTAL_DISTANCE.id),
                            t.push(Ft.a.ACTIVITY_TOTAL_DURATION.id);
                            break;
                        default:
                            t.push(this.report.get("metricId"))
                        }
                    return t
                },
                vo2MaxMetricIdList: function(t) {
                    return "wellness" !== this.reportType && "running" !== this.reportType && "all" !== this.reportType || t.push(Ft.a.ACTIVITY_VO2_MAX.id),
                    "cycling" !== this.reportType && "all" !== this.reportType || t.push(Ft.a.ACTIVITY_VO2_MAX_CYCLING.id),
                    t
                },
                lactateMetricIdList: function(t) {
                    var e = null
                      , a = this.reports.get("runningMetricsAvailability");
                    return this.report.get("metricName") === Pt.a.ACTIVITY_AVG_LACTATE_THRESHOLD_BPM ? e = o.a.find(a, function(t) {
                        return t.metric.metricName === Pt.a.ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC && !0 === t.available
                    }) : this.report.get("metricName") === Pt.a.ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC && (e = o.a.find(a, function(t) {
                        return t.metric.metricName === Pt.a.ACTIVITY_AVG_LACTATE_THRESHOLD_BPM && !0 === t.available
                    })),
                    e && t.push(e.metric.metricId),
                    t.push(this.report.get("metricId")),
                    t
                },
                buildExerciseLoadMetricIdList: function() {
                    var t = [];
                    return t.push(Ft.a.TRAINING_EFFECT_LABEL.id),
                    t.push(Ft.a.ACTIVITY_TRAINING_LOAD.id),
                    t.push(Ft.a.START_LOCAL.id),
                    t.push(Ft.a.ACTIVITY_TOTAL_DISTANCE.id),
                    t.push(Ft.a.ACTIVITY_TYPE.id),
                    t.push(Ft.a.ACTIVITY_SUB_TYPE.id),
                    t.push(Ft.a.ACTIVITY_NAME.id),
                    t.push(Ft.a.ACTIVITY_PARENT_ID.id),
                    t
                },
                buildTrainingEffectMetricIdList: function() {
                    var t = [];
                    return t.push(Ft.a.START_LOCAL.id),
                    t.push(Ft.a.ACTIVITY_TYPE.id),
                    t.push(Ft.a.ACTIVITY_SUB_TYPE.id),
                    t.push(Ft.a.ACTIVITY_NAME.id),
                    t.push(Ft.a.ACTIVITY_AEROBIC_TRAINING_EFFECT.id),
                    t.push(Ft.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT.id),
                    t
                },
                buildActivityIdList: function() {
                    var t = [];
                    switch (this.reportType) {
                    case "running":
                        t.push(1);
                        break;
                    case "cycling":
                        t.push(2);
                        break;
                    case "swimming":
                        t.push(26);
                        break;
                    case "yoga":
                        t.push(this.activityTypes.findByTypeKey("yoga").get("typeId"));
                        break;
                    case "breathwork":
                        var e = this.activityTypes.findByTypeKey(this.reportType);
                        e && t.push(e.get("typeId"));
                        break;
                    case "winter_sports":
                        t.push(this.activityTypes.findByTypeKey(this.reportType).get("typeId"))
                    }
                    return t
                },
                buildPrevRecordedDevices: function() {
                    null === this.prevRecordedDevices ? this.prevRecordedDevices = this.reportMetrics.attributes.recordedDevices : this.prevRecordedDevices = this.trainingStatusData.attributes.recordedDevices
                },
                buildTrainingStatusData: function() {
                    var t, e, a, i = !1, r = {
                        attributes: {}
                    };
                    if (r.attributes.recordedDevices = [],
                    r.attributes.reportData = {},
                    r.attributes.latestTrainingStatusData = {},
                    r.attributes.reportData = this.reportMetrics.get("reportData"),
                    r.attributes.latestTrainingStatusData = this.mostRecentStatuses.get("latestTrainingStatusData"),
                    null === this.prevRecordedDevices)
                        r.attributes.recordedDevices = this.reportMetrics.get("recordedDevices");
                    else {
                        for (a = 0; a < this.reportMetrics.get("recordedDevices").length; a++)
                            r.attributes.recordedDevices.push(this.reportMetrics.get("recordedDevices")[a]);
                        for (t = 0; t < this.prevRecordedDevices.length; t++) {
                            for (i = !1,
                            e = 0; e < this.reportMetrics.get("recordedDevices").length; e++)
                                if (this.prevRecordedDevices[t].deviceId === this.reportMetrics.get("recordedDevices")[e].deviceId) {
                                    i = !0;
                                    break
                                }
                            i || r.attributes.recordedDevices.push(this.prevRecordedDevices[t])
                        }
                    }
                    return r
                },
                onReportMetricsReadyToRender: function(t) {
                    this.reportMetrics = t,
                    this.reportMetricsFetched = !0,
                    this.isMenstrualCycleTab() && this.configureViewAsCycleLengthAfterRequest(t),
                    this.readyToRender()
                },
                onReportAveragesReadyToRender: function(t) {
                    this.averageSteps = t,
                    this.reportAveragesFetched = !0,
                    this.readyToRender()
                },
                onVo2MaxDataReadyToRender: function(t, e) {
                    this.vo2MaxCategories = t,
                    this.vo2MaxMetrics = e,
                    this.currentVo2Max = e.get("generic") ? e.get("generic").vo2MaxValue : null,
                    this.currentVo2MaxCycling = e.get("cycling") ? e.get("cycling").vo2MaxValue : null,
                    this.vo2MaxDataFetched = !0,
                    this.readyToRender()
                },
                onMetricColorRangeReadyToRender: function(t) {
                    this.metricColorRanges = t,
                    this.metricColorRangesFetched = !0,
                    this.readyToRender()
                },
                readyToRender: function() {
                    this.widgetState && "small-state" === this.widgetState || (this.report.get("metricName") === Pt.a.ACTIVITY_VO2_MAX || this.report.get("metricName") === Pt.a.ACTIVITY_VO2_MAX_CYCLING ? this.vo2MaxDataFetched ? this.determineChartView() : this.setVo2MaxProperties() : this.reportMetricsFetched && this.metricColorRangesFetched && this.reportAveragesFetched && this.determineChartView())
                },
                setVo2MaxProperties: function() {
                    var t = d.a.calculateAge(Ct.a.get("birthDate"));
                    this.gender = Ct.a.get("gender") || "MALE",
                    this.ageRange = Ct.a.get("birthDate") ? Gt.a.getAgeRange(t) : "40-49",
                    this.retrieveVo2MaxData()
                },
                retrieveVo2MaxData: function() {
                    var t = this
                      , e = new Bt.a
                      , a = new _t.a([],{
                        gender: this.gender,
                        ageRange: this.ageRange
                    })
                      , i = new Dt.a({
                        sport: "running" === this.reportType || "cycling" === this.reportType ? this.reportType : null
                    });
                    e.addModel({
                        model: a,
                        required: !0
                    }),
                    e.addModel({
                        model: i,
                        required: !0
                    }),
                    e.bind(Bt.a.Events.SYNCHRONIZED, function() {
                        t.onVo2MaxDataReadyToRender(a, i)
                    }, this),
                    e.fetchModels()
                },
                determineChartView: function() {
                    switch (this.setReportDateRange(),
                    this.disableIconsAndSetChartPlaceholder(),
                    this.report.get("metricName")) {
                    case Pt.a.ACTIVITY_VO2_MAX:
                    case Pt.a.ACTIVITY_VO2_MAX_CYCLING:
                        this.processVo2MaxReport();
                        break;
                    case Pt.a.ACTIVITY_MAX_FTP:
                        this.processFTPMaxChartView();
                        break;
                    case Pt.a.ACTIVITY_NUMBER_OF_ACTIVITIES:
                        this.processActivityLineReport();
                        break;
                    case Pt.a.ACTIVITY_TOTAL_DISTANCE:
                    case Pt.a.ACTIVITY_TOTAL_DURATION:
                        this.processActivityColumnReport();
                        break;
                    case Pt.a.ACTIVITY_AVERAGE_STROKES:
                    case Pt.a.ACTIVITY_AVERAGE_SWOLF:
                    case Pt.a.ACTIVITY_MINIMUM_SWOLF:
                        this.processSwimReport();
                        break;
                    case Pt.a.SLEEP_SLEEP_DURATION:
                        this.processSleepReport();
                        break;
                    case Pt.a.WELLNESS_TOTAL_STEPS:
                        this.processStepReport();
                        break;
                    case Pt.a.WELLNESS_FLOORS_ASCENDED:
                        this.processFloorsReport();
                        break;
                    case Pt.a.WELLNESS_RESTING_HEART_RATE:
                        this.processWellnessHRReport();
                        break;
                    case Pt.a.WELLNESS_AVERAGE_STRESS:
                        this.processWellnessStressReport();
                        break;
                    case Pt.a.WELLNESS_MODERATE_INTENSITY_MINUTES:
                        this.processIntensityMinutesReport();
                        break;
                    case Pt.a.COMMON_TOTAL_CALORIES:
                        this.processTotalCalorieReport();
                        break;
                    case Pt.a.ACTIVITY_AVERAGE_SPEED:
                    case Pt.a.ACTIVITY_AVERAGE_PACE:
                    case Pt.a.ACTIVITY_AVERAGE_SWIM_PACE:
                    case Pt.a.ACTIVITY_AVERAGE_HEART_RATE:
                    case Pt.a.ACTIVITY_MAX_HEART_RATE:
                    case Pt.a.ACTIVITY_AVERAGE_POWER:
                    case Pt.a.ACTIVITY_AVERAGE_BIKE_CADENCE:
                    case Pt.a.ACTIVITY_AVERAGE_RUN_CADENCE:
                    case Pt.a.ACTIVITY_NORMALIZED_POWER:
                    case Pt.a.ACTIVITY_MAX_20_MIN_AVERAGE_POWER:
                    case Pt.a.ACTIVITY_VERTICAL_OSCILLATION:
                    case Pt.a.ACTIVITY_GROUND_CONTACT_TIME:
                    case Pt.a.ACTIVITY_AVG_STRIDE_LENGTH:
                    case Pt.a.ACTIVITY_AVG_VERTICAL_RATIO:
                    case Pt.a.ACTIVITY_AVG_GROUND_CONTACT_BALANCE:
                    case Pt.a.ACTIVITY_AVERAGE_RESPIRATION_RATE:
                    case Pt.a.REPORTS_AVERAGE_SWIM_PACE:
                    case Pt.a.REPORTS_AVERAGE_CYCLING_PACE:
                    case Pt.a.REPORTS_AVERAGE_RUNNING_PACE:
                        this.processScatterChartReport();
                        break;
                    case Pt.a.FOOD_CALORIES_CONSUMED:
                    case Pt.a.FOOD_CALORIES_REMAINING:
                        this.processFoodReport();
                        break;
                    case Pt.a.ACTIVITY_TRAINING_STRESS_SCORE:
                        this.processPowerReport();
                        break;
                    case Pt.a.ACTIVITY_AVG_LACTATE_THRESHOLD_BPM:
                    case Pt.a.ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC:
                        this.processLactateThresholdChartReport();
                        break;
                    case Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT:
                    case Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT:
                    case Pt.a.ACTIVITY_AEROBIC_TRAINING_EFFECT_CYCLING:
                    case Pt.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT_CYCLING:
                        this.processTrainingEffectChartReports();
                        break;
                    case Pt.a.ACTIVITY_TRAINING_STATUS:
                    case Pt.a.ACTIVITY_TRAINING_STATUS_CYCLING:
                        this.processTrainingStatusReport();
                        break;
                    case Pt.a.ACTIVITY_HRV_STRESS_TEST:
                        this.processHRVStressReport();
                        break;
                    case Pt.a.STRENGTH_TRAINING:
                        this.processRepCountingReport(N.a, "line");
                        break;
                    case Pt.a.PILATES:
                    case Pt.a.ACTIVITY_TOTAL_DURATION_WITH_FILTERING:
                        this.processRepCountingReport(z.a, "column", !0);
                        break;
                    case Pt.a.WELLNESS_BODYBATTERY_CHARGED:
                    case Pt.a.WELLNESS_BODYBATTERY_DRAINED:
                        this.processBodyBatteryReport();
                        break;
                    case Pt.a.ACTIVITY_POWER_CURVE_CYCLING:
                        this.processPowerCurveReport();
                        break;
                    case Pt.a.ACTIVITY_ACTIVE_CALORIES:
                        this.processActivityCaloriesReport();
                        break;
                    case Pt.a.OUTDOOR_PULSE_OX_ACCLIMATION:
                        this.processPulseOxAcclimationReport();
                        break;
                    case Pt.a.ALL_DAY_PULSE_OX:
                        this.processAllDayPulseOxReport();
                        break;
                    case Pt.a.WELLNESS_HYDRATION:
                        this.processHydrationReport();
                        break;
                    case Pt.a.MENSTRUAL_CYCLE_TRACKING_REPORTS:
                        this.processMenstrualCycleReport();
                        break;
                    case Pt.a.SLEEP_SLEEP_SCORE:
                        this.processSleepScoreReport();
                        break;
                    case Pt.a.PREGNANCY_TRACKING_REPORTS:
                        this.processPregnancyReport()
                    }
                    this.reportChartView.render()
                },
                setReportDateRange: function() {
                    if (this.report.get("metricName") !== Pt.a.ACTIVITY_VO2_MAX && this.report.get("metricName") !== Pt.a.ACTIVITY_VO2_MAX_CYCLING || "current" !== this.activeTab)
                        if ((this.lactateThreshold || this.ftpMaxToggle) && "current" === this.activeTab)
                            this.$(".js-report-date-range").html(h.a.localize("lactate.threshold.most.recent"));
                        else if (this.isMenstrualCycleTab()) {
                            var t = this.untilDate;
                            this.isInactiveOrCycleTypeNone() || (t = Kt()(this.untilDate).add(-1, "d").format("YYYY-MM-DD")),
                            this.$(".js-report-date-range").html(Vt.a.personalizeDateRange(this.startDate, t, this.displayPeriod, this.metricPeriod, this.userPreferences))
                        } else
                            this.$(".js-report-date-range").html(Vt.a.personalizeDateRange(this.startDate, this.untilDate, this.displayPeriod, this.metricPeriod, this.userPreferences));
                    else {
                        var e = this.vo2MaxMetrics.get("generic") ? this.vo2MaxMetrics.get("generic").calendarDate : null
                          , a = this.vo2MaxMetrics.get("cycling") ? this.vo2MaxMetrics.get("cycling").calendarDate : null;
                        e && this.$(".js-report-date-range").html(Ut.a.formatMonthDayOptionalYear(Wt.a.parseISO(e))),
                        "cycling" === this.reportType && a && this.$(".js-report-date-range").html(Ut.a.formatMonthDayOptionalYear(Wt.a.parseISO(a)))
                    }
                },
                disableIconsAndSetChartPlaceholder: function() {
                    0 == this.pageOffset ? (this.$(".js-today-btn").addClass("disabled"),
                    this.$(".js-today-btn").attr("disabled", !0),
                    this.$(".icon-arrow-right").addClass("disabled"),
                    this.$(".icon-arrow-right").attr("disabled", !0)) : (this.$(".js-today-btn").removeClass("disabled"),
                    this.$(".js-today-btn").attr("disabled", !1),
                    this.$(".icon-arrow-right").removeClass("disabled"),
                    this.$(".icon-arrow-right").attr("disabled", !1)),
                    Date.parse(this.startDate) <= Date.parse("2006-01-01") || this.isMenstrualCycleTabAndNoPreviousDatesAvailable() ? (this.$(".icon-arrow-left").addClass("disabled"),
                    this.$(".icon-arrow-left").attr("disabled", !0)) : (this.$(".icon-arrow-left").removeClass("disabled"),
                    this.$(".icon-arrow-left").attr("disabled", !1)),
                    this.report.get("metricName") === Pt.a.PREGNANCY_TRACKING_REPORTS && (Kt()(this.untilDate).isBefore(Kt()()) && (this.$(".js-today-btn").removeClass("disabled"),
                    this.$(".js-today-btn").attr("disabled", !1)),
                    this.reportMetrics.at(0).has("nextCycleInfo") && this.reportMetrics.at(0).get("nextCycleInfo").cycleType === s.e && Kt()(this.reportMetrics.at(0).get("nextCycleInfo").startDate).isBefore(Kt()()) && (this.$(".icon-arrow-right").removeClass("disabled"),
                    this.$(".icon-arrow-right").attr("disabled", !1))),
                    "page" === this.chartFormat ? this.displayTEGaugeChart ? this.chartPlaceholder = "js-report-chart-current-te" : this.chartPlaceholder = "js-report-chart-" + this.tabSelection : this.chartPlaceholder = "reportChartPlaceholder"
                },
                processVo2MaxReport: function() {
                    !this.displayGaugeChart || this.currentVo2Max && this.currentVo2Max <= 100 || this.currentVo2MaxCycling && this.currentVo2MaxCycling < 100 ? (this.$(".vo2-info-trigger").show(),
                    this.displayGaugeChart ? (this.$(".vo2-max-help-modal").show(),
                    this.$(".js-today-btn").hide(),
                    this.$(".icon-arrow-left").hide(),
                    this.$(".icon-arrow-right").hide(),
                    this.$(".chart-widget").addClass("chart-gauge-vo2"),
                    this.$(".chart-widget").removeClass("chart-stacked-report"),
                    this.$(".vo2-title-block").removeClass("bottom-xs").addClass("bottom-none"),
                    this.currentVo2Max && this.currentVo2MaxCycling && "all" === this.reportType && this.$(".vo2-sport-filter").show(),
                    "page" === this.chartFormat && (this.$(".js-report-date-range").hide(),
                    this.initializeVo2MaxDynamicTextView()),
                    this.initializeVo2MaxChartView()) : (this.$(".vo2-max-help-modal").show(),
                    this.$(".js-report-date-range").show(),
                    this.$(".js-today-btn").show(),
                    this.$(".icon-arrow-left").show(),
                    this.$(".icon-arrow-right").show(),
                    this.$(".chart-widget").removeClass("chart-gauge-vo2"),
                    this.$(".chart-widget").addClass("chart-stacked-report"),
                    this.$(".vo2-title-block").removeClass("bottom-none").addClass("bottom-xs"),
                    this.report.get("metricName") === Pt.a.ACTIVITY_VO2_MAX_CYCLING && Vt.a.determineNonZeroMetricsFound(this.reportMetrics, Pt.a.ACTIVITY_VO2_MAX_CYCLING) || this.report.get("metricName") === Pt.a.ACTIVITY_VO2_MAX && Vt.a.determineNonZeroMetricsFound(this.reportMetrics, Pt.a.ACTIVITY_VO2_MAX) ? this.initializeChartView(tt.a, "area", -27) : (this.$(".chart-widget").addClass("chart-gauge-vo2"),
                    this.initializeEmptyChartView()))) : (this.$(".chart-widget").addClass("chart-gauge-vo2"),
                    this.initializeEmptyChartView())
                },
                processActivityLineReport: function() {
                    Vt.a.determineNonZeroActivityMetricsFound(this.reportMetrics.toJSON(), Pt.a[this.report.get("metricName")]) ? (this.initializeChartView(u.a, "line", -27),
                    this.processActivityList()) : (this.initializeEmptyChartView(),
                    this.$("#reportActivityList").hide())
                },
                processActivityColumnReport: function() {
                    Vt.a.determineNonZeroActivityMetricsFound(this.reportMetrics.toJSON(), Pt.a[this.report.get("metricName")]) ? (this.initializeChartView(u.a, "column", -27),
                    this.processActivityList()) : (this.initializeEmptyChartView(),
                    this.$("#reportActivityList").hide())
                },
                processActivityCaloriesReport: function() {
                    Vt.a.hasNonEmptyAggregateStats(this.reportMetrics.aggregateStats) ? (this.initializeActivityCaloriesChartView(st.a, "column", -27),
                    this.processActivityList()) : (this.initializeEmptyChartView(),
                    this.$("#reportActivityList").hide())
                },
                processSwimReport: function() {
                    Vt.a.determineNonZeroMetricsFound(this.reportMetrics, Pt.a[this.report.get("metricName")]) ? this.initializeChartView(j.a, "column", -27) : this.initializeEmptyChartView()
                },
                processSleepReport: function() {
                    if (Vt.a.determineNonZeroMetricsFound(this.reportMetrics, Pt.a[this.report.get("metricName")])) {
                        var t = -30;
                        switch (this.displayPeriod) {
                        case "monthly":
                            t = -185;
                            break;
                        case "yearly":
                            t = -370
                        }
                        this.initializeChartView(G.a, "spline", t)
                    } else
                        this.initializeEmptyChartView()
                },
                processStepReport: function() {
                    if (this.reportMetrics && this.reportMetrics.length > 0) {
                        if ("widget" === this.chartFormat) {
                            var e = this.reportMetrics.at(0).get("metricsMap").WELLNESS_TOTAL_STEPS
                              , a = 0
                              , i = this.averageSteps.get("averageSteps");
                            if (e)
                                for (var r = 0; r < e.length; r++)
                                    a += e[r].value;
                            this.$(".js-report-total-value").html(t.formatNumber(a, {
                                format: "###,###,##0",
                                locale: d.a.numberSeparator
                            })),
                            this.$(".js-report-avg-value").html(t.formatNumber(i, {
                                format: "#,###,##0",
                                locale: d.a.numberSeparator
                            })),
                            this.$(".js-report-summary").show()
                        }
                        this.initializeChartView(B.a, "column", -27)
                    } else
                        this.initializeEmptyChartView()
                },
                processFloorsReport: function() {
                    Vt.a.determineNonZeroMetricsFound(this.reportMetrics, "WELLNESS_FLOORS_ASCENDED") ? this.initializeChartView(g.a, "column", -27) : this.initializeEmptyChartView()
                },
                processWellnessHRReport: function() {
                    Vt.a.determineNonZeroMetricsFound(this.reportMetrics, "WELLNESS_RESTING_HEART_RATE") ? this.initializeChartView(D.a, "area", -27) : this.initializeEmptyChartView()
                },
                processWellnessStressReport: function() {
                    Vt.a.determineNonZeroMetricsFound(this.reportMetrics, "WELLNESS_AVERAGE_STRESS") ? this.initializeChartView(f.a, "area", -27) : this.initializeEmptyChartView()
                },
                processIntensityMinutesReport: function() {
                    this.reportMetrics && this.reportMetrics.length > 0 ? this.initializeChartView(O.a, "column", -27) : this.initializeEmptyChartView()
                },
                processTotalCalorieReport: function() {
                    Vt.a.determineNonZeroMetricsFound(this.reportMetrics, "WELLNESS_BMR_CALORIES") || Vt.a.determineNonZeroMetricsFound(this.reportMetrics, "COMMON_ACTIVE_CALORIES") ? this.initializeChartView($.a, "column", -27) : this.initializeEmptyChartView()
                },
                processLactateThresholdChartReport: function() {
                    var t = this.reportMetrics;
                    "current" === this.activeTab || Vt.a.determineNonZeroMetricsFound(t, Pt.a.ACTIVITY_AVG_LACTATE_THRESHOLD_BPM) || Vt.a.determineNonZeroMetricsFound(t, Pt.a.ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC) ? this.initializeChartView(R.a, "column", -30) : (this.$(".chart-container .chart").removeClass("span9"),
                    this.$(".lt-page").remove(),
                    this.initializeEmptyChartView())
                },
                processScatterChartReport: function() {
                    var t = Pt.a[this.report.get("metricName")];
                    t === Pt.a.REPORTS_AVERAGE_SWIM_PACE ? this.report.set({
                        metricName: Pt.a.ACTIVITY_AVERAGE_SWIM_PACE
                    }) : t !== Pt.a.REPORTS_AVERAGE_CYCLING_PACE && t !== Pt.a.REPORTS_AVERAGE_RUNNING_PACE || this.report.set({
                        metricName: Pt.a.ACTIVITY_AVERAGE_PACE
                    }),
                    Vt.a.determineNonZeroMetricsFound(this.reportMetrics, this.report.get("metricName")) ? this.initializeScatterChartView() : this.initializeEmptyChartView()
                },
                processFoodReport: function() {
                    Vt.a.determineNonNullMetricsFound(this.reportMetrics, Pt.a[this.report.get("metricName")]) ? this.initializeChartView(m.a, "column", -30) : this.initializeEmptyChartView()
                },
                processPowerReport: function() {
                    Vt.a.determineNonZeroMetricsFound(this.reportMetrics, Pt.a[this.report.get("metricName")]) ? this.initializeChartView(L.a, "column", -27) : this.initializeEmptyChartView()
                },
                processTrainingEffectChartReports: function() {
                    if (this.showAerobicTE = Vt.a.hasWeeklyTrainingEffectData("aerobicTrainingEffect", this.reportMetrics),
                    this.showAnaerobicTE = Vt.a.hasWeeklyTrainingEffectData("anaerobicTrainingEffect", this.reportMetrics),
                    this.$(".js-report-date-range").show(),
                    this.$(".js-today-btn").show(),
                    this.$(".icon-arrow-left").show(),
                    this.$(".icon-arrow-right").show(),
                    this.showAerobicTE || this.showAnaerobicTE)
                        this.initializeTrainingEffectColumnChartView("column", -28);
                    else {
                        var t = "widget" === this.chartFormat;
                        this.initializeTrainingEffectEmptyChartView(t)
                    }
                },
                processRepCountingReport: function(t, e, a) {
                    this.reportMetrics.length > 0 ? (this.initializeChartView(t, e, -27, a),
                    "page" === this.chartFormat && (this.processActivityList(),
                    this.exerciseFilterView ? (this.exerciseFilterView.setExerciseList(this.reportMetrics),
                    this.exerciseFilterView.render()) : (this.exerciseFilterView = new p.a({
                        metricsList: this.reportMetrics
                    }),
                    this.exerciseFilterView.render(),
                    this.$("#reportFilter").append(this.exerciseFilterView.$el)),
                    this.$("#reportFilter").show(),
                    this.listenTo(this.exerciseFilterView, p.a.Events.EXERCISE_FILTER_SELECTED, this.onExerciseFiltered))) : (this.initializeEmptyChartView(),
                    this.$("#reportActivityList").hide(),
                    this.$("#reportFilter").hide())
                },
                onExerciseFiltered: function(t) {
                    this.reportChartView.setFilter(t),
                    this.reportChartView.render()
                },
                processTrainingStatusReport: function() {
                    "widget" === this.chartFormat ? this.initializeTrainingStatusCurrentView() : (this.trainingStatusData = this.buildTrainingStatusData(),
                    this.showTrainingStatusBanner(),
                    this.initializeTrainingStatusReportHeaderView(),
                    this.initializeTrainingStatusReportView())
                },
                processBodyBatteryReport: function() {
                    this.showBodyBattery = Vt.a.hasWeeklyBodyBatteryData(this.reportMetrics),
                    this.$(".js-today-btn").hide(),
                    this.showBodyBattery ? this.initializeChartView(v.a, "area", -30) : this.initializeEmptyChartView()
                },
                processHydrationReport: function() {
                    this.reportMetrics && this.reportMetrics.length > 0 ? this.initializeHydrationChartView() : this.initializeEmptyChartView()
                },
                processMenstrualCycleReport: function() {
                    !this.reportMetrics || !this.reportMetrics.at(0) || this.reportMetrics.at(0).get("responseStatus") && 204 !== this.reportMetrics.at(0).get("responseStatus") ? this.hasReportCycleSummaryOrSymptomsLogged(this.reportMetrics) && "page" === this.chartFormat || this.isInactiveOrCycleTypeNone() && "page" === this.chartFormat || "widget" === this.chartFormat && this.reportMetrics && this.reportMetrics.at(0) && this.reportMetrics.at(0).get("cycleSummaries") && this.reportMetrics.at(0).get("cycleSummaries")[0] ? this.initializeMenstrualCycleChartView() : this.initializeEmptyChartView() : this.initializeMenstrualCycleNoDataYetView()
                },
                processPregnancyReport: function() {
                    this.initializePregnancyChartView()
                },
                initializePregnancyChartView: function() {
                    var t = this;
                    if (this.reportChartView)
                        this.reportChartView.update({
                            metrics: this.showPregnancyEmptyState ? {} : this.reportMetrics.at(0).toJSON(),
                            startDate: this.startDate,
                            endDate: this.untilDate,
                            showEmptyState: this.showPregnancyEmptyState
                        });
                    else {
                        var e = Yt.default.getQueryParameterByName("report");
                        if (e) {
                            var a = window.location.href.substring(0, window.location.href.indexOf("?"));
                            Yt.default.replaceNavigationURL(a)
                        }
                        this.reportChartView = new Nt.a({
                            metrics: this.showPregnancyEmptyState ? {} : this.reportMetrics.at(0).toJSON(),
                            userSettings: this.userSettings.toJSON(),
                            startDate: this.startDate,
                            endDate: this.untilDate,
                            tabView: this.activeTab,
                            pregnancy9MoReportEnabled: this.pregnancy9MoReportEnabled,
                            showEmptyState: this.showPregnancyEmptyState,
                            isChartOnWidget: "widget" === this.chartFormat,
                            selectedReport: e,
                            onReportChange: function(e) {
                                e ? t.$(".js-last_nine_months").show() : t.$(".js-last_nine_months").hide()
                            },
                            el: this.$("." + this.chartPlaceholder)
                        })
                    }
                    this.trigger(ne.ON_TAB_CHANGED, !1),
                    this.listenToOnce(this, ne.ON_TAB_CHANGED, this.reportChartView.emptyCharts)
                },
                processSleepScoreReport: function() {
                    if (this.reportMetrics && this.reportMetrics.length > 0) {
                        var t = "yearly" === this.displayPeriod ? -370 : -30;
                        this.initializeChartView(H.a, "line", t, !0),
                        this.initializeSummariesView(this.reportMetrics),
                        this.$(".report-summaries-placeholder").show()
                    } else
                        this.$(".report-summaries-placeholder").hide(),
                        this.initializeEmptyChartView()
                },
                processHRVStressReport: function() {
                    if (this.$(".hrv-info-trigger").show(),
                    this.$(".hrv-info-filter").hide(),
                    this.showHRVStress = Vt.a.determineNonNullMetricsFound(this.reportMetrics, Pt.a.ACTIVITY_HRV_STRESS_TEST),
                    this.$(".js-report-date-range").show(),
                    this.$(".js-today-btn").show(),
                    this.$(".icon-arrow-left").show(),
                    this.$(".icon-arrow-right").show(),
                    this.showHRVStress)
                        this.$(".js-report-date-range").show(),
                        this.$(".js-today-btn").show(),
                        this.$(".icon-arrow-left").show(),
                        this.$(".icon-arrow-right").show(),
                        this.initializeHRVStressReportView("column", 28);
                    else {
                        var t = "widget" === this.chartFormat;
                        t && this.$(".js-report-date-range").hide(),
                        this.initializeEmptyChartView(!0, t)
                    }
                },
                processActivityList: function() {
                    "page" === this.chartFormat && this.activityListEnabled && (this.activityListView ? (this.activityListView.setActivityList(this.activityList, this.aggregation),
                    this.activityListView.clearLastIndex(),
                    this.activityListView.render()) : (this.activityListView = new V.a({
                        activityList: this.activityList,
                        aggregation: this.aggregation
                    }),
                    this.activityListView.render(),
                    this.$("#reportActivityList").append(this.activityListView.$el)),
                    this.$("#reportActivityList").show(),
                    this.listenTo(this.activityListView, V.a.Events.SHOW_MORE_CLICKED, this.onShowMoreClicked),
                    this.listenTo(this.activityList, ht.a.Events.ACTIVITIES_FETCHED, this.onActivitiesFectched),
                    this.listenTo(this.activityList, ht.a.Events.NO_MORE_ACTIVITIES, this.onNoMoreActivities))
                },
                processPulseOxAcclimationReport: function() {
                    this.showPulseOxAcclimation = "last_seven_days" === this.activeTab ? Vt.a.hasPulseOxAcclimationEpochData(this.reportMetrics) : Vt.a.hasWeeklyPulseOxAcclimationData(this.reportMetrics),
                    this.showPulseOxAcclimation ? this.initializeChartView(T.a, "area", 28) : this.initializeEmptyChartView()
                },
                processAllDayPulseOxReport: function() {
                    ("last_seven_days" === this.activeTab ? Vt.a.hasAllDayPulseOxEpochData(this.reportMetrics) : Vt.a.hasAllDayPulseOxData(this.reportMetrics)) ? this.initializeChartView(_.a, "area", 28) : this.initializeEmptyChartView()
                },
                initializeHRVStressReportView: function(t, e) {
                    this.reportChartView = new I.a({
                        report: this.report.toJSON(),
                        reportType: this.reportType,
                        chartFormat: this.chartFormat,
                        chartType: t,
                        metricList: this.reportMetrics,
                        metricPeriod: this.metricPeriod,
                        currentDateOffset: this.currentDateOffset,
                        userPreferences: this.userPreferences,
                        daysInMonth: e,
                        displayName: this.displayName,
                        hrvStressReportMetricPeriod: this.hrvStressReportMetricPeriod,
                        el: this.$("." + this.chartPlaceholder)
                    })
                },
                initializeHydrationChartView: function() {
                    this.reportChartView = new Y.a({
                        metrics: this.reportMetrics,
                        metricPeriod: this.metricPeriod,
                        userSettings: this.userSettings,
                        startDate: this.startDate,
                        endDate: this.untilDate,
                        isChartOnWidget: "widget" === this.chartFormat,
                        el: this.$("." + this.chartPlaceholder)
                    })
                },
                initializeMenstrualCycleChartView: function() {
                    this.reportChartView = new W.a({
                        metrics: this.reportMetrics,
                        metricPeriod: this.metricPeriod,
                        userSettings: this.userSettings,
                        startDate: this.startDate,
                        endDate: this.untilDate,
                        tabView: "last_year" === this.activeTab ? 12 : "last_six_months" === this.activeTab ? 6 : 1,
                        isUserInactiveOrCycleTypeNone: this.isInactiveOrCycleTypeNone(),
                        isChartOnWidget: "widget" === this.chartFormat,
                        el: this.$("." + this.chartPlaceholder)
                    }),
                    this.trigger(ne.ON_TAB_CHANGED, !1),
                    this.listenToOnce(this, ne.ON_TAB_CHANGED, this.reportChartView.emptyCharts)
                },
                initializeMenstrualCycleNoDataYetView: function() {
                    this.reportChartView = new U.a({
                        isChartOnWidget: "widget" === this.chartFormat,
                        el: this.$("." + this.chartPlaceholder)
                    })
                },
                initializeTrainingEffectColumnChartView: function(t, e) {
                    this.reportChartView && "function" === typeof this.reportChartView.destroy && this.reportChartView.destroy(),
                    this.reportChartView = new it.a({
                        report: this.report.toJSON(),
                        reportType: this.reportType,
                        chartFormat: this.chartFormat,
                        chartType: t,
                        trainingEffectMetricPeriod: this.trainingEffectMetricPeriod,
                        currentDateOffset: this.currentDateOffset,
                        userPreferences: this.userPreferences,
                        metricList: this.reportMetrics,
                        daysInMonth: e,
                        showAnaerobicTE: this.showAnaerobicTE,
                        showAerobicTE: this.showAerobicTE,
                        startDateStr: this.startDate,
                        untilDateStr: this.untilDate,
                        el: this.$("." + this.chartPlaceholder)
                    })
                },
                initializeTrainingStatusCurrentView: function() {
                    this.reportChartView && (this.reportChartView.remove(),
                    this.reportChartView = null),
                    this.reportChartView = new K.a({
                        metricList: this.reportMetrics,
                        reportPageUrl: this.getTrainingStatusReportPageUrl(),
                        registeredDevices: this.registeredDevices,
                        displayName: this.displayName,
                        startDate: this.startDate,
                        untilDate: this.untilDate,
                        userSettings: this.userSettings
                    }),
                    this.listenTo(this.reportChartView, K.a.Events.ON_UPDATE_TRAINING_STATUS_PAUSED_DATE, this.onTrainingStatusResumeClicked),
                    this.$("#widget-current-status-container").html(this.reportChartView.el)
                },
                getTrainingStatusReportPageUrl: function() {
                    return this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS_CYCLING ? "/report/" + Ft.a.ACTIVITY_TRAINING_STATUS.id + "/cycling/" + this.activeTab : "/report/" + this.report.get("metricName").toLowerCase() + "/" + this.reportType + "/" + this.activeTab
                },
                showTrainingStatusBanner: function() {
                    var t = this;
                    if (this.shouldShowTrainingStatusBanner()) {
                        var e = this.activeATPs.models[0].get("athletePlanId");
                        (new Jt.a).renderComponent(Qt.a, this.$("#banner-placeholder")[0], {
                            athletePlanId: e,
                            onPausePlanClicked: function() {
                                t.onPausePlanClicked()
                            }
                        })
                    }
                },
                shouldShowTrainingStatusBanner: function() {
                    return this.trainingStatusPausedDate && this.activeATPs && this.activeATPs.length > 0 && !this.activeATPs.models[0].get("pause")
                },
                initializeTrainingStatusReportHeaderView: function() {
                    this.trainingStatusReportHeader && "function" === typeof this.trainingStatusReportHeader.destroy && this.trainingStatusReportHeader.destroy(),
                    this.trainingStatusReportHeader = new X.a({
                        metricList: this.trainingStatusData,
                        trainingLoadBalance: this.trainingLoadBalance,
                        registeredDevices: this.registeredDevices,
                        untilDate: this.untilDate,
                        isFeatureEnabled: this.isRespirationRateEnabled,
                        trainingStatusPausedDate: this.trainingStatusPausedDate
                    }),
                    this.$("#report-current-status-container").html(this.trainingStatusReportHeader.render().el),
                    this.listenTo(this.trainingStatusReportHeader, X.a.Events.DEVICE_CHANGE, this.onTSDeviceChange)
                },
                initializeTrainingStatusReportView: function() {
                    this.reportChartView && "function" === typeof this.reportChartView.destroy && this.reportChartView.destroy(),
                    this.reportChartView = new q.a({
                        el: this.$("." + this.chartPlaceholder),
                        startDate: this.startDate,
                        untilDate: this.untilDate,
                        metricPeriod: this.metricPeriod,
                        report: this.report.toJSON(),
                        reportType: this.reportType,
                        metricList: this.trainingStatusData,
                        vo2MaxData: this.vo2Metrics.at(0).get("metricsMap"),
                        heatAltitudeAcclimationMetrics: this.heatAltitudeAcclimationMetrics,
                        exerciseLoadMetrics: this.exerciseLoadMetrics,
                        registeredDevices: this.registeredDevices,
                        userPreferences: this.userPreferences,
                        hasTrainingStatusPauseCapableDevice: this.hasTrainingStatusPauseCapableDevice,
                        trainingStatusPausedDate: this.trainingStatusPausedDate
                    }),
                    this.listenTo(this.reportChartView, q.a.Events.LEARN_MORE_CLICKED, this.renderTrainingStatusInfoModal)
                },
                initializeActivityCaloriesChartView: function(t, e, a) {
                    this.reportChartView = new t({
                        report: this.report.toJSON(),
                        reportType: this.reportType,
                        activeTab: this.activeTab,
                        metricList: this.reportMetrics.aggregateStats,
                        metricPeriod: this.displayPeriod,
                        userPreferences: this.userPreferences,
                        daysInMonth: a,
                        chartType: e,
                        chartFormat: this.chartFormat,
                        currentDateOffset: this.currentDateOffset,
                        startDateStr: this.startDate,
                        untilDateStr: this.untilDate,
                        el: this.$("." + this.chartPlaceholder)
                    }),
                    this.trigger(ne.ON_TAB_CHANGED, !0)
                },
                onModelSyncFail: function() {
                    this.trigger(ne.MODEL_SYNC_FAIL)
                },
                initializeEmptyChartView: function(t, e) {
                    this.reportChartView = new k.a({
                        el: this.$("." + this.chartPlaceholder),
                        hidden: !o.a.isUndefined(t) && t,
                        isWidget: !o.a.isUndefined(e) && e
                    }),
                    this.trigger(ne.TOGGLE_EXPORT_AND_PRINT_BUTTONS, !1)
                },
                initializeTrainingEffectEmptyChartView: function(t) {
                    this.reportChartView && "function" === typeof this.reportChartView.destroy && this.reportChartView.destroy(),
                    this.reportChartView = new P.a({
                        el: this.$("." + this.chartPlaceholder),
                        isWidget: t,
                        isRespirationRateEnabled: this.isRespirationRateEnabled
                    }),
                    this.listenTo(this.reportChartView, P.a.Events.LEARN_MORE_CLICKED, this.onTEHelpClicked)
                },
                initializeChartView: function(t, e, a, i) {
                    this.reportChartView = new t({
                        report: this.report.toJSON(),
                        reportType: this.reportType,
                        activeTab: this.activeTab,
                        metricList: this.reportMetrics,
                        metricPeriod: this.displayPeriod,
                        userPreferences: this.userPreferences,
                        daysInMonth: a,
                        chartType: e,
                        chartFormat: this.chartFormat,
                        isChartOnWidget: "widget" === this.chartFormat,
                        currentDateOffset: this.currentDateOffset,
                        startDateStr: this.startDate,
                        untilDateStr: this.untilDate,
                        el: this.$("." + this.chartPlaceholder)
                    }),
                    this.trigger(ne.ON_TAB_CHANGED, !o.a.isBoolean(i) || i)
                },
                initializeScatterChartView: function() {
                    this.$(".reportComparisonPlaceholder").show();
                    var t = 0;
                    switch (this.report.get("metricName")) {
                    case Pt.a.ACTIVITY_AVERAGE_PACE:
                        var e = (s = (h = this.reportMetrics.at(0)).get("metricsMap"))[Pt.a.ACTIVITY_TOTAL_DURATION]
                          , a = s[Pt.a.ACTIVITY_TOTAL_DISTANCE]
                          , i = a.map(function(t) {
                            return t.value
                        }).reduce(function(t, e) {
                            return t + e
                        })
                          , r = e.map(function(t) {
                            return t.value
                        }).reduce(function(t, e) {
                            return t + e
                        });
                        s[Pt.a.ACTIVITY_AVERAGE_PACE].map(function(t, i) {
                            t.value = a[i].value ? d.a.convertMsToSeconds(e[i].value) / d.a.convertCmToM(a[i].value) : 0,
                            t.month = e[i].month
                        }),
                        t = d.a.convertMsToSeconds(r) / d.a.convertCmToM(i);
                        break;
                    case Pt.a.ACTIVITY_AVERAGE_SPEED:
                    case Pt.a.ACTIVITY_AVERAGE_SWIM_PACE:
                        this.reportMetrics.each(function(e) {
                            var a = e.get("metricsMap")
                              , i = 0;
                            a[this.report.get("metricName")].forEach(function(e) {
                                e.value && (t += e.value,
                                i++)
                            }),
                            t /= i
                        }, this);
                        break;
                    default:
                        var s, n = (s = (h = this.reportMetrics.at(0)).get("metricsMap"))[this.report.get("metricName")], o = 0, l = 0;
                        if (n)
                            for (var c = 0; c < n.length; c++) {
                                var h;
                                (h = n[c]).value && h.value > 0 && (o += h.value,
                                l++)
                            }
                        t = Math.round(o / l * 1e3) / 1e3
                    }
                    this.reportChartView = new F.a({
                        report: this.report.toJSON(),
                        reportType: this.reportType,
                        activeTab: this.activeTab,
                        metricList: this.reportMetrics,
                        metricPeriod: this.displayPeriod,
                        userPreferences: this.userPreferences,
                        chartFormat: this.chartFormat,
                        chartType: "scatter",
                        metricColorRanges: this.metricColorRanges,
                        metricAvg: t,
                        currentDateOffset: this.currentDateOffset,
                        el: this.$("." + this.chartPlaceholder),
                        startDateStr: this.startDate,
                        untilDateStr: this.untilDate
                    }),
                    this.trigger(ne.ON_TAB_CHANGED, !0)
                },
                processPowerCurveReport: function() {
                    this.$(".watts-trend").removeClass("active"),
                    this.$(".watts-kg-trend").removeClass("active"),
                    this.$("." + this.wattsToggle).addClass("active"),
                    this.$(".report-message").hide(),
                    this.reportChartView = new rt.a({
                        report: this.report.toJSON(),
                        metricList: this.reportMetrics,
                        lifeTimePowerCurveTotals: this.lifeTimePowerCurveTotals,
                        chartType: "areaspline",
                        chartFormat: this.chartFormat,
                        wattsToggle: this.wattsToggle,
                        metricPeriod: this.metricPeriod,
                        userPreferences: this.userPreferences,
                        viewerUserBiometrics: Ct.a.toJSON(),
                        startDate: this.startDate,
                        el: this.$("." + this.chartPlaceholder)
                    }),
                    this.reportChartView.once(rt.a.Events.DisplayMessage, function(t) {
                        this.$(".report-message").html(t.msg),
                        t.emptyState ? this.$(".report-message").addClass("top-xl").addClass("center-report-message") : this.$(".report-message").removeClass("top-xl").removeClass("center-report-message"),
                        this.$(".report-message").show()
                    }
                    .bind(this)),
                    this.reportChartView.once(rt.a.Events.HideFilter, function(t) {
                        t && this.$(".watts-filter").hide()
                    }
                    .bind(this)),
                    this.reportChartView.once(rt.a.Events.DisplayEmptyChart, function(t) {
                        this.$("." + this.chartPlaceholder).empty(),
                        t && (this.initializeEmptyChartView(),
                        this.reportChartView.render())
                    }
                    .bind(this)),
                    this.reportChartView.on(rt.a.Events.POWER_TOGGLE, function() {
                        this.processPowerCurveActivityListView()
                    }
                    .bind(this)),
                    this.processPowerCurveActivityListView()
                },
                processPowerCurveActivityListView: function() {
                    var t = this;
                    this.powerCurveActivityListView ? (this.powerCurveActivityListView.setDisplayWattsKg("watts-kg-trend" === this.wattsToggle),
                    this.powerCurveActivityListView.setPowerCurveData(this.lifeTimePowerCurveTotals.toJSON()),
                    this.powerCurveActivityListView.render()) : (this.powerCurveActivityListView = new nt.a({
                        powerCurveData: this.lifeTimePowerCurveTotals.toJSON(),
                        displayWattsKg: "watts-kg-trend" === this.wattsToggle,
                        viewerUserBiometrics: Ct.a.toJSON()
                    }),
                    this.listenTo(this.powerCurveActivityListView, nt.a.Events.ACTIVITY_REMOVED, function() {
                        t.powerCurveActivityListView = null,
                        t.render(),
                        t.showAnchorBanner({
                            titleKey: "recalculate_power_curve_title",
                            contentKey: "recalculate_power_curve_description"
                        }, 5e3)
                    }),
                    this.listenTo(this.powerCurveActivityListView, nt.a.Events.WAIT_STATE, function(e) {
                        t.showWaitState(e)
                    }),
                    this.powerCurveActivityListView.render()),
                    this.$("#reportList").append(this.powerCurveActivityListView.$el),
                    this.$("#reportList").show()
                },
                processFTPMaxChartView: function() {
                    if (this.ftpMaxToggle = this.ftpMaxToggle || "ftp-watts",
                    "current" === this.activeTab)
                        "page" === this.chartFormat ? this.$(".chart-widget").addClass("chart-gauge-ftp") : this.$(".chart-widget").addClass("chart-gauge-vo2"),
                        this.$(".reports-pagination").hide(),
                        this.$(".ftp-watts-trend").removeClass("ftp-watts-trend").addClass("ftp-watts"),
                        this.$(".ftp-watts-kg-trend").removeClass("ftp-watts-kg-trend").addClass("ftp-watts-kg"),
                        this.$(".ftp-filter").show(),
                        this.$(".ftp-watts").removeClass("active"),
                        this.$(".ftp-watts-kg").removeClass("active"),
                        this.$("." + this.ftpMaxToggle).addClass("active"),
                        this.reportChartView = new A.a({
                            report: this.report.toJSON(),
                            reportType: this.reportType,
                            chartFormat: this.chartFormat,
                            ftpMaxToggle: this.ftpMaxToggle,
                            el: this.$("." + this.chartPlaceholder)
                        }),
                        this.reportChartView.once(A.a.Events.NO_DATA_AVAILABLE, function() {
                            this.initializeEmptyChartView(),
                            this.$(".ftp-filter").hide(),
                            this.$(".chart-widget").removeClass("chart-gauge-vo2"),
                            this.reportChartView.render()
                        }, this),
                        this.ftpLegendView = new y.a({
                            chartFormat: this.chartFormat,
                            el: this.$(".js-report-chart-compare")
                        }),
                        this.ftpLegendView.render(),
                        this.trigger(ne.ON_TAB_CHANGED, !0);
                    else {
                        this.$(".chart-widget").removeClass("chart-gauge-vo2"),
                        this.$(".reports-pagination").show(),
                        this.$(".additionalPlaceHolder").children().length > 0 && (this.$(".additionalPlaceHolder").children().remove(),
                        this.$("." + this.chartPlaceholder).parent().find(".reportChartPlaceholder").show());
                        var t = this.reportMetrics;
                        Vt.a.determineNonZeroMetricsFound(t, Pt.a[this.report.get("metricName")]) ? (this.$(".ftp-watts").removeClass("ftp-watts").addClass("ftp-watts-trend"),
                        this.$(".ftp-watts-kg").removeClass("ftp-watts-kg").addClass("ftp-watts-kg-trend"),
                        this.$(".ftp-filter").show(),
                        this.$(".ftp-watts-trend").removeClass("active"),
                        this.$(".ftp-watts-kg-trend").removeClass("active"),
                        this.$("." + this.ftpMaxToggle + "-trend").addClass("active"),
                        this.reportChartView = new b.a({
                            report: this.report.toJSON(),
                            reportType: this.reportType,
                            activeTab: this.activeTab,
                            metricList: t,
                            metricPeriod: this.displayPeriod,
                            userPreferences: this.userPreferences,
                            daysInMonth: -27,
                            chartType: "line",
                            chartFormat: this.chartFormat,
                            currentDateOffset: this.currentDateOffset,
                            ftpMaxToggle: this.ftpMaxToggle,
                            startDateStr: this.startDate,
                            untilDateStr: this.untilDate,
                            el: this.$("." + this.chartPlaceholder)
                        }),
                        this.trigger(ne.ON_TAB_CHANGED, !0)) : (this.$(".ftp-filter").hide(),
                        this.initializeEmptyChartView())
                    }
                },
                initializeVo2MaxChartView: function() {
                    this.reportChartView = new Z.a({
                        el: this.$("." + this.chartPlaceholder),
                        chartFormat: this.chartFormat,
                        report: this.report.toJSON(),
                        reportType: this.reportType,
                        vo2MaxMetrics: this.vo2MaxMetrics,
                        gender: this.gender,
                        ageRange: this.ageRange,
                        vo2MaxCategories: this.vo2MaxCategories,
                        vo2MaxToggle: this.vo2MaxToggle
                    }),
                    this.trigger(ne.ON_TAB_CHANGED, !0)
                },
                initializeVo2MaxDynamicTextView: function() {
                    this.vo2MaxDynamicTextView = new Q.a({
                        el: this.$(".js-report-chart-compare"),
                        chartFormat: this.chartFormat,
                        reportType: this.reportType,
                        vo2MaxMetrics: this.vo2MaxMetrics,
                        gender: this.gender,
                        ageRange: this.ageRange,
                        vo2MaxToggle: this.vo2MaxToggle
                    }),
                    this.vo2MaxDynamicTextView.render()
                },
                initializeSummariesView: function(t) {
                    var e = this.$(".report-summaries")
                      , a = [];
                    if (this.report.get("metricName") === Pt.a.SLEEP_SLEEP_SCORE) {
                        var i = t.map(function(t) {
                            return t.get("value")
                        })
                          , s = Math.max.apply(Math, Object(r.a)(i))
                          , n = Math.min.apply(Math, Object(r.a)(i));
                        if (a.push({
                            value: s,
                            label: h.a.localize("highest_avg_score")
                        }),
                        a.push({
                            value: n,
                            label: h.a.localize("lowest_avg_score")
                        }),
                        ["last_seven_days", "last_four_weeks"].includes(this.activeTab)) {
                            var o = Math.round(i.reduce(function(t, e) {
                                return t + e
                            }, 0) / i.length);
                            a.push({
                                value: o,
                                label: h.a.localize("avg_score")
                            })
                        }
                    }
                    e.empty(),
                    a.forEach(function(t) {
                        e.append('\n                <div class="stat-block">\n                    <div class="data-block large">\n                        <div class="data-bit">'.concat(t.value, '</div>\n                        <span class="data-label">').concat(t.label, "</span>\n                    </div>\n                </div>\n            "))
                    })
                },
                onCurrentClicked: function() {
                    this.pageOffset = 0,
                    this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS || this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS_CYCLING ? this.activeTab = "last_four_weeks" : this.activeTab = "current",
                    this.processCurrentTab(),
                    this.updateUrl(),
                    this.trigger(ne.ON_TAB_CHANGED)
                },
                onSevenDaysClicked: function() {
                    this.pageOffset = 0,
                    this.activeTab = "last_seven_days",
                    this.processSevenDayTab(),
                    this.updateUrl(),
                    this.trigger(ne.ON_TAB_CHANGED)
                },
                onFourWeeksClicked: function() {
                    this.pageOffset = 0,
                    this.activeTab = "last_four_weeks",
                    this.processFourWeekTab(),
                    this.updateUrl(),
                    this.trigger(ne.ON_TAB_CHANGED)
                },
                onThreeMonthsClicked: function() {
                    this.pageOffset = 0,
                    this.activeTab = "last_three_months",
                    this.processThreeMonthTab(),
                    this.updateUrl(),
                    this.trigger(ne.ON_TAB_CHANGED)
                },
                onSixMonthsClicked: function() {
                    this.pageOffset = 0,
                    this.activeTab = "last_six_months",
                    this.processSixMonthTab(),
                    this.updateUrl(),
                    this.trigger(ne.ON_TAB_CHANGED)
                },
                onTwelveMonthsClicked: function() {
                    this.pageOffset = 0,
                    this.activeTab = "last_year",
                    this.processTwelveMonthTab(),
                    this.updateUrl(),
                    this.trigger(ne.ON_TAB_CHANGED)
                },
                onTodayButtonClicked: function(t) {
                    t.preventDefault(),
                    (this.report && this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS || this.report && this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS_CYCLING) && this.buildPrevRecordedDevices(),
                    this.pageOffset = 0,
                    this.isMenstrualCycleTab() ? this.setInitialNextOrPrevMonthForInactiveUsers(!0) : this.report.get("metricName") === Pt.a.PREGNANCY_TRACKING_REPORTS && (this.untilDate = null,
                    this.startDate = null,
                    this.showPregnancyEmptyState = !1),
                    this.tabNavigation()
                },
                onPreviousClicked: function(t) {
                    t.preventDefault(),
                    (this.report && this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS || this.report && this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS_CYCLING) && this.buildPrevRecordedDevices(),
                    this.isMenstrualCycleTab() ? (this.cycleType = this.getCycleType("PREVIOUS"),
                    this.setNextOrPrevCycleReportDate(!0)) : this.report.get("metricName") === Pt.a.PREGNANCY_TRACKING_REPORTS && (this.reportMetrics.at(0).has("prevCycleInfo") && this.reportMetrics.at(0).get("prevCycleInfo").cycleType === s.e ? (this.showPregnancyEmptyState = !1,
                    this.startDate = this.reportMetrics.at(0).get("prevCycleInfo").startDate,
                    this.untilDate = Kt()(this.startDate, Ut.a.LINK_FORMAT).add(27, "days").format(Ut.a.LINK_FORMAT)) : this.showPregnancyEmptyState = !0),
                    this.pageOffset++,
                    this.tabNavigation(),
                    this.pushPreviousClickedAnalyticsEvents()
                },
                onPausePlanClicked: function() {
                    new at.a({
                        modalTitle: h.a.localize("training_plan_paused_header"),
                        message: h.a.localize("garmin_coach_paused_navigation_message"),
                        confirmationTextKey: "button_ok",
                        showCancelButton: !1,
                        onSaveButtonClicked: function() {
                            return !0
                        }
                    }).render()
                },
                pushPreviousClickedAnalyticsEvents: function() {
                    Ht.a.push({
                        event: "track_event",
                        category: "Reports Page Events",
                        action: "Navigate To Previous Date"
                    })
                },
                onNextClicked: function(t) {
                    t.preventDefault(),
                    this.report && this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS || this.report && this.report.get("metricName") === Pt.a.ACTIVITY_TRAINING_STATUS_CYCLING ? this.buildPrevRecordedDevices() : this.isMenstrualCycleTab() ? (this.getNextMenstrualCycleReports = !0,
                    this.cycleType = this.getCycleType("NEXT"),
                    this.setNextOrPrevCycleReportDate(!1)) : this.report.get("metricName") === Pt.a.PREGNANCY_TRACKING_REPORTS && (this.reportMetrics.at(0).has("nextCycleInfo") && this.reportMetrics.at(0).get("nextCycleInfo").cycleType === s.e ? (this.showPregnancyEmptyState = !1,
                    this.startDate = this.reportMetrics.at(0).get("nextCycleInfo").startDate,
                    this.untilDate = Kt()(this.startDate, Ut.a.LINK_FORMAT).add(27, "days").format(Ut.a.LINK_FORMAT)) : this.showPregnancyEmptyState = !0),
                    this.pageOffset--,
                    this.tabNavigation()
                },
                onFtpTrendClicked: function(e) {
                    e.preventDefault();
                    var a = t(e.target)
                      , i = a.hasClass("ftp-watts-trend") ? "ftp-watts" : "ftp-watts-kg";
                    this.ftpMaxToggle !== i && (this.ftpMaxToggle = i,
                    this.reportChartView.toggle(this.ftpMaxToggle),
                    this.trigger(ne.ON_FTP_MAX_TOGGLE, this.ftpMaxToggle),
                    this.$(".ftp-watts-trend").removeClass("active"),
                    this.$(".ftp-watts-kg-trend").removeClass("active"),
                    a.addClass("active"))
                },
                onTEHelpClicked: function() {
                    var t = new Bt.a;
                    this.registeredDevices = new yt.a({
                        displayName: this.userPreferences.get("displayName")
                    }),
                    t.addModel({
                        model: this.registeredDevices,
                        required: !0
                    }),
                    this.listenTo(t, Bt.a.Events.SYNCHRONIZED, this.renderTrainingEffectInfoModal),
                    this.listenTo(t, Bt.a.Events.SYNCHRONIZE_FAILED, this.onModelSyncFail),
                    t.fetchModels()
                },
                renderTrainingEffectInfoModal: function() {
                    if (this.isRespirationRateEnabled) {
                        new lt.a({
                            aerobicScore: this.isDeviceCapable("aerobicTrainingEffectCapable"),
                            anaerobicScore: this.isDeviceCapable("anaerobicTrainingEffectCapable"),
                            primaryBenefit: this.isDeviceCapable("trainingEffectLabelCapable"),
                            isWidget: !0
                        }).render()
                    } else {
                        var t = new ot.a({
                            aerobicTrainingEffect: this.showAerobicTE ? 0 : null,
                            anaerobicTrainingEffect: this.showAnaerobicTE ? 0 : null,
                            isWidget: !0
                        });
                        this.trainingEffectModal = new et.a({
                            view: t,
                            showFooter: !1,
                            customClasses: "modal-training-effect",
                            modalTitle: h.a.localize("label.trainingEffect")
                        }),
                        this.trainingEffectModal.render()
                    }
                },
                onTSHelpClicked: function() {
                    this.renderTrainingStatusInfoModal()
                },
                onTrainingStatusPauseClicked: function(t) {
                    var e = this;
                    t.preventDefault(),
                    new at.a({
                        modalTitle: h.a.localize("training_status_pause_modal_header"),
                        message: h.a.localize("training_status_pause_modal_message"),
                        confirmationTextKey: "button_pause",
                        cancelTextKey: "button_cancel",
                        onSaveButtonClicked: function() {
                            return e.updateUserSettings(Kt()().format("YYYY-MM-DD")),
                            !0
                        }
                    }).render()
                },
                onTrainingStatusResumeClicked: function(t) {
                    t.preventDefault(),
                    this.updateUserSettings(null),
                    new at.a({
                        modalTitle: h.a.localize("training_status_resume_modal_header"),
                        message: h.a.localize("training_status_resume_modal_message"),
                        confirmationTextKey: "button_ok",
                        showCancelButton: !1,
                        onSaveButtonClicked: function() {
                            return !0
                        }
                    }).render()
                },
                onTrainingStatusPauseHelpClicked: function() {
                    this.renderTrainingStatusInfoModal()
                },
                updateUserSettings: function(t) {
                    this.trigger(ne.ON_UPDATE_TRAINING_STATUS_PAUSED_DATE, t)
                },
                onTSDeviceChange: function(t) {
                    this.reportChartView && "function" === typeof this.reportChartView.onDeviceChanged && this.reportChartView.onDeviceChanged(t),
                    this.togglePauseGearMenu(t)
                },
                togglePauseGearMenu: function(t) {
                    this.isSelectedDevicePauseCapable(t) ? this.$(".training-status-dropdown").show() : this.$(".training-status-dropdown").hide()
                },
                isSelectedDevicePauseCapable: function(t) {
                    var e = this.registeredDevices.models.find(function(e) {
                        return e.get("deviceId") === +t
                    });
                    return e && e.get("trainingStatusPauseCapable") || !1
                },
                displayFTPWeight: function(t, e, a) {
                    var i = new E.a({
                        prompt: h.a.localize("ftp.weight.modal.prompt"),
                        weightDate: t
                    })
                      , r = new et.a({
                        modalTitle: h.a.localize("ftp.modal.title"),
                        view: i,
                        showFooter: !0,
                        showCancelButton: !1
                    });
                    i.once(E.a.Events.WEIGHT_SUCCESS, function() {
                        e.addClass("active"),
                        a.removeClass("active"),
                        this.ftpMaxToggle = "ftp-watts-kg",
                        this.trigger(ne.ON_FTP_MAX_TOGGLE, this.ftpMaxToggle),
                        r.close(),
                        this.trigger(ne.ON_TAB_CHANGED, !1),
                        this.retrieveChartMetrics(),
                        this.resetReportUrl()
                    }, this),
                    i.once(E.a.Events.WEIGHT_LOADED, function() {
                        r.render()
                    }, this),
                    i.render()
                },
                onWattsClicked: function(e) {
                    e.preventDefault();
                    var a = t(e.target)
                      , i = a.hasClass("watts-trend") ? "watts-trend" : "watts-kg-trend";
                    if (this.wattsToggle !== i) {
                        this.wattsToggle = i;
                        var r = this.reportChartView.showWeightPrompt(this.wattsToggle);
                        r.displayWeightPrompt ? (this.wattsToggle = "watts-trend",
                        "widget" === this.chartFormat || this.displayWeightPrompt(r.weightDate, a, this.$(".watts"))) : (this.$(".watts-trend").removeClass("active"),
                        this.$(".watts-kg-trend").removeClass("active"),
                        a.addClass("active")),
                        o.a.isFunction(this.reportChartView.toggle) && this.reportChartView.toggle(this.wattsToggle)
                    }
                },
                displayWeightPrompt: function(t, e, a) {
                    var i = new E.a({
                        prompt: h.a.localize("ftp.weight.modal.prompt"),
                        weightDate: t
                    })
                      , r = new et.a({
                        modalTitle: h.a.localize("ftp.modal.title"),
                        view: i,
                        showFooter: !0,
                        showCancelButton: !1
                    });
                    i.once(E.a.Events.WEIGHT_SUCCESS, function(t) {
                        Ct.a.get("biometricProfile").weight = d.a.convertWeightToGrams(parseFloat(t)),
                        e.addClass("active"),
                        a.removeClass("active"),
                        this.wattsToggle = "watts-kg-trend",
                        this.trigger(ne.ON_FTP_MAX_TOGGLE, this.wattsToggle),
                        r.close(),
                        this.trigger(ne.ON_TAB_CHANGED, !1),
                        this.retrieveChartMetrics(),
                        this.resetReportUrl()
                    }, this),
                    i.once(E.a.Events.WEIGHT_LOADED, function() {
                        r.render()
                    }, this),
                    i.render()
                },
                onFtpMaxFilterClicked: function(e) {
                    e.preventDefault();
                    var a = t(e.target)
                      , i = a.hasClass("ftp-watts") ? "ftp-watts" : "ftp-watts-kg";
                    if (this.ftpMaxToggle !== i) {
                        this.ftpMaxToggle = i;
                        var r = this.reportChartView.displayWeightPrompt(this.ftpMaxToggle);
                        if (r.displayWeightPrompt)
                            if (this.ftpMaxToggle = "ftp-watts",
                            this.$(".ftp-watts").addClass("active"),
                            this.$(".ftp-watts-kg").removeClass("active"),
                            "widget" === this.chartFormat) {
                                var s = this;
                                this.trigger(ne.DISPLAY_FTP_WEIGHT, {
                                    weightDate: r.weightDate,
                                    successHandler: function() {
                                        a.addClass("active"),
                                        s.ftpMaxToggle = "ftp-watts-kg",
                                        s.trigger(ne.ON_FTP_MAX_TOGGLE, s.ftpMaxToggle),
                                        s.retrieveChartMetrics(),
                                        s.resetReportUrl(),
                                        s.trigger(ne.FTP_WEIGHT_ENTERED)
                                    }
                                })
                            } else
                                this.displayFTPWeight(r.weightDate, a, this.$(".ftp-watts"));
                        else
                            this.$(".ftp-watts").removeClass("active"),
                            this.$(".ftp-watts-kg").removeClass("active"),
                            a.addClass("active"),
                            this.processCurrentTab(),
                            this.trigger(ne.ON_TAB_CHANGED, !1),
                            this.trigger(ne.ON_FTP_MAX_TOGGLE, this.ftpMaxToggle)
                    }
                },
                onVo2MaxFilterClicked: function(t) {
                    t.preventDefault(),
                    this.pageOffset = 0,
                    this.activeTab = "current",
                    this.vo2MaxToggle = this.$(".vo2-sport-filter-running").hasClass("active") ? "cycling" : "running",
                    this.processCurrentTab(),
                    this.trigger(ne.ON_TAB_CHANGED, !1)
                },
                onVo2MaxHelpModal: function() {
                    var t = new J.a({
                        chartFormat: this.chartFormat,
                        reportType: this.reportType,
                        vo2MaxMetrics: this.vo2MaxMetrics,
                        gender: this.gender,
                        ageRange: this.ageRange,
                        vo2MaxToggle: this.vo2MaxToggle
                    });
                    new et.a({
                        modalTitle: this.getVo2MaxHelpModalTitle(),
                        view: t,
                        customBodyClasses: "modal-tall",
                        showFooter: !1,
                        showCancelButton: !1
                    }).render()
                },
                getVo2MaxHelpModalTitle: function() {
                    return "cycling" === this.reportType || "all" === this.reportType && "cycling" === this.vo2MaxToggle ? h.a.localize("vo2_max_cycling_title") : h.a.localize("ACTIVITY_VO2_MAX")
                },
                onShowMoreClicked: function() {
                    this.activityList.fetchMore()
                },
                onActivitiesFectched: function() {
                    this.activityListView.drawAdditionalRows(this.activityList)
                },
                onNoMoreActivities: function() {
                    this.activityListView.hideShowMore()
                },
                tabNavigation: function() {
                    switch (this.tabSelection) {
                    case "seven-day":
                        this.processSevenDayTab();
                        break;
                    case "four-week":
                        this.processFourWeekTab();
                        break;
                    case "three-month":
                        this.processThreeMonthTab();
                        break;
                    case "six-month":
                        this.processSixMonthTab();
                        break;
                    case "twelve-month":
                        this.processTwelveMonthTab()
                    }
                },
                getExportData: function() {
                    return this.reportChartView.getExportData()
                },
                getActiveTab: function() {
                    return this.activeTab
                },
                updateUrl: function() {
                    if ("page" === this.chartFormat) {
                        var t = "/report/" + this.report.get("metricId") + "/" + this.reportType + "/" + this.activeTab;
                        c.a.history.navigate(t, {
                            trigger: !1
                        })
                    }
                },
                renderHRVInfoModal: function() {
                    var t = h.a.localize("ACTIVITY_HRV_STRESS_TEST")
                      , e = new w.a;
                    new et.a({
                        modalTitle: t,
                        view: e,
                        showFooter: !1,
                        showCancelButton: !1
                    }).render()
                },
                renderPulseOxInfoModal: function() {
                    var t = this.registeredDevices ? this.registeredDevices.models.map(function(t) {
                        return t.attributes
                    }) : []
                      , e = new M.a({
                        registeredDeviceList: t
                    });
                    new et.a({
                        modalTitle: h.a.localize("help.title"),
                        view: e,
                        showFooter: !1,
                        showCancelButton: !1
                    }).render()
                },
                renderTrainingStatusInfoModal: function() {
                    this.fetchVO2MaxRanges()
                },
                onVO2MaxRangesFetched: function() {
                    var t = this.userSettings.getGender() || "MALE"
                      , e = d.a.calculateAge(this.userSettings.getBirthDate());
                    new ct.a({
                        hasAcclimationCapableDevice: this.hasAcclimationCapableDevice,
                        hasLoadBalanceCapableDevice: this.hasLoadBalanceCapableDevice,
                        vo2MaxRanges: this.vo2MaxRanges,
                        gender: t,
                        ageRange: e ? Gt.a.getAgeRange(e) : "40-49",
                        isFeatureEnabled: this.isRespirationRateEnabled
                    }).render()
                },
                fetchVO2MaxRanges: function() {
                    var t = new Bt.a;
                    this.vo2MaxRanges || (this.vo2MaxRanges = new Ot.a),
                    t.addModel({
                        model: this.vo2MaxRanges,
                        required: !0
                    }),
                    this.listenTo(t, Bt.a.Events.SYNCHRONIZED, this.onVO2MaxRangesFetched),
                    this.listenTo(t, Bt.a.Events.SYNCHRONIZE_FAILED, this.onModelSyncFail),
                    t.fetchModels()
                },
                isDeviceCapable: function(t) {
                    return this.registeredDevices.findWhere(Object(i.a)({}, t, !0))
                },
                showAnchorBanner: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    (new Jt.a).renderComponent(Zt.a, this.$("#banner-placeholder")[0], {
                        titleKey: t.titleKey,
                        contentKey: t.contentKey,
                        nameSpace: "reportswidget",
                        autoCloseTimeout: e
                    })
                },
                showWaitState: function(t) {
                    t ? this.$(".spinner-container").show() : this.$(".spinner-container").hide()
                },
                loadPowerCurveLifetimeTotals: function() {
                    var t = new Bt.a
                      , e = this
                      , a = jt.a.toISODateString(new Kt.a(this.untilDate).add(1, "d").toDate());
                    this.lifeTimePowerCurveTotals || (this.lifeTimePowerCurveTotals = new Mt.a({
                        dataType: "powerCurve",
                        startDate: null,
                        endDate: null
                    }),
                    t.addModel({
                        model: this.lifeTimePowerCurveTotals,
                        required: !0
                    }));
                    var i = new Mt.a({
                        dataType: "powerCurve",
                        startDate: this.startDate,
                        endDate: a
                    });
                    t.addModel({
                        model: i,
                        required: !0
                    }),
                    t.bind(Bt.a.Events.SYNCHRONIZED, function() {
                        e.onReportMetricsReadyToRender(i)
                    }, this),
                    t.fetchModels()
                },
                initPregnancyTrackingReports: function() {
                    var t = this;
                    this.reportAveragesFetched = !0,
                    this.showWaitState(!0);
                    var e = this.startDate
                      , a = this.untilDate
                      , i = this.pregnancysnapshots.toJSON()
                      , r = Object(qt.n)(i, this.startDate, this.untilDate);
                    if (r) {
                        var s = !0
                          , n = Yt.default.getQueryParameterByName("report");
                        if (Kt()().format(Ut.a.LINK_FORMAT) === this.untilDate || !0 === this.showPregnancyEmptyState || null !== n) {
                            this.showPregnancyEmptyState = !1;
                            var o = Object(qt.t)(this.untilDate, r.pregnancyCycleStart)
                              , l = o.numberOfWeek + (o.numberOfWeek % 4 === 0 ? 0 : 4)
                              , c = l - l % 4
                              , h = c - 3;
                            this.startDate = Kt()(r.pregnancyCycleStart, Ut.a.LINK_FORMAT).add(h - 1, "weeks").format(Ut.a.LINK_FORMAT),
                            this.untilDate = Kt()(r.pregnancyCycleStart, Ut.a.LINK_FORMAT).add(c - 1, "weeks").add(6, "days").format(Ut.a.LINK_FORMAT);
                            var d = r.dueDate;
                            r.endDate ? d = r.endDate : r.deliveryDate && (d = r.deliveryDate),
                            Kt()(d).isSameOrBefore(Kt()(this.untilDate)) ? (e = this.startDate,
                            a = d) : (e = this.startDate,
                            a = this.untilDate),
                            Kt()(a).isSameOrBefore(Kt()(e)) && (s = !1)
                        }
                        if (s) {
                            var u = new Bt.a
                              , p = new te.a({
                                fromdate: e,
                                todate: a
                            });
                            u.addModel({
                                model: p,
                                required: !0
                            }),
                            u.bind(Bt.a.Events.SYNCHRONIZED, function() {
                                if (p.at(0).has("dailyLogs"))
                                    if (p.at(0).set("snapshots", i),
                                    p.at(0).get("dailyLogs").find(function(t) {
                                        return !0 === t.hasGlucoseLog
                                    })) {
                                        var r = new ee.a({
                                            fromdate: e,
                                            todate: a
                                        });
                                        (u = new Bt.a).addModel({
                                            model: r,
                                            required: !0
                                        }),
                                        u.bind(Bt.a.Events.SYNCHRONIZED, function() {
                                            p.at(0).set("glucoseList", r.at(0).get("glucoseList")),
                                            t.showWaitState(!1),
                                            t.onReportMetricsReadyToRender(p)
                                        }, t),
                                        u.fetchModels()
                                    } else
                                        t.showWaitState(!1),
                                        t.onReportMetricsReadyToRender(p);
                                else
                                    t.showWaitState(!1),
                                    t.showEmptyPregnancyState()
                            }, this),
                            u.fetchModels()
                        } else
                            this.showWaitState(!1),
                            this.showEmptyPregnancyState()
                    } else
                        this.showWaitState(!1),
                        this.showEmptyPregnancyState()
                },
                showEmptyPregnancyState: function() {
                    this.showPregnancyEmptyState = !0;
                    var t = new c.a.Collection(new c.a.Model);
                    this.onReportMetricsReadyToRender(t)
                },
                isPregnancyReport: function() {
                    return this.report.get("metricName") === Pt.a.PREGNANCY_TRACKING_REPORTS
                }
            });
            oe.Events = ne,
            e.a = oe
        }
        ).call(this, a(10))
    },
    2068: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(23)
          , l = n.a.Collection.extend({
            model: n.a.Model,
            initialize: function(t) {
                r.a.isUndefined(t) || r.a.isUndefined(t.dates) ? this.searchDatesArray = [] : r.a.isArray(t.dates) ? this.searchDatesArray = t.dates : this.searchDatesArray = [t.dates]
            },
            url: function() {
                if (0 == this.searchDatesArray.length)
                    throw new Error("Dates must be given.");
                return "/proxy/biometric-service/biometric/weightByDate?" + this.buildParameterList()
            },
            setSearchDates: function(t) {
                this.searchDatesArray = t
            },
            addSearchDate: function(t) {
                this.searchDatesArray.push(t)
            },
            buildParameterList: function() {
                for (var t = "", e = 0; e < this.searchDatesArray.length; e++) {
                    var a = this.searchDatesArray[e];
                    r.a.isDate(a) && (a = o.a.formatISODate(a)),
                    t += "date=" + a,
                    e + 1 < this.searchDatesArray.length && (t += "&")
                }
                return t
            }
        });
        e.a = l
    },
    2069: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(3185)
          , c = a.n(l)
          , h = n.a.View.extend({
            initialize: function(t) {
                this.template = r.a.template(c.a),
                this.hidden = t.hidden,
                this.isWidget = t.isWidget
            },
            render: function() {
                this.$el.html(this.template({
                    Localizer: o.a,
                    hidden: this.hidden,
                    isWidget: this.isWidget
                }))
            }
        });
        e.a = h
    },
    2070: function(t, e) {
        t.exports = '<div class="<%- maxView ? \'\' : \'text-center\' %>">\n    <div class="alert alert-error" style="display: none;"><%- Localizer.localize(\'ftp.weight.error\') %></div>\n    <% if (title) {  %>\n        <h6 class="font-thin top-m"><%- title %></h6>\n        <% if (prompt) { %>\n            <p class="font-thin top-s"><%- prompt %></p>\n        <% }             %>\n    <% } else if (prompt) { %>\n        <div class="bottom-m"><%- prompt %></div>\n    <% }        %>\n    <form action="" class="form-horizontal">\n        <div class="row-fluid">\n            <div class="control-group">\n                <label class="control-label weight-label" for="user-weight"><%- Localizer.localize(\'ftp.weight\') %></label>\n                <div class="<%- maxView ? \'controls controls-row\' : \'\' %>">\n                    <span class="input-append">\n                        <input type="text" id="user-weight" placeholder="" class="input-mini" maxlength="<%- maxLength %>" autofocus>\n                        <span class="add-on"><%- weightLabel %></span>\n                    </span>\n                    <% if (displaySaveButton) { %>\n                        <button class="btn btn-form"><%- Localizer.localize(\'save\') %></button>\n                    <% } %>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n'
    },
    2071: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(104)
          , c = a(1541)
          , h = n.a.View.extend({
            initialize: function(t) {
                t = t || {},
                this.registeredDeviceList = t.registeredDeviceList,
                this.template = r.a.template("<div></div>")
            },
            render: function() {
                this.$el.html(this.template({
                    Localizer: o.a
                })),
                (new l.a).renderComponent(c.a, this.el, {
                    registeredDeviceList: this.registeredDeviceList
                })
            }
        });
        e.a = h
    },
    2072: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i).a.Model.extend({
            url: function() {
                return "/proxy/metrics-service/metrics/trainingstatus/" + this.metricPeriod + "/" + this.displayName + "?fromCalendarDate=" + this.startDate + "&toCalendarDate=" + this.endDate
            },
            initialize: function(t) {
                this.metricPeriod = t.metricPeriod,
                this.displayName = t.displayName,
                this.startDate = t.startDate,
                this.endDate = t.endDate
            },
            setDisplayName: function(t) {
                this.displayName = t
            },
            getRecordedDevices: function() {
                return this.has("recordedDevices") ? this.get("recordedDevices") : []
            },
            getReportDataForDevice: function(t) {
                var e = {};
                return t && (e = this.has("reportData") ? this.get("reportData")[t] : {}),
                e
            }
        });
        e.a = r
    },
    2073: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(7)
              , r = a.n(i)
              , s = a(9)
              , n = a.n(s)
              , o = a(6)
              , l = a(3217)
              , c = a.n(l)
              , h = {
                CHANGE: "CHANGE"
            }
              , d = n.a.View.extend({
                className: "control-group",
                template: r.a.template(c.a),
                events: {
                    "change #ts-device-filter": "onSelectionChanged"
                },
                initialize: function(t) {
                    return this.deviceList = t.deviceList,
                    this.selectedDevice = t.selectedDevice,
                    this
                },
                render: function() {
                    return this.$el.html(this.template({
                        Localizer: o.a,
                        deviceList: this.deviceList,
                        selectedDevice: this.selectedDevice
                    })),
                    this
                },
                onSelectionChanged: function(e) {
                    var a = t(e.currentTarget).find(":selected").attr("data-value");
                    this.trigger(h.CHANGE, a)
                }
            });
            d.Events = h,
            e.a = d
        }
        ).call(this, a(10))
    },
    2074: function(t, e, a) {
        "use strict";
        var i = {
            MALE: {
                "Under 20": [55.4, 51.1, 45.4, 41.7],
                "20-29": [55.4, 51.1, 45.4, 41.7],
                "30-39": [54, 48.3, 44, 40.5],
                "40-49": [52.5, 46.4, 42.4, 38.5],
                "50-59": [48.9, 43.4, 39.2, 35.6],
                "60-69": [45.7, 39.5, 35.5, 32.3],
                "70-79": [42.1, 36.7, 32.3, 29.4],
                "80+": [42.1, 36.7, 32.3, 29.4]
            },
            FEMALE: {
                "Under 20": [49.6, 43.9, 39.5, 36.1],
                "20-29": [49.6, 43.9, 39.5, 36.1],
                "30-39": [47.4, 42.4, 37.8, 34.4],
                "40-49": [45.3, 39.7, 36.3, 33],
                "50-59": [41.1, 36.7, 33, 30.1],
                "60-69": [37.8, 33, 30, 27.5],
                "70-79": [36.7, 30.9, 28.1, 25.9],
                "80+": [36.7, 30.9, 28.1, 25.9]
            }
        }
          , r = ["superior", "excellent", "good", "fair", "poor"]
          , s = ["95", "80", "60", "40", "0-40"]
          , n = {
            getScoreData: function(t, e, a) {
                return this.mapToScore(i[t][e], a)
            },
            mapToScore: function(t, e) {
                var a = t.length
                  , i = {
                    group: t
                };
                e >= t[0] && (i.scoreIndex = 0),
                e < t[a - 1] && (i.scoreIndex = a);
                for (var r = 0; r < a; r++)
                    e < t[r] && e >= t[r + 1] && (i.scoreIndex = r + 1);
                return i
            },
            getScoreNames: function() {
                return r
            },
            getScorePercentiles: function() {
                return s
            }
        };
        e.a = n
    },
    2075: function(t, e, a) {
        "use strict";
        a(7);
        var i, r = a(15), s = a.n(r), n = a(6), o = a(13), l = a(1295), c = a(1717), h = (a(23),
        a(1227)), d = a(1233), u = a.n(d), p = a(1256), g = a.n(p), m = a(1420), f = a.n(m);
        g()(u.a),
        f()(u.a),
        (i = u.a).wrap(i.Legend.prototype, "colorizeItem", function(t, e, a) {
            e.options.legendColor && (e.color = e.options.legendColor),
            t.apply(this, Array.prototype.slice.call(arguments, 1))
        });
        var v = h.a.Colors.powerCurveGrey
          , T = {
            DisplayMessage: "DisplayMessage",
            HideFilter: "HideFilter",
            DisplayEmptyChart: "DisplayEmptyChart",
            POWER_TOGGLE: "POWER_TOGGLE"
        }
          , _ = l.a.extend({
            initialize: function(t) {
                l.a.prototype.initialize.call(this, t),
                this.wattsToggle = t.wattsToggle,
                this.viewerUserBiometrics = t.viewerUserBiometrics,
                this.lifeTimePowerCurveTotals = t.lifeTimePowerCurveTotals,
                this.powerCurveStartDate = s()(t.startDate),
                this.histroicalData = [],
                this.currentData = [],
                this.displayEmptyChartView = !1,
                this.displayEmptyData = !1
            },
            createExportDataRowHeader: function() {},
            determineYAxisTitle: function() {
                return ""
            },
            postRender: function() {
                this.displayEmptyChartView ? (this.chartObj && this.chartObj.destroy(),
                this.trigger(T.DisplayEmptyChart, this.displayEmptyData),
                this.displayEmptyData && this.trigger(T.DisplayMessage, {
                    msg: "",
                    emptyState: !1
                }),
                this.trigger(T.HideFilter, !0)) : this.$el.find(".highcharts-container").css("top", "-25px")
            },
            customizeOptions: function() {
                var t = this;
                this.options.xAxis = {
                    labels: {
                        useHTML: !0,
                        formatter: function() {
                            return '<span style="text-align: center; vertical-align: middle;"><span style="margin-right: auto; float: right; color: #6E8594; width: 100%;">\u25cf</span><br />' + this.value + "</span>"
                        },
                        y: 10
                    },
                    min: .5,
                    max: this.categories.length - 1.5,
                    tickLength: 0,
                    categories: this.categories,
                    crosshair: {
                        width: 1,
                        color: h.a.Colors.powerCurveCrosshairGrey,
                        zIndex: 0
                    },
                    tickInterval: 1,
                    minPadding: 0,
                    maxPadding: 0,
                    startOnTick: !1,
                    endOnTick: !1
                },
                this.options.yAxis = {
                    title: {
                        text: ""
                    },
                    labels: {
                        formatter: function() {
                            return t.convertToWattsPerKg(this.value) + " " + ("watts-kg-trend" == t.wattsToggle ? n.a.localize("label_power_kg") : n.a.localize("max_avg_power_unit"))
                        },
                        x: -5
                    }
                },
                this.options.tooltip = {
                    crosshairs: !0,
                    animation: !1,
                    shared: !0,
                    useHTML: !0,
                    positioner: function(e, a, i) {
                        var r = {
                            x: i.plotX,
                            y: t.chartObj.margin[0] - a
                        }
                          , s = e / 2;
                        return i.plotX + e > t.chartObj.plotWidth ? r.x = i.plotX + t.chartObj.plotLeft - e : i.plotX - s <= 0 ? r.x = i.plotX + t.chartObj.plotLeft : r.x = i.plotX + t.chartObj.plotLeft - s,
                        r
                    },
                    formatter: function() {
                        var e = '<span style="color: #6E8594">\u25cf</span> <b>' + n.a.localize("interval_time") + ":</b> " + this.x;
                        return this.points.sort(function(t, e) {
                            return t.y == e.y ? 0 : t.y < e.y ? 1 : -1
                        }).forEach(function(a, i) {
                            var r = "";
                            if (a.series.symbol)
                                switch (a.series.symbol) {
                                case "circle":
                                    r = "\u25cf";
                                    break;
                                case "diamond":
                                    r = "\u2666";
                                    break;
                                case "square":
                                    r = "\u25a0";
                                    break;
                                case "triangle":
                                    r = "\u25b2";
                                    break;
                                case "triangle-down":
                                    r = "\u25bc"
                                }
                            e += '<br /><span style="color: ' + a.series.color + '">' + r + "</span> <b>" + a.series.name + ":</b> " + t.convertToWattsPerKg(a.y) + " " + ("watts-kg-trend" == t.wattsToggle ? n.a.localize("label_power_kg") : n.a.localize("max_avg_power_unit"))
                        }),
                        e
                    }
                },
                this.options.plotOptions = {
                    series: {
                        lineWidth: 1,
                        marker: {
                            enabled: !1,
                            symbol: "circle",
                            lineColor: "white",
                            lineWidth: 1,
                            radius: 2
                        },
                        animation: !1
                    }
                },
                this.options.legend = {
                    enabled: !0,
                    symbolHeight: 12,
                    symbolWidth: 12,
                    itemStyle: {
                        fontSize: "12px",
                        fontWeight: "normal"
                    }
                },
                this.options.chart.marginTop = 70
            },
            compileStats: function() {},
            setCategories: function() {},
            convertToWattsPerKg: function(t) {
                var e = this.viewerUserBiometrics.biometricProfile.weight;
                return "watts-kg-trend" === this.wattsToggle ? o.a.convertToWattsPerKg(t, e) : t
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                this.histroicalData = [],
                this.currentData = [];
                var t, e = [];
                if (this.lifeTimePowerCurveTotals.get("entries"))
                    for (var a = 0; a < this.lifeTimePowerCurveTotals.get("entries").length; a++)
                        null !== this.lifeTimePowerCurveTotals.get("entries")[a].activityDate && (e.push(o.a.personalizeSeconds(this.lifeTimePowerCurveTotals.get("entries")[a].duration, n.a)),
                        this.histroicalData.push({
                            y: this.lifeTimePowerCurveTotals.get("entries")[a].power
                        }));
                if (this.histroicalData.length > 0 && (this.chartSeries[0] = {
                    name: n.a.localize("record_label"),
                    color: v,
                    data: this.histroicalData,
                    fillOpacity: .5,
                    lineColor: h.a.Colors.powerCurveDarkerGrey,
                    marker: {
                        fillColor: h.a.Colors.powerCurveDarkerGrey
                    },
                    legendColor: h.a.Colors.powerCurveDarkerGrey,
                    drawCustomLegend: !0
                }),
                t = 0 === this.histroicalData.length,
                this.metricList.get("entries"))
                    for (a = 0; a < this.metricList.get("entries").length; a++)
                        null !== this.metricList.get("entries")[a].activityDate && (t && e.push(o.a.personalizeSeconds(this.metricList.get("entries")[a].duration, n.a)),
                        this.currentData.push({
                            y: this.metricList.get("entries")[a].power
                        }));
                this.categories = e,
                this.chartSeries[1] = {
                    name: this.getMetricPeriodName(),
                    color: h.a.Colors.powerCurveBlue,
                    data: this.currentData,
                    fillOpacity: .3,
                    lineColor: h.a.Colors.blue,
                    marker: {
                        fillColor: h.a.Colors.blue
                    },
                    legendColor: h.a.Colors.blue,
                    drawCustomLegend: !0
                },
                0 === this.histroicalData.length ? this.displayEmptyChartView = !0 : 0 === this.currentData.length ? 0 === this.histroicalData.length ? (this.displayEmptyChartView = !0,
                this.displayEmptyData = !0) : this.trigger(T.DisplayMessage, {
                    msg: n.a.localize("no_power_data_for_period", this.getMetricPeriodName().toLowerCase()),
                    emptyState: !1
                }) : this.trigger(T.DisplayMessage, {
                    msg: "",
                    emptyState: !1
                })
            },
            getMetricPeriodName: function() {
                var t = null;
                switch (this.metricPeriod) {
                case c.a.weekly:
                    t = n.a.localize("four_weeks");
                    break;
                case c.a.monthly:
                    t = n.a.localize("three_months");
                    break;
                case c.a.yearly:
                    t = n.a.localize("twelve_months");
                    break;
                default:
                    t = this.metricPeriod
                }
                return t
            },
            toggle: function(t) {
                this.wattsToggle = t,
                l.a.prototype.initExportData.call(this),
                l.a.prototype.render.call(this),
                this.trigger(T.POWER_TOGGLE)
            },
            showWeightPrompt: function(t) {
                return {
                    displayWeightPrompt: null === this.viewerUserBiometrics.biometricProfile.weight && "watts-kg-trend" === t,
                    weightDate: s()().format("YYYY-MM-DD")
                }
            }
        });
        _.Events = T,
        e.a = _
    },
    2076: function(t, e) {
        t.exports = '<h6 id="te-feedback-header"><%- feedbackTitle %></h6>\n<p id="te-feedback-content"><%- feedbackContent %></p>'
    },
    2077: function(t, e) {
        t.exports = '<% if (aerobicTrainingEffect !== null) {      %>\n    <div id="te-aerobic-feedback" class="te-feedback"></div>\n    <div class="rounded-gauge te-score" id="te-aerobic-score"></div>\n<% } %>\n\n<% if (aerobicTrainingEffect !== null && anaerobicTrainingEffect !== null ) {      %>\n    <hr class="top-s bottom-s">\n<% } %>\n\n<% if (anaerobicTrainingEffect !== null) {      %>\n    <div id="te-anaerobic-feedback" class="te-feedback"></div>\n    <div class="rounded-gauge te-score" id="te-anaerobic-score"></div>\n<% } %>\n'
    },
    2078: function(t, e) {
        t.exports = "<p><strong><%- Localizer.localize('AEROBIC_TRAINING_EFFECT') %></strong> <%- Localizer.localize('AEROBIC_TE_DESCRIPTION') %></p>\n<% if (anaerobicTrainingEffect !== null) {      %>\n    <p><strong><%- Localizer.localize('ANAEROBIC_TRAINING_EFFECT') %></strong> <%- Localizer.localize('ANAEROBIC_TE_DESCRIPTION') %></p>\n<% } %>\n\n<div class=\"fine-print\">\n    <%= Localizer.localize('TRAINING_EFFECT_REPORT_FOOTER') %>\n</div>"
    },
    2079: function(t, e) {
        t.exports = "<table class=\"table table-bordered table-training-effect\">\n    <thead>\n    <tr>\n        <th><%- Localizer.localize('trainingEffect.help.status') %></th>\n        <th><%- Localizer.localize('trainingEffect.help.score') %></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td><%- Localizer.localize('trainingEffect.help.score5') %></td>\n        <td>5</td>\n    </tr>\n    <tr>\n        <td><%- Localizer.localize('trainingEffect.help.score4') %></td>\n        <td>4</td>\n    </tr>\n    <tr>\n        <td><%- Localizer.localize('trainingEffect.help.score3') %></td>\n        <td>3</td>\n    </tr>\n    <tr>\n        <td><%- Localizer.localize('trainingEffect.help.score2') %></td>\n        <td>2</td>\n    </tr>\n    <tr>\n        <td><%- Localizer.localize('trainingEffect.help.score1') %></td>\n        <td>1</td>\n    </tr>\n    <tr>\n        <td><%- Localizer.localize('trainingEffect.help.score0') %></td>\n        <td>0</td>\n    </tr>\n    </tbody>\n</table>"
    },
    2080: function(t, e) {
        t.exports = '\n\x3c!-- Temporary file until FR 945 is announced, delete this file\nand its references once the features for FR 945 goes LIVE\nCA-51051 --\x3e\n\n\n<% if (isWidget === false) { %>\n    <ul class="nav nav-tabs">\n        <li class="active"><a href="#te-this-activity-placeholder" data-toggle="tab"><%- Localizer.localize(\'label.this.activity\') %></a></li>\n        <li><a href="#te-learn-placeholder" data-toggle="tab"><%- Localizer.localize(\'agent.learn.more\') %></a></li>\n        <li><a href="#te-scores-placeholder" data-toggle="tab"><%- Localizer.localize(\'label.scoring.scale\') %></a></li>\n    </ul>\n\n    <div class="tab-content">\n        <div class="tab-pane active" id="te-this-activity-placeholder"></div>\n\n        <div class="tab-pane" id="te-learn-placeholder"></div>\n        \n        <div class="tab-pane" id="te-scores-placeholder"></div>\n    </div>\n<% } else { %>\n    <ul class="nav nav-tabs">\n        <li class="active"><a href="#te-learn-placeholder" data-toggle="tab"><%- Localizer.localize(\'agent.learn.more\') %></a></li>\n        <li><a href="#te-scores-placeholder" data-toggle="tab"><%- Localizer.localize(\'label.scoring.scale\') %></a></li>\n    </ul>\n\n    <div class="tab-content">\n        <div class="tab-pane active" id="te-learn-placeholder"></div>\n\n        <div class="tab-pane" id="te-scores-placeholder"></div>\n    </div>\n\n<% } %>'
    },
    2081: function(t, e, a) {
        "use strict";
        a(7);
        var i = a(9)
          , r = a.n(i)
          , s = a(6)
          , n = a(1458)
          , o = a(39)
          , l = a(1339)
          , c = r.a.View.extend({
            initialize: function(t) {
                this.aerobicScore = t.aerobicScore,
                this.aerobicScoreMessage = t.aerobicScoreMessage,
                this.anaerobicScore = t.anaerobicScore,
                this.anaerobicScoreMessage = t.anaerobicScoreMessage,
                this.primaryBenefit = t.primaryBenefit,
                this.isWidget = t.isWidget
            },
            render: function() {
                this.teHelpModalView && this.teHelpModalView.destroy(),
                this.teHelpModalView = new n.a({
                    reactComponent: window.TrainingEffectModal,
                    props: {
                        aerobicTEStats: {
                            score: this.aerobicScore,
                            feedBackTitle: s.a.localize(l.a.Types.Aerobic + "_TRAINING_EFFECT"),
                            feedBackContent: l.a.getFeedback(l.a.Types.Aerobic, this.aerobicScore, this.aerobicScoreMessage),
                            label: s.a.localize("label.aerobic.te")
                        },
                        anaerobicTEStats: {
                            score: this.anaerobicScore,
                            feedBackTitle: s.a.localize(l.a.Types.Anaerobic + "_TRAINING_EFFECT"),
                            feedBackContent: l.a.getFeedback(l.a.Types.Anaerobic, this.anaerobicScore, this.anaerobicScoreMessage),
                            label: s.a.localize("label.anaerobic.te")
                        },
                        primaryBenefit: this.primaryBenefit,
                        isWidget: this.isWidget
                    }
                }),
                new o.a({
                    view: this.teHelpModalView,
                    showFooter: !1,
                    customClasses: "",
                    modalTitle: s.a.localize("help.title")
                }).render()
            }
        });
        e.a = c
    },
    2082: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i).a.Model.extend({
            url: function() {
                return "/proxy/fitnessstats-service/" + this.dataType + "/" + (this.startDate ? "?startDate=" + this.startDate : "") + (this.endDate ? "&endDate=" + this.endDate : "")
            },
            initialize: function(t) {
                this.dataType = t.dataType,
                this.startDate = t.startDate,
                this.endDate = t.endDate
            }
        });
        e.a = r
    },
    2083: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(355)
          , n = a(9)
          , o = a.n(n).a.Model.extend({
            url: function() {
                return "/proxy/fitnessstats-service/activity" + s.a.toQueryString({
                    aggregation: this.aggregation,
                    userFirstDay: this.firstDayOfWeek ? this.firstDayOfWeek.dayName : void 0,
                    startDate: this.startDate,
                    endDate: this.endDate,
                    groupByActivityType: this.groupByActivityType,
                    metric: this.metric,
                    excludedActivitySubType: this.excludedActivitySubType,
                    activityType: this.activityType
                })
            },
            initialize: function(t) {
                if (!this.notNullAndNotUndefined(t))
                    throw "aggregation required for AggregatedActivityMetricStats";
                this.aggregation = t.aggregation,
                this.startDate = t.startDate,
                this.endDate = t.endDate,
                this.metric = t.metric,
                this.activityType = t.activityType,
                this.groupByActivityType = t.groupByActivityType,
                this.excludedActivitySubType = t.excludedActivitySubType,
                this.firstDayOfWeek = t.firstDayOfWeek
            },
            notNullAndNotUndefined: function(t) {
                return !r.a.isNull(t) && !r.a.isUndefined(t)
            },
            parse: function(t) {
                this.aggregateStats = t
            },
            setDisplayName: function(t) {
                this.displayName = t
            },
            getTotalStatSum: function(t, e) {
                for (var a = 0, i = 0; i < this.aggregateStats.length; i++)
                    a += this.aggregateStats[i].stats[t][e].sum;
                return a
            },
            getTotalBottomTimeInSeconds: function() {
                return this.getTotalStatSum("diving", "bottomTime") / 1e3
            }
        });
        e.a = o
    },
    2084: function(t, e, a) {
        "use strict";
        e.a = {
            BAR: "BAR",
            BAR_STACKED: "BAR_STACKED",
            BAR_NEGATIVE_STACKED: "BAR_NEGATIVE_STACKED",
            LINE: "LINE",
            LINE_MULTI_GROUPED: "LINE_MULTI_GROUPED",
            LINE_WITH_GAUGE: "LINE_WITH_GAUGE",
            SCATTERED_WITH_AVG: "SCATTERED_WITH_AVG",
            PIE: "PIE",
            NONSTANDARD: "NONSTANDARD"
        }
    },
    2320: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(13)
          , c = a(1233)
          , h = a.n(c)
          , d = a(1254)
          , u = a.n(d)
          , p = a(1227)
          , g = a(1339);
        u()(h.a);
        var m = n.a.View.extend({
            className: "te-gauge-chart",
            maxVal: 5,
            wChart: 175,
            hChart: 160,
            initialize: function(t) {
                return this.teType = t.teType ? t.teType : g.a.Types.Aerobic,
                this.data = t.data ? t.data : 0,
                this.teType === g.a.Types.Aerobic ? this.teTitle = o.a.localize("label.aerobic.te") : this.teTitle = o.a.localize("label.anaerobic.te"),
                t.options ? this.options = r.a.extend({}, this.getDefaultOptions(), t.options) : this.options = r.a.extend({}, this.getDefaultOptions()),
                this
            },
            render: function() {
                var t = "te-" + this.teType.toLowerCase() + "-gauge-chart";
                return this.$el.attr("id", t),
                this.$el.highcharts(this.options),
                this.formatGauge(),
                this
            },
            getDefaultOptions: function() {
                return {
                    chart: {
                        type: "solidgauge",
                        width: this.wChart,
                        height: this.hChart,
                        margin: [0, 0, 0, 0],
                        style: {
                            fontFamily: "'Open Sans', sans-serif"
                        }
                    },
                    title: null,
                    tooltip: {
                        enabled: !1
                    },
                    pane: {
                        size: "100%",
                        center: ["50%", "60%"],
                        startAngle: -130,
                        endAngle: 130,
                        background: {
                            borderWidth: 20,
                            backgroundColor: "transparent",
                            shape: "arc",
                            borderColor: p.a.Colors.baseGrey,
                            outerRadius: "90%",
                            innerRadius: "90%"
                        }
                    },
                    yAxis: {
                        min: 0,
                        max: this.maxVal,
                        lineWidth: 0,
                        tickPositions: []
                    },
                    plotOptions: {
                        solidgauge: {
                            animation: !1,
                            dataLabels: {
                                borderWidth: 0,
                                useHTML: !0,
                                format: "<div class='training-effect-score'><span class='data-bit'>" + l.a.personalizeTrainingEffect(this.data) + "</span><span class='data-label'>" + this.teTitle + "</span></div>",
                                y: -68
                            }
                        }
                    },
                    series: [{
                        data: [{
                            y: this.data,
                            radius: "90%",
                            innerRadius: "90%"
                        }]
                    }],
                    credits: {
                        enabled: !1
                    },
                    exporting: {
                        enabled: !1
                    }
                }
            },
            formatGauge: function() {
                var t = this.$el.find(".highcharts-container").find("svg");
                if (t.length > 0) {
                    var e = t[0].getElementsByTagName("path");
                    e.length >= 3 && (e[0].setAttributeNS(null, "stroke-linejoin", "round"),
                    e[2].setAttributeNS(null, "stroke-linejoin", "round"),
                    e[2].setAttributeNS(null, "stroke", g.a.getTrainingEffectColor(this.data)),
                    e[2].setAttributeNS(null, "stroke-width", "20"))
                }
            }
        })
          , f = a(2076)
          , v = a.n(f)
          , T = n.a.View.extend({
            initialize: function(t) {
                this.template = r.a.template(v.a),
                this.teType = t.teType,
                this.teValue = t.teValue,
                this.teMessage = t.teMessage
            },
            render: function() {
                var t = o.a.localize(this.teType + "_TRAINING_EFFECT");
                return t = g.a.getFeedback(this.teType, this.teValue, this.teMessage),
                this.$el.html(this.template({
                    feedbackTitle: t.feedbackTitle,
                    feedbackContent: t.feedbackContent
                })),
                this
            }
        })
          , _ = a(2077)
          , A = a.n(_)
          , y = n.a.View.extend({
            template: r.a.template(A.a),
            initialize: function(t) {
                return this.aerobicTrainingEffect = t.aerobicTrainingEffect,
                this.aerobicTrainingEffectMessage = t.aerobicTrainingEffectMessage,
                this.anaerobicTrainingEffect = t.anaerobicTrainingEffect,
                this.anaerobicTrainingEffectMessage = t.anaerobicTrainingEffectMessage,
                this
            },
            render: function() {
                if (this.$el.html(this.template({
                    Localizer: o.a,
                    aerobicTrainingEffect: this.aerobicTrainingEffect,
                    anaerobicTrainingEffect: this.anaerobicTrainingEffect
                })),
                null !== this.anaerobicTrainingEffect) {
                    var t = new T({
                        teType: g.a.Types.Anaerobic,
                        teValue: this.anaerobicTrainingEffect,
                        teMessage: this.anaerobicTrainingEffectMessage
                    })
                      , e = new m({
                        teType: g.a.Types.Anaerobic,
                        data: this.anaerobicTrainingEffect
                    });
                    this.$("#te-anaerobic-feedback").html(t.render().el),
                    this.$("#te-anaerobic-score").html(e.render().el)
                }
                if (null !== this.aerobicTrainingEffect) {
                    var a = new T({
                        teType: g.a.Types.Aerobic,
                        teValue: this.aerobicTrainingEffect,
                        teMessage: this.aerobicTrainingEffectMessage
                    })
                      , i = new m({
                        teType: g.a.Types.Aerobic,
                        data: this.aerobicTrainingEffect
                    });
                    this.$("#te-aerobic-feedback").html(a.render().el),
                    this.$("#te-aerobic-score").html(i.render().el)
                }
                return this
            }
        })
          , C = a(2078)
          , b = a.n(C)
          , E = n.a.View.extend({
            initialize: function(t) {
                this.template = r.a.template(b.a),
                this.aerobicTrainingEffect = t.aerobicTrainingEffect,
                this.anaerobicTrainingEffect = t.anaerobicTrainingEffect
            },
            render: function() {
                return this.$el.html(this.template({
                    Localizer: o.a,
                    aerobicTrainingEffect: this.aerobicTrainingEffect,
                    anaerobicTrainingEffect: this.anaerobicTrainingEffect
                })),
                this
            }
        })
          , D = a(2079)
          , I = a.n(D)
          , x = n.a.View.extend({
            initialize: function() {
                this.template = r.a.template(I.a)
            },
            render: function() {
                return this.$el.html(this.template({
                    Localizer: o.a
                })),
                this
            }
        })
          , S = a(2080)
          , M = a.n(S)
          , w = n.a.View.extend({
            initialize: function(t) {
                this.template = r.a.template(M.a),
                this.aerobicTrainingEffect = t.aerobicTrainingEffect,
                this.aerobicTrainingEffectMessage = t.aerobicTrainingEffectMessage,
                this.anaerobicTrainingEffect = t.anaerobicTrainingEffect,
                this.anaerobicTrainingEffectMessage = t.anaerobicTrainingEffectMessage,
                this.isWidget = t.isWidget
            },
            render: function() {
                this.$el.html(this.template({
                    Localizer: o.a,
                    isWidget: this.isWidget
                })),
                !1 === this.isWidget && (this.thisActivityView = new y({
                    aerobicTrainingEffect: this.aerobicTrainingEffect,
                    aerobicTrainingEffectMessage: this.aerobicTrainingEffectMessage,
                    anaerobicTrainingEffect: this.anaerobicTrainingEffect,
                    anaerobicTrainingEffectMessage: this.anaerobicTrainingEffectMessage
                }),
                this.$("#te-this-activity-placeholder").html(this.thisActivityView.render().el)),
                this.learnMoreView = new E({
                    aerobicTrainingEffect: this.aerobicTrainingEffect,
                    anaerobicTrainingEffect: this.anaerobicTrainingEffect
                }),
                this.scoringScaleView = new x({}),
                this.$("#te-learn-placeholder").html(this.learnMoreView.render().el),
                this.$("#te-scores-placeholder").html(this.scoringScaleView.render().el)
            }
        });
        e.a = w
    },
    2341: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(18)
          , c = {
            MALE: {
                "Under 20": [59.8, 55.4, 53.5, 51.8, 51.1, 48.4, 47.5, 46.7, 45.4, 44.6, 43.9, 42.5, 41.7, 41, 39.9, 38.8, 37.7, 36.7, 34.5, 31.3, 26.1],
                "20-29": [59.8, 55.4, 53.5, 51.8, 51.1, 48.4, 47.5, 46.7, 45.4, 44.6, 43.9, 42.5, 41.7, 41, 39.9, 38.8, 37.7, 36.7, 34.5, 31.3, 26.1],
                "30-39": [58.3, 54, 51.6, 49.9, 48.3, 47, 46, 45.3, 44, 43.9, 42.4, 41.1, 40.5, 39.5, 38.6, 37.6, 36.7, 35.2, 33.8, 31.1, 26.5],
                "40-49": [56.1, 52.5, 49.6, 48.2, 46.4, 44.9, 43.9, 43.1, 42.4, 41, 40.1, 39.5, 38.5, 37.7, 36.7, 35.9, 34.9, 33.8, 32.3, 29.5, 25.1],
                "50-59": [54, 48.9, 46.7, 44.6, 43.4, 41.8, 41, 39.9, 39.2, 38.1, 37.3, 36.7, 35.6, 35, 33.8, 33, 32.3, 30.9, 29.4, 27, 22.8],
                "60-69": [51.1, 45.7, 42.6, 41, 39.5, 38.3, 37.1, 36.7, 35.5, 34.8, 33.8, 33, 32.3, 31.6, 30.9, 29.5, 28.7, 27.4, 25.7, 23.7, 19.4],
                "70-79": [49.6, 42.1, 39.5, 38.1, 36.7, 35.2, 33.9, 33.1, 32.3, 31.5, 30.7, 29.9, 29.4, 28.1, 27.8, 26.7, 25.7, 24.6, 22.9, 20.8, 18.2],
                "80+": [49.6, 42.1, 39.5, 38.1, 36.7, 35.2, 33.9, 33.1, 32.3, 31.5, 30.7, 29.9, 29.4, 28.1, 27.8, 26.7, 25.7, 24.6, 22.9, 20.8, 18.2]
            },
            FEMALE: {
                "Under 20": [54.4, 49.6, 46.7, 45.3, 43.9, 42.4, 41, 40.9, 39.5, 38.5, 37.7, 36.7, 36.1, 35.2, 33.9, 32.9, 32.3, 30.9, 29.5, 27, 23.7],
                "20-29": [54.4, 49.6, 46.7, 45.3, 43.9, 42.4, 41, 40.9, 39.5, 38.5, 37.7, 36.7, 36.1, 35.2, 33.9, 32.9, 32.3, 30.9, 29.5, 27, 23.7],
                "30-39": [52.5, 47.4, 45.3, 43.9, 42.4, 41, 39.6, 38.6, 37.8, 37.1, 36.7, 35.2, 34.4, 33.8, 32.5, 32.3, 30.9, 29.5, 28, 25.9, 22.9],
                "40-49": [51.1, 45.3, 43.9, 41.1, 39.7, 39.2, 38.1, 36.7, 36.3, 35.2, 34.9, 33.8, 33, 32.3, 31.3, 30.4, 29.4, 28.2, 26.7, 25.1, 22.2],
                "50-59": [46, 41.1, 39.5, 37.3, 36.7, 35.3, 34.5, 33.7, 33, 32.3, 31.6, 30.9, 30.1, 29.5, 29, 28, 27, 25.9, 24.8, 23, 20.4],
                "60-69": [43.9, 37.8, 35.9, 34.5, 33, 32.3, 31.3, 30.9, 30, 29.4, 29.1, 28.4, 27.5, 26.8, 26.1, 25.2, 24.7, 24, 23, 21.8, 19.5],
                "70-79": [43.9, 36.7, 33, 31.8, 30.9, 30, 29.5, 29.4, 28.1, 28, 27.4, 26.6, 25.9, 25.1, 24.8, 24.3, 23.8, 22.6, 21.5, 19.7, 16.8],
                "80+": [43.9, 36.7, 33, 31.8, 30.9, 30, 29.5, 29.4, 28.1, 28, 27.4, 26.6, 25.9, 25.1, 24.8, 24.3, 23.8, 22.6, 21.5, 19.7, 16.8]
            }
        }
          , h = {
            getPercentileGroup: function(t, e, a) {
                return this.mapToGroup(c[t][e], a)
            },
            mapToGroup: function(t, e) {
                var a, i = t.length;
                if (e >= t[0])
                    return a = 1,
                    this.getPercentileString(a, !0);
                if (e < t[i - 1])
                    return a = 1,
                    this.getPercentileString(a, !1);
                for (var r = 0; r < i; r++)
                    if (e < t[r] && e >= t[r + 1])
                        return r + 1 === 10 ? (a = 50,
                        this.getPercentileString(a, !0)) : r + 1 === 11 ? (a = 50,
                        this.getPercentileString(a, !1)) : r + 1 > 11 ? (a = 50 - 5 * (r + 1 - 11),
                        this.getPercentileString(a, !1)) : (a = 5 * (r + 1),
                        this.getPercentileString(a, !0))
            },
            getPercentileString: function(t, e) {
                return e ? o.a.localize("vo2_max_top", t) : o.a.localize("vo2_max_bottom", t)
            }
        }
          , d = a(2074)
          , u = a(3235)
          , p = a.n(u)
          , g = n.a.View.extend({
            initialize: function(t) {
                this.template = r.a.template(p.a),
                this.chartFormat = t.chartFormat,
                this.reportType = t.reportType,
                this.vo2MaxMetrics = t.vo2MaxMetrics,
                this.gender = t.gender,
                this.ageRange = t.ageRange,
                this.vo2MaxToggle = t.vo2MaxToggle,
                this.modalText = t.modalText || !1,
                this.setCurrentVo2Max(),
                this.setHasFitnessAge()
            },
            setCurrentVo2Max: function() {
                var t = this.vo2MaxMetrics.getGenericVO2Max() ? this.vo2MaxMetrics.getGenericVO2Max().vo2MaxValue : null
                  , e = this.vo2MaxMetrics.getCyclingVO2Max() ? this.vo2MaxMetrics.getCyclingVO2Max().vo2MaxValue : null;
                this.currentVo2Max = t,
                ("cycling" === this.reportType || "all" === this.reportType && "cycling" === this.vo2MaxToggle || !t) && (this.currentVo2Max = e,
                null === t && (this.isOnlyCycling = !0))
            },
            setHasFitnessAge: function() {
                var t = this.vo2MaxMetrics.get("generic") ? this.vo2MaxMetrics.get("generic").fitnessAge : null
                  , e = this.vo2MaxMetrics.get("cycling") ? this.vo2MaxMetrics.get("cycling").fitnessAge : null;
                this.hasFitnessAge = !!t,
                "cycling" === this.reportType && (this.hasFitnessAge = !!e)
            },
            render: function() {
                this.$el.html(this.template({
                    Localizer: o.a,
                    url: l.default.url("/insights"),
                    chartFormat: this.chartFormat,
                    reportType: this.reportType,
                    modalText: this.modalText,
                    isOnlyCycling: this.isOnlyCycling,
                    ageRange: this.ageRange,
                    vo2MaxToggle: this.vo2MaxToggle,
                    currentVo2Max: Math.round(this.currentVo2Max),
                    fitnessAge: this.hasFitnessAge ? this.getFitnessAge() : null,
                    fitnessAgeDescription: this.hasFitnessAge ? this.getFitnessAgeDescription() : null,
                    percentileGroup: this.getPercentileGroup(),
                    scoreName: this.getScoreName(),
                    pluralGender: this.getPluralGender()
                }))
            },
            getFitnessAgeDescription: function() {
                var t = "normal"
                  , e = this.getFitnessAge();
                return e <= 19 && (t = "aboveNormal"),
                e >= 80 && (t = "belowNormal"),
                t
            },
            getFitnessAge: function() {
                var t, e, a = this.vo2MaxMetrics.get("generic") ? this.vo2MaxMetrics.get("generic").fitnessAge : null, i = this.vo2MaxMetrics.get("cycling") ? this.vo2MaxMetrics.get("cycling").fitnessAge : null;
                if (a && !i)
                    t = a,
                    e = this.vo2MaxMetrics.get("generic").fitnessAgeDescription;
                else if (!a && i)
                    t = i,
                    e = this.vo2MaxMetrics.get("cycling").fitnessAgeDescription;
                else {
                    if (!a || !i)
                        return;
                    a <= i ? (t = a,
                    e = this.vo2MaxMetrics.get("generic").fitnessAgeDescription) : (t = i,
                    e = this.vo2MaxMetrics.get("cycling").fitnessAgeDescription)
                }
                return t - e
            },
            getPercentileGroup: function() {
                return h.getPercentileGroup(this.gender, this.ageRange, this.currentVo2Max)
            },
            getScoreName: function() {
                var t = d.a.getScoreData(this.gender, this.ageRange, this.currentVo2Max)
                  , e = d.a.getScoreNames();
                return o.a.localize(e[t.scoreIndex]).toLowerCase()
            },
            getPluralGender: function() {
                return "MALE" === this.gender ? o.a.localize("men").toLowerCase() : o.a.localize("women").toLowerCase()
            }
        });
        e.a = g
    },
    2435: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(9)
              , r = a.n(i).a.Model.extend({
                url: function() {
                    return "/proxy/userstats-service/statistics/availability/" + this.getDisplayName()
                },
                setDisplayName: function(t) {
                    this.displayName = t
                },
                getDisplayName: function() {
                    return this.displayName
                },
                hasMetricAvailable: function(e, a) {
                    var i = this.get(e)
                      , r = !1;
                    return i && i.length > 0 && t.each(i, function(t) {
                        t.metric.metricName === a && t.available && (r = !0)
                    }),
                    r
                },
                getMetricId: function(e, a) {
                    var i = this.get(e)
                      , r = t.find(i, function(t) {
                        return t.metric.metricName === a
                    });
                    return r ? r.metric.metricId : ""
                }
            });
            e.a = r
        }
        ).call(this, a(7))
    },
    2436: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = a(355)
          , n = r.a.Model.extend({
            initialize: function(t) {
                this.startDate = t.startDate,
                this.endDate = t.endDate,
                this.sports = t.sports
            },
            url: function() {
                var t = new s.a;
                return "/proxy/fitnessstats-service/activity/availableMetrics" + t.convertObjectToQueryString({
                    startDate: this.startDate,
                    endDate: this.endDate
                }) + (this.sports ? "&" + t.convertArrayToQueryString("activityType", this.sports) : "")
            },
            hasMetric: function(t, e) {
                var a = this.get(t);
                return a && -1 !== a.indexOf(e)
            }
        });
        e.a = n
    },
    2437: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = a(7)
          , n = a.n(s)
          , o = a(6)
          , l = a(15)
          , c = a.n(l)
          , h = a(1233)
          , d = a.n(h)
          , u = a(1256)
          , p = a.n(u)
          , g = a(1420)
          , m = a.n(g)
          , f = a(1302)
          , v = a(23)
          , T = a(85)
          , _ = a(1297)
          , A = a(3174)
          , y = a.n(A)
          , C = a(3175)
          , b = a.n(C)
          , E = a(1356);
        p()(d.a),
        m()(d.a);
        var D = r.a.View.extend({
            initialize: function(t) {
                this.reportType = t.reportType,
                this.chartFormat = t.chartFormat,
                this.metricList = t.metricList,
                this.displayName = t.displayName,
                this.chartType = t.chartType,
                this.metricPeriod = t.metricPeriod,
                this.currentDateOffset = t.currentDateOffset,
                this.userPreferences = t.userPreferences,
                this.daysInMonth = t.daysInMonth,
                this.activeTab = t.activeTab,
                this.template = n.a.template(y.a)
            },
            render: function() {
                this.$el.html(this.template({
                    Localizer: o.a
                })),
                new d.a.Chart(this.getChartOptions())
            },
            getChartOptions: function() {
                var t = this.getSPOChartData()
                  , e = {
                    exporting: {
                        enabled: !1
                    },
                    credits: {
                        enabled: !1
                    },
                    chart: {
                        marginLeft: 34,
                        marginRight: 34,
                        marginBottom: 105,
                        spacingLeft: 0,
                        renderTo: this.el
                    },
                    title: {
                        text: null
                    },
                    subtitle: {
                        text: null
                    },
                    xAxis: this.getXAxisConfig(),
                    yAxis: this.getYAxisConfig(),
                    tooltip: this.getTooltipConfig(t),
                    legend: {
                        enabled: !0,
                        itemStyle: {
                            fontWeight: "normal"
                        },
                        itemWidth: 108
                    },
                    series: this.buildSeriesData(t)
                };
                return this.isWidgetFormat() && (e.chart.width = 290,
                e.chart.height = 220,
                e.chart.marginLeft = 45),
                e
            },
            getXAxisConfig: function() {
                var t = this
                  , e = new c.a(this.metricList.startDate).toDate().getTime()
                  , a = new c.a(this.metricList.endDate).add(24, "hour").toDate().getTime();
                return [{
                    type: "datetime",
                    crosshair: {
                        snap: !0,
                        color: "#222",
                        zIndex: 3,
                        width: 1
                    },
                    labels: {
                        enabled: !0,
                        formatter: function() {
                            var e = new c.a(this.value);
                            return t.isSevenDay() ? e.format("ddd") : v.a.formatMonthDay(e.toDate())
                        },
                        x: t.xAxisLabelOffset()
                    },
                    min: e,
                    max: a,
                    tickPositioner: function() {
                        return t.isSevenDay() ? [e, e + E.a.MS_IN_ONE_DAY, e + 2 * E.a.MS_IN_ONE_DAY, e + 3 * E.a.MS_IN_ONE_DAY, e + 4 * E.a.MS_IN_ONE_DAY, e + 5 * E.a.MS_IN_ONE_DAY, e + 6 * E.a.MS_IN_ONE_DAY, a] : [e, e + 7 * E.a.MS_IN_ONE_DAY, e + 7 * E.a.MS_IN_ONE_DAY * 2, e + 7 * E.a.MS_IN_ONE_DAY * 3, e + 7 * E.a.MS_IN_ONE_DAY * 4]
                    },
                    endOnTick: !0,
                    startOnTick: !0,
                    showLastLabel: !1
                }]
            },
            getYAxisConfig: function() {
                return [{
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function() {
                            return 101 === this.value ? 100 : this.value + "%"
                        },
                        x: -5,
                        align: "right",
                        overflow: "allow"
                    },
                    max: 100,
                    min: 60,
                    endOnTick: !1,
                    tickPositioner: function() {
                        return [60, 70, 80, 90, 100]
                    }
                }]
            },
            getTooltipConfig: function(t) {
                var e = this
                  , a = this.isPageFormat();
                return {
                    shared: !0,
                    crosshairs: !0,
                    animation: !1,
                    backgroundColor: "rgba(255,255,255,0.85)",
                    formatter: function() {
                        var a = this.x
                          , i = a;
                        i = e.isSevenDay() ? new c.a(a).startOf("hour").toDate().getTime() : new c.a(a).startOf("day").toDate().getTime();
                        var r = e.formatDate(i)
                          , s = t.find(function(t) {
                            return t[0] === i
                        })
                          , l = n.a.template(b.a)
                          , h = s ? s[1] : void 0;
                        return l({
                            dateValue: r,
                            color: Object(_.b)(h, !0),
                            spoValue: s ? s[1] : "",
                            Localizer: o.a
                        })
                    },
                    positioner: function(t, e, i) {
                        var r = {
                            x: i.plotX + this.chart.plotLeft - Math.floor(t / 2),
                            y: a ? -e - this.chart.plotTop : 30
                        };
                        if (a) {
                            var s = this.chart.container
                              , n = s.offsetLeft
                              , o = s.offsetTop
                              , l = s.offsetParent;
                            r.x += a && n ? n : 0,
                            r.y += a && o ? o : 0,
                            l && (r.x += l.offsetLeft ? l.offsetLeft : 0,
                            r.y += l.offsetTop ? l.offsetTop : 0)
                        } else
                            i.plotX - .72 * t < this.chart.plotLeft ? r.x = i.plotX + this.chart.plotLeft : r.x = i.plotX + this.chart.plotLeft - t;
                        return r
                    },
                    followPointer: !!a,
                    outside: !!a,
                    useHTML: !0
                }
            },
            buildSeriesData: function(t) {
                return [{
                    type: "area",
                    color: _.a.HARMFUL,
                    name: o.a.localize("pulse_ox_key_harmful"),
                    showInLegend: !0,
                    events: {
                        legendItemClick: function() {
                            return !1
                        }
                    }
                }, {
                    type: "area",
                    color: _.a.LOW,
                    name: o.a.localize("pulse_ox_key_low"),
                    showInLegend: !0,
                    events: {
                        legendItemClick: function() {
                            return !1
                        }
                    }
                }, {
                    type: "area",
                    color: _.a.MODERATE,
                    name: o.a.localize("pulse_ox_key_moderate"),
                    showInLegend: !0,
                    events: {
                        legendItemClick: function() {
                            return !1
                        }
                    }
                }, {
                    type: "area",
                    color: _.a.NORMAL,
                    name: o.a.localize("pulse_ox_key_normal"),
                    showInLegend: !0,
                    events: {
                        legendItemClick: function() {
                            return !1
                        }
                    }
                }, {
                    name: o.a.localize("pulse_ox_acclimation_label_spo2"),
                    type: "column",
                    yAxis: 0,
                    data: t,
                    threshold: 100,
                    tooltip: {
                        valueSuffix: "%"
                    },
                    zones: [{
                        value: 70,
                        color: _.a.HARMFUL
                    }, {
                        value: 80,
                        color: _.a.LOW
                    }, {
                        value: 90,
                        color: _.a.MODERATE
                    }, {
                        value: 100,
                        color: _.a.NORMAL
                    }],
                    pointPadding: 0,
                    groupPadding: 0,
                    borderWidth: 0,
                    pointPlacement: "between",
                    showInLegend: !1,
                    states: {
                        hover: {
                            enabled: !1
                        }
                    },
                    pointRange: this.isSevenDay() ? 36e5 : 864e5
                }]
            },
            xAxisLabelOffset: function() {
                return this.isPageFormat() ? this.isSevenDay() ? 45 : 80 : this.isSevenDay() ? 18 : 30
            },
            getSPOChartData: function() {
                return (this.isSevenDay() ? this.metricList.get("spo2HourlyAverageArray") : this.metricList.get("spo2DailyAverageArray").map(function(t) {
                    return [c()(t[0]).toDate().getTime(), t[1]]
                })) || []
            },
            isSevenDay: function() {
                return "last_seven_days" === this.activeTab
            },
            isPageFormat: function() {
                return "page" === this.chartFormat
            },
            isWidgetFormat: function() {
                return "widget" === this.chartFormat
            },
            getExportData: function() {
                this.initExportData(),
                this.addExportData(["", o.a.localize("pulse_ox_acclimation_label_spo2")]);
                for (var t = this.getSPOChartData(), e = 0; e < t.length; e++) {
                    var a, i, r = t[e], s = r[0];
                    this.isSevenDay() ? (a = new c.a(s).startOf("hour").toDate().getTime(),
                    i = v.a.formatDate(T.a.parseEpoch(a)) + " " + this.formatDate(a, !0)) : (a = new c.a(s).startOf("day").toDate().getTime(),
                    i = this.formatDate(a, !0));
                    var n = r[1] + "%";
                    this.addExportData([i, n])
                }
                return this.exportData
            },
            initExportData: function() {
                this.exportData = {
                    title: o.a.localize(f.a.ALL_DAY_PULSE_OX),
                    rows: []
                }
            },
            addExportData: function() {
                this.exportData.rows.push({
                    values: arguments
                })
            },
            formatDate: function(t, e) {
                var a = "";
                this.isSevenDay() ? a = v.a.formatTime(T.a.parseEpoch(t)) + " - " + v.a.formatTime(T.a.parseEpoch(t + E.a.MS_IN_ONE_HOUR)) : a = e ? v.a.formatDate(T.a.parseEpoch(t)) : v.a.formatMonthDayYear(T.a.parseEpoch(t));
                return a
            }
        });
        e.a = D
    },
    2438: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = r.a.Collection.extend({
            model: r.a.Model,
            initialize: function(t) {
                this.range = t.range
            },
            url: function() {
                return "/proxy/userprofile-service/biometric/bioRanges/" + this.range
            },
            filterByGender: function(t) {
                var e = this.filter(function(e) {
                    return e.get("gender") == t
                });
                return new s(e)
            }
        });
        s.BiometricRangeConstants = {
            FTP_POWER: "functionalThresholdPower"
        },
        e.a = s
    },
    2439: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(7)
              , r = a.n(i)
              , s = a(9)
              , n = a.n(s)
              , o = a(6)
              , l = a(13)
              , c = a(27)
              , h = (a(38),
            a(2438))
              , d = a(3181)
              , u = a.n(d)
              , p = {
                LOADED: "LOADED"
            }
              , g = n.a.View.extend({
                initialize: function(t) {
                    this.chartFormat = t.chartFormat,
                    this.template = r.a.template(u.a),
                    this.modelSynchronizer = new c.a,
                    this.userBiometricRanges = new h.a({
                        range: h.a.BiometricRangeConstants.FTP_POWER
                    })
                },
                render: function() {
                    this.modelSynchronizer.addModel({
                        model: this.userBiometricRanges,
                        required: !0
                    }),
                    this.modelSynchronizer.on(c.a.Events.SYNCHRONIZED, function() {
                        this.categories = this.userBiometricRanges.toJSON(),
                        this._render()
                    }, this),
                    this.modelSynchronizer.fetchModels()
                },
                _render: function() {
                    var e = this
                      , a = this.template({
                        Localizer: o.a,
                        weightUnit: o.a.localize("weight_unit_metric"),
                        Personalizer: l.a,
                        getRangeByCategory: function(t, a) {
                            var i = r.a.find(e.categories, function(e) {
                                return e.category == t && e.gender == a
                            });
                            return i ? {
                                min: i.minValue,
                                max: i.maxValue
                            } : {
                                min: "",
                                max: ""
                            }
                        }
                    });
                    t(this.el).html(a),
                    "page" == this.chartFormat && this.$(".table-bordered").closest(".span8").toggleClass("span8 span10"),
                    this.trigger(p.LOADED)
                }
            });
            g.Events = p,
            e.a = g
        }
        ).call(this, a(10))
    },
    2440: function(t, e, a) {
        "use strict";
        e.a = {
            SCORE_VERY_HIGH_TOP: 100,
            SCORE_VERY_HIGH_BOTTOM: 90,
            SCORE_HIGH_TOP: 89,
            SCORE_HIGH_BOTTOM: 70,
            SCORE_MODERATE_TOP: 69,
            SCORE_MODERATE_BOTTOM: 35,
            SCORE_LOW_TOP: 34,
            SCORE_LOW_BOTTOM: 1
        }
    },
    2441: function(t, e, a) {
        "use strict";
        var i = a(1)
          , r = a(7)
          , s = a.n(r)
          , n = a(9)
          , o = a.n(n)
          , l = a(1233)
          , c = a.n(l)
          , h = o.a.View.extend({
            defaultOptions: Object(i.a)({
                chart: {
                    padding: 0,
                    width: 700,
                    height: 150,
                    style: {
                        fontFamily: "'Open Sans', sans-serif"
                    },
                    backgroundColor: ""
                },
                title: {
                    text: ""
                },
                credits: {
                    enabled: !1
                },
                legend: {
                    enabled: !1
                },
                plotOptions: {
                    column: {
                        animation: !1
                    }
                },
                exporting: {
                    enabled: !1
                },
                xAxis: Object(i.a)({
                    labels: {
                        rotation: 0,
                        style: {
                            textOverflow: "none"
                        }
                    },
                    tickInterval: 7
                }, "labels", {
                    enabled: !1
                }),
                yAxis: {
                    allowDecimals: !1,
                    alternateGridColor: "rgba(230,230,230,.125)",
                    gridLineColor: "#dadada",
                    tickInterval: 1,
                    ceiling: 5,
                    min: 0,
                    max: 5
                }
            }, "plotOptions", {
                series: {
                    borderWidth: 0
                }
            }),
            initialize: function(t) {
                t.options ? this.options = s.a.extend({}, this.defaultOptions, t.options) : this.options = s.a.extend({}, this.defaultOptions)
            },
            render: function() {
                return this.chartObj = new c.a.Chart(this.el,this.options),
                this
            }
        });
        e.a = h
    },
    2442: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(3218)
          , c = a.n(l);
        n.a.View.extend({
            template: r.a.template(c.a),
            initialize: function(t) {},
            render: function() {
                this.$el.html(this.template({
                    Localizer: o.a
                }))
            }
        })
    },
    2443: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i);
        e.a = r.a.Model.extend({
            url: function() {
                return "/proxy/metrics-service/metrics/trainingloadbalance/latest/" + this.calendarDate
            },
            initialize: function(t) {
                this.calendarDate = t.calendarDate
            },
            hasData: function() {
                return this.get("recordedDevices") && this.get("recordedDevices").length > 0 && this.get("metricsTrainingLoadBalanceDTOMap")
            }
        })
    },
    2444: function(t, e, a) {
        "use strict";
        var i = a(6)
          , r = {
            categoriesMapper: function() {
                return {
                    2: {
                        color: "#c84b4b",
                        type: "poor",
                        name: i.a.localize("poor")
                    },
                    3: {
                        color: "#e69637",
                        type: "fair",
                        name: i.a.localize("fair")
                    },
                    4: {
                        color: "#64af5a",
                        type: "good",
                        name: i.a.localize("good")
                    },
                    5: {
                        color: "#328cb4",
                        type: "excellent",
                        name: i.a.localize("excellent")
                    },
                    6: {
                        color: "#735596",
                        type: "superior",
                        name: i.a.localize("superior")
                    }
                }
            }
        };
        e.a = r
    },
    2445: function(t, e, a) {
        "use strict";
        e.a = {
            getAgeRange: function(t) {
                return t < 20 ? "Under 20" : t < 30 ? "20-29" : t < 40 ? "30-39" : t < 50 ? "40-49" : t < 60 ? "50-59" : t < 70 ? "60-69" : t < 80 ? "70-79" : "80+"
            }
        }
    },
    2446: function(t, e, a) {
        var i = a(3261);
        "string" === typeof i && (i = [[t.i, i, ""]]);
        var r = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a(37)(i, r);
        i.locals && (t.exports = i.locals)
    },
    2447: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(27)
              , r = a(223)
              , s = a(2067)
              , n = a(3274)
              , o = a(3275)
              , l = s.a.extend({
                render: function() {
                    var e = this.report.get("metricId");
                    this.reportUrl = "/report/" + e + "/" + this.reportType + "/" + this.activeTab;
                    var a = this.template(this.commonTemplateParams);
                    t(this.el).html(a),
                    this.$(".vo2-info-trigger").hide(),
                    this.$(".ftp-filter").hide(),
                    this.$(".watts-filter").hide(),
                    this.$(".hrv-info-trigger").hide(),
                    this.hideThreeMonthsTab(),
                    this.activeTab && "undefined" !== this.activeTab || (this.activeTab = "last_seven_days"),
                    this.$("#tab-pane0").hide(),
                    this.hideSixMonthsTab(),
                    this.hideTwelveMonthsTab(),
                    this.determineAndProcessActiveTab(),
                    r.a.renderTooltips.call(this)
                },
                determineChartView: function() {
                    this.setReportDateRange(),
                    this.disableIconsAndSetChartPlaceholder(),
                    this.reportMetrics && this.reportMetrics.length > 0 ? this.initializeChartView(o.a, "line", 28, !1) : this.initializeEmptyChartView(),
                    this.reportChartView.render()
                },
                readyToRender: function() {
                    this.reportMetricsFetched && this.determineChartView()
                },
                retrieveChartMetrics: function() {
                    var t = this;
                    this.reportMetricsFetched = !1,
                    this.metricType = "wellness",
                    this.groupResults = !1,
                    this.configureWeeklyViewAs28Days();
                    var e = new n.a({
                        aggregation: -1 !== ["daily", "weekly"].indexOf(this.metricPeriod) ? "daily" : "monthly",
                        startDate: this.startDate,
                        untilDate: this.untilDate
                    })
                      , a = new i.a;
                    a.addModel({
                        model: e,
                        required: !0
                    }),
                    a.bind(i.a.Events.SYNCHRONIZED, function() {
                        t.onReportMetricsReadyToRender(e)
                    }, this),
                    a.fetchModels()
                }
            });
            e.a = l
        }
        ).call(this, a(10))
    },
    3164: function(t, e, a) {
        "use strict";
        a(7);
        var i = a(6)
          , r = a(13)
          , s = a(65)
          , n = a(48)
          , o = a(1302)
          , l = a(1295);
        e.a = l.a.extend({
            determineYAxisTitle: function() {
                switch (this.report.metricName) {
                case o.a.ACTIVITY_NUMBER_OF_ACTIVITIES:
                    return i.a.localize("activities");
                case o.a.ACTIVITY_TOTAL_DISTANCE:
                    return "swimming" == this.reportType ? "metric" == this.userPreferences.get("measurementSystem") ? i.a.localize("meter") : i.a.localize("yard") : "metric" == this.userPreferences.get("measurementSystem") ? i.a.localize("label_distance_unit_metric") : i.a.localize("label_distance_unit_statute");
                case o.a.ACTIVITY_TOTAL_DURATION:
                    return i.a.localize("label_duration_unit");
                case o.a.ACTIVITY_ACTIVE_CALORIES:
                    return i.a.localize("label_calories")
                }
            },
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", i.a.localize("activity.type.label"), i.a.localize("value.label")]
                }
            },
            customizeOptions: function() {
                var t = this;
                switch (this.report.metricName) {
                case o.a.ACTIVITY_NUMBER_OF_ACTIVITIES:
                    this.options.plotOptions = {
                        series: {
                            showCheckbox: !1,
                            selected: !0,
                            states: {
                                hover: {
                                    enabled: !0,
                                    halo: null
                                }
                            }
                        }
                    };
                    break;
                case o.a.ACTIVITY_TOTAL_DISTANCE:
                case o.a.ACTIVITY_TOTAL_DURATION:
                case o.a.ACTIVITY_ACTIVE_CALORIES:
                    this.options.plotOptions = {
                        column: {
                            stacking: "normal",
                            dataLabels: {
                                enabled: !1,
                                color: "white"
                            }
                        },
                        series: {
                            stacking: "normal",
                            showCheckbox: !1,
                            selected: !0
                        }
                    }
                }
                switch (this.report.metricName) {
                case o.a.ACTIVITY_NUMBER_OF_ACTIVITIES:
                    this.options.tooltip = {
                        formatter: function() {
                            return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + this.y + " " + i.a.localize("activities")
                        }
                    };
                    break;
                case o.a.ACTIVITY_TOTAL_DISTANCE:
                    var e = "metric" == this.userPreferences.get("measurementSystem") ? i.a.localize("distance_unit_metric") : i.a.localize("distance_unit_statute");
                    "swimming" == t.reportType && (e = "metric" == this.userPreferences.get("measurementSystem") ? i.a.localize("distance.meter") : i.a.localize("distance.yard")),
                    this.options.yAxis.title.text = t.yAxisTitle,
                    this.options.tooltip = {
                        formatter: function() {
                            return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + r.a.formatDecimalNumber(this.y, 2) + " " + e + "<br/>" + i.a.localize("total") + ": " + r.a.formatDecimalNumber(Math.round(100 * this.point.stackTotal) / 100, 2) + " " + e
                        }
                    };
                    break;
                case o.a.ACTIVITY_TOTAL_DURATION:
                    e = i.a.localize("activity_duration_unit");
                    this.options.yAxis.title.text = t.yAxisTitle,
                    this.options.tooltip = {
                        formatter: function() {
                            var a = "<b>" + this.x + "</b><br/>"
                              , s = this.series.options && this.series.options.additionalData && null !== this.series.options.additionalData[this.point.index]
                              , o = this.series.options && null !== this.series.options.additionalLabelKey;
                            return a + (n.a.isBreathworkActivity(t.reportType) ? (o ? i.a.localize(this.series.options.additionalLabelKey) : this.series.name) + ": " + (s ? this.series.options.additionalData[this.point.index] : r.a.formatDecimalNumber(this.y, 2) + " " + e) + "<br/>" : this.series.name + ": " + r.a.formatDecimalNumber(this.y, 2) + " " + e + "<br/>") + (i.a.localize("total") + ": " + r.a.formatDecimalNumber(Math.round(100 * this.point.stackTotal) / 100, 2) + " " + e)
                        }
                    };
                    break;
                case o.a.ACTIVITY_ACTIVE_CALORIES:
                    this.options.tooltip = {
                        formatter: function() {
                            return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + r.a.formatDecimalNumber(this.y, 0) + " " + i.a.localize("label_calories_abbr") + "<br/>" + i.a.localize("total") + ": " + r.a.formatDecimalNumber(this.point.stackTotal, 0) + " " + i.a.localize("label_calories_abbr")
                        }
                    }
                }
                this.options.legend.enabled = !0
            },
            processMetricList: function(t) {
                var e = t.get("running")
                  , a = t.get("cycling")
                  , r = t.get("swimming")
                  , n = t.get("walking")
                  , o = t.get("fitness_equipment")
                  , l = t.get("hiking")
                  , c = t.get("yoga")
                  , h = t.get("winter_sports")
                  , d = t.get("other")
                  , u = t.get("breathwork");
                if (e) {
                    this.chartSeries[s.a.Running] = {
                        color: "#11a9ed",
                        name: i.a.localize("activity_type_running"),
                        data: this.createZeroArray(this.metricPeriod)
                    },
                    this.activityType = "running";
                    for (var p = e.metricsMap[this.report.metricName], g = 0; g < p.length; g++)
                        this.addMetricToDataset(p[g])
                }
                if (a) {
                    this.chartSeries[s.a.Cycling] = {
                        color: "#ff0035",
                        name: i.a.localize("activity_type_cycling"),
                        data: this.createZeroArray(this.metricPeriod)
                    },
                    this.activityType = "cycling";
                    for (p = a.metricsMap[this.report.metricName],
                    g = 0; g < p.length; g++)
                        this.addMetricToDataset(p[g])
                }
                if (r) {
                    this.chartSeries[s.a.Swimming] = {
                        color: "#ff9e0d",
                        name: i.a.localize("activity_type_swimming"),
                        data: this.createZeroArray(this.metricPeriod)
                    },
                    this.activityType = "swimming";
                    for (p = r.metricsMap[this.report.metricName],
                    g = 0; g < p.length; g++)
                        this.addMetricToDataset(p[g])
                }
                if (n) {
                    this.chartSeries[s.a.Walking] = {
                        color: "#72ea24",
                        name: i.a.localize("activity_type_walking"),
                        data: this.createZeroArray(this.metricPeriod)
                    },
                    this.activityType = "walking";
                    for (p = n.metricsMap[this.report.metricName],
                    g = 0; g < p.length; g++)
                        this.addMetricToDataset(p[g])
                }
                if (o) {
                    this.chartSeries[s.a.FitnessEquip] = {
                        color: "#0e334c",
                        name: i.a.localize("activity_type_fitness_equipment"),
                        data: this.createZeroArray(this.metricPeriod)
                    },
                    this.activityType = "fitness_equipment";
                    for (p = o.metricsMap[this.report.metricName],
                    g = 0; g < p.length; g++)
                        this.addMetricToDataset(p[g])
                }
                if (l) {
                    this.chartSeries[s.a.Hiking] = {
                        color: "#632d5c",
                        name: i.a.localize("activity_type_hiking"),
                        data: this.createZeroArray(this.metricPeriod)
                    },
                    this.activityType = "hiking";
                    for (p = l.metricsMap[this.report.metricName],
                    g = 0; g < p.length; g++)
                        this.addMetricToDataset(p[g])
                }
                if (c) {
                    this.chartSeries[s.a.Yoga] = {
                        color: "#632d5c",
                        name: i.a.localize("activity_type_yoga"),
                        data: this.createZeroArray(this.metricPeriod)
                    },
                    this.activityType = "yoga";
                    for (p = c.metricsMap[this.report.metricName],
                    g = 0; g < p.length; g++)
                        this.addMetricToDataset(p[g])
                }
                if (h) {
                    this.chartSeries[s.a.WinterSports] = {
                        color: "#004BA0",
                        name: i.a.localize("winter_sports"),
                        data: this.createZeroArray(this.metricPeriod)
                    },
                    this.activityType = "winter_sports";
                    for (p = h.metricsMap[this.report.metricName],
                    g = 0; g < p.length; g++)
                        this.addMetricToDataset(p[g])
                }
                if (u) {
                    this.chartSeries[s.a.Breathwork] = {
                        color: "#11BFED",
                        name: i.a.localize("activity_type_breathwork"),
                        data: this.createZeroArray(this.metricPeriod),
                        additionalData: this.createNullArray(this.metricPeriod)
                    },
                    this.activityType = "breathwork";
                    for (p = u.metricsMap[this.report.metricName],
                    g = 0; g < p.length; g++)
                        this.addMetricToDataset(p[g])
                }
                if (d) {
                    this.chartSeries[s.a.Other] = {
                        color: "#cf23b8",
                        name: i.a.localize("activity_type_other"),
                        data: this.createZeroArray(this.metricPeriod),
                        additionalData: this.createNullArray(this.metricPeriod)
                    },
                    this.activityType = "other";
                    for (p = d.metricsMap[this.report.metricName],
                    g = 0; g < p.length; g++)
                        this.addMetricToDataset(p[g])
                }
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                if (e >= 0) {
                    if (this.chartSeries[this.activityType])
                        switch (this.report.metricName) {
                        case o.a.ACTIVITY_NUMBER_OF_ACTIVITIES:
                            this.value = t.value;
                            break;
                        case o.a.ACTIVITY_TOTAL_DISTANCE:
                            "all" == this.reportType ? this.value = Math.round(100 * r.a.convertDistance(t.value)) / 100 : this.value = Math.round(100 * r.a.convertDistance(t.value, this.activityType)) / 100;
                            break;
                        case o.a.ACTIVITY_TOTAL_DURATION:
                            this.value = Math.round(t.value / 60 * 100) / 100,
                            null !== t.additionalValue && void 0 !== t.additionalValue && (this.additionalValue = t.additionalValue);
                            break;
                        case o.a.ACTIVITY_ACTIVE_CALORIES:
                            this.value = Math.round(r.a.convertCalories(t.value))
                        }
                    this.chartSeries[this.activityType].data[e] = this.value,
                    this.additionalValue && this.chartSeries[this.activityType].additionalData && this.chartSeries[this.activityType].additionalData.length > 0 && (this.chartSeries[this.activityType].additionalData[e] = this.additionalValue),
                    null !== t.additionalLabelKey && void 0 !== t.additionalLabelKey && (this.chartSeries[this.activityType].additionalLabelKey = t.additionalLabelKey),
                    this.exportData.rows[this.exportDataCount++] = {
                        values: [this.categories[e], i.a.localize(this.activityType), this.value]
                    }
                }
            }
        })
    },
    3165: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = (a(1869),
        a(1323))
          , c = a(3166)
          , h = a.n(c)
          , d = {
            EXERCISE_FILTER_SELECTED: "EXERCISE_FILTER_SELECTED"
        }
          , u = n.a.View.extend({
            template: r.a.template(h.a),
            events: {
                "change .chosen-select": "onExerciseSelected"
            },
            initialize: function(t) {
                this.metricsList = t.metricsList
            },
            render: function() {
                var t = l.a.getActivityAttributes(this.metricsList.activityTypeKey)
                  , e = t.allExercisesLabelKey ? o.a.localize(t.allExercisesLabelKey) : o.a.localize("all_exercises");
                this.$el.html(this.template({
                    Localizer: o.a,
                    defaultText: e,
                    exercises: this.buildExerciseList()
                })),
                this.setupChosen()
            },
            setExerciseList: function(t) {
                this.metricsList = t
            },
            setupChosen: function() {
                this.$(".chosen-select").chosen({
                    disable_search_threshold: 1,
                    search_contains: !0,
                    no_results_text: o.a.localize("exercise_not_found"),
                    width: "95%"
                })
            },
            buildExerciseList: function() {
                var t = []
                  , e = {
                    UNKNOWN: !0
                };
                return r.a.each(this.metricsList.models, function(a) {
                    r.a.each(a.get("exerciseSummaries"), function(a) {
                        var i = a.subCategory || a.category;
                        e[i] || (t.push({
                            exerciseName: a.subCategory ? o.a.localize("exercise_type_" + a.subCategory) : o.a.localize("category_type_" + a.category),
                            exerciseKey: i
                        }),
                        e[i] = !0)
                    })
                }),
                t = r.a.sortBy(t, "exerciseName")
            },
            onExerciseSelected: function() {
                var t = this.$(".chosen-select").val();
                this.trigger(d.EXERCISE_FILTER_SELECTED, t)
            }
        });
        u.Events = d,
        e.a = u
    },
    3166: function(t, e) {
        t.exports = '<select class="chosen-select">\n    <option value=""><%- defaultText %></option>\n<% for(var i = 0; i < exercises.length; i++) { %>\n    <option value="<%- exercises[i].exerciseKey %>"><%- exercises[i].exerciseName %></option>\n<% } %>\n</select>'
    },
    3167: function(t, e, a) {
        "use strict";
        a(7),
        a(9);
        var i = a(6)
          , r = a(13)
          , s = a(1295);
        e.a = s.a.extend({
            determineYAxisTitle: function() {
                return i.a.localize("label_floors_climbed_unit")
            },
            customizeOptions: function() {
                var t = this;
                this.options.plotOptions = {
                    column: {
                        dataLabels: {
                            enabled: !1,
                            color: "white"
                        }
                    },
                    series: {
                        stacking: "normal",
                        showCheckbox: !1,
                        selected: !0
                    }
                },
                this.options.tooltip = {
                    formatter: function() {
                        var e = t.goalSeries.goal.data[this.point.x]
                          , a = t.chartSeries.complete.data[this.point.x]
                          , s = t.chartSeries.descend.data[this.point.x];
                        return a || (a = t.chartSeries.incomplete.data[this.point.x]),
                        "<b>" + this.x + "</b><br/>" + i.a.localize("floors_ascended") + ": " + r.a.formatDecimalNumber(a, 0) + " " + i.a.localize("label_floors_climbed_unit") + "<br/>" + i.a.localize("label_floors_climbed_goal") + ": " + r.a.formatDecimalNumber(e, 0) + " " + i.a.localize("label_floors_climbed_unit") + "<br/>" + i.a.localize("floors_descended") + ": " + r.a.formatDecimalNumber(-s, 0) + " " + i.a.localize("label_floors_climbed_unit")
                    }
                },
                this.options.yAxis = {
                    min: null,
                    title: null,
                    labels: {
                        formatter: function() {
                            return Math.abs(this.value)
                        }
                    }
                }
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                this.chartSeries.remaining = {
                    color: "#dddddd",
                    name: i.a.localize("step.remaining"),
                    data: this.createZeroArray(this.metricPeriod)
                },
                this.chartSeries.incomplete = {
                    color: "#11a9ed",
                    name: i.a.localize("floors_ascended"),
                    data: this.createZeroArray(this.metricPeriod)
                },
                this.chartSeries.complete = {
                    color: "#80ea40",
                    name: i.a.localize("floors_ascended"),
                    data: this.createZeroArray(this.metricPeriod)
                },
                this.chartSeries.descend = {
                    color: "#b0e1f7",
                    name: i.a.localize("floors_descended"),
                    data: this.createZeroArray(this.metricPeriod)
                },
                this.goalSeries = {},
                this.goalSeries.goal = {
                    name: i.a.localize("step.goal"),
                    data: this.createZeroArray(this.metricPeriod)
                }
            },
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", i.a.localize("floors_ascended"), i.a.localize("step.goal"), i.a.localize("floors_descended")]
                }
            },
            processMetricList: function(t) {
                this.metricsMap = t.get("metricsMap");
                var e = this.metricsMap.WELLNESS_FLOORS_ASCENDED;
                if (e)
                    for (var a = 0; a < e.length; a++)
                        this.addMetricToDataset(e[a])
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                if (e >= 0) {
                    var a = this.getGoalValue(e)
                      , i = this.getDescendValue(e)
                      , r = Math.floor(t.value);
                    this.exportData.rows[this.exportDataCount++] = {
                        values: [this.categories[e], r || 0, a || 0, i || 0]
                    },
                    r >= a ? (this.chartSeries.remaining.data[e] = 0,
                    this.chartSeries.complete.data[e] = r) : (this.chartSeries.remaining.data[e] = a - r,
                    this.chartSeries.incomplete.data[e] = r),
                    this.goalSeries.goal.data[e] = a,
                    this.chartSeries.descend.data[e] = -i
                }
            },
            getDescendValue: function(t) {
                for (var e = 0, a = this.metricsMap.WELLNESS_FLOORS_DESCENDED, i = 0; i < a.length; i++) {
                    var r = a[i];
                    if (this.determineDataIndex(r) == t) {
                        e = Math.floor(r.value);
                        break
                    }
                }
                return e
            },
            getGoalValue: function(t) {
                for (var e = 0, a = this.metricsMap.WELLNESS_USER_FLOORS_ASCENDED_GOAL, i = 0; i < a.length; i++) {
                    var r = a[i];
                    if (this.determineDataIndex(r) == t) {
                        e = Math.round(r.value);
                        break
                    }
                }
                return e
            }
        })
    },
    3168: function(t, e, a) {
        "use strict";
        a(7),
        a(9);
        var i = a(6)
          , r = a(13)
          , s = a(1295)
          , n = a(1302);
        e.a = s.a.extend({
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", this.yAxisTitle]
                }
            },
            determineYAxisTitle: function() {
                return i.a.localize("label_calories")
            },
            customizeOptions: function() {
                this.options.plotOptions = {
                    column: {
                        dataLabels: {
                            enabled: !1,
                            color: "white"
                        }
                    },
                    series: {
                        stacking: "normal",
                        showCheckbox: !1,
                        selected: !0
                    }
                },
                this.options.yAxis.title = {
                    text: this.yAxisTitle
                },
                this.options.tooltip = {
                    formatter: function() {
                        return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + r.a.formatDecimalNumber(this.y, 0)
                    }
                },
                this.report.metricName == n.a.FOOD_CALORIES_REMAINING && (this.options.yAxis.min = null)
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                this.chartSeries[0] = {
                    color: "#11a9ed",
                    name: this.yAxisTitle,
                    data: this.createZeroArray(this.metricPeriod)
                }
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                e >= 0 && this.chartSeries[0] && (this.chartSeries[0].data[e] = t.value,
                this.exportData.rows[this.exportDataCount++] = {
                    values: [this.categories[e], t.value]
                })
            }
        })
    },
    3169: function(t, e, a) {
        "use strict";
        a(7),
        a(9);
        var i = a(6)
          , r = a(1295).a.extend({
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", i.a.localize("WELLNESS_AVERAGE_STRESS")]
                }
            },
            determineYAxisTitle: function() {
                return i.a.localize("WELLNESS_AVERAGE_STRESS")
            },
            customizeOptions: function() {
                this.options.plotOptions = {
                    series: {
                        showCheckbox: !1,
                        selected: !0,
                        states: {
                            hover: {
                                enabled: !0,
                                halo: null
                            }
                        }
                    }
                },
                this.options.yAxis.title = {
                    text: this.determineYAxisTitle()
                },
                this.options.tooltip = {
                    formatter: function() {
                        return "<b>" + this.x + "</b><br/>" + i.a.localize("stress_level") + ": " + this.y
                    }
                },
                this.minAvgValue && (this.options.yAxis.plotLines = [{
                    value: this.minAvgValue,
                    color: "black",
                    dashStyle: "solid",
                    width: 2,
                    label: {
                        text: i.a.localize("average") + " = " + this.minAvgValue
                    },
                    zIndex: 5
                }])
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                this.chartSeries.stress = {
                    type: "line",
                    name: i.a.localize("label_stress"),
                    data: this.createNullArray(this.metricPeriod),
                    color: "#11a9ed"
                }
            },
            processMetricList: function(t) {
                var e = t.get("metricsMap").WELLNESS_AVERAGE_STRESS
                  , a = 0
                  , i = 0;
                if (this.seriesType = "stress",
                e)
                    for (var r = 0, s = e.length; r < s; r++)
                        e[r].value && e[r].value >= 0 && (this.addMetricToDataset(e[r]),
                        a += e[r].value,
                        i++);
                i > 0 && (this.minAvgValue = Math.round(a / i))
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                e >= 0 && null !== t.value && t.value >= 0 && this.chartSeries[this.seriesType] && (this.chartSeries[this.seriesType].data[e] = t.value,
                this.exportData.rows[this.exportDataCount++] = {
                    values: [this.categories[e], t.value]
                })
            }
        });
        e.a = r
    },
    3170: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(6)
          , n = a(13)
          , o = a(1295)
          , l = a(1323)
          , c = a(15)
          , h = a.n(c);
        e.a = o.a.extend({
            determineYAxisTitle: function() {
                return s.a.localize("label_body_battery_levels")
            },
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", s.a.localize("WELLNESS_BODYBATTERY_CHARGED")]
                }
            },
            customizeOptions: function() {
                this.setYAxisOptions(),
                this.setXAxisOptions(),
                this.setPlotOptions(),
                this.formatTooltip()
            },
            setYAxisOptions: function() {
                this.options.yAxis = {
                    min: 0,
                    labels: {
                        formatter: function() {
                            return n.a.formatDecimalNumber(this.value, 0)
                        }
                    },
                    title: {
                        text: s.a.localize("label_body_battery_levels")
                    },
                    gridLineWidth: 0,
                    tickPixelInterval: 25,
                    tickPositioner: function() {
                        return [0, 25, 50, 75, 100]
                    }
                }
            },
            setXAxisOptions: function() {
                this.options.xAxis.showFirstLabel = !0,
                this.options.xAxis.showLastLabel = !0,
                this.options.xAxis.labels = {
                    align: "center"
                },
                this.options.xAxis.gridLineWidth = 1
            },
            setPlotOptions: function() {
                this.options.plotOptions = {
                    series: {
                        marker: {
                            radius: "widget" === this.chartFormat ? 1 : 3
                        },
                        states: {
                            hover: {
                                enabled: !0,
                                halo: null
                            }
                        }
                    }
                }
            },
            formatTooltip: function() {
                this.options.tooltip = {
                    formatter: function() {
                        return "<b>" + this.point.name + "</b><br/>" + s.a.localize("body_battery") + ": " + this.y
                    }
                }
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                this.chartSeries.bodyBattery = {
                    color: "#73D4FF",
                    lineWidth: 1.5,
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [[0, "rgba(115,212,255,0.50)0%"], [1, "rgba(255,255,255,0.60)80%"]]
                    },
                    name: s.a.localize("bodyBattery"),
                    data: this.createZeroArray()
                }
            },
            getXAxisCategories: function() {
                this.getDailyCategories()
            },
            getDailyCategories: function() {
                this.categories = [];
                var t = 1 - (new Date).getDay();
                t > 0 && (t = -6);
                for (var e = t + 6, a = t; a <= e; a++) {
                    var i = h()().add(a, "days").isoWeekday();
                    i > 6 && (i -= 7);
                    var r = s.a.localize("day." + i + ".short");
                    this.categories.push(r)
                }
            },
            determineDataIndex: function(t) {
                return this.calculateDailyDataIndex(t, 7)
            },
            calculateDailyDataIndex: function(t, e) {
                var a = l.a.formatDate(this.currentDateOffset)
                  , i = e - l.a.determineNumberOfDays(t, a);
                return i < 0 || i > 6 ? -1 : i
            },
            compileStats: function() {
                this.formattedBBData = [],
                this.metricList.each(this.processMetricList, this),
                this.chartSeries.bodyBattery.data = this.formattedBBData
            },
            processMetricList: function(t) {
                var e = this.getSortedDailyBBPoints(t.get("bodyBatteryValuesArray"))
                  , a = t.get("date");
                this.addMetricToDataset(e, a)
            },
            getSortedDailyBBPoints: function(t) {
                return r.a.sortBy(t, function(t) {
                    return t[0]
                })
            },
            addMetricToDataset: function(t, e) {
                for (var a = this.determineDataIndex(e), i = t.length, r = 0; r < i; r++) {
                    var s = t[r];
                    this.formattedBBData.push(this.getDataForDataIndex(s, e, r)),
                    this.exportData.rows[this.exportDataCount++] = {
                        values: [this.categories[a], s[1]]
                    }
                }
            },
            getDataForDataIndex: function(t, e, a) {
                var i = (new Date(e).getTime() - new Date(this.metricList.startDate).getTime()) / 864e5 + a / 6;
                return {
                    x: i - .49,
                    y: t[1],
                    name: this.categories[Math.floor(i)]
                }
            }
        })
    },
    3171: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(1)
              , r = a(2)
              , s = a(15)
              , n = a.n(s)
              , o = a(13)
              , l = a(6)
              , c = a(23)
              , h = a(85)
              , d = a(1302)
              , u = a(3172)
              , p = a(1297)
              , g = a(3173)
              , m = a.n(g)
              , f = a(2437)
              , v = f.a.extend({
                getYAxisConfig: function() {
                    var t = this
                      , e = this.getElevationChartData()
                      , a = this.getMinElevation(e)
                      , i = this.getMaxElevation(e)
                      , r = f.a.prototype.getYAxisConfig.apply(this, arguments);
                    return r.push({
                        labels: {
                            formatter: function() {
                                var t = o.a.convertElevation(this.value)
                                  , e = o.a.personalizeElevation(this.value);
                                return t < 1e3 ? e : (t / 1e3).toFixed(1) + "k"
                            },
                            x: 2,
                            align: "left"
                        },
                        title: {
                            text: null
                        },
                        opposite: !0,
                        allowDecimals: !1,
                        max: i,
                        min: a,
                        endOnTick: !1,
                        gridLineWidth: 0,
                        tickPositioner: function() {
                            var e = i - a;
                            return t.isWidgetFormat() ? [Math.min(a, 0), Math.round(Math.min(a, 0) + .5 * e), i] : [Math.min(a, 0), Math.round(Math.min(a, 0) + .25 * e), Math.round(Math.min(a, 0) + .5 * e), Math.round(Math.min(a, 0) + .75 * e), i]
                        }
                    }),
                    r
                },
                getTooltipConfig: function(e) {
                    var a = f.a.prototype.getTooltipConfig.apply(this, arguments)
                      , s = this;
                    return Object(r.a)({}, a, {
                        formatter: function() {
                            var a = this.x
                              , r = a;
                            r = s.isSevenDay() ? new n.a(a).startOf("hour").toDate().getTime() : new n.a(a).startOf("day").toDate().getTime();
                            var c = s.formatDate(r)
                              , h = e.find(function(t) {
                                return t[0] === r
                            })
                              , d = s.getElevationChartData().find(function(t) {
                                return a === t[0]
                            })
                              , u = t.template(m.a)
                              , g = h ? h[1] : void 0
                              , f = Object(p.b)(g, !0);
                            return u(Object(i.a)({
                                dateValue: c,
                                color: f,
                                spoValue: h ? h[1] : "",
                                Localizer: l.a,
                                elevationValue: d ? o.a.personalizeElevation(d[1]) + " " + l.a.localize(o.a.getElevationUnitKey()) : ""
                            }, "Localizer", l.a))
                        }
                    })
                },
                buildSeriesData: function() {
                    var t = this.getElevationChartData()
                      , e = f.a.prototype.buildSeriesData.apply(this, arguments);
                    return e.push({
                        name: l.a.localize("pulse_ox_acclimation_chart_label_elevation"),
                        type: "areaspline",
                        yAxis: 1,
                        data: t,
                        tooltip: {
                            valueSuffix: "k"
                        },
                        marker: {
                            enabled: !1,
                            states: {
                                hover: {
                                    enabled: !1
                                }
                            }
                        },
                        states: {
                            hover: {
                                enabled: !1
                            }
                        },
                        color: u.a.COLORS.ELEVATION,
                        fillOpacity: 1,
                        threshold: -1 / 0
                    }),
                    e
                },
                getMaxElevation: function(t) {
                    var e = 0;
                    return t.forEach(function(t) {
                        t[1] > e && (e = t[1])
                    }),
                    e < 762 && (e = 762),
                    Math.ceil(2 * e)
                },
                getMinElevation: function(t) {
                    var e = 1e4;
                    return t.forEach(function(t) {
                        t[1] < e && (e = t[1])
                    }),
                    e < 0 ? Math.floor(2 * e) : 0
                },
                getElevationChartData: function() {
                    return this.metricList.get("monitoringEnvironmentValuesArray") || []
                },
                initExportData: function() {
                    this.exportData = {
                        title: l.a.localize(d.a.OUTDOOR_PULSE_OX_ACCLIMATION),
                        rows: []
                    }
                },
                getExportData: function() {
                    var t = this
                      , e = this.getElevationChartData();
                    this.initExportData(),
                    this.addExportData(["", l.a.localize("pulse_ox_acclimation_chart_label_elevation"), l.a.localize("pulse_ox_acclimation_label_spo2")]);
                    var a = this.getSPOChartData();
                    if (0 === a.length)
                        for (var i = this.reduceElevationData(e), r = 0; r < i.length; r++) {
                            var s = i[r]
                              , n = this.formatDateTime(s[0])
                              , o = this.formatElevationData(s[1]);
                            this.addExportData([n, o, "--"])
                        }
                    else
                        for (var c = function(i) {
                            var r = a[i]
                              , s = t.formatDateTime(r[0])
                              , n = r[1]
                              , o = e.find(function(t) {
                                return r[0] === t[0]
                            })
                              , l = t.formatElevationData(o ? o[1] : null)
                              , c = n + "%";
                            t.addExportData([s, l, c])
                        }, h = 0; h < a.length; h++)
                            c(h);
                    return this.exportData
                },
                reduceElevationData: function(t) {
                    var e = this;
                    return t.length > 0 ? t.reduce(function(t, a) {
                        var i = e.formatDateTime(a[0])
                          , r = t[t.length - 1];
                        return i === e.formatDateTime(r[0]) ? (t.sum = t.sum > 0 ? t.sum + a[1] : r[1] + a[1],
                        t.number = t.number > 1 ? t.number + 1 : 2) : (r[1] = Math.round(t.sum / t.number),
                        t.sum = 0,
                        t.number = 1,
                        t.push(a)),
                        t
                    }, [t[0]]) : []
                },
                formatDateTime: function(t) {
                    var e, a;
                    return this.isSevenDay() ? (e = new n.a(t).startOf("hour").toDate().getTime(),
                    a = c.a.formatDate(h.a.parseEpoch(e)) + " " + this.formatDate(e, !0)) : (e = new n.a(t).startOf("day").toDate().getTime(),
                    a = this.formatDate(e, !0)),
                    a
                },
                formatElevationData: function(t) {
                    return t ? '"' + o.a.personalizeElevation(t) + '" ' + l.a.localize(o.a.getElevationUnitKey()) : o.a.personalizeElevation(null)
                }
            });
            e.a = v
        }
        ).call(this, a(7))
    },
    3172: function(t, e, a) {
        "use strict";
        e.a = {
            COLORS: {
                ELEVATION: "#C7C7C7"
            }
        }
    },
    3173: function(t, e) {
        t.exports = "<div class=\"pulse-ox-tooltip-view\">\n    <div><div class=\"<%- 'pulse-ox-chip ' + color %>\"></div><div><%- spoValue ? spoValue + '%' : Localizer.localize('pulse_ox_chart_unmeasurable') %> </div></div>\n    <div class=\"pulse-ox-time\"><%- dateValue %></div>\n    <div><%- elevationValue %></div>\n</div>"
    },
    3174: function(t, e) {
        t.exports = '<div id="week" class="tab-pane pulse-ox-table">\n    <div id="pulse-ox-7d-container">\n        <div id="spo2-7d"></div>\n    </div>\n</div>'
    },
    3175: function(t, e) {
        t.exports = "<div class=\"pulse-ox-tooltip-view\">\n    <div><div class=\"<%- 'pulse-ox-chip ' + color %>\"></div><div><%- spoValue ? spoValue + '%' : Localizer.localize('pulse_ox_chart_unmeasurable') %> </div></div>\n    <div class=\"pulse-ox-time\"><%- dateValue %></div>\n</div>"
    },
    3176: function(t, e, a) {
        "use strict";
        var i = a(2437).a.extend();
        e.a = i
    },
    3177: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(13)
          , c = a(27)
          , h = a(1870)
          , d = a(38)
          , u = a(366)
          , p = a(2438)
          , g = a(1715)
          , m = a(1302)
          , f = a(85)
          , v = a(3178)
          , T = a(3180)
          , _ = a.n(T)
          , A = a(23)
          , y = {
            NO_DATA_AVAILABLE: "NO_DATA_AVAILABLE"
        }
          , C = n.a.View.extend({
            initialize: function(t) {
                this.chartFormat = t.chartFormat,
                this.report = t.report,
                this.reportType = t.reportType,
                this.categories = null,
                this.modelSynchronizer = new c.a,
                this.ftpMaxToggle = t.ftpMaxToggle || "ftp-watts",
                this.weight = null,
                this.loaded = !1,
                this.latestUserBiometrics = new h.a({
                    displayName: d.a.get("displayName")
                }),
                this.userBiometricRanges = new p.a({
                    range: p.a.BiometricRangeConstants.FTP_POWER
                }),
                this.template = r.a.template(_.a)
            },
            getChartOptions: function() {
                var t = {
                    chart: {
                        renderTo: "report-graph",
                        width: 231,
                        height: "widget" == this.chartFormat ? 176 : 198
                    },
                    title: {
                        text: o.a.localize("max_avg_power_unit") + "/" + o.a.localize("weight_unit_metric")
                    },
                    plotOptions: {
                        gauge: {
                            dataLabels: {
                                formatter: function() {
                                    return this.y.toFixed(2)
                                }
                            }
                        }
                    }
                }
                  , e = this;
                return "widget" === this.chartFormat && (t.chart.events = {
                    click: function(t) {
                        t.preventDefault();
                        var a = "/report/" + e.report.metricId + "/" + e.reportType + "/current/" + e.ftpMaxToggle;
                        n.a.history.navigate(a, {
                            trigger: !0
                        })
                    }
                }),
                t
            },
            fetchWeight: function(t) {
                this.latestWeight = new g.a({
                    latestDate: A.a.formatISODate(f.a.parseISO(t))
                });
                var e = new c.a;
                e.addModel({
                    model: this.latestWeight,
                    required: !0
                }),
                e.on(c.a.Events.SYNCHRONIZED, function() {
                    this.loaded = !0,
                    this.latestWeight = this.latestWeight.toJSON(),
                    this._render()
                }, this),
                e.fetchModels()
            },
            render: function() {
                this.modelSynchronizer.addModel({
                    model: u.a,
                    required: !0
                }),
                this.modelSynchronizer.addModel({
                    model: this.latestUserBiometrics,
                    required: !0
                }),
                this.modelSynchronizer.addModel({
                    model: this.userBiometricRanges,
                    required: !0
                }),
                this.modelSynchronizer.on(c.a.Events.SYNCHRONIZED, function() {
                    this.ftp = this.latestUserBiometrics.get(h.a.BiometricConstants.FTP),
                    this.categories = this.userBiometricRanges.filterByGender("MALE" === u.a.get("gender") ? "Male" : "Female"),
                    this.ftp && this.ftp.bioDate ? this.fetchWeight(this.ftp.bioDate) : this.trigger(y.NO_DATA_AVAILABLE)
                }, this),
                this.modelSynchronizer.fetchModels()
            },
            _render: function() {
                if (null !== this.categories && 0 !== this.categories.length)
                    if (this.weight = null,
                    this.latestWeight && this.latestWeight.weight && (this.weight = l.a.convertWeightGramsToKg(this.latestWeight.weight)),
                    this.ftp && null != this.ftp.value && (this.currentMax = this.ftp.value),
                    this.$el.parent().find(".additionalPlaceHolder").children().length > 0 && this.$el.parent().find(".additionalPlaceHolder").first().remove(),
                    "ftp-watts" !== this.ftpMaxToggle && this.weight)
                        this.$el.show(),
                        null != this.currentMax && (this.currentMax = this.currentMax / Math.max(this.weight, 1),
                        this.currentMax = Math.round(100 * (this.currentMax + Number.EPSILON)) / 100),
                        this.gaugeChartView = new v.a({
                            chartOptions: this.getChartOptions(),
                            currentMax: this.currentMax,
                            categories: this.categories,
                            useStrictMinMax: !1,
                            categoriesMapper: {
                                Untrained: {
                                    color: "#c84b4b",
                                    type: "untrained",
                                    name: o.a.localize("ftp.untrained")
                                },
                                Fair: {
                                    color: "#e69637",
                                    type: "fair",
                                    name: o.a.localize("ftp.fair")
                                },
                                Good: {
                                    color: "#64af5a",
                                    type: "good",
                                    name: o.a.localize("ftp.good")
                                },
                                Excellent: {
                                    color: "#328cb4",
                                    type: "excellent",
                                    name: o.a.localize("ftp.excellent")
                                },
                                Superior: {
                                    color: "#735596",
                                    type: "superior",
                                    name: o.a.localize("ftp.superior")
                                }
                            },
                            categoryMetadata: {
                                categoryKey: "category",
                                categoryMin: "Untrained",
                                categoryMax: "Superior",
                                categoryRangeMin: "minValue",
                                categoryRangeMax: "maxValue"
                            },
                            containerClass: "widget" == this.chartFormat ? "reportChartPlaceholder" : "js-report-chart-current",
                            categoryExportCallback: function(t, e) {
                                return [o.a.localize("ftp." + t), e.get("minValue") <= 0 ? "" : e.get("minValue"), e.get("maxValue") <= 0 ? "" : e.get("maxValue")]
                            }
                        }),
                        this.gaugeChartView.setExportDataTitle(o.a.localize(m.a.ACTIVITY_MAX_FTP)),
                        this.gaugeChartView.addExportData(o.a.localize("ftp.my.title"), null != this.currentMax ? this.currentMax.toFixed(2) : ""),
                        this.gaugeChartView.addExportData(o.a.localize("ftp.max.category.label"), o.a.localize("ftp.max.range.min.label"), o.a.localize("ftp.max.range.max.label")),
                        this.gaugeChartView.addSeriesData({
                            name: o.a.localize("ftp.my.title"),
                            data: [this.currentMax]
                        }),
                        this.$el.parent().html(this.gaugeChartView.render().el);
                    else {
                        this.$el.hide();
                        var t = this.template({
                            ftpValue: null === this.ftp.value ? "--" : Math.round(this.ftp.value) + " " + o.a.localize("max_avg_power_unit"),
                            Localizer: o.a
                        });
                        0 == this.$el.parent().find(".additionalPlaceHolder").length && this.$el.parent().append('<span class="additionalPlaceHolder"></span>'),
                        this.$el.parent().find(".additionalPlaceHolder").html(t)
                    }
            },
            getExportData: function() {
                return this.gaugeChartView ? this.gaugeChartView.getExportData() : {
                    title: o.a.localize(m.a.ACTIVITY_MAX_FTP),
                    rows: [{
                        values: [o.a.localize("ftp.my.title") + ": " + this.ftp.value.toFixed(2) + " " + o.a.localize("max_avg_power_unit")]
                    }]
                }
            },
            isMetric: function() {
                return d.a.getMeasurementSystem() === l.a.MeasurementSystems.METRIC
            },
            displayWeightPrompt: function(t) {
                var e = !1
                  , a = null;
                return this.loaded && null === this.weight && "ftp-watts-kg" === t && (e = !0,
                a = this.formatFtpDate(this.ftp.bioDate)),
                {
                    displayWeightPrompt: e,
                    weightDate: a
                }
            },
            formatFtpDate: function(t) {
                return t.indexOf("T") > -1 && (t = t.substring(0, t.indexOf("T"))),
                t
            },
            log: function(t) {
                "undefined" !== typeof console && "undefined" !== typeof console.log && console.log((new Date).toString() + " - " + t)
            }
        });
        C.Events = y,
        e.a = C
    },
    3178: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(7)
              , r = a.n(i)
              , s = a(9)
              , n = a.n(s)
              , o = a(3179)
              , l = a.n(o)
              , c = a(1233)
              , h = a.n(c)
              , d = a(1256)
              , u = a.n(d)
              , p = a(1420)
              , g = a.n(p);
            u()(h.a),
            g()(h.a);
            var m = n.a.View.extend({
                tagName: "span",
                initialize: function(t) {
                    this.template = r.a.template(l.a),
                    this._series = [],
                    this.initExportData(),
                    this.currentMax = t.currentMax,
                    this.categories = t.categories,
                    this.useStrictMinMax = t.useStrictMinMax,
                    this.categoriesMapper = t.categoriesMapper,
                    this.categoryExportCallback = t.categoryExportCallback,
                    this._minValue = t.minValue || 0,
                    this._maxValue = t.maxValue || 100,
                    this.chartOptions = t.chartOptions || {},
                    this.categoryMetadata = t.categoryMetadata,
                    this.containerClass = t.containerClass,
                    this.setAttributes()
                },
                setAttributes: function() {
                    this.containerClass && this.$el.addClass(this.containerClass)
                },
                render: function() {
                    this.initializeChartSeries(),
                    this.highChartOptions = t.extend(!0, {}, this.getDefaultOptions(), this.chartOptions);
                    var e = this.template({});
                    return this.$el.html(e),
                    this.$el.highcharts(this.highChartOptions),
                    this
                },
                getChartOptions: function() {
                    return this.highChartOptions
                },
                setExportDataTitle: function(t) {
                    this._exportData.title = t
                },
                addSeriesData: function(t) {
                    this._series.push(t)
                },
                addExportData: function() {
                    this._exportData.rows.push({
                        values: arguments
                    })
                },
                initExportData: function() {
                    this._exportData = {
                        title: "",
                        rows: []
                    }
                },
                getExportData: function() {
                    return this._exportData
                },
                initializeChartSeries: function() {
                    this.chartSeries = {},
                    this.categories.each(function(t) {
                        var e = ""
                          , a = ""
                          , i = ""
                          , r = this.categoriesMapper[t.get(this.categoryMetadata.categoryKey)]
                          , s = 0
                          , n = 0;
                        r && (e = r.type,
                        a = r.color,
                        i = r.name,
                        null == (s = t.get(this.categoryMetadata.categoryRangeMin)) && (s = 0),
                        (null == (n = t.get(this.categoryMetadata.categoryRangeMax)) || n <= s) && (n = Math.max(null == this.currentMax ? 0 : this.currentMax, s + 1)),
                        this.useStrictMinMax || (t.get(this.categoryMetadata.categoryKey) === this.categoryMetadata.categoryMin ? (this._minValue = s,
                        this.currentMax < this._minValue && (this._minValue = this.currentMax,
                        s = this._minValue)) : t.get(this.categoryMetadata.categoryKey) === this.categoryMetadata.categoryMax && (this._maxValue = n,
                        this.currentMax > this._maxValue && (this._maxValue = this.currentMax,
                        n = this._maxValue))),
                        this.chartSeries[e] = {
                            color: a,
                            name: i,
                            from: s,
                            to: n,
                            thickness: "40%"
                        },
                        this.addExportData(this.categoryExportCallback(e, t)))
                    }, this),
                    this.chartSeries = r.a.toArray(this.chartSeries),
                    this.chartSeries = r.a.sortBy(this.chartSeries, function(t) {
                        return -t.to
                    }, this)
                },
                getDefaultOptions: function() {
                    return {
                        chart: {
                            type: "gauge",
                            backgroundColor: null,
                            spacingTop: 0,
                            spacingLeft: 0,
                            spacingRight: 0,
                            spacingBottom: 0,
                            marginTop: 22,
                            marginBottom: 0,
                            width: 231,
                            height: 176
                        },
                        credits: {
                            enabled: !1
                        },
                        title: {
                            text: "",
                            verticalAlign: "bottom",
                            x: 0,
                            y: -20,
                            style: {
                                fontSize: "10px",
                                color: "#888"
                            }
                        },
                        exporting: {
                            enabled: !1
                        },
                        pane: {
                            startAngle: -105,
                            endAngle: 105,
                            background: [{
                                backgroundColor: "transparent",
                                borderWidth: 0
                            }]
                        },
                        plotOptions: {
                            gauge: {
                                dataLabels: {
                                    color: "#222",
                                    borderWidth: 0,
                                    y: 15,
                                    x: 0,
                                    enabled: !0,
                                    style: {
                                        fontSize: "24px"
                                    },
                                    formatter: function() {
                                        return this.y.toFixed(0)
                                    }
                                },
                                dial: {
                                    backgroundColor: "#222",
                                    baseLength: "0%",
                                    baseWidth: 15,
                                    radius: "25%",
                                    topWidth: 1,
                                    rearLength: "0%",
                                    borderWidth: 1
                                },
                                pivot: {
                                    radius: "5%"
                                }
                            }
                        },
                        yAxis: {
                            min: this._minValue,
                            max: this._maxValue,
                            minorTickInterval: null,
                            lineColor: "#fafafa",
                            tickInterval: 1,
                            tickLength: 0,
                            tickPixelInterval: 30,
                            tickWidth: 1,
                            tickPosition: "inside",
                            tickColor: "#fafafa",
                            labels: {
                                step: 1,
                                distance: 7,
                                rotation: "auto",
                                style: {
                                    color: "#AAA",
                                    fontSize: "10px"
                                }
                            },
                            title: {
                                enabled: !1
                            },
                            plotBands: this.chartSeries
                        },
                        series: this._series
                    }
                }
            });
            e.a = m
        }
        ).call(this, a(10))
    },
    3179: function(t, e) {
        t.exports = '<span class="gauge-chart-placeholder"></span>'
    },
    3180: function(t, e) {
        t.exports = '<div class="data-block xlarge text-center ftp-info top-l bottom-s">\n    <div class="data-bit"><%- ftpValue %></div>\n    <span class="data-label"><%- Localizer.localize(\'ACTIVITY_MAX_FTP\') %></span>\n</div>'
    },
    3181: function(t, e) {
        t.exports = '<table class="table table-bordered vo2-estimates-table">\n    <thead>\n    <tr>\n        <th></th>\n        <th><%- Localizer.localize(\'vo2.males\') %> (<%- Localizer.localize(\'max_avg_power_unit\') %>/<%- weightUnit %>)</th>\n        <th><%- Localizer.localize(\'vo2.females\') %> (<%- Localizer.localize(\'max_avg_power_unit\') %>/<%- weightUnit %>)</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <th><span class="vo2-superior"></span><%- Localizer.localize(\'vo2.superior\') %></th>\n        <% var maleRange = getRangeByCategory("Superior", "Male"); %>\n        <% var femaleRange = getRangeByCategory("Superior", "Female"); %>\n        <td><%- Localizer.localize(\'ftp.greater\', Personalizer.formatDistance(maleRange.min)) %></td>\n        <td><%- Localizer.localize(\'ftp.greater\', Personalizer.formatDistance(femaleRange.min)) %></td>\n    </tr>\n\n    <tr>\n        <th><span class="vo2-excellent"></span><%- Localizer.localize(\'vo2.excellent\') %></th>\n        <% var maleRange = getRangeByCategory("Excellent", "Male"); %>\n        <% var femaleRange = getRangeByCategory("Excellent", "Female"); %>\n        <td><%- Localizer.localize(\'ftp.from\', Personalizer.formatDistance(maleRange.min), Personalizer.formatDistance(maleRange.max)) %></td>\n        <td><%- Localizer.localize(\'ftp.from\', Personalizer.formatDistance(femaleRange.min), Personalizer.formatDistance(femaleRange.max)) %></td>\n    </tr>\n\n    <tr>\n        <th><span class="vo2-good"></span><%- Localizer.localize(\'vo2.good\') %></th>\n        <% var maleRange = getRangeByCategory("Good", "Male"); %>\n        <% var femaleRange = getRangeByCategory("Good", "Female"); %>\n        <td><%- Localizer.localize(\'ftp.from\', Personalizer.formatDistance(maleRange.min), Personalizer.formatDistance(maleRange.max)) %></td>\n        <td><%- Localizer.localize(\'ftp.from\', Personalizer.formatDistance(femaleRange.min), Personalizer.formatDistance(femaleRange.max)) %></td>\n    </tr>\n\n    <tr>\n        <th><span class="vo2-fair"></span><%- Localizer.localize(\'vo2.fair\') %></th>\n        <% var maleRange = getRangeByCategory("Fair", "Male"); %>\n        <% var femaleRange = getRangeByCategory("Fair", "Female"); %>\n        <td><%- Localizer.localize(\'ftp.from\', Personalizer.formatDistance(maleRange.min), Personalizer.formatDistance(maleRange.max)) %></td>\n        <td><%- Localizer.localize(\'ftp.from\', Personalizer.formatDistance(femaleRange.min), Personalizer.formatDistance(femaleRange.max)) %></td>\n    </tr>\n\n    <tr>\n        <th><span class="vo2-poor"></span><%- Localizer.localize(\'ftp.untrained\') %></th>\n        <% var maleRange = getRangeByCategory("Untrained", "Male"); %>\n        <% var femaleRange = getRangeByCategory("Untrained", "Female"); %>\n        <td><%- Localizer.localize(\'ftp.less\', Personalizer.formatDistance(maleRange.max)) %></td>\n        <td><%- Localizer.localize(\'ftp.less\', Personalizer.formatDistance(femaleRange.max)) %></td>\n    </tr>\n\n    </tbody>\n</table>'
    },
    3182: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(7)
              , r = a.n(i)
              , s = a(9)
              , n = a.n(s)
              , o = a(6)
              , l = a(39)
              , c = a(2439)
              , h = a(3183)
              , d = a.n(h)
              , u = n.a.View.extend({
                events: {
                    "click .help-icon": "onHelpClicked"
                },
                initialize: function(t) {
                    this.template = r.a.template(d.a),
                    this.report = t.report,
                    this.chartFormat = t.chartFormat
                },
                render: function() {
                    var e = this.template({
                        Localizer: o.a,
                        report: this.report.toJSON(),
                        chartFormat: this.chartFormat
                    });
                    t(this.el).html(e)
                },
                onHelpClicked: function(t) {
                    t.preventDefault();
                    var e = new c.a({
                        chartFormat: "widget"
                    })
                      , a = new l.a({
                        modalTitle: o.a.localize("ACTIVITY_MAX_FTP"),
                        view: e,
                        showFooter: !1
                    });
                    e.once(c.a.Events.LOADED, function() {
                        a.render()
                    }, this),
                    e.render()
                }
            });
            e.a = u
        }
        ).call(this, a(10))
    },
    3183: function(t, e) {
        t.exports = '\x3c!--FTP Estimates Table--\x3e\n<% if (report.metricName == \'ACTIVITY_MAX_FTP\' && chartFormat == \'widget\'){ %>\n    <span class="help-icon">\n        <a data-toggle="modal" class="colored" data-target="#functional-threshold-power">\n            <i class="icon-help"></i>\n        </a>\n    </span>\n<% }                                             %>\n\n'
    },
    3184: function(t, e, a) {
        "use strict";
        var i, r = a(1), s = a(7), n = a.n(s), o = a(6), l = a(13), c = a(1295), h = a(366), d = a(2068), u = a(27), p = a(85), g = a(2069);
        e.a = c.a.extend((i = {
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", o.a.localize("ACTIVITY_MAX_FTP")]
                }
            },
            determineYAxisTitle: function() {
                return o.a.localize("max_avg_power_unit") + ("ftp-watts-kg" == this.ftpMaxToggle ? "/" + o.a.localize("weight_unit_metric") : "")
            },
            initializeChartSeries: function() {
                this.chartSeries = []
            },
            customizeOptions: function() {
                this.options.plotOptions = {
                    series: {
                        showCheckbox: !1,
                        selected: !0
                    }
                },
                this.options.yAxis.title.text = this.determineYAxisTitle();
                var t = this;
                if (this.options.tooltip = {
                    formatter: function() {
                        var e = "ftp-watts-kg" == t.ftpMaxToggle ? this.y.toFixed(2) : Math.round(this.y);
                        return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + e + " " + o.a.localize("max_avg_power_unit") + ("ftp-watts-kg" == t.ftpMaxToggle ? "/" + o.a.localize("weight_unit_metric") : "")
                    }
                },
                "widget" == this.chartFormat) {
                    t = this;
                    this.options.chart.events = {
                        click: function(e) {
                            e.preventDefault();
                            var a = "/report/" + t.report.metricId + "/" + t.reportType + "/" + t.activeTab;
                            "ftp-watts-kg" == t.ftpMaxToggle && (a += "/ftp-watts-kg"),
                            Backbone.history.navigate(a, {
                                trigger: !0
                            })
                        }
                    }
                }
                this.options.legend.enabled = !1
            }
        },
        Object(r.a)(i, "initializeChartSeries", function() {
            this.chartSeries = {},
            this.chartSeries.ftp = {
                name: o.a.localize("widget_title_ACTIVITY_MAX_FTP"),
                type: "line",
                color: "#80ea40",
                data: this.createNullArray()
            }
        }),
        Object(r.a)(i, "log", function(t) {
            "undefined" !== typeof console && "undefined" !== typeof console.log && console.log((new Date).toString() + " - " + t)
        }),
        Object(r.a)(i, "addMetricToDataset", function(t) {
            var e = this.determineDataIndex(t);
            if (e >= 0 && null != t.value) {
                var a = (n.a.isUndefined(t.startDateOfWeek) ? n.a.isUndefined(t.calendarDate) ? [t.month.year + "-" + t.month.monthId + "-1"] : t.calendarDate.split(" ") : t.startDateOfWeek.split(" "))[0].split("-")
                  , i = new Date(a[0],a[1] - 1,a[2],0,0,0)
                  , r = null
                  , s = null;
                "ftp-watts" == this.ftpMaxToggle ? (r = t.value,
                s = o.a.localize("max_avg_power_unit")) : (r = this.convertToWattsPerKg(t.lookupDate, t.value),
                s = o.a.localize("max_avg_power_unit") + "/" + o.a.localize("weight_unit_metric")),
                "ftp-watts-kg" == this.ftpMaxToggle && r == t.value ? (this.log("Can't find a weight for ftp-watts-kg lookupDate: " + t.lookupDate + ", metric.value: " + t.value),
                r = null) : this.exportData.rows[this.exportDataCount++] = {
                    values: [l.a.personalizeMonth(i, o.a), r.toFixed(2) + " " + s]
                },
                this.chartSeries.ftp.data[e] = r
            }
        }),
        Object(r.a)(i, "render", function() {
            var t = this.getDateRanges();
            this.weights = new d.a({
                dates: t
            }),
            this.modelSynchronizer.addModel({
                model: h.a,
                required: !0
            }),
            this.modelSynchronizer.addModel({
                model: this.weights,
                required: !0
            }),
            this.modelSynchronizer.on(u.a.Events.SYNCHRONIZED, function() {
                this.weights = this.weights.toJSON(),
                n.a.each(this.weights, function(t) {
                    t.parsedDate = p.a.parseISO(t.requestDate)
                }, this),
                c.a.prototype.render.call(this),
                this.checkForSeriesData()
            }, this),
            this.modelSynchronizer.fetchModels()
        }),
        Object(r.a)(i, "getDateRanges", function() {
            var t = [];
            return this.metricList.each(function(e) {
                var a = e.get("metricsMap").ACTIVITY_MAX_FTP;
                n.a.each(a, function(e) {
                    if (e.value > 0) {
                        var a = (n.a.isUndefined(e.startDateOfWeek) ? n.a.isUndefined(e.calendarDate) ? [e.month.year + "-" + e.month.monthId + "-1"] : e.calendarDate.split(" ") : e.startDateOfWeek.split(" "))[0].split("-")
                          , i = new Date(a[0],a[1] - 1,a[2],0,0,0)
                          , r = new Date(i.getFullYear(),i.getMonth() + 1,0);
                        e.lookupDate = r,
                        t.push(r)
                    }
                })
            }),
            t
        }),
        Object(r.a)(i, "initializeChart", function(t) {
            this.ftpMaxToggle = t.ftpMaxToggle,
            this.modelSynchronizer = new u.a,
            this.emptyChartView = null
        }),
        Object(r.a)(i, "getWeight", function(t) {
            var e = 0;
            if ("monthly" == this.metricPeriod || "yearly" == this.metricPeriod) {
                var a = new Date(t.getFullYear(),t.getMonth() + 1,0);
                t = a
            }
            var i = t
              , r = n.a.find(this.weights, function(t) {
                var e = t.parsedDate;
                return null != e && e.getFullYear() == i.getFullYear() && e.getDate() == i.getDate() && e.getMonth() == i.getMonth()
            }, this);
            return r && (e = l.a.convertWeightGramsToKg(r.weight)),
            e
        }),
        Object(r.a)(i, "convertToWattsPerKg", function(t, e) {
            var a = this.getWeight(t);
            return a > 0 ? e / a : e
        }),
        Object(r.a)(i, "toggle", function(t) {
            this.ftpMaxToggle = t,
            c.a.prototype.initExportData.call(this),
            c.a.prototype.render.call(this),
            this.checkForSeriesData()
        }),
        Object(r.a)(i, "checkForSeriesData", function() {
            "ftp-watts-kg" == this.ftpMaxToggle && (n.a.find(this.chartSeries.ftp.data, function(t) {
                return null != t
            }, this) || (this.$(".highcharts-container").hide(),
            this.emptyChartView = new g.a({
                el: this.el
            }),
            this.emptyChartView.render()))
        }),
        i))
    },
    3185: function(t, e) {
        t.exports = "<div class=\"h4 top-xl text-center <%- hidden ? 'hidden' : '' %>\"><%= Localizer.localize('report.empty.msg') %></div>\n\n<div class=\"<%-  hidden ? '' : 'hidden' %>\">\n\t<div class=\"center-y-parent empty-state\">\n        <div class=\"center-y-child <%- isWidget ? 'hidden' : '' %>\">\n            <h4><%= Localizer.localize('stress_report_text3') %></h4>\n            <p><%= Localizer.localize('stress_report_text7') %></p>\n        </div>\n\n        <div class=\"text-center top-m <%- isWidget ? '' : 'hidden' %>\">\n            <h6><%= Localizer.localize('stress_report_text3') %></h6>\n            <p><%= Localizer.localize('stress_report_text7') %></p>\n        </div>\n    </div>\n</div>\n"
    },
    3186: function(t, e, a) {
        "use strict";
        a(7),
        a(9);
        var i = a(6)
          , r = (a(13),
        a(1295));
        e.a = r.a.extend({
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", i.a.localize("heart_rate_unit")]
                }
            },
            determineYAxisTitle: function() {
                return i.a.localize("label_heart_rate_unit")
            },
            customizeOptions: function() {
                this.options.plotOptions = {
                    series: {
                        showCheckbox: !1,
                        selected: !0,
                        states: {
                            hover: {
                                enabled: !0,
                                halo: null
                            }
                        }
                    }
                },
                this.options.yAxis.title = {
                    text: this.determineYAxisTitle()
                },
                this.options.tooltip = {
                    formatter: function() {
                        return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + this.y + " " + i.a.localize("heart_rate_unit")
                    }
                },
                this.minAvgValue && (this.options.yAxis.plotLines = [{
                    value: this.minAvgValue,
                    color: "black",
                    dashStyle: "solid",
                    width: 2,
                    label: {
                        text: i.a.localize("average") + " = " + this.minAvgValue + " " + i.a.localize("heart_rate_unit")
                    },
                    zIndex: 5
                }])
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                this.chartSeries.resting = {
                    color: "#11a9ed",
                    name: i.a.localize("label_resting_heart_rate"),
                    type: "line",
                    data: this.createNullArray(this.metricPeriod)
                }
            },
            processMetricList: function(t) {
                var e = t.get("metricsMap")
                  , a = 0
                  , i = 0;
                this.hrReportType = "resting";
                var r = e.WELLNESS_RESTING_HEART_RATE;
                if (r)
                    for (var s = 0; s < r.length; s++)
                        r[s].value && (this.addMetricToDataset(r[s]),
                        a += r[s].value,
                        i++);
                i > 0 && (this.minAvgValue = Math.round(a / i))
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                e >= 0 && null != t.value && this.chartSeries[this.hrReportType] && (this.chartSeries[this.hrReportType].data[e] = t.value,
                this.exportData.rows[this.exportDataCount++] = {
                    values: [this.categories[e], t.value]
                })
            }
        })
    },
    3187: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(9)
              , r = a.n(i)
              , s = a(13)
              , n = a(6)
              , o = a(1323)
              , l = a(2440)
              , c = a(1227)
              , h = a(2441)
              , d = a(3188)
              , u = a.n(d)
              , p = r.a.View.extend({
                initialize: function(e) {
                    this.reportType = e.reportType,
                    this.chartFormat = e.chartFormat,
                    this.metricList = e.metricList,
                    this.displayName = e.displayName,
                    this.chartType = e.chartType,
                    this.metricPeriod = e.hrvStressReportMetricPeriod,
                    this.currentDateOffset = e.currentDateOffset,
                    this.userPreferences = e.userPreferences,
                    this.daysInMonth = e.daysInMonth,
                    this.template = t.template(u.a),
                    this.chartOptions = {}
                },
                render: function() {
                    this.$el.html(this.template({
                        Localizer: n.a
                    })),
                    this.getXAxisCategories(),
                    this.getTooltips();
                    var t = this.metricList.at(0).get("metricsMap").ACTIVITY_HRV_STRESS_TEST;
                    this.getChartOptions(),
                    this.processMetricList(t),
                    this.renderChart()
                },
                createZeroArray: function() {
                    var t, e = [];
                    if (this.metricPeriod)
                        for (t = -7; t < 0; t++)
                            e.push(0);
                    else
                        for (t = -this.daysInMonth; t < 0; t++)
                            e.push(0);
                    return e
                },
                processMetricList: function(t) {
                    var e, a, i, r;
                    for (i = 0,
                    r = t.length; i < r; i++)
                        (e = this.addMetricToDataset(t[i])) >= 0 && this.chartOptions.series && (0 !== this.chartOptions.series[0].data[e] ? (a = this.chartOptions.series[0].data[e]) <= t[i].value ? this.chartOptions.series[0].data[e] = t[i].value : this.chartOptions.series[0].data[e] = a : this.chartOptions.series[0].data[e] = t[i].value)
                },
                addMetricToDataset: function(t) {
                    return this.metricPeriod ? this.calculateDailyDataIndex(t.calendarDate, 7) : this.calculateWeeklyDataIndex(t.calendarDate)
                },
                calculateDailyDataIndex: function(t, e) {
                    var a = o.a.formatDate(this.currentDateOffset)
                      , i = e - o.a.determineNumberOfDays(t, a);
                    return i < 0 || i > 7 ? -1 : i
                },
                calculateWeeklyDataIndex: function(t) {
                    var e = t.split("-")
                      , a = new Date(e[0],e[1] - 1,e[2],0,0,0)
                      , i = a.getMonth() + 1
                      , r = a.getDate()
                      , s = this.userPreferences.get("dateFormat")
                      , o = "";
                    o = "mmddyyyy" === s.formatKey || "yyyymmdd" === s.formatKey ? n.a.localize("month.abbr." + (i > 9 ? i : "0" + i)) + " " + r : r + " " + n.a.localize("month.abbr." + (i > 9 ? i : "0" + i));
                    var l = this.categories.indexOf(o);
                    return l < 0 ? -1 : l
                },
                getChartOptions: function() {
                    var t = this;
                    this.chartOptions = {
                        chart: {
                            type: this.chartType,
                            padding: 0,
                            width: "widget" === this.chartFormat ? 290 : 700,
                            height: "widget" === this.chartFormat ? 210 : 200,
                            spacingLeft: 10,
                            style: {
                                fontFamily: "'Open Sans', sans-serif"
                            },
                            backgroundColor: ""
                        },
                        title: {
                            text: ""
                        },
                        credits: {
                            enabled: !1
                        },
                        legend: {
                            enabled: !1
                        },
                        plotOptions: {
                            column: {
                                animation: !1
                            },
                            series: {
                                borderWidth: 0
                            }
                        },
                        exporting: {
                            enabled: !1
                        },
                        xAxis: {
                            labels: {
                                enabled: !0,
                                rotation: 0,
                                style: {
                                    textOverflow: "none"
                                }
                            },
                            tickInterval: this.metricPeriod ? "" : 7,
                            categories: this.categories
                        },
                        yAxis: {
                            title: {
                                text: ""
                            },
                            allowDecimals: !1,
                            alternateGridColor: "rgba(230,230,230,.125)",
                            gridLineColor: "#dadada",
                            tickPositions: [0, 20, 40, 60, 80, 100]
                        },
                        tooltip: {
                            useHTML: !0,
                            formatter: function() {
                                return "<strong>" + t.tooltips[this.point.index] + "</strong></br>" + n.a.localize("trainingEffect.help.score") + ": <strong>" + s.a.formatDecimalNumber(this.y, 0) + " " + t.getLowMediumHigh(this.y) + " </strong><br>"
                            }
                        },
                        series: [{
                            name: "",
                            data: this.buildSeriesData(),
                            color: c.a.Colors.blue
                        }]
                    }
                },
                getLowMediumHigh: function(t) {
                    return t > l.a.SCORE_LOW_BOTTOM && t <= l.a.SCORE_LOW_TOP ? "(" + n.a.localize("wellness_sleep_movement_low") + ")" : t > l.a.SCORE_MODERATE_BOTTOM && t <= l.a.SCORE_MODERATE_TOP ? "(" + n.a.localize("moderate") + ")" : t > l.a.SCORE_HIGH_BOTTOM && t <= l.a.SCORE_HIGH_TOP ? "(" + n.a.localize("wellness_sleep_movement_high") + ")" : t > l.a.SCORE_VERY_HIGH_BOTTOM && t <= l.a.SCORE_VERY_HIGH_TOP ? "(" + n.a.localize("very_high") + ")" : ""
                },
                renderChart: function() {
                    var t = new h.a({
                        options: this.chartOptions,
                        el: this.$("#hrv-7d")
                    });
                    this.$("#hrv-7d-container").html(t.render().el)
                },
                buildSeriesData: function() {
                    return this.createZeroArray(this.metricPeriod)
                },
                getXAxisCategories: function() {
                    this.metricPeriod ? this.getDailyCategories() : this.getOneMonthCategories()
                },
                getDailyCategories: function() {
                    this.categories = [];
                    for (var t = -6; t <= 0; t++) {
                        var e = new Date;
                        e.setHours(12),
                        e.setMinutes(0),
                        e.setMilliseconds(0),
                        e.setDate(e.getDate() + this.currentDateOffset),
                        e.setDate(e.getDate() + t);
                        var a, i = e.getDay().toString();
                        a = n.a.localize("day." + i + ".short"),
                        this.categories.push(a)
                    }
                },
                getTooltips: function() {
                    var t = this.metricPeriod ? -6 : -this.daysInMonth;
                    this.tooltips = [];
                    for (var e = t; e <= 0; e++) {
                        var a = new Date;
                        a.setHours(12),
                        a.setMinutes(0),
                        a.setMilliseconds(0),
                        a.setDate(a.getDate() + this.currentDateOffset),
                        a.setDate(a.getDate() + e);
                        var i, r = a.getDay().toString(), s = a.getDate().toString(), o = a.getMonth() + 1, l = a.getFullYear();
                        i = n.a.localize("day." + r + ".short") + ", " + n.a.localize("month.abbr." + (o > 9 ? o : "0" + o)) + " " + s + ", " + l,
                        this.tooltips.push(i)
                    }
                },
                getOneMonthCategories: function() {
                    this.categories = [];
                    for (var t = -this.daysInMonth; t < 0; t++) {
                        var e = new Date;
                        e.setHours(12),
                        e.setMinutes(0),
                        e.setMilliseconds(0),
                        e.setDate(e.getDate() + this.currentDateOffset),
                        e.setDate(e.getDate() + t);
                        var a = e.getDate().toString()
                          , i = (e.getMonth() + 1).toString()
                          , r = this.userPreferences.get("dateFormat")
                          , s = "";
                        s = "mmddyyyy" === r.formatKey || "yyyymmdd" === r.formatKey ? n.a.localize("month.abbr." + (i > 9 ? i : "0" + i)) + " " + a : a + " " + n.a.localize("month.abbr." + (i > 9 ? i : "0" + i)),
                        this.categories.push(s)
                    }
                }
            });
            e.a = p
        }
        ).call(this, a(7))
    },
    3188: function(t, e) {
        t.exports = '<div id="week" class="tab-pane hrv-stress-table">\n    <div id="hrv-7d-container">\n        <div id="hrv-7d"></div>\n    </div>\n</div>'
    },
    3189: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(3190)
          , c = a.n(l)
          , h = (a(1358),
        n.a.View.extend({
            initialize: function(t) {
                this.template = r.a.template(c.a)
            },
            render: function() {
                var t = this.template({
                    Localizer: o.a
                });
                this.$el.html(t),
                this.$(".popbox").garminMenus()
            }
        }));
        e.a = h
    },
    3190: function(t, e) {
        t.exports = '\x3c!--HRV Info Table--\x3e\n<a href="#modal-hrv-stress" data-toggle="modal" class="help-icon modal-hrv-stress" title="<%- Localizer.localize(\'learn_more_about_hrv_stress\') %>">\n    <span class="icon-help"></span>\n</a>'
    },
    3191: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(3192)
          , c = a.n(l)
          , h = (a(1358),
        n.a.View.extend({
            initialize: function(t) {
                this.template = r.a.template(c.a)
            },
            render: function() {
                var t = this.template({
                    Localizer: o.a
                });
                this.$el.html(t),
                this.$(".popbox").garminMenus()
            }
        }));
        e.a = h
    },
    3192: function(t, e) {
        t.exports = '\x3c!--HRV Info Table--\x3e\n<a href="#modal-pulse-ox" data-toggle="modal" class="help-icon modal-pulse-ox" title="<%= Localizer.localize(\'pulse_ox\') %>">\n    <span class="icon-help"></span>\n</a>'
    },
    3193: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(2440)
          , c = a(3194)
          , h = a.n(c)
          , d = n.a.View.extend({
            initialize: function(t) {
                this.template = r.a.template(h.a)
            },
            render: function() {
                var t = this.template({
                    Localizer: o.a,
                    HRV_SCORE: l.a
                });
                this.$el.html(t)
            }
        });
        e.a = d
    },
    3194: function(t, e) {
        t.exports = "<p><%- Localizer.localize('stress_report_text5') %></p>\n<p><%- Localizer.localize('stress_report_text6') %></p>\n<table class=\"table\">\n<tbody>\n\t<tr>\n\t\t<td><%- Localizer.localize('low') %></td>\n        <td><%- HRV_SCORE.SCORE_LOW_BOTTOM %> &#45; <%- HRV_SCORE.SCORE_LOW_TOP %></td>\n    </tr>\n    <tr>\n    \t<td><%- Localizer.localize('moderate') %></td>\n    \t<td><%- HRV_SCORE.SCORE_MODERATE_BOTTOM %> &#45; <%- HRV_SCORE.SCORE_MODERATE_TOP %></td>\n    </tr>\n    <tr>\n    \t<td><%- Localizer.localize('high') %></td>\n        <td><%- HRV_SCORE.SCORE_HIGH_BOTTOM %> &#45; <%- HRV_SCORE.SCORE_HIGH_TOP %></td>\n    </tr>\n    <tr>\n    \t<td><%- Localizer.localize('very_high') %> </td>\n        <td><%- HRV_SCORE.SCORE_VERY_HIGH_BOTTOM %> &#45; <%- HRV_SCORE.SCORE_VERY_HIGH_TOP %></td>\n    </tr>\n</tbody>\n</table>\n<div class=\"fine-print top-s\"><%- Localizer.localize('stress_report_text2') %></div>"
    },
    3195: function(t, e, a) {
        "use strict";
        a(7),
        a(9);
        var i = a(6)
          , r = a(13)
          , s = a(1295)
          , n = a(15)
          , o = a.n(n);
        e.a = s.a.extend({
            determineYAxisTitle: function() {
                return i.a.localize("label_intensity_minutes_unit")
            },
            customizeOptions: function() {
                var t = this;
                this.options.plotOptions = {
                    column: {
                        dataLabels: {
                            enabled: !1,
                            color: "white"
                        }
                    },
                    series: {
                        stacking: "normal",
                        showCheckbox: !1,
                        selected: !0
                    }
                },
                this.options.tooltip = {
                    formatter: function() {
                        var e = t.goalSeries.goal.data[this.point.x]
                          , a = "<b>" + this.x + "</b><br/>" + this.series.name + ": " + r.a.formatDecimalNumber(this.y, 0) + " " + i.a.localize("label_intensity_minutes_unit");
                        return "daily" !== t.metricPeriod && (a += "<br/>" + i.a.localize("label_intensity_minutes_goal") + ": " + r.a.formatDecimalNumber(e, 0) + " " + i.a.localize("label_intensity_minutes_unit")),
                        a
                    }
                }
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                this.chartSeries.remaining = {
                    color: "#dddddd",
                    name: i.a.localize("step.remaining"),
                    data: this.createZeroArray(this.metricPeriod)
                },
                this.chartSeries.incomplete = {
                    color: "#11a9ed",
                    name: i.a.localize("step.actual"),
                    data: this.createZeroArray(this.metricPeriod)
                },
                this.chartSeries.complete = {
                    color: "#80ea40",
                    name: i.a.localize("step.actual"),
                    data: this.createZeroArray(this.metricPeriod)
                },
                this.goalSeries = {},
                this.goalSeries.goal = {
                    name: i.a.localize("step.goal"),
                    data: this.createZeroArray(this.metricPeriod)
                }
            },
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", i.a.localize("step.actual"), i.a.localize("step.goal")]
                }
            },
            processMetricList: function(t) {
                this.vigorousMultiplier = 2;
                var e = 0;
                this.metricsMap = t.get("metricsMap");
                for (var a = this.metricsMap.WELLNESS_MODERATE_INTENSITY_MINUTES || [], i = this.metricsMap.WELLNESS_VIGOROUS_INTENSITY_MINUTES || [], r = Math.max(a.length, i.length), s = 0; s < r; s++) {
                    var n = null;
                    a[s] && (n = a[s]),
                    i[s] && (n ? n.value += i[s].value * this.vigorousMultiplier : (n = i[s]).value *= this.vigorousMultiplier),
                    n && (e += n.value),
                    this.addMetricToDataset(n, e)
                }
            },
            addMetricToDataset: function(t, e) {
                var a = this.determineDataIndex(t);
                if (a >= 0) {
                    var i = this.getGoalValue(a);
                    this.exportData.rows[this.exportDataCount++] = {
                        values: [this.categories[a], t.value || 0, i || 0]
                    },
                    "daily" !== this.metricPeriod && t.value >= i || "daily" === this.metricPeriod && e >= i ? ("daily" !== this.metricPeriod && (this.chartSeries.remaining.data[a] = 0),
                    this.chartSeries.complete.data[a] = t.value) : ("daily" !== this.metricPeriod && (this.chartSeries.remaining.data[a] = i - t.value),
                    this.chartSeries.incomplete.data[a] = t.value),
                    "daily" !== this.metricPeriod && (this.goalSeries.goal.data[a] = i)
                }
            },
            getGoalValue: function(t) {
                for (var e = 0, a = this.metricsMap.WELLNESS_USER_INTENSITY_MINUTES_GOAL, i = 0; i < a.length; i++) {
                    var r = a[i];
                    this.determineDataIndex(r) == t && (e = r.value)
                }
                return e
            },
            getWeeklyCategories: function() {
                this.categories = [];
                for (var t = this.daysInMonth; t <= 0; t++) {
                    var e = new Date;
                    if (e.setHours(12),
                    e.setMinutes(0),
                    e.setMilliseconds(0),
                    e.setDate(e.getDate() + this.currentDateOffset),
                    e.setDate(e.getDate() + t),
                    "1" === e.getDay().toString()) {
                        var a = e.getDate().toString()
                          , r = (e.getMonth() + 1).toString()
                          , s = this.userPreferences.get("dateFormat")
                          , n = "";
                        n = "mmddyyyy" === s.formatKey || "yyyymmdd" === s.formatKey ? i.a.localize("month.abbr." + (r.length > 1 ? r : "0" + r)) + " " + a : a + " " + i.a.localize("month.abbr." + (r.length > 1 ? r : "0" + r)),
                        this.categories.push(n)
                    }
                }
            },
            getDailyCategories: function() {
                this.categories = [];
                var t = 1 - (new Date).getDay();
                t > 0 && (t = -6);
                for (var e = t + 6, a = t; a <= e; a++) {
                    var r = o()().add(a, "days").isoWeekday();
                    r > 6 && (r -= 7);
                    var s = i.a.localize("day." + r + ".short");
                    this.categories.push(s)
                }
            }
        })
    },
    3196: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(7)
              , r = a.n(i)
              , s = (a(9),
            a(6))
              , n = a(13)
              , o = a(1870)
              , l = a(27)
              , c = a(1302)
              , h = a(1295)
              , d = a(2069)
              , u = a(3197)
              , p = a.n(u)
              , g = h.a.extend({
                initializeChart: function(t) {
                    this.metricList.each(function(t) {
                        var e = t.get("metricsMap")
                          , a = e[c.a.ACTIVITY_AVG_LACTATE_THRESHOLD_BPM];
                        this.bpmData = a || [],
                        a = e[c.a.ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC],
                        this.speedData = a || []
                    }, this),
                    this.template = r.a.template(p.a),
                    this.modelSynchronizer = new l.a,
                    this.latestUserBiometrics = new o.a({
                        displayName: t.userPreferences.get("displayName")
                    }),
                    this.emptyChartView = null,
                    this.minBpm = 1e6,
                    this.maxBpm = -1,
                    this.minPace = 1e6
                },
                customizeOptions: function() {
                    var t = this;
                    this.options.xAxis = {
                        categories: this.categories
                    };
                    var e = this.minBpm - 1;
                    this.minBpm === this.maxBpm && (e -= 1),
                    this.options.yAxis = [{
                        title: {
                            text: null
                        },
                        labels: {
                            formatter: function() {
                                return Math.round(this.value)
                            }
                        },
                        min: e,
                        minTickInterval: 1
                    }, {
                        title: {
                            text: null
                        },
                        labels: {
                            formatter: function() {
                                return t.convertSecondsToTimeString(this.value)
                            }
                        },
                        opposite: !0,
                        reversed: !0,
                        floor: this.minPace,
                        minTickInterval: 15
                    }],
                    this.options.legend = {
                        enabled: !0,
                        verticalAlign: "bottom"
                    },
                    this.options.tooltip = {
                        shared: !0,
                        formatter: function() {
                            var e = "";
                            return e = this.points.length > 1 ? (e = s.a.localize("label_heart_rate") + ": " + Math.round(this.points[0].y) + " " + s.a.localize("heart_rate_unit") + "<br>") + s.a.localize("label_pace") + ": " + t.convertSecondsToTimeString(this.points[1].y) + " " + s.a.localize(n.a.getPaceUnitKey()) : this.points[0].series.name.indexOf(s.a.localize("label_heart_rate")) > -1 ? s.a.localize("label_heart_rate") + ": " + Math.round(this.points[0].y) + " " + s.a.localize("heart_rate_unit") : s.a.localize("label_pace") + ": " + t.convertSecondsToTimeString(this.points[0].y) + " " + s.a.localize(n.a.getPaceUnitKey()),
                            "<b>" + this.points[0].x + "</b><br>" + e
                        }
                    }
                },
                initializeChartSeries: function() {
                    this.chartSeries = {},
                    this.chartSeries.bpm = {
                        name: s.a.localize("label_heart_rate") + " (" + s.a.localize("heart_rate_unit") + ")",
                        type: "line",
                        color: "#ff0035",
                        data: this.createNullArray()
                    },
                    this.chartSeries.pace = {
                        type: "spline",
                        color: "#11a9ed",
                        yAxis: 1,
                        name: s.a.localize("label_pace") + " (" + s.a.localize(n.a.getPaceUnitKey()) + ")",
                        data: this.createNullArray()
                    };
                    var t = this.getPaceData()
                      , e = this.getHRData();
                    r.a.each(e, function(t) {
                        var e = this.determineDataIndex(t.metric);
                        e >= 0 && (this.chartSeries.bpm.data[e] = t.y)
                    }, this),
                    r.a.each(t, function(t) {
                        var e = this.determineDataIndex(t.metric);
                        e >= 0 && (this.chartSeries.pace.data[e] = t.y)
                    }, this)
                },
                addMetricToDataset: function(t) {},
                getPaceData: function() {
                    this.exportData.rows[this.exportDataCount++] = {
                        values: ["", s.a.localize("value.label"), s.a.localize("label_pace")]
                    };
                    var t = [];
                    return r.a.each(this.speedData, function(e) {
                        if (e.value > 0) {
                            var a = ""
                              , i = (a = r.a.isUndefined(e.startDateOfWeek) ? r.a.isUndefined(e.calendarDate) ? [e.month.year + "-" + e.month.monthId + "-1"] : e.calendarDate.split(" ") : e.startDateOfWeek.split(" "))[0].split("-")
                              , o = new Date(i[0],i[1] - 1,i[2],0,0,0)
                              , l = o.getFullYear()
                              , c = o.getMonth()
                              , h = o.getDate()
                              , d = n.a.personalizeLactateThresholdPace(n.a.convertCmPerMSToMps(e.value)).split(":")
                              , u = 60 * parseInt(d[0], 10) + parseInt(d[1], 10)
                              , p = {
                                x: Date.UTC(l, c, h, 12, 0, 0),
                                y: u,
                                metric: e
                            }
                              , g = n.a.personalizeLactateThresholdPace(u) + " " + s.a.localize(n.a.getPaceUnitKey());
                            this.minPace = Math.min(this.minPace, u),
                            this.exportData.rows[this.exportDataCount++] = {
                                values: [a.toString(), u, g]
                            },
                            t.push(p)
                        }
                    }, this),
                    t
                },
                getHRData: function() {
                    this.exportData.rows[this.exportDataCount++] = {
                        values: ["", s.a.localize("value.label"), s.a.localize("heart_rate_unit")]
                    };
                    var t = [];
                    return r.a.each(this.bpmData, function(e) {
                        if (e.value > 0) {
                            var a = ""
                              , i = (a = r.a.isUndefined(e.startDateOfWeek) ? r.a.isUndefined(e.calendarDate) ? [e.month.year + "-" + e.month.monthId + "-1"] : e.calendarDate.split(" ") : e.startDateOfWeek.split(" "))[0].split("-")
                              , n = new Date(i[0],i[1] - 1,i[2],0,0,0)
                              , o = n.getFullYear()
                              , l = n.getMonth()
                              , c = n.getDate()
                              , h = {
                                x: Date.UTC(o, l, c, 12, 0, 0),
                                y: e.value,
                                metric: e
                            };
                            this.minBpm = Math.min(this.minBpm, e.value),
                            this.maxBpm = Math.max(this.maxBpm, e.value),
                            t.push(h);
                            var d = Math.round(e.value) + " " + s.a.localize("heart_rate_unit");
                            this.exportData.rows[this.exportDataCount++] = {
                                values: [a.toString(), e.value, d]
                            }
                        }
                    }, this),
                    t
                },
                determineYAxisTitle: function() {
                    return ""
                },
                render: function() {
                    this.modelSynchronizer.addModel({
                        model: this.latestUserBiometrics,
                        required: !0
                    }),
                    this.modelSynchronizer.on(l.a.Events.SYNCHRONIZED, function() {
                        this.bpm = this.latestUserBiometrics.get(o.a.BiometricConstants.LACTATE_THRESHOLD_BPM),
                        this.speed = this.latestUserBiometrics.get(o.a.BiometricConstants.LACTATE_THRESHOLD_SPEED),
                        this._render()
                    }, this),
                    this.modelSynchronizer.fetchModels()
                },
                exists: function(t) {
                    return !1 === r.a.isUndefined(t) && !1 === r.a.isNull(t)
                },
                _render: function() {
                    var e = !1;
                    if ("current" === this.activeTab && "widget" === this.chartFormat ? (this.$el.find(".top-l").hide(),
                    this.$el.find(".highcharts-container").hide().next().hide(),
                    !1 === this.exists(this.bpm) && !1 === this.exists(this.speed) && (this.emptyChartView = new d.a({
                        el: this.el
                    }))) : (e = !t(".chart-container .chart").hasClass("span9"),
                    t(".chart-container .chart").removeClass("span9"),
                    h.a.prototype.render.call(this)),
                    this.emptyChartView)
                        this.emptyChartView.render();
                    else {
                        var a = this.template({
                            Localizer: s.a,
                            Personalizer: n.a,
                            bpm: this.bpm,
                            speed: this.speed,
                            chartFormat: this.chartFormat,
                            activeTab: this.activeTab,
                            url: "/modern/report/" + this.report.metricId + "/running/last_four_weeks",
                            exists: this.exists,
                            toMeters: function(t) {
                                return 10 * t
                            }
                        });
                        "page" === this.chartFormat ? (t(".chart-container .chart").addClass("span9"),
                        e && t(".chart-container").append(a)) : "current" === this.activeTab && "widget" === this.chartFormat ? this.$el.html(a) : this.$el.append(a)
                    }
                    this.chartObj && this.chartObj.reflow()
                },
                getWeeklyCategories: function() {
                    h.a.prototype.getWeeklyCategories.call(this),
                    this.categories.length > 4 && (this.categories = this.categories.splice(1))
                },
                convertSecondsToTimeString: function(t) {
                    var e = Math.floor(t / 60)
                      , a = Math.round(t % 60);
                    return a < 10 && (a = "0" + a),
                    e + ":" + a
                }
            });
            e.a = g
        }
        ).call(this, a(10))
    },
    3197: function(t, e) {
        t.exports = '<% if (chartFormat == \'page\') { %>\n<div class="span3 lt-page">\n    <div class="h6"><%- Localizer.localize(\'lactate.threshold.most.recent\') %></div>\n    <% if (exists(bpm)) {  %>\n    <div class="data-block xsmall">\n        <div class="data-bit"><%- bpm.value %> <%- Localizer.localize(\'heart_rate_unit\') %></div>\n        <div class="data-label"><%- Localizer.localize(\'label_heart_rate\') %></div>\n    </div>\n    <% } %>\n    <% if (exists(speed)) {  %>\n    <div class="data-block xsmall">\n        <div class="data-bit"><%-  Personalizer.personalizeLactateThresholdPace(toMeters(speed.value)) %></div>\n        <div class="data-label"><%- Localizer.localize(\'label_pace\') %> (<%- Localizer.localize(Personalizer.getPaceUnitKey()) %>)</div>\n    </div>\n    <% } %>\n</div>\n<div class="row-fluid lt-page">\n    <div class="span12 top-s"><%- Localizer.localize(\'adjust.hr.zones.label\') %></div>\n</div>\n<% } else if (activeTab == \'current\') { %>\n<% if (exists(bpm)) {  %>\n<div class="data-block xlarge text-center top-xs bottom-s">\n    <div class="data-bit"><%- bpm.value %> <%- Localizer.localize(\'heart_rate_unit\') %></div>\n    <span class="data-label"><%- Localizer.localize(\'label_heart_rate\') %></span>\n</div>\n<% } %>\n<% if (exists(speed)) {  %>\n<div class="data-block xlarge text-center bottom-s">\n    <div class="data-bit"><%-  Personalizer.personalizeLactateThresholdPace(toMeters(speed.value)) %></div>\n    <span class="data-label"><%- Localizer.localize(\'label_pace\') %> (<%- Localizer.localize(Personalizer.getPaceUnitKey()) %>)</span>\n</div>\n<% } %>\n<div class="text-center"><%- Localizer.localize(\'adjust.hr.zones.label\') %></div>\n<% } else { %>\n<div class="row-fluid">\n    <% if (exists(bpm)) {  %>\n    <div class="span6">\n        <div class="data-block small">\n            <div class="data-bit"><%- bpm.value %> <%- Localizer.localize(\'heart_rate_unit\') %></div>\n            <div class="data-label"><%- Localizer.localize(\'lactate.threshold.most.recent\') %></div>\n        </div>\n    </div>\n    <% } %>\n    <% if (exists(speed)) {  %>\n    <div class="span6">\n        <div class="data-block small pull-right text-right">\n            <div class="data-bit"><%-  Personalizer.personalizeLactateThresholdPace(toMeters(speed.value)) %></div>\n            <div class="data-label"><%- Localizer.localize(\'label_pace\') %> (<%- Localizer.localize(Personalizer.getPaceUnitKey()) %>)</div>\n        </div>\n    </div>\n    <% } %>\n</div>\n<% }  %>'
    },
    3198: function(t, e, a) {
        "use strict";
        a(7),
        a(9);
        var i = a(6)
          , r = (a(13),
        a(65),
        a(1295));
        e.a = r.a.extend({
            determineYAxisTitle: function() {
                return ""
            },
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", i.a.localize("ACTIVITY_TRAINING_STRESS_SCORE"), i.a.localize("label_power")]
                }
            },
            customizeOptions: function() {
                this.options.yAxis = [{
                    labels: {
                        format: "{value}",
                        style: {
                            color: "#11a9ed"
                        }
                    },
                    title: {
                        text: i.a.localize("label_training_stress_score"),
                        style: {
                            color: "#11a9ed"
                        }
                    }
                }, {
                    title: {
                        text: i.a.localize("label_intensity_factor"),
                        style: {
                            color: "#ff0035"
                        }
                    },
                    labels: {
                        format: "{value}",
                        style: {
                            color: "#ff0035"
                        }
                    },
                    opposite: !0
                }],
                this.options.tooltip = {
                    shared: !0
                }
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                this.chartSeries.tss = {
                    color: "#11a9ed",
                    name: i.a.localize("label_tss"),
                    type: "column",
                    data: this.createZeroArray(this.metricPeriod)
                },
                this.chartSeries.if = {
                    color: "#ff0035",
                    name: i.a.localize("label_if"),
                    type: "spline",
                    yAxis: 1,
                    data: this.createZeroArray(this.metricPeriod)
                }
            },
            processMetricList: function(t) {
                var e = t.get("metricsMap");
                this.powerType = "tss";
                var a = e.ACTIVITY_TRAINING_STRESS_SCORE;
                if (a)
                    for (var i = 0; i < a.length; i++)
                        this.addMetricToDataset(a[i]);
                this.powerType = "if";
                var r = e.ACTIVITY_INTENSITY_FACTOR;
                if (r)
                    for (i = 0; i < r.length; i++)
                        this.addMetricToDataset(r[i])
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                e >= 0 && this.chartSeries[this.powerType] && (this.value = "tss" == this.powerType ? Math.round(t.value) : Math.round(1e3 * t.value) / 1e3,
                this.chartSeries[this.powerType].data[e] = this.value,
                this.exportData.rows[this.exportDataCount++] = {
                    values: [this.categories[e], this.powerType, this.value]
                })
            }
        })
    },
    3199: function(t, e, a) {
        "use strict";
        var i = a(1)
          , r = a(6)
          , s = a(13)
          , n = a(15)
          , o = a.n(n)
          , l = a(85)
          , c = a(1295);
        e.a = c.a.extend({
            initializeChart: function() {
                this.exerciseFilter = ""
            },
            determineYAxisTitle: function() {
                return r.a.localize("label_reps")
            },
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", r.a.localize("activity.type.label"), r.a.localize("label_reps"), r.a.localize("label_volume")]
                }
            },
            customizeOptions: function() {
                this.options.plotOptions = {
                    series: {
                        showCheckbox: !1,
                        selected: !0,
                        states: {
                            hover: {
                                enabled: !0,
                                halo: null
                            }
                        }
                    }
                },
                this.options.tooltip = {
                    formatter: function() {
                        var t = 0 === this.series.index ? this.series.name : r.a.localize(s.a.getWeightUnitKey());
                        return "<b>" + this.x + "</b><br/>" + this.y + " " + t
                    }
                },
                this.options.legend.enabled = !0,
                this.options.yAxis = [Object(i.a)({
                    min: 0,
                    title: {
                        text: "",
                        style: {
                            color: "#222"
                        }
                    },
                    showEmpty: !1,
                    labels: {
                        enabled: !0
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: "#808080"
                    }],
                    allowDecimals: !1,
                    id: "reps"
                }, "title", {
                    text: r.a.localize("label_reps")
                }), Object(i.a)({
                    min: 0,
                    title: {
                        text: "",
                        style: {
                            color: "#222"
                        }
                    },
                    showEmpty: !1,
                    labels: {
                        enabled: !0
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: "#808080"
                    }],
                    allowDecimals: !1,
                    id: "volume",
                    opposite: !0
                }, "title", {
                    text: r.a.localize(s.a.getWeightUnitKey())
                })]
            },
            processMetricList: function(t) {
                var e = t.get("exerciseSummaries")
                  , a = 0
                  , i = 0;
                if (e) {
                    this.metricAvailable = e.length;
                    for (var r = 0; r < e.length; r++)
                        this.exerciseFilter && this.exerciseFilter !== e[r].subCategory && (e[r].subCategory || this.exerciseFilter !== e[r].category) || (a += e[r].totalReps,
                        i += s.a.convertWeight(1e3 * e[r].totalVolume),
                        i += 0);
                    this.addMetricToDataset({
                        date: t.get("calendarDate"),
                        reps: a,
                        volume: i
                    })
                }
            },
            createZeroArray: function() {
                switch (this.metricPeriod) {
                case "weekly":
                    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                case "monthly":
                    return [0, 0, 0, 0, 0, 0];
                case "yearly":
                    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                case "daily":
                default:
                    return [0, 0, 0, 0, 0, 0, 0]
                }
            },
            getWeeklyCategories: function() {
                this.categories = [];
                var t = new Date
                  , e = s.a.getShortDateFormatKey();
                t.setHours(12),
                t.setMinutes(0),
                t.setMilliseconds(0),
                t.setDate(t.getDate() + this.currentDateOffset - 27),
                this.categories.push(o()(t).format(e));
                for (var a = 0; a < 28; a++)
                    t.setDate(t.getDate() + 1),
                    this.categories.push(o()(t).format(e))
            },
            calculateWeeklyDataIndex: function(t) {
                var e = o()(t).format(s.a.getShortDateFormatKey());
                return this.categories.indexOf(e)
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                e >= 0 && (this.chartSeries.reps || (this.chartSeries.reps = {
                    name: r.a.localize("label_reps"),
                    data: this.createZeroArray(),
                    index: 0,
                    yAxis: "reps"
                }),
                this.chartSeries.volume || (this.chartSeries.volume = {
                    name: r.a.localize("label_volume"),
                    data: this.createZeroArray(),
                    index: 1,
                    yAxis: "volume"
                }),
                this.chartSeries.reps.data[e] = t.reps,
                this.chartSeries.volume.data[e] = t.volume,
                this.exportData.rows[this.exportDataCount++] = {
                    values: [this.categories[e], r.a.localize("fitness_equipment"), t.reps, t.volume]
                })
            },
            determineDataIndex: function(t) {
                var e = ""
                  , a = "";
                switch (this.metricPeriod) {
                case "monthly":
                    a = l.a.parseISO(t.date),
                    e = this.calculateMonthlyDataIndex(a.getMonth() + 1);
                    break;
                case "yearly":
                    a = l.a.parseISO(t.date),
                    e = this.calculateYearlyDataIndex(a.getMonth() + 1);
                    break;
                case "weekly":
                    e = this.calculateWeeklyDataIndex(t.date);
                    break;
                case "daily":
                default:
                    e = this.calculateDailyDataIndex(t.date)
                }
                return e
            },
            calculateYearlyDataIndex: function(t) {
                var e = r.a.localize("month.abbr." + (t > 9 ? t : "0" + t))
                  , a = this.categories.indexOf(e);
                return a < 0 || a > 11 ? -1 : a
            },
            setFilter: function(t) {
                this.exerciseFilter = t
            }
        })
    },
    3200: function(t, e, a) {
        "use strict";
        var i = a(6)
          , r = a(13)
          , s = a(15)
          , n = a.n(s)
          , o = a(85)
          , l = a(1323)
          , c = a(1295);
        e.a = c.a.extend({
            initializeChart: function(t) {
                this.exerciseFilter = "",
                this.metrics = []
            },
            determineYAxisTitle: function() {
                return i.a.localize("label_duration_unit")
            },
            customizeOptions: function() {
                var t = this;
                this.options.yAxis = {
                    min: 0,
                    showEmpty: !1,
                    labels: {
                        enabled: !0
                    },
                    allowDecimals: !1,
                    id: "reps",
                    title: {
                        text: i.a.localize("label_duration_unit"),
                        style: {
                            color: "#222"
                        }
                    }
                };
                var e = l.a.getActivityAttributes(this.reportType);
                this.options.tooltip = {
                    formatter: function() {
                        var a = t.metrics[this.point.index]
                          , s = "";
                        return s = t.isDailyMetric() ? i.a.localize("label_active_time") + ": " + t.getFormattedDuration(a.totalTime) + "<br>" + (e.exercisesLabelKey ? i.a.localize(e.exercisesLabelKey) : i.a.localize("label_exercises")) + ": " + r.a.formatWholeNumber(a.totalExercises) : i.a.localize("daily.avg") + ": " + t.getFormattedDuration(a.dailyAvgTime) + "<br>" + i.a.localize("label_active_time") + ": " + t.getFormattedDuration(a.totalTime) + "<br>" + (e.avgExercisesLabelKey ? i.a.localize(e.avgExercisesLabelKey) : i.a.localize("label_avg_exercises")) + ": " + r.a.formatWholeNumber(a.avgExercises) + (e.displayTotalExercisesOnMonthlyTooltip ? "<br>" + i.a.localize(e.totalExercisesLabelKey) + ": " + r.a.formatWholeNumber(a.totalExercises) : ""),
                        "<b>" + this.x + "</b><br/>" + s
                    }
                }
            },
            getFormattedDuration: function(t) {
                t = Math.round(t);
                var e = Math.round(t / 60)
                  , a = "";
                if (!e)
                    return a = t + " " + i.a.localize("duration_second_short");
                var r = Math.floor(e / 60)
                  , s = e % 60;
                return r > 0 && (a = r + i.a.localize("duration_hour_short") + " "),
                s > 0 && (a += s + " " + i.a.localize("duration_minute")),
                a
            },
            processMetricList: function(t) {
                var e = t.get("exerciseSummaries")
                  , a = 0
                  , i = 0
                  , r = 0
                  , s = 0;
                if (e) {
                    this.metricAvailable = e.length;
                    for (var n = 0; n < e.length; n++)
                        this.exerciseFilter && this.exerciseFilter !== e[n].subCategory && (e[n].subCategory || this.exerciseFilter !== e[n].category) || (a += e[n].avgDailyTimeInSeconds,
                        i += e[n].totalTimeInSeconds,
                        r += e[n].avgSets,
                        s += e[n].activeSets);
                    this.addMetricToDataset({
                        date: t.get("calendarDate"),
                        dailyAvgTime: a,
                        totalTime: i,
                        avgExercises: r,
                        totalExercises: s
                    })
                }
            },
            createZeroArray: function() {
                return Array(this.getNumberOfChartItems()).fill("0")
            },
            getNumberOfChartItems: function() {
                switch (this.metricPeriod) {
                case "daily":
                    return 7;
                case "weekly":
                    return 28;
                case "monthly":
                    return 6;
                case "yearly":
                    return 12;  
                default:
                    return 0
                }
            },
            getWeeklyCategories: function() {
                this.categories = [];
                var t = new Date
                  , e = r.a.getShortDateFormatKey();
                t.setHours(12),
                t.setMinutes(0),
                t.setMilliseconds(0),
                t.setDate(t.getDate() + this.currentDateOffset - 27),
                this.categories.push(n()(t).format(e));
                for (var a = 0; a < 28; a++)
                    t.setDate(t.getDate() + 1),
                    this.categories.push(n()(t).format(e))
            },
            calculateWeeklyDataIndex: function(t) {
                var e = n()(t).format(r.a.getShortDateFormatKey());
                return this.categories.indexOf(e)
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                e >= 0 && (this.chartSeries.dailyAvg || (this.chartSeries.dailyAvg = {
                    data: this.createZeroArray(),
                    color: l.a.getActivityAttributes(this.reportType).color
                }),
                0 === this.metrics.length && (this.metrics = this.createZeroArray()),
                this.isDailyMetric() ? this.chartSeries.dailyAvg.data[e] = t.totalTime < 60 ? Number.parseFloat((t.totalTime / 60).toFixed(2)) : Math.round(t.totalTime / 60) : this.chartSeries.dailyAvg.data[e] = t.dailyAvgTime < 60 ? Number.parseFloat((t.dailyAvgTime / 60).toFixed(2)) : Math.round(t.dailyAvgTime / 60),
                this.metrics[e] = t)
            },
            determineDataIndex: function(t) {
                var e = ""
                  , a = "";
                switch (this.metricPeriod) {
                case "monthly":
                    a = o.a.parseISO(t.date),
                    e = this.calculateMonthlyDataIndex(a.getMonth() + 1);
                    break;
                case "yearly":
                    a = o.a.parseISO(t.date),
                    e = this.calculateYearlyDataIndex(a.getMonth() + 1);
                    break;
                case "weekly":
                    e = this.calculateWeeklyDataIndex(t.date);
                    break;
                case "daily":
                default:
                    e = this.calculateDailyDataIndex(t.date)
                }
                return e
            },
            calculateYearlyDataIndex: function(t) {
                var e = i.a.localize("month.abbr." + (t > 9 ? t : "0" + t))
                  , a = this.categories.indexOf(e);
                return a < 0 || a > 11 ? -1 : a
            },
            setFilter: function(t) {
                this.exerciseFilter = t
            },
            initExportData: function() {
                this.exportDataCount = 0,
                this.exportData = {
                    title: "".concat(i.a.localize(this.report.metricName), " - ").concat(i.a.localize(this.reportType.toUpperCase())),
                    rows: []
                }
            },
            addExportData: function() {
                this.exportData.rows.push({
                    values: arguments
                })
            },
            getExportData: function() {
                this.initExportData();
                var t = l.a.getActivityAttributes(this.reportType);
                if (this.isDailyMetric()) {
                    this.addExportData(["", i.a.localize("total"), t.exercisesLabelKey ? i.a.localize(t.exercisesLabelKey) : i.a.localize("label_exercises")]);
                    for (var e = 0; e < this.metrics.length; e++) {
                        var a = this.metrics[e];
                        a && (a.totalExercises || a.totalTime) && this.addExportData([this.categories[e], this.getFormattedDuration(a.totalTime), r.a.formatWholeNumber(a.totalExercises)])
                    }
                } else {
                    this.addExportData(["", i.a.localize("daily.avg"), i.a.localize("total"), t.avgExercisesLabelKey ? i.a.localize(t.avgExercisesLabelKey) : i.a.localize("label_avg_exercises"), t.totalExercisesLabelKey ? i.a.localize(t.totalExercisesLabelKey) : i.a.localize("label_total_exercises")]);
                    for (var s = 0; s < this.metrics.length; s++) {
                        var n = this.metrics[s];
                        n && (n.totalExercises || n.avgExercises || n.totalTime || n.dailyAvgTime) && this.addExportData([this.categories[s], this.getFormattedDuration(n.dailyAvgTime), this.getFormattedDuration(n.totalTime), r.a.formatWholeNumber(n.avgExercises), r.a.formatWholeNumber(n.totalExercises)])
                    }
                }
                return this.exportData
            },
            isDailyMetric: function() {
                return -1 !== ["daily", "weekly"].indexOf(this.metricPeriod)
            }
        })
    },
    3201: function(t, e) {
        t.exports = '<td title="<%- Localizer.localize(\'manualActivity.name\') %>" class="activity-name">\n    <a href="<%- activityLink %>" class="colored"><%- activityName %></a>\n</td>\n<td title="<%- Localizer.localize(\'manualActivity.date\') %>">\n    <%- date %>\n</td>\n<td title="<%- Localizer.localize(\'label.time\') %>">\n    <%- duration %>\n</td>'
    },
    3202: function(t, e) {
        t.exports = '<thead>\n<tr>\n    <th class="data-label"><%- Localizer.localize(\'manualActivity.name\') %></th>\n    <th class="data-label"><%- Localizer.localize(\'manualActivity.date\') %></th>\n    <th class="data-label"><%- Localizer.localize(\'label.time\') %></th>\n</tr>\n</thead>\n<tbody id="activityList" class="report-activity-list">\n</tbody>\n<tfoot>\n    <tr>\n        <td colspan="3">\n            <div class="centered">\n                <button class="btn btn-secondary btn-small show-more-btn top-s"><%- Localizer.localize(\'show_previous_comments\') %></button>\n            </div>\n        </td>\n    </tr>\n</tfoot>\n'
    },
    3203: function(t, e) {
        t.exports = '<tr class="table-subhead animated-fast fadeInDown">\n    <td colspan="3">\n        <%- timeBucket %>\n    </td>\n</tr>\n'
    },
    3204: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(3205)
          , c = a.n(l)
          , h = {
            LEARN_MORE_CLICKED: "LEARN_MORE_CLICKED"
        }
          , d = n.a.View.extend({
            events: {
                "click .te-learn-more-btn": "onLearnMoreClicked"
            },
            initialize: function(t) {
                this.template = r.a.template(c.a),
                this.isWidget = t.isWidget,
                this.isRespirationRateEnabled = t.isRespirationRateEnabled
            },
            render: function() {
                this.$el.html(this.template({
                    Localizer: o.a,
                    hidden: this.hidden,
                    isWidget: this.isWidget
                }))
            },
            onLearnMoreClicked: function(t) {
                t.preventDefault(),
                this.trigger(h.LEARN_MORE_CLICKED)
            },
            destroy: function() {
                this.undelegateEvents()
            }
        });
        d.Events = h,
        e.a = d
    },
    3205: function(t, e) {
        t.exports = "<div class=\"<%- isWidget ? 'top-l' : 'top-xl' %> text-center training-effect-empty-state\">\n    <% if(!isWidget) { %>\n        <h4><%- Localizer.localize('training.effect.report.empty.msg') %></h4>\n        <button class=\"btn te-learn-more-btn\"><%- Localizer.localize('learn_more') %></button>\n    <% } else { %>\n        <h6 class=\"font-thin\"><%- Localizer.localize('training.effect.report.empty.msg') %></h6>\n    <% } %>\n</div>"
    },
    3206: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(6)
          , n = a(13)
          , o = a(1295)
          , l = a(1302)
          , c = a(23)
          , h = a(1356)
          , d = a(1233)
          , u = a.n(d)
          , p = a(1256)
          , g = a.n(p)
          , m = a(1420)
          , f = a.n(m)
          , v = a(15)
          , T = a.n(v);
        g()(u.a),
        f()(u.a),
        e.a = o.a.extend({
            initializeChart: function(t) {
                this.metricColorRanges = t.metricColorRanges,
                this.metricAvg = t.metricAvg,
                this.metricCount = 0
            },
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", s.a.localize("value.label"), this.yAxisTitle]
                }
            },
            determineYAxisTitle: function() {
                switch (this.report.metricName) {
                case l.a.ACTIVITY_AVERAGE_SPEED:
                    return s.a.localize("label_speed");
                case l.a.ACTIVITY_AVERAGE_PACE:
                    return s.a.localize("label_pace");
                case l.a.ACTIVITY_AVERAGE_SWIM_PACE:
                    return s.a.localize("label_swim_pace");
                case l.a.ACTIVITY_AVERAGE_HEART_RATE:
                case l.a.ACTIVITY_MAX_HEART_RATE:
                    return s.a.localize("label_heart_rate");
                case l.a.ACTIVITY_AVERAGE_POWER:
                    return s.a.localize("label_power");
                case l.a.ACTIVITY_AVERAGE_BIKE_CADENCE:
                    return s.a.localize("label_bike_cadence");
                case l.a.ACTIVITY_AVERAGE_RUN_CADENCE:
                    return s.a.localize("label_run_cadence");
                case l.a.ACTIVITY_NORMALIZED_POWER:
                    return s.a.localize("label_norm_power");
                case l.a.ACTIVITY_MAX_20_MIN_AVERAGE_POWER:
                    return s.a.localize("label_max_20_min_avg_power");
                case l.a.ACTIVITY_VERTICAL_OSCILLATION:
                    return s.a.localize("label_vert_oscillation");
                case l.a.ACTIVITY_GROUND_CONTACT_TIME:
                    return s.a.localize("label_ground_contact_time");
                case l.a.ACTIVITY_AVG_STRIDE_LENGTH:
                    return s.a.localize("distance.meter");
                case l.a.ACTIVITY_AVG_VERTICAL_RATIO:
                    return s.a.localize("ACTIVITY_AVG_VERTICAL_RATIO");
                case l.a.ACTIVITY_AVG_GROUND_CONTACT_BALANCE:
                    return "";
                case l.a.ACTIVITY_AVERAGE_RESPIRATION_RATE:
                    return s.a.localize("label_respiration_rate")
                }
            },
            setCategories: function() {},
            setSeries: function() {
                this.options.series = [{
                    showInLegend: !1,
                    name: null,
                    data: this.chartSeries
                }]
            },
            customizeOptions: function() {
                u.a.setOptions({
                    lang: {
                        shortMonths: [s.a.localize("month.abbr.01"), s.a.localize("month.abbr.02"), s.a.localize("month.abbr.03"), s.a.localize("month.abbr.04"), s.a.localize("month.abbr.05"), s.a.localize("month.abbr.06"), s.a.localize("month.abbr.07"), s.a.localize("month.abbr.08"), s.a.localize("month.abbr.09"), s.a.localize("month.abbr.10"), s.a.localize("month.abbr.11"), s.a.localize("month.abbr.12")],
                        shortWeekdays: [s.a.localize("day.0.short"), s.a.localize("day.1.short"), s.a.localize("day.2.short"), s.a.localize("day.3.short"), s.a.localize("day.4.short"), s.a.localize("day.5.short"), s.a.localize("day.6.short")]
                    }
                });
                var t = 0;
                switch (this.metricPeriod) {
                case "daily":
                    t = h.a.MS_IN_ONE_DAY;
                    break;
                case "weekly":
                    t = 7 * h.a.MS_IN_ONE_DAY;
                    break;
                default:
                    t = 31 * h.a.MS_IN_ONE_DAY
                }
                this.options.xAxis = {
                    type: "datetime",
                    tickInterval: t,
                    min: T()(this.startDateStr).valueOf(),
                    max: T()(this.untilDateStr).valueOf() + h.a.MS_IN_ONE_DAY / 2,
                    startOnTick: !0,
                    endOnTick: !1,
                    dateTimeLabelFormats: {
                        day: "%a",
                        week: "%b %e",
                        month: "%b",
                        millisecond: "%b"
                    },
                    labels: {
                        style: {
                            color: "#666"
                        }
                    },
                    title: {
                        enabled: !1
                    }
                },
                this.options.plotOptions = {
                    scatter: {
                        marker: {
                            radius: 5,
                            states: {
                                hover: {
                                    enabled: !0,
                                    lineColor: "rgb(100,100,100)"
                                }
                            }
                        },
                        states: {
                            hover: {
                                marker: {
                                    enabled: !1
                                },
                                halo: null
                            }
                        }
                    }
                };
                var e = "";
                switch (this.report.metricName) {
                case l.a.ACTIVITY_AVERAGE_SPEED:
                    e = "metric" == this.userPreferences.get("measurementSystem") ? s.a.localize("speed_unit_metric") : s.a.localize("speed_unit_statute");
                    var a = "metric" == this.userPreferences.get("measurementSystem") ? s.a.localize("label_speed_unit_metric") : s.a.localize("label_speed_unit_statute");
                    this.options.yAxis.title.text = a;
                    break;
                case l.a.ACTIVITY_AVERAGE_PACE:
                    e = "metric" == this.userPreferences.get("measurementSystem") ? s.a.localize("pace_unit_metric") : s.a.localize("pace_unit_statute");
                    a = "metric" == this.userPreferences.get("measurementSystem") ? s.a.localize("label_pace_unit_metric") : s.a.localize("label_pace_unit_statute");
                    this.options.yAxis.title.text = a;
                    break;
                case l.a.ACTIVITY_AVERAGE_RUN_CADENCE:
                    e = s.a.localize("run_cadence_unit");
                    a = s.a.localize("label_run_cadence_unit");
                    this.options.yAxis.title.text = a;
                    break;
                case l.a.ACTIVITY_AVERAGE_BIKE_CADENCE:
                    e = s.a.localize("bike_cadence_unit");
                    a = s.a.localize("label_bike_cadence_unit");
                    this.options.yAxis.title.text = a;
                    break;
                case l.a.ACTIVITY_AVERAGE_HEART_RATE:
                case l.a.ACTIVITY_MAX_HEART_RATE:
                    e = s.a.localize("heart_rate_unit");
                    a = s.a.localize("label_heart_rate_unit");
                    this.options.yAxis.title.text = a;
                    break;
                case l.a.ACTIVITY_AVERAGE_POWER:
                case l.a.ACTIVITY_NORMALIZED_POWER:
                case l.a.ACTIVITY_MAX_20_MIN_AVERAGE_POWER:
                    e = s.a.localize("max_avg_power_unit");
                    a = s.a.localize("label_power_unit");
                    this.options.yAxis.title.text = a;
                    break;
                case l.a.ACTIVITY_VERTICAL_OSCILLATION:
                    e = s.a.localize("vert_oscillation_unit");
                    a = s.a.localize("label_vert_oscillation_unit");
                    this.options.yAxis.title.text = a;
                    break;
                case l.a.ACTIVITY_GROUND_CONTACT_TIME:
                    e = s.a.localize("ground_contact_time_unit");
                    a = s.a.localize("label_ground_contact_time_unit");
                    this.options.yAxis.title.text = a;
                    break;
                case l.a.ACTIVITY_AVG_STRIDE_LENGTH:
                    e = s.a.localize("stride_length_unit");
                    a = s.a.localize("stride_length_unit");
                    this.options.yAxis.title.text = a;
                    break;
                case l.a.ACTIVITY_AVG_GROUND_CONTACT_BALANCE:
                    e = "";
                    break;
                case l.a.ACTIVITY_AVERAGE_SWIM_PACE:
                    e = "metric" == this.userPreferences.get("measurementSystem") ? s.a.localize("swim_pace_unit_metric") : s.a.localize("swim_pace_unit_statute");
                    a = "metric" == this.userPreferences.get("measurementSystem") ? s.a.localize("label_swim_unit_metric") : s.a.localize("label_swim_unit_statute");
                    this.options.yAxis.title.text = a;
                    break;
                case l.a.ACTIVITY_AVERAGE_RESPIRATION_RATE:
                    e = s.a.localize("label_respiration_rate_unit"),
                    this.options.yAxis.title.text = s.a.localize("label_respiration_rate_unit_long")
                }
                var i = this.determineAverageValue()
                  , r = i;
                switch (this.report.metricName) {
                case l.a.ACTIVITY_AVERAGE_PACE:
                    r = n.a.personalizePace(1 / this.metricAvg, !0);
                    break;
                case l.a.ACTIVITY_AVG_GROUND_CONTACT_BALANCE:
                    var o = n.a.getGroundContactBalance(this.metricAvg);
                    r = s.a.localize(n.a.getPowerBalanceUnitKey(), o.left, o.right);
                    break;
                case l.a.ACTIVITY_AVG_VERTICAL_RATIO:
                    r = n.a.personalizeVerticalRatio(this.metricAvg) + " " + s.a.localize(n.a.getVerticalRatioUnitKey());
                    break;
                case l.a.ACTIVITY_AVERAGE_SWIM_PACE:
                    r = n.a.personalizeSwimPace(this.metricAvg, this.userPreferences.get("measurementSystem"))
                }
                if ("page" == this.chartFormat && (this.options.yAxis.plotLines = [{
                    value: i,
                    color: "black",
                    dashStyle: "solid",
                    width: 2,
                    label: {
                        text: s.a.localize("average") + " = " + r + " " + e
                    },
                    zIndex: 5
                }]),
                this.report.metricName == l.a.ACTIVITY_AVG_GROUND_CONTACT_BALANCE) {
                    var c = this.calculateGCTMinMax();
                    this.options.yAxis.max = c.max,
                    this.options.yAxis.min = c.min,
                    this.options.yAxis.labels = {
                        formatter: function() {
                            return this.value < 50 ? s.a.localize("power_balance_right_format", 100 - this.value) : this.value > 50 ? s.a.localize("power_balance_left_format", this.value) : "50/50"
                        }
                    },
                    this.options.tooltip = {
                        formatter: function() {
                            var t = n.a.getGroundContactBalance(this.y);
                            return s.a.localize(n.a.getPowerBalanceUnitKey(), t.left, t.right)
                        }
                    }
                } else if (this.report.metricName == l.a.ACTIVITY_AVERAGE_RESPIRATION_RATE) {
                    var d = this;
                    this.options.tooltip = {
                        formatter: function() {
                            return "<b>" + d.getFormattedTooltipDate(new Date(this.x)) + "</b><br>" + this.point.y + " " + e
                        }
                    }
                } else {
                    d = this;
                    this.options.tooltip = {
                        formatter: function() {
                            return "<b>" + d.getFormattedTooltipDate(new Date(this.x)) + "</b><br>" + this.point.name
                        }
                    }
                }
            },
            getFormattedTooltipDate: function(t) {
                return "monthly" === this.metricPeriod || "yearly" === this.metricPeriod ? c.a.formatMonthYear(t) : n.a.personalizeDateWithShortMonth(t, s.a)
            },
            calculateGCTMinMax: function() {
                var t = 0
                  , e = 100;
                return r.a.each(this.options.series[0].data, function(a) {
                    a.y > t && (t = a.y),
                    a.y < e && (e = a.y)
                }),
                100 - e >= t ? t = 100 - e : e = 100 - t,
                e = Math.max(0, e),
                t = Math.min(100, t),
                {
                    min: e,
                    max: t
                }
            },
            initializeChartSeries: function() {
                this.chartSeries = []
            },
            addMetricToDataset: function(t) {
                var e = ""
                  , a = (e = "widget" != this.chartFormat || r.a.isUndefined(t.startDateOfWeek) || "monthly" != this.metricPeriod && "yearly" != this.metricPeriod ? r.a.isUndefined(t.calendarDate) ? [t.month.year + "-" + t.month.monthId + "-1"] : t.calendarDate.split(" ") : t.startDateOfWeek.split(" "))[0].split("-")
                  , i = new Date(a[0],a[1] - 1,a[2],0,0,0)
                  , s = i.getFullYear().toString()
                  , n = i.getMonth().toString()
                  , o = i.getDate().toString();
                if (t.value > 0) {
                    var l = this.determineSeriesName(t)
                      , c = this.determineSeriesValue(t)
                      , h = this.getPointColor(c)
                      , d = (this.activeTab == "last_six_months" || this.activeTab == "last_year") ? 2 : 5; // TX GCOverrides v1.15 graph dot size
                    if ("widget" == this.chartFormat)
                        d = 3;
                    var u = {
                        name: l,
                        x: Date.UTC(s, n, o, 12, 0, 0),
                        y: c,
                        color: h,
                        marker: {
                            fillColor: h,
                            radius: d,
                            states: {
                                hover: {
                                    fillColor: h
                                }
                            }
                        }
                    };
                    this.chartSeries.push(u),
                    this.exportData.rows[this.exportDataCount++] = {
                        values: [e.toString(), c, l]
                    }
                }
            },
            getPointColor: function(t) {
                var e = "#11a9ed";
                switch (this.report.metricName) {
                case l.a.ACTIVITY_GROUND_CONTACT_TIME:
                case l.a.ACTIVITY_AVERAGE_RUN_CADENCE:
                    this.metricColorRanges.each(function(a) {
                        t >= a.get("rangeMin") && t < a.get("rangeMax") && (e = a.get("rangeColor"))
                    });
                    break;
                case l.a.ACTIVITY_AVG_GROUND_CONTACT_BALANCE:
                    e = this.getGCTBalanceColor(t);
                    break;
                case l.a.ACTIVITY_VERTICAL_OSCILLATION:
                case l.a.ACTIVITY_AVG_VERTICAL_RATIO:
                    return "#cf23b8"
                }
                return e
            },
            getGCTBalanceColor: function(t) {
                return t < 47.6 ? "#ff0035" : t >= 47.6 && t <= 49.4 ? "#ed7e00" : t >= 49.3 && t <= 50.7 ? "#50b012" : t >= 50.6 && t <= 52.2 ? "#ed7e00" : t > 52.2 ? "#ff0035" : void 0
            },
            determineSeriesName: function(t) {
                var e = t.value;
                switch (this.report.metricName) {
                case l.a.ACTIVITY_AVERAGE_SPEED:
                    var a = "metric" == this.userPreferences.get("measurementSystem") ? s.a.localize("speed_unit_metric") : s.a.localize("speed_unit_statute");
                    e = Math.round(100 * n.a.convertSpeed(t.value, this.userPreferences.get("measurementSystem"))) / 100 + " " + a;
                    break;
                case l.a.ACTIVITY_AVERAGE_PACE:
                    a = "metric" == this.userPreferences.get("measurementSystem") ? s.a.localize("pace_unit_metric") : s.a.localize("pace_unit_statute");
                    e = n.a.personalizePace(1 / t.value, !0) + " " + a;
                    break;
                case l.a.ACTIVITY_AVERAGE_SWIM_PACE:
                    a = s.a.localize(n.a.getSwimPaceUnitKey(this.userPreferences.get("measurementSystem")));
                    e = n.a.personalizeSwimPace(t.value, this.userPreferences.get("measurementSystem")) + " " + a;
                    break;
                case l.a.ACTIVITY_AVERAGE_HEART_RATE:
                case l.a.ACTIVITY_MAX_HEART_RATE:
                    e = Math.round(t.value) + " " + s.a.localize("heart_rate_unit");
                    break;
                case l.a.ACTIVITY_AVERAGE_POWER:
                    e = t.value + " " + s.a.localize("max_avg_power_unit");
                    break;
                case l.a.ACTIVITY_AVERAGE_BIKE_CADENCE:
                    e = Math.round(t.value) + " " + s.a.localize("bike_cadence_unit");
                    break;
                case l.a.ACTIVITY_AVERAGE_RUN_CADENCE:
                    e = Math.round(t.value) + " " + s.a.localize("run_cadence_unit");
                    break;
                case l.a.ACTIVITY_NORMALIZED_POWER:
                case l.a.ACTIVITY_MAX_20_MIN_AVERAGE_POWER:
                    e = Math.round(t.value) + " " + s.a.localize("max_avg_power_unit");
                    break;
                case l.a.ACTIVITY_VERTICAL_OSCILLATION:
                    e = Math.round(10 * t.value) / 10 + " " + s.a.localize("vert_oscillation_unit");
                    break;
                case l.a.ACTIVITY_GROUND_CONTACT_TIME:
                    e = Math.round(t.value) + " " + s.a.localize("ground_contact_time_unit");
                    break;
                case l.a.ACTIVITY_AVG_STRIDE_LENGTH:
                    e = Math.round(100 * t.value) / 100 + " " + s.a.localize("stride_length_unit");
                    break;
                case l.a.ACTIVITY_AVG_VERTICAL_RATIO:
                    e = n.a.personalizeVerticalRatio(t.value) + " " + s.a.localize(n.a.getVerticalRatioUnitKey());
                    break;
                case l.a.ACTIVITY_AVG_GROUND_CONTACT_BALANCE:
                    e = Math.round(t.value);
                    break;
                case l.a.ACTIVITY_AVERAGE_RESPIRATION_RATE:
                    e = Math.round(t.value) + " " + s.a.localize("label_respiration_rate_unit")
                }
                return e
            },
            determineSeriesValue: function(t) {
                var e = t.value;
                switch (this.report.metricName) {
                case l.a.ACTIVITY_AVERAGE_SPEED:
                    e = Math.round(100 * n.a.convertSpeed(t.value, this.userPreferences.get("measurementSystem"))) / 100;
                    break;
                case l.a.ACTIVITY_AVERAGE_PACE:
                    e = "metric" == this.userPreferences.get("measurementSystem") ? Math.round(16.66667 * t.value * 100) / 100 : Math.round(26.8224 * t.value * 100) / 100;
                    break;
                case l.a.ACTIVITY_AVERAGE_SWIM_PACE:
                    e = n.a.convertFractionalSwimPace(t.value);
                    break;
                case l.a.ACTIVITY_AVERAGE_HEART_RATE:
                case l.a.ACTIVITY_MAX_HEART_RATE:
                case l.a.ACTIVITY_AVERAGE_POWER:
                case l.a.ACTIVITY_AVERAGE_BIKE_CADENCE:
                case l.a.ACTIVITY_AVERAGE_RUN_CADENCE:
                case l.a.ACTIVITY_NORMALIZED_POWER:
                case l.a.ACTIVITY_MAX_20_MIN_AVERAGE_POWER:
                case l.a.ACTIVITY_GROUND_CONTACT_TIME:
                case l.a.ACTIVITY_AVERAGE_RESPIRATION_RATE:
                    e = Math.round(t.value);
                    break;
                case l.a.ACTIVITY_AVG_STRIDE_LENGTH:
                    e = Math.round(100 * t.value) / 100;
                    break;
                case l.a.ACTIVITY_VERTICAL_OSCILLATION:
                    e = Math.round(10 * t.value) / 10
                }
                return e
            },
            determineAverageValue: function() {
                var t = this.metricAvg;
                switch (this.report.metricName) {
                case l.a.ACTIVITY_AVERAGE_SPEED:
                    t = Math.round(100 * n.a.convertSpeed(this.metricAvg, this.userPreferences.get("measurementSystem"))) / 100;
                    break;
                case l.a.ACTIVITY_AVERAGE_PACE:
                    t = "metric" == this.userPreferences.get("measurementSystem") ? Math.round(16.66667 * this.metricAvg * 100) / 100 : Math.round(26.8224 * this.metricAvg * 100) / 100;
                    break;
                case l.a.ACTIVITY_AVERAGE_HEART_RATE:
                case l.a.ACTIVITY_MAX_HEART_RATE:
                case l.a.ACTIVITY_AVERAGE_POWER:
                case l.a.ACTIVITY_AVERAGE_BIKE_CADENCE:
                case l.a.ACTIVITY_AVERAGE_RUN_CADENCE:
                case l.a.ACTIVITY_NORMALIZED_POWER:
                case l.a.ACTIVITY_MAX_20_MIN_AVERAGE_POWER:
                case l.a.ACTIVITY_GROUND_CONTACT_TIME:
                case l.a.ACTIVITY_AVERAGE_RESPIRATION_RATE:
                    t = Math.round(this.metricAvg);
                    break;
                case l.a.ACTIVITY_AVG_STRIDE_LENGTH:
                    t = Math.round(100 * this.metricAvg) / 100;
                    break;
                case l.a.ACTIVITY_VERTICAL_OSCILLATION:
                    t = Math.round(10 * this.metricAvg) / 10;
                    break;
                case l.a.ACTIVITY_AVERAGE_SWIM_PACE:
                    t = n.a.convertFractionalSwimPace(this.metricAvg)
                }
                return t
            }
        })
    },
    3207: function(t, e, a) {
        "use strict";
        a(7),
        a(9);
        var i = a(6)
          , r = a(13)
          , s = a(1295)
          , n = a(1323);
        e.a = s.a.extend({
            determineYAxisTitle: function() {
                return i.a.localize("sleep.label")
            },
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", i.a.localize("sleep_duration_unit"), i.a.localize("sleep_duration_unit")]
                }
            },
            customizeOptions: function() {
                var t = this;
                switch (this.options.yAxis = {
                    min: 0,
                    labels: {
                        formatter: function() {
                            return r.a.formatDecimalNumber(this.value, 0)
                        }
                    },
                    title: {
                        text: i.a.localize("label_sleep_duration")
                    }
                },
                this.metricPeriod) {
                case "weekly":
                    this.options.xAxis.tickInterval = 8,
                    this.options.xAxis.showFirstLabel = !0,
                    this.options.xAxis.showLastLabel = !0,
                    this.options.xAxis.labels = {
                        align: "left",
                        formatter: function() {
                            return this.value
                        }
                    };
                    break;
                case "monthly":
                    this.options.xAxis.showFirstLabel = !0,
                    this.options.xAxis.tickInterval = 4,
                    this.options.xAxis.labels = {
                        formatter: function() {
                            var e = t.userPreferences.get("dateFormat");
                            return "mmddyyyy" == e.formatKey || "yyyymmdd" == e.formatKey ? this.value.substr(0, this.value.indexOf(" ")) : this.value.substr(this.value.indexOf(" ") + 1)
                        }
                    };
                    break;
                case "yearly":
                    this.options.xAxis.showFirstLabel = !0,
                    this.options.xAxis.tickInterval = "widget" == this.chartFormat ? 8 : 5,
                    this.options.xAxis.labels = {
                        formatter: function() {
                            var e = t.userPreferences.get("dateFormat");
                            return "mmddyyyy" == e.formatKey || "yyyymmdd" == e.formatKey ? this.value.substr(0, this.value.indexOf(" ")) : this.value.substr(this.value.indexOf(" ") + 1)
                        }
                    }
                }
                switch (this.options.plotOptions = {
                    series: {
                        marker: {
                            radius: "widget" == this.chartFormat ? 1 : 3
                        },
                        states: {
                            hover: {
                                enabled: !0,
                                halo: null
                            }
                        }
                    }
                },
                this.metricPeriod) {
                case "daily":
                case "weekly":
                    this.options.tooltip = {
                        formatter: function() {
                            return "<b>" + this.x + "</b><br/>" + i.a.localize("sleep") + ": " + this.point.name
                        }
                    };
                    break;
                case "weekly":
                case "monthly":
                case "yearly":
                    this.options.tooltip = {
                        formatter: function() {
                            return "number" === typeof this.x ? i.a.localize("sleep") + ": " + this.point.name : "<b>" + this.x + "</b><br/>" + i.a.localize("sleep.label.avg") + ": " + this.point.name
                        }
                    }
                }
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                this.chartSeries.sleep = {
                    color: "#daf200",
                    fillOpacity: .5,
                    name: i.a.localize("sleep"),
                    type: "area",
                    data: this.createZeroArray(this.metricPeriod)
                }
            },
            createZeroArray: function() {
                switch (this.metricPeriod) {
                case "daily":
                    return [{
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }];
                case "weekly":
                    var t = []
                      , e = i.a.localize("sleep.duration.label.2", 0);
                    return n.a.iterateDateRange({
                        startDateStr: this.startDateStr,
                        untilDateStr: this.untilDateStr
                    }, function() {
                        t.push({
                            y: 0,
                            name: e
                        })
                    }
                    .bind(this)),
                    t;
                case "monthly":
                    return [{
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }];
                case "yearly":
                    return [{
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }, {
                        y: 0,
                        name: i.a.localize("sleep.duration.label.2", 0)
                    }]
                }
            },
            getXAxisCategories: function() {
                switch (this.metricPeriod) {
                case "daily":
                    this.getDailyCategories();
                    break;
                case "weekly":
                    this.getOneMonthCategories();
                    break;
                case "monthly":
                case "yearly":
                    this.getWeeklyCategories()
                }
            },
            getDailyCategories: function() {
                this.categories = [];
                for (var t = -6; t <= 0; t++) {
                    var e = new Date;
                    e.setHours(12),
                    e.setMinutes(0),
                    e.setMilliseconds(0),
                    e.setDate(e.getDate() + this.currentDateOffset),
                    e.setDate(e.getDate() + t);
                    var a, r = e.getDay().toString();
                    a = i.a.localize("day." + r + ".short"),
                    this.categories.push(a)
                }
            },
            getWeeklyCategories: function() {
                this.categories = [];
                var t = "0";
                switch (this.userPreferences.get("firstDayOfWeek").dayName) {
                case "saturday":
                    t = "6";
                    break;
                case "monday":
                    t = "1"
                }
                for (var e = this.daysInMonth; e <= 0; e++) {
                    var a = new Date;
                    if (a.setHours(12),
                    a.setMinutes(0),
                    a.setMilliseconds(0),
                    a.setDate(a.getDate() + this.currentDateOffset),
                    a.setDate(a.getDate() + e),
                    a.getDay().toString() == t) {
                        var r = a.getDate().toString()
                          , s = (a.getMonth() + 1).toString()
                          , n = this.userPreferences.get("dateFormat")
                          , o = "";
                        o = "mmddyyyy" == n.formatKey || "yyyymmdd" == n.formatKey ? i.a.localize("month.abbr." + (s.length > 1 ? s : "0" + s)) + " " + r : r + " " + i.a.localize("month.abbr." + (s.length > 1 ? s : "0" + s)),
                        this.categories.push(o)
                    }
                }
            },
            getOneMonthCategories: function() {
                this.categories = [];
                var t = this.userPreferences.get("dateFormat").formatKey;
                n.a.iterateDateRange({
                    startDateStr: this.startDateStr,
                    untilDateStr: this.untilDateStr
                }, function(e) {
                    var a = n.a.formatMonthDate(e, t);
                    this.categories.push(a)
                }
                .bind(this))
            },
            determineDataIndex: function(t) {
                var e = "";
                switch (this.metricPeriod) {
                case "daily":
                    e = this.calculateDailyDataIndex(t.calendarDate, 7);
                    break;
                case "weekly":
                    e = this.calculateWeeklyDataIndex(t.calendarDate);
                    break;
                case "weekly":
                case "monthly":
                case "yearly":
                    e = this.calculateWeeklyDataIndex(t.startDateOfWeek)
                }
                return e
            },
            calculateDailyDataIndex: function(t, e) {
                var a = n.a.formatDate(this.currentDateOffset)
                  , i = e - n.a.determineNumberOfDays(t, a);
                return i < 0 || i > 6 ? -1 : i
            },
            calculateWeeklyDataIndex: function(t) {
                var e = t.split("-")
                  , a = new Date(e[0],e[1] - 1,e[2],0,0,0)
                  , r = a.getMonth() + 1
                  , s = a.getDate()
                  , n = this.userPreferences.get("dateFormat")
                  , o = "";
                o = "mmddyyyy" == n.formatKey || "yyyymmdd" == n.formatKey ? i.a.localize("month.abbr." + (r > 9 ? r : "0" + r)) + " " + s : s + " " + i.a.localize("month.abbr." + (r > 9 ? r : "0" + r));
                var l = this.categories.indexOf(o);
                return l < 0 ? -1 : l
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                if (e >= 0 && this.chartSeries.sleep) {
                    this.value = Math.round(t.value / 3600 * 10) / 10;
                    var a = Math.floor(t.value / 3600)
                      , r = Math.round((t.value - 3600 * a) / 60);
                    this.label = a + ":" + (r > 9 ? r : "0" + r) + " " + i.a.localize("sleep_duration_unit").toLowerCase(),
                    this.chartSeries.sleep.data[e] = {
                        y: this.value,
                        name: this.label
                    },
                    this.exportData.rows[this.exportDataCount++] = {
                        values: [this.categories[e], this.value, this.label]
                    }
                }
            }
        })
    },
    3208: function(t, e, a) {
        "use strict";
        a(7),
        a(9);
        var i = a(6)
          , r = a(13)
          , s = a(1295);
        e.a = s.a.extend({
            determineYAxisTitle: function() {
                return i.a.localize("steps.label")
            },
            customizeOptions: function() {
                var t = this;
                this.options.plotOptions = {
                    column: {
                        dataLabels: {
                            enabled: !1,
                            color: "white"
                        }
                    },
                    series: {
                        stacking: "normal",
                        showCheckbox: !1,
                        selected: !0
                    }
                },
                this.options.tooltip = {
                    formatter: function() {
                        var e = t.goalSeries.goal.data[this.point.x];
                        return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + r.a.formatDecimalNumber(this.y, 0) + " " + i.a.localize("steps.label") + "<br/>" + i.a.localize("step.goal") + ": " + r.a.formatDecimalNumber(e, 0) + " " + i.a.localize("steps.label")
                    }
                }
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                this.chartSeries.remaining = {
                    color: "#dddddd",
                    name: i.a.localize("step.remaining"),
                    data: this.createZeroArray(this.metricPeriod)
                },
                this.chartSeries.incomplete = {
                    color: "#11a9ed",
                    name: i.a.localize("step.actual"),
                    data: this.createZeroArray(this.metricPeriod)
                },
                this.chartSeries.complete = {
                    color: "#80ea40",
                    name: i.a.localize("step.actual"),
                    data: this.createZeroArray(this.metricPeriod)
                },
                this.goalSeries = {},
                this.goalSeries.goal = {
                    name: i.a.localize("step.goal"),
                    data: this.createZeroArray(this.metricPeriod)
                }
            },
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", i.a.localize("step.actual"), i.a.localize("step.goal")]
                }
            },
            processMetricList: function(t) {
                this.metricsMap = t.get("metricsMap");
                var e = this.metricsMap.WELLNESS_TOTAL_STEPS;
                if (e)
                    for (var a = 0; a < e.length; a++)
                        this.addMetricToDataset(e[a])
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                if (e >= 0) {
                    var a = this.getGoalValue(e);
                    this.exportData.rows[this.exportDataCount++] = {
                        values: [this.categories[e], t.value || 0, a || 0]
                    },
                    t.value >= a ? (this.chartSeries.remaining.data[e] = 0,
                    this.chartSeries.complete.data[e] = t.value) : (this.chartSeries.remaining.data[e] = a - t.value,
                    this.chartSeries.incomplete.data[e] = t.value),
                    this.goalSeries.goal.data[e] = a
                }
            },
            getGoalValue: function(t) {
                for (var e = 0, a = this.metricsMap.WELLNESS_TOTAL_STEP_GOAL, i = 0; i < a.length; i++) {
                    var r = a[i];
                    this.determineDataIndex(r) == t && (e = r.value)
                }
                return e
            }
        })
    },
    3209: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(13)
          , l = a(6)
          , c = a(15)
          , h = a.n(c)
          , d = a(1233)
          , u = a.n(d)
          , p = a(23)
          , g = n.a.View.extend({
            initialize: function(t) {
                this.metrics = t.metrics.toJSON(),
                this.metricPeriod = t.metricPeriod,
                this.userSettings = t.userSettings,
                this.startDate = t.startDate,
                this.endDate = t.endDate,
                this.isChartOnWidget = t.isChartOnWidget
            },
            render: function() {
                this.renderChart()
            },
            renderChart: function() {
                var t = this.getChartOptions();
                this.chartObj = new u.a.Chart(this.el,t)
            },
            getChartOptions: function() {
                var t = this;
                return {
                    chart: {
                        type: "column",
                        width: this.isChartOnWidget ? 290 : null,
                        height: this.isChartOnWidget ? 210 : null
                    },
                    exporting: {
                        enabled: !1
                    },
                    credits: {
                        enabled: !1
                    },
                    title: {
                        text: ""
                    },
                    xAxis: {
                        categories: this.getCategories()
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: "",
                            style: {
                                color: "#222"
                            }
                        },
                        labels: {
                            formatter: function() {
                                return o.a.formatDecimalNumber(this.value, 0)
                            }
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: "#808080"
                        }],
                        allowDecimals: !1
                    },
                    legend: {
                        enabled: !1,
                        itemStyle: {
                            fontWeight: "normal"
                        }
                    },
                    plotOptions: {
                        column: {
                            dataLabels: {
                                enabled: !1,
                                color: "white"
                            }
                        },
                        series: {
                            stacking: "normal",
                            showCheckbox: !1,
                            selected: !0
                        }
                    },
                    tooltip: {
                        formatter: function() {
                            var e = t.goalSeries[this.point.x]
                              , a = t.userSettings.getHydrationUnit()
                              , i = o.a.formatFluidValue(this.y)
                              , r = o.a.formatFluidValue(e);
                            if (0 === this.y)
                                return !1;
                            if ("monthly" === t.metricPeriod)
                                var s = o.a.formatFluidValue(t.monthlyHighlights[this.point.x].highestDaily)
                                  , n = o.a.formatFluidValue(t.monthlyHighlights[this.point.x].lowestDaily);
                            return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + i + " " + l.a.localize(o.a.getFluidUnitKey(a, i)) + "<br/>" + l.a.localize("step.goal") + ": " + r + " " + l.a.localize(o.a.getFluidUnitKey(a, r)) + ("monthly" === t.metricPeriod ? "<hr/><br/>" + l.a.localize("highest") + ": " + s + " " + l.a.localize(o.a.getFluidUnitKey(a, s)) + "<br/>" + l.a.localize("lowest") + ": " + n + " " + l.a.localize(o.a.getFluidUnitKey(a, n)) : "")
                        }
                    },
                    series: r.a.toArray(this.getSeries())
                }
            },
            getCategories: function() {
                switch (this.metricPeriod) {
                case "daily":
                    return this.getDailyCategories();
                case "weekly":
                    return this.getDailyCategories(!0);
                case "monthly":
                    return this.getMonthlyCategories(!0)
                }
            },
            getNumberOfMonths: function() {
                return h()(this.endDate).diff(h()(this.startDate), "months") + 1
            },
            getDailyCategories: function(t) {
                for (var e = h()(this.startDate), a = h()(this.endDate), i = []; !e.isSame(a, "day"); ) {
                    var r = t ? p.a.formatMonthDay(e.toDate()) : l.a.localize("day." + e.day() + ".short");
                    i.push(r),
                    e.add(1, "day")
                }
                return i.push(t ? p.a.formatMonthDay(a.toDate()) : l.a.localize("day." + a.day() + ".short")),
                i
            },
            getMonthlyCategories: function() {
                for (var t = h()(this.startDate).startOf("month"), e = h()(this.endDate).startOf("month"), a = []; !t.isSame(e, "month"); )
                    a.push(l.a.localize("month.abbr." + h()().month(t.month()).format("MM"))),
                    t.add(1, "month");
                return a.push(l.a.localize("month.abbr." + h()().month(e.month()).format("MM"))),
                a
            },
            getSeries: function() {
                var t = {
                    remaining: {
                        color: "#dddddd",
                        name: l.a.localize("step.remaining"),
                        data: this.createZeroArray()
                    },
                    incomplete: {
                        color: "#11a9ed",
                        name: l.a.localize("step.actual"),
                        data: this.createZeroArray()
                    },
                    complete: {
                        color: "#80ea40",
                        name: l.a.localize("step.actual"),
                        data: this.createZeroArray()
                    }
                };
                return this.goalSeries = this.createZeroArray(),
                this.monthlyHighlights = new Array(this.getNumberOfChartItems()),
                t = this.getSeriesData(t)
            },
            getNumberOfChartItems: function() {
                switch (this.metricPeriod) {
                case "daily":
                    return 7;
                case "weekly":
                    return 28;
                case "monthly":
                    return this.getNumberOfMonths();
                default:
                    return 0
                }
            },
            createZeroArray: function() {
                return r.a.map("0".repeat(this.getNumberOfChartItems()).split(""), function(t) {
                    return +t
                })
            },
            getSeriesData: function(t) {
                for (var e = t.incomplete.data.length, a = this.userSettings.getHydrationUnit(), i = "monthly" === this.metricPeriod, r = 0; r < e; r++) {
                    var s = h()(this.startDate).clone().add(r, i ? "months" : "days")
                      , n = this.getMetricForDate(s);
                    n && (i ? (n.dailyAverageInML >= n.averageGoalInML ? (t.remaining.data[r] = 0,
                    t.complete.data[r] = o.a.convertFluid(n.dailyAverageInML, a)) : (t.remaining.data[r] = o.a.convertFluid(n.averageGoalInML, a) - o.a.convertFluid(n.dailyAverageInML, a),
                    t.incomplete.data[r] = o.a.convertFluid(n.dailyAverageInML, a)),
                    this.goalSeries[r] = o.a.convertFluid(n.averageGoalInML, a),
                    this.monthlyHighlights[r] = {
                        highestDaily: o.a.convertFluid(n.highestDailyValueInML, a),
                        lowestDaily: o.a.convertFluid(n.lowestDailyValueInML, a)
                    }) : (n.valueInML >= n.goalInML ? (t.remaining.data[r] = 0,
                    t.complete.data[r] = o.a.convertFluid(n.valueInML, a)) : (t.remaining.data[r] = o.a.convertFluid(n.goalInML, a) - o.a.convertFluid(n.valueInML, a),
                    t.incomplete.data[r] = o.a.convertFluid(n.valueInML, a)),
                    this.goalSeries[r] = o.a.convertFluid(n.goalInML, a)))
                }
                return t
            },
            getMetricForDate: function(t) {
                var e = "monthly" === this.metricPeriod;
                return e && t.startOf("month"),
                r.a.find(this.metrics, function(a) {
                    return h()(e ? a.monthStartDate : a.calendarDate).isSame(t, "day")
                })
            }
        });
        e.a = g
    },
    3210: function(t, e, a) {
        "use strict";
        var i = a(2)
          , r = a(6)
          , s = a(1295)
          , n = a(1323)
          , o = a(46)
          , l = a(15)
          , c = a.n(l)
          , h = a(23)
          , d = a(1498)
          , u = a(216)
          , p = a(85);
        e.a = s.a.extend({
            processMetricList: function(t) {
                "yearly" === this.metricPeriod ? this.addWeeklyMetricToDataset(t) : this.addDailyMetricToDataset(t)
            },
            determineYAxisTitle: function() {
                return ""
            },
            customizeOptions: function() {
                this.customizeYAxis(),
                this.customizeXAxis(),
                this.customizePlot(),
                this.customizeTooltip()
            },
            customizeYAxis: function() {
                this.options.yAxis = {
                    title: {
                        text: ""
                    },
                    tickPositions: [0, 25, 50, 75, 100]
                }
            },
            customizeXAxis: function() {
                switch (this.metricPeriod) {
                case "weekly":
                    this.options.xAxis = Object(i.a)({}, this.options.xAxis, {
                        tickInterval: "widget" === this.chartFormat ? 8 : 1,
                        labels: {
                            align: "widget" === this.chartFormat ? void 0 : "right"
                        }
                    });
                    break;
                case "yearly":
                    this.options.xAxis = Object(i.a)({}, this.options.xAxis, {
                        min: 0,
                        max: 12,
                        labels: {
                            formatter: function() {
                                return r.a.localize("month.abbr." + this.value)
                            }
                        }
                    })
                }
            },
            customizePlot: function() {
                this.options.plotOptions = {
                    series: {
                        marker: {
                            radius: "widget" === this.chartFormat ? 1 : 3
                        },
                        states: {
                            hover: {
                                enabled: !0,
                                halo: null
                            }
                        }
                    }
                }
            },
            customizeTooltip: function() {
                switch (this.metricPeriod) {
                case "daily":
                case "weekly":
                    this.options.tooltip = {
                        formatter: function() {
                            return "<b>" + this.x + "</b><br/>" + r.a.localize("score") + ": " + this.point.name
                        }
                    };
                    break;
                case "yearly":
                    this.options.tooltip = {
                        formatter: function() {
                            return "<b>" + h.a.formatMonthDay(p.a.parseISO(this.point.name)) + "</b><br/>" + r.a.localize("score") + " (" + r.a.localize("weekly_avg") + "): " + this.point.y
                        }
                    }
                }
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                this.chartSeries.score = {
                    color: o.purple_light_1,
                    name: r.a.localize("sleep"),
                    type: "line",
                    data: new Array(this.categories.length).fill(null)
                }
            },
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", r.a.localize("score")]
                }
            },
            getXAxisCategories: function() {
                switch (this.metricPeriod) {
                case "daily":
                    this.getDailyCategories();
                    break;
                case "weekly":
                    this.getOneMonthCategories();
                    break;
                case "yearly":
                    this.getWeeklyCategories()
                }
            },
            getWeeklyCategories: function() {
                this.categories = [];
                for (var t = new c.a(this.startDateStr,h.a.LINK_FORMAT).subtract(1, "month"), e = 0; e < d.a.CHART_52_WEEKS_LENGTH; e++) {
                    var a = u.a.getMonthNumber(t.add(1, "month").valueOf());
                    this.categories.push(a)
                }
            },
            getOneMonthCategories: function() {
                this.categories = [];
                var t = this.userPreferences.get("dateFormat").formatKey;
                n.a.iterateDateRange({
                    startDateStr: this.startDateStr,
                    untilDateStr: this.untilDateStr
                }, function(e) {
                    var a = n.a.formatMonthDate(e, t);
                    this.categories.push(a)
                }
                .bind(this))
            },
            determineDataIndex: function(t) {
                var e = "";
                switch (this.metricPeriod) {
                case "daily":
                    e = this.calculateDailyDataIndex(t.get("calendarDate"));
                    break;
                case "weekly":
                case "yearly":
                    e = this.calculateWeeklyDataIndex(t.get("calendarDate"))
                }
                return e
            },
            calculateWeeklyDataIndex: function(t) {
                var e = t.split("-")
                  , a = new Date(e[0],e[1] - 1,e[2],0,0,0)
                  , i = a.getMonth() + 1
                  , s = a.getDate()
                  , n = this.userPreferences.get("dateFormat")
                  , o = "";
                o = "mmddyyyy" === n.formatKey || "yyyymmdd" === n.formatKey ? r.a.localize("month.abbr." + (i > 9 ? i : "0" + i)) + " " + s : s + " " + r.a.localize("month.abbr." + (i > 9 ? i : "0" + i));
                var l = this.categories.indexOf(o);
                return l < 0 ? -1 : l
            },
            addDailyMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                e >= 0 && this.chartSeries.score && (this.value = t.get("value"),
                this.chartSeries.score.data[e] = {
                    y: this.value,
                    name: this.value
                }),
                this.exportData.rows[this.exportDataCount++] = {
                    values: [this.categories[e], this.value]
                }
            },
            addWeeklyMetricToDataset: function(t) {
                var e = t.get("calendarDate")
                  , a = t.get("value")
                  , i = n.a.getMonthIndex(e, this.categories)
                  , r = n.a.calculateOffsetInMonth(e)
                  , s = c()(e, h.a.LINK_FORMAT)
                  , o = c()(this.startDateStr, h.a.LINK_FORMAT).endOf("month");
                s.valueOf() < o.valueOf() && (i -= 12),
                a && this.chartSeries.score.data.push({
                    x: Number(i) + r,
                    y: a,
                    name: e
                }),
                this.exportData.rows[this.exportDataCount++] = {
                    values: [h.a.formatMonthDay(p.a.parseISO(e)), a]
                }
            }
        })
    },
    3211: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(14)
              , r = a(2)
              , s = a(32)
              , n = a(6)
              , o = a(7)
              , l = a.n(o)
              , c = a(9)
              , h = a.n(c)
              , d = a(13)
              , u = a(15)
              , p = a.n(u)
              , g = a(1233)
              , m = a.n(g)
              , f = a(3212)
              , v = a.n(f)
              , T = a(46)
              , _ = a(73)
              , A = a(104)
              , y = h.a.View.extend({
                initialize: function(t) {
                    this.template = l.a.template(v.a),
                    this.metrics = t.metrics.toJSON(),
                    this.metricPeriod = t.metricPeriod,
                    this.userSettings = t.userSettings,
                    this.startDate = t.startDate,
                    this.endDate = t.endDate,
                    this.tabView = t.tabView,
                    this.isUserInactiveOrCycleTypeNone = t.isUserInactiveOrCycleTypeNone,
                    this.isChartOnWidget = t.isChartOnWidget,
                    this.initExportData()
                },
                render: function() {
                    var e = this.template({});
                    t(this.el).html(e),
                    this.shouldChartRender() && this.renderChart(),
                    1 !== this.tabView || this.isChartOnWidget || this.renderMenstrualCycleTrackingSymptomsCharts()
                },
                shouldChartRender: function() {
                    return (!this.isCurrentCycle() || "monthly" === this.metricPeriod) && !this.isUserInactiveOrCycleTypeNone && this.isDataInCycleSummary()
                },
                addExportData: function() {
                    this.exportData.rows.push({
                        values: arguments
                    })
                },
                getExportData: function() {
                    return this.exportData
                },
                initExportData: function() {
                    this.exportDataCount = 0,
                    this.exportData = {
                        title: n.a.localize("label_menstrual_cycle_tracking"),
                        rows: []
                    }
                },
                getExportSingleCycleData: function(t) {
                    var e = null
                      , a = null
                      , i = null
                      , r = null
                      , s = null
                      , o = null;
                    if (t.startDate) {
                        var l = t.startDate;
                        e = this.getAbbreviatedDate(t.startDate) + " - " + this.getAbbreviatedDate(p()(l).add(t.cycleLength - 1, "d"))
                    }
                    if (t.periodLength && (a = t.periodLength + " " + n.a.localize("label_days")),
                    isNaN(t.lengthOfFertileWindow))
                        o = this.getFellicularPhaseLength(t.cycleLength, t.periodLength) + " " + n.a.localize("label_days");
                    else {
                        var c = Object(_.i)(t)
                          , h = Object(_.j)(t);
                        i = this.getFellicularPhaseLength(h, t.periodLength) + " " + n.a.localize("label_days"),
                        r = c + " " + n.a.localize("label_days"),
                        s = this.getLutealPhaseLength(t.cycleLength, h, c, t.periodLength) + " " + n.a.localize("label_days")
                    }
                    null !== e && null !== a && null !== i && null !== r && null !== s ? this.addExportData([e, n.a.localize("period_label") + ": " + a, n.a.localize("follicular_label") + ": " + i, n.a.localize("fertile_window_label") + ": " + r, n.a.localize("luteal_label") + ": " + s]) : null !== e && null !== a && null !== o && this.addExportData([e, n.a.localize("period_label") + ": " + a, n.a.localize("cycle_label") + ": " + o])
                },
                isCurrentCycle: function() {
                    return this.metrics && this.metrics[0] && this.metrics[0].cycleSummaries && this.metrics[0].cycleSummaries[0] && this.metrics[0].cycleSummaries[0].startDate && p()(p()(this.metrics[0].cycleSummaries[0].startDate).add(this.metrics[0].cycleSummaries[0].cycleLength, "d")).isAfter(p()(), "day")
                },
                renderChart: function() {
                    var t = "monthly" === this.metricPeriod ? this.getChartOptions() : this.getSingleCycleChartOptions();
                    this.chartObj = new m.a.Chart(this.$(".cycle-chart")[0],t)
                },
                isDataInCycleSummary: function() {
                    return this.metrics && this.metrics[0] && this.metrics[0].cycleSummaries && this.metrics[0].cycleSummaries.length > 0
                },
                emptyCharts: function() {
                    this.$(".cycle-chart").empty(),
                    this.$(".symptoms-charts").empty()
                },
                renderMenstrualCycleTrackingSymptomsCharts: function() {
                    this.reactMCTSymptomsReportsChart = new A.a,
                    this.reactMCTSymptomsReportsChart.renderComponent(window.MenstrualCycleTrackingReportsCharts, this.$(".symptoms-charts")[0], {
                        reportData: this.metrics,
                        alternativeStartDate: this.startDate
                    })
                },
                getFellicularPhaseLength: function(t, e) {
                    return t - e
                },
                getLutealPhaseLength: function(t, e, a, i) {
                    return e || a ? t - (e + a) : t - i
                },
                getMonthlyCategories: function() {
                    var t = this.metrics && this.metrics[0] && this.metrics[0].cycleSummaries ? this.metrics[0].cycleSummaries : []
                      , e = [];
                    return t.forEach(function(t, a) {
                        t.startDate && e.push(t.startDate)
                    }),
                    e.sort(),
                    e = this.addEmptyLabelInGraph(e)
                },
                addEmptyLabelInGraph: function(t) {
                    for (; t.length < this.tabView; )
                        t.splice(0, 0, null);
                    return t
                },
                sortByDate: function(t, e) {
                    return t.startDate < e.startDate ? -1 : t.startDate > e.startDate ? 1 : 0
                },
                getCycleLengthByStartDate: function(t) {
                    return (this.metrics && this.metrics[0] && this.metrics[0].cycleSummaries ? this.metrics[0].cycleSummaries : []).find(function(e) {
                        return e.startDate === t
                    })
                },
                getMonthlySeries: function() {
                    var t = this
                      , e = []
                      , a = []
                      , i = []
                      , r = []
                      , s = []
                      , o = []
                      , l = []
                      , c = []
                      , h = []
                      , d = this.metrics && this.metrics[0] && this.metrics[0].cycleSummaries ? this.metrics[0].cycleSummaries : [];
                    d.sort(this.sortByDate);
                    for (var u = 0; u < this.tabView; u++)
                        a.push(0),
                        i.push(0),
                        r.push(0),
                        s.push(0),
                        o.push(0),
                        c.push(0),
                        h.push(0);
                    for (var p = 0; p < d.length; p++) {
                        var g = this.tabView - d.length + p;
                        if ("PREGNANT" === d[p].cycleType)
                            h.splice(g, 1, this.metrics[0].avgCycleLength);
                        else {
                            if (d[p].gapCycle) {
                                l.push(p);
                                c.splice(g, 1, t.metrics[0].avgCycleLength ? t.metrics[0].avgCycleLength / 2 : 15)
                            }
                            if (d[p].periodLength && a.splice(g, 1, d[p].periodLength),
                            isNaN(d[p].lengthOfFertileWindow))
                                r.splice(g, 1, this.getFellicularPhaseLength(d[p].cycleLength, d[p].periodLength));
                            else {
                                var m = Object(_.i)(d[p])
                                  , f = Object(_.j)(d[p]);
                                i.splice(g, 1, this.getFellicularPhaseLength(f, d[p].periodLength)),
                                s.splice(g, 1, m),
                                o.splice(g, 1, this.getLutealPhaseLength(d[p].cycleLength, f, m, d[p].periodLength))
                            }
                            this.getExportSingleCycleData(d[p])
                        }
                    }
                    var v = s.reduce(function(t, e) {
                        return t + e
                    });
                    return e.push({
                        color: T.lightui_surface_3,
                        name: n.a.localize("pregnancy_label"),
                        data: [].concat(h),
                        index: 5
                    }, {
                        color: T.color_704,
                        name: n.a.localize("period_label"),
                        data: [].concat(a),
                        index: 4
                    }, {
                        color: T.color_142,
                        name: n.a.localize("follicular_label"),
                        data: [].concat(i),
                        index: 3,
                        showInLegend: !1
                    }, {
                        color: T.color_419,
                        name: n.a.localize("fertile_window_label"),
                        data: [].concat(s),
                        showInLegend: v > 0,
                        index: 2
                    }, {
                        color: T.color_142,
                        showInLegend: !1,
                        name: n.a.localize("luteal_label"),
                        data: [].concat(o),
                        index: 1
                    }, {
                        color: T.color_142,
                        name: n.a.localize("cycle_label"),
                        data: [].concat(r),
                        index: 0
                    }, {
                        color: "transparent",
                        name: n.a.localize("no_cycles_logged"),
                        data: [].concat(c),
                        showInLegend: !1
                    }),
                    e
                },
                getSingleCycleSeries: function() {
                    var t = []
                      , e = this.metrics && this.metrics[0] && this.metrics[0].cycleSummaries && this.metrics[0].cycleSummaries[0] ? this.metrics[0].cycleSummaries[0] : {};
                    if (e.periodLength && t.push({
                        color: T.color_704,
                        name: n.a.localize("period_label"),
                        data: [e.periodLength],
                        index: 3,
                        legendIndex: 3
                    }),
                    isNaN(e.lengthOfFertileWindow))
                        t.push({
                            color: T.color_142,
                            name: n.a.localize("cycle_label"),
                            data: [this.getFellicularPhaseLength(e.cycleLength, e.periodLength)],
                            index: 0
                        });
                    else {
                        var a = Object(_.i)(e)
                          , i = Object(_.j)(e);
                        t.push({
                            color: T.color_142,
                            name: n.a.localize("follicular_label"),
                            data: [this.getFellicularPhaseLength(i, e.periodLength)],
                            index: 2,
                            legendIndex: 1
                        }, {
                            color: T.color_419,
                            name: n.a.localize("fertile_window_label"),
                            data: [a],
                            index: 1,
                            legendIndex: 2
                        }, {
                            color: T.color_142,
                            showInLegend: !1,
                            name: n.a.localize("luteal_label"),
                            data: [this.getLutealPhaseLength(e.cycleLength, i, a, e.periodLength)],
                            index: 0
                        })
                    }
                    return this.getExportSingleCycleData(e),
                    t
                },
                getAbbreviatedDate: function(t) {
                    var e = new p.a(t)
                      , a = e.date()
                      , i = e.month() + 1
                      , r = i >= 10 ? i : "0" + i;
                    return "".concat(n.a.localize("month.abbr.".concat(r)), " ").concat(a)
                },
                getLabelFormatter: function(t) {
                    return t.name === n.a.localize("follicular_label") ? n.a.localize("cycle_label") : t.name
                },
                getWidgetConfig: function(t) {
                    return {
                        chart: {
                            marginLeft: 57,
                            marginRight: 0,
                            marginTop: 20,
                            type: "column",
                            width: 290,
                            height: 210
                        },
                        legend: {
                            itemDistance: 10,
                            itemStyle: {
                                fontSize: "12px",
                                fontWeight: 300
                            },
                            reversed: !0,
                            labelFormatter: function() {
                                return t.getLabelFormatter(this)
                            }
                        }
                    }
                },
                getCommonConfig: function(t) {
                    return {
                        chart: {
                            type: "column"
                        },
                        exporting: {
                            enabled: !1
                        },
                        credits: {
                            enabled: !1
                        },
                        title: {
                            text: null
                        },
                        xAxis: {
                            categories: this.getMonthlyCategories(),
                            labels: {
                                style: {
                                    fontSize: t.isChartOnWidget ? "10px" : "11px"
                                },
                                formatter: function() {
                                    var e = this.axis.defaultLabelFormatter.call(this);
                                    return e && isNaN(e) ? t.getAbbreviatedDate(e) : null
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: n.a.localize("label_days")
                            },
                            tickInterval: t.isChartOnWidget ? 10 : null,
                            labels: {
                                formatter: function() {
                                    return d.a.formatDecimalNumber(this.value, 0)
                                }
                            },
                            allowDecimals: !1
                        },
                        legend: {
                            reversed: !0,
                            labelFormatter: function() {
                                return t.getLabelFormatter(this)
                            }
                        },
                        plotOptions: {
                            allowPointSelect: !1,
                            bar: {
                                groupPadding: 0,
                                pointPadding: 0
                            },
                            series: {
                                stacking: "normal",
                                pointWidth: 12 === t.tabView ? t.isChartOnWidget ? 8 : 16 : 6 === t.tabView ? t.isChartOnWidget ? 16 : 32 : null,
                                borderWidth: 0,
                                states: {
                                    hover: {
                                        enabled: !1
                                    }
                                },
                                events: {
                                    legendItemClick: function() {
                                        return !1
                                    }
                                }
                            }
                        },
                        tooltip: {
                            formatter: function() {
                                if (this.series.name === n.a.localize("pregnancy_label")) {
                                    var e = this.key
                                      , a = t.metrics[0].cycleSummaries.find(function(t) {
                                        return t.startDate === e
                                    });
                                    this.total = a ? a.cycleLength : 30
                                }
                                var i = t.getAbbreviatedDate(this.key)
                                  , r = t.getAbbreviatedDate(p()(this.key).add(this.total - 1, "d"))
                                  , s = "".concat(i, " - ").concat(r);
                                if (this.series.name === n.a.localize("no_cycles_logged")) {
                                    var o = t.getCycleLengthByStartDate(this.key);
                                    return o = o && o.cycleLength ? o.cycleLength : null,
                                    r = t.getAbbreviatedDate(p()(this.key).add(o ? o - 1 : this.total - 1, "d")),
                                    s = "".concat(i, " - ").concat(r),
                                    "<b>".concat(s, "<b/><br/>\n                            ").concat(this.series.name)
                                }
                                if (this.series.name === n.a.localize("pregnancy_label")) {
                                    var l = "".concat(i, " - ").concat(r);
                                    return "<b>".concat(l, "<b/><br/>\n                            ").concat(n.a.localize("pregnancy_logged"), "<br/>\n                            ").concat(this.total, " ").concat(n.a.localize("label_days"))
                                }
                                return "<b>".concat(s, "<b/><br/>\n                        ").concat(this.series.name, ": ").concat(this.y, " ").concat(n.a.localize("label_days"), "<br/>\n                        ").concat(n.a.localize("cycle_length"), ": ").concat(this.total, " ").concat(n.a.localize("label_days"))
                            }
                        }
                    }
                },
                getSingleCycleChartOptions: function() {
                    var t = this;
                    return Object(r.a)({}, this.getCommonConfig(t), {
                        chart: {
                            type: "bar",
                            width: null,
                            height: 120
                        },
                        xAxis: {
                            visible: !1
                        },
                        yAxis: {
                            lineWidth: 2,
                            gridLineWidth: 0,
                            minorGridLineWidth: 0,
                            allowDecimals: !1,
                            tickInterval: 5,
                            tickLength: 10,
                            tickWidth: 1,
                            min: 0,
                            title: {
                                text: null
                            }
                        },
                        tooltip: {
                            formatter: function() {
                                var e = t.metrics && t.metrics[0] && t.metrics[0].cycleSummaries && t.metrics[0].cycleSummaries[0]
                                  , a = e ? t.metrics[0].cycleSummaries[0].cycleLength : this.total
                                  , i = e ? t.metrics[0].cycleSummaries[0].startDate : t.startDate
                                  , r = e ? p()(i).add(a, "d").format(s.g) : t.endDate;
                                return "<b>".concat(t.getAbbreviatedDate(i), " - ").concat(t.getAbbreviatedDate(r), "<b/>\n                <br/>").concat(this.series.name, ": ").concat(this.y, " ").concat(n.a.localize("label_days"), "\n                <br/>").concat(n.a.localize("cycle_length"), ": ").concat(a, " ").concat(n.a.localize("label_days"))
                            }
                        },
                        series: Object(i.a)(t.getSingleCycleSeries())
                    })
                },
                getChartOptions: function() {
                    var t = Object(r.a)({}, this.getCommonConfig(this), {
                        series: this.getMonthlySeries()
                    });
                    return this.isChartOnWidget && (t = Object(r.a)({}, t, this.getWidgetConfig(this))),
                    t
                }
            });
            e.a = y
        }
        ).call(this, a(10))
    },
    3212: function(t, e) {
        t.exports = '<style>\n    .js-report-chart-four-week .cycle-chart {\n        width: calc(100% - 110px);\n        float: right;\n    }\n    .symptoms-charts {\n        clear:both\n    }\n</style>\n<div>\n    <div class="cycle-chart"></div>\n    <div class="symptoms-charts"></div>\n</div>\n'
    },
    3213: function(t, e, a) {
        "use strict";
        (function(t) {
            a(11);
            var i = a(7)
              , r = a.n(i)
              , s = a(9)
              , n = a.n(s)
              , o = a(6)
              , l = a(3214)
              , c = a.n(l)
              , h = n.a.View.extend({
                initialize: function(t) {
                    this.template = r.a.template(c.a),
                    this.isChartOnWidget = t.isChartOnWidget
                },
                render: function() {
                    var e = this.template({
                        Localizer: o.a,
                        isChartOnWidget: this.isChartOnWidget
                    });
                    t(this.el).html(e)
                }
            });
            e.a = h
        }
        ).call(this, a(10))
    },
    3214: function(t, e) {
        t.exports = "<% if (isChartOnWidget) { %>\n    <div class=\"no-data-yet-view text-center top-xl\">\n        <h6><%- Localizer.localize('no_data_util_cycle_log') %></h6>\n    </div>\n<% } else { %>\n    <div class=\"no-data-yet-view text-center top-xl\">\n        <h4><%- Localizer.localize('no_data_util_cycle_log') %></h4>\n    </div>\n<% } %>"
    },
    3215: function(t, e, a) {
        "use strict";
        a(7),
        a(9);
        var i = a(6)
          , r = a(13)
          , s = a(1295)
          , n = a(1302);
        e.a = s.a.extend({
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", this.yAxisTitle]
                }
            },
            determineYAxisTitle: function() {
                switch (this.report.metricName) {
                case n.a.ACTIVITY_AVERAGE_STROKES:
                    return i.a.localize("label_strokes");
                case n.a.ACTIVITY_AVERAGE_SWOLF:
                case n.a.ACTIVITY_MINIMUM_SWOLF:
                    return i.a.localize("label_swolf")
                }
            },
            customizeOptions: function() {
                this.options.plotOptions = {
                    column: {
                        dataLabels: {
                            enabled: !1,
                            color: "white"
                        }
                    },
                    series: {
                        stacking: "normal",
                        showCheckbox: !1,
                        selected: !0
                    }
                },
                this.options.yAxis.title = {
                    text: this.yAxisTitle
                },
                this.options.tooltip = {
                    formatter: function() {
                        return "<b>" + this.series.name + "</b><br/>" + this.x + ": " + r.a.formatDecimalNumber(this.y, 0)
                    }
                }
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                this.chartSeries[0] = {
                    color: "#11a9ed",
                    name: this.yAxisTitle,
                    data: this.createZeroArray(this.metricPeriod)
                }
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                e >= 0 && this.chartSeries[0] && (this.chartSeries[0].data[e] = t.value,
                this.exportData.rows[this.exportDataCount++] = {
                    values: [this.categories[e], t.value]
                })
            }
        })
    },
    3216: function(t, e, a) {
        "use strict";
        a(7),
        a(9);
        var i = a(6)
          , r = a(13)
          , s = (a(65),
        a(1295));
        e.a = s.a.extend({
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", i.a.localize("calorie.type.label"), i.a.localize("value.label")]
                }
            },
            determineYAxisTitle: function() {
                return i.a.localize("label_calories")
            },
            customizeOptions: function() {
                this.options.plotOptions = {
                    column: {
                        stacking: "normal",
                        dataLabels: {
                            enabled: !1,
                            color: "white"
                        }
                    },
                    series: {
                        stacking: "normal",
                        showCheckbox: !1,
                        selected: !0
                    }
                },
                this.options.tooltip = {
                    formatter: function() {
                        return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + r.a.formatDecimalNumber(this.y, 0) + " " + i.a.localize("label_calories_abbr") + "<br/>" + i.a.localize("total") + ": " + r.a.formatDecimalNumber(this.point.stackTotal, 0) + " " + i.a.localize("label_calories_abbr")
                    }
                }
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                this.chartSeries.active = {
                    color: "#ff0035",
                    name: i.a.localize("active"),
                    data: this.createZeroArray(this.metricPeriod)
                },
                this.chartSeries.rmr = {
                    color: "#11a9ed",
                    name: i.a.localize("rmr"),
                    data: this.createZeroArray(this.metricPeriod)
                }
            },
            processMetricList: function(t) {
                var e = t.get("metricsMap");
                this.calorieType = "rmr";
                var a = e.WELLNESS_BMR_CALORIES;
                if (a)
                    for (var i = 0; i < a.length; i++)
                        this.addMetricToDataset(a[i]);
                this.calorieType = "active";
                var r = e.COMMON_ACTIVE_CALORIES;
                if (r)
                    for (i = 0; i < r.length; i++)
                        this.addMetricToDataset(r[i])
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                e >= 0 && this.chartSeries[this.calorieType] && (this.chartSeries[this.calorieType].data[e] = Math.round(10 * t.value) / 10,
                this.exportData.rows[this.exportDataCount++] = {
                    values: [this.categories[e], i.a.localize(this.calorieType), Math.round(10 * t.value) / 10]
                })
            }
        })
    },
    3217: function(t, e) {
        t.exports = '<div>\n    <div class="controls controls-row">\n        <select class="input-medium" id="ts-device-filter" aria-label="<%- Localizer.localize(\'agent.select.device\') %>">\n            <optgroup label="<%- Localizer.localize(\'agent.select.device\') %>">\n                <% for (var i = 0; i < deviceList.length; i++) { %>\n                    <% if (deviceList[i].deviceId === selectedDevice) { %>\n                        <option data-value="<%- deviceList[i].deviceId %>" selected><%- deviceList[i].deviceName === "other.device" ? Localizer.localize(\'device.unknown\') : deviceList[i].deviceName %></option>\n                    <% } else { %>\n                        <option data-value="<%- deviceList[i].deviceId %>"><%- deviceList[i].deviceName === "other.device" ? Localizer.localize(\'device.unknown\') : deviceList[i].deviceName %></option>\n                    <% } %>\n                <% } %>\n            </optgroup>\n        </select>\n    </div>\n</div>'
    },
    3218: function(t, e) {
        t.exports = "<h5><%- Localizer.localize('TRAINING_LOAD_DESCRIPTION') %></h5>\n\n<table class=\"table\">\n    <tbody><tr>\n        <th><span class=\"training-load-indicator training-load-high\"></span><%- Localizer.localize('TRAINING_LOAD_HIGH') %></th>\n        <td><%- Localizer.localize('TRAINING_LOAD_DESCRIPTION_HIGH') %></td>\n    </tr>\n    <tr>\n        <th><span class=\"training-load-indicator training-load-optimal\"></span><%- Localizer.localize('TRAINING_LOAD_OPTIMAL') %></th>\n        <td><%- Localizer.localize('TRAINING_LOAD_DESCRIPTION_OPTIMAL') %></td>\n    </tr>\n    <tr>\n        <th><span class=\"training-load-indicator training-load-low\"></span><%- Localizer.localize('TRAINING_LOAD_LOW') %></th>\n        <td><%- Localizer.localize('TRAINING_LOAD_DESCRIPTION_LOW') %></td>\n    </tr>\n    </tbody>\n</table>\n"
    },
    3219: function(t, e) {
        t.exports = "<p><%-Localizer.localize('VO2_HELP') %></p>\n<p><%-Localizer.localize('VO2_DESCRIPTION') %></p>\n"
    },
    3220: function(t, e) {
        t.exports = '<% if (displayNoStatus) { %> <% if (displayDevicePicker) { %>\n<div id="device-picker-container" class="text-center"></div>\n<% } %>\n<div class="text-center <%- !displayDevicePicker ? \'top-m\' : \'\' %>">\n    <div class="training-status training-status-no-status">\n        <div class="training-status-symbol"></div>\n    </div>\n    <div class="data-block medium bottom-xs">\n        <div class="data-bit"><%-Localizer.localize(\'TRAINING_STATUS_NO_STATUS\')%></div>\n        <h6><%- Localizer.localize(\'training.status.no.data.summary\') %></h6>\n        <button class="btn ts-view-full-report-btn"><%- Localizer.localize(\'power_curve_view_report\') %></button>\n    </div>\n</div>\n<% } else { %> <% if (displayDevicePicker) { %>\n<div id="device-picker-container" class="text-center"></div>\n<% } %>\n<div class="text-center <%- !displayDevicePicker ? \'top-m\' : \'\' %>">\n    <% if (trainingPaused) { %>\n        <div class="training-status-paused">\n            <i class="icon-training-status"/>\n        </div>\n    <% } else { %>\n        <div class="training-status <%-statusClass%>">\n            <div class="training-status-symbol"></div>\n        </div>\n    <% } %>\n    <div class="data-block medium bottom-xs">\n        <div class="data-bit"><%-statusName%></div>\n        <div class="data-label"><%- Localizer.localize(\'training.status.trend.label.widget\', calendarDate) %></div>\n        <% if (trainingPaused) { %>\n            <div class="data-label"><%= Localizer.localize(\'training_status_resume_widget\') %></div>\n        <% } else if (hasFitnessTrendSport) { %>\n            <div class="data-label"><%- Localizer.localize(\'training.status.trend.label.sportType.widget\', sport) %></div>\n        <% } %>\n    </div>\n    <button class="btn ts-view-full-report-btn"><%- Localizer.localize(\'power_curve_view_report\') %></button>\n</div>\n<% } %>\n'
    },
    3221: function(t, e) {
        t.exports = '\n<h5><%- Localizer.localize(\'TRAINING_STATUS_DESCRIPTION\') %></h5>\n\n\n<table class="table table-striped">\n    <tbody>\n    <tr>\n        <td>\n            <div class="training-status training-status-peaking">\n                <div class="training-status-symbol"></div>\n            </div>\n        </td>\n        <td><h6 class="bottom-none"><%- Localizer.localize(\'TRAINING_STATUS_PEAKING\') %></h6>\n            <%- Localizer.localize(\'TRAINING_STATUS_PEAKING_DESCRIPTION\') %>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <div class="training-status training-status-productive">\n                <div class="training-status-symbol"></div>\n            </div>\n        </td>\n        <td><h6 class="bottom-none"><%- Localizer.localize(\'TRAINING_STATUS_PRODUCTIVE\') %></h6>\n            <%- Localizer.localize(\'TRAINING_STATUS_PRODUCTIVE_DESCRIPTION\') %>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <div class="training-status training-status-maintaining">\n                <div class="training-status-symbol"></div>\n            </div>\n        </td>\n        <td><h6 class="bottom-none"><%- Localizer.localize(\'TRAINING_STATUS_MAINTAINING\') %></h6>\n            <%- Localizer.localize(\'TRAINING_STATUS_MAINTAINING_DESCRIPTION\') %>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <div class="training-status training-status-recovery">\n                <div class="training-status-symbol"></div>\n            </div>\n        </td>\n        <td><h6 class="bottom-none"><%- Localizer.localize(\'TRAINING_STATUS_RECOVERY\') %></h6>\n            <%- Localizer.localize(\'TRAINING_STATUS_RECOVERY_DESCRIPTION\') %>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <div class="training-status training-status-unproductive">\n                <div class="training-status-symbol"></div>\n            </div>\n        </td>\n        <td><h6 class="bottom-none"><%- Localizer.localize(\'TRAINING_STATUS_UNPRODUCTIVE\') %></h6>\n            <%- Localizer.localize(\'TRAINING_STATUS_UNPRODUCTIVE_DESCRIPTION\') %>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <div class="training-status training-status-detraining">\n                <div class="training-status-symbol"></div>\n            </div>\n        </td>\n        <td><h6 class="bottom-none"><%- Localizer.localize(\'TRAINING_STATUS_DETRAINING\') %></h6>\n            <%- Localizer.localize(\'TRAINING_STATUS_DETRAINING_DESCRIPTION\') %>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <div class="training-status training-status-overreaching">\n                <div class="training-status-symbol"></div>\n            </div>\n        </td>\n        <td><h6 class="bottom-none"><%- Localizer.localize(\'TRAINING_STATUS_OVERREACHING\') %></h6>\n            <%- Localizer.localize(\'TRAINING_STATUS_OVERREACHING_DESCRIPTION\') %>\n        </td>\n    </tr>\n    </tbody>\n</table>\n<% if (isWidget) { %>\n    <div class="fine-print">\n        <%- Localizer.localize(\'TRAINING_STATUS_LEGAL\') %>\n    </div>\n<% } %>\n'
    },
    3222: function(t, e) {
        t.exports = '<div class="load-focus-metric-row">\n    <label><%- Localizer.localize(key) %></label>\n    <div class="data-bit">\n        <span><%- score %></span>\n        <span class="help-icon">\n            <i class="icon-help has-tooltip help-<%- value %>" data-placement="top"></i>\n        </span>\n    </div>\n    <div class="load-focus-chart-placeholder"></div>\n</div>\n'
    },
    3223: function(t, e) {
        t.exports = '<% if (trainingStatusPausedDate) { %>\n    <div class="ts-paused-load-focus-summary">\n        <div class="data-bit"><%- Localizer.localize(\'training_status_paused\') %></div>\n        <div class="data-label"><%- Localizer.localize(\'training.status.trend.label.widget\', trainingStatusPausedDate) %></div>\n        <p><%- Localizer.localize(\'training_status_paused_load_focus_phrase\') %></p>\n    </div>\n<% } else if (hasData) { %> <% if (loadFocus) { %>\n<h4><%- loadFocus %></h4>\n<% } %>\n<p><%- feedbackPhrase %></p>\n<div class="load-focus-metrics-container">\n    \x3c!-- LoadFocusModalChartItemView --\x3e\n</div>\n<% } else { %>\n<h4><%- Localizer.localize(\'load.focus.no.data\') %></h4>\n<p><%- Localizer.localize(\'load.focus.no.data.message\') %></p>\n<% } %>\n<div class="load-focus-page-footer">\n    <div class="modal-navigation navButtons">\n        <button class="page-previous page-navigation-action" aria-label="<%- Localizer.localize(\'previous\') %>"><i class="icon-arrow-left"></i></button>\n        <button class="page-next page-navigation-action <%- isToday ? \'disabled\' : \'\' %>" aria-label="<%- Localizer.localize(\'next\') %>"><i class="icon-arrow-right"></i></button>\n        <% if (!trainingStatusPausedDate) { %>\n            <span><%- dateRange %></span>\n        <% } %>\n    </div>\n    <% if(!trainingStatusPausedDate) { %>\n        <div class="optimal-range-legend">\n            <div class="load-focus-optimal-range"></div>\n            <span><%- Localizer.localize(\'training.load.optimal.range\') %></span>\n        </div>\n    <% } %>\n</div>\n'
    },
    3224: function(t, e) {
        t.exports = '<div class="ts-header-container">\n    <div class="ts-header-summary">\n        <div class="ts-data-container">  \n            <div class="ts-symbol-container">\n                <% if (isTrainingPaused) { %>\n                    <div class="training-status-paused">\n                        <i class="icon-training-status"/>\n                    </div>\n                <% } else { %>\n                    <div class="training-status <%-statusClass%>">\n                        <div class="training-status-symbol"></div>\n                    </div>\n                <% } %>\n                <div class="data-block medium">\n                    <div class="data-bit">\n                        <%-statusName%>\n                        <span class="help-icon"\n                            ><i class="icon-help has-tooltip help-training-status" data-placement="top"></i\n                        ></span>\n                    </div>\n                    <div class="data-label">\n                        <%- Localizer.localize(\'current_status\') %> \n                    </div>\n                </div>\n            </div>\n            \x3c!-- TODO: CA-51051 to clean up MB_TESTER restrictions  --\x3e\n            <% if (isFeatureEnabled && hasFitnessTrendSport) { %>\n                <div class="ts-trendsport-container">\n                    <div class="data-block medium">\n                        <div class="data-bit">\n                            <%-sport%>\n                        </div>   \n                        <div class="data-label">\n                            <span><%- Localizer.localize(\'training.status.vo2max.trend.label\') %></span>\n                        </div>\n                    </div>\n                </div>\n            <% } %>\n            <% if (isFeatureEnabled && isLoadFocusCapable) { %>\n                <div class="ts-load-focus-container">\n                    <div class="data-block medium">\n                        <div class="data-bit load-focus">\n                            <a class="colored" href="#"><%- loadFocus ? loadFocus : Localizer.localize(\'training.status.load.focus.detail\') %></a>\n                        </div>   \n                        <div class="data-label">\n                            <span><%- Localizer.localize(\'training.status.info.title.balance\') %></span>\n                        </div>\n                    </div>\n                </div>\n            <% } %>\n        </div>\n        <div class="device-picker-container">\n            <div class="device-picker-placeholder text-center"></div>\n        </div>\n    </div>\n    \n    <div class="ts-smart-phrase-container bottom-s">\n        <span><%= statusDescription %></span>\n    </div>\n</div>\n'
    },
    3225: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = (a(13),
        a(6))
          , l = a(59)
          , c = a(1872)
          , h = a(27)
          , d = (a(2072),
        a(3226))
          , u = a(3227)
          , p = a(3228)
          , g = a(3229)
          , m = a(3232)
          , f = a(3233)
          , v = (a(2073),
        a(116))
          , T = (a(1323),
        a(388))
          , _ = (a(1227),
        a(3234))
          , A = a.n(_)
          , y = {
            LEARN_MORE_CLICKED: "LEARN_MORE_CLICKED"
        }
          , C = n.a.View.extend({
            events: {
                "click .ts-learn-more-btn": "onLearnMoreClicked"
            },
            className: "block-repeat",
            initialize: function(t) {
                this.template = r.a.template(A.a),
                this.report = t.report,
                this.reportType = t.reportType,
                this.metricList = t.metricList,
                this.vo2MaxData = t.vo2MaxData,
                this.heatAltitudeAcclimationMetrics = t.heatAltitudeAcclimationMetrics,
                this.exerciseLoadMetrics = t.exerciseLoadMetrics,
                this.registeredDevices = t.registeredDevices,
                this.metricPeriod = t.metricPeriod,
                this.userPreferences = t.userPreferences,
                this.startDate = t.startDate,
                this.untilDate = t.untilDate,
                this.daysInRange = -28,
                this.displayDevicePicker = !1,
                this.deviceList = [],
                this.lastDisplayedDevice = null,
                this.selectedDevice = null,
                this.noData = null,
                this.latestVO2MaxMetrics = new c.a({}),
                this.hasTrainingStatusPauseCapableDevice = t.hasTrainingStatusPauseCapableDevice,
                this.trainingStatusPausedDate = t.trainingStatusPausedDate
            },
            render: function() {
                return this.getData(),
                this
            },
            getData: function() {
                this.lastDisplayedDevice = new l.a({
                    key: "TrainingStatus.last.device"
                });
                var t = new h.a;
                t.addModel({
                    model: this.lastDisplayedDevice,
                    required: !0
                }),
                t.addModel({
                    model: this.latestVO2MaxMetrics,
                    required: !0
                }),
                t.on(h.a.Events.SYNCHRONIZED, this.onDataFetched, this),
                t.on(h.a.Events.SYNCHRONIZE_FAILED, this.onDataFail, this),
                t.fetchModels()
            },
            onDataFetched: function() {
                this.statusData = this.metricList.attributes,
                this.getXAxisCategories(),
                this.selectDeviceToDisplay(),
                this.displayReport()
            },
            onDataFail: function() {
                this.statusData = this.metricList.attributes,
                this.getXAxisCategories(),
                this.selectDeviceToDisplay(),
                this.displayReport()
            },
            getXAxisCategories: function() {
                var t = Math.ceil((Date.parse(this.untilDate) - Date.parse(this.startDate)) / 864e5);
                switch (this.daysInRange = 0 - t,
                this.metricPeriod) {
                case "weekly":
                    this.getRangeCategories();
                    break;
                case "monthly":
                    t > 180 ? (this.metricPeriod = "yearly",
                    this.getRangeCategories()) : this.getRangeCategories()
                }
            },
            selectDeviceToDisplay: function() {
                if (r.a.isEmpty(this.statusData.recordedDevices))
                    return this.noData = !0,
                    void (this.displayDevicePicker = !1);
                if (this.displayDevicePicker = this.statusData.recordedDevices.length > 1,
                this.displayDevicePicker) {
                    this.lastDisplayedDevice && (this.lastDisplayedDeviceId = +this.lastDisplayedDevice.get("value"));
                    for (var t = 0; t < this.statusData.recordedDevices.length; t++)
                        this.lastDisplayedDeviceId === this.statusData.recordedDevices[t].deviceId && (this.selectedDevice = this.statusData.recordedDevices[t].deviceId),
                        this.deviceList.push(this.statusData.recordedDevices[t]);
                    r.a.isNull(this.selectedDevice) && (this.selectedDevice = this.statusData.recordedDevices[0].deviceId)
                } else
                    this.selectedDevice = this.statusData.recordedDevices[0].deviceId
            },
            displayReport: function() {
                r.a.isNull(this.selectedDevice) || (this.noData = v.a.determineIfNoData(this.statusData.reportData[this.selectedDevice])),
                this.$el.html(this.template({
                    Localizer: o.a,
                    displayDevicePicker: this.displayDevicePicker,
                    metricPeriod: this.metricPeriod,
                    noData: this.noData
                })),
                this.noData || this.renderCharts()
            },
            renderCharts: function() {
                this.deviceStatusData = this.statusData.reportData[this.selectedDevice],
                this.trainingStatusChartView = new d.a({
                    el: this.$("#training-status-container"),
                    data: this.getFormattedDeviceStatusData(),
                    metricPeriod: this.metricPeriod,
                    categories: this.categories,
                    userPreferences: this.userPreferences
                }),
                this.trainingStatusChartView.render(),
                Object(T.c)(this.vo2MaxData) || (this.vo2MaxTrainingStatusView = new p.a({
                    el: this.$("#vo2-max-container"),
                    data: this.vo2MaxData,
                    reportType: this.reportType,
                    metricPeriod: this.metricPeriod,
                    startDate: this.startDate,
                    untilDate: this.untilDate,
                    categories: this.categories,
                    userPreferences: this.userPreferences,
                    latestVO2MaxMetrics: this.hasLatestVO2MaxMetrics() ? this.getLatestVO2MaxMetrics() : {}
                }),
                this.vo2MaxTrainingStatusView.render()),
                this.shouldShowExerciseLoadChart() && (this.exerciseLoadChartView = new g.a({
                    el: this.$(".exercise-load-chart-container"),
                    categories: this.categories,
                    metricPeriod: this.metricPeriod,
                    startDate: this.startDate,
                    untilDate: this.untilDate,
                    userPreferences: this.userPreferences,
                    model: this.getParentActivityLoadData()
                }),
                this.exerciseLoadChartView.render()),
                this.trainingLoadChartView = new u.a({
                    el: this.$("#training-load-container"),
                    data: this.deviceStatusData,
                    metricPeriod: this.metricPeriod,
                    categories: this.categories,
                    userPreferences: this.userPreferences,
                    latestTrainingStatusData: this.getLatestTrainingStatusData(),
                    hasAcclimationData: this.hasAcclimationData() && this.hasHeatAcclimationMetrics(),
                    trainingStatusPausedDate: this.trainingStatusPausedDate
                }),
                this.trainingLoadChartView.render(),
                this.hasAcclimationData() && this.hasAltitudeAcclimationMetrics() && (this.altitudeAcclimationChartView = new m.a({
                    el: this.$(".altitude-acclimation-chart-container"),
                    model: this.heatAltitudeAcclimationMetrics,
                    metricPeriod: this.metricPeriod,
                    startDate: this.startDate,
                    untilDate: this.untilDate,
                    categories: this.categories,
                    userPreferences: this.userPreferences,
                    latestVO2MaxMetrics: this.latestVO2MaxMetrics,
                    type: v.a.AcclimationType.Altitude
                }),
                this.altitudeAcclimationChartView.render()),
                this.hasAcclimationData() && this.hasHeatAcclimationMetrics() && (this.heatAcclimationChartView = new f.a({
                    el: this.$(".heat-acclimation-chart-container"),
                    model: this.heatAltitudeAcclimationMetrics,
                    metricPeriod: this.metricPeriod,
                    startDate: this.startDate,
                    untilDate: this.untilDate,
                    categories: this.categories,
                    userPreferences: this.userPreferences,
                    latestVO2MaxMetrics: this.latestVO2MaxMetrics,
                    type: v.a.AcclimationType.Heat
                }),
                this.heatAcclimationChartView.render()),
                this.listenTo(this.trainingStatusChartView, d.a.Events.ShowPlotLine, this.onShowPlotLine),
                this.listenTo(this.trainingLoadChartView, u.a.Events.ShowPlotLine, this.onShowPlotLine),
                this.listenTo(this.trainingLoadChartView, u.a.Events.ON_CHART_HOVER, this.onChartHover),
                this.listenTo(this.vo2MaxTrainingStatusView, p.a.Events.ShowPlotLine, this.onShowPlotLine),
                this.listenTo(this.vo2MaxTrainingStatusView, p.a.Events.ON_CHART_HOVER, this.onChartHover),
                this.listenTo(this.altitudeAcclimationChartView, m.a.Events.ShowPlotLine, this.onShowPlotLine),
                this.listenTo(this.altitudeAcclimationChartView, m.a.Events.ON_CHART_HOVER, this.onChartHover),
                this.listenTo(this.heatAcclimationChartView, f.a.Events.ShowPlotLine, this.onShowPlotLine),
                this.listenTo(this.heatAcclimationChartView, f.a.Events.ON_CHART_HOVER, this.onChartHover),
                this.listenTo(this.exerciseLoadChartView, g.a.Events.ShowPlotLine, this.onShowPlotLine),
                this.listenTo(this.exerciseLoadChartView, g.a.Events.ON_CHART_HOVER, this.onChartHover)
            },
            getParentActivityLoadData: function() {
                return this.exerciseLoadMetrics.models.filter(function(t) {
                    return t.isParentActivityMetric()
                })
            },
            hasLatestVO2MaxMetrics: function() {
                return this.latestVO2MaxMetrics.has("generic") || this.latestVO2MaxMetrics.has("cycling")
            },
            getFormattedDeviceStatusData: function() {
                var t = this.getTrainingStatusBuckets();
                return t.forEach(function(t) {
                    if (t.length > 1) {
                        var e = t[0].calendarDate
                          , a = t[t.length - 1].calendarDate;
                        t.forEach(function(t) {
                            t.statusStartDate = e,
                            t.statusEndDate = a
                        })
                    } else
                        t[0].statusStartDate = t[0].calendarDate,
                        t[0].statusEndDate = t[0].calendarDate
                }),
                t
            },
            getTrainingStatusBuckets: function() {
                var t = this;
                return this.deviceStatusData.reduce(function(e, a, i) {
                    if (0 === i)
                        return [[a]];
                    var r = t.deviceStatusData[i - 1];
                    return a.trainingStatus - r.trainingStatus !== 0 ? e.push([a]) : e[e.length - 1].push(a),
                    e
                }, [])
            },
            shouldShowExerciseLoadChart: function() {
                return "weekly" === this.metricPeriod && this.hasExerciseLoadData()
            },
            hasExerciseLoadData: function() {
                var t = !1;
                return this.exerciseLoadMetrics && this.exerciseLoadMetrics.length > 0 && (t = this.exerciseLoadMetrics.models.some(function(t) {
                    return t && t.has("activityTrainingLoad")
                })),
                t
            },
            hasAcclimationData: function() {
                return this.heatAltitudeAcclimationMetrics && this.heatAltitudeAcclimationMetrics.length > 0
            },
            hasAltitudeAcclimationMetrics: function() {
                return r.a.find(this.heatAltitudeAcclimationMetrics.models, function(t) {
                    return t.hasAltitudeAcclimationData()
                })
            },
            hasHeatAcclimationMetrics: function() {
                return r.a.find(this.heatAltitudeAcclimationMetrics.models, function(t) {
                    return t.hasHeatAcclimationData()
                })
            },
            getLatestTrainingStatusData: function() {
                return this.statusData && this.statusData.latestTrainingStatusData && this.statusData.latestTrainingStatusData[this.selectedDevice] || null
            },
            getLatestVO2MaxMetrics: function() {
                var t = {}
                  , e = this.latestVO2MaxMetrics.getVO2MaxMetricsForTrainingStatus();
                return (e.cycling || e.vo2MaxValue) && (t.cycling = {
                    value: "cycling"in e ? e.cycling.vo2MaxValue : e.vo2MaxValue,
                    sport: o.a.localize(v.a.SportTypes.Cycling.key)
                }),
                "running"in e && (t.running = {
                    value: e.running.vo2MaxValue,
                    sport: o.a.localize(v.a.SportTypes.Running.key)
                }),
                t
            },
            isDeviceCapable: function(t) {
                var e = this
                  , a = r.a.find(this.registeredDevices.models, function(t) {
                    return t.get("deviceId") === e.selectedDevice
                });
                return a && a.get(t)
            },
            onShowPlotLine: function(t) {
                this.trainingStatusChartView.xAxisAddPlotLine(t),
                this.trainingLoadChartView.xAxisAddPlotLine(t),
                this.vo2MaxTrainingStatusView && "function" === typeof this.vo2MaxTrainingStatusView.xAxisAddPlotLine && this.vo2MaxTrainingStatusView.xAxisAddPlotLine(t),
                this.altitudeAcclimationChartView && "function" === typeof this.altitudeAcclimationChartView.addXAxisPlotLine && this.altitudeAcclimationChartView.addXAxisPlotLine(t),
                this.heatAcclimationChartView && "function" === typeof this.heatAcclimationChartView.addXAxisPlotLine && this.heatAcclimationChartView.addXAxisPlotLine(t),
                this.exerciseLoadChartView && "function" === typeof this.exerciseLoadChartView.addXAxisPlotLine && this.exerciseLoadChartView.addXAxisPlotLine(t)
            },
            onChartHover: function(t) {
                this.shouldChartHover(this.vo2MaxTrainingStatusView, t, "vo2-max") && this.vo2MaxTrainingStatusView.onChartHover(),
                this.shouldChartHover(this.trainingLoadChartView, t, "training-load") && this.trainingLoadChartView.onChartHover(),
                this.shouldChartHover(this.altitudeAcclimationChartView, t, "altitude-acclimation") && this.altitudeAcclimationChartView.onChartHover(),
                this.shouldChartHover(this.heatAcclimationChartView, t, "heat-acclimation") && this.heatAcclimationChartView.onChartHover()
            },
            shouldChartHover: function(t, e, a) {
                return t && "function" === typeof t.onChartHover && e !== a
            },
            onDeviceChanged: function(t) {
                this.lastDisplayedDevice.set("value", t),
                this.lastDisplayedDevice.save(),
                this.selectedDevice = +t,
                this.displayReport()
            },
            getRangeCategories: function() {
                var t = this.untilDate.split("-");
                this.categories = [];
                for (var e = this.daysInRange; e <= 0; e++) {
                    var a = new Date(t[0],t[1] - 1,t[2],0,0,0);
                    a.setHours(12),
                    a.setMinutes(0),
                    a.setMilliseconds(0),
                    a.setDate(a.getDate() + e);
                    var i = a.getDate().toString()
                      , r = (a.getMonth() + 1).toString()
                      , s = this.userPreferences.get("dateFormat")
                      , n = "";
                    n = "mmddyyyy" === s.formatKey || "yyyymmdd" === s.formatKey ? o.a.localize("month.abbr." + (r > 9 ? r : "0" + r)) + " " + i : i + " " + o.a.localize("month.abbr." + (r > 9 ? r : "0" + r)),
                    this.categories.push(n)
                }
            },
            onLearnMoreClicked: function(t) {
                t.preventDefault(),
                this.trigger(y.LEARN_MORE_CLICKED)
            },
            destroy: function() {
                this.undelegateEvents()
            }
        });
        C.Events = y,
        e.a = C
    },
    3226: function(t, e, a) {
        "use strict";
        (function(t) {
            a(7);
            var i = a(9)
              , r = a.n(i)
              , s = a(15)
              , n = a.n(s)
              , o = a(6)
              , l = a(116)
              , c = a(55)
              , h = a(23)
              , d = a(85)
              , u = a(1227)
              , p = a(1233)
              , g = a.n(p)
              , m = {
                ShowPlotLine: "ShowPlotLine"
            }
              , f = r.a.View.extend({
                className: "ts-chart",
                events: {
                    mousemove: "onMouseMove"
                },
                initialize: function(e) {
                    this.data = e.data,
                    this.userPreferences = e.userPreferences,
                    this.metricPeriod = e.metricPeriod,
                    this.categories = e.categories,
                    this.plotLineId = "ts-plotline",
                    this.plotLineVisible = !1,
                    c.a.setExpandCollapseHandler(this.expandCollapseHandler.bind(this), 20),
                    this.setStepAndTickIntervalSize();
                    var a = this;
                    t(window).resize(function() {
                        a.resizeTrainingStatusChart()
                    })
                },
                render: function() {
                    var t = this.buildChartOptions();
                    return this.chart = new g.a.Chart(t),
                    this
                },
                destroy: function() {
                    this.unbindResizeTrainingStatusChart(),
                    this.remove()
                },
                setStepAndTickIntervalSize: function() {
                    "weekly" === this.metricPeriod ? (this.stepSize = 7,
                    this.tickIntervalSize = 1) : "monthly" === this.metricPeriod ? (this.stepSize = 4,
                    this.tickIntervalSize = 7) : (this.stepSize = 2,
                    this.tickIntervalSize = 14)
                },
                buildChartOptions: function() {
                    return {
                        chart: {
                            type: "line",
                            height: 132,
                            width: this.$el.get(0).clientWidth - 42,
                            renderTo: this.$el.get(0),
                            marginLeft: 13
                        },
                        title: {
                            useHTML: !0,
                            text: "<label class='ts-chart-header data-bit'>" + o.a.localize("trainingEffect.help.status") + "</label>",
                            align: "left",
                            x: 0,
                            y: 30
                        },
                        subtitle: {
                            text: "",
                            useHTML: !0,
                            align: "right",
                            verticalAlign: "top",
                            x: -5,
                            y: 20
                        },
                        xAxis: {
                            alternateGridColor: "#F6F6F6",
                            gridLineWidth: 1,
                            labels: {
                                step: this.stepSize,
                                align: "yearly" === this.metricPeriod ? "left" : ""
                            },
                            tickInterval: this.tickIntervalSize,
                            lineColor: "#969696",
                            tickLength: 0,
                            categories: this.categories,
                            opposite: !0
                        },
                        yAxis: {
                            categories: [""],
                            labels: {
                                enabled: !0
                            },
                            title: {
                                text: null
                            },
                            gridLineColor: "#969696",
                            gridLineWidth: 1,
                            offset: 41
                        },
                        plotOptions: this.createPlotOptions(this),
                        tooltip: {
                            backgroundColor: "#FAFAFA",
                            shape: "square",
                            borderWidth: 0,
                            formatter: function() {
                                return this.x
                            },
                            style: {
                                color: "#222",
                                fontSize: "11px",
                                textAlign: "center",
                                lineHeight: "22px",
                                width: "80px",
                                height: "80px"
                            }
                        },
                        legend: {
                            enabled: !1
                        },
                        series: [{
                            name: o.a.localize("TRAINING_STATUS_DETRAINING"),
                            color: u.a.Colors.tsDetrainingGrey,
                            data: this.buildSeriesData(1),
                            marker: {
                                enabled: !0,
                                symbol: "square",
                                radius: 17
                            },
                            linecap: "square"
                        }, {
                            name: o.a.localize("TRAINING_STATUS_UNPRODUCTIVE"),
                            color: u.a.Colors.tsUnproductiveOrange,
                            data: this.buildSeriesData(2),
                            marker: {
                                enabled: !0,
                                symbol: "square",
                                radius: 17
                            },
                            linecap: "square"
                        }, {
                            name: o.a.localize("TRAINING_STATUS_OVERREACHING"),
                            color: u.a.Colors.red,
                            data: this.buildSeriesData(3),
                            marker: {
                                enabled: !0,
                                symbol: "square",
                                radius: 17
                            },
                            linecap: "square"
                        }, {
                            name: o.a.localize("TRAINING_STATUS_MAINTAINING"),
                            color: u.a.Colors.hatorade,
                            data: this.buildSeriesData(4),
                            marker: {
                                enabled: !0,
                                symbol: "square",
                                radius: 17
                            }
                        }, {
                            name: o.a.localize("TRAINING_STATUS_RECOVERY"),
                            color: u.a.Colors.blue,
                            data: this.buildSeriesData(5),
                            marker: {
                                enabled: !0,
                                symbol: "square",
                                radius: 17
                            },
                            linecap: "square"
                        }, {
                            name: o.a.localize("TRAINING_STATUS_PEAKING"),
                            color: u.a.Colors.tsPeakingPurple,
                            data: this.buildSeriesData(6),
                            marker: {
                                enabled: !0,
                                symbol: "square",
                                radius: 17
                            },
                            linecap: "square"
                        }, {
                            name: o.a.localize("TRAINING_STATUS_PRODUCTIVE"),
                            color: u.a.Colors.green,
                            data: this.buildSeriesData(7),
                            marker: {
                                enabled: !0,
                                symbol: "square",
                                radius: 17
                            },
                            linecap: "square"
                        }, {
                            name: o.a.localize("training_status_paused"),
                            color: "rgba(255, 255, 255, .1)",
                            data: this.buildSeriesData(99),
                            marker: {
                                enabled: !0,
                                symbol: "square",
                                radius: 17
                            },
                            linecap: "square"
                        }],
                        credits: {
                            enabled: !1
                        },
                        exporting: {
                            enabled: !1
                        }
                    }
                },
                createPlotOptions: function(t) {
                    return {
                        series: {
                            states: {
                                hover: {
                                    enabled: !1
                                }
                            },
                            point: {
                                events: {
                                    mouseOver: function() {
                                        var t, e = this.series.name, a = this.color, i = this.series.chart, r = (this.series.data,
                                        this.statusStartDate ? h.a.formatMonthDay(d.a.parseISO(this.statusStartDate)) : ""), s = "", o = (this.seriesLabel,
                                        this.status ? "training-status-chip-transparent" : "training-status-chip");
                                        this.statusEndDate && !n()(this.statusStartDate).isSame(n()(this.statusEndDate)) ? (s = this.statusEndDate ? d.a.parseISO(this.statusEndDate).getDate() : "",
                                        t = "<div class='training-status-tooltip'><div class=".concat(o, " style='background:") + a + "'></div><label>" + e + " (" + r + " - " + s + ")</label></div>") : t = "<div class='training-status-tooltip'><div class=".concat(o, " style='background:") + a + "'></div><label>" + e + " (" + r + ")",
                                        i.setSubtitle({
                                            text: t
                                        })
                                    }
                                }
                            },
                            events: {
                                mouseOut: function() {
                                    this.chart.setSubtitle({
                                        text: ""
                                    })
                                }
                            }
                        }
                    }
                },
                buildSeriesData: function(t) {
                    var e, a = this, i = [], r = 0;
                    return i.push({
                        x: 0,
                        y: null
                    }),
                    [].concat.apply([], this.data).forEach(function(s, n) {
                        e = l.a.addMetricToDataset(s.calendarDate, a.categories, a.userPreferences),
                        s.trainingStatus !== t || s.trainingPaused ? 99 === t && s.trainingPaused ? i.push({
                            x: e,
                            y: 0,
                            statusStartDate: s.statusStartDate,
                            statusEndDate: s.statusEndDate,
                            status: "Paused"
                        }) : i.push({
                            x: e,
                            y: null
                        }) : (0 !== n && e - r !== 1 && i.push({
                            x: r + 1,
                            y: null
                        }),
                        i.push({
                            x: e,
                            y: 0,
                            statusStartDate: s.statusStartDate,
                            statusEndDate: s.statusEndDate
                        })),
                        r = e
                    }),
                    i.push({
                        x: this.categories.length - 1,
                        y: null
                    }),
                    i
                },
                onMouseMove: function(t) {
                    t = this.chart.pointer.normalize(t);
                    var e = Math.round(this.chart.xAxis[0].toValue(t.chartX));
                    this.xAxisAddPlotLine(e),
                    this.trigger(m.ShowPlotLine, e)
                },
                xAxisAddPlotLine: function(t) {
                    this.plotLineVisible && this.chart.xAxis[0].removePlotLine(this.plotLineId),
                    this.chart.xAxis[0].addPlotLine({
                        color: u.a.Colors.grey,
                        value: t,
                        width: 1,
                        id: "ts-plotline",
                        zIndex: 1
                    }),
                    this.plotLineVisible = !0
                },
                expandCollapseHandler: function() {
                    this.resizeTrainingStatusChart(),
                    this.reflowTrainingStatusChart()
                },
                reflowTrainingStatusChart: function() {
                    this.chart && this.chart.reflow()
                },
                resizeTrainingStatusChart: function() {
                    this.chart.setSize(this.$el.get(0).clientWidth - 42, void 0)
                },
                unbindResizeTrainingStatusChart: function() {
                    t(window).off("resize:resizeTrainingStatusChart")
                }
            });
            f.Events = m,
            e.a = f
        }
        ).call(this, a(10))
    },
    3227: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(7)
              , r = a.n(i)
              , s = a(9)
              , n = a.n(s)
              , o = a(6)
              , l = a(62)
              , c = a(116)
              , h = a(55)
              , d = a(1227)
              , u = a(1233)
              , p = a.n(u)
              , g = a(1256);
            a.n(g)()(p.a);
            var m = {
                ShowPlotLine: "ShowPlotLine",
                ON_CHART_HOVER: "ON_CHART_HOVER"
            }
              , f = n.a.View.extend({
                className: "training-load-chart",
                events: {
                    mousemove: "onMouseMove"
                },
                initialize: function(e) {
                    this.data = e.data,
                    this.userPreferences = e.userPreferences,
                    this.metricPeriod = e.metricPeriod,
                    this.categories = e.categories,
                    this.plotLineId = "tl-plotline",
                    this.plotLineVisible = !1,
                    this.latestTrainingStatusData = e.latestTrainingStatusData,
                    this.hasAcclimationData = e.hasAcclimationData,
                    this.trainingStatusPausedDate = e.trainingStatusPausedDate,
                    e.options ? this.options = r.a.extend({}, this.getDefaultOptions(), e.options) : this.options = r.a.extend({}, this.getDefaultOptions()),
                    h.a.setExpandCollapseHandler(this.expandCollapseHandler.bind(this), 20);
                    var a = this;
                    t(window).resize(function() {
                        a.resizeTrainingLoadChart()
                    })
                },
                render: function() {
                    return this.highChartObj = new p.a.Chart(this.options),
                    this.renderTooltips(),
                    this
                },
                renderTooltips: function() {
                    new l.a({
                        el: this.$(".help-training-load-chart"),
                        content: o.a.localize("training.load.chart.title.tooltip")
                    })
                },
                destroy: function() {
                    this.unbindResizeTrainingLoadChart(),
                    this.remove()
                },
                getDefaultOptions: function() {
                    var t, e;
                    return "weekly" === this.metricPeriod ? (t = 7,
                    e = 1) : "monthly" === this.metricPeriod ? (t = 4,
                    e = 7) : (t = 2,
                    e = 14),
                    {
                        chart: {
                            height: 200,
                            width: this.$el.get(0).clientWidth,
                            renderTo: this.$el.get(0)
                        },
                        title: {
                            useHTML: !0,
                            text: "<label class='ts-chart-header data-bit'>" + o.a.localize("training.load.chart.title") + "<span class='help-icon'><i class='icon-help has-tooltip help-training-load-chart' data-placement='top'></i></span></label>",
                            align: "left",
                            x: 0,
                            y: 25
                        },
                        subtitle: {
                            text: this.getChartSubtitle(),
                            useHTML: !0,
                            align: "right",
                            verticalAlign: "top",
                            x: -45,
                            y: 20
                        },
                        plotOptions: this.createPlotOptions(this),
                        xAxis: {
                            alternateGridColor: "#F6F6F6",
                            labels: {
                                step: t,
                                align: "yearly" === this.metricPeriod ? "left" : ""
                            },
                            tickInterval: e,
                            gridLineWidth: 1,
                            lineColor: "#969696",
                            tickLength: 0,
                            categories: this.categories,
                            opposite: !0
                        },
                        yAxis: [{
                            title: {
                                text: null
                            },
                            min: 0,
                            tickInterval: 350,
                            minRange: 500,
                            opposite: !0
                        }],
                        tooltip: {
                            enabled: !1,
                            shared: !0,
                            formatter: r.a.partial(this.tooltipFormatter, this),
                            backgroundColor: "rgba(0,0,0,0.85)",
                            borderWidth: 0,
                            style: {
                                color: "white"
                            },
                            positioner: function(t, e, a) {
                                var i = {
                                    x: a.plotX,
                                    y: a.plotY
                                };
                                return i.x -= t / 2 + 5,
                                i.x < 0 && (i.x = a.plotX + (t + 80) / 2),
                                i.y = 35,
                                i
                            }
                        },
                        legend: {
                            enabled: !1
                        },
                        series: [{
                            name: o.a.localize("TRAINING_LOAD"),
                            data: this.buildSeries(0),
                            type: "line",
                            zIndex: 1,
                            color: "#000",
                            marker: {
                                enabled: !0
                            },
                            states: {
                                hover: {
                                    lineWidth: 2
                                }
                            }
                        }, {
                            name: o.a.localize("TRAINING_LOAD_OPTIMAL"),
                            data: this.buildSeries(1),
                            type: "arearange",
                            lineWidth: 0,
                            linkedTo: ":previous",
                            color: "rgba(80,176,18,0.9)",
                            fillOpacity: .7,
                            zIndex: 0,
                            marker: {
                                enabled: !1
                            },
                            states: {
                                hover: {
                                    enabled: !1
                                }
                            }
                        }],
                        credits: {
                            enabled: !1
                        },
                        exporting: {
                            enabled: !1
                        }
                    }
                },
                createPlotOptions: function(t) {
                    return {
                        series: {
                            point: {
                                events: {
                                    mouseOver: function() {
                                        var t = this.series.chart
                                          , e = this.y
                                          , a = this.type;
                                        a ? t.setSubtitle({
                                            text: "<div class='optimal-range-container'><div class='load-chip-label'><div class='optimal-range-chip'></div><label class='data-bit'>" + o.a.localize("training.load.optimal.range") + "</label></div><label class='load-current-value'>" + e + " - " + a + "</label></div>"
                                        }) : t.setSubtitle({
                                            text: "<div class='optimal-range-container'><label class='load-current-value'>" + e + "</label></div>"
                                        })
                                    }
                                }
                            },
                            events: {
                                mouseOut: function() {
                                    this.chart.setSubtitle({
                                        text: ""
                                    })
                                }
                            }
                        }
                    }
                },
                buildSeries: function(t) {
                    var e, a, i = [];
                    if (t) {
                        for (i.push([0, null, null]),
                        e = 0; e < this.data.length; e++) {
                            if (a = c.a.addMetricToDataset(this.data[e].calendarDate, this.categories, this.userPreferences),
                            this.data[e].trainingPaused)
                                i.push({
                                    x: a,
                                    low: null,
                                    high: null,
                                    type: ""
                                });
                            else
                                r = (l = this.data[e].weeklyTrainingLoad) > this.data[e].loadTunnelMax ? o.a.localize("TRAINING_LOAD_HIGH") : l < this.data[e].loadTunnelMin ? o.a.localize("TRAINING_LOAD_LOW") : o.a.localize("TRAINING_LOAD_OPTIMAL"),
                                i.push({
                                    x: a,
                                    low: this.data[e].loadTunnelMin,
                                    high: this.data[e].loadTunnelMax,
                                    type: r
                                })
                        }
                        i.push([this.categories.length - 1, null, null])
                    } else {
                        for (i.push([0, null]),
                        e = 0; e < this.data.length; e++) {
                            a = c.a.addMetricToDataset(this.data[e].calendarDate, this.categories, this.userPreferences);
                            var r, s = this.data[e].loadTunnelMax, n = this.data[e].loadTunnelMin, l = this.data[e].weeklyTrainingLoad;
                            r = this.data[e].trainingPaused ? "" : l > s ? o.a.localize("TRAINING_LOAD_HIGH") : l < n ? o.a.localize("TRAINING_LOAD_LOW") : o.a.localize("TRAINING_LOAD_OPTIMAL"),
                            i.push({
                                x: a,
                                y: l,
                                type: r
                            })
                        }
                        i.push([this.categories.length - 1, null])
                    }
                    return i
                },
                enableMarkers: function(t) {
                    return t && 1 === t.length
                },
                getChartSubtitle: function() {
                    return this.latestTrainingStatusData ? this.trainingStatusPausedDate ? "<div class='optimal-range-container'><label class='load-current-value'>" + this.latestTrainingStatusData.weeklyTrainingLoad + "</label></div>" : "<div class='optimal-range-container'><div class='load-chip-label'><div class='optimal-range-chip'></div><label class='data-bit'>" + o.a.localize("training.load.optimal.range") + "</label></div><label class='load-current-value'>" + this.latestTrainingStatusData.weeklyTrainingLoad + " - " + this.getTrainingLoad() + "</label></div>" : ""
                },
                getTrainingLoad: function() {
                    var t = this.latestTrainingStatusData.loadMax
                      , e = this.latestTrainingStatusData.loadMin
                      , a = this.latestTrainingStatusData.weeklyTrainingLoad;
                    return c.a.getLoadStatus(e, t, a).tooltip
                },
                onMouseMove: function(t) {
                    t = this.highChartObj.pointer.normalize(t);
                    var e = Math.round(this.highChartObj.xAxis[0].toValue(t.chartX));
                    this.xAxisAddPlotLine(e),
                    this.trigger(m.ShowPlotLine, e),
                    this.trigger(m.ON_CHART_HOVER, "training-load")
                },
                xAxisAddPlotLine: function(t) {
                    this.plotLineVisible && this.highChartObj.xAxis[0].removePlotLine(this.plotLineId),
                    this.highChartObj.xAxis[0].addPlotLine({
                        color: d.a.Colors.grey,
                        value: t,
                        width: 1,
                        id: this.plotLineId,
                        zIndex: 1
                    }),
                    this.plotLineVisible = !0
                },
                onChartHover: function() {
                    this.highChartObj.setSubtitle({
                        text: ""
                    })
                },
                tooltipFormatter: function() {
                    var t, e, a = "<b>" + this.points[0].series.name + "</b><br>";
                    return t = this.y,
                    e = this.points[1].point.low,
                    a += t > this.points[1].point.high ? '<span style="color:#ff0035;">\u25cf</span> ' + o.a.localize("TRAINING_LOAD_HIGH") + ": " + t : t < e ? '<span style="color:#11a9ed;">\u25cf</span> ' + o.a.localize("TRAINING_LOAD_LOW") + ": " + t : '<span style="color:#72ea24;">\u25cf</span> ' + o.a.localize("TRAINING_LOAD_OPTIMAL") + ": " + t
                },
                expandCollapseHandler: function() {
                    this.resizeTrainingLoadChart(),
                    this.reflowTrainingLoadChart()
                },
                reflowTrainingLoadChart: function() {
                    this.highChartObj && this.highChartObj.reflow()
                },
                resizeTrainingLoadChart: function() {
                    this.highChartObj.setSize(this.$el.get(0).clientWidth, void 0)
                },
                unbindResizeTrainingLoadChart: function() {
                    t(window).off("resize:resizeTrainingLoadChart")
                }
            });
            f.Events = m,
            e.a = f
        }
        ).call(this, a(10))
    },
    3228: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(7)
              , r = a.n(i)
              , s = a(6)
              , n = a(13)
              , o = a(9)
              , l = a.n(o)
              , c = a(15)
              , h = a.n(c)
              , d = a(366)
              , u = a(62)
              , p = a(116)
              , g = (a(2444),
            a(2074))
              , m = a(2445)
              , f = a(55)
              , v = a(1227)
              , T = a(1233)
              , _ = a.n(T)
              , A = {
                ShowPlotLine: "ShowPlotLine",
                ON_CHART_HOVER: "ON_CHART_HOVER"
            }
              , y = l.a.View.extend({
                className: "vo2-max-chart",
                events: {
                    mousemove: "onMouseMove"
                },
                initialize: function(e) {
                    this.data = e.data,
                    this.reportType = e.reportType,
                    this.userPreferences = e.userPreferences,
                    this.metricPeriod = e.metricPeriod,
                    this.startDate = e.startDate,
                    this.untilDate = e.untilDate,
                    this.categories = e.categories,
                    this.plotLineId = "vo2-max-plotline",
                    this.plotLineVisible = !1,
                    this.latestVO2MaxMetrics = e.latestVO2MaxMetrics,
                    e.options ? this.options = r.a.extend({}, this.getDefaultOptions(), e.options) : this.options = r.a.extend({}, this.getDefaultOptions()),
                    f.a.setExpandCollapseHandler(this.expandCollapseHandler.bind(this), 20);
                    var a = this;
                    t(window).resize(function() {
                        a.resizeVO2TrainingStatusChart()
                    })
                },
                render: function() {
                    return this.highChartObj = new _.a.Chart(this.options),
                    this.renderTooltips(),
                    this
                },
                destroy: function() {
                    this.unbindResizeVO2TrainingStatusChart(),
                    this.remove()
                },
                getDefaultOptions: function() {
                    var t, e;
                    return "weekly" === this.metricPeriod ? (t = 7,
                    e = 1) : "monthly" === this.metricPeriod ? (t = 4,
                    e = 7) : (t = 2,
                    e = 14),
                    {
                        chart: {
                            type: "line",
                            height: 200,
                            width: this.$el.get(0).clientWidth - 12,
                            renderTo: this.$el.get(0)
                        },
                        title: {
                            useHTML: !0,
                            text: "<label class='ts-chart-header data-bit'>" + s.a.localize("training.status.vo2.max-chart.title") + "<span class='help-icon'><i class='icon-help has-tooltip help-vo2-max-chart' data-placement='top'></i></span></label>",
                            align: "left",
                            x: 0,
                            y: 25
                        },
                        subtitle: {
                            text: this.getChartSubtitle(),
                            useHTML: !0,
                            align: "right",
                            verticalAlign: "top",
                            x: -35,
                            y: 20
                        },
                        plotOptions: this.createPlotOptions(this),
                        xAxis: {
                            alternateGridColor: "#F6F6F6",
                            gridLineWidth: 1,
                            labels: {
                                step: t,
                                align: "yearly" === this.metricPeriod ? "left" : ""
                            },
                            tickInterval: e,
                            lineColor: "#969696",
                            tickLength: 0,
                            categories: this.categories,
                            opposite: !0
                        },
                        yAxis: this.getYAxesConfig(),
                        tooltip: {
                            enabled: !1,
                            headerFormat: "<b>{series.name}</b><br>",
                            formatter: r.a.partial(this.tooltipFormatter, this),
                            backgroundColor: "rgba(0,0,0,0.85)",
                            borderWidth: 0,
                            shape: "square",
                            style: {
                                color: "white"
                            },
                            positioner: function(t, e, a) {
                                var i = {
                                    x: a.plotX,
                                    y: a.plotY
                                };
                                return i.x -= t / 2 + 30,
                                i.x < 0 && (i.x = a.plotX + (t + 60) / 2),
                                i.y = 35,
                                i
                            }
                        },
                        legend: {
                            enabled: !1
                        },
                        series: [{
                            name: "Running",
                            color: v.a.Colors.peakGreen,
                            data: this.buildSeries(this.data.ACTIVITY_VO2_MAX),
                            marker: {
                                enabled: !0
                            }
                        }, {
                            name: "Cycling",
                            color: v.a.Colors.blue,
                            data: this.buildSeries(this.data.ACTIVITY_VO2_MAX_CYCLING),
                            marker: {
                                symbol: "diamond",
                                enabled: !0
                            }
                        }],
                        credits: {
                            enabled: !1
                        },
                        exporting: {
                            enabled: !1
                        }
                    }
                },
                createPlotOptions: function(t) {
                    return {
                        series: {
                            point: {
                                events: {
                                    mouseOver: function() {
                                        var e = this.series.name
                                          , a = this.series.chart
                                          , i = ""
                                          , r = "";
                                        if ("Running" === e) {
                                            i = this.y;
                                            var n = this.series.chart.series.length > 1 ? this.series.chart.series[1] : null;
                                            if (n && n.data.length > 0) {
                                                var o = n.data.length;
                                                r = n.data[o - 2].y
                                            }
                                        } else {
                                            r = this.y;
                                            var l = this.series.chart.series.length > 1 ? this.series.chart.series[0] : null;
                                            if (l && l.data.length > 0) {
                                                var c = l.data.length;
                                                i = l.data[c - 2].y
                                            }
                                        }
                                        t.hasDualSportTypes() ? a.setSubtitle({
                                            text: "<div class='current-vo2max-container'><div class='vo2max-running-metrics'><div class='vo2max-color-chip'></div><label>" + i + "</label></div><div class='vo2max-cycling-metrics'><img src='/web-images/training-status/chart-legend-diamond.svg'/><label>" + r + " (" + s.a.localize(p.a.SportTypes.Cycling.key) + ")</label></div></div>"
                                        }) : "running"in t.latestVO2MaxMetrics ? a.setSubtitle({
                                            text: "<div class='current-vo2max-container'><div class='vo2max-running-metrics'><div class='vo2max-color-chip'></div><label>" + i + "</label></div></div>"
                                        }) : a.setSubtitle({
                                            text: "<div class='current-vo2max-container'><div class='vo2max-cycling-metrics'><img src='/web-images/training-status/chart-legend-diamond.svg'/><label>" + r + " (" + s.a.localize(p.a.SportTypes.Cycling.key) + ")</label></div></div>"
                                        })
                                    }
                                }
                            },
                            events: {
                                mouseOut: function() {
                                    this.chart.setSubtitle({
                                        text: ""
                                    })
                                }
                            }
                        }
                    }
                },
                getChartSubtitle: function() {
                    return "<div class='current-vo2max-container'>" + this.formatRunningVO2MaxMetric() + this.formatCyclingVO2MaxMetric() + "</div>"
                },
                formatRunningVO2MaxMetric: function() {
                    var t = null;
                    return "running"in this.latestVO2MaxMetrics && (t = this.latestVO2MaxMetrics.running.value),
                    t ? "<div class='vo2max-running-metrics'><div class='vo2max-color-chip'></div><label>" + t + "</label></div>" : ""
                },
                formatCyclingVO2MaxMetric: function() {
                    var t = null;
                    return "cycling"in this.latestVO2MaxMetrics && (t = this.latestVO2MaxMetrics.cycling.value),
                    t ? "<div class='vo2max-cycling-metrics'><img src='/web-images/training-status/chart-legend-diamond.svg'/><label>" + t + " (" + s.a.localize(p.a.SportTypes.Cycling.key) + ")</label></div>" : ""
                },
                hasDualSportTypes: function() {
                    return "running"in this.latestVO2MaxMetrics && "cycling"in this.latestVO2MaxMetrics
                },
                getYAxesConfig: function() {
                    var t = [];
                    return t.push({
                        title: !1,
                        tickInterval: 5,
                        minRange: 15,
                        opposite: !0
                    }, {
                        title: !1,
                        tickInterval: 5,
                        minRange: 15,
                        opposite: !0,
                        labels: {
                            enabled: !1
                        }
                    }),
                    t
                },
                renderTooltips: function() {
                    new u.a({
                        el: this.$(".help-vo2-max-chart"),
                        content: s.a.localize("vo2.max.chart.title.tooltip")
                    })
                },
                buildSeries: function(t) {
                    var e, a, i = [];
                    if (i.push([0, null]),
                    !t)
                        return null;
                    for (e = 0; e < t.length; e++)
                        ((a = "weekly" === this.metricPeriod ? p.a.addMetricToDataset(t[e].calendarDate, this.categories, this.userPreferences) : h()(t[e].startDateOfWeek).isBefore(this.startDate) || h()(t[e].startDateOfWeek).isAfter(this.untilDate) ? null : p.a.addMetricToDataset(t[e].startDateOfWeek, this.categories, this.userPreferences)) || 0 === a) && i.push([a, t[e].value]);
                    return i.push([this.categories.length - 1, null]),
                    i
                },
                enableMarkers: function(t) {
                    return t && 1 === t.length
                },
                onMouseMove: function(t) {
                    t = this.highChartObj.pointer.normalize(t);
                    var e = Math.round(this.highChartObj.xAxis[0].toValue(t.chartX));
                    this.xAxisAddPlotLine(e),
                    this.trigger(A.ShowPlotLine, e),
                    this.trigger(A.ON_CHART_HOVER, "vo2-max")
                },
                xAxisAddPlotLine: function(t) {
                    this.plotLineVisible && this.highChartObj.xAxis[0].removePlotLine(this.plotLineId),
                    this.highChartObj.xAxis[0].addPlotLine({
                        color: v.a.Colors.grey,
                        value: t,
                        width: 1,
                        id: this.plotLineId,
                        zIndex: 1
                    }),
                    this.plotLineVisible = !0
                },
                tooltipFormatter: function() {
                    var t = n.a.calculateAge(d.a.get("birthDate"))
                      , e = "<b>" + this.series.name + "</b><br>"
                      , a = this.y
                      , i = {};
                    i.gender = d.a.get("gender") || "MALE",
                    i.ageRange = d.a.get("birthDate") ? m.a.getAgeRange(t) : "40-49";
                    var r = g.a.getScoreData(i.gender, i.ageRange, a);
                    return a > r.group[0] ? e += s.a.localize("superior") + ": " + a + " " + s.a.localize("vo2Max_unit") : a >= r.group[1] && a < r.group[0] ? e += s.a.localize("excellent") + ": " + a + " " + s.a.localize("vo2Max_unit") : a >= r.group[2] && a < r.group[1] ? e += s.a.localize("good") + ": " + a + " " + s.a.localize("vo2Max_unit") : a >= r.group[3] && a < r.group[2] ? e += s.a.localize("fair") + ": " + a + " " + s.a.localize("vo2Max_unit") : e += s.a.localize("poor") + ": " + a + " " + s.a.localize("vo2Max_unit"),
                    e
                },
                onChartHover: function() {
                    this.highChartObj.setSubtitle({
                        text: ""
                    })
                },
                expandCollapseHandler: function() {
                    this.resizeVO2TrainingStatusChart(),
                    this.reflowVO2TrainingStatusChart()
                },
                reflowVO2TrainingStatusChart: function() {
                    this.highChartObj && this.highChartObj.reflow()
                },
                resizeVO2TrainingStatusChart: function() {
                    this.highChartObj.setSize(this.$el.get(0).clientWidth - 12, void 0)
                },
                unbindResizeVO2TrainingStatusChart: function() {
                    t(window).off("resize:resizeVO2TrainingStatusChart")
                }
            });
            y.Events = A,
            e.a = y
        }
        ).call(this, a(10))
    },
    3229: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(7)
              , r = a.n(i)
              , s = a(6)
              , n = (a(13),
            a(9))
              , o = a.n(n)
              , l = a(15)
              , c = a.n(l)
              , h = a(85)
              , d = a(23)
              , u = a(39)
              , p = a(62)
              , g = a(5156)
              , m = a(116)
              , f = a(1339)
              , v = a(1227)
              , T = a(1233)
              , _ = a.n(T)
              , A = {
                ShowPlotLine: "ShowPlotLine",
                ON_CHART_HOVER: "ON_CHART_HOVER"
            }
              , y = o.a.View.extend({
                COLUMN_HOVER_COLORS: {
                    SPEED: {
                        color: v.a.Colors.purple
                    },
                    ANAEROBIC_CAPACITY: {
                        color: v.a.Colors.purple
                    },
                    VO2MAX: {
                        color: v.a.Colors.mango
                    },
                    LACTATE_THRESHOLD: {
                        color: v.a.Colors.mango
                    },
                    TEMPO: {
                        color: v.a.Colors.mango
                    },
                    AEROBIC_BASE: {
                        color: v.a.Colors.teBenefitGreen
                    },
                    RECOVERY: {
                        color: v.a.Colors.teBenefitGreen
                    },
                    UNKNOWN: {
                        color: v.a.Colors.grey
                    }
                },
                events: {
                    mousemove: "onMouseMove",
                    "click .exercise-load-activity-list": "onActivityListClick"
                },
                initialize: function(e) {
                    this.exerciseLoadMetrics = e.model,
                    this.reportType = e.reportType,
                    this.userPreferences = e.userPreferences,
                    this.metricPeriod = e.metricPeriod,
                    this.startDate = e.startDate,
                    this.untilDate = e.untilDate,
                    this.categories = e.categories,
                    this.plotLineVisible = !1,
                    this.acclimationType = e.type,
                    this.plotLineId = "exercise-load-plotline",
                    this.setStepAndTickIntervalSize();
                    var a = this;
                    t(window).resize(function() {
                        a.reSizeChart()
                    })
                },
                render: function() {
                    var t = this.buildChartOptions();
                    this.chart = new _.a.Chart(t),
                    this.renderTooltips()
                },
                buildChartOptions: function() {
                    var t = this;
                    return {
                        chart: {
                            type: "column",
                            height: 230,
                            margin: [70, 45, 40, 3],
                            width: this.$el.get(0).clientWidth - 12,
                            renderTo: this.$el.get(0),
                            events: {
                                load: function() {
                                    t.addTextForActivityList(this),
                                    t.setYAxisExtremes(this)
                                }
                            }
                        },
                        title: {
                            useHTML: !0,
                            text: this.getChartTitleText(),
                            align: "left",
                            x: -10,
                            y: 15
                        },
                        subtitle: {
                            text: "",
                            useHTML: !0,
                            align: "right",
                            verticalAlign: "top",
                            x: -35,
                            y: 15
                        },
                        xAxis: {
                            alternateGridColor: "#F6F6F6",
                            gridLineWidth: 1,
                            labels: {
                                step: this.stepSize
                            },
                            tickInterval: this.tickIntervalSize,
                            lineColor: "#969696",
                            tickLength: 0,
                            categories: this.categories,
                            opposite: !0
                        },
                        yAxis: this.getYAxesConfig(),
                        plotOptions: this.createPlotOptions(t),
                        tooltip: {
                            enabled: !1
                        },
                        legend: {
                            enabled: !1,
                            align: "right",
                            labelFormatter: function() {
                                return "SPEED" === this.name ? s.a.localize("te.label.category.anaerobic") : "VO2MAX" === this.name ? s.a.localize("te.label.category.high.aerobic") : "RECOVERY" === this.name ? s.a.localize("te.label.category.low.aerobic") : ""
                            },
                            symbolHeight: 10,
                            itemStyle: {
                                cursor: "default",
                                fontWeight: "normal",
                                fontSize: "12px",
                                lineHeight: "15px",
                                color: "#888"
                            },
                            x: -30,
                            y: 5
                        },
                        series: this.buildSeries(),
                        credits: {
                            enabled: !1
                        },
                        exporting: {
                            enabled: !1
                        }
                    }
                },
                orderColumns: function(t) {
                    var e, a, i = {};
                    t.series.forEach(function(t) {
                        t.points.forEach(function(t, e) {
                            i[t.category] || (i[t.category] = []),
                            i[t.category].push(t)
                        })
                    }),
                    _.a.objectEach(i, function(t, i) {
                        e = t[t.length - 1].shapeArgs,
                        a = e.y + e.height,
                        (t = r.a.sortBy(t, "calendarDate")).forEach(function(t) {
                            t.series.visible && t.graphic && (t.graphic.attr({
                                y: a - t.shapeArgs.height
                            }),
                            a -= t.shapeArgs.height)
                        })
                    })
                },
                addTextForActivityList: function(t) {
                    var e = '<span class="exercise-load-activity-list">' + s.a.localize("exercise.load.activity.list") + "</span>";
                    t.customText = t.renderer.text(e, 10, 210).css({
                        color: "#11A9ED",
                        fontSize: "12px",
                        fontWeight: "normal"
                    }).add()
                },
                setYAxisExtremes: function(t) {
                    var e = t.yAxis[0]
                      , a = e.dataMax + 80;
                    e.setExtremes(0, a, !0, !1)
                },
                buildSeries: function() {
                    var t = [];
                    return t.push({
                        name: "SPEED",
                        data: this.buildChartData("SPEED"),
                        color: v.a.Colors.blue,
                        marker: {
                            enabled: !1
                        },
                        index: 0
                    }),
                    t.push({
                        name: "ANAEROBIC_CAPACITY",
                        data: this.buildChartData("ANAEROBIC_CAPACITY"),
                        color: v.a.Colors.blue,
                        marker: {
                            enabled: !1
                        },
                        softThreshold: !1,
                        showInLegend: !1,
                        index: 1
                    }),
                    t.push({
                        name: "VO2MAX",
                        data: this.buildChartData("VO2MAX"),
                        color: v.a.Colors.blue,
                        marker: {
                            enabled: !1
                        },
                        softThreshold: !1,
                        index: 2
                    }),
                    t.push({
                        name: "LACTATE_THRESHOLD",
                        data: this.buildChartData("LACTATE_THRESHOLD"),
                        color: v.a.Colors.blue,
                        marker: {
                            enabled: !1
                        },
                        softThreshold: !1,
                        showInLegend: !1,
                        index: 3
                    }),
                    t.push({
                        name: "TEMPO",
                        data: this.buildChartData("TEMPO"),
                        color: v.a.Colors.blue,
                        marker: {
                            enabled: !1
                        },
                        softThreshold: !1,
                        showInLegend: !1,
                        index: 4
                    }),
                    t.push({
                        name: "AEROBIC_BASE",
                        data: this.buildChartData("AEROBIC_BASE"),
                        color: v.a.Colors.blue,
                        marker: {
                            enabled: !1
                        },
                        softThreshold: !1,
                        showInLegend: !1,
                        index: 5
                    }),
                    t.push({
                        name: "RECOVERY",
                        data: this.buildChartData("RECOVERY"),
                        color: v.a.Colors.blue,
                        marker: {
                            enabled: !1
                        },
                        softThreshold: !1,
                        index: 6
                    }),
                    t.push({
                        name: "UNKNOWN",
                        data: this.buildChartData("UNKNOWN"),
                        color: v.a.Colors.blue,
                        marker: {
                            enabled: !1
                        },
                        softThreshold: !1,
                        showInLegend: !1,
                        index: 7
                    }),
                    t
                },
                createPlotOptions: function(t) {
                    return {
                        column: {
                            stacking: "normal",
                            dataLabels: {
                                enabled: !1,
                                color: "white"
                            },
                            point: {
                                events: {
                                    mouseOver: function(t) {
                                        var e = "<div class='exercise-load-subtitle'><label>" + this.activity + " @ " + this.time + " (" + s.a.localize("exercise.load.chart.subtitle", this.benefit) + ")</label></div>";
                                        this.series.chart.setSubtitle({
                                            text: e
                                        })
                                    },
                                    mouseOut: function(t) {
                                        this.series.chart.setSubtitle({
                                            text: ""
                                        })
                                    }
                                }
                            }
                        },
                        series: {
                            stacking: "normal",
                            showCheckbox: !1,
                            selected: !0,
                            events: {
                                mouseOver: function(e) {
                                    for (var a = this.chart.series, i = 0; i < a.length; i++) {
                                        var r = a[i]
                                          , s = t.COLUMN_HOVER_COLORS[r.name].color;
                                        r.update({
                                            color: s
                                        })
                                    }
                                    this.chart.update({
                                        legend: {
                                            enabled: !0
                                        }
                                    }),
                                    this.chart.redraw()
                                },
                                mouseOut: function(t) {
                                    for (var e = this.chart.series, a = 0; a < e.length; a++) {
                                        e[a].update({
                                            color: v.a.Colors.blue
                                        })
                                    }
                                    this.chart.update({
                                        legend: {
                                            enabled: !1
                                        }
                                    }),
                                    this.chart.redraw()
                                }
                            }
                        }
                    }
                },
                getChartTitleText: function() {
                    return "<label class='ts-chart-header data-bit'>" + s.a.localize("exercise_load") + "<span class='help-icon'><i class='icon-help has-tooltip help-exercise-load-chart' data-placement='top'></i></span></label>"
                },
                setStepAndTickIntervalSize: function() {
                    "weekly" === this.metricPeriod ? (this.stepSize = 7,
                    this.tickIntervalSize = 1) : "monthly" === this.metricPeriod ? (this.stepSize = 4,
                    this.tickIntervalSize = 7) : (this.stepSize = 2,
                    this.tickIntervalSize = 14)
                },
                getYAxesConfig: function() {
                    var t = []
                      , e = this.getYMax();
                    return t.push({
                        title: !1,
                        opposite: !0,
                        tickInterval: e > 500 ? 150 : 100,
                        min: 0,
                        max: e
                    }),
                    t
                },
                getYMax: function() {
                    var t = this.exerciseLoadMetrics.sort(function(t, e) {
                        return e.get("activityTrainingLoad") - t.get("activityTrainingLoad")
                    });
                    return t && t.length > 0 ? t[0].get("activityTrainingLoad") : 100
                },
                renderTooltips: function() {
                    new p.a({
                        el: this.$(".help-exercise-load-chart"),
                        content: s.a.localize("exercise.load.chart.title.tooltip")
                    })
                },
                buildChartData: function(t) {
                    var e, a, i = [];
                    this.exerciseLoadMetrics.models;
                    i.push({
                        x: 0,
                        y: null
                    });
                    var n = this.getFilteredSeriesData(t);
                    if (n && n.length > 0)
                        for (e = 0; e < n.length; e++) {
                            var o = d.a.formatISODate(h.a.parseISO(n[e].get("startLocal")));
                            if (a = "weekly" === this.metricPeriod ? m.a.addMetricToDataset(o, this.categories, this.userPreferences) : c()(o).isBefore(this.startDate) || c()(o).isAfter(this.untilDate) ? null : m.a.addMetricToDataset(o, this.categories, this.userPreferences)) {
                                var l = n[e]
                                  , u = l.get("activityTrainingLoad")
                                  , p = m.a.getFriendlyActivityName(l.get("activityType"))
                                  , g = d.a.formatLocalizeTime(h.a.parseISO(l.get("startLocal")))
                                  , v = f.a.getPrimaryBenefit(l.get("trainingEffectLabel"));
                                i.push({
                                    x: a,
                                    y: u,
                                    activity: p,
                                    time: g,
                                    benefit: v ? s.a.localize(v.label) : s.a.localize("te.label.unknown"),
                                    calendarDate: l.get("startLocal")
                                })
                            }
                        }
                    return i.push({
                        x: this.categories.length - 1,
                        y: null
                    }),
                    r.a.sortBy(i, "x")
                },
                getFilteredSeriesData: function(t) {
                    return this.exerciseLoadMetrics.filter(function(e) {
                        return e.get("trainingEffectLabel") === t
                    })
                },
                onMouseMove: function(t) {
                    t = this.chart.pointer.normalize(t);
                    var e = Math.round(this.chart.xAxis[0].toValue(t.chartX));
                    this.addXAxisPlotLine(e),
                    this.trigger(A.ShowPlotLine, e),
                    this.trigger(A.ON_CHART_HOVER)
                },
                addXAxisPlotLine: function(t) {
                    this.plotLineVisible && this.chart.xAxis[0].removePlotLine(this.plotLineId),
                    this.chart.xAxis[0].addPlotLine({
                        color: v.a.Colors.grey,
                        value: t,
                        width: 1,
                        id: this.plotLineId,
                        zIndex: 1
                    }),
                    this.plotLineVisible = !0
                },
                onActivityListClick: function() {
                    this.activityListView && this.activityListView.destroy(),
                    this.activityListView = new g.a({
                        data: this.exerciseLoadMetrics
                    }),
                    new u.a({
                        view: this.activityListView,
                        showFooter: !1,
                        customClasses: "exercise-load-activity-list-modal modal-wide",
                        modalTitle: "Your Activity"
                    }).render()
                },
                reflowChart: function() {
                    this.chart && this.chart.reflow()
                },
                reSizeChart: function() {
                    this.chart.setSize(this.$el.get(0).clientWidth - 12, void 0)
                },
                unbineResizeChart: function() {
                    t(window).off("resize:reSizeChart")
                },
                destroy: function() {
                    this.unbineResizeChart(),
                    this.remove()
                }
            });
            y.Events = A,
            e.a = y
        }
        ).call(this, a(10))
    },
    3230: function(t, e) {
        t.exports = '<td title="<%- activityDate %>"><%- activityDate %></td>\n<td title="<%- activityName %>"><a class="colored" href="<%- NavigationUtil.url(\'/activity/\'+ activityId) %>"><%- activityName %></a></td>\n<td title="<%- distance %>" class="text-right"><%- distance %> <%-distanceUnit %></td>\n<td title="<%- activityLoad %>" class="text-right"><%- activityLoad %></td>\n<td title="<%- primaryBenefit.type %>">\n    <div class="primary-benefit-container">\n        <div class="primaryBenefitChip" style="background:<%- primaryBenefit.color %>"></div>\n        <span><%- primaryBenefit.type %></span>\n    </div>\n</td>\n<td title="<%- activityType %>"><%- activityType %></td>'
    },
    3231: function(t, e) {
        t.exports = "<div class=\"row-fluid\">\n    <table class=\"table table-responsive exercise-load-activity-list-table\">\n        <thead>\n            <tr class=\"table-header-row\">\n                <th title=\"<%- Localizer.localize('exercise.load.activity.date') %>\"><%- Localizer.localize('exercise.load.activity.date') %></th>\n                <th title=\"<%- Localizer.localize('exercise.load.activity.name') %>\"><%- Localizer.localize('exercise.load.activity.name') %></th>\n                <th title=\"<%- Localizer.localize('exercise.load.activity.distance') %>\" class=\"text-right\"><%- Localizer.localize('exercise.load.activity.distance') %></th>\n                <th title=\"<%- Localizer.localize('exercise.load.activity.load') %>\" class=\"text-right span2\"><%- Localizer.localize('exercise.load.activity.load') %></th>\n                <th title=\"<%- Localizer.localize('exercise.load.activity.benefit') %>\"><%- Localizer.localize('exercise.load.activity.benefit') %></th>\n                <th title=\"<%- Localizer.localize('exercise.load.activity.type') %>\"><%- Localizer.localize('exercise.load.activity.type') %></th>\n            </tr>\n        </thead>\n\n        <tbody>\n            \x3c!-- ExerciseLoadActivityListItemView --\x3e\n        </tbody>\n    </table>\n</div>"
    },
    3232: function(t, e, a) {
        "use strict";
        (function(t) {
            a(7);
            var i = a(6)
              , r = a(13)
              , s = a(9)
              , n = a.n(s)
              , o = a(15)
              , l = a.n(o)
              , c = a(62)
              , h = a(116)
              , d = a(1227)
              , u = a(1233)
              , p = a.n(u)
              , g = {
                ShowPlotLine: "ShowPlotLine",
                ON_CHART_HOVER: "ON_CHART_HOVER"
            }
              , m = n.a.View.extend({
                events: {
                    mousemove: "onMouseMove"
                },
                initialize: function(e) {
                    this.acclimationData = e.model,
                    this.latestVO2MaxMetrics = e.latestVO2MaxMetrics,
                    this.reportType = e.reportType,
                    this.userPreferences = e.userPreferences,
                    this.metricPeriod = e.metricPeriod,
                    this.startDate = e.startDate,
                    this.untilDate = e.untilDate,
                    this.categories = e.categories,
                    this.plotLineVisible = !1,
                    this.acclimationType = e.type,
                    this.plotLineId = "acclimation-plotline-" + this.acclimationType,
                    this.setStepAndTickIntervalSize();
                    var a = this;
                    t(window).resize(function() {
                        a.reSizeChart()
                    })
                },
                render: function() {
                    var t = this.buildChartOptions();
                    this.chart = new p.a.Chart(t),
                    this.renderTooltips(),
                    this.addHoverEffect()
                },
                buildChartOptions: function() {
                    return {
                        chart: {
                            type: "line",
                            height: 200,
                            width: this.$el.get(0).clientWidth,
                            renderTo: this.$el.get(0),
                            marginLeft: 13
                        },
                        title: {
                            useHTML: !0,
                            text: this.getChartTitleText(),
                            align: "left",
                            x: 0,
                            y: 25
                        },
                        subtitle: {
                            text: this.getChartSubtitle(),
                            useHTML: !0,
                            align: "right",
                            verticalAlign: "top",
                            x: -50,
                            y: 20
                        },
                        plotOptions: this.createPlotOptions(this),
                        xAxis: {
                            labels: {
                                step: this.stepSize,
                                align: "yearly" === this.metricPeriod ? "left" : ""
                            },
                            gridLineWidth: 1,
                            alternateGridColor: "#F6F6F6",
                            tickInterval: this.tickIntervalSize,
                            lineColor: "#969696",
                            tickLength: 0,
                            categories: this.categories,
                            opposite: !0
                        },
                        tooltip: {
                            enabled: !1
                        },
                        legend: {
                            enabled: !1
                        },
                        series: [{
                            name: i.a.localize("label_altitude_acclimation"),
                            color: d.a.Colors.vo2Black,
                            data: this.acclimationData.length > 0 ? this.getAcclimationData() : null,
                            marker: {
                                enabled: !0
                            },
                            softThreshold: !1
                        }],
                        yAxis: this.getYAxesConfig(),
                        credits: {
                            enabled: !1
                        },
                        exporting: {
                            enabled: !1
                        }
                    }
                },
                shouldEnableMarkers: function() {
                    return 1 === this.noOfPoints
                },
                createPlotOptions: function(t) {
                    return {
                        series: {
                            point: {
                                events: {
                                    mouseOver: function() {
                                        var t = this.series.chart
                                          , e = this.y;
                                        e && t.setSubtitle({
                                            text: "<div class='current-acclimation-container'><label class='acclimation-current-value'><abbr data-toggle='tooltip' id='altitude-acclimation-help'>" + r.a.personalizeAltitudeAcclimation(e) + "</abbr></label></div>"
                                        })
                                    }
                                }
                            },
                            events: {
                                mouseOut: function(t) {
                                    this.chart.setSubtitle({
                                        text: ""
                                    })
                                }
                            },
                            animation: !1
                        }
                    }
                },
                getChartTitleText: function() {
                    var t = i.a.localize(r.a.getAltitudeAcclimationHeightUnit(!1));
                    return "<label class='ts-chart-header data-bit'>" + i.a.localize("altitude.acclimation.chart.title", t) + "<span class='help-icon'><i class='icon-help has-tooltip help-altitude-acclimation-chart' data-placement='top'></i></span></label>"
                },
                setStepAndTickIntervalSize: function() {
                    "weekly" === this.metricPeriod ? (this.stepSize = 7,
                    this.tickIntervalSize = 1) : "monthly" === this.metricPeriod ? (this.stepSize = 4,
                    this.tickIntervalSize = 7) : (this.stepSize = 2,
                    this.tickIntervalSize = 14)
                },
                getChartSubtitle: function() {
                    var t = this.latestVO2MaxMetrics.getAltitudeAcclimation();
                    return (t = r.a.measurementSystem === r.a.MeasurementSystems.METRIC ? t : Math.round(r.a.convertMetersFt(t))) || 0 === t ? "<div class='current-acclimation-container'><label class='acclimation-current-value'><abbr data-toggle='tooltip' id='altitude-acclimation-help'>" + r.a.personalizeAltitudeAcclimation(t) + "</abbr></label></div>" : ""
                },
                getYAxesConfig: function() {
                    var t = [];
                    return r.a.measurementSystem === r.a.MeasurementSystems.METRIC ? t.push({
                        title: !1,
                        tickInterval: 800,
                        min: 0,
                        max: 4e3,
                        minRange: .1,
                        opposite: !0
                    }) : t.push({
                        title: !1,
                        tickInterval: 2620,
                        min: 0,
                        max: 13100,
                        minRange: .1,
                        opposite: !0,
                        labels: {
                            formatter: function() {
                                return this.value
                            }
                        }
                    }),
                    t
                },
                renderTooltips: function() {
                    new c.a({
                        el: this.$(".help-altitude-acclimation-chart"),
                        content: i.a.localize("altitude.acclimation.chart.title.tooltip")
                    }),
                    this.latestVO2MaxMetrics && this.latestVO2MaxMetrics.getAltitudeAcclimationTrend() && new c.a({
                        content: h.a.getAltitudeAcclimationHelpContent(this.latestVO2MaxMetrics, r.a),
                        placement: "top",
                        el: this.$("#altitude-acclimation-help"),
                        allowHtml: !0,
                        allowClickThrough: !1
                    })
                },
                addHoverEffect: function() {
                    this.$('[data-toggle="tooltip"]').hover(function() {
                        var e = t(".tooltip-inner")
                          , a = t(".tooltip-arrow");
                        e.css("background-color", "#f5f5f5"),
                        e.css("border", "1px solid #C7C7C7"),
                        e.css("color", "black"),
                        a.css("border", "0")
                    })
                },
                getAcclimationData: function() {
                    var t, e, a = [], i = this.acclimationData.models, s = r.a.measurementSystem === r.a.MeasurementSystems.METRIC;
                    for (this.noOfPoints = 0,
                    a.push([0, null]),
                    t = 0; t < i.length; t++) {
                        var n = i[t].get("heatAltitudeAcclimation") ? i[t].get("heatAltitudeAcclimation").calendarDate : null;
                        if (n && ((e = "weekly" === this.metricPeriod ? h.a.addMetricToDataset(n, this.categories, this.userPreferences) : l()(n).isBefore(this.startDate) || l()(n).isAfter(this.untilDate) ? null : h.a.addMetricToDataset(n, this.categories, this.userPreferences)) || 0 === e)) {
                            var o = i[t].get("heatAltitudeAcclimation").altitudeAcclimation;
                            s ? a.push([e, o]) : a.push([e, Math.round(r.a.convertMetersFt(o))]),
                            this.noOfPoints += 1
                        }
                    }
                    return a.push([this.categories.length - 1, null]),
                    a
                },
                onMouseMove: function(t) {
                    t = this.chart.pointer.normalize(t);
                    var e = Math.round(this.chart.xAxis[0].toValue(t.chartX));
                    this.addXAxisPlotLine(e),
                    this.trigger(g.ShowPlotLine, e),
                    this.trigger(g.ON_CHART_HOVER, "altitude-acclimation")
                },
                addXAxisPlotLine: function(t) {
                    this.plotLineVisible && this.chart.xAxis[0].removePlotLine(this.plotLineId),
                    this.chart.xAxis[0].addPlotLine({
                        color: d.a.Colors.grey,
                        value: t,
                        width: 1,
                        id: this.plotLineId,
                        zIndex: 1
                    }),
                    this.plotLineVisible = !0
                },
                onChartHover: function() {
                    this.chart.setSubtitle({
                        text: ""
                    })
                },
                reflowChart: function() {
                    this.chart && this.chart.reflow()
                },
                reSizeChart: function() {
                    this.chart.setSize(this.$el.get(0).clientWidth - 12, void 0)
                },
                unbineResizeChart: function() {
                    t(window).off("resize:reSizeChart")
                },
                destroy: function() {
                    this.unbineResizeChart(),
                    this.remove()
                }
            });
            m.Events = g,
            e.a = m
        }
        ).call(this, a(10))
    },
    3233: function(t, e, a) {
        "use strict";
        (function(t) {
            a(7);
            var i = a(6)
              , r = a(13)
              , s = a(9)
              , n = a.n(s)
              , o = a(15)
              , l = a.n(o)
              , c = a(62)
              , h = a(116)
              , d = a(1227)
              , u = a(1233)
              , p = a.n(u)
              , g = {
                ShowPlotLine: "ShowPlotLine",
                ON_CHART_HOVER: "ON_CHART_HOVER"
            }
              , m = n.a.View.extend({
                events: {
                    mousemove: "onMouseMove"
                },
                initialize: function(e) {
                    this.acclimationData = e.model,
                    this.latestVO2MaxMetrics = e.latestVO2MaxMetrics,
                    this.reportType = e.reportType,
                    this.userPreferences = e.userPreferences,
                    this.metricPeriod = e.metricPeriod,
                    this.startDate = e.startDate,
                    this.untilDate = e.untilDate,
                    this.categories = e.categories,
                    this.plotLineVisible = !1,
                    this.acclimationType = e.type,
                    this.plotLineId = "acclimation-plotline-" + this.acclimationType,
                    this.setStepAndTickIntervalSize();
                    var a = this;
                    t(window).resize(function() {
                        a.reSizeChart()
                    })
                },
                render: function() {
                    var t = this.buildChartOptions();
                    this.chart = new p.a.Chart(t),
                    this.renderTooltips(),
                    this.addHoverEffect()
                },
                buildChartOptions: function() {
                    return {
                        chart: {
                            type: "line",
                            height: 200,
                            width: this.$el.get(0).clientWidth - 12,
                            renderTo: this.$el.get(0),
                            marginLeft: 13
                        },
                        title: {
                            useHTML: !0,
                            text: this.getChartTitleText(),
                            align: "left",
                            x: 0,
                            y: 25
                        },
                        subtitle: {
                            text: this.getChartSubtitle(),
                            useHTML: !0,
                            align: "right",
                            verticalAlign: "top",
                            x: -40,
                            y: 20
                        },
                        plotOptions: this.createPlotOptions(this),
                        xAxis: {
                            alternateGridColor: "#F6F6F6",
                            gridLineWidth: 1,
                            labels: {
                                step: this.stepSize,
                                align: "yearly" === this.metricPeriod ? "left" : ""
                            },
                            tickInterval: this.tickIntervalSize,
                            lineColor: "#969696",
                            tickLength: 0,
                            categories: this.categories,
                            opposite: !0
                        },
                        yAxis: this.getYAxesConfig(),
                        tooltip: {
                            enabled: !1
                        },
                        legend: {
                            enabled: !1
                        },
                        series: [{
                            name: i.a.localize("label_heat_acclimation"),
                            color: d.a.Colors.vo2Black,
                            data: this.acclimationData.length > 0 ? this.getAcclimationData() : null,
                            marker: {
                                enabled: !0
                            },
                            softThreshold: !1
                        }],
                        credits: {
                            enabled: !1
                        },
                        exporting: {
                            enabled: !1
                        }
                    }
                },
                shouldEnableMarkers: function() {
                    return 1 === this.noOfPoints
                },
                createPlotOptions: function(t) {
                    return {
                        series: {
                            point: {
                                events: {
                                    mouseOver: function() {
                                        var t = this.series.chart
                                          , e = this.y + "%";
                                        t.setSubtitle({
                                            text: "<div class='current-acclimation-container'><label><abbr data-toggle='tooltip' id='heat-acclimation-help'>" + e + "</abbr></label></div>"
                                        })
                                    }
                                }
                            },
                            events: {
                                mouseOut: function() {
                                    this.chart.setSubtitle({
                                        text: ""
                                    })
                                }
                            }
                        }
                    }
                },
                getChartTitleText: function() {
                    return "<label class='ts-chart-header data-bit'>" + i.a.localize("heat.acclimation.chart.title") + "<span class='help-icon'><i class='icon-help has-tooltip help-heat-acclimation-chart' data-placement='top'></i></span></label>"
                },
                setStepAndTickIntervalSize: function() {
                    "weekly" === this.metricPeriod ? (this.stepSize = 7,
                    this.tickIntervalSize = 1) : "monthly" === this.metricPeriod ? (this.stepSize = 4,
                    this.tickIntervalSize = 7) : (this.stepSize = 2,
                    this.tickIntervalSize = 14)
                },
                getChartSubtitle: function() {
                    var t = 0;
                    return this.latestVO2MaxMetrics.getHeatAcclimation() ? "<div class='current-acclimation-container'><label><abbr data-toggle='tooltip' id='heat-acclimation-help'>" + (t = this.latestVO2MaxMetrics.getHeatAcclimation() + "%") + "</abbr></label></div>" : 0 === this.latestVO2MaxMetrics.getHeatAcclimation() ? "<div class='current-acclimation-container'><label><abbr data-toggle='tooltip' id='heat-acclimation-help'>" + t + "</abbr></label></div>" : ""
                },
                getYAxesConfig: function() {
                    var t = [];
                    return t.push({
                        title: !1,
                        opposite: !0,
                        tickInterval: 10,
                        min: 0,
                        max: 100,
                        minRange: .1
                    }),
                    t
                },
                renderTooltips: function() {
                    new c.a({
                        el: this.$(".help-heat-acclimation-chart"),
                        content: i.a.localize("heat.acclimation.chart.title.tooltip")
                    }),
                    this.latestVO2MaxMetrics && this.latestVO2MaxMetrics.getHeatAcclimationTrend() && new c.a({
                        content: h.a.getHeatAcclimationHelpContent(this.latestVO2MaxMetrics, r.a),
                        placement: "top",
                        el: this.$("#heat-acclimation-help"),
                        allowHtml: !0,
                        allowClickThrough: !1
                    })
                },
                addHoverEffect: function() {
                    this.$('[data-toggle="tooltip"]').hover(function() {
                        var e = t(".tooltip-inner")
                          , a = t(".tooltip-arrow");
                        e.css("background-color", "#f5f5f5"),
                        e.css("border", "1px solid #C7C7C7"),
                        e.css("color", "black"),
                        a.css("border", "0")
                    })
                },
                getAcclimationData: function() {
                    var t, e, a = [], i = this.acclimationData.models;
                    for (this.noOfPoints = 0,
                    a.push([0, null]),
                    t = 0; t < i.length; t++) {
                        var r = i[t].get("heatAltitudeAcclimation") ? i[t].get("heatAltitudeAcclimation").calendarDate : null;
                        if (r && ((e = "weekly" === this.metricPeriod ? h.a.addMetricToDataset(r, this.categories, this.userPreferences) : l()(r).isBefore(this.startDate) || l()(r).isAfter(this.untilDate) ? null : h.a.addMetricToDataset(r, this.categories, this.userPreferences)) || 0 === e)) {
                            var s = i[t].get("heatAltitudeAcclimation").heatAcclimationPercentage;
                            a.push([e, s]),
                            this.noOfPoints += 1
                        }
                    }
                    return a.push([this.categories.length - 1, null]),
                    a
                },
                onMouseMove: function(t) {
                    t = this.chart.pointer.normalize(t);
                    var e = Math.round(this.chart.xAxis[0].toValue(t.chartX));
                    this.addXAxisPlotLine(e),
                    this.trigger(g.ShowPlotLine, e),
                    this.trigger(g.ON_CHART_HOVER, "heat-acclimation")
                },
                addXAxisPlotLine: function(t) {
                    this.plotLineVisible && this.chart.xAxis[0].removePlotLine(this.plotLineId),
                    this.chart.xAxis[0].addPlotLine({
                        color: d.a.Colors.grey,
                        value: t,
                        width: 1,
                        id: this.plotLineId,
                        zIndex: 1
                    }),
                    this.plotLineVisible = !0
                },
                onChartHover: function() {
                    this.chart.setSubtitle({
                        text: ""
                    })
                },
                reflowChart: function() {
                    this.chart && this.chart.reflow()
                },
                reSizeChart: function() {
                    this.chart.setSize(this.$el.get(0).clientWidth - 12, void 0)
                },
                unbindResizeChart: function() {
                    t(window).off("resize:reSizeChart")
                },
                destroy: function() {
                    this.unbindResizeChart(),
                    this.remove()
                }
            });
            m.Events = g,
            e.a = m
        }
        ).call(this, a(10))
    },
    3234: function(t, e) {
        t.exports = '<% if (noData) { %>\n<div class="top-m training-status-empty-state">\n    <h4><%- Localizer.localize(\'training.status.no.data.summary\') %></h4>\n    <h6><%- Localizer.localize(\'training.status.no.data.message\') %></h6>\n    <button class="btn ts-learn-more-btn"><%- Localizer.localize(\'learn_more\') %></button>\n</div>\n<% } else { %>\n<div id="training-status-container"></div>\n<div id="vo2-max-container"></div>\n<div class="exercise-load-chart-container"></div>\n<div id="training-load-container"></div>\n<div class="altitude-acclimation-chart-container"></div>\n<div class="heat-acclimation-chart-container"></div>\n<% } %>\n'
    },
    3235: function(t, e) {
        t.exports = "\x3c!-- VO2 max modal --\x3e\n<% if(modalText) { %>\n    <% if(reportType === 'cycling' || (reportType === 'all' && vo2MaxToggle === 'cycling')) { %>\n    <h1 class=\"h5\"><%= Localizer.localize('vo2_max_compare_text_cycling', currentVo2Max, scoreName, pluralGender, ageRange) %></h1>\n    <% } else { %>\n    <h1 class=\"h5\"><%= Localizer.localize('vo2_max_compare_text', currentVo2Max, scoreName, pluralGender, ageRange) %></h1>\n    <% } %>\n\n\x3c!-- VO2 max reports widget --\x3e\n<% } else if(chartFormat === 'widget') { %>\n    <% if(fitnessAge) { %>\n        <% if(reportType === 'running' || isOnlyCycling) { %>\n            <% if(fitnessAgeDescription === 'aboveNormal') { %>\n            \x3c!--<p class=\"data-label\"><%= Localizer.localize('vo2_max_fitness_age_above_normal_with_link', percentileGroup, url) %></p>--\x3e\n            <p class=\"data-label\"><%= Localizer.localize('vo2_max_fitness_age_above_normal', percentileGroup) %></p>\n            <% } else if(fitnessAgeDescription === 'belowNormal') { %>\n            \x3c!--<p class=\"data-label\"><%= Localizer.localize('vo2_max_fitness_age_below_normal_with_link', percentileGroup, url) %></p>--\x3e\n            <p class=\"data-label\"><%= Localizer.localize('vo2_max_fitness_age_below_normal', percentileGroup) %></p>\n            <% } else { %>\n            \x3c!--<p class=\"data-label\"><%= Localizer.localize('vo2_max_fitness_age_normal_with_link', fitnessAge, percentileGroup, url) %></p>--\x3e\n            <p class=\"data-label\"><%= Localizer.localize('vo2_max_fitness_age_normal', fitnessAge, percentileGroup) %></p>\n            <% } %>\n        <% } else { %>\n        \x3c!--<p class=\"data-label\"><%= Localizer.localize('vo2_max_percentile_group_with_link', percentileGroup, url) %></p>--\x3e\n        <p class=\"data-label\"><%= Localizer.localize('vo2_max_percentile_group', percentileGroup) %></p>\n        <% } %>\n    <% } else { %>\n    \x3c!--<p class=\"data-label\"><%= Localizer.localize('vo2_max_percentile_group_with_link', percentileGroup, url) %></p>--\x3e\n    <p class=\"data-label\"><%= Localizer.localize('vo2_max_percentile_group', percentileGroup) %></p>\n    <% } %>\n\n\x3c!-- VO2 max reports page --\x3e\n<% } else if(chartFormat === 'page') { %>\n\n    <% if(reportType === 'cycling' || (reportType === 'all' && vo2MaxToggle === 'cycling')) { %>\n    <p><%= Localizer.localize('vo2_max_compare_text_cycling', currentVo2Max, scoreName, pluralGender, ageRange) %>\n    <% } else { %>\n    <p><%= Localizer.localize('vo2_max_compare_text', currentVo2Max, scoreName, pluralGender, ageRange) %>\n    <% } %>\n\n    <% if(fitnessAge) { %>\n        <% if(reportType === 'running' || isOnlyCycling || (reportType === 'all' && vo2MaxToggle !== 'cycling')) { %>\n            <% if(fitnessAgeDescription === 'aboveNormal') { %>\n            <%= Localizer.localize('vo2_max_fitness_age_above_normal', percentileGroup) %>\n            <% } else if(fitnessAgeDescription === 'belowNormal') { %>\n            <%= Localizer.localize('vo2_max_fitness_age_below_normal', percentileGroup) %>\n            <% } else { %>\n            <%= Localizer.localize('vo2_max_fitness_age_normal', fitnessAge, percentileGroup) %>\n            <% } %>\n        <% } else { %>\n        <%= Localizer.localize('vo2_max_percentile_group', percentileGroup) %>\n        <% } %>\n    <% } else { %>\n    <%= Localizer.localize('vo2_max_percentile_group', percentileGroup) %></p>\n    <% } %>\n\n    \x3c!--<div class=\"text-center\">--\x3e\n        \x3c!--<a href=\"<%- url %>\" class=\"btn btn-small\"><%- Localizer.localize('vo2_max_compare_yourself') %></a>--\x3e\n    \x3c!--</div>--\x3e\n<% } %>"
    },
    3236: function(t, e) {
        t.exports = '<div id="vo2MaxGaugeChartPlaceholder"></div>\n<div id="vo2MaxDynamicTextPlaceholder"></div>'
    },
    3237: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(2074)
          , c = a(2341)
          , h = a(3238)
          , d = a.n(h)
          , u = n.a.View.extend({
            initialize: function(t) {
                this.template = r.a.template(d.a),
                this.chartFormat = t.chartFormat,
                this.reportType = t.reportType,
                this.vo2MaxMetrics = t.vo2MaxMetrics,
                this.gender = t.gender,
                this.ageRange = t.ageRange,
                this.vo2MaxToggle = t.vo2MaxToggle,
                this.setCurrentVo2Max()
            },
            setCurrentVo2Max: function() {
                var t = this.vo2MaxMetrics.get("generic") ? this.vo2MaxMetrics.get("generic").vo2MaxValue : null
                  , e = this.vo2MaxMetrics.get("cycling") ? this.vo2MaxMetrics.get("cycling").vo2MaxValue : null;
                this.currentVo2Max = t,
                ("cycling" === this.reportType || "all" === this.reportType && "cycling" === this.vo2MaxToggle) && (this.currentVo2Max = e),
                null !== t && null !== e && (this.hasBoth = !0)
            },
            render: function() {
                var t = l.a.getScorePercentiles()
                  , e = l.a.getScoreData(this.gender, this.ageRange, this.currentVo2Max)
                  , a = l.a.getScoreNames();
                this.$el.html(this.template({
                    Localizer: o.a,
                    hasBoth: this.hasBoth,
                    gender: this.gender,
                    scorePercentiles: t,
                    scoreData: e,
                    scoreNames: a
                })),
                this.initDynamicText()
            },
            initDynamicText: function() {
                this.vo2MaxDynamicTextView = new c.a({
                    el: this.$("#vo2MaxDynamicTextPlaceholder"),
                    chartFormat: this.chartFormat,
                    reportType: this.reportType,
                    vo2MaxMetrics: this.vo2MaxMetrics,
                    gender: this.gender,
                    ageRange: this.ageRange,
                    vo2MaxToggle: this.vo2MaxToggle,
                    modalText: !0
                }),
                this.vo2MaxDynamicTextView.render()
            }
        });
        e.a = u
    },
    3238: function(t, e) {
        t.exports = "<div id=\"vo2MaxDynamicTextPlaceholder\"></div>\n\n<table class=\"vo2-estimates-table table table-bordered\">\n    <tbody>\n    <tr>\n        <th><% gender === 'MALE' ? print(Localizer.localize('vo2.males')) : print(Localizer.localize('vo2.females')); %></th>\n        <th><%- Localizer.localize('vo2.percentile') %></th>\n        <th><%- Localizer.localize('vo2Max_unit') %></th>\n    </tr>\n\n    <% for(var i = 0, length = scoreNames.length; i < length; i++) { %>\n    <tr>\n        <% if(i === 0) { %>\n        <td><span class=\"vo2-<%- scoreNames[i] %>\"></span><%- Localizer.localize(scoreNames[i]) %></td>\n        <td><%- scorePercentiles[i] %></td>\n        <td class=\"<% scoreData.scoreIndex === i ? print('highlight') : '' %>\"><%- scoreData.group[i] %> <%- Localizer.localize('vo2_max_and_up') %></td>\n\n        <% } else if(i === (length - 1)) { %>\n        <td><span class=\"vo2-<%- scoreNames[i] %>\"></span><%- Localizer.localize('vo2.poor') %></td>\n        <td><%- scorePercentiles[i] %></td>\n        <td class=\"<% scoreData.scoreIndex === i ? print('highlight') : '' %>\"><%- scoreData.group[i - 1] %> <%- Localizer.localize('vo2_max_and_below') %></td>\n\n        <% } else { %>\n        <td><span class=\"vo2-<%- scoreNames[i] %>\"></span><%- Localizer.localize(scoreNames[i]) %></td>\n        <td><%- scorePercentiles[i] %></td>\n        <td class=\"<% scoreData.scoreIndex === i ? print('highlight') : '' %>\"><%- scoreData.group[i] %> - <%- scoreData.group[i - 1] %></td>\n        <% } %>\n    </tr>\n    <% } %>\n    </tbody>\n</table>\n\n<p><%- Localizer.localize('vo2_max_modal_text_1') %></p>\n\n<% if(hasBoth) { %>\n<p><%- Localizer.localize('vo2_max_modal_text_2') %></p>\n<% } %>\n\n<p class=\"fine-print\"><%- Localizer.localize('vo2_max_modal_text_3') %> <a href=\"http://www.cooperinstitute.org\" target=\"_blank\">www.cooperinstitute.org</a></p>"
    },
    3239: function(t, e, a) {
        "use strict";
        a(7),
        a(9);
        var i = a(6)
          , r = (a(13),
        a(1295));
        e.a = r.a.extend({
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", i.a.localize("vo2.max.label")]
                }
            },
            determineYAxisTitle: function() {
                return i.a.localize("vo2Max_unit")
            },
            customizeOptions: function() {
                this.options.plotOptions = {
                    series: {
                        showCheckbox: !1,
                        selected: !0,
                        states: {
                            hover: {
                                enabled: !0,
                                halo: null
                            }
                        }
                    }
                },
                this.options.yAxis.title.text = this.determineYAxisTitle(),
                this.options.tooltip = {
                    formatter: function() {
                        return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + this.y + " " + i.a.localize("vo2Max_unit")
                    }
                },
                "all" == this.reportType && (this.options.legend.enabled = !0)
            },
            initializeChartSeries: function() {
                this.chartSeries = {},
                "wellness" !== this.reportType && "running" != this.reportType && "all" != this.reportType || (this.chartSeries.running = {
                    color: "#80ea40",
                    name: i.a.localize("ACTIVITY_VO2_MAX"),
                    type: "line",
                    data: this.createNullArray()
                }),
                "cycling" != this.reportType && "all" != this.reportType || (this.chartSeries.cycling = {
                    color: "#11a9ed",
                    name: i.a.localize("label_vo2_max_cycling"),
                    type: "line",
                    data: this.createNullArray()
                })
            },
            processMetricList: function(t) {
                var e = t.get("metricsMap");
                if ("wellness" === this.reportType || "running" == this.reportType || "all" == this.reportType) {
                    this.vo2MaxType = "running";
                    var a = e.ACTIVITY_VO2_MAX;
                    if (a)
                        for (var i = 0; i < a.length; i++)
                            this.addMetricToDataset(a[i])
                }
                if ("cycling" == this.reportType || "all" == this.reportType) {
                    this.vo2MaxType = "cycling";
                    var r = e.ACTIVITY_VO2_MAX_CYCLING;
                    if (r)
                        for (i = 0; i < r.length; i++)
                            this.addMetricToDataset(r[i])
                }
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                e >= 0 && null != t.value && t.value > 0 && this.chartSeries[this.vo2MaxType] && (this.chartSeries[this.vo2MaxType].data[e] = t.value,
                this.exportData.rows[this.exportDataCount++] = {
                    values: [this.categories[e], this.vo2MaxType, t.value]
                })
            }
        })
    },
    3240: function(t, e, a) {
        "use strict";
        var i = a(1)
          , r = a(7)
          , s = a.n(r)
          , n = a(9)
          , o = a.n(n)
          , l = a(13)
          , c = a(6)
          , h = a(1323)
          , d = a(1339)
          , u = a(85)
          , p = a(23)
          , g = a(55)
          , m = a(1227)
          , f = a(2441)
          , v = a(3241)
          , T = a.n(v)
          , _ = o.a.View.extend({
            initialize: function(t) {
                this.report = t.report,
                this.reportType = t.reportType,
                this.chartFormat = t.chartFormat,
                this.metricList = t.metricList,
                this.metricPeriod = t.trainingEffectMetricPeriod,
                this.currentDateOffset = t.currentDateOffset,
                this.userPreferences = t.userPreferences,
                this.daysInMonth = t.daysInMonth,
                this.chartType = t.chartType,
                this.template = s.a.template(T.a),
                this.anaerobicChartOptions = {},
                this.aerobicChartOptions = {},
                this.showAnaerobicTE = t.showAnaerobicTE,
                this.showAerobicTE = t.showAerobicTE,
                this.startDateStr = t.startDateStr,
                this.untilDateStr = t.untilDateStr,
                g.a.setExpandCollapseHandler(this.resizeChart.bind(this), 20)
            },
            render: function() {
                this.$el.html(this.template({
                    Localizer: c.a
                })),
                this.getXAxisCategories(),
                this.showAerobicTE && (this.getAerobicChartOptions(),
                this.processAerobicMetricList(),
                this.renderAerobicChart()),
                this.showAnaerobicTE && (this.getAnaerobicChartOptions(),
                this.processAnaerobicMetricList(),
                this.renderAnaerobicChart())
            },
            createZeroArray: function() {
                var t = []
                  , e = 0;
                if (this.metricPeriod)
                    for (var a = 0; a < 7; a++)
                        t.push({
                            x: a,
                            y: 0
                        });
                else
                    h.a.iterateDateRange({
                        startDateStr: this.startDateStr,
                        untilDateStr: this.untilDateStr
                    }, function() {
                        t.push({
                            x: e,
                            y: 0
                        }),
                        e++
                    });
                return t
            },
            processAnaerobicMetricList: function() {
                var t, e, a, i, r = this.metricList.models;
                for (a = 0,
                i = this.metricList.models.length; a < i; a++)
                    (t = this.addMetricToDataset(r[a])) >= 0 && this.anaerobicChartOptions.series && (0 !== this.anaerobicChartOptions.series[0].data[t] ? (e = {
                        x: t,
                        y: this.anaerobicChartOptions.series[0].data[t].y,
                        date: p.a.formatDayMonthDate(u.a.parseISO(r[a].get("startLocal"))),
                        activityName: this.anaerobicChartOptions.series[0].data[t].activityName,
                        aerobicValue: this.anaerobicChartOptions.series[0].data[t].aerobicValue,
                        aerobicFeedbackTitle: this.anaerobicChartOptions.series[0].data[t].aerobicFeedbackTitle,
                        anaerobicFeedbackTitle: this.anaerobicChartOptions.series[0].data[t].anaerobicFeedbackTitle
                    }).y <= r[a].get("anaerobicTrainingEffect") ? this.anaerobicChartOptions.series[0].data[t] = {
                        x: t,
                        y: r[a].get("anaerobicTrainingEffect"),
                        date: p.a.formatDayMonthDate(u.a.parseISO(r[a].get("startLocal"))),
                        activityName: r[a].get("name"),
                        aerobicValue: r[a].get("aerobicTrainingEffect"),
                        aerobicFeedbackTitle: d.a.getShortFeedbackTitle(r[a].get("aerobicTrainingEffect")),
                        anaerobicFeedbackTitle: d.a.getShortFeedbackTitle(r[a].get("anaerobicTrainingEffect"))
                    } : this.anaerobicChartOptions.series[0].data[t] = e : this.anaerobicChartOptions.series[0].data[t] = {
                        x: t,
                        y: r[a].get("anaerobicTrainingEffect"),
                        date: p.a.formatDayMonthDate(u.a.parseISO(r[a].get("startLocal"))),
                        activityName: r[a].get("name"),
                        aerobicValue: r[a].get("aerobicTrainingEffect"),
                        aerobicFeedbackTitle: d.a.getShortFeedbackTitle(r[a].get("aerobicTrainingEffect")),
                        anaerobicFeedbackTitle: d.a.getShortFeedbackTitle(r[a].get("anaerobicTrainingEffect"))
                    });
                s.a.sortBy(this.anaerobicChartOptions.series[0].data, "x")
            },
            processAerobicMetricList: function() {
                var t, e, a, i, r = this.metricList.models;
                for (a = 0,
                i = this.metricList.models.length; a < i; a++)
                    (t = this.addMetricToDataset(r[a])) >= 0 && this.aerobicChartOptions.series && (0 !== this.aerobicChartOptions.series[0].data[t] ? (e = {
                        x: t,
                        y: this.aerobicChartOptions.series[0].data[t].y,
                        date: p.a.formatDayMonthDate(u.a.parseISO(r[a].get("startLocal"))),
                        activityName: this.aerobicChartOptions.series[0].data[t].activityName,
                        anaerobicValue: this.aerobicChartOptions.series[0].data[t].anaerobicValue,
                        aerobicFeedbackTitle: this.aerobicChartOptions.series[0].data[t].aerobicFeedbackTitle,
                        anaerobicFeedbackTitle: this.aerobicChartOptions.series[0].data[t].anaerobicFeedbackTitle
                    }).y <= r[a].get("aerobicTrainingEffect") ? this.aerobicChartOptions.series[0].data[t] = {
                        x: t,
                        y: r[a].get("aerobicTrainingEffect"),
                        date: p.a.formatDayMonthDate(u.a.parseISO(r[a].get("startLocal"))),
                        activityName: r[a].get("name"),
                        anaerobicValue: r[a].get("anaerobicTrainingEffect"),
                        aerobicFeedbackTitle: d.a.getShortFeedbackTitle(r[a].get("aerobicTrainingEffect")),
                        anaerobicFeedbackTitle: d.a.getShortFeedbackTitle(r[a].get("anaerobicTrainingEffect"))
                    } : this.aerobicChartOptions.series[0].data[t] = e : this.aerobicChartOptions.series[0].data[t] = {
                        x: t,
                        y: r[a].get("aerobicTrainingEffect"),
                        date: p.a.formatDayMonthDate(u.a.parseISO(r[a].get("startLocal"))),
                        activityName: r[a].get("name"),
                        anaerobicValue: r[a].get("anaerobicTrainingEffect"),
                        aerobicFeedbackTitle: d.a.getShortFeedbackTitle(r[a].get("aerobicTrainingEffect")),
                        anaerobicFeedbackTitle: d.a.getShortFeedbackTitle(r[a].get("anaerobicTrainingEffect"))
                    });
                s.a.sortBy(this.aerobicChartOptions.series[0].data, "x")
            },
            addMetricToDataset: function(t) {
                var e = p.a.formatISODate(u.a.parseISO(t.get("startLocal")));
                return this.metricPeriod ? this.calculateDailyDataIndex(e, 7) : this.calculateWeeklyDataIndex(e)
            },
            calculateDailyDataIndex: function(t, e) {
                var a = h.a.formatDate(this.currentDateOffset)
                  , i = e - h.a.determineNumberOfDays(t, a);
                return i < 0 || i > 6 ? -1 : i
            },
            calculateWeeklyDataIndex: function(t) {
                var e = t.split("-")
                  , a = new Date(e[0],e[1] - 1,e[2],0,0,0)
                  , i = a.getMonth() + 1
                  , r = a.getDate()
                  , s = this.userPreferences.get("dateFormat")
                  , n = "";
                n = "mmddyyyy" === s.formatKey || "yyyymmdd" === s.formatKey ? c.a.localize("month.abbr." + (i > 9 ? i : "0" + i)) + " " + r : r + " " + c.a.localize("month.abbr." + (i > 9 ? i : "0" + i));
                var o = this.categories.indexOf(n);
                return o < 0 ? -1 : o
            },
            getAnaerobicChartOptions: function() {
                var t, e;
                e = "widget" === this.chartFormat ? {
                    type: this.chartType,
                    padding: 0,
                    width: 290,
                    height: !0 === this.showAerobicTE && !0 === this.showAnaerobicTE ? 100 : 210,
                    spacingLeft: this.getSpacing(),
                    style: {
                        fontFamily: "'Open Sans', sans-serif"
                    },
                    backgroundColor: ""
                } : {
                    type: this.chartType,
                    height: 200,
                    padding: 0,
                    spacingLeft: this.getSpacing(),
                    style: {
                        fontFamily: "'Open Sans', sans-serif"
                    },
                    backgroundColor: ""
                },
                this.anaerobicChartOptions = (t = {
                    chart: e,
                    title: {
                        text: ""
                    },
                    credits: {
                        enabled: !1
                    },
                    legend: {
                        enabled: !1
                    },
                    plotOptions: {
                        column: {
                            animation: !1
                        }
                    },
                    exporting: {
                        enabled: !1
                    },
                    xAxis: {
                        labels: {
                            enabled: !1
                        },
                        tickInterval: this.metricPeriod ? "" : 3,
                        categories: this.categories,
                        min: 0,
                        max: this.metricPeriod ? 6 : 27
                    },
                    yAxis: {
                        title: {
                            text: c.a.localize("ANAEROBIC_CHART")
                        },
                        allowDecimals: !1,
                        alternateGridColor: "rgba(230,230,230,.125)",
                        gridLineColor: "#dadada",
                        tickPositions: [0, 1, 2, 3, 4, 5]
                    },
                    tooltip: {
                        useHTML: !0,
                        formatter: function() {
                            var t = ""
                              , e = this.point.aerobicFeedbackTitle || ""
                              , a = this.point.anaerobicFeedbackTitle || "";
                            return t += '<div class="training-effect-tooltip-container"><div class="activity-detail"><span>' + this.point.date + "</span><span>" + this.point.activityName + '</span></div><div class="te-metrics"><div class="te-aerobic-metrics"><span>' + c.a.localize("AEROBIC_CHART") + ": </span><span>" + l.a.formatDecimalNumber(this.point.aerobicValue, 2) + " " + e + '</span></div><div class="te-anaerobic-metrics"><span>' + c.a.localize("ANAEROBIC_CHART") + ": </span><span>" + l.a.formatDecimalNumber(this.y, 2) + " " + a + "</span></div></div></div>"
                        }
                    }
                },
                Object(i.a)(t, "plotOptions", {
                    series: {
                        borderWidth: 0
                    }
                }),
                Object(i.a)(t, "series", [{
                    name: c.a.localize("ANAEROBIC_CHART"),
                    data: this.buildSeriesData(),
                    color: m.a.Colors.blue
                }]),
                t)
            },
            getAerobicChartOptions: function() {
                var t, e = {};
                e = "widget" === this.chartFormat ? {
                    type: this.chartType,
                    padding: 0,
                    width: 290,
                    height: !0 === this.showAerobicTE && !0 === this.showAnaerobicTE ? 100 : 210,
                    spacingLeft: this.getSpacing(),
                    style: {
                        fontFamily: "'Open Sans', sans-serif"
                    },
                    backgroundColor: ""
                } : {
                    type: this.chartType,
                    height: 200,
                    padding: 0,
                    spacingLeft: this.getSpacing(),
                    style: {
                        fontFamily: "'Open Sans', sans-serif"
                    },
                    backgroundColor: ""
                },
                this.aerobicChartOptions = (t = {
                    chart: e,
                    credits: {
                        enabled: !1
                    },
                    legend: {
                        enabled: !1
                    },
                    plotOptions: {
                        column: {
                            animation: !1
                        }
                    },
                    title: {
                        text: ""
                    },
                    exporting: {
                        enabled: !1
                    },
                    xAxis: {
                        labels: {
                            rotation: 0,
                            style: {
                                textOverflow: "none"
                            }
                        },
                        tickInterval: this.metricPeriod ? "" : 3,
                        categories: this.categories,
                        min: 0,
                        max: this.metricPeriod ? 6 : 27
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: c.a.localize("AEROBIC_CHART")
                        },
                        allowDecimals: !1,
                        alternateGridColor: "rgba(230,230,230,.125)",
                        gridLineColor: "#dadada",
                        tickPositions: [0, 1, 2, 3, 4, 5]
                    },
                    tooltip: {
                        useHTML: !0,
                        formatter: function() {
                            var t = ""
                              , e = this.point.aerobicFeedbackTitle || ""
                              , a = this.point.anaerobicFeedbackTitle || "";
                            return t += '<div class="training-effect-tooltip-container"><div class="activity-detail"><span>' + this.point.date + "</span><span>" + this.point.activityName + '</span></div><div class="te-metrics"><div class="te-aerobic-metrics"><span>' + c.a.localize("AEROBIC_CHART") + ": </span><span>" + l.a.formatDecimalNumber(this.y, 2) + " " + e + '</span></div><div class="te-anaerobic-metrics"><span>' + c.a.localize("ANAEROBIC_CHART") + ": </span><span>" + l.a.formatDecimalNumber(this.point.anaerobicValue, 2) + " " + a + "</span></div></div></div>"
                        }
                    }
                },
                Object(i.a)(t, "plotOptions", {
                    series: {
                        borderWidth: 0
                    }
                }),
                Object(i.a)(t, "series", [{
                    name: c.a.localize("AEROBIC_CHART"),
                    data: this.buildSeriesData(),
                    color: m.a.Colors.blue
                }]),
                t)
            },
            renderAnaerobicChart: function() {
                this.anaerobicColumnChart = new f.a({
                    options: this.anaerobicChartOptions,
                    el: this.$("#te-ana-7d")
                }),
                this.$("#te-ana-7d-container").html(this.anaerobicColumnChart.render().el)
            },
            renderAerobicChart: function() {
                this.aerobicColumnChart = new f.a({
                    options: this.aerobicChartOptions,
                    el: this.$("#te-aero-7d")
                }),
                this.$("#te-aero-7d-container").html(this.aerobicColumnChart.render().el)
            },
            buildSeriesData: function() {
                return this.createZeroArray(this.metricPeriod)
            },
            getSpacing: function() {
                return "widget" === this.chartFormat ? -8 : 10
            },
            getXAxisCategories: function() {
                this.metricPeriod ? this.getDailyCategories() : this.getFourWeeksCategories()
            },
            getDailyCategories: function() {
                this.categories = [];
                for (var t = -6; t <= 0; t++) {
                    var e = new Date;
                    e.setHours(12),
                    e.setMinutes(0),
                    e.setMilliseconds(0),
                    e.setDate(e.getDate() + this.currentDateOffset),
                    e.setDate(e.getDate() + t);
                    var a, i = e.getDay().toString();
                    a = c.a.localize("day." + i + ".short"),
                    this.categories.push(a)
                }
            },
            getFourWeeksCategories: function() {
                this.categories = [];
                var t = this.userPreferences.get("dateFormat").formatKey;
                h.a.iterateDateRange({
                    startDateStr: this.startDateStr,
                    untilDateStr: this.untilDateStr
                }, function(e) {
                    var a = h.a.formatMonthDate(e, t);
                    this.categories.push(a)
                }
                .bind(this))
            },
            resizeChart: function() {
                this.anaerobicColumnChart && this.anaerobicColumnChart.chartObj.reflow(),
                this.aerobicColumnChart && this.aerobicColumnChart.chartObj.reflow()
            },
            destroy: function() {
                this.undelegateEvents()
            }
        });
        e.a = _
    },
    3241: function(t, e) {
        t.exports = '<div id="week" class="training-effect-tab-pane"></div>\n\n    <div id="te-aero-7d-container">\n        <div id="te-aero-7d"></div>\n    </div>\n\n    <div id="te-ana-7d-container">\n        <div id="te-ana-7d" class="bottom-none"></div>\n    </div>\n    \n</div>'
    },
    3242: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = (a(9),
        a(6))
          , n = a(13)
          , o = a(1295)
          , l = a(1323)
          , c = a(65);
        a(1302);
        e.a = o.a.extend({
            determineYAxisTitle: function() {
                return s.a.localize("label_calories")
            },
            createExportDataRowHeader: function() {
                this.exportData.rows[this.exportDataCount++] = {
                    values: ["", s.a.localize("activity.type.label"), s.a.localize("value.label")]
                }
            },
            customizeOptions: function() {
                this.setPlotOptions(),
                this.formatTooltip()
            },
            setPlotOptions: function() {
                this.options.plotOptions = {
                    column: {
                        stacking: "normal",
                        dataLabels: {
                            enabled: !1,
                            color: "white"
                        }
                    },
                    series: {
                        stacking: "normal",
                        showCheckbox: !1,
                        selected: !0
                    }
                }
            },
            formatTooltip: function() {
                this.options.tooltip = {
                    formatter: function() {
                        return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + n.a.formatDecimalNumber(this.y, 0) + " " + s.a.localize("label_calories_abbr") + "<br/>" + s.a.localize("total") + ": " + n.a.formatDecimalNumber(this.point.stackTotal, 0) + " " + s.a.localize("label_calories_abbr")
                    }
                },
                this.options.legend.enabled = !0
            },
            compileStats: function() {
                var t = this;
                r.a.each(this.metricList, function(e) {
                    t.processMetricList(e)
                })
            },
            processMetricList: function(t) {
                var e = t.stats.running
                  , a = t.stats.cycling
                  , i = t.stats.swimming
                  , r = t.stats.walking
                  , s = t.stats.fitness_equipment
                  , n = t.stats.hiking
                  , o = t.stats.yoga
                  , l = t.stats.winter_sports
                  , h = t.stats.other;
                e && (c.a.Running in this.chartSeries || this.initSeries(c.a.Running),
                this.activityType = "running",
                this.addMetricToDataset(t)),
                a && (c.a.Cycling in this.chartSeries || this.initSeries(c.a.Cycling),
                this.activityType = "cycling",
                this.addMetricToDataset(t)),
                i && (c.a.Swimming in this.chartSeries || this.initSeries(c.a.Swimming),
                this.activityType = "swimming",
                this.addMetricToDataset(t)),
                r && (c.a.Walking in this.chartSeries || this.initSeries(c.a.Walking),
                this.activityType = "walking",
                this.addMetricToDataset(t)),
                s && (c.a.FitnessEquip in this.chartSeries || this.initSeries(c.a.FitnessEquip),
                this.activityType = "fitness_equipment",
                this.addMetricToDataset(t)),
                n && (c.a.Hiking in this.chartSeries || this.initSeries(c.a.Hiking),
                this.activityType = "hiking",
                this.addMetricToDataset(t)),
                o && (c.a.Yoga in this.chartSeries || this.initSeries(c.a.Yoga),
                this.activityType = "yoga",
                this.addMetricToDataset(t)),
                h && (c.a.Other in this.chartSeries || this.initSeries(c.a.Other),
                this.activityType = "other",
                this.addMetricToDataset(t)),
                l && (c.a.WinterSports in this.chartSeries || this.initSeries(c.a.WinterSports),
                this.activityType = "winter_sports",
                this.addMetricToDataset(t))
            },
            initSeries: function(t) {
                this.chartSeries[t] = {
                    color: l.a.getActivityAttributes(t).color,
                    name: s.a.localize(l.a.getActivityAttributes(t).key),
                    data: this.createZeroArray(this.metricPeriod)
                }
            },
            addMetricToDataset: function(t) {
                var e = this.determineDataIndex(t);
                e >= 0 && this.chartSeries[this.activityType] && (this.value = Math.round(n.a.convertCalories(t.stats[this.activityType].calories.sum))),
                this.chartSeries[this.activityType].data[e] = this.value,
                this.exportData.rows[this.exportDataCount++] = {
                    values: [this.categories[e], s.a.localize(this.activityType), this.value]
                }
            },
            determineDataIndex: function(t) {
                var e = "";
                switch (this.metricPeriod) {
                case "daily":
                    e = this.calculateDailyDataIndex(t.date);
                    break;
                case "weekly":
                    e = this.calculateWeeklyDataIndex(t.date);
                    break;
                case "monthly":
                    e = this.calculateMonthlyDataIndex(this.getKeyForDataIndex(t.date, "month"));
                    break;
                case "yearly":
                    e = this.calculateYearlyDataIndex(this.getKeyForDataIndex(t.date, "month") - 1, this.getKeyForDataIndex(t.date, "year"))
                }
                return e
            },
            getKeyForDataIndex: function(t, e) {
                if (t) {
                    var a = t.split("-")
                      , i = new Date(a[0],a[1] - 1,a[2],0,0,0);
                    switch (e) {
                    case "month":
                        return i.getMonth() + 1;
                    case "year":
                        return i.getFullYear()
                    }
                }
            }
        })
    },
    3243: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(7)
              , r = a.n(i)
              , s = a(9)
              , n = a.n(s)
              , o = a(6)
              , l = a(13)
              , c = a(15)
              , h = a.n(c)
              , d = a(18)
              , u = a(23)
              , p = a(225)
              , g = a(3244)
              , m = a.n(g)
              , f = {
                WAIT_STATE: "WAIT_STATE",
                ACTIVITY_REMOVED: "ACTIVITY_REMOVED",
                ERROR: "ERROR"
            }
              , v = n.a.View.extend({
                template: r.a.template(m.a),
                className: "power-curve",
                events: {
                    "click .remove-activity": "onRemoveActivityClicked",
                    "mouseover .flex-tr": "onMouseOver",
                    "mouseout .flex-tr": "onMouseOut"
                },
                initialize: function(t) {
                    this.powerCurveData = t.powerCurveData,
                    this.displayWattsKg = t.displayWattsKg,
                    this.viewerUserBiometrics = t.viewerUserBiometrics
                },
                render: function() {
                    var t = r.a.filter(this.powerCurveData.entries, function(t) {
                        return null !== t.activityDate
                    })
                      , e = this;
                    this.$el.html(this.template({
                        Localizer: o.a,
                        label: this.displayWattsKg ? "label_power_kg" : "label_power_unit",
                        entries: t,
                        url: d.default.url,
                        formatDate: function(t) {
                            return u.a.formatMonthDayYear(new h.a(t).toDate())
                        },
                        formatDuration: function(t) {
                            return l.a.personalizeSeconds(t, o.a)
                        },
                        formatPower: function(t) {
                            return e.convertToWattsPerKg(t)
                        }
                    })),
                    t.length > 0 ? this.$(".power-curve-records").show() : this.$(".power-curve-records").hide()
                },
                setDisplayWattsKg: function(t) {
                    this.displayWattsKg = t
                },
                setPowerCurveData: function(t) {
                    this.powerCurveData = t
                },
                convertToWattsPerKg: function(t) {
                    var e = this.viewerUserBiometrics.biometricProfile ? this.viewerUserBiometrics.biometricProfile.weight : null;
                    return this.displayWattsKg && e ? l.a.convertToWattsPerKg(t, e) : t
                },
                onRemoveActivityClicked: function(e) {
                    e.preventDefault();
                    var a = t(e.target).attr("data-activityId")
                      , i = this;
                    new p.a({
                        modalTitle: o.a.localize("remove_power_curve"),
                        message: o.a.localize("remove_power_curve_description"),
                        htmlFormat: !0,
                        confirmationTextKey: "queue.remove",
                        cancelTextKey: "button_cancel",
                        onSaveButtonClicked: function() {
                            return t.ajax({
                                method: "POST",
                                url: d.default.url("/proxy/activity-service/activity/" + a + "/powerCurve"),
                                contentType: "application/json",
                                data: JSON.stringify({
                                    excludeFromPowerCurveReports: !0
                                }),
                                beforeSend: function(t) {
                                    t.setRequestHeader("X-HTTP-Method-Override", "PATCH")
                                },
                                success: function() {
                                    i.trigger(f.WAIT_STATE, !0),
                                    setTimeout(function() {
                                        i.trigger(f.WAIT_STATE, !1),
                                        i.trigger(f.ACTIVITY_REMOVED)
                                    }, 3e3)
                                },
                                error: function(t, e, a) {
                                    i.trigger(f.ERROR)
                                }
                            }),
                            !0
                        }
                    }).render()
                },
                onMouseOver: function(t) {
                    var e = this.getIdFromTarget(t);
                    e && this.$(".trash-" + e).addClass("hover")
                },
                onMouseOut: function(t) {
                    var e = this.getIdFromTarget(t);
                    e && this.$(".trash-" + e).removeClass("hover")
                },
                getIdFromTarget: function(e) {
                    var a = t(e.target).parent().attr("id");
                    return a && a.indexOf("row-") > -1 && (a = a.substring(4)),
                    a
                }
            });
            v.Events = f,
            e.a = v
        }
        ).call(this, a(10))
    },
    3244: function(t, e) {
        t.exports = '<span class="power-curve-records">\n    <h5><%- Localizer.localize(\'power_curve_records\') %></h5>\n\n    <div class="flex-table">\n        <div class="flex-tr flex-th">\n            <div class="flex-td">\n                    <%- Localizer.localize(\'power_curve_peak\') %>\n            </div>\n            <div class="flex-td">\n                    <%- Localizer.localize(label) %>\n            </div>\n            <div class="flex-td">\n                    <%- Localizer.localize(\'date\') %>\n            </div>\n            <div class="flex-td narrow">\n            </div>\n        </div>\n\n        <% for (var i = 0; i < entries.length; i++) { %>\n            <% var entry = entries[i]  %>\n            <div id="row-<%- i %>" class="flex-tr">\n                <div class="flex-td">\n                    <%- formatDuration(entry.duration) %>\n                </div>\n                <div class="flex-td">\n                    <%- formatPower(entry.power) %>\n                </div>\n                <div class="flex-td">\n                    <a class="colored" href="<%- url(\'/activity/\'+ entry.activityId) %>"><%- formatDate(entry.activityDate) %></a>\n                </div>\n                <div class="flex-td narrow">\n                    <button class="icon-trash trash-<%- i %> remove-activity" data-activityId="<%- entry.activityId %>" title="" data-rel="tooltip" data-html="true" data-original-title=""></button>\n                </div>\n            </div>\n        <% } %>\n    </div>\n\n    <br/>\n</span>\n\n<p>\n    <%- Localizer.localize(\'power_curve_description_1\') %>\n</p>\n<p>\n    <%- Localizer.localize(\'power_curve_description_2\') %>\n</p>\n\x3c!-- <p>\n    <%- Localizer.localize(\'power_curve_description_3\') %>\n</p> --\x3e'
    },
    3245: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(6)
          , n = a(13)
          , o = a(9)
          , l = a.n(o)
          , c = a(1458)
          , h = a(39)
          , d = a(116);
        e.a = l.a.View.extend({
            initialize: function(t) {
                this.hasAcclimationCapableDevice = t.hasAcclimationCapableDevice,
                this.vo2MaxRanges = t.vo2MaxRanges,
                this.hasLoadBalanceCapableDevice = t.hasLoadBalanceCapableDevice,
                this.gender = t.gender,
                this.ageRange = t.ageRange,
                this.isFeatureEnabled = t.isFeatureEnabled
            },
            render: function() {
                this.tsModalInfoView && this.tsModalInfoView.destroy(),
                this.tsModalInfoView = new c.a({
                    reactComponent: window.TrainingStatusInfoModal,
                    props: {
                        hasAcclimationCapableDevice: this.hasAcclimationCapableDevice,
                        hasLoadBalanceCapableDevice: this.hasLoadBalanceCapableDevice,
                        basicHeight: n.a.getAltitudeAcclimationHeight(d.a.HeightTypes.BASIC),
                        maxHeight: n.a.getAltitudeAcclimationHeight(d.a.HeightTypes.MAX),
                        heightUnitKey: n.a.getAltitudeAcclimationHeightUnit(!0),
                        temperatureValue: n.a.getHeatAcclimationValue(),
                        temperatureUnit: s.a.localize(n.a.getTemperatureUnitKey()),
                        vo2MaxRanges: this.getPersonalizedVO2MaxRanges(),
                        isFeatureEnabled: this.isFeatureEnabled
                    }
                }),
                new h.a({
                    view: this.tsModalInfoView,
                    showFooter: !1,
                    customClasses: "",
                    modalTitle: s.a.localize("help.title")
                }).render()
            },
            getPersonalizedVO2MaxRanges: function() {
                return this.vo2MaxRanges ? this.getColorForRanges() : null
            },
            getColorForRanges: function() {
                var t = this.vo2MaxRanges.get(this.gender)[this.ageRange];
                return r.a.each(t, function(t) {
                    t.color = d.a.mapVO2MaxColor(t.category)
                }),
                t
            }
        })
    },
    3246: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i);
        e.a = r.a.Collection.extend({
            model: r.a.Model,
            url: function() {
                return "/proxy/usersummary-service/stats/hydration/" + this.aggregation + "/" + this.startDate + "/" + this.endDate
            },
            initialize: function(t) {
                this.startDate = t.startDate,
                this.endDate = t.untilDate,
                this.aggregation = t.aggregation
            },
            setDisplayName: function(t) {
                return null
            }
        })
    },
    3247: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i);
        e.a = r.a.Collection.extend({
            model: r.a.Model,
            url: function() {
                return "/proxy/wellness-service/stats/daily/sleep/score/".concat(this.startDate, "/").concat(this.untilDate)
            },
            initialize: function(t) {
                this.startDate = t.startDate,
                this.untilDate = t.untilDate
            },
            setDisplayName: function(t) {
                return null
            }
        })
    },
    3248: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i);
        e.a = r.a.Collection.extend({
            model: r.a.Model,
            url: function() {
                return "/proxy/wellness-service/stats/weekly/sleep/score/temp/".concat(this.untilDate, "/").concat(this.noOfWeeks)
            },
            initialize: function(t) {
                this.untilDate = t.untilDate,
                this.noOfWeeks = t.noOfWeeks
            },
            setDisplayName: function(t) {
                return null
            }
        })
    },
    3249: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = a(32)
          , n = a(15)
          , o = a.n(n)
          , l = a(36);
        e.a = r.a.Collection.extend({
            model: r.a.Model,
            url: function() {
                var t = (new o.a).format(s.g)
                  , e = l.a({
                    reportType: this.reportType,
                    next: this.next,
                    todayCalendarDate: t
                });
                return "/proxy/periodichealth-service/reports/menstrualcycle/".concat(this.cycleCount, "/").concat(this.calendarDate).concat(e)
            },
            initialize: function(t) {
                this.cycleCount = t.cycleCount,
                this.calendarDate = t.calendarDate,
                this.next = !!t.next && t.next,
                this.reportType = t.reportType ? t.reportType : "CYCLE"
            },
            parse: function(t, e) {
                return t && (t.responseStatus = e.xhr.status),
                t
            },
            setDisplayName: function(t) {
                return null
            }
        })
    },
    3250: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i).a.Model.extend({
            urlRoot: "/proxy/usersummary-service/usersummary/stats/averagesteps/",
            initialize: function(t) {
                this.displayName = t.displayName,
                this.startDate = t.startDate,
                this.endDate = t.endDate
            },
            url: function() {
                var t = this.urlRoot + this.displayName + "?startDate=" + this.startDate + "&endDate=" + this.endDate;
                return t
            },
            parse: function(t) {
                this.set("averageSteps", t)
            }
        });
        e.a = r
    },
    3251: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i).a.Model.extend({
            url: function() {
                return "/proxy/metrics-service/metrics/trainingstatus/daily/" + this.calendarDate
            },
            initialize: function(t) {
                this.calendarDate = t.calendarDate
            },
            setDisplayName: function(t) {
                this.displayName = t
            }
        });
        e.a = r
    },
    3252: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i);
        e.a = r.a.Model.extend({
            url: "/web-data/vo2Max/VO2Max.json"
        })
    },
    3253: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i);
        e.a = r.a.Model.extend({
            url: function() {
                return "/proxy/wellness-service/stats/daily/acclimation?fromDate=" + this.startDate + "&untilDate=" + this.endDate
            },
            initialize: function(t) {
                this.startDate = t.startDate,
                this.endDate = t.untilDate
            },
            setDisplayName: function(t) {
                this.displayName = t
            }
        })
    },
    3254: function(t, e, a) {
        (e = t.exports = a(35)(!0)).i(a(278), void 0),
        e.push([t.i, ".ReportList_table__3AD9C {\n    width: 100%;\n}\n.ReportList_table__3AD9C th,\n.ReportList_table__3AD9C td {\n    padding: 8px;\n    white-space: nowrap;\n}\n.ReportList_thick__E52-H {\n    font-weight: bold;\n}\n.ReportList_link__2m9x2 {\n    cursor: pointer;\n}\n.ReportList_dataRow__ywgFK {\n    border-bottom: 1px solid " + a(278).locals.lightui_accent_1 + ";\n}\n.ReportList_groupHeaderRow__32bat {\n    background-color: " + a(278).locals.lightui_surface_3 + ";\n    font-size: 12px;\n    font-weight: bold;\n    height: 18px;\n    letter-spacing: 0px;\n    line-height: 18px;\n}\n.ReportList_listHeader__3TfrB {\n    color: " + a(278).locals.darkui_accent_2 + ";\n    font-size: 18px;\n    font-weight: 300;\n    letter-spacing: 0px;\n    line-height: 27px;\n    margin-bottom: 20px;\n}\n.ReportList_noDataState__24fd0 {\n    text-align: center;\n    padding-top: 66px;\n    color: " + a(278).locals.darkui_accent_2 + ";\n    font-size: 22px;\n    font-weight: 300;\n    letter-spacing: 0.1px;\n    line-height: 30.8px;\n}\n.ReportList_footer__4lm1W {\n    font-size: 14px;\n    font-weight: bold;\n    letter-spacing: 0px;\n    line-height: 21px;\n}\n", "", {
            version: 3,
            sources: ["/var/lib/jenkins/workspace/web-react_release_4.30/src/Pregnancy/components/Reports/ReportList.css"],
            names: [],
            mappings: "AAEA;IACI,YAAW;CACf;AACA;;IAEI,aAAY;IACZ,oBAAmB;CACvB;AACA;IACI,kBAAiB;CACrB;AACA;IACI,gBAAe;CACnB;AACA;IACI,qDAAyC;CAC7C;AACA;IACI,8CAAmC;IACnC,gBAAe;IACf,kBAAiB;IACjB,aAAY;IACZ,oBAAmB;IACnB,kBAAiB;CACrB;AACA;IACI,mCAAsB;IACtB,gBAAe;IACf,iBAAgB;IAChB,oBAAmB;IACnB,kBAAiB;IACjB,oBAAmB;CACvB;AACA;IACI,mBAAkB;IAClB,kBAAiB;IACjB,mCAAsB;IACtB,gBAAe;IACf,iBAAgB;IAChB,sBAAqB;IACrB,oBAAmB;CACvB;AACA;IACI,gBAAe;IACf,kBAAiB;IACjB,oBAAmB;IACnB,kBAAiB;CACrB",
            file: "ReportList.css",
            sourcesContent: ["@value (lightui_accent_1, darkui_accent_2, lightui_surface_3) from 'ui-connect/styles/colors.module.css';\n\n.table {\n    width: 100%;\n}\n.table th,\n.table td {\n    padding: 8px;\n    white-space: nowrap;\n}\n.thick {\n    font-weight: bold;\n}\n.link {\n    cursor: pointer;\n}\n.dataRow {\n    border-bottom: 1px solid lightui_accent_1;\n}\n.groupHeaderRow {\n    background-color: lightui_surface_3;\n    font-size: 12px;\n    font-weight: bold;\n    height: 18px;\n    letter-spacing: 0px;\n    line-height: 18px;\n}\n.listHeader {\n    color: darkui_accent_2;\n    font-size: 18px;\n    font-weight: 300;\n    letter-spacing: 0px;\n    line-height: 27px;\n    margin-bottom: 20px;\n}\n.noDataState {\n    text-align: center;\n    padding-top: 66px;\n    color: darkui_accent_2;\n    font-size: 22px;\n    font-weight: 300;\n    letter-spacing: 0.1px;\n    line-height: 30.8px;\n}\n.footer {\n    font-size: 14px;\n    font-weight: bold;\n    letter-spacing: 0px;\n    line-height: 21px;\n}\n"],
            sourceRoot: ""
        }]),
        e.locals = {
            lightui_accent_1: "" + a(278).locals.lightui_accent_1,
            darkui_accent_2: "" + a(278).locals.darkui_accent_2,
            lightui_surface_3: "" + a(278).locals.lightui_surface_3,
            table: "ReportList_table__3AD9C",
            thick: "ReportList_thick__E52-H",
            link: "ReportList_link__2m9x2",
            dataRow: "ReportList_dataRow__ywgFK",
            groupHeaderRow: "ReportList_groupHeaderRow__32bat",
            listHeader: "ReportList_listHeader__3TfrB",
            noDataState: "ReportList_noDataState__24fd0",
            footer: "ReportList_footer__4lm1W"
        }
    },
    3255: function(t, e, a) {
        var i = a(3256);
        "string" === typeof i && (i = [[t.i, i, ""]]);
        var r = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a(37)(i, r);
        i.locals && (t.exports = i.locals)
    },
    3256: function(t, e, a) {
        (e = t.exports = a(35)(!0)).push([t.i, ".BloodGlucoseListView_lastColumn__IGHK3 {\n    width: 50%;\n}\n", "", {
            version: 3,
            sources: ["/var/lib/jenkins/workspace/web-react_release_4.30/src/Pregnancy/components/Reports/BloodGlucoseListView.css"],
            names: [],
            mappings: "AAAA;IACI,WAAU;CACd",
            file: "BloodGlucoseListView.css",
            sourcesContent: [".lastColumn {\n    width: 50%;\n}\n"],
            sourceRoot: ""
        }]),
        e.locals = {
            lastColumn: "BloodGlucoseListView_lastColumn__IGHK3"
        }
    },
    3257: function(t, e, a) {
        var i = a(3258);
        "string" === typeof i && (i = [[t.i, i, ""]]);
        var r = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a(37)(i, r);
        i.locals && (t.exports = i.locals)
    },
    3258: function(t, e, a) {
        (e = t.exports = a(35)(!0)).i(a(278), void 0),
        e.push([t.i, ".PregnancyNotesListView_table__2IxVI {\n    width: 100%;\n}\n.PregnancyNotesListView_table__2IxVI th,\n.PregnancyNotesListView_table__2IxVI td {\n    white-space: nowrap;\n}\n.PregnancyNotesListView_notes__1QKK5 {\n    width: 100%;\n    margin-bottom: 20px;\n    word-break: break-word;\n    white-space: pre-wrap;\n}\n.PregnancyNotesListView_notesContainer__29Fkc {\n    width: 200px;\n}\n.PregnancyNotesListView_dateContainer__3cayS {\n    margin-top: 20px;\n    margin-bottom: 10px;\n}\n", "", {
            version: 3,
            sources: ["/var/lib/jenkins/workspace/web-react_release_4.30/src/Pregnancy/components/Reports/PregnancyNotesListView.css"],
            names: [],
            mappings: "AAEA;IACI,YAAW;CACf;AACA;;IAEI,oBAAmB;CACvB;AACA;IACI,YAAW;IACX,oBAAmB;IACnB,uBAAsB;IACtB,sBAAqB;CACzB;AACA;IACI,aAAY;CAChB;AACA;IACI,iBAAgB;IAChB,oBAAmB;CACvB",
            file: "PregnancyNotesListView.css",
            sourcesContent: ["@value (darkui_accent_2) from 'ui-connect/styles/colors.module.css';\n\n.table {\n    width: 100%;\n}\n.table th,\n.table td {\n    white-space: nowrap;\n}\n.notes {\n    width: 100%;\n    margin-bottom: 20px;\n    word-break: break-word;\n    white-space: pre-wrap;\n}\n.notesContainer {\n    width: 200px;\n}\n.dateContainer {\n    margin-top: 20px;\n    margin-bottom: 10px;\n}\n"],
            sourceRoot: ""
        }]),
        e.locals = {
            darkui_accent_2: "" + a(278).locals.darkui_accent_2,
            table: "PregnancyNotesListView_table__2IxVI",
            notes: "PregnancyNotesListView_notes__1QKK5",
            notesContainer: "PregnancyNotesListView_notesContainer__29Fkc",
            dateContainer: "PregnancyNotesListView_dateContainer__3cayS"
        }
    },
    3259: function(t, e, a) {
        var i = a(3260);
        "string" === typeof i && (i = [[t.i, i, ""]]);
        var r = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a(37)(i, r);
        i.locals && (t.exports = i.locals)
    },
    3260: function(t, e, a) {
        (e = t.exports = a(35)(!0)).push([t.i, ".PregnancyTrackingChartListView_listContainer__1wqkZ {\n    margin-top: 20px;\n}\n", "", {
            version: 3,
            sources: ["/var/lib/jenkins/workspace/web-react_release_4.30/src/Pregnancy/components/Reports/PregnancyTrackingChartListView.css"],
            names: [],
            mappings: "AAAA;IACI,iBAAgB;CACpB",
            file: "PregnancyTrackingChartListView.css",
            sourcesContent: [".listContainer {\n    margin-top: 20px;\n}\n"],
            sourceRoot: ""
        }]),
        e.locals = {
            listContainer: "PregnancyTrackingChartListView_listContainer__1wqkZ"
        }
    },
    3261: function(t, e, a) {
        (e = t.exports = a(35)(!0)).push([t.i, ".PregnancyReportChart_chipContainer__2Hmqn {\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n    margin: auto;\n}\n", "", {
            version: 3,
            sources: ["/var/lib/jenkins/workspace/web-react_release_4.30/src/Pregnancy/components/Reports/PregnancyReportChart.css"],
            names: [],
            mappings: "AAAA;IACI,+BAAsB;IAAtB,4BAAsB;IAAtB,uBAAsB;IACtB,aAAY;CAChB",
            file: "PregnancyReportChart.css",
            sourcesContent: [".chipContainer {\n    max-width: fit-content;\n    margin: auto;\n}\n"],
            sourceRoot: ""
        }]),
        e.locals = {
            chipContainer: "PregnancyReportChart_chipContainer__2Hmqn"
        }
    },
    3262: function(t, e, a) {
        var i = a(3263);
        "string" === typeof i && (i = [[t.i, i, ""]]);
        var r = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a(37)(i, r);
        i.locals && (t.exports = i.locals)
    },
    3263: function(t, e, a) {
        (e = t.exports = a(35)(!0)).i(a(278), void 0),
        e.push([t.i, ".PregnancySymptomReportChart_isOnLastLine__r2T85 {\n    position: relative;\n}\n.PregnancySymptomReportChart_isOnLastLine__r2T85:after {\n    content: '';\n    display: block;\n    position: absolute;\n    z-index: 1;\n    height: 8px;\n    top: 25px;\n    left: -1px;\n}\n.PregnancySymptomReportChart_chartLabel__2W8sL {\n    font-size: 11px;\n    color: " + a(278).locals.color_113 + ";\n    position: absolute;\n    z-index: 1;\n    top: 35px;\n    left: 3px;\n}\n.PregnancySymptomReportChart_isOnLastLine__r2T85:last-of-type .PregnancySymptomReportChart_chartLabel__2W8sL {\n    left: calc(100% - 4px);\n}\n.PregnancySymptomReportChart_isOnLastLine__r2T85:last-of-type:after {\n    right: -1px;\n    left: auto;\n}\n", "", {
            version: 3,
            sources: ["/var/lib/jenkins/workspace/web-react_release_4.30/src/Pregnancy/components/Reports/PregnancySymptomReportChart/PregnancySymptomReportChart.css"],
            names: [],
            mappings: "AAEA;IACI,mBAAkB;CACtB;AACA;IACI,YAAW;IACX,eAAc;IACd,mBAAkB;IAClB,WAAU;IACV,YAAW;IACX,UAAS;IACT,WAAU;CACd;AACA;IACI,gBAAe;IACf,mCAAgB;IAChB,mBAAkB;IAClB,WAAU;IACV,UAAS;IACT,UAAS;CACb;AACA;IACI,uBAAsB;CAC1B;AACA;IACI,YAAW;IACX,WAAU;CACd",
            file: "PregnancySymptomReportChart.css",
            sourcesContent: ["@value (color_113) from 'ui-connect/styles/colors.module.css';\n\n.isOnLastLine {\n    position: relative;\n}\n.isOnLastLine:after {\n    content: '';\n    display: block;\n    position: absolute;\n    z-index: 1;\n    height: 8px;\n    top: 25px;\n    left: -1px;\n}\n.chartLabel {\n    font-size: 11px;\n    color: color_113;\n    position: absolute;\n    z-index: 1;\n    top: 35px;\n    left: 3px;\n}\n.isOnLastLine:last-of-type .chartLabel {\n    left: calc(100% - 4px);\n}\n.isOnLastLine:last-of-type:after {\n    right: -1px;\n    left: auto;\n}\n"],
            sourceRoot: ""
        }]),
        e.locals = {
            color_113: "" + a(278).locals.color_113,
            isOnLastLine: "PregnancySymptomReportChart_isOnLastLine__r2T85",
            chartLabel: "PregnancySymptomReportChart_chartLabel__2W8sL"
        }
    },
    3264: function(t, e, a) {
        var i = a(3265);
        "string" === typeof i && (i = [[t.i, i, ""]]);
        var r = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a(37)(i, r);
        i.locals && (t.exports = i.locals)
    },
    3265: function(t, e, a) {
        (e = t.exports = a(35)(!0)).i(a(278), void 0),
        e.push([t.i, ".PregnancyTrackingChartView_mainContainer__4Y6Cj {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n.PregnancyTrackingChartView_dropDownContainer__22VJj {\n    width: 50%;\n    z-index: 100;\n}\n.PregnancyTrackingChartView_chartContainer__159u6 {\n    width: 100%;\n}\n.PregnancyTrackingChartView_singleHeader__3JKd1 {\n    color: " + a(278).locals.darkui_accent_2 + ";\n    font-size: 18px;\n    width: 100%;\n}\n", "", {
            version: 3,
            sources: ["/var/lib/jenkins/workspace/web-react_release_4.30/src/Pregnancy/components/Reports/PregnancyTrackingChartView.css"],
            names: [],
            mappings: "AAEA;IACI,sBAAa;IAAb,cAAa;IACb,+BAAsB;YAAtB,uBAAsB;IACtB,YAAW;IACX,4BAAmB;YAAnB,oBAAmB;IACnB,gCAAuB;YAAvB,wBAAuB;CAC3B;AACA;IACI,WAAU;IACV,aAAY;CAChB;AACA;IACI,YAAW;CACf;AACA;IACI,mCAAsB;IACtB,gBAAe;IACf,YAAW;CACf",
            file: "PregnancyTrackingChartView.css",
            sourcesContent: ["@value (darkui_accent_2) from 'ui-connect/styles/colors.module.css';\n\n.mainContainer {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n}\n.dropDownContainer {\n    width: 50%;\n    z-index: 100;\n}\n.chartContainer {\n    width: 100%;\n}\n.singleHeader {\n    color: darkui_accent_2;\n    font-size: 18px;\n    width: 100%;\n}\n"],
            sourceRoot: ""
        }]),
        e.locals = {
            darkui_accent_2: "" + a(278).locals.darkui_accent_2,
            mainContainer: "PregnancyTrackingChartView_mainContainer__4Y6Cj",
            dropDownContainer: "PregnancyTrackingChartView_dropDownContainer__22VJj",
            chartContainer: "PregnancyTrackingChartView_chartContainer__159u6",
            singleHeader: "PregnancyTrackingChartView_singleHeader__3JKd1"
        }
    },
    3266: function(t, e) {
        t.exports = '<div id="pregnancy-chart-placeholder" />\n<div id="pregnancy-list-view-placeholder" />\n<div id="pregnancy-empty-state-placeholder" />'
    },
    3267: function(t, e, a) {
        "use strict";
        var i = a(83)
          , r = a(84)
          , s = a(103)
          , n = a(101)
          , o = a(102)
          , l = a(11)
          , c = a.n(l)
          , h = a(166)
          , d = a(186)
          , u = function(t) {
            function e(t) {
                var a;
                return Object(i.a)(this, e),
                (a = Object(s.a)(this, Object(n.a)(e).call(this, t))).closeMe = function() {
                    var t = a.props.onClose;
                    a.setState({
                        showBanner: !1
                    }),
                    t()
                }
                ,
                a.state = {
                    showBanner: !0
                },
                a
            }
            return Object(o.a)(e, t),
            Object(r.a)(e, [{
                key: "componentDidMount",
                value: function() {
                    var t = this
                      , e = this.props.autoCloseTimeout;
                    e > 0 && setTimeout(function() {
                        t.closeMe()
                    }, e)
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props
                      , e = t.nameSpace
                      , a = t.titleKey
                      , i = t.contentKey;
                    return c.a.createElement(h.AnchoredBanner, {
                        open: this.state.showBanner,
                        direction: "right",
                        onClose: this.closeMe
                    }, c.a.createElement(h.AnchoredBannerContent, null, c.a.createElement(h.AnchoredBannerTitle, null, c.a.createElement(d.a, {
                        ns: e,
                        content: a
                    })), c.a.createElement(h.AnchoredBannerBody, null, c.a.createElement(d.a, {
                        ns: e,
                        tag: "div",
                        content: i
                    }))))
                }
            }]),
            e
        }(c.a.Component);
        u.defaultProps = {
            onClose: function() {},
            autoCloseTimeout: -1
        },
        e.a = u
    },
    3268: function(t, e, a) {
        "use strict";
        var i = a(1249)
          , r = a(11)
          , s = a.n(r)
          , n = a(127)
          , o = a(215)
          , l = a(166)
          , c = a(186)
          , h = a(1847)
          , d = a.n(h)
          , u = {
            pauseAtpPlan: o.Wb
        };
        e.a = Object(n.b)(function(t) {
            return {}
        }, u)(function(t) {
            var e = t.athletePlanId
              , a = t.pauseAtpPlan
              , n = t.onPausePlanClicked
              , o = Object(r.useState)(!0)
              , h = Object(i.a)(o, 2)
              , u = h[0]
              , p = h[1];
            return s.a.createElement(s.a.Fragment, null, s.a.createElement(l.AnchoredBanner, {
                open: u,
                direction: "right",
                onClose: function() {
                    p(!1)
                }
            }, s.a.createElement(l.AnchoredBannerIcon, {
                icon: "icon-garmin-coach"
            }), s.a.createElement(l.AnchoredBannerContent, null, s.a.createElement(l.AnchoredBannerTitle, null, s.a.createElement(c.a, {
                ns: "settings",
                content: "garmin_coach"
            })), s.a.createElement(l.AnchoredBannerBody, null, s.a.createElement(c.a, {
                ns: "reportswidget",
                content: "training_status_pause_garmin_coach_banner_message"
            }), s.a.createElement("br", null), s.a.createElement("div", {
                className: d.a.pauseTrainingStatus
            }, s.a.createElement("span", {
                onClick: function() {
                    a(e),
                    p(!1),
                    n()
                }
            }, s.a.createElement(c.a, {
                ns: "training_plans",
                content: "pause_plan"
            })))))))
        })
    },
    3269: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i);
        e.a = r.a.Collection.extend({
            model: r.a.Model,
            url: function() {
                return "/proxy/periodichealth-service/reports/menstrualcycle/weekdaterange/".concat(this.fromdate, "/").concat(this.todate)
            },
            parse: function(t) {
                return t && t.dailyLogs && t.dailyLogs.forEach(function(t) {
                    t.babyMovements || (t.babyMovements = [])
                }),
                t
            },
            initialize: function(t) {
                this.fromdate = t.fromdate,
                this.todate = t.todate
            }
        })
    },
    3270: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i);
        e.a = r.a.Collection.extend({
            model: r.a.Model,
            url: function() {
                return "/proxy/biometric-service/biometric/glucose/".concat(this.fromdate, "/").concat(this.todate)
            },
            initialize: function(t) {
                this.fromdate = t.fromdate,
                this.todate = t.todate
            }
        })
    },
    3271: function(t, e) {
        t.exports = '\x3c!-- Page markup starts here --\x3e\n<% if (chartFormat === \'page\') { %>\n<span id="banner-placeholder"></span> \n\n\x3c!--<div class="span18">--\x3e\n<div class="spinner-container loading-overlay" style="display: none;">\n    <div class="absolute-center">\n        <div class="text-center">\n            <div class="large spinner"><div></div></div>\n        </div>\n        <div class="h5 text-center font-thin"><%- Localizer.localize(\'loading\') %></div>\n    </div>\n</div>\n<% if (report.metricName === \'ACTIVITY_VO2_MAX\' || report.metricName === \'ACTIVITY_VO2_MAX_CYCLING\') { %>\n<div class="data-block medium vo2-title-block">\n    <h3 class="data-bit">\n        <%- report.metricName === \'ACTIVITY_VO2_MAX\' ? Localizer.localize(\'ACTIVITY_VO2_MAX\') :\n        Localizer.localize(\'vo2_max_cycling_title\') %>\n        <a data-toggle="modal" class="help-icon vo2-max-help-modal" style="display: none"><i class="icon-help"></i></a>\n    </h3>\n</div>\n<% } else if (report.metricName === \'ACTIVITY_TRAINING_STATUS\' || report.metricName ===\n\'ACTIVITY_TRAINING_STATUS_CYCLING\') { %>\n<div class="training-status-title-block">\n    <div class="training-status-title-header">\n        <h3>\n            <%- Localizer.localize(\'ACTIVITY_TRAINING_STATUS\') %>\n            <a href="#" class="colored training-status-help-modal"><%- Localizer.localize(\'learn_more\') %></a>\n        </h3>\n    </div>\n    <% if (isTrainingPauseEnabled && hasTrainingStatusPauseCapableDevice) { %>\n        <div class="dropdown training-status-dropdown page-navigation pull-right">\n            <button class="page-navigation-action" data-toggle="dropdown">\n                <i class="icon-gear"></i>\n            </button>\n            <ul class="training-status-action-list dropdown-menu pull-right">\n                <li><i class="icon-gear pull-right"></i></li>\n                <li><a href="#" class="training-status-pause-help"><%- Localizer.localize(\'training_status_gear_help\') %></a></li>\n                <% if (trainingStatusPausedDate) { %>\n                    <li><a href="#" class="training-status-resume"><%- Localizer.localize(\'training_status_resume_gear_menu_title\') %></a></li>\n                <% } else { %>\n                    <li><a href="#" class="training-status-pause"><%- Localizer.localize(\'training_status_pause_gear_menu_title\') %></a></li>\n                <% } %>\n            </ul>\n        </div>\n    <% } %>\n</div>\n<div id="report-current-status-container"></div>\n<% } else if (isRespirationRateEnabled && (report.metricName === \'ACTIVITY_AEROBIC_TRAINING_EFFECT\' || report.metricName\n=== \'ACTIVITY_ANAEROBIC_TRAINING_EFFECT\' || report.metricName === \'ACTIVITY_AEROBIC_TRAINING_EFFECT_CYCLING\' ||\nreport.metricName === \'ACTIVITY_ANAEROBIC_TRAINING_EFFECT_CYCLING\')) { %>\n<h3 class="data-bit">\n    <%- Localizer.localize(report.metricName) %>\n    <a data-toggle="modal" class="help-icon te-help"><i class="icon-help"></i></a>\n</h3>\n<% } else { %>\n<h4 class="bottom-s js-report-title">\n    <%- Localizer.localize(report.metricName) %><span class="js-popup-placeholder"></span>\n</h4>\n<% } %>\n\n<div class="pull-left reports-pagination top-xs">\n    <span>\n        <button class="btn btn-small btn-secondary js-today-btn"><%- Localizer.localize(\'today\') %></button>\n    </span>\n\n    <div class="reports-navigation navButtons">\n        <span>\n            <button class="icon-arrow-left" aria-label="<%- Localizer.localize(\'previous\') %>"></button>\n            <button class="icon-arrow-right left-xs" aria-label="<%- Localizer.localize(\'next\') %>"></button>\n        </span>\n        <span class="js-report-date-range"></span>\n    </div>\n</div>\n\n<div class="tabbable">\n    \x3c!--tabs--\x3e\n    <ul class="nav nav-tabs tabs-right">\n        <% if (isMct) { %>\n            <li id="tab-pane2">\n                <a href="#pane2" data-toggle="tab" class="js-last_four_weeks"><%- Localizer.localize(\'one_cycle\') %></a>\n            </li>\n            <li id="tab-pane4">\n                <a href="#pane4" data-toggle="tab" class="js-last_six_months"><%- Localizer.localize(\'six_cycles\') %></a>\n            </li>\n            <li id="tab-pane5">\n                <a href="#pane5" data-toggle="tab" class="js-last_year"><%- Localizer.localize(\'twelve_cycles\') %></a>\n            </li>\n        <% } else if (isPregnancyReport) { %>\n            <li id="tab-pane2">\n                <a href="#pane2" data-toggle="tab" class="js-last_four_weeks"><%- Localizer.localize(\'four_weeks\') %></a>\n            </li>\n            <% if (pregnancy9MoReportEnabled) { %>\n                <li id="tab-pane5">\n                    <a href="#pane5" data-toggle="tab" class="js-last_nine_months"><%- Localizer.localize(\'nine_months\') %></a>\n                </li>\n            <% } %>                    \n        <% } else { %>\n            <li id="tab-pane0">\n                <a href="#pane0" data-toggle="tab" class="js-current"><%- Localizer.localize(\'most_recent\') %></a>\n            </li>\n            <li id="tab-pane1">\n                <a href="#pane1" data-toggle="tab" class="js-last_seven_days"><%- Localizer.localize(\'seven_days\') %></a>\n            </li>\n            <li id="tab-pane2">\n                <a href="#pane2" data-toggle="tab" class="js-last_four_weeks"><%- Localizer.localize(\'four_weeks\') %></a>\n            </li>\n            <li id="tab-pane3">\n                <a href="#pane3" data-toggle="tab" class="js-last_three_months"\n                ><%- Localizer.localize(\'three_months\') %></a\n                >\n            </li>\n            <li id="tab-pane4">\n                <a href="#pane4" data-toggle="tab" class="js-last_six_months"><%- Localizer.localize(\'six_months\') %></a>\n            </li>\n            <li id="tab-pane5">\n                <a href="#pane5" data-toggle="tab" class="js-last_year"><%- Localizer.localize(\'one_year\') %></a>\n            </li>\n        <% } %>\n    </ul>\n\n    \x3c!--tab content--\x3e\n\n    <div class="h4 top-s bottom-s text-center" id="reportFilter" style="display:none;"></div>\n\n    <div class="tab-content">\n        <div id="pane0" class="tab-pane">\n            <div class="js-report-chart-current-te"></div>\n\n            <div class="top-l">\n                <div class="span8">\n                    <div class="text-center vo2-sport-filter bottom-xs" style="display: none">\n                        <div\n                            class="btn-group btn-group-pill vo2-widget-filter widget-filter"\n                            data-toggle="buttons-radio"\n                        >\n                            <button class="btn btn-small vo2-sport-filter-cycling">\n                                <%- Localizer.localize(\'activity_type_cycling\') %>\n                            </button>\n                            <button class="btn btn-small vo2-sport-filter-running">\n                                <%- Localizer.localize(\'activity_type_running\') %>\n                            </button>\n                        </div>\n                    </div>\n                    <div class="text-center ftp-filter" style="display: none">\n                        <div class="btn-group btn-group-pill widget-filter ftp-widget-filter">\n                            <button class="btn btn-small ftp-watts">\n                                <%- Localizer.localize(\'label_power_unit\') %>\n                            </button>\n                            <button class="btn btn-small ftp-watts-kg">\n                                <%- Localizer.localize(\'label_power_kg\') %>\n                            </button>\n                        </div>\n                    </div>\n                    <div class="chart-container">\n                        <div class="chart chart-widget">\n                            <span class="additionalPlaceHolder"></span>\n                            <div class="js-report-chart-current"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class="span8">\n                    <div class="js-report-chart-compare"></div>\n                </div>\n            </div>\n        </div>\n\n        <div id="pane1" class="tab-pane">\n            <div class="row ftp-filter">\n                <div class="text-center bottom-xs">\n                    <div class="btn-group btn-group-pill widget-filter ftp-widget-filter">\n                        <button class="btn btn-small ftp-watts-trend">\n                            <%- Localizer.localize(\'label_power_unit\') %>\n                        </button>\n                        <button class="btn btn-small ftp-watts-kg-trend">\n                            <%- Localizer.localize(\'label_power_kg\') %>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class="row text-center bottom-xs report-message"></div>\n            <div class="row-fluid chart-container">\n                <div class="chart js-report-chart-seven-day"></div>\n            </div>\n        </div>\n\n        <div id="pane2" class="tab-pane">\n            <div class="row watts-filter" style="display: none">\n                <div class="text-center bottom-xs">\n                    <div class="btn-group btn-group-pill widget-filter ftp-widget-filter">\n                        <button class="btn btn-small watts-trend"><%- Localizer.localize(\'label_power_unit\') %></button>\n                        <button class="btn btn-small watts-kg-trend">\n                            <%- Localizer.localize(\'label_power_kg\') %>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class="row ftp-filter" style="display: none">\n                <div class="text-center bottom-xs">\n                    <div class="btn-group btn-group-pill widget-filter ftp-widget-filter">\n                        <button class="btn btn-small ftp-watts-trend">\n                            <%- Localizer.localize(\'label_power_unit\') %>\n                        </button>\n                        <button class="btn btn-small ftp-watts-kg-trend">\n                            <%- Localizer.localize(\'label_power_kg\') %>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class="h4 text-center bottom-xs report-message"></div>\n            <div class="row-fluid chart-container">\n                <div class="chart js-report-chart-four-week"></div>\n            </div>\n        </div>\n\n        <div id="pane3" class="tab-pane">\n            <div class="row watts-filter" style="display: none">\n                <div class="text-center bottom-xs">\n                    <div class="btn-group btn-group-pill widget-filter ftp-widget-filter">\n                        <button class="btn btn-small watts-trend"><%- Localizer.localize(\'label_power_unit\') %></button>\n                        <button class="btn btn-small watts-kg-trend">\n                            <%- Localizer.localize(\'label_power_kg\') %>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class="row ftp-filter" style="display: none">\n                <div class="text-center bottom-xs">\n                    <div class="btn-group btn-group-pill widget-filter ftp-widget-filter">\n                        <button class="btn btn-small ftp-watts-trend">\n                            <%- Localizer.localize(\'label_power_unit\') %>\n                        </button>\n                        <button class="btn btn-small ftp-watts-kg-trend">\n                            <%- Localizer.localize(\'label_power_kg\') %>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class="h4 text-center bottom-xs report-message"></div>\n            <div class="row-fluid chart-container">\n                <div class="chart js-report-chart-three-month"></div>\n            </div>\n        </div>\n\n        <div id="pane4" class="tab-pane">\n            <div class="row watts-filter" style="display: none">\n                <div class="text-center bottom-xs">\n                    <div class="btn-group btn-group-pill widget-filter ftp-widget-filter">\n                        <button class="btn btn-small watts-trend"><%- Localizer.localize(\'label_power_unit\') %></button>\n                        <button class="btn btn-small watts-kg-trend">\n                            <%- Localizer.localize(\'label_power_kg\') %>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class="row ftp-filter" style="display: none">\n                <div class="text-center bottom-xs">\n                    <div class="btn-group btn-group-pill widget-filter ftp-widget-filter">\n                        <button class="btn btn-small ftp-watts-trend">\n                            <%- Localizer.localize(\'label_power_unit\') %>\n                        </button>\n                        <button class="btn btn-small ftp-watts-kg-trend">\n                            <%- Localizer.localize(\'label_power_kg\') %>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class="h4 text-center bottom-xs report-message"></div>\n            <div class="row-fluid chart-container">\n                <div class="chart js-report-chart-six-month"></div>\n            </div>\n        </div>\n\n        <div id="pane5" class="tab-pane">\n            <div class="row watts-filter" style="display: none">\n                <div class="text-center bottom-xs">\n                    <div class="btn-group btn-group-pill widget-filter ftp-widget-filter">\n                        <button class="btn btn-small watts-trend"><%- Localizer.localize(\'label_power_unit\') %></button>\n                        <button class="btn btn-small watts-kg-trend">\n                            <%- Localizer.localize(\'label_power_kg\') %>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class="row ftp-filter" style="display: none">\n                <div class="text-center bottom-xs">\n                    <div class="btn-group btn-group-pill widget-filter ftp-widget-filter">\n                        <button class="btn btn-small ftp-watts-trend">\n                            <%- Localizer.localize(\'label_power_unit\') %>\n                        </button>\n                        <button class="btn btn-small ftp-watts-kg-trend">\n                            <%- Localizer.localize(\'label_power_kg\') %>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class="h4 text-center bottom-xs report-message"></div>\n            <div class="row-fluid chart-container">\n                <div class="chart js-report-chart-twelve-month"></div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="reportComparisonPlaceholder"></div>\n\n<div class="report-summaries-placeholder">\n    <div class="row-fluid report-summaries"></div>\n</div>\n\n<% if (report.metricName === \'ACTIVITY_NORMALIZED_POWER\' || report.metricName === \'ACTIVITY_TRAINING_STRESS_SCORE\') { %>\n<div class="legal dense muted top-m">\n    <%- Localizer.localize(\'normalized_power_legal_notice\') %>&nbsp;<a\n        href="http://trainingpeaks.com/"\n        class="colored"\n        target="_blank"\n        >Peaksware, LLC</a\n    >.\n</div>\n<% } %>\n\n<div id="reportActivityList" style="display:none;"></div>\n\n<div id="reportList" style="display:none;"></div>\n\x3c!--</div>--\x3e\n<% } else { %>\n\x3c!-- Page markup stops here --\x3e\n\n\x3c!-- Widget markup starts here --\x3e\n<% if (report.metricName === \'ACTIVITY_VO2_MAX\' || report.metricName === \'ACTIVITY_VO2_MAX_CYCLING\') { %>\n\n<div class="data-block medium vo2-title-block">\n    <h3 class="data-bit">\n        <a href="<%- url(reportUrl) %>" class="js-select-report"\n            ><%- report.metricName === \'ACTIVITY_VO2_MAX\' ? Localizer.localize(\'ACTIVITY_VO2_MAX\') :\n            Localizer.localize(\'vo2_max_cycling_title\') %></a\n        >\n        <a data-toggle="modal" class="help-icon vo2-max-help-modal"><i class="icon-help"></i></a>\n    </h3>\n    <span class="data-label js-report-date-range"></span>\n</div>\n\n<% } else if (report.metricName === \'ACTIVITY_MAX_FTP\') { %>\n\n<div class="data-1 max-ftp">\n    <h3 class="data-bit">\n        <abbr class="has-tooltip" title="<%- Localizer.localize(report.metricName) %>">\n            <a href="<%- url(reportUrl) %>"><%- Localizer.localize(\'widget_title_\'+report.metricName) %></a>\n        </abbr>\n        <span class="js-popup-placeholder"></span>\n    </h3>\n    <span class="data-label js-report-date-range"></span>\n</div>\n\n<% } else if (report.metricName === \'ACTIVITY_AEROBIC_TRAINING_EFFECT\' || report.metricName ===\n\'ACTIVITY_ANAEROBIC_TRAINING_EFFECT\' || report.metricName === \'ACTIVITY_AEROBIC_TRAINING_EFFECT_CYCLING\' ||\nreport.metricName === \'ACTIVITY_ANAEROBIC_TRAINING_EFFECT_CYCLING\') { %>\n<div class="data-1">\n    <h3 class="data-bit">\n        <a href="<%- url(reportUrl) %>" title="<%- Localizer.localize(report.metricName) %>" class="js-select-report"\n            ><%- Localizer.localize(report.metricName) %></a\n        >\n        <a\n            href="#modal-help-te"\n            data-toggle="modal"\n            class="help-icon te-help"\n            title="<%- Localizer.localize(\'TRAINING_EFFECT_HELP\') %>"\n            ><span class="icon-help"></span\n        ></a>\n    </h3>\n    <span class="data-label js-report-date-range"></span>\n</div>\n\n<% } else if (report.metricName === \'ACTIVITY_TRAINING_STATUS\' || report.metricName ===\n\'ACTIVITY_TRAINING_STATUS_CYCLING\') { %>\n<div class="data-1">\n    <h3 class="data-bit">\n        <a href="<%- url(reportUrl) %>" title="<%- Localizer.localize(report.metricName) %>" class="js-select-report"\n            ><%- Localizer.localize(report.metricName) %></a\n        >\n        <a\n            href="#modal-help-ts"\n            data-toggle="modal"\n            class="help-icon ts-help"\n            title="<%- Localizer.localize(\'TRAINING_STATUS_HELP\') %>"\n            ><span class="icon-help"></span\n        ></a>\n    </h3>\n</div>\n\n<% } else if (report.metricName === \'ACTIVITY_HRV_STRESS_TEST\' ) { %>\n<div class="data-1">\n    <h3 class="data-bit">\n        <a href="<%- url(reportUrl) %>" title="<%- Localizer.localize(report.metricName) %>" class="js-select-report"\n            ><%- Localizer.localize(report.metricName) %></a\n        >\n        <a\n            href="#modal-help-hrv"\n            data-toggle="modal"\n            class="help-icon hrv-help"\n            title="<%- Localizer.localize(\'learn_more_about_hrv_stress\') %>"\n            ><span class="icon-help"></span\n        ></a>\n    </h3>\n    <span class="data-label js-report-date-range"></span>\n</div>\n\n<% } else { %>\n<div class="data-1">\n    <h3 class="data-bit">\n        <a href="<%- url(reportUrl) %>" title="<%- Localizer.localize(report.metricName) %>" class="js-select-report">\n            <%- Localizer.localize(report.metricName) %>\n        </a>\n    </h3>\n    <span class="data-label js-report-date-range"></span>\n</div>\n\n<% } %>\n\n<div class="text-center vo2-sport-filter" style="display: none">\n    <div class="btn-group btn-group-pill widget-filter vo2-widget-filter" data-toggle="buttons-radio">\n        <button class="btn btn-small vo2-sport-filter-cycling">\n            <%- Localizer.localize(\'activity_type_cycling\') %>\n        </button>\n        <button class="btn btn-small vo2-sport-filter-running">\n            <%- Localizer.localize(\'activity_type_running\') %>\n        </button>\n    </div>\n</div>\n<div class="text-center ftp-filter" style="display: none">\n    <div class="btn-group btn-group-pill widget-filter ftp-widget-filter">\n        <button class="btn btn-small ftp-watts"><%- Localizer.localize(\'label_power_unit\') %></button>\n        <button class="btn btn-small ftp-watts-kg"><%- Localizer.localize(\'label_power_kg\') %></button>\n    </div>\n</div>\n\n<% if (report.metricName === \'ACTIVITY_TRAINING_STATUS\' || report.metricName === \'ACTIVITY_TRAINING_STATUS_CYCLING\') {\n%>\n<div id="widget-current-status-container" class="training-status-container"></div>\n<% } else { %>\n<div class="chart-container">\n    <div class="chart chart-widget chart-stacked-report">\n        <span class="additionalPlaceHolder"></span>\n        <span class="reportChartPlaceholder"></span>\n    </div>\n</div>\n<% } %>\n\n<div class="row-fluid js-report-summary" style="display: none">\n    <div class="span6">\n        <div class="data-1">\n            <div class="h5 data-bit js-report-total-value"></div>\n            <span class="data-label"><%- Localizer.localize(\'total\') %></span>\n        </div>\n    </div>\n    <div class="span6">\n        <div class="data-1 pull-right">\n            <div class="h5 data-bit js-report-avg-value"></div>\n            <span class="data-label"><%- Localizer.localize(\'daily.avg\') %></span>\n        </div>\n    </div>\n</div>\n\n<% } %>\n\x3c!-- Widget markup stops here --\x3e\n'
    },
    3272: function(t, e, a) {
        var i = a(3273);
        "string" === typeof i && (i = [[t.i, i, ""]]);
        var r = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        a(37)(i, r);
        i.locals && (t.exports = i.locals)
    },
    3273: function(t, e, a) {
        (t.exports = a(35)(!0)).push([t.i, "/* Transparent Overlay */\n    .loading-overlay.spinner-container {\n        content: '';\n        display: block;\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(255, 255, 255, 0.9);\n        z-index: 999;\n    }\n    .spinner-container .absolute-center {\n        position: fixed;\n        z-index: 999;\n        height: 2em;\n        width: 2em;\n        overflow: show;\n        margin: auto;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n    }\n    .power-curve .flex-table {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex-flow: column nowrap;\n                flex-flow: column nowrap;\n        font-size: 0.8rem;\n        margin: 0.5rem;\n        line-height: 1.5;\n        border-bottom: 1px solid #d0d0d0;\n    }\n    .power-curve .flex-table .flex-th {\n        display: none;\n        font-weight: normal;\n    }\n    .power-curve .flex-table .flex-th > .flex-td {\n        white-space: normal;\n    }\n    .power-curve .flex-table .flex-tr {\n        width: 100%;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex-flow: row nowrap;\n                flex-flow: row nowrap;\n    }\n    .power-curve .flex-table .flex-tr:not(.flex-th):hover {\n        background-color: #f2f2f2;\n    }\n    .power-curve .flex-table .flex-td {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex-flow: row nowrap;\n                flex-flow: row nowrap;\n        -webkit-flex-grow: 1;\n                flex-grow: 1;\n        -webkit-flex-basis: 0;\n                flex-basis: 0;\n        padding: 0.5em;\n        word-break: break-word;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        min-width: 0px;\n        white-space: nowrap;\n        border-bottom: 1px solid #d0d0d0;\n        font-size: 14px;\n    }\n    .power-curve .flex-table .flex-td.narrow {\n        max-width: 20px;\n    }\n    .power-curve .flex-table .flex-td .icon-trash {\n        color: #c7c7c7;\n    }\n    .power-curve .flex-table .flex-td .icon-trash:hover {\n        color: #222222;\n    }\n    .power-curve .flex-table .flex-td .icon-trash.hover {\n        color: #222222;\n    }\n    .tab-content .center-report-message {\n        line-height: 200px;\n    }\n", "", {
            version: 3,
            sources: ["/var/lib/jenkins/workspace/web-react_release_4.30/src/styles/power-curve.page.css"],
            names: [],
            mappings: "AACI,yBAAwB;IACxB;QACI,YAAW;QACX,eAAc;QACd,gBAAe;QACf,OAAM;QACN,QAAO;QACP,YAAW;QACX,aAAY;QACZ,qCAAoC;QACpC,aAAY;KAChB;IAEA;QACI,gBAAe;QACf,aAAY;QACZ,YAAW;QACX,WAAU;QACV,eAAc;QACd,aAAY;QACZ,OAAM;QACN,QAAO;QACP,UAAS;QACT,SAAQ;KACZ;IAEA;QACI,sBAAa;QAAb,cAAa;QACb,iCAAwB;gBAAxB,yBAAwB;QACxB,kBAAiB;QACjB,eAAc;QACd,iBAAgB;QAChB,iCAAgC;KACpC;IAEA;QACI,cAAa;QACb,oBAAmB;KACvB;IAEA;QACI,oBAAmB;KACvB;IAEA;QACI,YAAW;QACX,sBAAa;QAAb,cAAa;QACb,8BAAqB;gBAArB,sBAAqB;KACzB;IAEA;QACI,0BAAyB;KAC7B;IAEA;QACI,sBAAa;QAAb,cAAa;QACb,8BAAqB;gBAArB,sBAAqB;QACrB,qBAAY;gBAAZ,aAAY;QACZ,sBAAa;gBAAb,cAAa;QACb,eAAc;QACd,uBAAsB;QACtB,iBAAgB;QAChB,wBAAuB;QACvB,eAAc;QACd,oBAAmB;QACnB,iCAAgC;QAChC,gBAAe;KACnB;IAEA;QACI,gBAAe;KACnB;IAEA;QACI,eAAc;KAClB;IAEA;QACI,eAAc;KAClB;IAEA;QACI,eAAc;KAClB;IAEA;QACI,mBAAkB;KACtB",
            file: "power-curve.page.css",
            sourcesContent: [":global {\n    /* Transparent Overlay */\n    .loading-overlay.spinner-container {\n        content: '';\n        display: block;\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(255, 255, 255, 0.9);\n        z-index: 999;\n    }\n\n    .spinner-container .absolute-center {\n        position: fixed;\n        z-index: 999;\n        height: 2em;\n        width: 2em;\n        overflow: show;\n        margin: auto;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n    }\n\n    .power-curve .flex-table {\n        display: flex;\n        flex-flow: column nowrap;\n        font-size: 0.8rem;\n        margin: 0.5rem;\n        line-height: 1.5;\n        border-bottom: 1px solid #d0d0d0;\n    }\n\n    .power-curve .flex-table .flex-th {\n        display: none;\n        font-weight: normal;\n    }\n\n    .power-curve .flex-table .flex-th > .flex-td {\n        white-space: normal;\n    }\n\n    .power-curve .flex-table .flex-tr {\n        width: 100%;\n        display: flex;\n        flex-flow: row nowrap;\n    }\n\n    .power-curve .flex-table .flex-tr:not(.flex-th):hover {\n        background-color: #f2f2f2;\n    }\n\n    .power-curve .flex-table .flex-td {\n        display: flex;\n        flex-flow: row nowrap;\n        flex-grow: 1;\n        flex-basis: 0;\n        padding: 0.5em;\n        word-break: break-word;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        min-width: 0px;\n        white-space: nowrap;\n        border-bottom: 1px solid #d0d0d0;\n        font-size: 14px;\n    }\n\n    .power-curve .flex-table .flex-td.narrow {\n        max-width: 20px;\n    }\n\n    .power-curve .flex-table .flex-td .icon-trash {\n        color: #c7c7c7;\n    }\n\n    .power-curve .flex-table .flex-td .icon-trash:hover {\n        color: #222222;\n    }\n\n    .power-curve .flex-table .flex-td .icon-trash.hover {\n        color: #222222;\n    }\n\n    .tab-content .center-report-message {\n        line-height: 200px;\n    }\n}\n"],
            sourceRoot: ""
        }])
    },
    3274: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i);
        e.a = r.a.Collection.extend({
            model: r.a.Model,
            url: function() {
                return "/proxy/usersummary-service/stats/respiration/" + this.aggregation + "/" + this.startDate + "/" + this.endDate
            },
            initialize: function(t) {
                this.startDate = t.startDate,
                this.endDate = t.untilDate,
                this.aggregation = t.aggregation
            },
            setDisplayName: function(t) {
                return null
            }
        })
    },
    3275: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a(7)
              , r = a.n(i)
              , s = a(9)
              , n = a.n(s)
              , o = a(104)
              , l = n.a.View.extend({
                initialize: function(t) {
                    this.template = r.a.template('<div class="all-day-respiration-chart" />'),
                    this.metrics = t.metricList.toJSON(),
                    this.activeTab = t.activeTab,
                    this.userSettings = t.userSettings,
                    this.startDate = t.startDateStr,
                    this.endDate = t.endDateStr,
                    this.tabView = t.tabView,
                    this.isChartOnWidget = t.isChartOnWidget
                },
                render: function() {
                    var e = this.template({});
                    t(this.el).html(e),
                    this.reportChartView = new o.a,
                    this.reportChartView.renderComponent(window.RespirationReportChart, this.$(".all-day-respiration-chart")[0], {
                        reportData: this.metrics,
                        activeTab: this.activeTab,
                        isChartOnWidget: this.isChartOnWidget,
                        startDate: this.startDate,
                        endDate: this.endDate
                    })
                }
            });
            e.a = l
        }
        ).call(this, a(10))
    },
    5060: function(t, e, a) {
        "use strict";
        var i = a(6)
          , r = a(7)
          , s = a.n(r)
          , n = a(9)
          , o = a.n(n)
          , l = a(104)
          , c = a(11)
          , h = a.n(c)
          , d = a(2)
          , u = a(1249)
          , p = a(15)
          , g = a.n(p)
          , m = a(143)
          , f = a(221)
          , v = a(186)
          , T = a(13)
          , _ = a(23)
          , A = a(94)
          , y = a(18)
          , C = function(t, e) {
            return t.reduce(function(t, a) {
                var i = e(a);
                return t.hasOwnProperty(i) || (t[i] = []),
                t[i].push(a),
                t
            }, {})
        }
          , b = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document
              , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , i = Object(c.useState)(!1)
              , r = Object(u.a)(i, 2)
              , s = r[0]
              , n = r[1];
            Object(c.useEffect)(function() {
                return e.addEventListener("scroll", l),
                function() {
                    e.removeEventListener("scroll", l)
                }
            }, []),
            Object(c.useEffect)(function() {
                s && t()
            }, [s]);
            var o = null
              , l = function() {
                window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight && !s && null === o && (o = setTimeout(function() {
                    n(!0),
                    clearTimeout(o),
                    o = null
                }, a))
            };
            return [s, n]
        }
          , E = a(1718)
          , D = a.n(E)
          , I = a(3255)
          , x = a.n(I)
          , S = function(t, e, a) {
            return Object.keys(t).map(function(i, r) {
                return h.a.createElement(h.a.Fragment, {
                    key: r
                }, R(i, e, r), w(t[i], a), M(t[i], a))
            })
        }
          , M = function(t, e) {
            var a = t.reduce(function(t, e) {
                return t + e.value
            }, 0) / t.length
              , i = Object(A.l)(a, e.value)
              , r = m.a.t("menstrual-cycle-tracking:".concat(e.label_translation));
            return h.a.createElement("tr", null, h.a.createElement("td", {
                colSpan: "2"
            }, h.a.createElement("div", {
                className: D.a.footer
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_avg_summary"
            }))), h.a.createElement("td", null, "".concat(T.a.personalizeBloodGlucose(i, e.value), " ").concat(r)))
        }
          , w = function(t, e) {
            return t.map(function(t) {
                return O(t, e)
            })
        }
          , O = function(t, e) {
            var a = g()(t.userMeasurementTimestamp).toDate()
              , i = _.a.formatLocalizeTime(a)
              , r = m.a.t("menstrual-cycle-tracking:".concat(e.label_translation))
              , s = "".concat(t.logType, "-").concat(i);
            return h.a.createElement("tr", {
                key: s,
                className: D.a.dataRow
            }, h.a.createElement("td", null, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "pregnancy_glucose_logtype_".concat(t.logType)
            })), h.a.createElement("td", null, i), h.a.createElement("td", null, "".concat(T.a.personalizeBloodGlucose(t.personalizedLevel, e.value), " ").concat(r)))
        }
          , R = function(t, e, a) {
            var i = g()(t, _.a.LINK_FORMAT).toDate()
              , r = _.a.formatMonthDayYear(i)
              , s = "";
            if (e) {
                var n = Object(A.t)(i, e.pregnancyCycleStart);
                s = "(".concat(m.a.t("pregnancy:lbl_week_and_day", {
                    0: n.numberOfWeek,
                    1: n.daysInWeek
                }), ")")
            }
            return h.a.createElement("tr", {
                key: a
            }, h.a.createElement("td", {
                key: r,
                className: D.a.groupHeaderRow,
                colSpan: "3"
            }, h.a.createElement("a", {
                className: "colored ".concat(D.a.link),
                title: r,
                onClick: function() {
                    y.default.navigate("/pregnancy-detail/".concat(t))
                }
            }, "".concat(r, " ").concat(s))))
        }
          , L = Object(f.c)(["pregnancy", "menstrual-cycle-tracking"])(function(t) {
            var e = t.model
              , a = t.filter
              , i = void 0 === a ? [] : a
              , r = t.userSettings
              , s = t.startDate
              , n = t.endDate
              , o = Object(c.useState)(0)
              , l = Object(u.a)(o, 2)
              , p = l[0]
              , m = l[1]
              , f = Object(c.useState)(1)
              , T = Object(u.a)(f, 2)
              , y = T[0]
              , E = T[1]
              , I = b(function() {
                10 * y < p && (O(!1),
                E(y + 1))
            }, document.querySelector(".main-body"), 500)
              , M = Object(u.a)(I, 2)
              , w = M[0]
              , O = M[1]
              , R = Object(c.useState)(function() {
                if (e.glucoseList) {
                    var t = e.glucoseList.sort(function(t, e) {
                        return g()(e.calendarDate, _.a.LINK_FORMAT).toDate() - g()(t.calendarDate, _.a.LINK_FORMAT).toDate()
                    })
                      , a = C(t, function(t) {
                        return g()(t.calendarDate, _.a.LINK_FORMAT).format(_.a.LINK_FORMAT)
                    });
                    return Object.keys(a).forEach(function(t) {
                        a[t] = a[t].map(function(t) {
                            return Object(d.a)({}, t, {
                                personalizedLevel: Object(A.l)(t.value, r.userData.glucoseMeasurementUnit)
                            })
                        }),
                        a[t] = Object(A.H)(a[t])
                    }),
                    a
                }
                return {}
            })
              , L = Object(u.a)(R, 1)[0]
              , N = Object(c.useState)(L)
              , z = Object(u.a)(N, 2)
              , V = z[0]
              , k = z[1]
              , P = Object(c.useState)(L)
              , F = Object(u.a)(P, 2)
              , G = F[0]
              , B = F[1];
            Object(c.useEffect)(function() {
                return function() {
                    E(1),
                    m(0)
                }
            }, []),
            Object(c.useEffect)(function() {
                var t = {}
                  , e = 0;
                Object.keys(L).forEach(function(a) {
                    var r = L[a].filter(function(t) {
                        return -1 !== i.indexOf(t.logType)
                    });
                    r.length > 0 && (e += r.length + 2,
                    t[a] = r)
                }),
                m(p + e),
                k(t)
            }, [i]),
            Object(c.useEffect)(function() {
                if (p > 10) {
                    if (!w && p > 0) {
                        var t = {}
                          , e = 0;
                        Object.keys(V).forEach(function(a) {
                            (e += V[a].length + 2) <= 10 * y && (t[a] = V[a])
                        }),
                        B(t)
                    }
                } else
                    B(V)
            }, [w, V]);
            var Y = Object(A.n)(e.snapshots, s, n)
              , H = A.v.find(function(t) {
                return t.value === r.userData.glucoseMeasurementUnit
            });
            return L && Object.keys(L).length > 0 ? h.a.createElement(h.a.Fragment, null, h.a.createElement("div", {
                className: D.a.listHeader
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_blood_glucose"
            })), h.a.createElement("table", {
                className: D.a.table
            }, h.a.createElement("thead", null, h.a.createElement("tr", {
                className: D.a.row
            }, h.a.createElement("th", {
                align: "left",
                className: D.a.thick
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "pregnancy_lbl_when_tested"
            })), h.a.createElement("th", {
                align: "left",
                className: D.a.thick
            }, h.a.createElement(v.a, {
                ns: "units",
                content: "time"
            })), h.a.createElement("th", {
                align: "left",
                className: "".concat(x.a.lastColumn, " ").concat(D.a.thick)
            }, h.a.createElement(v.a, {
                ns: "common",
                content: "level"
            })))), h.a.createElement("tbody", null, S(G, Y, H)))) : h.a.createElement("div", {
                className: D.a.noDataState
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "no_blood_glucose_logged"
            }))
        })
          , N = a(14)
          , z = a(30)
          , V = a(1224)
          , k = function(t, e) {
            return t.map(function(t, a) {
                return h.a.createElement(h.a.Fragment, {
                    key: a
                }, h.a.createElement("tr", {
                    key: t.calendarDate
                }, F(t, e)), P(t.babyMovements))
            })
        }
          , P = function(t) {
            return t.map(function(t) {
                return G(t)
            })
        }
          , F = function(t, e) {
            var a = g()(t.calendarDate, _.a.LINK_FORMAT).toDate()
              , i = _.a.formatMonthDayYear(a)
              , r = "";
            if (e) {
                var s = Object(A.t)(a, e.pregnancyCycleStart);
                r = "(".concat(Object(z.b)("pregnancy:lbl_week_and_day", {
                    0: s.numberOfWeek,
                    1: s.daysInWeek
                }), ")")
            }
            return h.a.createElement("td", {
                key: i,
                className: D.a.groupHeaderRow,
                colSpan: "5"
            }, h.a.createElement("a", {
                className: "colored ".concat(D.a.link),
                title: i,
                onClick: function() {
                    y.default.navigate("/pregnancy-detail/".concat(t.calendarDate))
                }
            }, "".concat(i, " ").concat(r)))
        }
          , G = function(t) {
            var e = g()(t.startTimestamp).toDate()
              , a = _.a.formatLocalizeTime(e)
              , i = V.a.formatDescriptiveDuration(t.duration, !0)
              , r = g()(e).add(t.duration, "seconds").toDate()
              , s = _.a.formatLocalizeTime(r)
              , n = "".concat(t.movementType, "-").concat(a);
            return h.a.createElement("tr", {
                key: n,
                className: D.a.dataRow
            }, h.a.createElement("td", null, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "movement_type_".concat(t.movementType.toLowerCase())
            })), h.a.createElement("td", null, a), h.a.createElement("td", null, s), h.a.createElement("td", null, i), h.a.createElement("td", null, t.count))
        }
          , B = Object(f.c)(["pregnancy"])(function(t) {
            var e = t.model
              , a = t.filter
              , i = void 0 === a ? [] : a
              , r = t.startDate
              , s = t.endDate;
            0 === i.length && i.push("GENERAL");
            var n = Object(c.useState)(0)
              , o = Object(u.a)(n, 2)
              , l = o[0]
              , d = o[1]
              , p = Object(c.useState)(1)
              , m = Object(u.a)(p, 2)
              , f = m[0]
              , T = m[1]
              , y = b(function() {
                10 * f < l && (I(!1),
                T(f + 1))
            }, document.querySelector(".main-body"), 500)
              , C = Object(u.a)(y, 2)
              , E = C[0]
              , I = C[1]
              , x = Object(c.useState)(function() {
                if (e.dailyLogs) {
                    var t = e.dailyLogs.map(function(t) {
                        return {
                            calendarDate: t.calendarDate,
                            babyMovements: Object(A.G)(Object(N.a)(t.babyMovements))
                        }
                    });
                    return t.sort(function(t, e) {
                        return g()(e.calendarDate, _.a.LINK_FORMAT).toDate() - g()(t.calendarDate, _.a.LINK_FORMAT).toDate()
                    }),
                    t
                }
                return []
            })
              , S = Object(u.a)(x, 1)[0]
              , M = Object(c.useState)(S)
              , w = Object(u.a)(M, 2)
              , O = w[0]
              , R = w[1]
              , L = Object(c.useState)(S)
              , z = Object(u.a)(L, 2)
              , V = z[0]
              , P = z[1];
            Object(c.useEffect)(function() {
                return function() {
                    T(1),
                    d(0)
                }
            }, []),
            Object(c.useEffect)(function() {
                var t = []
                  , e = 0;
                S.forEach(function(a) {
                    var r = a.babyMovements.filter(function(t) {
                        return -1 !== i.indexOf(t.movementType)
                    });
                    r.length > 0 && (e += r.length + 1,
                    t.push({
                        calendarDate: a.calendarDate,
                        babyMovements: r
                    }))
                }),
                d(l + e),
                R(t)
            }, [i]),
            Object(c.useEffect)(function() {
                if (l > 10) {
                    if (!E && l > 0) {
                        var t = []
                          , e = 0;
                        O.forEach(function(a) {
                            (e += a.babyMovements.length + 1) <= 10 * f && t.push(a)
                        }),
                        P(t)
                    }
                } else
                    P(O)
            }, [E, O]);
            var F = Object(A.n)(e.snapshots, r, s);
            return h.a.createElement("div", null, 0 === l && h.a.createElement("div", {
                className: D.a.noDataState
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "no_baby_movement_logged"
            })), l > 0 && h.a.createElement(h.a.Fragment, null, h.a.createElement("div", {
                className: D.a.listHeader
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_baby_movement"
            })), h.a.createElement("table", {
                className: D.a.table
            }, h.a.createElement("thead", null, h.a.createElement("tr", {
                className: D.a.row
            }, h.a.createElement("th", {
                align: "left",
                className: D.a.thick
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_type"
            })), h.a.createElement("th", {
                align: "left",
                className: D.a.thick
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_start_time"
            })), h.a.createElement("th", {
                align: "left",
                className: D.a.thick
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_end_time"
            })), h.a.createElement("th", {
                align: "left",
                className: D.a.thick
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_duration"
            })), h.a.createElement("th", {
                align: "left",
                className: D.a.thick
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_movements"
            })))), h.a.createElement("tbody", null, k(V, F)))))
        })
          , Y = a(3257)
          , H = a.n(Y)
          , W = function(t, e) {
            return t.map(function(t, a) {
                return h.a.createElement(h.a.Fragment, {
                    key: a
                }, h.a.createElement("tr", {
                    key: t.calendarDate
                }, U(t, e)), h.a.createElement("tr", {
                    key: "".concat(a, "-").concat(t.calendarDate),
                    className: D.a.dataRow
                }, h.a.createElement("td", {
                    className: H.a.notesContainer
                }, h.a.createElement("div", {
                    className: H.a.notes
                }, t.notes))))
            })
        }
          , U = function(t, e) {
            var a = g()(t.calendarDate, _.a.LINK_FORMAT).toDate()
              , i = _.a.formatMonthDayYear(a)
              , r = "";
            if (e) {
                var s = Object(A.t)(a, e.pregnancyCycleStart);
                r = "(".concat(m.a.t("pregnancy:lbl_week_and_day", {
                    0: s.numberOfWeek,
                    1: s.daysInWeek
                }), ")")
            }
            return h.a.createElement("td", {
                key: i
            }, h.a.createElement("div", {
                className: H.a.dateContainer
            }, h.a.createElement("a", {
                className: "colored ".concat(D.a.link),
                title: i,
                onClick: function() {
                    y.default.navigate("/pregnancy-detail/".concat(t.calendarDate))
                }
            }, "".concat(i, " ").concat(r))))
        }
          , j = Object(f.c)(["pregnancy"])(function(t) {
            var e = t.model
              , a = Object(c.useState)(0)
              , i = Object(u.a)(a, 2)
              , r = i[0]
              , s = i[1]
              , n = Object(c.useState)(1)
              , o = Object(u.a)(n, 2)
              , l = o[0]
              , d = o[1]
              , p = b(function() {
                10 * l < r && (T(!1),
                d(l + 1))
            }, document.querySelector(".main-body"), 500)
              , m = Object(u.a)(p, 2)
              , f = m[0]
              , T = m[1]
              , y = Object(c.useState)(function() {
                if (e.dailyLogs) {
                    var t = e.dailyLogs.filter(function(t) {
                        return null !== t.notes
                    }).map(function(t) {
                        return {
                            calendarDate: t.calendarDate,
                            notes: t.notes
                        }
                    });
                    return t.sort(function(t, e) {
                        return g()(e.calendarDate, _.a.LINK_FORMAT).toDate() - g()(t.calendarDate, _.a.LINK_FORMAT).toDate()
                    }),
                    s(2 * t.length),
                    t
                }
                return []
            })
              , C = Object(u.a)(y, 1)[0]
              , E = Object(c.useState)(C)
              , I = Object(u.a)(E, 2)
              , x = I[0]
              , S = I[1];
            Object(c.useEffect)(function() {
                return function() {
                    d(1),
                    s(0)
                }
            }, []),
            Object(c.useEffect)(function() {
                if (r > 10) {
                    if (!f && r > 0) {
                        var t = []
                          , e = 0;
                        C.forEach(function(a) {
                            (e += 1) <= 10 * l && t.push(a)
                        }),
                        S(t)
                    }
                } else
                    S(C)
            }, [f, r]);
            var M = Object(A.o)(e.snapshots);
            return h.a.createElement("div", null, 0 === r && h.a.createElement("div", {
                className: D.a.noDataState
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "no_notes_added"
            })), h.a.createElement("table", {
                className: H.a.table
            }, h.a.createElement("tbody", null, W(x, M))))
        })
          , $ = a(3259)
          , K = a.n($)
          , X = function(t) {
            var e = t.startDate
              , a = t.endDate
              , i = t.selectedReport
              , r = t.model
              , s = t.bmFilter
              , n = t.glucoseFilter
              , o = t.userSettings
              , l = "-1" !== i && "symptoms" !== i;
            return h.a.createElement(h.a.Fragment, null, l && h.a.createElement("div", {
                className: K.a.listContainer
            }, "blood_glucose" === i && h.a.createElement(L, {
                model: r,
                filter: n,
                userSettings: o,
                startDate: e,
                endDate: a
            }), "baby_movement" === i && h.a.createElement(B, {
                model: r,
                filter: s,
                startDate: e,
                endDate: a
            }), "notes" === i && h.a.createElement(j, {
                model: r
            })))
        }
          , q = a(166)
          , Z = a(1260)
          , Q = a.n(Z)
          , J = a(1245)
          , tt = a(46)
          , et = a(2446)
          , at = a.n(et)
          , it = Object(f.c)(["pregnancy", "common", "menstrual-cycle-tracking"])(function(t) {
            var e = t.model
              , a = t.startDate
              , i = t.endDate
              , r = t.glucoseFilter
              , s = t.onFilterChanged
              , n = t.userSettings
              , o = {
                BEFOREMEAL: {
                    key: "BEFOREMEAL",
                    trans: Object(z.b)("pregnancy:pregnancy_glucose_logtype_BEFOREMEAL")
                },
                AFTERMEAL: {
                    key: "AFTERMEAL",
                    trans: Object(z.b)("pregnancy:pregnancy_glucose_logtype_AFTERMEAL")
                },
                BEFOREBED: {
                    key: "BEFOREBED",
                    trans: Object(z.b)("pregnancy:pregnancy_glucose_logtype_BEFOREBED")
                },
                OTHER: {
                    key: "OTHER",
                    trans: Object(z.b)("pregnancy:pregnancy_glucose_logtype_OTHER")
                }
            }
              , l = Object(c.useState)(function() {
                if (e.glucoseList) {
                    var t = e.glucoseList.sort(function(t, e) {
                        return g()(e.calendarDate, _.a.LINK_FORMAT).toDate() - g()(t.calendarDate, _.a.LINK_FORMAT).toDate()
                    })
                      , a = C(t, function(t) {
                        return g()(t.calendarDate, _.a.LINK_FORMAT).format(_.a.LINK_FORMAT)
                    });
                    return Object.keys(a).forEach(function(t) {
                        a[t] = a[t].map(function(t) {
                            return Object(d.a)({}, t, {
                                personalizedLevel: Object(A.l)(t.value, n.userData.glucoseMeasurementUnit)
                            })
                        }),
                        a[t] = Object(A.H)(a[t])
                    }),
                    a
                }
                return {}
            })
              , p = Object(u.a)(l, 1)[0]
              , m = Object(c.useState)(p)
              , f = Object(u.a)(m, 2)
              , v = f[0]
              , y = f[1]
              , b = Object(c.useState)(function() {
                return r
            })
              , E = Object(u.a)(b, 2)
              , D = E[0]
              , I = E[1];
            Object(c.useEffect)(function() {
                var t = {};
                Object.keys(p).forEach(function(e) {
                    var a = p[e].filter(function(t) {
                        return -1 !== D.indexOf(t.logType)
                    });
                    a.length > 0 && (t[e] = a)
                }),
                y(t)
            }, [D]);
            var x = Object(A.n)(e.snapshots, a, i)
              , S = A.v.find(function(t) {
                return t.value === n.userData.glucoseMeasurementUnit
            }).label_translation
              , M = function() {
                var t = []
                  , e = {
                    name: o.BEFOREMEAL.trans,
                    color: tt.color_419,
                    data: D.includes(o.BEFOREMEAL.key) ? w(v, o.BEFOREMEAL.key) : []
                }
                  , a = {
                    name: o.AFTERMEAL.trans,
                    color: tt.violet_primary,
                    data: D.includes(o.AFTERMEAL.key) ? w(v, o.AFTERMEAL.key) : []
                }
                  , i = {
                    name: o.BEFOREBED.trans,
                    color: tt.blue_light_2,
                    data: D.includes(o.BEFOREBED.key) ? w(v, o.BEFOREBED.key) : []
                }
                  , r = {
                    name: o.OTHER.trans,
                    color: tt.darkui_accent_2,
                    data: D.includes(o.OTHER.key) ? w(v, o.OTHER.key) : []
                };
                return e.data.length > 0 && t.push(e),
                a.data.length > 0 && t.push(a),
                i.data.length > 0 && t.push(i),
                r.data.length > 0 && t.push(r),
                t
            }
              , w = function(t, e) {
                for (var r = g()(i).diff(g()(a), "days"), s = [], n = 0; n < r; n++)
                    s.push(null);
                var o = !1;
                return Object.keys(t).forEach(function(i) {
                    var r = t[i].filter(function(t) {
                        return t.logType === e
                    });
                    if (r.length > 0) {
                        var n = g()(i).diff(g()(a), "days")
                          , l = "";
                        if (x) {
                            var c = Object(A.t)(i, x.pregnancyCycleStart);
                            l = "(".concat(Object(z.b)("pregnancy:lbl_week_and_day", {
                                0: c.numberOfWeek,
                                1: c.daysInWeek
                            }), ")")
                        }
                        var h = r.reduce(function(t, e, a, i) {
                            return t += e.personalizedLevel,
                            a === i.length - 1 ? t / i.length : t
                        }, 0);
                        s[n] = {
                            x: n,
                            y: h,
                            dayInWeek: l
                        },
                        o = !0
                    }
                }),
                o || (s = []),
                s
            }
              , O = function(t, e, a, i, r) {
                return Q.a.renderToString(h.a.createElement("table", {
                    style: {
                        width: "100%"
                    }
                }, h.a.createElement("tr", null, h.a.createElement("td", {
                    style: {
                        textAlign: "left"
                    }
                }, h.a.createElement("strong", null, "".concat(_.a.formatMonthDay(new Date(t[2])), " ").concat(a)))), h.a.createElement("tr", null, h.a.createElement("td", {
                    style: {
                        textAlign: "left"
                    }
                }, "".concat(Object(z.b)("common:lbl_avg_abbr"), " ").concat(i, " - ").concat(T.a.personalizeBloodGlucose(e, n.userData.glucoseMeasurementUnit), " ").concat(r)))))
            }
              , R = function() {
                return g()(i).diff(g()(a), "days")
            }
              , L = function() {
                for (var t = [], e = g()(a), r = g()(i).diff(e, "days") + 1, s = 1; s <= r; s++) {
                    var n = Number(V(e.valueOf()))
                      , o = Number(k(e.valueOf()));
                    t.push([o, n, e.valueOf()]),
                    e.add(1, "day")
                }
                return t
            }
              , V = function(t) {
                var e = new Date(t).getDate();
                return e < 10 ? "0" + e : e
            }
              , k = function(t) {
                var e = new Date(t).getDay() + 1;
                return Number(e)
            };
            return p && Object.keys(p).length > 0 ? h.a.createElement(h.a.Fragment, null, h.a.createElement(J.a, {
                config: function() {
                    var t = Object(z.b)("menstrual-cycle-tracking:".concat(S));
                    return {
                        chart: {
                            height: 400,
                            marginBottom: 100,
                            marginTop: 65
                        },
                        plotOptions: {
                            series: {
                                animation: !1,
                                marker: {
                                    enabled: !0,
                                    symbol: "circle"
                                },
                                events: {
                                    legendItemClick: function() {
                                        return !1
                                    }
                                }
                            }
                        },
                        title: {
                            text: ""
                        },
                        xAxis: {
                            categories: L(),
                            min: 0,
                            max: R(),
                            labels: {
                                x: 0,
                                formatter: function() {
                                    return _.a.formatMonthDay(new Date(this.value[2]))
                                }
                            }
                        },
                        yAxis: {
                            title: {
                                text: t,
                                style: {
                                    fontSize: "12px",
                                    color: tt.darkui_accent_2
                                }
                            },
                            labels: {
                                style: {
                                    fontSize: "9px"
                                },
                                x: -10,
                                formatter: function() {
                                    return T.a.personalizeBloodGlucose(this.value, n.userData.glucoseMeasurementUnit)
                                }
                            },
                            startOnTick: !0
                        },
                        series: M(),
                        tooltip: {
                            formatter: function() {
                                return O(this.x, this.y, this.point.dayInWeek, this.series.name, t)
                            },
                            useHTML: !0
                        },
                        credits: {
                            enabled: !1
                        },
                        exporting: {
                            enabled: !1
                        }
                    }
                }()
            }), h.a.createElement("div", {
                className: at.a.chipContainer
            }, function() {
                var t = [];
                return Object.keys(o).forEach(function(e) {
                    for (var a = Object.keys(p), i = 0; i < a.length; i++)
                        if (p[a[i]].find(function(t) {
                            return t.logType === e
                        })) {
                            t.push(o[e].key);
                            break
                        }
                }),
                h.a.createElement(h.a.Fragment, null, t.map(function(t, e) {
                    return h.a.createElement(q.Chip, {
                        chipContent: o[t].trans,
                        chipType: t,
                        isSelected: D.includes(t),
                        onToggleChip: function() {
                            if (D.includes(t)) {
                                var e = D.filter(function(e) {
                                    return e !== t
                                });
                                s(e),
                                I(e)
                            } else
                                s([].concat(Object(N.a)(D), [t])),
                                I([].concat(Object(N.a)(D), [t]))
                        },
                        key: "".concat(t).concat(e)
                    })
                }))
            }())) : null
        })
          , rt = Object(f.c)(["pregnancy", "common"])(function(t) {
            var e = t.model
              , a = t.startDate
              , i = t.endDate
              , r = t.bmFilter
              , s = t.onFilterChanged
              , n = {
                GENERAL: {
                    key: "GENERAL",
                    trans: Object(z.b)("pregnancy:movement_type_general")
                },
                KICKS: {
                    key: "KICKS",
                    trans: Object(z.b)("pregnancy:movement_type_kicks")
                },
                HICCUPS: {
                    key: "HICCUPS",
                    trans: Object(z.b)("pregnancy:movement_type_hiccups")
                }
            }
              , o = Object(c.useState)(function() {
                if (e.dailyLogs) {
                    var t = [];
                    return e.dailyLogs.forEach(function(e) {
                        e.babyMovements.length > 0 && t.push({
                            calendarDate: e.calendarDate,
                            babyMovements: Object(A.G)(Object(N.a)(e.babyMovements))
                        })
                    }),
                    t.sort(function(t, e) {
                        return g()(e.calendarDate, _.a.LINK_FORMAT).toDate() - g()(t.calendarDate, _.a.LINK_FORMAT).toDate()
                    }),
                    t
                }
                return []
            })
              , l = Object(u.a)(o, 1)[0]
              , d = Object(c.useState)(l)
              , p = Object(u.a)(d, 2)
              , m = p[0]
              , f = p[1]
              , v = Object(c.useState)(function() {
                return r
            })
              , T = Object(u.a)(v, 2)
              , y = T[0]
              , C = T[1];
            Object(c.useEffect)(function() {
                var t = [];
                l.forEach(function(e) {
                    var a = e.babyMovements.filter(function(t) {
                        return -1 !== y.indexOf(t.movementType)
                    });
                    a.length > 0 && t.push({
                        calendarDate: e.calendarDate,
                        babyMovements: a
                    })
                }),
                f(t)
            }, [y]);
            var b = Object(A.n)(e.snapshots, a, i)
              , E = function() {
                var t = []
                  , e = {
                    name: n.GENERAL.trans,
                    color: tt.blue_primary,
                    data: y[0] === n.GENERAL.key ? D(m) : []
                }
                  , a = {
                    name: n.HICCUPS.trans,
                    color: tt.purple_primary,
                    data: y[0] === n.HICCUPS.key ? D(m) : []
                }
                  , i = {
                    name: n.KICKS.trans,
                    color: tt.teal_primary,
                    data: y[0] === n.KICKS.key ? D(m) : []
                };
                return e.data.length > 0 && t.push(e),
                a.data.length > 0 && t.push(a),
                i.data.length > 0 && t.push(i),
                t
            }
              , D = function(t) {
                for (var e = g()(i).diff(g()(a), "days"), r = [], s = 0; s < e; s++)
                    r.push(null);
                return t.forEach(function(t) {
                    var e = g()(t.calendarDate).diff(g()(a), "days")
                      , i = "";
                    if (b) {
                        var s = Object(A.t)(t.calendarDate, b.pregnancyCycleStart);
                        i = "(".concat(Object(z.b)("pregnancy:lbl_week_and_day", {
                            0: s.numberOfWeek,
                            1: s.daysInWeek
                        }), ")")
                    }
                    var n = t.babyMovements.reduce(function(t, e, a, i) {
                        return t += e.count,
                        a === i.length - 1 ? t / i.length : t
                    }, 0)
                      , o = t.babyMovements.reduce(function(t, e, a, i) {
                        return t += e.duration,
                        a === i.length - 1 ? t / i.length : t
                    }, 0);
                    r[e] = {
                        x: e,
                        y: n,
                        duration: o,
                        dayInWeek: i
                    }
                }),
                r
            }
              , I = function(t, e, a, i, r) {
                return Q.a.renderToString(h.a.createElement("table", {
                    style: {
                        width: "100%"
                    }
                }, h.a.createElement("tr", null, h.a.createElement("td", {
                    style: {
                        textAlign: "left"
                    }
                }, h.a.createElement("strong", null, "".concat(_.a.formatMonthDay(new Date(t[2])), " ").concat(i)))), h.a.createElement("tr", null, h.a.createElement("td", {
                    style: {
                        textAlign: "left"
                    }
                }, "".concat(Object(z.b)("common:lbl_avg_abbr"), " ").concat(r, " - ").concat(Math.round(e)))), h.a.createElement("tr", null, h.a.createElement("td", {
                    style: {
                        textAlign: "left"
                    }
                }, "".concat(Object(z.b)("pregnancy:avg_movement_duration"), " - ").concat(V.a.formatDescriptiveDuration(a, !0))))))
            }
              , x = function() {
                return g()(i).diff(g()(a), "days")
            }
              , S = function() {
                for (var t = [], e = g()(a), r = g()(i).diff(e, "days") + 1, s = 1; s <= r; s++) {
                    var n = Number(M(e.valueOf()))
                      , o = Number(w(e.valueOf()));
                    t.push([o, n, e.valueOf()]),
                    e.add(1, "day")
                }
                return t
            }
              , M = function(t) {
                var e = new Date(t).getDate();
                return e < 10 ? "0" + e : e
            }
              , w = function(t) {
                var e = new Date(t).getDay() + 1;
                return Number(e)
            };
            return l && l.length > 0 ? h.a.createElement(h.a.Fragment, null, m && m.length > 0 && h.a.createElement(J.a, {
                config: function() {
                    var t = Object(z.b)("pregnancy:lbl_movements");
                    return {
                        chart: {
                            height: 400,
                            marginBottom: 100,
                            marginTop: 65
                        },
                        plotOptions: {
                            series: {
                                animation: !1,
                                marker: {
                                    enabled: !0,
                                    symbol: "circle"
                                },
                                events: {
                                    legendItemClick: function() {
                                        return !1
                                    }
                                }
                            }
                        },
                        title: {
                            text: ""
                        },
                        xAxis: {
                            categories: S(),
                            min: 0,
                            max: x(),
                            labels: {
                                x: 0,
                                formatter: function() {
                                    return _.a.formatMonthDay(new Date(this.value[2]))
                                }
                            }
                        },
                        yAxis: {
                            title: {
                                text: t,
                                style: {
                                    fontSize: "12px",
                                    color: tt.darkui_accent_2
                                }
                            },
                            labels: {
                                style: {
                                    fontSize: "9px"
                                },
                                x: -10
                            },
                            startOnTick: !0
                        },
                        series: E(),
                        tooltip: {
                            formatter: function() {
                                return I(this.x, this.y, this.point.duration, this.point.dayInWeek, this.series.name)
                            },
                            useHTML: !0
                        },
                        credits: {
                            enabled: !1
                        },
                        exporting: {
                            enabled: !1
                        }
                    }
                }()
            }), h.a.createElement("div", {
                className: at.a.chipContainer
            }, function() {
                var t = [];
                return Object.keys(n).forEach(function(e) {
                    l.find(function(t) {
                        return t.babyMovements.find(function(t) {
                            return t.movementType === e
                        })
                    }) && t.push(n[e].key)
                }),
                h.a.createElement(h.a.Fragment, null, t.map(function(t, e) {
                    return h.a.createElement(q.Chip, {
                        chipContent: n[t].trans,
                        chipType: t,
                        isSelected: t === y[0],
                        onToggleChip: function() {
                            C([t]),
                            s([t])
                        },
                        key: "".concat(t).concat(e)
                    })
                }))
            }())) : null
        })
          , st = a(73)
          , nt = a(1608)
          , ot = a.n(nt)
          , lt = a(3262)
          , ct = a.n(lt)
          , ht = function(t, e, a, i, r) {
            for (var s = [], n = 7 * Math.ceil(g()(a, _.a.LINK_FORMAT).diff(g()(e, _.a.LINK_FORMAT), "week", !0)), o = 0, l = 0; l < n; l++) {
                var c = void 0
                  , d = void 0
                  , u = ""
                  , p = l % 7 === 0 && r
                  , m = !1
                  , f = l === n - 1 && r;
                e && (c = g()(e).add(l, "d").format(_.a.LINK_FORMAT),
                d = -1 !== t.indexOf(c)),
                p && (o = 0,
                m = !1),
                r && o++,
                4 === o && (m = !0,
                u = h.a.createElement("span", {
                    className: ct.a.chartLabel
                }, h.a.createElement(v.a, {
                    ns: "pregnancy",
                    params: {
                        0: i++
                    },
                    content: "number_of_weeks"
                }))),
                s.push(h.a.createElement("td", {
                    key: l,
                    className: "\n                    ".concat(f || p ? ot.a.isOnLastLine : "", "\n                    ").concat(m ? ct.a.isOnLastLine : "", "\n                    ").concat(ot.a.symptomBox, "\n                    ").concat(d ? ot.a.isLoggedSymptomDay : "", "\n                    ").concat(ot.a.borderedSymptomBox, "\n                ")
                }, u))
            }
            return s
        }
          , dt = function(t) {
            return t ? t.replace("([A-Z])", "_$1").toLowerCase() : null
        }
          , ut = function(t) {
            var e = t.isLast
              , a = t.data
              , i = t.startDate
              , r = t.lineTitle
              , s = t.firstNumberOfWeek
              , n = t.endDate
              , o = dt(r);
            return h.a.createElement("div", {
                className: ot.a.chartLineInner
            }, h.a.createElement("div", {
                className: ot.a.lineTitle
            }, o ? h.a.createElement(v.a, {
                ns: "menstrual-cycle-tracking",
                content: o
            }) : ""), h.a.createElement("div", {
                className: ot.a.lineContent
            }, h.a.createElement("table", {
                className: ot.a.lineContentTable
            }, h.a.createElement("tbody", null, h.a.createElement("tr", null, ht(a, i, n, s, e))))))
        }
          , pt = function(t, e, a, i) {
            var r = []
              , s = Object.keys(t)[Object.keys(t).length - 1];
            for (var n in t)
                r.push(h.a.createElement(ut, {
                    isLast: n === s,
                    data: t[n],
                    startDate: e,
                    endDate: a,
                    key: n,
                    lineTitle: n,
                    firstNumberOfWeek: i
                }));
            return r
        }
          , gt = function(t) {
            var e = t.data
              , a = t.title
              , i = t.startDate
              , r = t.endDate
              , s = t.firstNumberOfWeek
              , n = a.replace("([A-Z])", "_$1").toLowerCase();
            return h.a.createElement("div", {
                className: "".concat(ot.a.chartContainer, " ").concat(ot.a[a])
            }, h.a.createElement("p", {
                className: ot.a.chartTitle
            }, h.a.createElement(v.a, {
                ns: "menstrual-cycle-tracking",
                content: n
            })), h.a.createElement("div", {
                className: ot.a.symptomsReportsChart
            }, pt(e, i, r, s)))
        }
          , mt = function(t, e, a, i) {
            var r = [];
            if (t.dailyLogs) {
                var s = Object(st.b)([t]);
                for (var n in s = ft(s))
                    r.push(h.a.createElement(gt, {
                        alternativeStartDate: e,
                        endDate: a,
                        startDate: e,
                        data: s[n],
                        key: n,
                        title: n,
                        firstNumberOfWeek: i
                    }))
            }
            return r
        }
          , ft = function(t) {
            var e = Object(d.a)({}, t)
              , a = {};
            return Object.keys(e).forEach(function(t) {
                var i = e[t];
                Object(st.L)(Object.keys(i), t).forEach(function(t) {
                    a[t] = i[t]
                }),
                e[t] = Object(d.a)({}, a),
                a = {}
            }),
            e
        }
          , vt = function(t) {
            var e = t.model
              , a = t.startDate
              , i = t.endDate
              , r = [];
            if (e.dailyLogs) {
                var s = Object(A.n)(e.snapshots, a, i)
                  , n = -1;
                s && (n = Object(A.t)(a, s.pregnancyCycleStart).numberOfWeek),
                r = mt(e, a, i, n)
            }
            return h.a.createElement("div", null, 0 === r.length && h.a.createElement("div", {
                className: D.a.noDataState
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "no_symptoms_logged"
            })), r.length > 0 && r)
        }
          , Tt = a(3264)
          , _t = a.n(Tt)
          , At = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-1"
              , a = arguments.length > 2 ? arguments[2] : void 0;
            return h.a.createElement(q.Dropdown, {
                key: e,
                value: e,
                onChange: function(t) {
                    a(t.value)
                },
                full: !0
            }, yt(t))
        }
          , yt = function(t) {
            var e = [];
            return e.push(h.a.createElement(q.DropdownItem, {
                key: "-1",
                value: "-1"
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_select_report"
            }))),
            t.indexOf("lbl_pregnancy_symptoms") > -1 && e.push(h.a.createElement(q.DropdownItem, {
                key: "symptoms",
                value: A.f.Symptoms
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_pregnancy_symptoms"
            }))),
            t.indexOf("lbl_blood_glucose") > -1 && e.push(h.a.createElement(q.DropdownItem, {
                key: "blood_glucose",
                value: A.f.BloodGlucose
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_blood_glucose"
            }))),
            t.indexOf("lbl_baby_movement") > -1 && e.push(h.a.createElement(q.DropdownItem, {
                key: "baby_movement",
                value: A.f.BabyMovements
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_baby_movement"
            }))),
            t.indexOf("lbl_pregnancy_notes") > -1 && e.push(h.a.createElement(q.DropdownItem, {
                key: "notes",
                value: A.f.Notes
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_pregnancy_notes"
            }))),
            e
        }
          , Ct = function(t) {
            var e = t.startDate
              , a = t.endDate
              , i = t.onReportSelected
              , r = t.model
              , s = t.bmFilter
              , n = t.glucoseFilter
              , o = t.onBMFilterChanged
              , l = t.onGlucoseFilterChanged
              , d = t.userSettings
              , p = t.selectedReport
              , g = Object(c.useState)(p)
              , m = Object(u.a)(g, 2)
              , f = m[0]
              , T = m[1]
              , _ = function(t) {
                T(t),
                i(t)
            }
              , y = {
                lbl_pregnancy_symptoms: d.userMenstrualCycleSettings.dischargeTracking || d.userMenstrualCycleSettings.sexDriveTracking || d.userMenstrualCycleSettings.sexualActivityTracking || d.userMenstrualCycleSettings.physicalSymptomsTracking || d.userMenstrualCycleSettings.moodTracking,
                lbl_blood_glucose: d.userMenstrualCycleSettings.glucoseTracking,
                lbl_baby_movement: d.userMenstrualCycleSettings.babyMovementTracking,
                lbl_pregnancy_notes: !0
            }
              , C = Object.keys(y).filter(function(t) {
                return y[t]
            });
            return Object(c.useEffect)(function() {
                if (!f && C.length > 0)
                    switch (C[0]) {
                    case "lbl_pregnancy_symptoms":
                        _(A.f.Symptoms);
                        break;
                    case "lbl_baby_movement":
                        _(A.f.BabyMovements);
                        break;
                    case "lbl_blood_glucose":
                        _(A.f.BloodGlucose)
                    }
            }, []),
            h.a.createElement("div", {
                className: _t.a.mainContainer
            }, 1 === C.length && h.a.createElement("div", {
                className: _t.a.singleHeader
            }, h.a.createElement("h5", null, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: C[0]
            }))), C.length > 1 && h.a.createElement("div", {
                className: _t.a.dropDownContainer
            }, At(C, f || "-1", _)), f !== A.f.Notes && "-1" !== f && h.a.createElement("div", {
                className: _t.a.chartContainer
            }, f === A.f.BloodGlucose && h.a.createElement(it, {
                model: r,
                startDate: e,
                endDate: a,
                glucoseFilter: n,
                onFilterChanged: function(t) {
                    l(t)
                },
                userSettings: d
            }), f === A.f.BabyMovements && h.a.createElement(rt, {
                model: r,
                startDate: e,
                endDate: a,
                bmFilter: s,
                onFilterChanged: function(t) {
                    o(t)
                }
            }), f === A.f.Symptoms && h.a.createElement(vt, {
                model: r,
                startDate: e,
                endDate: a
            })))
        }
          , bt = function() {
            return h.a.createElement("div", null, h.a.createElement("div", {
                className: D.a.noDataState
            }, h.a.createElement(v.a, {
                ns: "pregnancy",
                content: "lbl_no_pregnancy_data"
            })))
        }
          , Et = a(3266)
          , Dt = a.n(Et)
          , It = {
            baby_movement: !0,
            blood_glucose: !0,
            symptoms: !1,
            notes: !1
        };
        e.a = o.a.View.extend({
            template: s.a.template(Dt.a),
            initialize: function(t) {
                this.userSettings = t.userSettings,
                this.metrics = t.metrics,
                this.currentBMFilter = this.setInitialBMFilter(),
                this.currentGlucoseFilter = this.setInitialGlucoseFilter(),
                this.currentSelectedReport = t.selectedReport,
                this.onReportChange = t.onReportChange,
                this.endDate = t.endDate,
                this.startDate = t.startDate,
                this.showEmptyState = t.showEmptyState
            },
            render: function() {
                var t = this;
                this.$el.html(this.template({
                    Localizer: i.a
                }));
                this.showEmptyState ? (new l.a).renderComponent(bt, this.$("#pregnancy-empty-state-placeholder")[0], {}) : (this.reactChartComponent = new l.a,
                this.reactChartComponent.renderComponent(Ct, this.$("#pregnancy-chart-placeholder")[0], {
                    startDate: this.startDate,
                    endDate: this.endDate,
                    onReportSelected: function(e) {
                        t.currentSelectedReport = e,
                        It.hasOwnProperty(e) && t.onReportChange(It[e]),
                        t.renderListView(t.currentSelectedReport)
                    },
                    model: this.metrics,
                    userSettings: this.userSettings,
                    bmFilter: this.currentBMFilter,
                    glucoseFilter: this.currentGlucoseFilter,
                    selectedReport: this.currentSelectedReport,
                    onBMFilterChanged: function(e) {
                        t.currentBMFilter = e,
                        t.renderListView(t.currentSelectedReport)
                    },
                    onGlucoseFilterChanged: function(e) {
                        t.currentGlucoseFilter = e,
                        t.renderListView(t.currentSelectedReport)
                    }
                }),
                this.renderListView(this.currentSelectedReport))
            },
            update: function(t) {
                this.startDate = t.startDate,
                this.endDate = t.endDate,
                this.metrics = t.metrics,
                this.showEmptyState = t.showEmptyState,
                this.currentBMFilter = this.setInitialBMFilter(),
                this.reactChartComponent && this.reactChartComponent.removeComponent(),
                this.render()
            },
            renderListView: function(t) {
                this.reactListComponent && this.reactListComponent.removeComponent(),
                this.reactListComponent = new l.a,
                this.reactListComponent.renderComponent(X, this.$("#pregnancy-list-view-placeholder")[0], {
                    startDate: this.startDate,
                    endDate: this.endDate,
                    selectedReport: t,
                    bmFilter: this.currentBMFilter,
                    glucoseFilter: this.currentGlucoseFilter,
                    model: this.metrics,
                    userSettings: this.userSettings
                })
            },
            setInitialBMFilter: function() {
                for (var t = ["GENERAL", "KICKS", "HICCUPS"], e = ["GENERAL"], a = this.metrics.dailyLogs, i = !1, r = function(r) {
                    if (a) {
                        for (var s = 0; s < a.length; s++) {
                            var n = a[s].babyMovements;
                            if (i = n.find(function(e) {
                                return e.movementType === t[r]
                            })) {
                                e = [t[r]];
                                break
                            }
                        }
                        if (i)
                            return "break"
                    }
                }, s = 0; s < t.length; s++) {
                    if ("break" === r(s))
                        break
                }
                return e
            },
            setInitialGlucoseFilter: function() {
                return ["BEFOREMEAL", "AFTERMEAL", "BEFOREBED", "OTHER"]
            }
        })
    },
    5078: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = a(1450)
          , n = r.a.Collection.extend({
            model: s.a,
            url: function() {
                for (var t = "", e = "", a = 0; a < this.metricIdList.length; a++)
                    t += "&metricId=" + this.metricIdList[a];
                for (var i = 0; i < this.activityIdList.length; i++)
                    e += "&actTypeId=" + this.activityIdList[i];
                switch (this.metricPeriod) {
                case "daily":
                    return "/proxy/userstats-service/" + this.metricType + "/daily/" + this.getDisplayName() + "?fromDate=" + this.startDate + "&untilDate=" + this.untilDate + t + "&grpParentActType=" + this.groupResults + e;
                case "weekly":
                    return "/proxy/userstats-service/" + this.metricType + "/weekly/" + this.getDisplayName() + "?fromWeekStartDate=" + this.startDate + "&untilWeekStartDate=" + this.untilDate + t + "&grpParentActType=" + this.groupResults + e;
                case "monthly":
                case "yearly":
                    return "/proxy/userstats-service/" + this.metricType + "/monthly/" + this.getDisplayName() + "?fromMonthStartDate=" + this.startDate + "&untilMonthStartDate=" + this.untilDate + t + "&grpParentActType=" + this.groupResults + e;
                default:
                    return "/proxy/userstats-service/" + this.metricType + "/all/" + this.getDisplayName() + "?fromDate=" + this.startDate + "&untilDate=" + this.untilDate + t + "&grpParentActType=" + this.groupResults + e
                }
            },
            initialize: function(t) {
                this.metricType = t.metricType,
                this.metricPeriod = t.metricPeriod,
                this.startDate = t.startDate,
                this.untilDate = t.untilDate,
                this.groupResults = t.groupResults,
                this.metricIdList = t.metricIdList,
                this.activityIdList = t.activityIdList,
                this.displayName = t.displayName
            },
            setDisplayName: function(t) {
                this.displayName = t
            },
            getDisplayName: function() {
                return this.displayName
            },
            parse: function(t) {
                return this.groupResults ? t.groupedMetrics : t.allMetrics
            }
        })
          , o = a(13)
          , l = (a(23),
        a(371))
          , c = a(1717)
          , h = a(15)
          , d = a.n(h)
          , u = r.a.Collection.extend({
            initialize: function(t) {
                if (t)
                    for (var e in t)
                        t.hasOwnProperty(e) && (this[e] = t[e]);
                var a = c.a[this.duration];
                this.duration === c.a.yearly ? this.duration = c.a.monthly : this.duration = a || c.a.daily,
                this.postInitialize.call(this)
            },
            postInitialize: function() {
                return this
            },
            getAggregationMethod: function() {
                switch (this.duration) {
                case c.a.weekly:
                    return this.getWeekly;
                case c.a.monthly:
                case c.a.yearly:
                    return this.getMonthly;
                default:
                    return this.getDaily
                }
            },
            getDaily: function(t, e, a) {
                return {
                    value: this.getValue(e, a),
                    calendarDate: t,
                    additionalValue: this.getAdditionalValue(e),
                    additionalLabelKey: this.getadditionalLabelKey()
                }
            },
            getWeekly: function(t, e, a) {
                return {
                    value: this.getValue(e, a),
                    startDateOfWeek: t,
                    additionalValue: this.getAdditionalValue(e),
                    additionalLabelKey: this.getadditionalLabelKey()
                }
            },
            getMonthly: function(t, e, a) {
                return {
                    value: this.getValue(e, a),
                    month: this.getMonthlyMonthObject(t),
                    additionalValue: this.getAdditionalValue(e),
                    additionalLabelKey: this.getadditionalLabelKey()
                }
            },
            getValue: function(t, e) {
                var a = t[this.getValueSelector()]
                  , i = this.getConverter();
                return i && (a = i.apply(o.a, this.getConverterParams(e, a))),
                a
            },
            getConverter: function() {
                var t = l.a[this.reportType];
                return t && t.converter ? t.converter : null
            },
            getConverterParams: function(t, e) {
                return [e]
            },
            getValueSelector: function() {
                var t = l.a[this.reportType];
                return t && t.valueSelector ? t.valueSelector : "avg"
            },
            getAdditionalValue: function(t) {
                var e = l.a[this.reportType];
                return e && e.additionalValueSelector ? t[e.additionalValueSelector] : null
            },
            getadditionalLabelKey: function() {
                var t = l.a[this.reportType];
                return t && t.additionalLabelKey ? t.additionalLabelKey : null
            },
            getMonthlyMonthObject: function(t) {
                var e = d()(t);
                return {
                    key: e.format("MMM-YYYY"),
                    monthId: e.month() + 1,
                    month: e.format("MMM"),
                    year: e.year()
                }
            }
        })
          , p = a(355)
          , g = a(1302)
          , m = {
            ftp: g.a.ACTIVITY_MAX_FTP,
            lactateThresholdSpeed: g.a.ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC,
            lactateThresholdHeartRate: g.a.ACTIVITY_AVG_LACTATE_THRESHOLD_BPM
        }
          , f = u.extend({
            url: function() {
                return "/proxy/biometric-service/stats" + p.a.toQueryString({
                    aggregation: this.duration,
                    userFirstDay: this.firstDayOfWeek.dayName,
                    startDate: this.startDate,
                    endDate: this.endDate
                })
            },
            parse: function(t) {
                for (var e, a, i, r = {}, s = this.getAggregationMethod(), n = 0, o = t.length; n < o; n += 1)
                    for (var l in e = t[n].date,
                    t[n].stats)
                        t[n].stats.hasOwnProperty(l) && (i = m[l]) && (r[i] || (r[i] = []),
                        a = t[n].stats[l],
                        r[i].push(s.call(this, e, a, i)));
                return {
                    metricsMap: r
                }
            },
            getConverterParams: function(t, e) {
                switch (t) {
                case m.lactateThresholdSpeed:
                    return [e, "meter"];
                default:
                    return [e]
                }
            }
        })
          , v = ["ACTIVITY_AVERAGE_RUN_CADENCE"]
          , T = u.extend({
            url: function() {
                var t = "/proxy/fitnessstats-service/activity";
                return t += this.urlParser.convertObjectToQueryString({
                    aggregation: "daily",                       // TX GCOverrides v1.15 - detailed yearly and 6 months reports
                    userFirstDay: this.firstDayOfWeek.dayName,
                    startDate: this.startDate,
                    endDate: this.endDate,
                    groupByActivityType: this.groupByActivityType
                }),
                -1 !== v.indexOf(this.reportType) && (t += "&standardizedUnits=true"),
                this.activities && (t += "&" + this.activities),
                this.metrics && (t += "&" + this.metrics),
                t
            },
            postInitialize: function() {
                this.urlParser = new p.a,
                this.metrics = this.urlParser.convertArrayToQueryString("metric", this.getArrayOfMetricNamesFromMetricIds(this.metricIdList)),
                this.activities = this.urlParser.convertArrayToQueryString("activityType", this.getArrayOfActivityNamesFromActivityIds(this.activityIdList))
            },
            parse: function(t) {
                for (var e, a, i, r, s = {
                    metricsMap: {}
                }, n = 0, o = t.length; n < o; n += 1)
                    if (t[n])
                        for (var l in a = t[n].date,
                        t[n].stats)
                            if (t[n].stats.hasOwnProperty(l))
                                for (var c in t[n].stats[l])
                                    t[n].stats[l].hasOwnProperty(c) && (r = this.getMetric(c),
                                    e = this.getAggregationMethod(r, t[n].stats[l]),
                                    "all" === l ? (s.metricsMap || (s.metricsMap = {}),
                                    s.metricsMap[r] || (s.metricsMap[r] = []),
                                    i = s.metricsMap) : s[l] ? i = s[l].metricsMap : (s[l] = {},
                                    s[l].metricsMap = {},
                                    s[l].metricsMap[r] = [],
                                    i = s[l].metricsMap),
                                    i[r].push(e.call(this, a, t[n].stats[l][c], null, t[n].stats[l])));
                return s
            },
            getAggregationMethod: function(t) {
                switch (this.duration) {
                case c.a.weekly:
                    return this.getWeekly;
                case c.a.monthly:
                case c.a.yearly:
                    return this.getMonthly;
                default:
                    return t === g.a.ACTIVITY_AEROBIC_TRAINING_EFFECT || t === g.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT ? this.getTrainingEffectDaily : this.getDaily
                }
            },
            getArrayOfMetricNamesFromMetricIds: function(t) {
                for (var e = [], a = 0, i = t.length; a < i; a += 1)
                    if (t[a])
                        for (var r in l.a)
                            if (l.a.hasOwnProperty(r) && l.a[r].id == t[a] && l.a[r].name) {
                                e.push(l.a[r].name);
                                break
                            }
                return e
            },
            getArrayOfActivityNamesFromActivityIds: function(t) {
                for (var e = [], a = 0, i = t.length; a < i; a += 1)
                    if (t[a]) {
                        var r = this.activityTypes.findByTypeId(t[a]);
                        r && e.push(r.get("typeKey"))
                    }
                return e
            },
            getMetric: function(t) {
                var e;
                for (var a in l.a)
                    if (l.a.hasOwnProperty(a) && l.a[a].name === t && this.metricIdList.find(function(t) {
                        return t == l.a[a].id
                    })) {
                        e = a;
                        break
                    }
                return e
            },
            getTrainingEffectDaily: function(t, e, a, i) {
                return {
                    value: this.getValue(e, a),
                    calendarDate: t,
                    activityId: i.activityId.min
                }
            }
        })
          , _ = a(21)
          , A = a(1323)
          , y = {
            ACTIVITY_VO2_MAX_CYCLING: "cycling",
            ACTIVITY_VO2_MAX: "generic"
        }
          , C = u.extend({
            url: function() {
                if (this.reportType === g.a.ACTIVITY_HRV_STRESS_TEST)
                    return "/proxy/metrics-service/internal/manualstresslevel/daily/" + _.a.get("profileId") + "/" + this.startDate + "/" + this.endDate;
                var t = "/proxy/metrics-service/metrics/maxmet/".concat(this.duration, "/").concat(this.startDate, "/").concat(this.endDate);
                return this.sport && (t += "?sport=".concat(this.sport)),
                t
            },
            postInitialize: function() {
                this.duration === c.a.weekly && (this.startDate = d()(this.startDate).subtract(7, "days").format("YYYY-MM-DD"))
            },
            parse: function(t) {
                var e = {};
                return e[this.reportType] = this.convertToMetricsMap(this.reportType, t),
                "ACTIVITY_VO2_MAX" === this.reportType && (e.ACTIVITY_VO2_MAX_CYCLING = this.convertToMetricsMap("ACTIVITY_VO2_MAX_CYCLING", t)),
                {
                    metricsMap: e
                }
            },
            convertToMetricsMap: function(t, e) {
                for (var a, i = [], r = this.getAggregationMethod(), s = 0, n = e.length; s < n; s += 1) {
                    var o;
                    if (e[s])
                        if (a = this._getSelectedReport(t, e[s]))
                            o = "weekly" === this.duration ? A.a.getStartDateOfWeek(a.date, this.firstDayOfWeek.dayId) : a.date,
                            i.push(r.call(this, o, a.value))
                }
                return i
            },
            _getSelectedReport: function(t, e) {
                if (y[t]) {
                    var a = e[y[t]];
                    return a ? {
                        value: a.vo2MaxValue,
                        date: a.calendarDate
                    } : null
                }
                return {
                    value: e.manualStressLevel,
                    date: e.calendarDate
                }
            },
            getValue: function(t) {
                return t
            }
        })
          , b = [g.a.ACTIVITY_VO2_MAX, g.a.ACTIVITY_VO2_MAX_CYCLING, g.a.ACTIVITY_HRV_STRESS_TEST]
          , E = [g.a.ACTIVITY_NUMBER_OF_ACTIVITIES, g.a.ACTIVITY_AVERAGE_BIKE_CADENCE, g.a.ACTIVITY_AVERAGE_HEART_RATE, g.a.ACTIVITY_AVERAGE_PACE, g.a.ACTIVITY_AVERAGE_POWER, g.a.ACTIVITY_AVERAGE_RUN_CADENCE, g.a.ACTIVITY_AVERAGE_SPEED, g.a.ACTIVITY_AVERAGE_STROKES, g.a.ACTIVITY_AVERAGE_SWOLF, g.a.ACTIVITY_GROUND_CONTACT_TIME, g.a.ACTIVITY_MAX_20_MIN_AVERAGE_POWER, g.a.ACTIVITY_MAX_HEART_RATE, g.a.ACTIVITY_MAX_FTP, g.a.ACTIVITY_NORMALIZED_POWER, g.a.ACTIVITY_TOTAL_DISTANCE, g.a.ACTIVITY_TOTAL_DURATION, g.a.ACTIVITY_TRAINING_STRESS_SCORE, g.a.ACTIVITY_VERTICAL_OSCILLATION, g.a.ACTIVITY_AVG_STRIDE_LENGTH, g.a.ACTIVITY_AVG_VERTICAL_RATIO, g.a.ACTIVITY_AVG_GROUND_CONTACT_BALANCE, g.a.ACTIVITY_AVERAGE_SWIM_PACE, g.a.ACTIVITY_AEROBIC_TRAINING_EFFECT, g.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT, g.a.ACTIVITY_AEROBIC_TRAINING_EFFECT_CYCLING, g.a.ACTIVITY_ANAEROBIC_TRAINING_EFFECT_CYCLING, g.a.ACTIVITY_AVERAGE_RESPIRATION_RATE, g.a.ACTIVITY_TOTAL_DURATION_WITH_FILTERING, g.a.REPORTS_AVERAGE_SWIM_PACE, g.a.REPORTS_AVERAGE_CYCLING_PACE, g.a.REPORTS_AVERAGE_RUNNING_PACE]
          , D = [g.a.ACTIVITY_AVG_LT_SPEED_MTR_PER_SEC, g.a.ACTIVITY_AVG_LACTATE_THRESHOLD_BPM]
          , I = function(t) {
            return new T({
                duration: t.duration,
                startDate: t.startDate,
                endDate: t.endDate,
                firstDayOfWeek: t.firstDayOfWeek,
                groupByActivityType: t.shouldGroup,
                metricIdList: t.metricIdList,
                activityIdList: t.activityIdList,
                activityTypes: t.activityTypes,
                reportType: t.reportType
            })
        }
          , x = function(t) {
            return new n({
                metricType: t.metricType,
                metricPeriod: t.duration,
                startDate: t.startDate,
                untilDate: t.endDate,
                groupResults: t.shouldGroup,
                metricIdList: t.metricIdList,
                activityIdList: t.activityIdList,
                displayName: t.displayName
            })
        }
          , S = function(t) {
            return new f(t)
        }
          , M = function(t) {
            return new C(t)
        }
          , w = function() {};
        w.prototype.getService = function(t) {
            return t.reportType ? (e = t.reportType,
            D.indexOf(e) > -1 ? S : E.indexOf(e) > -1 ? I : b.indexOf(e) > -1 ? M : x)(t) : x(t);
            var e
        }
        ;
        e.a = w
    },
    5081: function(t, e, a) {
        "use strict";
        var i, r = a(1), s = a(7), n = a.n(s), o = a(9), l = a.n(o), c = a(6), h = a(59), d = a(1872), u = a(2073), p = a(3221), g = a.n(p), m = (l.a.View.extend({
            template: n.a.template(g.a),
            initialize: function(t) {
                this.isWidget = t.isWidget
            },
            render: function() {
                this.$el.html(this.template({
                    Localizer: c.a,
                    isWidget: this.isWidget
                }))
            }
        }),
        a(2442),
        a(15)), f = a.n(m), v = a(2443), T = a(1233), _ = a.n(T), A = l.a.View.extend({
            initialize: function(t) {
                this.key = t.key,
                this.color = t.color,
                this.score = t.score,
                this.optimalRangeMin = t.optimalMin,
                this.optimalRangeMax = t.optimalMax,
                this.chartMax = t.chartMax
            },
            render: function() {
                var t = this.buildChartOptions();
                this.chart = new _.a.Chart(t)
            },
            buildChartOptions: function() {
                return {
                    chart: {
                        type: "columnrange",
                        inverted: !0,
                        renderTo: this.el,
                        width: "300",
                        height: "39",
                        marginLeft: 40
                    },
                    title: {
                        text: ""
                    },
                    xAxis: {
                        title: {
                            text: ""
                        },
                        lineWidth: 0,
                        gridLineWidth: 0,
                        tickWidth: 0,
                        labels: {
                            enabled: !1
                        }
                    },
                    yAxis: {
                        title: {
                            text: ""
                        },
                        min: 0,
                        max: this.chartMax || 2e3,
                        lineWidth: 0,
                        gridLineWidth: 0,
                        labels: {
                            enabled: !1
                        }
                    },
                    tooltip: {
                        enabled: !1
                    },
                    legend: {
                        enabled: !1
                    },
                    series: this.buildSeries(),
                    credits: {
                        enabled: !1
                    },
                    exporting: {
                        enabled: !1
                    }
                }
            },
            buildSeries: function() {
                var t = [];
                return t.push({
                    name: c.a.localize(this.key),
                    animation: !1,
                    data: [{
                        x: 0,
                        low: 0,
                        high: this.score,
                        color: this.color
                    }],
                    pointWidth: 10,
                    borderRadius: 4,
                    pointRange: 0
                }),
                (this.optimalRangeMin || 0 === this.optimalRangeMin) && this.optimalRangeMax && t.push({
                    name: c.a.localize("load-focus-optimal-range"),
                    data: [{
                        x: 0,
                        low: this.optimalRangeMin,
                        high: this.optimalRangeMax
                    }],
                    grouping: !1,
                    borderWidth: 1,
                    borderColor: "#222",
                    color: "transparent",
                    dashStyle: "dash",
                    pointWidth: 8,
                    borderRadius: 4
                }),
                t
            }
        }), y = a(62), C = a(3222), b = a.n(C), E = l.a.View.extend({
            template: n.a.template(b.a),
            initialize: function(t) {
                this.key = t.key,
                this.value = t.value,
                this.score = t.score,
                this.optimalMin = t.optimalMin,
                this.optimalMax = t.optimalMax,
                this.color = t.color,
                this.chartMax = t.chartMax
            },
            render: function() {
                return this.$el.html(this.template({
                    Localizer: c.a,
                    key: this.key,
                    value: this.value,
                    score: this.score
                })),
                this.renderLoadFocusChart(),
                this.renderTooltips(),
                this
            },
            renderLoadFocusChart: function() {
                new A({
                    el: this.$(".load-focus-chart-placeholder"),
                    key: this.key,
                    score: this.score,
                    optimalMin: this.optimalMin,
                    optimalMax: this.optimalMax,
                    chartMax: this.chartMax,
                    color: this.color
                }).render()
            },
            renderTooltips: function() {
                new y.a({
                    el: this.$(".help-ANAEROBIC"),
                    content: c.a.localize("load.focus.anaerobic.tooltip")
                }),
                new y.a({
                    el: this.$(".help-HIGHAEROBIC"),
                    content: c.a.localize("load.focus.high.aerobic.tooltip")
                }),
                new y.a({
                    el: this.$(".help-LOWAEROBIC"),
                    content: c.a.localize("load.focus.low.aerobic.tooltip")
                })
            }
        }), D = a(41), I = a(27), x = a(1227), S = {
            ActivityTypes: {
                HIGH_AEROBIC: {
                    key: "load.focus.high.aerobic",
                    value: "HIGHAEROBIC"
                },
                LOW_AEROBIC: {
                    key: "load.focus.low.aerobic",
                    value: "LOWAEROBIC"
                },
                ANAEROBIC: {
                    key: "load.focus.anaerobic",
                    value: "ANAEROBIC"
                }
            },
            composeLoadFocusData: function(t) {
                var e = [];
                return t && (e = [{
                    type: this.ActivityTypes.ANAEROBIC,
                    score: Math.round(t.monthlyLoadAnaerobic),
                    optimalRangeMin: t.monthlyLoadAnaerobicTargetMin,
                    optimalRangeMax: t.monthlyLoadAnaerobicTargetMax,
                    color: x.a.Colors.loadFocusAnaerobic
                }, {
                    type: this.ActivityTypes.HIGH_AEROBIC,
                    score: Math.round(t.monthlyLoadAerobicHigh),
                    optimalRangeMin: t.monthlyLoadAerobicHighTargetMin,
                    optimalRangeMax: t.monthlyLoadAerobicHighTargetMax,
                    color: x.a.Colors.loadFocusHighAerobic
                }, {
                    type: this.ActivityTypes.LOW_AEROBIC,
                    score: Math.round(t.monthlyLoadAerobicLow),
                    optimalRangeMin: t.monthlyLoadAerobicLowTargetMin,
                    optimalRangeMax: t.monthlyLoadAerobicLowTargetMax,
                    color: x.a.Colors.loadFocusLowAerobic
                }]),
                e
            },
            getChartMaxValue: function(t) {
                var e = [];
                return t.forEach(function(t) {
                    e.push(t.score),
                    e.push(t.optimalRangeMax)
                }),
                Math.max.apply(Math, e)
            }
        }, M = a(116), w = a(1323), O = a(23), R = a(85), L = a(3223), N = a.n(L), z = l.a.View.extend(D.a).extend({
            events: {
                "click .page-previous": "onPreviousClicked",
                "click .page-next:not(.disabled)": "onNextClicked"
            },
            template: n.a.template(N.a),
            initialize: function(t) {
                this.calendarDate = w.a.formatDate(0),
                this.selectedDevice = t.selectedDevice,
                this.trainingStatusPausedDate = t.trainingStatusPausedDate,
                this.trainingLoadBalance = new v.a({
                    calendarDate: this.calendarDate
                })
            },
            render: function() {},
            provideDependencies: function(t) {
                t.addModel({
                    model: this.trainingLoadBalance,
                    required: !0
                })
            },
            onDependenciesLoaded: function() {
                this.renderLoadFocusMetrics()
            },
            renderLoadFocusMetrics: function() {
                this.hasLoadFocusData() ? (this.renderModalSummary(),
                this.renderLoadFocusCharts()) : this.renderModalSummary()
            },
            renderModalSummary: function() {
                var t = O.a.formatMonthDay(R.a.parseISO(f()(this.calendarDate).subtract(28, "days"))) + " - " + O.a.formatMonthDay(R.a.parseISO(this.calendarDate))
                  , e = this.buildLoadFocusData()
                  , a = e ? M.a.getLoadFocusPhrase(e.trainingBalanceFeedbackPhrase) : ""
                  , i = e && !this.isLoadFocusNoResult(e) ? M.a.getLoadFocus(e.trainingBalanceFeedbackPhrase) : "";
                this.$el.html(this.template({
                    Localizer: c.a,
                    feedbackPhrase: a ? c.a.localize(a) : "",
                    loadFocus: i,
                    dateRange: t,
                    isToday: this.isToday(),
                    hasData: this.hasLoadFocusData(),
                    trainingStatusPausedDate: this.getTrainingPausedDate()
                }))
            },
            renderLoadFocusCharts: function() {
                var t, e = this;
                t = S.composeLoadFocusData(this.buildLoadFocusData()),
                this.chartMaxValue = S.getChartMaxValue(t),
                n.a.each(t, function(t) {
                    e.renderLoadFocusChartItemView(t)
                })
            },
            renderLoadFocusChartItemView: function(t) {
                var e = this.$(".load-focus-metrics-container")
                  , a = new E({
                    key: t.type.key,
                    value: t.type.value,
                    score: t.score,
                    optimalMin: t.optimalRangeMin,
                    optimalMax: t.optimalRangeMax,
                    color: t.color,
                    chartMax: this.chartMaxValue
                }).render();
                e.append(a.el)
            },
            onPreviousClicked: function() {
                this.fetchLoadFocusData(-1)
            },
            onNextClicked: function() {
                this.fetchLoadFocusData(1)
            },
            fetchLoadFocusData: function(t) {
                var e = new f.a(this.calendarDate);
                e.add(t, "day");
                var a = e.format("YYYY-MM-DD")
                  , i = new I.a;
                this.trainingLoadBalance = new v.a({
                    calendarDate: a
                }),
                i.addModel({
                    model: this.trainingLoadBalance,
                    required: !0
                }),
                this.listenTo(i, I.a.Events.SYNCHRONIZED, this.onLoadFocusDataFetched),
                i.fetchModels()
            },
            onLoadFocusDataFetched: function() {
                this.updateCalendarDate(),
                this.renderLoadFocusMetrics()
            },
            updateCalendarDate: function() {
                this.calendarDate = this.trainingLoadBalance.calendarDate
            },
            buildLoadFocusData: function() {
                var t = null
                  , e = this.trainingLoadBalance.get("recordedDevices")
                  , a = this
                  , i = n.a.find(e, function(t) {
                    return t.deviceId === a.selectedDevice
                });
                return i && (t = this.trainingLoadBalance.get("metricsTrainingLoadBalanceDTOMap")[i.deviceId]),
                t
            },
            isToday: function() {
                return (new f.a).isSame(new f.a(this.calendarDate), "day")
            },
            isLoadFocusNoResult: function(t) {
                return t && t.trainingBalanceFeedbackPhrase === M.a.LoadFocusTypes.NO_RESULT.value
            },
            hasLoadFocusData: function() {
                return this.trainingLoadBalance && this.trainingLoadBalance.hasData()
            },
            getTrainingPausedDate: function() {
                if (this.trainingStatusPausedDate) {
                    var t = f()(R.a.parseISO(this.trainingStatusPausedDate));
                    return f()(R.a.parseISO(this.calendarDate)).isSameOrAfter(t) && O.a.formatMonthDayOptionalYear(R.a.parseISO(this.trainingStatusPausedDate))
                }
                return null
            }
        }), V = a(39), k = {
            TrainingStatusTypes: {
                0: "NO_STATUS",
                1: "DETRAINING",
                2: "UNPRODUCTIVE",
                3: "OVERREACHING",
                4: "MAINTAINING",
                5: "RECOVERY",
                6: "PEAKING",
                7: "PRODUCTIVE"
            },
            mapStatusLoadPhraseKey: function(t, e) {
                var a = {
                    NO_STATUS: function() {
                        return {
                            NO_RESULT: "",
                            BELOW_TARGETS: "load.focus.no.status.feedback.phrase",
                            AER_LOW_SHORT: "load.focus.no.status.feedback.phrase",
                            AER_HIGH_SHORT: "load.focus.no.status.feedback.phrase",
                            ANAER_SHORT: "load.focus.no.status.feedback.phrase",
                            BALANCED: "load.focus.no.status.feedback.phrase",
                            AER_LOW_FOCUS: "load.focus.no.status.feedback.phrase",
                            AER_HIGH_FOCUS: "load.focus.no.status.feedback.phrase",
                            ANAER_FOCUS: "load.focus.no.status.feedback.phrase",
                            ABOVE_TARGETS: "load.focus.no.status.feedback.phrase"
                        }
                    },
                    DETRAINING: function() {
                        return {
                            NO_RESULT: "",
                            BELOW_TARGETS: "load.focus.detraining.feedback.phrase",
                            AER_LOW_SHORT: "load.focus.detraining.feedback.phrase",
                            AER_HIGH_SHORT: "load.focus.detraining.feedback.phrase",
                            ANAER_SHORT: "load.focus.detraining.feedback.phrase",
                            BALANCED: "load.focus.detraining.feedback.phrase",
                            AER_LOW_FOCUS: "load.focus.detraining.feedback.phrase",
                            AER_HIGH_FOCUS: "load.focus.detraining.feedback.phrase",
                            ANAER_FOCUS: "load.focus.detraining.feedback.phrase",
                            ABOVE_TARGETS: "load.focus.detraining.feedback.phrase"
                        }
                    },
                    UNPRODUCTIVE: function() {
                        return {
                            NO_RESULT: "",
                            BELOW_TARGETS: "load.focus.unproductive.feedback.phrase.1",
                            AER_LOW_SHORT: "load.focus.unproductive.feedback.phrase.2",
                            AER_HIGH_SHORT: "load.focus.unproductive.feedback.phrase.3",
                            ANAER_SHORT: "load.focus.unproductive.feedback.phrase.4",
                            BALANCED: "load.focus.unproductive.feedback.phrase.5",
                            AER_LOW_FOCUS: "load.focus.unproductive.feedback.phrase.5",
                            AER_HIGH_FOCUS: "load.focus.unproductive.feedback.phrase.5",
                            ANAER_FOCUS: "load.focus.unproductive.feedback.phrase.5",
                            ABOVE_TARGETS: "load.focus.unproductive.feedback.phrase.6"
                        }
                    },
                    OVERREACHING: function() {
                        return {
                            NO_RESULT: "",
                            BELOW_TARGETS: "load.focus.overreaching.feedback.phrase.1",
                            AER_LOW_SHORT: "load.focus.overreaching.feedback.phrase.2",
                            AER_HIGH_SHORT: "load.focus.overreaching.feedback.phrase.3",
                            ANAER_SHORT: "load.focus.overreaching.feedback.phrase.3",
                            BALANCED: "load.focus.overreaching.feedback.phrase.3",
                            AER_LOW_FOCUS: "load.focus.overreaching.feedback.phrase.3",
                            AER_HIGH_FOCUS: "load.focus.overreaching.feedback.phrase.2",
                            ANAER_FOCUS: "load.focus.overreaching.feedback.phrase.2",
                            ABOVE_TARGETS: "load.focus.overreaching.feedback.phrase.4"
                        }
                    },
                    MAINTAINING: function() {
                        return {
                            NO_RESULT: "",
                            BELOW_TARGETS: "load.focus.maintaining.feedback.phrase.1",
                            AER_LOW_SHORT: "load.focus.maintaining.feedback.phrase.2",
                            AER_HIGH_SHORT: "load.focus.maintaining.feedback.phrase.2",
                            ANAER_SHORT: "load.focus.maintaining.feedback.phrase.2",
                            BALANCED: "load.focus.maintaining.feedback.phrase.3",
                            AER_LOW_FOCUS: "load.focus.maintaining.feedback.phrase.4",
                            AER_HIGH_FOCUS: "load.focus.maintaining.feedback.phrase.4",
                            ANAER_FOCUS: "load.focus.maintaining.feedback.phrase.4",
                            ABOVE_TARGETS: "load.focus.maintaining.feedback.phrase.5"
                        }
                    },
                    RECOVERY: function() {
                        return {
                            NO_RESULT: "",
                            BELOW_TARGETS: "load.focus.recovery.feedback.phrase.1",
                            AER_LOW_SHORT: "load.focus.recovery.feedback.phrase.2",
                            AER_HIGH_SHORT: "load.focus.recovery.feedback.phrase.2",
                            ANAER_SHORT: "load.focus.recovery.feedback.phrase.2",
                            BALANCED: "load.focus.recovery.feedback.phrase.3",
                            AER_LOW_FOCUS: "load.focus.recovery.feedback.phrase.3",
                            AER_HIGH_FOCUS: "load.focus.recovery.feedback.phrase.3",
                            ANAER_FOCUS: "load.focus.recovery.feedback.phrase.3",
                            ABOVE_TARGETS: "load.focus.recovery.feedback.phrase.4"
                        }
                    },
                    PEAKING: function() {
                        return {
                            NO_RESULT: "",
                            BELOW_TARGETS: "load.focus.peaking.feedback.phrase.1",
                            AER_LOW_SHORT: "load.focus.peaking.feedback.phrase.2",
                            AER_HIGH_SHORT: "load.focus.peaking.feedback.phrase.2",
                            ANAER_SHORT: "load.focus.peaking.feedback.phrase.2",
                            BALANCED: "load.focus.peaking.feedback.phrase.1",
                            AER_LOW_FOCUS: "load.focus.peaking.feedback.phrase.1",
                            AER_HIGH_FOCUS: "load.focus.peaking.feedback.phrase.1",
                            ANAER_FOCUS: "load.focus.peaking.feedback.phrase.1",
                            ABOVE_TARGETS: "load.focus.peaking.feedback.phrase.3"
                        }
                    },
                    PRODUCTIVE: function() {
                        return {
                            NO_RESULT: "",
                            BELOW_TARGETS: "load.focus.productive.feedback.phrase.1",
                            AER_LOW_SHORT: "load.focus.productive.feedback.phrase.2",
                            AER_HIGH_SHORT: "load.focus.productive.feedback.phrase.2",
                            ANAER_SHORT: "load.focus.productive.feedback.phrase.2",
                            BALANCED: "load.focus.productive.feedback.phrase.3",
                            AER_LOW_FOCUS: "load.focus.productive.feedback.phrase.3",
                            AER_HIGH_FOCUS: "load.focus.productive.feedback.phrase.3",
                            ANAER_FOCUS: "load.focus.productive.feedback.phrase.3",
                            ABOVE_TARGETS: "load.focus.productive.feedback.phrase.4"
                        }
                    }
                };
                return (a[t] || a.NO_STATUS)()[e]
            },
            getFeedbackPhrase: function(t, e) {
                var a = this.TrainingStatusTypes[t]
                  , i = this.mapStatusLoadPhraseKey(a, e);
                return i ? c.a.localize(i) : ""
            }
        }, P = a(223), F = a(3224), G = a.n(F), B = {
            DEVICE_CHANGE: "DEVICE_CHANGE"
        }, Y = l.a.View.extend((i = {
            events: {
                "click .load-focus": "onLoadFocusClicked"
            },
            initialize: function(t) {
                this.trainingStatusData = t.metricList,
                this.template = n.a.template(G.a),
                this.selectedDevice = null,
                this.mostRecentStatus = null,
                this.vo2MaxData = new d.a({}),
                this.lastDisplayedDevice = new h.a({
                    key: "TrainingStatus.last.device"
                }),
                this.statusData = this.trainingStatusData.attributes,
                this.loadFocusData = t.trainingLoadBalance,
                this.registeredDevices = t.registeredDevices,
                this.isFeatureEnabled = t.isFeatureEnabled,
                this.trainingStatusPausedDate = t.trainingStatusPausedDate
            },
            render: function() {
                return this.getData(),
                this
            },
            getData: function() {
                var t = new I.a;
                t.addModel({
                    model: this.vo2MaxData,
                    required: !0
                }),
                t.addModel({
                    model: this.lastDisplayedDevice,
                    required: !0
                }),
                t.on(I.a.Events.SYNCHRONIZED, this.renderHeaderView, this),
                t.on(I.a.Events.SYNCHRONIZE_FAILED, this.onDataFail, this),
                t.fetchModels()
            },
            renderHeaderView: function() {
                if (this.hasRecordedDevices() && !this.selectedDevice)
                    this.setLastDisplayedDevice(),
                    this.displayData(),
                    this.renderTooltips(),
                    this.renderDevicePicker();
                else if (this.selectedDevice) {
                    var t = this.getLatestStatusForDevice()
                      , e = this.buildLoadFocusData();
                    this.renderCurrentView(this.getDefaultTemplateOptions(t, e)),
                    this.renderTooltips(),
                    this.renderDevicePicker()
                } else
                    this.renderCurrentView(this.getDefaultTemplateOptions()),
                    this.renderTooltips()
            },
            setLastDisplayedDevice: function() {
                this.hasMultipleRecordedDevices() && this.lastDisplayedDevice ? this.selectedDevice = this.findLastDisplayedDevice() ? this.findLastDisplayedDevice().deviceId : this.selectDefaultDevice() : this.selectDefaultDevice()
            },
            selectDefaultDevice: function() {
                this.selectedDevice = this.statusData.recordedDevices[0].deviceId
            },
            findLastDisplayedDevice: function() {
                var t = +this.lastDisplayedDevice.get("value");
                return n.a.find(this.statusData.recordedDevices, function(e) {
                    return t === e.deviceId
                })
            },
            getLatestStatusForDevice: function() {
                return M.a.getStatusDataForDevice(this.selectedDevice, this.statusData)
            },
            displayData: function() {
                var t = this.getTemplateOptions();
                this.renderCurrentView(t)
            },
            renderTooltips: function() {
                new y.a({
                    el: this.$(".help-training-status"),
                    content: c.a.localize("training.status.name.tooltip")
                })
            },
            renderDevicePicker: function() {
                this.statusData.recordedDevices.length > 1 && (this.devicePicker = new u.a({
                    deviceList: this.statusData.recordedDevices,
                    selectedDevice: this.selectedDevice
                }),
                this.$(".device-picker-placeholder").html(this.devicePicker.render().el),
                this.listenTo(this.devicePicker, u.a.Events.CHANGE, this.onDeviceChanged))
            },
            getTemplateOptions: function() {
                var t = {
                    displayNoStatus: !1,
                    displayNone: !1
                };
                this.mostRecentStatus = M.a.getStatusDataForDevice(this.selectedDevice, this.statusData);
                var e = this.buildLoadFocusData();
                if (this.isSelectedDevicePauseCapable(this.selectedDevice) && this.trainingStatusPausedDate)
                    return t.statusClass = "training-status-paused",
                    t.statusName = c.a.localize("training_status_paused"),
                    t.loadFocus = c.a.localize("training_status_paused"),
                    t.sport = this.mostRecentStatus && this.mostRecentStatus.fitnessTrendSport ? this.getSportForTrend() : "",
                    t.statusDescription = c.a.localize("training_status_paused_feedback_phrase"),
                    t;
                if (!this.mostRecentStatus && !this.statusData.reportData[this.selectedDevice])
                    return t.displayNone = !0,
                    t.statusClass = "training-status-no-status",
                    t.statusName = c.a.localize("TRAINING_STATUS_NO_STATUS"),
                    t.loadFocus = e && !this.isLoadFocusNoResult(e) ? M.a.getLoadFocus(e.trainingBalanceFeedbackPhrase) : "",
                    t;
                if (!this.mostRecentStatus && M.a.determineIfNoData(this.statusData.reportData[this.selectedDevice]))
                    return t.displayNone = !0,
                    t.statusClass = "training-status-no-status",
                    t.statusName = c.a.localize("TRAINING_STATUS_NO_STATUS"),
                    t.loadFocus = e && !this.isLoadFocusNoResult(e) ? M.a.getLoadFocus(e.trainingBalanceFeedbackPhrase) : "",
                    t;
                if (!this.mostRecentStatus)
                    return t.displayNoStatus = !0,
                    t.statusClass = "training-status-no-status",
                    t.statusName = c.a.localize("TRAINING_STATUS_NO_STATUS"),
                    t.loadFocus = e && !this.isLoadFocusNoResult(e) ? M.a.getLoadFocus(e.trainingBalanceFeedbackPhrase) : "",
                    t;
                if (this.trainingStatus = this.mostRecentStatus.trainingStatus,
                (this.trainingStatus === M.a.Statuses.No_Status || this.trainingStatus > 7) && !this.statusData.reportData[this.selectedDevice])
                    return t.displayNone = !0,
                    t.statusClass = "training-status-no-status",
                    t.statusName = c.a.localize("TRAINING_STATUS_NO_STATUS"),
                    t.loadFocus = e && !this.isLoadFocusNoResult(e) ? M.a.getLoadFocus(e.trainingBalanceFeedbackPhrase) : "",
                    t;
                if ((this.trainingStatus === M.a.Statuses.No_Status || this.trainingStatus > 7) && M.a.determineIfNoData(this.statusData.reportData[this.selectedDevice]))
                    return t.displayNone = !0,
                    t.statusClass = "training-status-no-status",
                    t.statusName = c.a.localize("TRAINING_STATUS_NO_STATUS"),
                    t.loadFocus = e && !this.isLoadFocusNoResult(e) ? M.a.getLoadFocus(e.trainingBalanceFeedbackPhrase) : "",
                    t;
                if (this.trainingStatus === M.a.Statuses.No_Status || this.trainingStatus > 7)
                    t.displayNoStatus = !0;
                else {
                    t.trainingLoad = this.mostRecentStatus.weeklyTrainingLoad,
                    t.loadMin = this.mostRecentStatus.loadTunnelMin,
                    t.loadMax = this.mostRecentStatus.loadTunnelMax,
                    t.statusClass = M.a.getStatusClass(this.trainingStatus),
                    t.statusName = M.a.getStatusName(this.trainingStatus);
                    this.mostRecentStatus.trainingStatusFeedbackPhrase;
                    this.isFeatureEnabled && this.isLoadFocusCapable() ? t.statusDescription = k.getFeedbackPhrase(this.trainingStatus, M.a.getLoadFocus(this.mostRecentStatus.trainingStatusFeedbackPhrase, !0)) : t.statusDescription = M.a.getStatusDescription(this.trainingStatus),
                    t.loadStatus = M.a.getLoadStatus(t.loadMin, t.loadMax, t.trainingLoad),
                    t.loadFocus = e && !this.isLoadFocusNoResult(e) ? M.a.getLoadFocus(e.trainingBalanceFeedbackPhrase) : "",
                    t.currentStatusDate = this.mostRecentStatus.fitnessTrendSport ? O.a.formatMonthDayOptionalYear(R.a.parseISO(this.mostRecentStatus.calendarDate)) : "",
                    t.sport = this.mostRecentStatus.fitnessTrendSport ? this.getSportForTrend() : ""
                }
                return t
            },
            isLoadFocusNoResult: function(t) {
                return t && t.trainingBalanceFeedbackPhrase === M.a.LoadFocusTypes.NO_RESULT.value
            },
            getDefaultTemplateOptions: function(t, e) {
                if (this.isSelectedDevicePauseCapable() && this.trainingStatusPausedDate)
                    return {
                        statusClass: "training-status-paused",
                        statusName: c.a.localize("training_status_paused"),
                        loadFocus: c.a.localize("training_status_paused"),
                        sport: t.fitnessTrendSport ? this.getSportForTrend(t) : "",
                        statusDescription: c.a.localize("training_status_paused_feedback_phrase")
                    };
                if (t) {
                    var a = t.trainingStatusFeedbackPhrase
                      , i = a ? M.a.getLoadFocus(a, !0) : "";
                    return {
                        statusClass: M.a.getStatusClass(t.trainingStatus),
                        statusName: M.a.getStatusName(t.trainingStatus),
                        statusDescription: i ? k.getFeedbackPhrase(t.trainingStatus, i) : M.a.getStatusDescription(t.trainingStatus),
                        loadFocus: e && !this.isLoadFocusNoResult(e) ? M.a.getLoadFocus(e.trainingBalanceFeedbackPhrase) : "",
                        currentStatusDate: t.fitnessTrendSport ? O.a.formatMonthDayOptionalYear(R.a.parseISO(t.calendarDate)) : "",
                        sport: t.fitnessTrendSport ? this.getSportForTrend(t) : ""
                    }
                }
                return {
                    statusClass: "training-status-no-status",
                    statusName: c.a.localize("TRAINING_STATUS_NO_STATUS"),
                    statusDescription: ""
                }
            },
            isSelectedDevicePauseCapable: function() {
                var t = this
                  , e = this.registeredDevices.models.find(function(e) {
                    return e.get("deviceId") === t.selectedDevice
                });
                return e && e.get("trainingStatusPauseCapable") || !1
            },
            renderCurrentView: function(t) {
                this.$el.html(this.template({
                    Localizer: c.a,
                    statusClass: t.statusClass,
                    statusName: t.statusName,
                    statusDescription: t.statusDescription,
                    loadFocus: t.loadFocus,
                    currentStatusDate: t.currentStatusDate,
                    sport: c.a.localize(t.sport),
                    hasFitnessTrendSport: t.sport || !1,
                    isFeatureEnabled: this.isFeatureEnabled,
                    isLoadFocusCapable: this.isLoadFocusCapable(),
                    isTrainingPaused: this.isTrainingPaused()
                })),
                P.a.renderTooltips.call(this)
            },
            isTrainingPaused: function() {
                return this.isSelectedDevicePauseCapable() && this.trainingStatusPausedDate
            }
        },
        Object(r.a)(i, "isSelectedDevicePauseCapable", function() {
            var t = this
              , e = this.registeredDevices.models.find(function(e) {
                return e.get("deviceId") === t.selectedDevice
            });
            return e && e.get("trainingStatusPauseCapable") || !1
        }),
        Object(r.a)(i, "hasRecordedDevices", function() {
            return this.statusData && this.statusData.recordedDevices && this.statusData.recordedDevices.length > 0
        }),
        Object(r.a)(i, "hasMultipleRecordedDevices", function() {
            return this.statusData.recordedDevices.length > 1
        }),
        Object(r.a)(i, "getSportForTrend", function(t) {
            return t ? t.fitnessTrendSport === M.a.SportTypes.Cycling.value ? M.a.SportTypes.Cycling.key : M.a.SportTypes.Running.key : this.mostRecentStatus.fitnessTrendSport === M.a.SportTypes.Cycling.value ? M.a.SportTypes.Cycling.key : M.a.SportTypes.Running.key
        }),
        Object(r.a)(i, "isLoadFocusCapable", function() {
            var t = this
              , e = n.a.find(this.registeredDevices.models, function(e) {
                return e.get("deviceId") === t.selectedDevice
            });
            return e && e.get("trainingLoadBalanceCapable")
        }),
        Object(r.a)(i, "onDeviceChanged", function(t) {
            this.selectedDevice = +t,
            this.renderHeaderView(),
            this.trigger(B.DEVICE_CHANGE, t)
        }),
        Object(r.a)(i, "onLoadFocusClicked", function(t) {
            t.preventDefault(),
            this.renderLoadFocusModal()
        }),
        Object(r.a)(i, "renderLoadFocusModal", function() {
            var t = new z({
                selectedDevice: this.selectedDevice,
                trainingStatusPausedDate: this.trainingStatusPausedDate
            });
            t.load(),
            new V.a({
                view: t,
                showFooter: !1,
                useCustomBody: !0,
                customBodyClasses: "modal-load-focus",
                modalTitle: c.a.localize("training.status.load.focus.title")
            }).render()
        }),
        Object(r.a)(i, "buildLoadFocusData", function() {
            var t = null
              , e = this.loadFocusData.get("recordedDevices")
              , a = this
              , i = n.a.find(e, function(t) {
                return t.deviceId === a.selectedDevice
            });
            return i && (t = this.loadFocusData.get("metricsTrainingLoadBalanceDTOMap")[i.deviceId]),
            t
        }),
        Object(r.a)(i, "onDataFail", function() {
            this.$el.html(this.template({
                Localizer: c.a,
                displayNoStatus: !0
            }))
        }),
        Object(r.a)(i, "destroy", function() {
            this.undelegateEvents()
        }),
        i));
        Y.Events = B;
        e.a = Y
    },
    5139: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(85)
          , c = a(15)
          , h = a.n(c)
          , d = a(18)
          , u = a(13)
          , p = a(23)
          , g = a(3201)
          , m = a.n(g)
          , f = n.a.View.extend({
            template: r.a.template(m.a),
            tagName: "tr",
            className: "animated-fast fadeInDown",
            initialize: function(t) {
                this.activity = t.activity
            },
            render: function() {
                this.$el.html(this.template({
                    Localizer: o.a,
                    activityName: this.activity.get("activityName") || o.a.localize("untitled"),
                    activityLink: d.default.url("/activity/" + this.activity.get("activityId")),
                    date: p.a.formatFriendlyDate(l.a.parseISO(this.activity.get("startTimeLocal")), !0),
                    duration: u.a.personalizeDuration(this.activity.get("duration"))
                }))
            }
        })
          , v = a(3202)
          , T = a.n(v)
          , _ = a(3203)
          , A = a.n(_)
          , y = {
            SHOW_MORE_CLICKED: "SHOW_MORE_CLICKED"
        }
          , C = n.a.View.extend({
            template: r.a.template(T.a),
            tagName: "table",
            className: "table top-s",
            events: {
                "click .show-more-btn": "onShowMoreClicked"
            },
            initialize: function(t) {
                this.activityList = t.activityList,
                this.aggregation = t.aggregation,
                this.startDate = t.startDate,
                this.timeRowHtml = r.a.template(A.a),
                this.weekOrMonth = "monthly" === this.aggregation ? "month" : "week",
                this.lastTimeBucket = new h.a(this.startDate).add(1, this.weekOrMonth).startOf(this.weekOrMonth),
                this.lastIndex = 0
            },
            setActivityList: function(t, e) {
                this.activityList = t,
                "undefined" !== typeof e && (this.aggregation = e,
                this.weekOrMonth = "monthly" === this.aggregation ? "month" : "week",
                this.lastTimeBucket = "monthly" === this.aggregation ? new h.a(this.startDate).endOf("month") : new h.a(this.startDate).endOf("week"))
            },
            render: function() {
                this.$el.html(this.template({
                    Localizer: o.a
                })),
                this.renderRows(),
                this.activityList.mayHaveMoreModels || this.hideShowMore()
            },
            renderRows: function() {
                var t = this.activityList.length
                  , e = this.$("#activityList")
                  , a = {};
                if (t > 0) {
                    for (var i = this.lastIndex; i < t; i += 1) {
                        var r = this.activityList.at(i)
                          , s = l.a.parseISO(r.get("startTimeLocal"))
                          , n = this.checkTimeBucket(new h.a(s));
                        n && e.append(this.timeRowHtml({
                            timeBucket: n,
                            isAdditionalRender: 0 !== this.lastIndex
                        })),
                        (a = new f({
                            activity: r,
                            isAdditionalRender: 0 !== this.lastIndex
                        })).render(),
                        e.append(a.el)
                    }
                    this.lastIndex = i
                }
            },
            checkTimeBucket: function(t) {
                var e = !1;
                if (t.diff(this.lastTimeBucket, this.weekOrMonth, !0) < 0) {
                    var a = (new h.a).add(1, this.weekOrMonth).startOf(this.weekOrMonth).diff(t, this.weekOrMonth, !0);
                    e = a <= 1 ? o.a.localize("this_" + this.weekOrMonth) : a <= 2 ? o.a.localize("last_" + this.weekOrMonth + "_title") : o.a.localize("x_" + this.weekOrMonth + "s_ago", Math.floor(a)),
                    this.lastTimeBucket = t.startOf(this.weekOrMonth)
                }
                return e
            },
            drawAdditionalRows: function() {
                this.renderRows()
            },
            hideShowMore: function() {
                this.$(".show-more-btn").hide()
            },
            onShowMoreClicked: function() {
                this.trigger(y.SHOW_MORE_CLICKED)
            },
            clearLastIndex: function() {
                this.lastIndex = 0
            }
        });
        C.Events = y;
        e.a = C
    },
    5140: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(6)
          , l = a(59)
          , c = a(1872)
          , h = a(2072)
          , d = a(2073)
          , u = (a(2442),
        a(3219))
          , p = a.n(u)
          , g = (n.a.View.extend({
            template: r.a.template(p.a),
            initialize: function(t) {},
            render: function() {
                this.$el.html(this.template({
                    Localizer: o.a
                }))
            }
        }),
        a(129),
        a(27))
          , m = a(116)
          , f = a(85)
          , v = a(23)
          , T = a(223)
          , _ = a(18)
          , A = a(3220)
          , y = a.n(A)
          , C = {
            ON_UPDATE_TRAINING_STATUS_PAUSED_DATE: "ON_UPDATE_TRAINING_STATUS_PAUSED_DATE"
        }
          , b = n.a.View.extend({
            events: {
                "click .ts-view-full-report-btn": "onViewFullReportClicked",
                "click .training-status-resume-widget": "onTrainingStatusResumeClicked"
            },
            initialize: function(t) {
                this.trainingStatusData = t.metricList,
                this.template = r.a.template(y.a),
                this.displayDevicePicker = !1,
                this.deviceList = [],
                this.selectedDevice = null,
                this.reportPageUrl = t.reportPageUrl,
                this.displayName = t.displayName,
                this.startDate = t.startDate,
                this.untilDate = t.untilDate,
                this.userSettings = t.userSettings,
                this.trainingStatusPausedDate = this.userSettings.has("userData") && this.userSettings.get("userData").trainingStatusPausedDate
            },
            render: function() {
                return this.getData(),
                this
            },
            getData: function() {
                this.vo2MaxData = new c.a({}),
                this.lastDisplayedDevice = new l.a({
                    key: "TrainingStatus.last.device"
                }),
                this.historicalTSMetrics = new h.a({
                    metricPeriod: "weekly",
                    displayName: this.displayName,
                    startDate: this.startDate,
                    endDate: this.untilDate
                });
                var t = new g.a;
                t.addModel({
                    model: this.vo2MaxData,
                    required: !0
                }),
                t.addModel({
                    model: this.lastDisplayedDevice,
                    required: !0
                }),
                t.addModel({
                    model: this.historicalTSMetrics,
                    required: !0
                }),
                t.on(g.a.Events.SYNCHRONIZED, this.onDataFetched, this),
                t.on(g.a.Events.SYNCHRONIZE_FAILED, this.onDataFail, this),
                t.fetchModels()
            },
            onDataFetched: function() {
                var t = {};
                this.trainingStatusData && !r.a.isEmpty(this.trainingStatusData.get("recordedDevices")) ? (this.statusData = this.trainingStatusData.attributes,
                this.selectDeviceToDisplay(),
                this.displayData()) : (t.displayNoStatus = !0,
                this.renderCurrentView(t))
            },
            displayData: function() {
                var t;
                t = this.getTemplateOptions(),
                this.renderCurrentView(t),
                this.displayDevicePicker && this.renderDevicePicker()
            },
            getTemplateOptions: function() {
                var t, e = {
                    displayNoStatus: !1
                };
                if (t = m.a.getStatusDataForDevice(this.selectedDevice, this.statusData),
                this.trainingStatus = t.trainingStatus,
                this.trainingStatusPausedDate && t.trainingPaused) {
                    e.statusClass = "training-status-paused",
                    e.statusName = o.a.localize("training_status_paused");
                    var a = this.getPausedSinceDate(t.trainingPaused);
                    e.statusDate = a ? v.a.formatMonthDayOptionalYear(f.a.parseISO(a)) : v.a.formatMonthDayOptionalYear(f.a.parseISO(t.calendarDate)),
                    e.trainingPaused = t.trainingPaused
                } else if (!this.trainingStatus || this.trainingStatus === m.a.Statuses.No_Status || this.trainingStatus > 7)
                    e.displayNoStatus = !0;
                else {
                    var i = this.getStatusDate(this.trainingStatus);
                    e.statusDate = i ? v.a.formatMonthDayOptionalYear(f.a.parseISO(i)) : v.a.formatMonthDayOptionalYear(f.a.parseISO(t.calendarDate)),
                    "CYCLING" === t.sport ? (e.vo2Max = this.vo2MaxData.get("cycling").vo2MaxValue,
                    e.useCycling = !0) : (e.vo2Max = this.vo2MaxData.get("generic").vo2MaxValue,
                    e.useCycling = !1),
                    e.trainingLoad = t.weeklyTrainingLoad,
                    e.loadMin = t.loadTunnelMin,
                    e.loadMax = t.loadTunnelMax,
                    e.statusClass = m.a.getStatusClass(this.trainingStatus),
                    e.statusName = m.a.getStatusName(this.trainingStatus),
                    e.statusDescription = m.a.getStatusDescription(this.trainingStatus),
                    e.loadStatus = m.a.getLoadStatus(e.loadMin, e.loadMax, e.trainingLoad),
                    e.sport = t.fitnessTrendSport ? o.a.localize(this.getSportForTrend(t)) : ""
                }
                return e
            },
            getSportForTrend: function(t) {
                return t.fitnessTrendSport === m.a.SportTypes.Cycling.value ? m.a.SportTypes.Cycling.key : m.a.SportTypes.Running.key
            },
            renderCurrentView: function(t) {
                this.$el.html(this.template({
                    Localizer: o.a,
                    displayNoStatus: t.displayNoStatus,
                    displayDevicePicker: this.displayDevicePicker,
                    statusClass: t.statusClass,
                    statusName: t.statusName,
                    statusDescription: t.statusDescription,
                    calendarDate: t.statusDate,
                    loadStatus: t.loadStatus,
                    trainingLoad: t.trainingLoad,
                    useCycling: t.useCycling,
                    vo2Max: t.vo2Max,
                    sport: t.sport,
                    hasFitnessTrendSport: t.sport || !1,
                    trainingPaused: t.trainingPaused || !1
                })),
                T.a.renderTooltips.call(this)
            },
            renderDevicePicker: function() {
                this.devicePicker = new d.a({
                    deviceList: this.deviceList,
                    selectedDevice: this.selectedDevice
                }),
                this.$("#device-picker-container").html(this.devicePicker.render().el),
                this.listenTo(this.devicePicker, d.a.Events.CHANGE, this.onDeviceChanged)
            },
            getStatusDate: function(t) {
                var e = this.historicalTSMetrics.getReportDataForDevice(this.selectedDevice)
                  , a = "";
                if (e && e.length > 1)
                    for (var i = e.length; i-- > 0 && e[i].trainingStatus === t; )
                        a = e[i].calendarDate;
                return a
            },
            getPausedSinceDate: function(t) {
                var e = this.historicalTSMetrics.getReportDataForDevice(this.selectedDevice)
                  , a = "";
                if (e && e.length > 1)
                    for (var i = e.length; i-- > 0 && e[i].trainingPaused === t; )
                        a = e[i].calendarDate;
                return a
            },
            onDeviceChanged: function(t) {
                this.lastDisplayedDevice.set("value", t),
                this.lastDisplayedDevice.save(),
                this.selectedDevice = +t,
                this.displayData()
            },
            onDataFail: function() {
                var t = {
                    displayNoStatus: !0
                };
                this.renderCurrentView(t)
            },
            selectDeviceToDisplay: function() {
                if (this.displayDevicePicker = m.a.shouldShowDevicePicker(this.statusData.recordedDevices.length),
                this.lastDisplayedDeviceId = +this.lastDisplayedDevice.get("value"),
                this.displayDevicePicker) {
                    for (var t = 0; t < this.statusData.recordedDevices.length; t++)
                        this.lastDisplayedDeviceId === this.statusData.recordedDevices[t].deviceId && (this.selectedDevice = this.statusData.recordedDevices[t].deviceId),
                        this.deviceList.push(this.statusData.recordedDevices[t]);
                    null === this.selectedDevice && (this.selectedDevice = this.statusData.recordedDevices[0].deviceId)
                } else {
                    for (t = 0; t < this.statusData.recordedDevices.length; t++)
                        this.lastDisplayedDeviceId === this.statusData.recordedDevices[t].deviceId && (this.selectedDevice = this.statusData.recordedDevices[t].deviceId),
                        this.deviceList.push(this.statusData.recordedDevices[t]);
                    null === this.selectedDevice && (this.selectedDevice = this.statusData.recordedDevices[0].deviceId)
                }
            },
            onViewFullReportClicked: function(t) {
                t.preventDefault(),
                _.default.navigate(this.reportPageUrl)
            },
            onTrainingStatusResumeClicked: function(t) {
                this.trigger(C.ON_UPDATE_TRAINING_STATUS_PAUSED_DATE, t)
            }
        });
        b.Events = C;
        e.a = b
    },
    5141: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(9)
          , n = a.n(s)
          , o = a(2341)
          , l = a(6)
          , c = a(2444)
          , h = a(1302)
          , d = (a(1233),
        n.a.View.extend({
            initialize: function(t) {
                if (!t.vo2MaxMetrics)
                    throw "Current VO2 Max values are required for chart.";
                if (!t.gender)
                    throw "Gender value required for chart.";
                if (!t.ageRange)
                    throw "Age range value required for chart.";
                if (!t.vo2MaxCategories)
                    throw "Category list required for chart";
                this.chartFormat = t.chartFormat,
                this.reportType = t.reportType,
                this.vo2MaxMetrics = t.vo2MaxMetrics,
                this.gender = t.gender,
                this.ageRange = t.ageRange,
                this.vo2MaxCategories = t.vo2MaxCategories,
                this.useStrictMinMax = t.useStrictMinMax,
                this.vo2MaxToggle = t.vo2MaxToggle,
                this.minValue = t.minValue || 0,
                this.maxValue = t.maxValue || 100,
                this.containerClass = "widget" === this.chartFormat ? "reportChartPlaceholder" : "js-report-chart-current",
                this.categoriesMapper = c.a.categoriesMapper(),
                this.setCurrentVo2Max(),
                this.setAttributes(),
                this.setChartRanges(),
                this.initExportData()
            },
            setCurrentVo2Max: function() {
                var t = this.vo2MaxMetrics.getGenericVO2Max() ? this.vo2MaxMetrics.getGenericVO2Max().vo2MaxValue : null
                  , e = this.vo2MaxMetrics.getCyclingVO2Max() ? this.vo2MaxMetrics.getCyclingVO2Max().vo2MaxValue : null;
                this.currentVo2Max = t,
                ("cycling" === this.reportType || "all" === this.reportType && "cycling" === this.vo2MaxToggle || !t) && (this.currentVo2Max = e)
            },
            setAttributes: function() {
                this.containerClass && this.$el.addClass(this.containerClass)
            },
            setChartRanges: function() {
                this.useStrictMinMax || (this.minValue = this.vo2MaxCategories.getRangeMin(),
                this.maxValue = this.vo2MaxCategories.getRangeMax(),
                this.minValue > this.currentVo2Max && (this.minValue = this.currentVo2Max),
                this.maxValue < this.currentVo2Max && (this.maxValue = this.currentVo2Max))
            },
            initExportData: function() {
                this.exportData = {
                    title: l.a.localize(h.a.ACTIVITY_VO2_MAX),
                    rows: []
                }
            },
            addExportData: function() {
                this.exportData.rows.push({
                    values: arguments
                })
            },
            getExportData: function() {
                return this.exportData
            },
            render: function() {
                this.addExportData(l.a.localize("vo2.max.my.title"), this.currentVo2Max),
                this.addExportData(l.a.localize("vo2.max.category.label"), l.a.localize("vo2.max.range.min.label"), l.a.localize("vo2.max.range.max.label")),
                this.buildSeries(),
                this.initializeChartSeries(),
                this.$el.highcharts(this.getChartOptions())
            },
            buildSeries: function() {
                this.series = [{
                    name: l.a.localize("vo2.max.my.title"),
                    data: [Math.round(this.currentVo2Max)]
                }]
            },
            initializeChartSeries: function() {
                var t, e, a, i, s, n, o, c = this.vo2MaxCategories.length;
                this.chartSeries = {};
                for (var h = 0; h < c; h++)
                    t = this.vo2MaxCategories.models[h],
                    a = (e = this.categoriesMapper[t.get("categoryPk")]).type,
                    i = e.color,
                    s = e.name,
                    n = t.get("categoryRangeMin"),
                    o = t.get("categoryRangeMax"),
                    0 === h && n > this.currentVo2Max && (n = this.currentVo2Max - 3,
                    this.minValue -= 3),
                    h === c - 1 && o < this.currentVo2Max && (o = this.currentVo2Max + 3,
                    this.maxValue += 3),
                    this.chartSeries[a] = {
                        color: i,
                        name: s,
                        from: n,
                        to: o,
                        thickness: "30%"
                    },
                    this.addExportData([l.a.localize("vo2." + a), t.get("categoryRangeMin"), t.get("categoryRangeMax")]);
                this.chartSeries = r.a.toArray(this.chartSeries),
                this.chartSeries = r.a.sortBy(this.chartSeries, function(t) {
                    return -t.to
                }, this)
            },
            getChartOptions: function() {
                return {
                    chart: {
                        type: "gauge",
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                        plotBorderWidth: 0,
                        plotShadow: !1,
                        backgroundColor: "transparent",
                        width: 231,
                        height: "widget" === this.chartFormat ? 170 : 198,
                        marginTop: 15,
                        spacingTop: 25,
                        spacingBottom: 5
                    },
                    credits: {
                        enabled: !1
                    },
                    title: {
                        text: Math.round(this.currentVo2Max) + "<br/><span class='data-label'>" + l.a.localize("vo2Max_unit") + "</span>",
                        useHTML: !0,
                        verticalAlign: "bottom",
                        y: "widget" === this.chartFormat ? -60 : -77,
                        style: {
                            color: "#555",
                            fontSize: "30px",
                            lineHeight: "18px",
                            textAlign: "center"
                        }
                    },
                    exporting: {
                        enabled: !1
                    },
                    tooltip: {
                        enabled: !1
                    },
                    pane: {
                        size: "100%",
                        startAngle: -130,
                        endAngle: 130,
                        background: {
                            borderWidth: 20,
                            backgroundColor: "transparent",
                            shape: "arc",
                            borderColor: "transparent",
                            outerRadius: "90%",
                            innerRadius: "90%"
                        }
                    },
                    plotOptions: {
                        gauge: {
                            borderWidth: 20,
                            radius: 90,
                            innerRadius: "90%",
                            dataLabels: {
                                borderWidth: 0,
                                useHTML: !0,
                                color: "#222",
                                y: 70,
                                x: 0,
                                enabled: !0,
                                style: {
                                    fontSize: "18px"
                                },
                                formatter: function() {
                                    for (var t = this.series.chart.axes[1].plotLinesAndBands, e = 0; e < t.length; e++)
                                        if (t[e].options.name && t[e].options.from <= this.y && this.y <= t[e].options.to)
                                            return t[e].options.name
                                }
                            },
                            dial: {
                                baseLength: "20%",
                                baseWidth: 50,
                                radius: "75%",
                                rearLength: "0%",
                                topWidth: 0,
                                backgroundColor: "#000",
                                borderWidth: "1px",
                                borderColor: "#fff"
                            },
                            pivot: {
                                radius: "widget" === this.chartFormat ? "22%" : "24%",
                                backgroundColor: "#fff"
                            }
                        }
                    },
                    yAxis: {
                        min: this.minValue,
                        max: this.maxValue,
                        minorTickInterval: null,
                        lineColor: "#fafafa",
                        tickInterval: 5,
                        tickLength: 0,
                        tickPixelInterval: 30,
                        tickWidth: 1,
                        tickPosition: "inside",
                        tickColor: "#fafafa",
                        labels: {
                            step: 1,
                            distance: 7,
                            rotation: "auto",
                            style: {
                                color: "#AAA",
                                fontSize: "9px"
                            }
                        },
                        plotBands: this.chartSeries
                    },
                    series: this.series
                }
            }
        }))
          , u = a(3236)
          , p = a.n(u)
          , g = n.a.View.extend({
            initialize: function(t) {
                this.template = r.a.template(p.a),
                this.report = t.report,
                this.reportType = t.reportType,
                this.chartFormat = t.chartFormat,
                this.vo2MaxMetrics = t.vo2MaxMetrics,
                this.gender = t.gender,
                this.ageRange = t.ageRange,
                this.vo2MaxCategories = t.vo2MaxCategories,
                this.vo2MaxToggle = t.vo2MaxToggle,
                this.useStrictMinMax = !1
            },
            render: function() {
                this.$el.html(this.template({})),
                this.initGaugeChart(),
                "widget" === this.chartFormat && this.initDynamicText()
            },
            initGaugeChart: function() {
                this.vo2MaxGaugeChartView = new d({
                    el: this.$("#vo2MaxGaugeChartPlaceholder"),
                    reportType: this.reportType,
                    chartFormat: this.chartFormat,
                    vo2MaxMetrics: this.vo2MaxMetrics,
                    gender: this.gender,
                    ageRange: this.ageRange,
                    vo2MaxCategories: this.vo2MaxCategories,
                    useStrictMinMax: this.useStrictMinMax,
                    vo2MaxToggle: this.vo2MaxToggle
                }),
                this.vo2MaxGaugeChartView.render()
            },
            initDynamicText: function() {
                this.vo2MaxDynamicTextView = new o.a({
                    el: this.$("#vo2MaxDynamicTextPlaceholder"),
                    chartFormat: this.chartFormat,
                    reportType: this.reportType,
                    vo2MaxMetrics: this.vo2MaxMetrics,
                    gender: this.gender,
                    ageRange: this.ageRange,
                    vo2MaxToggle: this.vo2MaxToggle
                }),
                this.vo2MaxDynamicTextView.render()
            },
            getExportData: function() {
                return this.vo2MaxGaugeChartView.getExportData()
            }
        });
        e.a = g
    },
    5142: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = r.a.Model.extend({});
        e.a = r.a.Collection.extend({
            model: s,
            url: function() {
                return "/proxy/fitnessstats-service/fitnessstats/activity/exercises/" + this.aggregation + "/" + this.activityTypeKey + "?startDate=" + this.startDate + "&endDate=" + this.endDate
            },
            initialize: function(t) {
                this.startDate = t.startDate,
                this.endDate = t.untilDate,
                this.aggregation = t.aggregation,
                this.activityTypeKey = t.activityTypeKey
            },
            setDisplayName: function(t) {
                this.displayName = t
            }
        })
    },
    5143: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = a(1302)
          , n = r.a.Model.extend({})
          , o = r.a.Collection.extend({
            model: n,
            url: function() {
                return "/proxy/vo2max-service/vo2max/colorrange/" + this.type
            },
            initialize: function(t) {
                switch (t.metricName) {
                case s.a.ACTIVITY_VERTICAL_OSCILLATION:
                    this.type = "VerticalOscillation";
                    break;
                case s.a.ACTIVITY_GROUND_CONTACT_TIME:
                    this.type = "GroundContactTime";
                    break;
                case s.a.ACTIVITY_AVERAGE_RUN_CADENCE:
                    this.type = "Cadence"
                }
            }
        });
        e.a = o
    },
    5144: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = r.a.Model.extend({});
        e.a = r.a.Collection.extend({
            model: s,
            url: function() {
                return "/proxy/wellness-service/wellness/bodyBattery/reports/daily?startDate=" + this.startDate + "&endDate=" + this.endDate
            },
            initialize: function(t) {
                this.startDate = t.startDate,
                this.endDate = t.untilDate
            },
            setDisplayName: function(t) {
                this.displayName = t
            }
        })
    },
    5145: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = r.a.Model.extend({
            initialize: function() {}
        })
          , n = r.a.Collection.extend({
            model: s,
            url: function() {
                return "/proxy/vo2max-service/vo2max/range/" + this.gender + "/" + this.ageRange
            },
            initialize: function(t, e) {
                e.gender ? this.gender = e.gender : this.gender = "MALE",
                e.ageRange ? "Under 20" === e.ageRange ? this.ageRange = "20-29" : "80+" === e.ageRange ? this.ageRange = "70-79" : this.ageRange = e.ageRange : this.ageRange = "40-49"
            },
            getRangeMin: function() {
                for (var t = 100, e = 0; e < this.length; e++)
                    this.models[e].get("categoryRangeMin") < t && (t = this.models[e].get("categoryRangeMin"));
                return t
            },
            getRangeMax: function() {
                for (var t = 0, e = 0; e < this.length; e++)
                    this.models[e].get("categoryRangeMax") > t && (t = this.models[e].get("categoryRangeMax"));
                return t
            }
        });
        e.a = n
    },
    5152: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = r.a.Model.extend({
            hasData: function() {
                return this.has("heatAltitudeAcclimation")
            },
            hasAltitudeAcclimationData: function() {
                return this.hasData() && this.get("heatAltitudeAcclimation").altitudeAcclimation
            },
            hasHeatAcclimationData: function() {
                return this.hasData() && this.get("heatAltitudeAcclimation").heatAcclimationPercentage
            }
        });
        e.a = r.a.Collection.extend({
            model: s,
            url: function() {
                return "/proxy/metrics-service/metrics/maxmet/" + this.duration + "/" + this.startDate + "/" + this.endDate
            },
            initialize: function(t) {
                this.startDate = t.startDate,
                this.endDate = t.untilDate,
                this.duration = t.duration
            }
        })
    },
    5156: function(t, e, a) {
        "use strict";
        var i = a(7)
          , r = a.n(i)
          , s = a(6)
          , n = a(9)
          , o = a.n(n)
          , l = a(13)
          , c = a(23)
          , h = a(85)
          , d = a(1339)
          , u = a(18)
          , p = a(1227)
          , g = a(3230)
          , m = a.n(g)
          , f = o.a.View.extend({
            tagName: "tr",
            initialize: function(t) {
                this.activityModel = t.activityModel,
                this.template = r.a.template(m.a)
            },
            render: function() {
                return this.$el.html(this.template({
                    Localizer: s.a,
                    activityDate: this.getActivityDate(),
                    activityName: this.activityModel.getActivityName(),
                    distance: l.a.personalizeDistance(l.a.revertDistanceToCm(this.activityModel.get("distance"), "meter"), this.activityModel.get("activityType")),
                    distanceUnit: s.a.localize(l.a.getDistanceUnitKey(this.activityModel.get("activityType"), this.activityModel.getDistance())),
                    activityLoad: l.a.personalizeExerciseLoad(this.activityModel.get("activityTrainingLoad")),
                    activityId: this.activityModel.getActivityId(),
                    primaryBenefit: this.getPrimaryBenefit(),
                    activityType: this.activityModel.getActivityType(),
                    NavigationUtil: u.default
                })),
                this
            },
            getActivityDate: function() {
                var t = this.activityModel.get("startLocal");
                return c.a.formatDayMonthDate(h.a.parseISO(t), !0)
            },
            getPrimaryBenefit: function() {
                var t = {}
                  , e = d.a.getPrimaryBenefit(this.activityModel.get("trainingEffectLabel"));
                return t.type = e ? s.a.localize(e.label) : s.a.localize("te.label.unknown"),
                t.color = e ? e.color : p.a.Colors.grey,
                t
            }
        })
          , v = a(3231)
          , T = a.n(v);
        e.a = o.a.View.extend({
            initialize: function(t) {
                this.template = r.a.template(T.a),
                this.data = t.data
            },
            render: function() {
                this.$el.html(this.template({
                    Localizer: s.a
                })),
                this.renderActivityList()
            },
            renderActivityList: function() {
                var t = this.$el.find("tbody");
                this.getActivityModel().forEach(function(e) {
                    var a = new f({
                        activityModel: e
                    }).render();
                    t.append(a.el)
                })
            },
            getActivityModel: function() {
                return this.data.filter(function(t) {
                    return t && t.has("activityTrainingLoad")
                })
            },
            destroy: function() {
                this.undelegateEvents()
            }
        })
    },
    5167: function(t, e, a) {
        "use strict";
        var i = a(9)
          , r = a.n(i)
          , s = a(6)
          , n = r.a.Model.extend({
            getActivityName: function() {
                return this.get("name") || ""
            },
            getActivityId: function() {
                return this.get("activityId")
            },
            getDistance: function() {
                return this.get("distance") || 0
            },
            getActivityType: function() {
                var t = this.get("activitySubType") || this.get("activityType");
                if (t) {
                    for (var e = t.split("_"), a = 0; a < e.length; a++)
                        e[a] = e[a].charAt(0).toUpperCase() + e[a].slice(1);
                    t = e.join(" ")
                } else
                    t = s.a.localize("untitled");
                return t
            },
            isParentActivityMetric: function() {
                return null === this.get("parentId")
            }
        })
          , o = a(371)
          , l = a(355)
          , c = a(85);
        e.a = r.a.Collection.extend({
            model: n,
            url: function() {
                var t = "/proxy/fitnessstats-service/activity/all?startDate=" + this.startDate + "&endDate=" + this.endDate;
                return this.metricIdList && (t += this.queryParams),
                this.activityType && (t += "&activityType=" + this.activityType),
                t
            },
            comparator: function(t) {
                return -c.a.parseISO(t.get("startLocal"))
            },
            initialize: function(t) {
                this.startDate = t.startDate,
                this.endDate = t.endDate,
                this.duration = t.duration,
                this.metricIdList = t.metricIdList,
                this.activityType = t.activityType,
                this.metricIdList && this.setMetricParams()
            },
            setMetricParams: function() {
                this.queryParams = "";
                var t = (new l.a).convertArrayToQueryString("metric", this.getArrayOfMetricNamesFromMetricIds(this.metricIdList));
                this.queryParams += "&" + t
            },
            getArrayOfMetricNamesFromMetricIds: function(t) {
                for (var e = [], a = 0, i = t.length; a < i; a += 1)
                    if (t[a])
                        for (var r in o.a)
                            if (o.a.hasOwnProperty(r) && o.a[r].id === t[a] && o.a[r].name) {
                                e.push(o.a[r].name);
                                break
                            }
                return e
            }
        })
    }
}]);
//# sourceMappingURL=77.9aeba8c0.chunk.js.map
