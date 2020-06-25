(window.webpackJsonp = window.webpackJsonp || []).push([[23], {
    1260: function(e, a, t) {
        "use strict";
        var n = t(11)
          , r = t.n(n)
          , s = "success"
          , c = "error"
          , i = "info"
          , l = function(e) {
            var a = "";
            switch (e.type) {
            case c:
                a = "alert-error";
                break;
            case s:
                a = "alert-success";
                break;
            case i:
                a = "alert-info"
            }
            return a
        };
        a.a = function(e) {
            return r.a.createElement("div", {
                className: "alert ".concat(l(e), " ").concat(e.className)
            }, e.message ? r.a.createElement("span", {
                className: "alert-text"
            }, e.message) : e.children)
        }
    },
    1351: function(e, a, t) {
        "use strict";
        t.d(a, "d", function() {
            return s
        }),
        t.d(a, "a", function() {
            return c
        }),
        t.d(a, "b", function() {
            return i
        }),
        t.d(a, "c", function() {
            return l
        }),
        t.d(a, "f", function() {
            return d
        }),
        t.d(a, "e", function() {
            return o
        });
        var n = t(1499)
          , r = window.URL_BUST_VALUE
          , s = function(e) {
            return e.badgeTypeIds.includes(n.c.REPEATABLE)
        }
          , c = function() {
            return "".concat(n.b, "?bust=").concat(r)
        }
          , i = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "lrg";
            if (!e)
                throw "getBadgeImageUrl(badgeId): badgeId not specified";
            return "/web-images/badges/xxhdpi/badge_".concat(e, "_").concat(a, ".png?bust=").concat(r)
        }
          , l = function(e) {
            var a = e.badgeTypeIds;
            return a.includes(n.c.LIMITED_ANNUAL) || a.includes(n.c.LIMITED_SINGLE)
        }
          , d = function(e, a) {
            return a.localize("badge_title_" + e)
        }
          , o = function(e, a) {
            return a.localize("badge_description_" + e)
        }
    },
    1498: function(e, a, t) {
        "use strict";
        var n = t(91)
          , r = t(92)
          , s = t(111)
          , c = t(109)
          , i = t(110)
          , l = t(11)
          , d = t.n(l)
          , o = t(8)
          , u = t(1351)
          , b = function(e) {
            function a() {
                var e;
                return Object(n.a)(this, a),
                (e = Object(s.a)(this, Object(c.a)(a).call(this))).state = {
                    imageError: !1
                },
                e
            }
            return Object(i.a)(a, e),
            Object(r.a)(a, [{
                key: "render",
                value: function() {
                    var e, a = this, t = this.props, n = t.badge, r = t.size;
                    if (!r || "lrg" === r) {
                        var s = Object(u.b)(n.badgeId, "sml");
                        e = {
                            backgroundImage: "url(".concat(s, ")"),
                            backgroundPosition: "center",
                            backgroundSize: "100%",
                            backgroundRepeat: "no-repeat"
                        }
                    }
                    return d.a.createElement("img", {
                        src: this.state.imageError ? Object(u.a)() : Object(u.b)(n.badgeId, r),
                        alt: Object(u.f)(n.badgeKey, o.a),
                        className: "badge-img",
                        onError: function() {
                            return a.handleImageError()
                        },
                        style: e
                    })
                }
            }, {
                key: "handleImageError",
                value: function() {
                    this.setState({
                        imageError: !0
                    })
                }
            }]),
            a
        }(d.a.Component);
        a.a = b
    },
    1499: function(e, a, t) {
        "use strict";
        t.d(a, "b", function() {
            return n
        }),
        t.d(a, "d", function() {
            return r
        }),
        t.d(a, "a", function() {
            return s
        }),
        t.d(a, "c", function() {
            return c
        });
        var n = "/web-images/badges/svg/badge_placeholder.svg"
          , r = {
            distance: "mi_km",
            distanceAlt: "ft_m",
            activities: "activities",
            days: "days",
            steps: "steps",
            miles: "mi"
        }
          , s = {
            ACTIVITY: "ACTIVITY",
            GROUP_CHALLENGE: "GROUP_CHALLENGE",
            ADHOC_CHALLENGE: "ADHOC_CHALLENGE",
            VIVOFITJR_CHALLENGE: "VIVOFITJR_CHALLENGE",
            VIVOFITJR_TEAM_CHALLENGE: "VIVOFITJR_TEAM_CHALLENGE",
            DAY: "DAY",
            NO_LINK: "NO_LINK",
            BADGE_CHALLENGE: "BADGE_CHALLENGE"
        }
          , c = {
            ONE_TIME: 1,
            TRAINING_CLASS: 2,
            REPEATABLE: 3,
            CUMULATIVE: 4,
            LIMITED_ANNUAL: 5,
            LIMITED_SINGLE: 6
        }
    },
    1527: function(e, a, t) {
        "use strict";
        var n = t(15)
          , r = t(91)
          , s = t(92)
          , c = t(111)
          , i = t(109)
          , l = t(110)
          , d = t(11)
          , o = t.n(d)
          , u = t(135)
          , b = t(8)
          , g = t(386)
          , m = t(173)
          , p = t(1498)
          , f = t(1855)
          , h = t(93)
          , E = t(23)
          , v = t(12)
          , N = t(1351)
          , y = t(1499)
          , A = function(e) {
            function a() {
                var e;
                return Object(r.a)(this, a),
                (e = Object(c.a)(this, Object(i.a)(a).call(this))).state = {
                    open: !1,
                    earnedDetails: null
                },
                e
            }
            return Object(l.a)(a, e),
            Object(s.a)(a, [{
                key: "render",
                value: function() {
                    var e = this.props.badge;
                    return null === e.displayName ? null : Object(N.d)(e) && e.badgeEarnedNumber > 1 ? this.renderRepeatableMessage() : o.a.createElement("div", {
                        className: "badge-earned-msg",
                        dangerouslySetInnerHTML: {
                            __html: this.renderSingularMessage()
                        }
                    })
                }
            }, {
                key: "renderSingularMessage",
                value: function() {
                    var e, a, t = this.props.badge, n = E.a.formatLongMonthDayYear(h.a.parseISO(t.badgeEarnedDate)), r = this.getBadgeAssocTypeKey(t.badgeAssocTypeId);
                    if (r === y.a.NO_LINK || !t.badgeAssocDataId || r === y.a.BADGE_CHALLENGE)
                        return this.renderSimpleEarnedString(n);
                    switch (r) {
                    case y.a.ACTIVITY:
                        e = t.badgeAssocDataName || b.a.localize("untitled"),
                        a = "/activity/".concat(t.badgeAssocDataId);
                        break;
                    case y.a.GROUP_CHALLENGE:
                        e = t.badgeAssocDataName,
                        a = "/challenge/".concat(t.badgeAssocDataId);
                        break;
                    case y.a.ADHOC_CHALLENGE:
                        e = t.badgeAssocDataName,
                        a = "/adhoc-challenge/".concat(t.badgeAssocDataId);
                        break;
                    case y.a.VIVOFITJR_CHALLENGE:
                        e = t.badgeAssocDataName,
                        a = "/vivofitjr-challenge/".concat(t.badgeAssocDataId);
                        break;
                    case y.a.VIVOFITJR_TEAM_CHALLENGE:
                        e = t.badgeAssocDataName,
                        a = "/vivofitjr-teamchallenge/".concat(t.badgeAssocDataId);
                        break;
                    case y.a.DAY:
                        e = E.a.formatLongMonthDayYear(h.a.parseISO(t.badgeAssocDataId)),
                        a = "/daily-summary/".concat(t.badgeAssocDataId)
                    }
                    return e && a ? this.renderAnchorEearnedString(e, a) : null
                }
            }, {
                key: "renderAnchorEearnedString",
                value: function(e, a) {
                    var t = this.props
                      , n = t.isConnection
                      , r = t.badge
                      , s = r.fullName || r.displayName;
                    return n ? b.a.localize("badge_earned_connection_date", this.getAnchorForTranslation(e, a), s) : b.a.localize("badge_earned_date", this.getAnchorForTranslation(e, a))
                }
            }, {
                key: "renderSimpleEarnedString",
                value: function(e) {
                    var a = this.props
                      , t = a.isConnection
                      , n = a.badge
                      , r = n.fullName || n.displayName;
                    return t ? b.a.localize("badge_earned_connection_date", e, r) : b.a.localize("badge_earned_date", e)
                }
            }, {
                key: "getAnchorForTranslation",
                value: function(e, a) {
                    return '<a href="'.concat(v.default.url(a), '" onclick="event.preventDefault(); Backbone.history.navigate(\'').concat(a, "', {trigger: true});\">").concat(e, "</a>")
                }
            }, {
                key: "getBadgeAssocTypeKey",
                value: function(e) {
                    return this.props.badgesAttributes.badgeAssocTypes.find(function(a) {
                        return a.badgeAssocTypeId === e
                    }).badgeAssocTypeKey
                }
            }, {
                key: "renderRepeatableMessage",
                value: function() {
                    var e = this
                      , a = this.props
                      , t = a.badge
                      , n = a.isConnection;
                    return o.a.createElement("div", {
                        className: "badge-earned-msg"
                    }, n ? b.a.localize("badge_earned_connection_amount", t.badgeEarnedNumber, t.fullName || t.displayName) : b.a.localize("badge_earned_amount", t.badgeEarnedNumber), "\xa0", o.a.createElement("a", {
                        onClick: function(a) {
                            return e.setState({
                                open: !e.state.open
                            })
                        }
                    }, this.state.open ? o.a.createElement("span", {
                        id: "hide-link"
                    }, b.a.localize("training_plans_hide_details")) : o.a.createElement("span", {
                        id: "view-link"
                    }, b.a.localize("view_details"))), this.state.open ? o.a.createElement("ul", {
                        className: "badge-earned-msg-list collapse in"
                    }, this.renderRepeatableMessageDetails()) : null)
                }
            }, {
                key: "renderRepeatableMessageDetails",
                value: function() {
                    var e = this
                      , a = this.props
                      , t = a.dispatch
                      , n = a.displayName
                      , r = a.badge;
                    return this.state.earnedDetails ? this.state.earnedDetails.map(function(a, t) {
                        var n, r, s = E.a.formatMonthDayYear(h.a.parseISOUTC(a.badgeEarnedDate)), c = !1;
                        switch (e.getBadgeAssocTypeKey(a.badgeAssocTypeId)) {
                        case y.a.ACTIVITY:
                            a.badgeAssocDataId && (n = "/activity/".concat(a.badgeAssocDataId),
                            r = a.badgeAssocDataName || b.a.localize("untitled"));
                            break;
                        case y.a.GROUP_CHALLENGE:
                            a.badgeAssocDataId && (n = "/challenge/".concat(a.badgeAssocDataId),
                            r = a.badgeAssocDataName);
                            break;
                        case y.a.ADHOC_CHALLENGE:
                            a.badgeAssocDataId && (n = "/adhoc-challenge/".concat(a.badgeAssocDataId),
                            r = a.badgeAssocDataName);
                            break;
                        case y.a.VIVOFITJR_CHALLENGE:
                            a.badgeAssocDataId && (n = "/vivofitjr-challenge/".concat(a.badgeAssocDataId),
                            r = a.badgeAssocDataName);
                            break;
                        case y.a.VIVOFITJR_TEAM_CHALLENGE:
                            a.badgeAssocDataId && (n = "/vivofitjr-teamchallenge/".concat(a.badgeAssocDataId),
                            r = a.badgeAssocDataName || b.a.localize("untitled"));
                            break;
                        case y.a.DAY:
                            if (a.badgeAssocDataId) {
                                var i = E.a.formatISODate(h.a.parseISOUTC(a.badgeEarnedDate));
                                n = "/daily-summary/".concat(i),
                                c = !0
                            }
                        }
                        return o.a.createElement("li", {
                            key: t
                        }, o.a.createElement("div", {
                            className: "badge-date"
                        }, c ? o.a.createElement("a", {
                            href: v.default.url(n),
                            onClick: function(e) {
                                return v.default.anchorTagHandler(e)
                            }
                        }, s) : s), o.a.createElement("div", {
                            className: "badge-event truncate"
                        }, r ? o.a.createElement("a", {
                            href: v.default.url(n),
                            onClick: function(e) {
                                return v.default.anchorTagHandler(e)
                            }
                        }, r) : null))
                    }) : (t(Object(g.k)(n, r.badgeId, 1, 1e3)).then(function(a) {
                        e.setState({
                            earnedDetails: a
                        })
                    }),
                    o.a.createElement("div", {
                        className: "textCenter"
                    }, o.a.createElement(m.Spinner, null)))
                }
            }]),
            a
        }(o.a.Component)
          , I = t(2395)
          , O = t(2396)
          , _ = function(e) {
            return e.badge.relatedBadges.map(function(a, t) {
                return o.a.createElement(O.a, Object.assign({}, e, {
                    key: t,
                    badge: a,
                    available: !a.earnedByMe,
                    displayName: a.earnedByMe ? e.viewerSocialProfile.displayName : null,
                    viewer: null,
                    connection: null,
                    displayViewer: !1,
                    displayConnection: !1
                }))
            })
        }
          , D = function(e) {
            return 0 === e.badge.relatedBadges.length ? null : o.a.createElement("div", {
                className: "related-badges-list"
            }, o.a.createElement("h4", {
                className: "h5"
            }, b.a.localize("related_badges")), _(e))
        }
          , C = t(1674)
          , L = t(136)
          , k = t(286)
          , j = t(221)
          , T = function(e) {
            function a(e) {
                var t;
                return Object(r.a)(this, a),
                (t = Object(c.a)(this, Object(i.a)(a).call(this, e))).state = {
                    connections: e.badge.connections
                },
                t
            }
            return Object(l.a)(a, e),
            Object(s.a)(a, [{
                key: "render",
                value: function() {
                    var e = this
                      , a = this.props.badge;
                    if (0 === a.connectionNumber)
                        return o.a.createElement("div", {
                            className: "connections-with-badge"
                        }, o.a.createElement("h4", {
                            className: "h5"
                        }, b.a.localize("connections_badge")), o.a.createElement("div", {
                            className: "badge-connections-msg"
                        }, b.a.localize("no_connections_earned_badge")));
                    var t = a.connectionNumber - this.state.connections.length;
                    return o.a.createElement("div", {
                        className: "connections-with-badge"
                    }, o.a.createElement("h4", {
                        className: "h5"
                    }, b.a.localize("connections_badge")), this.renderConnections(), t > 0 ? o.a.createElement("a", {
                        className: "additional-connections",
                        href: "",
                        onClick: function(a) {
                            return e.loadMoreConnections(a)
                        }
                    }, "+", t) : null)
                }
            }, {
                key: "renderConnections",
                value: function() {
                    var e = this;
                    return this.state.connections.map(function(a, t) {
                        var n = a.fullName || a.displayName;
                        return o.a.createElement("a", {
                            href: v.default.url("/profile/" + a.displayName),
                            title: n,
                            className: "has-tooltip",
                            onClick: function(a) {
                                return e.onConnectionClicked(a)
                            },
                            key: t
                        }, o.a.createElement("img", {
                            src: a.profileImageUrlMedium || L.a.medium,
                            className: "avatar avatar-small",
                            alt: n
                        }), o.a.createElement(C.a, {
                            level: a.userLevel,
                            small: !0
                        }))
                    })
                }
            }, {
                key: "onConnectionClicked",
                value: function(e) {
                    (0,
                    this.props.dispatch)(Object(j.Ub)()),
                    v.default.anchorTagHandler(e)
                }
            }, {
                key: "loadMoreConnections",
                value: function(e) {
                    var a = this;
                    e.preventDefault();
                    var t = this.props
                      , r = t.dispatch
                      , s = t.badge;
                    r(Object(g.g)(s.badgeId, this.state.connections.length + 1, 7)).then(function(e) {
                        a.setState({
                            connections: [].concat(Object(n.a)(a.state.connections), Object(n.a)(e.data))
                        })
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    Object(k.a)()
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    Object(k.a)()
                }
            }]),
            a
        }(o.a.Component)
          , w = function(e, a) {
            (0,
            a.dispatch)(Object(j.Ub)()),
            v.default.anchorTagHandler(e)
        }
          , M = function(e, a) {
            return e ? a.localize("badge_earned_status") : a.localize("badge_not_earned_status")
        }
          , V = function(e) {
            var a = e.badge
              , t = e.connection;
            return t ? o.a.createElement("a", {
                href: v.default.url("/badges/" + t),
                className: "badge-status-msg",
                onClick: function(a) {
                    return w(a, e)
                }
            }, M(a.earnedByMe, b.a)) : o.a.createElement("div", {
                className: "badge-status-msg"
            }, M(a.earnedByMe, b.a))
        }
          , S = t(406)
          , z = t(1260)
          , U = t(438)
          , B = function(e) {
            var a = e.badge;
            return Object(N.c)(a) ? null : o.a.createElement("p", {
                className: "badge-available-date"
            }, b.a.localize("available_since", E.a.formatMonthDayYear(h.a.parseISO(a.badgeStartDate))))
        }
          , G = function(e) {
            function a(e) {
                var t;
                return Object(r.a)(this, a),
                (t = Object(c.a)(this, Object(i.a)(a).call(this, e))).state = {
                    view: null,
                    badge: null,
                    error: !1
                },
                t.displayName = null,
                t
            }
            return Object(l.a)(a, e),
            Object(s.a)(a, [{
                key: "componentDidMount",
                value: function() {
                    this.getBadgeData()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    e.badge.badgeId !== this.props.badge.badgeId && this.getBadgeData()
                }
            }, {
                key: "getBadgeData",
                value: function() {
                    var e = this
                      , a = this.props
                      , t = a.badge
                      , n = a.viewerSocialProfile
                      , r = a.dispatch
                      , s = a.displayName
                      , c = null
                      , i = null;
                    null !== this.state.badge && this.setState({
                        badge: null
                    }),
                    this.displayName = void 0 !== s ? s : t.displayName,
                    null !== this.displayName && this.displayName !== n.displayName ? (c = U.b.CONNECTION,
                    i = this.displayName) : (c = null === this.displayName ? U.b.AVAILABLE : U.b.EARNED,
                    this.markNewBadgeAsSeen()),
                    this.setState({
                        view: c
                    }),
                    r(Object(g.d)(t.badgeId, i)).then(function(a) {
                        e.setState({
                            badge: a
                        })
                    }).catch(function() {
                        e.setState({
                            error: !0
                        })
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state
                      , a = e.badge
                      , t = e.view;
                    if (e.error)
                        return o.a.createElement(z.a, {
                            type: "error",
                            message: b.a.localize("request.error.msg")
                        });
                    if (!a)
                        return o.a.createElement("div", {
                            className: "textCenter marBottomXS"
                        }, o.a.createElement(m.Spinner, null));
                    switch (t) {
                    case U.b.EARNED:
                    case U.b.AVAILABLE:
                        return this.renderUserView();
                    case U.b.CONNECTION:
                        return this.renderConnectionView();
                    default:
                        return null
                    }
                }
            }, {
                key: "renderUserView",
                value: function() {
                    var e = this.state.badge;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: "badge-detail ".concat(e.earnedByMe ? "badge-earned" : "badge-available")
                    }, o.a.createElement(p.a, Object.assign({}, this.props, {
                        badge: e
                    })), e.badgeProgressValue ? o.a.createElement(f.a, Object.assign({}, this.props, {
                        showValues: !0,
                        badge: e
                    })) : null, o.a.createElement("div", {
                        className: "badge-summary"
                    }, o.a.createElement(I.a, Object.assign({}, this.props, {
                        badge: e
                    }))), o.a.createElement(A, Object.assign({}, this.props, {
                        badge: e,
                        displayName: this.displayName
                    }))), o.a.createElement(D, Object.assign({}, this.props, {
                        badge: e
                    })), o.a.createElement(T, Object.assign({}, this.props, {
                        badge: e
                    })), o.a.createElement(B, Object.assign({}, this.props, {
                        badge: e
                    })))
                }
            }, {
                key: "renderConnectionView",
                value: function() {
                    var e = this.state.badge
                      , a = this.props
                      , t = a.noStatusLinkOnConnectionView
                      , n = a.viewerSocialProfile;
                    return o.a.createElement("div", {
                        className: "badge-detail badge-earned"
                    }, o.a.createElement(p.a, Object.assign({}, this.props, {
                        badge: e
                    })), o.a.createElement("div", {
                        className: "badge-summary"
                    }, o.a.createElement(I.a, Object.assign({}, this.props, {
                        badge: e
                    }))), o.a.createElement(A, Object.assign({}, this.props, {
                        badge: e,
                        displayName: this.displayName,
                        isConnection: !0
                    })), n.displayName ? o.a.createElement(V, Object.assign({}, this.props, {
                        badge: e,
                        connection: t ? null : this.displayName
                    })) : null)
                }
            }, {
                key: "markNewBadgeAsSeen",
                value: function() {
                    var e = this.props
                      , a = e.badge
                      , t = e.badges
                      , r = e.dispatch;
                    if (!1 === a.badgeIsViewed && a.earnedByMe) {
                        r(Object(g.l)(a.badgeId));
                        var s = t.earned.data ? Object(n.a)(t.earned.data) : []
                          , c = t.latestEarned.data ? Object(n.a)(t.latestEarned.data) : []
                          , i = s.find(function(e) {
                            return e.badgeId === a.badgeId
                        })
                          , l = c.find(function(e) {
                            return e.badgeId === a.badgeId
                        });
                        i && (i.badgeIsViewed = !0,
                        r(Object(g.m)(s))),
                        l && (l.badgeIsViewed = !0,
                        r(Object(g.n)(c)))
                    }
                }
            }]),
            a
        }(o.a.Component);
        a.a = Object(u.b)(function(e) {
            return {
                badges: Object(S.b)(e)
            }
        })(G)
    },
    1674: function(e, a, t) {
        "use strict";
        var n = t(11)
          , r = t.n(n);
        a.a = function(e) {
            return r.a.createElement("div", {
                className: "badge-level level-".concat(e.level, " level-").concat(e.small ? "sm" : "md", " ").concat(e.className || "")
            }, r.a.createElement("span", null, e.level))
        }
    },
    1855: function(e, a, t) {
        "use strict";
        var n = t(11)
          , r = t.n(n)
          , s = t(8)
          , c = t(14)
          , i = t(1499)
          , l = function(e, a, t) {
            switch (a.badgeUnitKey || a) {
            case i.d.distance:
                return t ? c.a.formatWholeNumber(Math.ceil(c.a.convertDistance(e))) : c.a.formatWholeNumber(Math.floor(c.a.convertDistance(e)));
            case i.d.distanceAlt:
                return t ? c.a.formatWholeNumber(Math.ceil(c.a.convertMetersFt(e))) : c.a.formatWholeNumber(Math.floor(c.a.convertMetersFt(e)));
            case i.d.miles:
                return t ? c.a.formatWholeNumber(Math.ceil(e * c.a.ConversionFactors.MetersToMiles)) : c.a.formatWholeNumber(Math.floor(e * c.a.ConversionFactors.MetersToMiles));
            case i.d.activities:
            case i.d.days:
            case i.d.steps:
            default:
                return e
            }
        }
          , d = function(e) {
            switch (e.badgeUnitKey || e) {
            case i.d.distance:
                return s.a.localize(c.a.getDistanceUnitKey());
            case i.d.distanceAlt:
                return s.a.localize(c.a.getMetersFtUnitKey());
            case i.d.miles:
                return s.a.localize("distance_unit_statute");
            case i.d.activities:
                return s.a.localize("activities").toLocaleLowerCase();
            case i.d.days:
                return s.a.localize("label_days").toLocaleLowerCase();
            case i.d.steps:
            default:
                return s.a.localize("steps").toLocaleLowerCase()
            }
        }
          , o = function(e, a) {
            return a.find(function(a) {
                return a.badgeUnitId === e
            })
        }
          , u = function(e) {
            0 === e && (e = 1);
            var a = Object.keys(i.d)[e - 1];
            return i.d[a]
        };
        a.a = function(e) {
            var a = e.badge
              , t = e.showValues
              , n = e.badgesAttributes
              , s = e.badgeUnitId
              , c = e.isBadgeChallenge
              , i = 100 * a.badgeProgressValue / a.badgeTargetValue
              , b = c ? u(s) : (typeof n !== 'undefined')? o(a.badgeUnitId, n.badgeUnits) : null;       // TX GCOverrides v1.19
            return b = t || 0 === s ? b : null,
            r.a.createElement("div", {
                className: "badge-progress"
            }, r.a.createElement("div", {
                className: "progress-bar"
            }, r.a.createElement("div", {
                className: "bar-complete-wrapper"
            }, r.a.createElement("div", {
                className: "bar-complete",
                style: {
                    width: i + "%"
                }
            }))), t ? r.a.createElement("div", {
                className: "badge-progress-label"
            }, l(a.badgeProgressValue, b, !0), " /", " ", l(a.badgeTargetValue, b, !0), " ", d(b)) : null)
        }
    },
    2395: function(e, a, t) {
        "use strict";
        var n = t(11)
          , r = t.n(n)
          , s = t(8)
          , c = t(1351)
          , i = function(e, a, t) {
            if (a) {
                var n = a.badgeDifficulties.find(function(a) {
                    return e.badgeDifficultyId === a.badgeDifficultyId
                });
                return t.localize(1 !== n.badgePoints ? "points_abbrev" : "point_abbrev", n.badgePoints)
            }
            return ""
        };
        a.a = function(e) {
            var a = e.badge
              , t = e.badgesAttributes;
            return [r.a.createElement("div", {
                className: "badge-name",
                key: "name"
            }, r.a.createElement("span", null, Object(c.f)(a.badgeKey, s.a), " ", Object(c.c)(a) ? r.a.createElement("span", {
                className: "label"
            }, s.a.localize("limited_time")) : null, Object(c.d)(a) ? r.a.createElement("span", {
                className: "label"
            }, s.a.localize("repeatable")) : null)), r.a.createElement("span", {
                className: "badge-points",
                key: "points"
            }, i(a, t, s.a)), r.a.createElement("span", {
                className: "badge-criteria",
                key: "criteria"
            }, Object(c.e)(a.badgeKey, s.a))]
        }
    },
    2396: function(e, a, t) {
        "use strict";
        var n = t(11)
          , r = t.n(n)
          , s = t(1498)
          , c = t(2395)
          , i = t(1855)
          , l = t(221)
          , d = t(1527)
          , o = t(136)
          , u = function(e, a, t) {
            e.preventDefault();
            var n = a.dispatch
              , s = a.displayViewer
              , c = r.a.createElement(d.a, a);
            s || (c = r.a.createElement(d.a, Object.assign({}, a, {
                displayName: null
            }))),
            t && (c = r.a.createElement(d.a, Object.assign({}, a, {
                displayName: t
            }))),
            n(Object(l.Zc)({
                view: c,
                title: "badge_detail"
            }))
        };
        a.a = function(e) {
            var a = e.badge
              , t = e.viewer
              , n = e.viewerBadgeEarnedNumber
              , l = e.connection
              , d = e.connectionBadgeEarnedNumber
              , b = e.displayViewer
              , g = e.displayConnection;
            return r.a.createElement("div", {
                className: "media ".concat(e.available ? "badge-available" : "badge-earned")
            }, r.a.createElement("div", {
                className: "pull-left"
            }, r.a.createElement("a", {
                className: "badge-thumbnail",
                href: "",
                onClick: function(a) {
                    return u(a, e)
                }
            }, r.a.createElement(s.a, {
                badge: a,
                size: "sml"
            }), b || g || !a.badgeProgressValue ? null : r.a.createElement(i.a, {
                badge: a
            }))), r.a.createElement("div", {
                className: "media-body"
            }, r.a.createElement("a", {
                className: "badge-summary",
                href: "",
                onClick: function(a) {
                    return u(a, e)
                }
            }, r.a.createElement(c.a, e)), b || g ? r.a.createElement("div", {
                className: "badge-compare"
            }, b ? r.a.createElement("div", {
                className: "badge-compare-user"
            }, r.a.createElement("a", {
                href: "",
                onClick: function(a) {
                    return u(a, e)
                }
            }, r.a.createElement("img", {
                className: "avatar avatar-xsmall",
                alt: t.fullName || t.displayName,
                src: t.profileImageUrlMedium || o.a.medium
            }), n > 1 ? r.a.createElement("span", {
                className: "badge-repeatable"
            }, n) : null)) : null, g ? r.a.createElement("div", {
                className: "badge-compare-connection"
            }, r.a.createElement("a", {
                href: "",
                onClick: function(a) {
                    return u(a, e, l.displayName)
                }
            }, r.a.createElement("img", {
                className: "avatar avatar-xsmall",
                alt: l.fullName || l.displayName,
                src: l.profileImageUrlMedium || o.a.medium
            }), d > 1 ? r.a.createElement("span", {
                className: "badge-repeatable"
            }, d) : null)) : null) : null))
        }
    }
}]);
//# sourceMappingURL=23.438d857f.chunk.js.map
