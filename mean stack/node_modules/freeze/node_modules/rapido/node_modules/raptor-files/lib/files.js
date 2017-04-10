/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

require('raptor-util').extend(exports, {
    fileUrl: function(path) {
        return new exports.File(path).toURL();
    },

    fromFileUrl: function(url) {
        if (!url.startsWith('file://')) {
            throw new Error('Invalid file URL of "' + url + '". file:// protocol expected');
        }

        var path = decodeURI(url.substring('file://'.length));
        return new exports.File(path);
    },

    normalizePath: function(path) {
        throw new Error('Not Implemented');
    },

    /**
     * 
     * @param path
     */
    exists: function(path) {
        throw new Error('Not Implemented');
    },
    
    /**
     * 
     */
    joinPaths: function() {
        throw new Error('Not Implemented');
    },
    
    /**
     * 
     * @param path
     * @param encoding
     */
    readAsString: function(path, encoding) {
        throw new Error('Not Implemented');
    },
    
    /**
     * 
     * @param path
     * @returns
     */
    isDirectory: function(path) {
        throw new Error('Not Implemented');
    },
    
    /**
     * 
     * @param path
     * @returns
     */
    isFile: function(path) {
        throw new Error('Not Implemented');
    },
    
    remove: function(path) {
        var file = new exports.File(path);
        file.remove();
    },
    
    resolveRelativeFile: function(dir, relPath) {
        var paths = require('raptor/paths');
        var absPath = paths.resolve(dir, relPath);
        return new exports.File(absPath);
    },

    lastModified: function(path) {
        var file = new exports.File(path);
        return file.lastModified();
    },

    File: null, // This will be populated by an extension

    toString: function () {
        return '[raptor-files@' + __filename + ']';
    }
});

require('raptor-detect/runtime').detect({
    node: function() {
        require('./files_node');
    },
    rhino: function() {
        require('./files_rhino');
    }
});
