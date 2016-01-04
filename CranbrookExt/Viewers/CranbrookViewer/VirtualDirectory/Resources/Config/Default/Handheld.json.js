{
  "configuration": {
    "version": "2.3",
    "application": {
      "proxyUri": "proxy.ashx?",
      "allowUnsafeContent": false,
      "offlineStorageSpaceMb": "50",
      "geometryServiceUrl": "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/Geometry/GeometryServer"
    },
    "defaultLibraryId": "Mapping",
    "libraries": [
      {
        "id": "Framework.UI",
        "uri": "Resources/Compiled/Framework.UI.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Framework.UI.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping.Infrastructure",
        "uri": "Resources/Compiled/Mapping.Infrastructure.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.Infrastructure.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping",
        "uri": "Resources/Compiled/Mapping.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.en-US.json.js"
          }
        ]
      },
      {
        "id": "Charting",
        "uri": "Resources/Compiled/Charting.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Charting.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping.Charting",
        "uri": "Resources/Compiled/Mapping.Charting.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.Charting.en-US.json.js"
          }
        ]
      }
    ],
    "modules": [
      {
        "moduleName": "Log",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogModule",
        "views": [
          {
            "id": "LogView",
            "viewModelId": "LogViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-view-log",
            "iconUri": "Resources/Images/Icons/log.png",
            "description": "@language-log-app-log",
            "markup": "Mapping/modules/Log/LogView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogView",
            "region": "ApplicationRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "LogViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Alert",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.alert.AlertModule",
        "configuration": {
          "alertRegion": "ModalWindowRegion",
          "overrideNativeAlert": true
        }
      },
      {
        "moduleName": "Authentication",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.authentication.AuthenticationModule",
        "configuration": {
          "region": "ModalWindowRegion"
        }
      },
      {
        "moduleName": "Basemap",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapModule",
        "configuration": {},
        "views": [
          {
            "id": "BasemapSwitcherButtonView",
            "viewModelId": "BasemapSwitcherViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherButtonView",
            "markup": "Mapping/modules/Basemap/SmallBasemapSwitcherButtonView.html",
            "region": "BasemapMapRegion",
            "visible": true,
            "configuration": {}
          },
          {
            "id": "BasemapSwitcherView",
            "viewModelId": "BasemapSwitcherViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherView",
            "markup": "Mapping/modules/Basemap/BasemapSwitcherView.html",
            "region": "ScreenRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "BasemapSwitcherViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Bookmarks",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksModule",
        "configuration": {},
        "views": [
          {
            "id": "BookmarksView",
            "viewModelId": "BookmarksViewModel",
            "markup": "Mapping/modules/Bookmarks/BookmarksView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksView",
            "region": "ScreenRegion",
            "title": "@language-toolbar-bookmark",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "BookmarksViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksViewModel",
            "configuration": {
              "bookmarksEnabled": true,
              "showBookmarksButton": true
            }
          }
        ]
      },
      {
        "moduleName": "Browser",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.browser.BrowserModule",
        "configuration": {
          "title": "@language-browser-title"
        }
      },
      {
        "moduleName": "Charting",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingModule",
        "libraryId": "Mapping.Charting",
        "configuration": {
          "infrastructureLibraryId": "Charting",
          "adapters": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.FeatureChartPointAdapter",
              "source": "Field",
              "configuration": {}
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.DataLinkChartPointAdapter",
              "source": "DataLink",
              "configuration": {}
            }
          ],
          "eventMappings": {
            "ChartPointMouseHoverBeginEvent": [
              "ClearChartHighlights",
              "HighlightChartFeatureSet"
            ],
            "ChartPointMouseHoverEndEvent": [
              "ClearChartHighlights"
            ],
            "ChartPointMouseDownEvent": [
              "ShowMap",
              "RunChartFeatureActions"
            ]
          }
        },
        "views": [
          {
            "id": "ChartingView",
            "viewModelId": "ChartingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingView",
            "markup": "Mapping.Charting/modules/Charting/ChartingView.html",
            "libraryId": "Mapping.Charting",
            "region": "ApplicationRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ChartingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingViewModel",
            "libraryId": "Mapping.Charting",
            "configuration": {
              "mobileMode": true,
              "chartingEnabled": true,
              "chartConfiguration": {
                "animationsEnabled": true,
                "gradientsEnabled": false,
                "interactiveLegendEnabled": false,
                "pieStartAngle": 180,
                "renderAs": "svg"
              },
              "infrastructureLibraryId": "Charting",
              "containerRegionName": "ChartingRegion",
              "containerRegionType": "geocortex.framework.ui.DivStackRegionAdapter",
              "showXButton": true,
              "defaultViewIcon": "Resources/Images/Icons/Toolbar/search-24.png",
              "headerIsVisible": true,
              "showHeaderForStandaloneViews": false,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": false,
              "ordering": {}
            }
          }
        ]
      },
      {
        "moduleName": "Confirm",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.confirm.ConfirmModule",
        "configuration": {
          "confirmRegion": "ModalWindowRegion",
          "overrideNativeConfirm": true
        }
      },
      {
        "moduleName": "Editing",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditingModule",
        "configuration": {},
        "views": [
          {
            "id": "MapDataMenuView",
            "libraryId": "Mapping.Infrastructure",
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuView",
            "markup": "Mapping/infrastructure/menus/MenuView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-feature-offline-tools",
            "description": "@language-common-feature-template-picker-desc",
            "configuration": {
              "menuId": "MapDataMenu"
            }
          },
          {
            "id": "TemplatePickerView",
            "viewModelId": "TemplatePickerViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/file-add-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.TemplatePickerView",
            "markup": "Mapping/modules/Editing/TemplatePicker/TemplatePickerView.html",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "title": "@language-common-feature-template-picker",
            "description": "@language-common-feature-template-picker-desc",
            "configuration": {}
          },
          {
            "id": "EditorView",
            "viewModelId": "EditorViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditorView",
            "markup": "Mapping/modules/Editing/Editor/EditorView.html",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "title": "@language-common-feature-editing",
            "description": "@language-common-feature-editing-desc",
            "configuration": {
              "showXButton": false
            }
          },
          {
            "id": "EditLogView",
            "viewModelId": "EditLogViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.EditLogView",
            "markup": "Mapping/modules/FeatureLayer/EditLogView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "title": "@language-feature-layer-edits-and-sync",
            "description": "@language-common-feature-editlog-desc",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "TemplatePickerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.TemplatePickerViewModel",
            "configuration": {}
          },
          {
            "id": "EditLogViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.EditLogViewModel",
            "configuration": {}
          },
          {
            "id": "EditorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditorViewModel",
            "configuration": {
              "editGeometry": true,
              "validateGeometry": true,
              "tools": [
                {
                  "name": "EditingPointTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POINT",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                  "statusText": "@language-feature-editing-dsk-point-tool"
                },
                {
                  "name": "EditingLineTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "LINE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                  "statusText": "@language-feature-editing-dsk-line-tool"
                },
                {
                  "name": "EditingPolylineTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POLYLINE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                  "statusText": "@language-feature-editing-dsk-polyline-tool"
                },
                {
                  "name": "EditingFreehandPolylineTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "FREEHAND_POLYLINE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                  "statusText": "@language-feature-editing-dsk-freehand-polyline-tool"
                },
                {
                  "name": "EditingPolygonTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POLYGON",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                  "statusText": "@language-feature-editing-dsk-polygon-tool"
                },
                {
                  "name": "EditingFreehandPolygonTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "FREEHAND_POLYGON",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                  "statusText": "@language-feature-editing-dsk-freehand-polygon-tool"
                },
                {
                  "name": "EditingCircleTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "CIRCLE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                  "statusText": "@language-feature-editing-circle-tool"
                },
                {
                  "name": "EditingEllipseTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "ELLIPSE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                  "statusText": "@language-feature-editing-ellipse-tool"
                },
                {
                  "name": "EditingRectangleTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "EXTENT",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                  "statusText": "@language-feature-editing-rectangle-tool"
                }
              ]
            }
          }
        ]
      },
      {
        "moduleName": "FeatureDetails",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsModule",
        "configuration": {
          "providers": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.FeatureActionsViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.FeatureActionsView",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/FeatureActionsView.html",
              "viewConfig": {
                "menuId": "FeatureActions"
              }
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.SingleFeatureChartViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.charting.SingleFeatureChartView",
              "libraryId": "Mapping.Charting",
              "iconUri": "Resources/Images/Icons/charting-24.png",
              "markup": "Mapping.Charting/modules/Charting/SingleFeatureChartView.html",
              "config": {
                "infrastructureLibraryId": "Charting",
                "containerRegionName": "SingleFeatureChartsRegion",
                "chartConfiguration": {
                  "animationsEnabled": true,
                  "gradientsEnabled": false,
                  "interactiveLegendEnabled": false,
                  "pieStartAngle": 180,
                  "renderAs": "svg"
                }
              }
            },
            {
              "enabled": false,
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DescriptionViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DescriptionView",
              "iconUri": "",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DescriptionView.html",
              "config": {
                "longDescription": false
              }
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesView",
              "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttributesView.html"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsView",
              "iconUri": "Resources/Images/Icons/Toolbar/attach-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttachmentsView.html"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.HyperlinksViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.HyperlinksView",
              "iconUri": "Resources/Images/Icons/Toolbar/attach-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/HyperlinksView.html"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesView",
              "iconUri": "Resources/Images/Icons/Toolbar/file-multi-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesView.html",
              "config": {
                "relatedFeatureView": "ResultsViewContainerRegion"
              }
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DataLinksViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DataLinksView",
              "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DataLinksView.html",
              "config": {
                "dataLinkView": "ResultsViewContainerRegion"
              }
            }
          ],
          "regionNames": [
            "FeatureRegion"
          ]
        },
        "views": [
          {
            "id": "FeatureDetailsView",
            "viewModelId": "FeatureDetailsViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsView",
            "markup": "Mapping/modules/FeatureDetails/FeatureDetailsView.html",
            "region": "ResultsViewContainerRegion",
            "title": "@language-feature-details-title",
            "visible": false,
            "configuration": {
              "onDeactivated": [
                "ClearDefaultHighlights"
              ]
            }
          }
        ],
        "viewModels": [
          {
            "id": "FeatureDetailsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsViewModel",
            "configuration": {
              "viewToActivate": "FeatureDetailsView"
            }
          }
        ]
      },
      {
        "moduleName": "FeatureLayer",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.FeatureLayerModule",
        "configuration": {},
        "views": [
          {
            "id": "FeatureLayerDetailsView",
            "viewModelId": "FeatureLayerViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/layers-extract-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.FeatureLayerDetailsView",
            "markup": "Mapping/modules/FeatureLayer/FeatureLayerDetailsView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "title": "@language-common-feature-layer-details",
            "description": "@language-common-feature-layer-details-desc",
            "configuration": {}
          },
          {
            "id": "FeatureLayerListView",
            "viewModelId": "FeatureLayerViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/layer-list-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.FeatureLayerListView",
            "markup": "Mapping/modules/FeatureLayer/FeatureLayerListView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "title": "@language-common-feature-sync-settings",
            "description": "@language-common-feature-sync-settings-desc",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "FeatureLayerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.FeatureLayerViewModel",
            "configuration": {
              "showWhereClause": false
            }
          }
        ]
      },
      {
        "moduleName": "Geolocate",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateModule",
        "configuration": {},
        "views": [
          {
            "id": "GeolocateView",
            "viewModelId": "GeolocateViewModel",
            "markup": "Mapping/modules/Geolocate/GeolocateView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateView",
            "region": "ScreenRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "GeolocateViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateViewModel",
            "configuration": {
              "geolocateEnabled": true,
              "trackingEnabled": true,
              "followingEnabled": true,
              "enableHighAccuracy": true,
              "geolocateAccuracyCircleEnabled": true,
              "adjustExtentZoomOnGeolocate": true,
              "geolocateExtentZoomLevel": 50000,
              "geolocationIndicator": "Resources/Images/Icons/geolocate-position-32.png"
            }
          }
        ]
      },
      {
        "moduleName": "Highlight",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Highlight.HighlightModule",
        "configuration": {
          "fillColor": "#99ECEC3A",
          "borderColor": "#FFCCCC33"
        }
      },
      {
        "moduleName": "Identify",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyModule",
        "configuration": {
          "resultsDisplayName": "@language-identify-results-header",
          "identifyProviders": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.MapIdentifyTaskIdentifyProvider",
              "enabled": true,
              "configuration": {
                "topMostLayerOnly": false,
                "pixelTolerance": 10,
                "polygonPixelTolerance": 5,
                "returnGeometry": true
              }
            }
          ],
          "tools": [
            {
              "name": "IdentifyPointTool",
              "command": "Identify",
              "drawMode": "POINT",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
              "statusText": "@language-mbl-identify-point-tool"
            },
            {
              "name": "IdentifyRectangleTool",
              "command": "Identify",
              "drawMode": "RECTANGLE",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-rectangle-24.png",
              "statusText": "@language-identify-rectangle-tool"
            },
            {
              "name": "IdentifyPolylineTool",
              "command": "Identify",
              "drawMode": "POLYLINE",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-polyline-24.png",
              "statusText": "@language-mbl-identify-polyline-tool"
            },
            {
              "name": "IdentifyPolygonTool",
              "command": "Identify",
              "drawMode": "POLYGON",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-polygon-24.png",
              "statusText": "@language-identify-polygon-tool"
            },
            {
              "name": "IdentifyFreehandPolygonTool",
              "command": "Identify",
              "drawMode": "FREEHAND_POLYGON",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-freehand-24.png",
              "statusText": "@language-identify-freehand-polygon-tool"
            }
          ]
        }
      },
      {
        "moduleName": "Info",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoModule",
        "configuration": {},
        "views": [
          {
            "id": "InfoView",
            "viewModelId": "InfoViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoView",
            "markup": "Mapping/modules/Info/InfoView.html",
            "region": "ScreenRegion",
            "title": "@language-common-welcome",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "InfoViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoViewModel",
            "configuration": {
              "content": "%3Cp%20style%3D%22text-align%3A%20center%3B%22%3EWelcome%20to%20City%20of%20Cranbrook's%20Web%20Mapping%20Application!%3Cbr%3E%3C%2Fp%3E%3Chr%3E%3Cp%3EThe%20purpose%20of%20this%20application%20is%20to%20provide%20the%20public%20with%20access%20to%20view%2C%20analyze%20and%20create%20maps%20utilizing%20the%20city's%20GIS%20data.%3C%2Fp%3E%3Cp%3ESome%20key%20features%20of%20this%20application%20allow%20you%20to%3A%3C%2Fp%3E%3Cp%3E-%20Access%20parcel%20information%20including%20boundary%20and%20legal%20description%2C%20and%26nbsp%3Bcreate%20your%20own%20printable%20PDF%20report.%3C%2Fp%3E%3Cp%3E-%20Perform%20your%20own%20distance%20and%20area%20measurements%20on%20the%20map.%3C%2Fp%3E%3Cp%3E-%20Perform%20searches%20including%3A%20address%20look%20up%2C%20legal%20parcel%20search%20and%20parcel%20ID%20search.-%20Create%20specific%20queries%20for%20data.%3C%2Fp%3E%3Cp%3E%3Cstrong%3ETips%20for%20using%20the%20Map%3A%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3EEnter%20in%20an%20address%20or%20Parcel%20ID%20%23%20in%20the%20search%20bar%20at%20the%20top%20of%20the%20screen.%26nbsp%3B%20Once%20you%20start%20typing%20options%20will%20auto-populate%20where%20you%20can%20choose%20the%20correct%20property.%3C%2Fp%3E%3Cimg%20src%3D%22http%3A%2F%2Fgis-map-02.cbk.local%2FHtml5Viewer%2FResources%2FImages%2FHomePanel1.jpg%22%3E%3Cp%3EYour%20results%20will%20appear%20in%20the%20panel%20on%20the%20left%20side%20of%20the%20screen.%26nbsp%3B%20Choose%20the%20correct%20property%20by%20clicking%20on%20it.%26nbsp%3B%20Information%20about%20the%20property%20will%20expand%20in%20the%20results%20panel.%3C%2Fp%3E%3Cimg%20src%3D%22http%3A%2F%2Fgis-map-02.cbk.local%2FHtml5Viewer%2FResources%2FImages%2FHomePanel2.jpg%22%3E%3Cp%3EFor%20additional%20help%20on%20how%20to%20use%20the%20site%20please%20see%20the%20%3Ca%20href%3D%22http%3A%2F%2Fmap.cranbrook.ca%2FUserGuide%2FWebMapUserGuide.pdf%22%20target%3D%22_blank%22%3EUser%20Guide%3C%2Fa%3E.%3Cbr%3E%0A%0A%3Chr%3E%3C%2Fp%3E%3Cp%3E%3Ci%3EWe%20welcome%20your%20feedback.%20Feel%20free%20to%20contact%26nbsp%3Bus%20with%20any%20questions%2C%20comments%20or%20suggestions%20by%20contacting%20the%20GIS%20Coordinator%20at%20%3C%2Fi%3E%3Ca%20href%3D%22mailto%3ACrystal.Krefting%40cranbrook.ca%22%3ECrystal.Krefting%40cranbrook.ca%3C%2Fa%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3A%20center%3B%22%3E%3Ca%20href%3D%22http%3A%2F%2Fwww.cranbrook.ca%2F%22%20target%3D%22_blank%22%3Ecranbrook.ca%3C%2Fa%3E%3C%2Fp%3E",
              "included": true,
              "title": "@language-common-welcome"
            }
          }
        ]
      },
      {
        "moduleName": "IWantToMenu",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuModule",
        "configuration": {
          "menus": [
            {
              "id": "Iwantto",
              "description": "@language-menu-menus-description",
              "moduleId": "IWantToMenu",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
                  "text": "@language-menu-home-panel",
                  "description": "@language-menu-home-panel-desc",
                  "command": "ShowHomePanel"
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
                  "text": "@language-menu-identify",
                  "description": "@language-menu-identify-desc",
                  "command": "SetActiveTool",
                  "commandParameter": "IdentifyRectangleTool"
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
                  "text": "@language-menu-map-layers",
                  "description": "@language-menu-map-layers-desc",
                  "command": "ShowLayerList"
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-initial-24.png",
                  "text": "@language-menu-zoom-initial-extent",
                  "description": "@language-menu-zoom-initial-extent-desc",
                  "command": "ZoomToInitialExtent"
                }
              ]
            }
          ]
        },
        "views": [
          {
            "id": "IWantToMenuView",
            "viewModelId": "IWantToMenuViewModel",
            "visible": false,
            "isManaged": true,
            "iconUri": "Resources/Images/Icons/arrow-down-small-16.png",
            "title": "@language-menu-title",
            "description": "@language-menu-description",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuView",
            "markup": "Mapping/modules/IWantToMenu/IWantToMenuView.html",
            "region": "ScreenRegion",
            "configuration": {
              "menuId": "Iwantto"
            }
          }
        ],
        "viewModels": [
          {
            "id": "IWantToMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "LayerList",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListModule",
        "configuration": {
          "enableLegendIntegration": true,
          "autoActivateAncestorVisibilities": false,
          "enableLayerIcons": false
        },
        "views": [
          {
            "id": "LayerListView",
            "viewModelId": "LayerListViewModel",
            "title": "@language-layerlist-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListView",
            "markup": "Mapping/modules/LayerList/LayerListView.html",
            "region": "LayerDataContainerRegion",
            "isManaged": false,
            "visible": false,
            "configuration": {}
          },
          {
            "id": "LayerActionsView",
            "viewModelId": "LayerActionsViewModel",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-menu-24.png",
            "markup": "Mapping/modules/LayerList/LayerActions/LayerActionsView.html",
            "title": "@language-layer-actions-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerActionsView",
            "region": "LayerDataContainerRegion",
            "configuration": {
              "menuId": "LayerActions"
            }
          }
        ],
        "viewModels": [
          {
            "id": "LayerListViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListViewModel",
            "configuration": {
              "showTransparencySlider": true,
              "autoExpandLegendSwatches": false
            }
          },
          {
            "id": "LayerActionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerActionsViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "LayerThemes",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerThemes.LayerThemesModule",
        "configuration": {},
        "views": [],
        "viewModels": []
      },
      {
        "moduleName": "Legend",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendModule",
        "configuration": {},
        "views": [
          {
            "id": "LegendView",
            "viewModelId": "LegendViewModel",
            "title": "@language-legend-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendView",
            "markup": "Mapping/modules/Legend/LegendView.html",
            "region": "LayerDataContainerRegion",
            "isManaged": false,
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "LegendViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Map",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapModule",
        "configuration": {
          "panDuration": 0,
          "panRate": 50,
          "zoomDuration": 500,
          "zoomRate": 50,
          "longClickMilliseconds": 500,
          "maxExtentLogSize": 50,
          "onClick": [
            "InvokeMapTip",
            "ClearDefaultHighlights"
          ],
          "onLongClick": [],
          "onFeatureClick": [
            "ShowMapTip"
          ],
          "showLoadingStatus": true,
          "loadingMessageTiming": [
            1000,
            3000,
            3000
          ],
          "defaultPointFeatureZoomScales": [],
          "tools": [
            {
              "name": "CenterMapTool",
              "command": "PanToPoint",
              "drawMode": "POINT",
              "isSticky": true,
              "statusText": "@language-mbl-map-center"
            },
            {
              "name": "ZoomInTool",
              "command": "ZoomToExtent",
              "drawMode": "EXTENT",
              "isSticky": true,
              "statusText": "@language-map-zoom-in"
            },
            {
              "name": "ZoomOutTool",
              "command": "ZoomOutToExtent",
              "drawMode": "EXTENT",
              "isSticky": true,
              "statusText": "@language-map-zoom-out"
            }
          ]
        },
        "views": [
          {
            "id": "MapView",
            "viewModelId": "MapViewModel",
            "visible": true,
            "isManaged": true,
            "title": "@language-map-title",
            "iconUri": "Resources/Images/Icons/Toolbar/map-24.png",
            "description": "@language-map-surface",
            "markup": "Mapping/modules/Map/MapView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapView",
            "region": "ScreenRegion",
            "configuration": {
              "wrapAround180": true,
              "extentBroadcastFrequency": 20,
              "fitTiledMapsToExtent": false,
              "showAttribution": true
            }
          }
        ],
        "viewModels": [
          {
            "id": "MapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapViewModel",
            "configuration": {
              "stepZoomFactor": 0.5,
              "panStep": 0.333
            }
          }
        ]
      },
      {
        "moduleName": "MapTips",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipsModule",
        "configuration": {
          "allowMultiple": false,
          "contentField": "longDescription",
          "onClose": [
            "ClearDefaultHighlights"
          ],
          "featurePresenter": {
            "force": false,
            "featurePropertyName": "currentFeature",
            "view": {
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttributesView.html",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesView",
              "libraryId": "Mapping"
            },
            "viewModel": {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesViewModel",
              "libraryId": "Mapping"
            }
          }
        }
      },
      {
        "moduleName": "Markup",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupModule",
        "viewModels": [
          {
            "id": "MarkupViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupViewModel",
            "configuration": {
              "markupLayerName": "Drawings",
              "defaultPointMarkup": {
                "pointStyle": "Circle",
                "pointSize": 16,
                "pointColor": "#FF4CA0D8"
              },
              "defaultLineMarkup": {
                "lineStyle": "Dash",
                "lineWidth": 3,
                "lineColor": "#FF4CA0D8"
              },
              "defaultPolygonMarkup": {
                "polygonBorderStyle": "Solid",
                "polygonFillStyle": "Solid",
                "polygonBorderWidth": 3,
                "polygonFillColor": "#4D4CA0D8",
                "polygonBorderColor": "#FF4CA0D8"
              },
              "defaultTextMarkup": {
                "textStyle": "Normal",
                "textStyleWeight": "Normal",
                "textSize": "12pt",
                "textColor": "#FF000000",
                "textFamily": "Arial"
              },
              "customMarkupTools": {
                "point": [],
                "polyline": [],
                "polygon": [],
                "text": []
              }
            }
          },
          {
            "id": "StyleSelectorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.styleSelector.StyleSelectorViewModel",
            "configuration": {
              "customPointStyles": [],
              "customLineStyles": [],
              "customPolygonStyles": [],
              "customTextStyles": []
            }
          },
          {
            "id": "TransientMarkupPaletteViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteViewModel",
            "configuration": {}
          }
        ],
        "views": [
          {
            "id": "MarkupEditView",
            "viewModelId": "TransientMarkupPaletteViewModel",
            "visible": true,
            "markup": "Mapping/modules/Markup/ToolPalettes/EditPaletteLarge.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteView",
            "region": "MarkupEditRegion",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Measurement",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementModule",
        "configuration": {
          "tools": [
            {
              "name": "MeasureDistanceTool",
              "command": "MeasureDistance",
              "drawMode": "POLYLINE",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/measure-distance-24.png",
              "statusText": "@language-measurement-measure-distance-tool-status"
            },
            {
              "name": "MeasureAreaTool",
              "command": "MeasureArea",
              "drawMode": "POLYGON",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/measure-area-24.png",
              "statusText": "@language-measurement-measure-area-tool-status"
            },
            {
              "name": "DeleteMeasurementTool",
              "command": "DeleteMeasurement",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/Erase-24.png",
              "statusText": "@language-measurement-erase-status"
            }
          ],
          "measurementProjectionWkid": "",
          "measurementLengthUnits": "meter",
          "measurementAreaUnits": "sqMeter",
          "enablePrediction": true,
          "calculationType": "preserveShape"
        },
        "views": [
          {
            "id": "MeasurementUnitSwitcherView",
            "viewModelId": "MeasurementViewModel",
            "markup": "Mapping/modules/Measurement/MeasurementUnitSwitcherView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementView",
            "region": "ScreenRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "MeasurementViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementViewModel",
            "configuration": {
              "markupLayerName": "Drawings",
              "lineColor": "#0000FF",
              "fillColor": "#6495ED",
              "textColor": "#000000",
              "textOffset": "5",
              "textSize": "12px",
              "addMarkupToMapByDefault": true
            }
          }
        ]
      },
      {
        "moduleName": "Menu",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Menu.MenuModule",
        "configuration": {
          "menus": [
            {
              "id": "MapDataMenu",
              "description": "@language-menu-open-offline-tools-menu",
              "moduleId": "FeatureEditing",
              "defaultIconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/sync-manage-24.png",
                  "text": "@language-menu-manage-sync-settings",
                  "description": "@language-menu-manage-sync-settings-desc",
                  "command": "ActivateView",
                  "commandParameter": "FeatureLayerListView"
                },
                {
                  "text": "@language-menu-view-edit-log",
                  "description": "@language-menu-view-edit-log-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
                  "command": "ActivateView",
                  "commandParameter": "EditLogView"
                },
                {
                  "text": "@language-clear-storage",
                  "description": "@language-menu-clear-offline-data-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "command": "ActivateView",
                  "commandParameter": "ClearDataView"
                }
              ]
            },
            {
              "id": "LayerActions",
              "description": "@language-layer-actions-desc",
              "moduleId": "LayerList",
              "defaultIconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
              "items": [
                {
                  "text": "@language-menu-add-a-feature",
                  "description": "@language-menu-add-a-feature-desc",
                  "iconUri": "Resources/Images/Icons/add-24.png",
                  "command": "ShowFeatureTemplatePicker",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom-to-layer",
                  "description": "@language-menu-zoom-to-layer-desc",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "command": "ZoomToLayerExtent",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom-to-visible-scale",
                  "description": "@language-menu-zoom-to-visible-scale-desc",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "command": "ZoomToLayerVisibleScale",
                  "hideOnDisable": true
                }
              ]
            },
            {
              "id": "FeatureActions",
              "description": "@language-feature-actions-description",
              "moduleId": "FeatureDetails",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "text": "@language-feature-layer-edit",
                  "description": "@language-feature-layer-edit-desc",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "command": "StartEditingFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-native-attach-file",
                  "description": "@language-native-attach-photo",
                  "iconUri": "Resources/Images/Icons/Toolbar/attach-file-photo-24.png",
                  "command": "AttachFileToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom",
                  "description": "@language-menu-zoom-description",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "command": "ZoomToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-common-pan",
                  "description": "@language-common-pan-description",
                  "iconUri": "Resources/Images/Icons/Toolbar/pan-24.png",
                  "command": "PanToFeature",
                  "hideOnDisable": true
                }
              ]
            },
            {
              "id": "MapTipActions",
              "description": "@language-menu-maptip-actions",
              "moduleId": "MapTips",
              "defaultIconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
              "items": [
                {
                  "text": "@language-menu-maptip-actions-view-details",
                  "description": "@language-menu-maptip-actions-view-details-desc",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "command": "ShowFeatureDetails",
                  "hideOnDisable": false
                }
              ]
            }
          ]
        }
      },
      {
        "moduleName": "NativeIntegration",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.NativeIntegrationModule",
        "configuration": {},
        "views": [
          {
            "id": "AttachFileView",
            "viewModelId": "AttachFileViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-native-attach-file",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.AttachFileView",
            "markup": "Mapping/modules/Native/AttachFileView.html",
            "region": "FeatureEditingContainerRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "AttachFileViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.AttachFileViewModel",
            "configuration": {
              "attachFileViewId": "AttachFileView"
            }
          }
        ]
      },
      {
        "moduleName": "Navigation",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.navigation.NavigationModule",
        "configuration": {},
        "views": [
          {
            "id": "GeolocateButtonView",
            "viewModelId": "GeolocateViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateView",
            "markup": "Mapping/modules/Geolocate/GeolocateButtonView.html",
            "region": "NavigationMapRegion",
            "configuration": {}
          },
          {
            "id": "ZoomInView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomInView",
            "markup": "Mapping/modules/ZoomControl/ZoomInView.html",
            "region": "NavigationMapRegion",
            "configuration": {}
          },
          {
            "id": "ZoomOutView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomOutView",
            "markup": "Mapping/modules/ZoomControl/ZoomOutView.html",
            "region": "NavigationMapRegion",
            "configuration": {}
          },
          {
            "id": "BookmarksButtonView",
            "viewModelId": "BookmarksViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksView",
            "markup": "Mapping/modules/Bookmarks/BookmarksButtonView.html",
            "region": "NavigationMapRegion",
            "visible": true
          }
        ],
        "viewModels": []
      },
      {
        "moduleName": "Offline",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.offline.OfflineModule",
        "configuration": {
          "catalogUri": "{ViewerConfigUri}../../Bundled/catalog.json.js"
        },
        "views": [
          {
            "id": "ConnectionStatusIndicatorView",
            "viewModelId": "ConnectionStatusIndicatorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offline.indicator.ConnectionStatusIndicatorView",
            "markup": "Mapping/modules/Offline/ConnectionStatusIndicator/ConnectionStatusIndicatorView.html",
            "region": "BottomLeftMapRegion",
            "visible": false,
            "configuration": {}
          },
          {
            "id": "ClearDataView",
            "title": "@language-clear-storage",
            "viewModelId": "ClearDataViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offline.ClearDataView",
            "markup": "Mapping/modules/Offline/ClearDataView/ClearDataView.html",
            "region": "ModalWindowRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ConnectionStatusIndicatorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offline.indicator.ConnectionStatusIndicatorViewModel",
            "configuration": {}
          },
          {
            "id": "ClearDataViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offline.ClearDataViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "OptimizerIntegration",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.optimizerIntegration.OptimizerIntegrationModule",
        "configuration": {
          "enabled": false,
          "userName": "DefaultUser",
          "dataRelayUri": "http://localhost/Geocortex/Optimizer/Rest/DataRelay/LogData.ashx?f=json"
        }
      },
      {
        "moduleName": "Printing",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingModule",
        "configuration": {},
        "views": [
          {
            "id": "PrintingView",
            "viewModelId": "PrintingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingView",
            "markup": "Mapping/modules/Printing/PrintingView.html",
            "region": "ScreenRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/print-24.png",
            "title": "@language-print-map",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "PrintingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Prompt",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.prompt.PromptModule",
        "configuration": {
          "promptRegion": "ModalWindowRegion"
        }
      },
      {
        "moduleName": "QueryBuilder",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.QueryBuilderModule",
        "configuration": {},
        "views": [
          {
            "id": "SimpleQueryBuilderView",
            "viewModelId": "SimpleQueryBuilderViewModel",
            "iconUri": "Resources/Images/Icons/query-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderView",
            "markup": "Mapping/modules/QueryBuilder/SimpleQueryBuilderView.html",
            "region": "ScreenRegion",
            "visible": false,
            "isManaged": false,
            "title": "@language-querybuilder-simple-title",
            "configuration": {
              "wildcard": "%",
              "dateQueryFormat": "DATE '{0:yyyy-MM-dd}'",
              "textComparisonQueryFormat": "LOWER({0}) LIKE LOWER({1})",
              "numberToTextComparisonQueryFormat": "CAST({0} AS VARCHAR(50)) LIKE '{1}'",
              "doesNotContainQueryFormat": "LOWER({0}) NOT LIKE LOWER({1})",
              "allowDrawingsAsSpatialFilter": true,
              "queryProviderSupportsTimeOfDay": false,
              "mode": "query"
            }
          },
          {
            "id": "SimpleFilterBuilderView",
            "viewModelId": "SimpleFilterBuilderViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderView",
            "markup": "Mapping/modules/QueryBuilder/SimpleQueryBuilderView.html",
            "region": "ScreenRegion",
            "visible": false,
            "isManaged": false,
            "title": "@language-querybuilder-simple-filter-title",
            "configuration": {
              "wildcard": "%",
              "dateQueryFormat": "DATE '{0:yyyy-MM-dd}'",
              "textComparisonQueryFormat": "LOWER({0}) LIKE LOWER({1})",
              "numberToTextComparisonQueryFormat": "CAST({0} AS VARCHAR(50)) LIKE '{1}'",
              "doesNotContainQueryFormat": "LOWER({0}) NOT LIKE LOWER({1})",
              "allowDrawingsAsSpatialFilter": true,
              "queryProviderSupportsTimeOfDay": false,
              "mode": "filter"
            }
          }
        ],
        "viewModels": [
          {
            "id": "SimpleQueryBuilderViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderViewModel",
            "configuration": {}
          },
          {
            "id": "SimpleFilterBuilderViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Results",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsModule",
        "configuration": {
          "resultMappings": {
            "Identify": [
              "RemovePushpins",
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "MapTip": [
              "ShowMapTipResults"
            ],
            "Workflow": [
              "AddPushpins",
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "Search": [
              "AddPushpins",
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "QueryBuilder": [
              "AddPushpins",
              "ShowResultsList",
              "SetCollectionOfInterest"
            ]
          },
          "eventMappings": {
            "ResultsListFeatureClickedEvent": [
              "ZoomToFeature",
              "HighlightFeatureDefault",
              "ShowFeatureDetails"
            ],
            "ResultsListFeaturePressedEvent": [
              "ZoomToFeature",
              "HighlightFeatureDefault",
              "ShowFeatureDetails"
            ],
            "ResultsTableFeatureClickedEvent": [
              "ShowMapTip",
              "ZoomToFeature",
              "HighlightFeatureDefault"
            ],
            "ResultsTableFeaturePressedEvent": [
              "ShowMapTip",
              "ZoomToFeature",
              "HighlightFeatureDefault"
            ]
          }
        },
        "views": [
          {
            "id": "ResultsListView",
            "viewModelId": "ResultsViewModel",
            "libraryId": "Mapping.Infrastructure",
            "isManaged": false,
            "visible": false,
            "title": "@language-common-results",
            "iconUri": "Resources/Images/Icons/results.png",
            "description": "@language-common-query-results",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsListView",
            "markup": "Mapping/infrastructure/results/ResultsListView.html",
            "region": "ResultsViewContainerRegion",
            "configuration": {
              "contentField": "longDescription",
              "isPaged": true,
              "pageSize": 10
            }
          },
          {
            "id": "ResultsFeatureActionsView",
            "viewModelId": "ResultsViewModel",
            "libraryId": "Mapping.Infrastructure",
            "isManaged": false,
            "visible": false,
            "title": "@language-common-results",
            "description": "@language-common-query-results",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsFeatureActionsView",
            "markup": "Mapping/infrastructure/results/ResultsFeatureActionsView.html",
            "region": "ResultsViewContainerRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ResultsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.FlatResultsViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Scalebar",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarModule",
        "configuration": {},
        "views": [
          {
            "id": "ScalebarView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarView",
            "markup": "Mapping/modules/Scalebar/ScalebarView.html",
            "region": "BottomLeftMapRegion",
            "configuration": {
              "scalebarStyle": "ruler",
              "scalebarUnit": "metric",
              "showBackground": false
            },
            "viewModelId": "ScalebarViewModel"
          }
        ],
        "viewModels": [
          {
            "id": "ScalebarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Search",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchModule",
        "configuration": {
          "autoLoadSiteGeocoders": true,
          "searchProviders": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.LayerQuerySearchProvider",
              "enable": true
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.InstantSearchProvider",
              "name": "@language-search-instant-provider-name",
              "description": "@language-search-instant-provider-description",
              "enable": true,
              "configuration": {
                "maxResults": 50,
                "maxHints": 5,
                "precedenceToNearbyResults": true,
                "enableSearchHints": true
              }
            }
          ]
        },
        "views": [
          {
            "id": "SearchView",
            "viewModelId": "SearchViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-search-title",
            "iconUri": "Resources/Images/Icons/Toolbar/search-results-24.png",
            "markup": "Mapping/modules/Search/SearchView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchView",
            "region": "ResultsViewContainerRegion",
            "configuration": {}
          },
          {
            "id": "SearchHintsView",
            "viewModelId": "SearchViewModel",
            "visible": false,
            "markup": "Mapping/modules/Search/SearchHintsView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchHintsView",
            "region": "SearchHintsRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "SearchViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchViewModel",
            "configuration": {
              "enableSearchRefinement": true,
              "minimumPopulateDelay": 300,
              "minimumPrefixLength": 3
            }
          }
        ]
      },
      {
        "moduleName": "Shells",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.shells.ShellModule",
        "configuration": {
          "css": [
            "Resources/Styles/Handheld.css",
            "{ViewerConfigUri}../../Styles/Custom/Handheld.css"
          ],
          "homePanelVisible": false
        },
        "views": [
          {
            "id": "ResultsViewContainerView",
            "viewModelId": "ResultsViewContainerViewModel",
            "visible": false,
            "isManaged": true,
            "title": "@language-common-results",
            "iconUri": "Resources/Images/Icons/Toolbar/search-results-24.png",
            "libraryId": "Framework.UI",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "ScreenRegion",
            "configuration": {}
          },
          {
            "id": "FeatureEditingContainerView",
            "viewModelId": "FeatureEditingContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-layer-data",
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "libraryId": "Framework.UI",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "ScreenRegion",
            "configuration": {}
          },
          {
            "id": "LayerDataContainerView",
            "viewModelId": "LayerDataContainerViewModel",
            "visible": false,
            "isManaged": true,
            "title": "@language-common-layer-data",
            "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
            "libraryId": "Framework.UI",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "ScreenRegion",
            "configuration": {}
          },
          {
            "id": "ModalContainerView",
            "viewModelId": "ModalContainerViewModel",
            "visible": false,
            "isManaged": false,
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "libraryId": "Framework.UI",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "ApplicationRegion",
            "configuration": {}
          },
          {
            "id": "ShellView",
            "viewModelId": "ShellViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.HandheldShellView",
            "markup": "Mapping/modules/Shells/HandheldShellView.html",
            "region": "ApplicationRegion",
            "configuration": {
              "resizeShell": true
            }
          }
        ],
        "viewModels": [
          {
            "id": "ShellViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.CommonShellViewModel",
            "configuration": {}
          },
          {
            "id": "ResultsViewContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "configuration": {
              "containerRegionName": "ResultsViewContainerRegion",
              "ordering": {
                "SearchView": 0,
                "ResultsListView": 1,
                "ResultsFeatureActionsView": 2,
                "FeatureDetailsView": 3
              }
            }
          },
          {
            "id": "FeatureEditingContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "configuration": {
              "containerRegionName": "FeatureEditingContainerRegion",
              "ordering": {
                "TemplatePickerView": 0,
                "AttributeEditorView": 1
              }
            }
          },
          {
            "id": "LayerDataContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "configuration": {
              "containerRegionName": "LayerDataContainerRegion",
              "ordering": {
                "LayerListView": 0,
                "LayerActionsView": 1,
                "MapDataMenuView": 2,
                "FeatureLayerListView": 3,
                "FeatureLayerDetailsView": 4,
                "EditLogView": 5
              }
            }
          },
          {
            "id": "ModalContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "configuration": {
              "containerRegionName": "ModalWindowRegion",
              "backButtonOnRootView": true,
              "showBackButtonAsX": true
            }
          }
        ]
      },
      {
        "moduleName": "Site",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.site.SiteModule",
        "configuration": {
          "siteUri": "{ViewerConfigUri}../../../../../.."
        },
        "views": [
          {
            "id": "ServiceLayersFailureView",
            "viewModelId": "ServiceLayersFailureViewModel",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.ServiceLayersFailureView",
            "markup": "Mapping/modules/Site/ServiceLayersFailureView.html",
            "region": "ModalWindowRegion",
            "configuration": {}
          },
          {
            "id": "SignInErrorView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.SignInErrorView",
            "markup": "Mapping/modules/Site/SignInErrorView.html",
            "region": "ModalWindowRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ServiceLayersFailureViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.ServiceLayersFailureViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Status",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.status.StatusModule",
        "configuration": {
          "busyIcon": "Resources/Images/loader-small.gif"
        },
        "views": [
          {
            "id": "StatusIndicatorView",
            "viewModelId": null,
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.status.StatusIndicatorView",
            "markup": "Mapping/modules/Status/StatusIndicatorView.html",
            "region": "BottomCenterMapRegion",
            "configuration": {}
          }
        ],
        "viewModels": []
      },
      {
        "moduleName": "Toolbar",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarModule",
        "configuration": {
          "transientElements": [
            {
              "tools": [
                "PointMarkupTool",
                "FreehandMarkupTool",
                "PolylineMarkupTool",
                "PolygonMarkupTool",
                "RectangleMarkupTool",
                "CircleMarkupTool",
                "EllipseMarkupTool",
                "TextMarkupTool"
              ],
              "widgetId": "MarkupPaletteSmall",
              "worksWith": [
                "EditMarkupTool",
                "DeleteMarkupTool"
              ],
              "region": "ToolRegion"
            },
            {
              "tools": [
                "EditMarkupTool"
              ],
              "widgetId": "MarkupEditToolPaletteSmall",
              "region": "ToolRegion"
            },
            {
              "tools": [
                "DeleteMarkupTool"
              ],
              "widgetId": "MarkupDeleteToolPaletteSmall",
              "region": "ToolRegion"
            },
            {
              "tools": [
                "MeasureDistanceTool",
                "MeasureAreaTool"
              ],
              "widgetId": "MeasurementToolTransientToolbar",
              "worksWith": [
                "DeleteMeasurementTool"
              ],
              "region": "ToolRegion"
            }
          ],
          "toolbarGroups": [
            {
              "id": "ToolsTab",
              "type": "toolbarGroup",
              "name": "Location",
              "items": [
                {
                  "id": "HomeGroup",
                  "type": "toolbarGroup",
                  "name": "@language-toolbar-group-home",
                  "items": [
                    {
                      "id": "HomeButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
                      "command": "ActivateHomePanel",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-home-sub",
                      "tooltip": "@language-toolbar-home-tooltip"
                    }
                  ],
                  "layout": "Small"
                },
                {
                  "id": "NavigationGroup",
                  "type": "toolbarGroup",
                  "name": "@language-toolbar-group-navigation",
                  "items": [
                    {
                      "id": "PanButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/pan-24.png",
                      "command": "ClearActiveTool",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-navigation-pan",
                      "tooltip": "@language-toolbar-navigation-pan-tooltip"
                    },
                    {
                      "id": "ZoomInTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/zoom-in-24.png",
                      "command": "ZoomToExtent",
                      "drawMode": "EXTENT",
                      "name": "@language-toolbar-navigation-zoom-in",
                      "tooltip": "@language-toolbar-navigation-zoom-in-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-navigation-zoom-in-desc"
                    },
                    {
                      "id": "ZoomOutTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/zoom-out-24.png",
                      "command": "ZoomOutToExtent",
                      "drawMode": "EXTENT",
                      "name": "@language-toolbar-navigation-zoom-out",
                      "tooltip": "@language-toolbar-navigation-zoom-out-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-navigation-zoom-out-desc"
                    },
                    {
                      "id": "InitialExtentButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/zoom-initial-24.png",
                      "command": "ZoomToInitialExtent",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-navigation-initial-extent",
                      "tooltip": "@language-toolbar-navigation-initial-extent-tooltip"
                    },
                    {
                      "id": "PreviousExtentButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/zoom-previous-32.png",
                      "command": "ZoomToPreviousExtent",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-navigation-previous-extent",
                      "tooltip": "@language-toolbar-navigation-previous-extent-tooltip"
                    },
                    {
                      "id": "NextExtentButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/zoom-next-32.png",
                      "command": "ZoomToNextExtent",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-navigation-next-extent",
                      "tooltip": "@language-toolbar-navigation-next-extent-tooltip"
                    }
                  ],
                  "layout": "Small"
                },
                {
                  "id": "EzxCTqg0",
                  "type": "toolbarGroup",
                  "name": "Search",
                  "items": [
                    {
                      "id": "PzqKZIVQ",
                      "type": "button",
                      "iconUri": "{ViewerConfigUri}../../../Resources/Images/SearchAddress.png",
                      "command": "RunWorkflowById",
                      "commandParameter": "AddressSearch",
                      "hideOnDisable": false,
                      "name": "Address Search",
                      "tooltip": "Search for a property by its address."
                    },
                    {
                      "id": "KM60PraX",
                      "type": "button",
                      "iconUri": "{ViewerConfigUri}../../../Resources/Images/ParcelLegal.png",
                      "command": "RunWorkflowById",
                      "commandParameter": "LegalSearch",
                      "hideOnDisable": false,
                      "name": "Legal Parcel Search",
                      "tooltip": "Search for a property by its legal description."
                    },
                    {
                      "id": "ST6XDQkv",
                      "type": "button",
                      "iconUri": "{ViewerConfigUri}../../../Resources/Images/ParcelByID.png",
                      "command": "RunWorkflowById",
                      "commandParameter": "ParcelIDSearch",
                      "hideOnDisable": false,
                      "name": "Parcel ID Search",
                      "tooltip": "Search for a property by its PID."
                    },
                    {
                      "id": "ShowSimpleQueryBuilderButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/query-24.png",
                      "command": "ActivateView",
                      "commandParameter": "SimpleQueryBuilderView",
                      "hideOnDisable": false,
                      "name": "@language-querybuilder-simple-title",
                      "tooltip": "@language-querybuilder-simple-tooltip"
                    }
                  ],
                  "layout": "Small"
                }
              ],
              "layout": "Large"
            },
            {
              "id": "V0L0IAyd",
              "type": "toolbarGroup",
              "name": "Analysis",
              "items": [
                {
                  "id": "FindDataGroup",
                  "type": "toolbarGroup",
                  "name": "Identify",
                  "items": [
                    {
                      "id": "PointIdentifyTool-Analysis",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
                      "command": "Identify",
                      "drawMode": "POINT",
                      "name": "@language-toolbar-identify-point",
                      "tooltip": "@language-toolbar-identify-point-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-point-desc"
                    },
                    {
                      "id": "FreehandIdentifyTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-freehand-24.png",
                      "command": "Identify",
                      "drawMode": "FREEHAND_POLYLINE",
                      "name": "@language-toolbar-identify-freehand",
                      "tooltip": "@language-toolbar-identify-freehand-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-freehand-desc"
                    },
                    {
                      "id": "PolylineIdentifyTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-polyline-24.png",
                      "command": "Identify",
                      "drawMode": "POLYLINE",
                      "name": "@language-toolbar-identify-polyline",
                      "tooltip": "@language-toolbar-identify-polyline-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-polyline-desc"
                    },
                    {
                      "id": "PolygonIdentifyTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-polygon-24.png",
                      "command": "Identify",
                      "drawMode": "POLYGON",
                      "name": "@language-toolbar-identify-polygon",
                      "tooltip": "@language-toolbar-identify-polygon-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-polygon-desc"
                    },
                    {
                      "id": "RectangleIdentifyTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-rectangle-24.png",
                      "command": "Identify",
                      "drawMode": "RECTANGLE",
                      "name": "@language-toolbar-identify-rectangle",
                      "tooltip": "@language-toolbar-identify-rectangle-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-rectangle-desc"
                    }
                  ],
                  "layout": "Small"
                },
                {
                  "id": "TaskGroup",
                  "type": "toolbarGroup",
                  "name": "@language-toolbar-group-tasks",
                  "items": [
                    {
                      "id": "PrintMapButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/print-24.png",
                      "command": "PrintMap",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-tasks-print-map",
                      "tooltip": "@language-toolbar-tasks-print-map-tooltip"
                    },
                    {
                      "id": "UsgLan8o",
                      "type": "button",
                      "iconUri": "{ViewerConfigUri}../../../Resources/Images/Reports.png",
                      "command": "RunWorkflowById",
                      "commandParameter": "PropertyReportExt",
                      "hideOnDisable": false,
                      "name": "Property Report",
                      "tooltip": "Print a property report with a map included."
                    }
                  ],
                  "layout": "Small"
                },
                {
                  "id": "MeasurementGroup",
                  "type": "toolbarGroup",
                  "name": "@language-toolbar-group-measurement",
                  "items": [
                    {
                      "id": "MeasureDistanceTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-distance-24.png",
                      "command": "MeasureDistance",
                      "drawMode": "POLYLINE",
                      "name": "@language-measurement-measure-distance-tool-name",
                      "tooltip": "@language-measurement-measure-distance-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-distance-tool-status"
                    },
                    {
                      "id": "MeasureAreaTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-area-24.png",
                      "command": "MeasureArea",
                      "drawMode": "POLYGON",
                      "name": "@language-measurement-measure-area-tool-name",
                      "tooltip": "@language-measurement-measure-area-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-area-tool-status"
                    },
                    {
                      "id": "MeasurementToolControlRegion",
                      "type": "region",
                      "regionName": "MeasurementToolControlRegion"
                    }
                  ],
                  "layout": "Small"
                }
              ],
              "layout": "Large"
            }
          ]
        },
        "views": [
          {
            "id": "ToolbarView",
            "viewModelId": "ToolbarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarView",
            "markup": "Mapping/modules/Toolbar/ToolbarView.html",
            "region": "ToolRegion",
            "visible": true,
            "configuration": {}
          },
          {
            "id": "ToolbarManagedViewsView",
            "viewModelId": "ToolbarManagedViewsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarManagedViewsView",
            "markup": "Mapping/modules/Toolbar/ToolbarManagedViewsView.html",
            "region": "ToolbarTabContentRegion",
            "visible": true,
            "configuration": {}
          },
          {
            "id": "MainToolbarView",
            "viewModelId": "MainToolbarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarView",
            "markup": "Mapping/modules/Toolbar/SmallToolbarView.html",
            "isManaged": true,
            "visible": false,
            "title": "@language-toolbar-title",
            "iconUri": "Resources/Images/Icons/Toolbar/tools-32.png",
            "region": "ScreenRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "MainToolbarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarViewModel",
            "configuration": {
              "toolbarGroupRefs": [
                "ToolsTab",
                "V0L0IAyd"
              ],
              "toolbarOpenByDefault": false
            }
          },
          {
            "id": "ToolbarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarViewModel",
            "configuration": {}
          },
          {
            "id": "ToolbarManagedViewsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarManagedViewsViewModel",
            "configuration": {
              "ordering": {
                "IWantToMenuView": 0,
                "MapView": 1,
                "LayerDataContainerView": 2,
                "ResultsViewContainerViewModel": 3,
                "ToolbarView": 4
              }
            }
          }
        ]
      },
      {
        "moduleName": "Tools",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.tools.ToolsModule",
        "configuration": {
          "showStatusMessages": true,
          "tools": [
            {
              "name": "EditMarkupTool",
              "command": "EditMarkup",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/edit-markup-24.png",
              "statusText": "@language-toolbar-markup-edit-desc"
            },
            {
              "name": "DeleteMarkupTool",
              "command": "DeleteMarkup",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/Erase-24.png",
              "statusText": "@language-toolbar-markup-delete-desc"
            }
          ]
        }
      },
      {
        "moduleName": "User",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserModule",
        "configuration": {},
        "views": [],
        "viewModels": []
      },
      {
        "moduleName": "Workflow",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowModule",
        "configuration": {
          "showTitleInFormBody": false,
          "defaultContainerRegionName": "ModalWindowRegion",
          "defaultContainerTitle": "@language-workflow-title",
          "defaultContainerIconUri": "Resources/Images/Icons/Toolbar/workflow-24.png",
          "showCaptureStatusMessages": true,
          "displayResultPickerTemplateComplexity": "simple",
          "startupWorkflows": [],
          "formItems": {
            "geocortex.forms.items.DatePickerFormItemView": {
              "markup": "Mapping/modules/Workflow/Forms/Items/DatePickerFormItemView.html",
              "codebehind": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.DatePickerFormItemView.js"
            }
          },
          "icons": {
            "Resources/Images/ParcelByID.png": "Resources/Images/Icons/Toolbar/house-number-24.png",
            "Resources/Images/ParcelByOwner.png": "Resources/Images/Icons/Toolbar/house-owner-24.png",
            "Resources/Images/ParcelByValue.png": "Resources/Images/Icons/Toolbar/house-value-24.png",
            "Resources/Images/SearchSchools.png": "Resources/Images/Icons/Toolbar/school-24.png"
          },
          "containers": [
            {
              "name": "Default",
              "title": "@language-workflow-title",
              "regionName": "ScreenRegion",
              "isManaged": true,
              "displayHeader": true,
              "iconUri": "Resources/Images/Icons/Toolbar/workflow-24.png"
            },
            {
              "name": "DefaultNoCloseButton",
              "title": "@language-workflow-title",
              "regionName": "ScreenRegion",
              "isManaged": true,
              "displayHeader": true,
              "iconUri": "Resources/Images/Icons/Toolbar/workflow-24.png",
              "allowClose": false
            },
            {
              "name": "Extract",
              "title": "@language-common-extract-data",
              "regionName": "ScreenRegion",
              "isManaged": true,
              "displayHeader": true,
              "iconUri": "Resources/Images/Icons/Toolbar/layers-extract-24.png"
            },
            {
              "name": "ModalWindow",
              "title": "@language-workflow-title",
              "regionName": "ModalWindowRegion",
              "isManaged": false,
              "iconUri": "Resources/Images/Icons/Toolbar/workflow-24.png"
            },
            {
              "name": "ModalWindowNoCloseButton",
              "title": "@language-workflow-title",
              "regionName": "ModalWindowRegion",
              "isManaged": false,
              "iconUri": "Resources/Images/Icons/Toolbar/workflow-24.png"
            }
          ]
        },
        "views": [
          {
            "id": "WorkflowListView",
            "viewModelId": "WorkflowViewModel",
            "title": "@language-workflow-workflows",
            "description": "@language-workflow-site-workflows",
            "iconUri": "Resources/Images/view_workflows.jpg",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowListView",
            "markup": "Mapping/modules/Workflow/WorkflowListView.html",
            "region": "ScreenRegion",
            "visible": false,
            "configuration": {
              "hideOnClickWorkflow": true
            }
          }
        ],
        "viewModels": [
          {
            "id": "WorkflowViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "ZoomControl",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomControlModule",
        "configuration": {},
        "views": [],
        "viewModels": []
      }
    ],
    "widgets": [
      {
        "id": "MarkupPaletteSmall",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteView",
        "markup": "Mapping/modules/Markup/ToolPalettes/MarkupPaletteSmall.html",
        "viewModelId": "TransientMarkupPaletteViewModel"
      },
      {
        "id": "MarkupEditToolPaletteSmall",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteView",
        "markup": "Mapping/modules/Markup/ToolPalettes/EditPaletteSmall.html",
        "viewModelId": "TransientMarkupPaletteViewModel"
      },
      {
        "id": "MarkupDeleteToolPaletteSmall",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteView",
        "markup": "Mapping/modules/Markup/ToolPalettes/DeletePaletteSmall.html",
        "viewModelId": "TransientMarkupPaletteViewModel"
      },
      {
        "id": "AutoCompleteBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.AutoCompleteBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/AutoCompleteBoxFormItemView.html"
      },
      {
        "id": "CheckBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.CheckBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/CheckBoxFormItemView.html"
      },
      {
        "id": "ComboBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.ListBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/ComboBoxFormItemView.html"
      },
      {
        "id": "ContainerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.ContainerFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/ContainerFormItemView.html",
        "configuration": {
          "allowHorizontal": false
        }
      },
      {
        "id": "DatePickerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.DatePickerFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/DatePickerFormItemView.html"
      },
      {
        "id": "FilePickerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.FilePickerFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/FilePickerFormItemView.html"
      },
      {
        "id": "GroupBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.GroupBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/GroupBoxFormItemView.html",
        "configuration": {
          "allowHorizontal": false
        }
      },
      {
        "id": "HyperlinkFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.HyperlinkFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/HyperlinkFormItemView.html"
      },
      {
        "id": "ImageFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.FormItemViewBase",
        "markup": "Mapping/modules/Workflow/Forms/Items/ImageFormItemView.html"
      },
      {
        "id": "LabelFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.FormItemViewBase",
        "markup": "Mapping/modules/Workflow/Forms/Items/LabelFormItem.html"
      },
      {
        "id": "ListBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.ListBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/ListBoxFormItemView.html"
      },
      {
        "id": "MeasurementToolTransientToolbar",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementView",
        "markup": "Mapping/modules/Measurement/Widgets/MeasurementTransientView.html",
        "viewModelId": "MeasurementViewModel"
      },
      {
        "id": "RadioButtonFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.RadioButtonFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/RadioButtonFormItemView.html"
      },
      {
        "id": "TextAreaFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.TextEntryFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/TextAreaFormItemView.html"
      },
      {
        "id": "TextBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.TextEntryFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/TextBoxFormItemView.html"
      },
      {
        "id": "TimePickerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.TimePickerFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/TimePickerFormItemView.html"
      },
      {
        "id": "MapTipActionsWidget",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipActionsView",
        "markup": "Mapping/modules/MapTips/MapTipActionsView.html",
        "configuration": {
          "menuId": "MapTipActions"
        }
      }
    ]
  }
}