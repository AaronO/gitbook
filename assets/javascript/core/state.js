define([
    "jQuery"
], function() {
    return function() {
        var $book = $(".book");

        return {
            '$book': $book,

            'githubId': $book.data("github"),
            'level': $book.data("level")
        };
    };
});