/* ------------------------------ INTRODUCTION ------------------------------ */

/* File: /public_html/library/char.js.
 * Purpose: Central location for JavaScript objects that are used, or may be used, site-wide.
 * Includes objects: HighlightTabsUtil, ToggleDisplayAllItemsUtil, ToggleDisplaySingleItemUtil, ReplaceExtStyleSheetUtil.
 * Last reviewed/updated (meaning code/logic, not alert dialogs/comments): 06 Sep 2014.
 * Published: 24 Jan 2014.
 * Used in: All CHAR Web pages except some specialty Web pages. */

/* ------------------------------ JAVASCRIPT OBJECT DEFINITIONS ------------------------------ */

/* Object: HighlightTabsUtil.
 * Published: 05Mar14.
 * Last reviewed/updated (meaning code/logic, not alert dialogs/comments): 03Apr14.
 * Purpose: Applies non-default style to selected tab. Unselected tabs use default style per char.css.
 * NOTE: The tab to highlight is passed as argument and must be syntax tab#id, where; 1.) # is tab number from left to right starting at 1, and 2.) tab#id is assigned to each tab via HTML id attribute. The call to HighlightTabsUtil.highlightTabs() is placed immediately after header (header.js) code, not in HTML <head></head> section (target not loaded), and not at end of page including just before closing </body> tag (big page loads cause delay in style being generated).
 * Web browser support: IE6.0+, FF1.5+, SM1.0+, FL1.0+, SF3.1+, CH2.0+, OP7.5+, NT9.0+.
 * Used in: All pages except sitemap.html. */

var HighlightTabsUtil = {
    highlightTabs: function(tabToHighlight){
        var tab = document.getElementById("tab" + tabToHighlight + "Id");
        tab.style.backgroundColor = "#004477";
    }
};

/* Object: ToggleDisplayAllItemsUtil.
 * Published: 25Feb14.
 * Last reviewed/updated (meaning code/logic, not alert dialogs/comments): 03Apr14.
 * Purpose: Toggle the display state of multiple blocks of code simultaneously via HTML style attribute/JavaScript style property.
 * NOTE: For each block of code to toggle display state, must assign class sectionAllItemsSelector. For expand all | collapse all image and/or text to also toggle display state with the multiple blocks of code, must assign class expandImageAndTextAllItemsSelector/collapseImageAndTextAllItemsSelector.
 * Web browser support: IE8.0+, FF3.5+, SM2.0+, SF3.1+, CH2.0+, OP10.0+, which corresponds to querySelectorAll() support.
 * Used in: 1.) Computer Help /public_html/index.html, 2.) Computer Resources /public_html/resources.html. */

var ToggleDisplayAllItemsUtil = {
    toggleDisplayAllItems: function(actionToPerform){
        var sectionAllItems = document.querySelectorAll(".sectionAllItemsSelector");
        var expandImageAndTextAllItems = document.querySelectorAll(".expandImageAndTextAllItemsSelector");
        var collapseImageAndTextAllItems = document.querySelectorAll(".collapseImageAndTextAllItemsSelector");
        for (i = 0, len = sectionAllItems.length; i < len; i++){
            var sectionItem = sectionAllItems[i];
            var expandImageAndTextItem = expandImageAndTextAllItems[i];
            var collapseImageAndTextItem = collapseImageAndTextAllItems[i];
            if (actionToPerform == "expandAll"){
                sectionItem.style.display = "block";
                expandImageAndTextItem.style.display = "none";
                collapseImageAndTextItem.style.display = "inline";
            } else if (actionToPerform == "collapseAll"){
                sectionItem.style.display = "none";
                expandImageAndTextItem.style.display = "inline";
                collapseImageAndTextItem.style.display = "none";
            } else {
                alert("There was a problem processing the request. Error report - File:char.js. Object:ToggleDisplayAllItemsUtil. Method:toggleDisplayAllItems(). Line:53. Issue:actionToPerform value not matched by if else if conditionals.");
            }
        }
    }
};

/* Object: ToggleDisplaySingleItemUtil.
 * Published: 25Feb14.
 * Last reviewed/updated (meaning code/logic, not alert dialogs/comments): 03Apr14.
 * Purpose: Change and/or toggle the display state of single blocks of code via HTML style attribute/JavaScript style property.
 * NOTE: The first two arguments are required: arg1.) id # of item to change display state. Assigned HTML element attribute must be syntax id="changeDisplayStateItemId#". Pass "#" as argument; arg2.) action to perform. Passed argument must be syntax "expand" or "collapse". There is one optional argument, which is third argument: arg3.) indicates if want to be able to "toggle" display state back and forth. If yes, want to toggle: a.) passed argument must be boolean literal true; b.) assigned HTML element attribute for "expand" image and/or text must be syntax id="expandImageAndTextId#", where "#" is same as "#" in arg1.) above; and c.) assigned HTML element attribute for "collapse" image and/or text must be syntax id="collapseImageAndTextId#", where "#" is same as "#" in arg1.) above. If no, do not want to toggle, can pass no argument or can pass boolean literal false. If no, do not want to toggle, then ToggleDisplayUtil simply changes display state without ability to revert.
 * Web browser support: IE6.0+, FF1.5+, SM1.0+, FL1.0+, SF3.1+, CH2.0+, OP7.5+, NT9.0+.
 * Used in: 1.) Computer Help /public_html/index.html, 2.) Computer Resources /public_html/resources.html. */

