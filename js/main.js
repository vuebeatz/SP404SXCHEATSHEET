$(function() {
    const droppable = $(".button");

    // File API が使用できない場合は諦めます.
    if (!window.FileReader) {
        alert("File API がサポートされていません。");
        return false;
    }

    // イベントをキャンセルするハンドラです.
    const cancelEvent = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    // dragenter, dragover イベントのデフォルト処理をキャンセルします.
    droppable.bind("dragenter", cancelEvent);
    droppable.bind("dragover", cancelEvent);

    // ドロップ時のイベントハンドラを設定します.
    const handleDroppedFile = function(event) {
            // ファイルは複数ドロップされる可能性がありますが, ここでは 1 つ目のファイルを扱います.
            const file = event.originalEvent.dataTransfer.files[0];
            const name = file.name;
            const $fileName = $(this).find(".file-name");
            $fileName.text("[" + file.name + "]");
            // デフォルトの処理をキャンセルします.
            cancelEvent(event);
            return false;
        }
        // ドロップ時のイベントハンドラを設定します.
    droppable.bind("drop", handleDroppedFile);
});

$(function() {
    const songName = '';

    const filenameFormat = (songName) => {

        const mExtentionArray = [
            '.mp3', '.wma', '.asf', '.3gp', '.3g2', '.aac', '.ogg', '.oga', '.mov', '.m4a', '.m4p', '.alac', '.ape', '.mac ', '.tta', '.mka', '.mkv', '.flac', '.wav', '.aiff', '.aif', '.aifc'
        ];

        for (let i = 0, len = mExtentionArray.length; i < len; i++) {
            if (songName.indexOf(mExtentionArray[i])) {
                fmtName = songName.replace(mExtentionArray[i], "");
                return fmtName;
                console.log(fmtName);
            }

        }

        // return fmtName;
    };

    filenameFormat(songName);

    console.log(fmtName);

    $('.bank__item').click(function() {
        var index = $('.bank__item').index(this);
        $('.tab-content').removeClass('is-active');
        $('.tab-content').eq(index).addClass('is-active');
        $('.bank__item').removeClass('is-active');
        $(this).addClass('is-active')
    });
});
var saveStorage = function(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
};

var getStorage = function(key) {
    var obj = localStorage.getItem(key);
    return JSON.parse(obj);
};