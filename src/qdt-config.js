module.exports = {
    platforms: {
        "*": {
            "source": "base",
            "libs": {
                // please disable libraries you don't need
                "jquery": true,
                "bootstrap_3": true,
                "angular": true,
                "underscore": true,
                "underscore.string": false,
                "mdi": true,
                "babel_polyfill": true
            },
            "libs_data": {},
            // overwrite this paths in your platform
            "paths": {
                "root": false,
                "assets_root": false,
                "clean_paths": false
            },
            // add here libraries from node_modules
            "assets": [{
                "from": "resources/assets/**/*",
                "to": "assets"
            }, {
                "from": "../../node_modules/qrcodejs/qrcode.min.js",
                "to": "assets/dist/qrcode"
            }],
            // browsersync configurations (ex: ip, port and path)
            "server": false,
            // tasks configs
            "tasks": {
                // disable tasks
                "disabled": {
                    "pug": false,
                    "js": false,
                    "assets": false
                },
                // tasks details, ex: source, destination, minify and etc. 
                "settings": {
                    "js": [{
                        "src": [
                            "app.js"
                        ],
                        "watch": [
                            "angular-1/**/*.js",
                        ],
                        "dest": "/",
                        "name": "app.js",
                        "minify": false,
                        "sourcemap": true,
                        "browserify": true
                    }],
                    "scss": [{
                        "src": "style.scss",
                        "watch": "includes/**/*.scss",
                        "path": "/",
                        "name": "style.css",
                        "minify": false
                    }],
                    "pug": [{
                        "path": "/",
                        "src": ["*.pug"],
                        "watch": ["layout/**/*.pug"],
                        "dest": "/"
                    }, {
                        "path": "/DL",
                        "src": ["DL/**/*.pug"],
                        "dest": "/DL"
                    }, {
                        "path": "/tpl",
                        "src": ["tpl/**/*.pug"],
                        "dest": "/assets/tpl"
                    }]
                }
            }
        },
        "html": {
            "source": "base",
            "paths": {
                "root": "../dist/html",
                "assets_root": "../dist/html/assets",
                "clean_paths": [
                    "../dist/html"
                ]
            },
            "server": {
                "path": "/",
                "port": 3000
            },
        },
        "phonegap": {
            "paths": {
                "root": "../phonegap/www",
                "assets_root": "../phonegap/www/assets",
                "clean_paths": [
                    "../phonegap/www"
                ]
            }
        },
        "php": {
            "paths": {
                "root": "../php/public",
                "assets_root": "../php/public/assets",
                "clean_paths": [
                    "../php/public/assets",
                    "../php/public/raw"
                ]
            },
            "tasks": {
                "settings": {
                    "pug": [{
                        "path": "/raw/tpl",
                        "src": ["raw/**/*.pug"],
                        "dest": "/tpl"
                    }]
                }
            }
        }
    }
};