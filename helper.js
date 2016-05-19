function OpenInNewTabWinBrowser(url) {
	var win = window.open(url, '_blank');
	win.focus();
};

$("#fg").click(function () {
	$(OpenInNewTabWinBrowser("frogger/index.html"));
});

$("#res").click(function() {
	$(OpenInNewTabWinBrowser("resume/index.html"));
});

$(document).ready(function() {
    $('.profilethumb-container').nailthumb();
});