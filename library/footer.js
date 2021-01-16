// Footer for all pages except site home page.
// <img src="../images/valid-css.gif" works for /public_html/directory/file.html. On 22Feb14 changed to <img src="../../images/valid-css.gif", which works for both /public_html/directory/file.html and /public_html/directory/directory/file.html.

document.write('<div class="footer">' +
    '<a href="http://char.learnwebcoding.com/" class="linkFooterLogo">' +
        '<div id="linkFooterLogoTitleId" class="linkFooterLogoTitle">Computer Help And Resources</div>' +
        '<div id="linkFooterLogoSubtitleId" class="linkFooterLogoSubtitle">The Stop For Trusted Computer Information</div>' +
    '</a>' +
    '<p class="clearBoth"><a href="https://validator.w3.org/check?uri=referer"><img src="../../images/HTML5_Logo_48.gif" style="border:0;width:48px;height:48px" alt="Valid HTML5!" /></a>&nbsp;<a href="https://jigsaw.w3.org/css-validator/check?uri=referer&amp;profile=css3"><img src="../../images/valid-css.gif" style="border:0;width:88px;height:31px" alt="Valid CSS3!" /></a></p>' +
    '<p class="footerCopyright">Copyright &copy; 2021 Steve Taylor</p>' +
'</div>'
);