var ToggleDisplaySingleItemUtil = {
    toggleDisplaySingleItem: function(id, actionToPerform, toggle){
        var changeDisplayStateItem = document.getElementById("changeDisplayStateItemId" + id);
        if (actionToPerform == "expand"){
            changeDisplayStateItem.style.display = "block";
        } else if (actionToPerform == "collapse"){
            changeDisplayStateItem.style.display = "none";
        } else {
            alert("There was a problem processing the request. Error report - File:char.js. Object:ToggleDisplaySingleItemUtil. Method:toggleDisplaySingleItem(). Line:75. Issue:actionToPerform value not matched by if else if conditionals.");
        }
        if (toggle){
            var expandImageAndTextItem = document.getElementById("expandImageAndTextId" + id);
            var collapseImageAndTextItem = document.getElementById("collapseImageAndTextId" + id);
            if (actionToPerform == "expand"){
                expandImageAndTextItem.style.display = "none";
                collapseImageAndTextItem.style.display = "inline";
            } else if (actionToPerform == "collapse"){
                collapseImageAndTextItem.style.display = "none";
                expandImageAndTextItem.style.display = "inline";
            } else {
                alert("There was a problem processing the request. Error report - File:char.js. Object:ToggleDisplaySingleItemUtil. Method:toggleDisplaySingleItem(). Line:87. Issue:actionToPerform value not matched by if else if conditionals.");
            }
        }
    }
};

/* Object: ReplaceExtStyleSheetUtil.
 * Published: 24Jan14.
 * Last reviewed/updated (meaning code/logic, not alert dialogs/comments): 25May14.
 * Purpose: 1.) Change "Page Version", which replaces the Web page .css file, not .html file; 2.) Removes header for Page Version Print Friendly With Images and Print Friendly Without Images; 3.) Places asterisk to indicate currently displayed Page Version.
 * NOTE: In FF1.5, SM1.0, FL1.0, OP7.5, if use style.display = "inline-block" and style.display = "inherit", the asterisk does not behave well. Therefore, use style.display = "".
 * Web browser support: IE8.0+, FF3.5+, SM2.0+, SF3.1+, CH2.0+, OP10.0+. Prior to 25May14: IE6.0+, FF1.5+, SM1.0+, FL1.0+, SF3.1+, CH2.0+, OP7.5+, NT9.0+.
 * Used in: All pages with print friendly option. */

var ReplaceExtStyleSheetUtil = {
    replaceExtStyleSheet: function(pathToExtStyleSheet){
        var linkElementReference = document.getElementById("linkElement");
        var header = document.getElementById("headerId");
        var pageVersion1Asterisk = document.getElementById("pageVersion1Asterisk");
        var pageVersion2Asterisk = document.getElementById("pageVersion2Asterisk");
        var pageVersion3Asterisk = document.getElementById("pageVersion3Asterisk");
        if ((pathToExtStyleSheet == "library/char.css") || (pathToExtStyleSheet == "../library/char.css") || (pathToExtStyleSheet == "../../library/char.css")){
            linkElementReference.href = pathToExtStyleSheet;
            header.style.display = "block";
            pageVersion1Asterisk.style.display = "";
            pageVersion2Asterisk.style.display = "none";
            pageVersion3Asterisk.style.display = "none";
        } else if ((pathToExtStyleSheet == "library/char_print_with_images.css") || (pathToExtStyleSheet == "../library/char_print_with_images.css") || (pathToExtStyleSheet == "../../library/char_print_with_images.css")){
            linkElementReference.href = pathToExtStyleSheet;
            header.style.display = "none";
            pageVersion1Asterisk.style.display = "none";
            pageVersion2Asterisk.style.display = "";
            pageVersion3Asterisk.style.display = "none";
        } else if ((pathToExtStyleSheet == "library/char_print_without_images.css") || (pathToExtStyleSheet == "../library/char_print_without_images.css") || (pathToExtStyleSheet == "../../library/char_print_without_images.css")){
            linkElementReference.href = pathToExtStyleSheet;
            header.style.display = "none";
            pageVersion1Asterisk.style.display = "none";
            pageVersion2Asterisk.style.display = "none";
            pageVersion3Asterisk.style.display = "";
        } else {
            alert("There was a problem processing the request. Error report - File:char.js. Object:ReplaceExtStyleSheetUtil. Method:replaceExtStyleSheet(). Line:127. Issue:pathToExtStyleSheet value not matched by if else if conditionals.");
        }
    }
};

/* ------------------------------ GOOGLE ANALYTICS CODE ------------------------------ */

/* Added: 16 Nov 2014. */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-53108923-3', 'auto');
ga('send', 'pageview');