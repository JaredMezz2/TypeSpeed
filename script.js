const englishWords = ["as", "I", "his", "that", "he", "was", "for", "on", "are", "with", "they", "be", "at", "one", "have", "this", "from", "by", "hot", "word", "but", "what", "some", "is", "it", "you", "or", "had", "the", "of", "to", "and", "a", "in", "we", "can", "out", "other", "were", "which", "do", "their", "time", "if", "will", "how", "said", "an", "each", "tell", "does", "set", "three", "want", "air", "well", "also", "play", "small", "end", "put", "home", "read", "hand", "port", "large", "spell", "add", "even", "land", "here", "must", "big", "high", "such", "follow", "act", "why", "ask", "men", "change", "went", "light", "kind", "off", "need", "house", "picture", "try", "us", "again", "animal", "point", "mother", "world", "near", "build", "self", "earth", "father", "any", "new", "work", "part", "take", "get", "place", "made", "live", "where", "after", "back", "little", "only", "round", "man", "year", "came", "show", "every", "good", "me", "give", "our", "under", "name", "very", "through", "just", "form", "sentence", "great", "think", "say", "help", "low", "line", "differ", "turn", "cause", "much", "mean", "before", "move", "right", "boy", "old", "too", "same", "she", "all", "there", "when", "up", "use", "your", "way", "about", "many", "then", "them", "write", "would", "like", "so", "these", "her", "long", "make", "thing", "see", "him", "two", "has", "look", "more", "day", "could", "go", "come", "did", "number", "sound", "no", "most", "people", "my", "over", "know", "water", "than", "call", "first", "who", "may", "down", "side", "been", "now", "find", "head", "stand", "own", "page", "should", "country", "found", "answer", "school", "grow", "study", "still", "learn", "plant", "cover", "food", "sun", "four", "between", "state", "keep", "eye", "never", "last", "let", "thought", "city", "tree", "cross", "farm", "hard", "start", "might", "story", "saw", "far", "sea", "draw", "left", "late", "run", "don't", "while", "press", "close", "night", "real", "life", "few", "north", "book", "carry", "took", "science", "eat", "room", "friend", "began", "idea", "fish", "mountain", "stop", "once", "base", "hear", "horse", "cut", "sure", "watch", "color", "face", "wood", "main", "open", "seem", "together", "next", "white", "children", "begin", "got", "walk", "example", "ease", "paper", "group", "always", "music", "those", "both", "mark", "often", "letter", "until", "mile", "river", "car", "feet", "care", "second", "enough", "plain", "girl", "usual", "young", "ready", "above", "ever", "red", "list", "though", "feel", "talk", "bird", "soon", "body", "dog", "family", "direct", "pose", "leave", "song", "measure", "door", "product", "black", "short", "numeral", "class", "wind", "question", "happen", "complete", "ship", "area", "half", "rock", "order", "fire", "south", "problem", "piece", "told", "knew", "pass", "since", "top", "whole", "king", "street", "inch", "multiply", "nothing", "course", "stay", "wheel", "full", "force", "blue", "object", "decide", "surface", "deep", "moon", "island", "foot", "system", "busy", "test", "record", "boat", "common", "gold", "possible", "plane", "stead", "dry", "wonder", "laugh", "thousand", "ago", "ran", "check", "game", "shape", "equate", "hot", "miss", "brought", "heat", "snow", "tire", "bring", "yes", "distant", "fill", "east", "paint", "language", "among", "unit", "power", "town", "fine", "certain", "fly", "fall", "lead", "cry", "dark", "machine", "note", "wait", "plan", "figure", "star", "box", "noun", "field", "rest", "correct", "able", "pound", "done", "beauty", "drive", "stood", "contain", "front", "teach", "week", "final", "gave", "green", "oh", "quick", "develop", "ocean", "warm", "free", "minute", "strong", "special", "mind", "behind", "clear", "tail", "produce", "fact", "space", "heard", "best", "hour", "better", "true", "during", "hundred", "five", "remember", "step", "early", "hold", "west", "ground", "interest", "reach", "fast", "verb", "sing", "listen", "six", "table", "travel", "less", "morning", "ten", "simple", "several", "vowel", "toward", "war", "lay", "against", "pattern", "slow", "center", "love", "person", "money", "serve", "appear", "road", "map", "rain", "rule", "govern", "pull", "cold", "notice", "voice", "energy", "hunt", "probable", "bed", "brother", "egg", "ride", "cell", "believe", "perhaps", "pick", "sudden", "count", "square", "reason", "length", "represent", "art", "subject", "region", "size", "vary", "settle", "speak", "weight", "general", "ice", "matter", "circle", "pair", "include", "divide", "syllable", "felt", "grand", "ball", "yet", "wave", "drop", "heart", "am", "present", "heavy", "dance", "engine", "position", "arm", "wide", "sail", "material", "fraction", "forest", "sit", "race", "window", "store", "summer", "train", "sleep", "prove", "lone", "leg", "exercise", "wall", "catch", "mount", "wish", "sky", "board", "joy", "winter", "sat", "written", "wild", "instrument", "kept", "glass", "grass", "cow", "job", "edge", "sign", "visit", "past", "soft", "fun", "bright", "gas", "weather", "month", "million", "bear", "finish", "happy", "hope", "flower", "clothe", "strange", "gone", "trade", "melody", "trip", "office", "receive", "row", "mouth", "exact", "symbol", "die", "least", "trouble", "shout", "except", "wrote", "seed", "tone", "join", "suggest", "clean", "break", "lady", "yard", "rise", "bad", "blow", "oil", "blood", "touch", "grew", "cent", "mix", "team", "wire", "cost", "lost", "brown", "wear", "garden", "equal", "sent", "choose", "fell", "fit", "flow", "fair", "bank", "collect", "save", "control", "decimal", "ear", "else", "quite", "broke", "case", "middle", "kill", "son", "lake", "moment", "scale", "loud", "spring", "observe", "child", "straight", "consonant", "nation", "dictionary", "milk", "speed", "method", "organ", "pay", "age", "section", "dress", "cloud", "surprise", "quiet", "stone", "tiny", "climb", "cool", "design", "poor", "lot", "experiment", "bottom", "key", "iron", "single", "stick", "flat", "twenty", "skin", "smile", "crease", "hole", "jump", "baby", "eight", "village", "meet", "root", "buy", "raise", "solve", "metal", "whether", "push", "seven", "paragraph", "third", "shall", "held", "hair", "describe", "cook", "floor", "either", "result", "burn", "hill", "safe", "cat", "century", "consider", "type", "law", "bit", "coast", "copy", "phrase", "silent", "tall", "sand", "soil", "roll", "temperature", "finger", "industry", "value", "fight", "lie", "beat", "excite", "natural", "view", "sense", "capital", "won't", "chair", "danger", "fruit", "rich", "thick", "soldier", "process", "operate", "practice", "separate", "difficult", "doctor", "please", "protect", "noon", "crop", "modern", "element", "hit", "student", "corner", "party", "supply", "whose", "locate", "ring", "character", "insect", "caught", "period", "indicate", "radio", "spoke", "atom", "human", "history", "effect", "electric", "expect", "bone", "rail", "imagine", "provide", "agree", "thus", "gentle", "woman", "captain", "guess", "necessary", "sharp", "wing", "create", "neighbor", "wash", "bat", "rather", "crowd", "corn", "compare", "poem", "string", "bell", "depend", "meat", "rub", "tube", "famous", "dollar", "stream", "fear", "sight", "thin", "triangle", "planet", "hurry", "chief", "colony", "clock", "mine", "tie", "enter", "major", "fresh", "search", "send", "yellow", "gun", "allow", "print", "dead", "spot", "desert", "suit", "current", "lift", "rose", "arrive", "master", "track", "parent", "shore", "division", "sheet", "substance", "favor", "connect", "post", "spend", "chord", "fat", "glad", "original", "share", "station", "dad", "bread", "charge", "proper", "bar", "offer", "segment", "slave", "duck", "instant", "market", "degree", "populate", "chick", "dear", "enemy", "reply", "drink", "occur", "support", "speech", "nature", "range", "steam", "motion", "path", "liquid", "log", "meant", "quotient", "teeth", "shell", "neck", "oxygen", "sugar", "death", "pretty", "skill", "women", "season", "solution", "magnet", "silver", "thank", "branch", "match", "suffix", "especially", "fig", "afraid", "huge", "sister", "steel", "discuss", "forward", "similar", "guide", "experience", "score", "apple", "bought", "led", "pitch", "coat", "mass", "card", "band", "rope", "slip", "win", "dream", "evening", "condition", "feed", "tool", "total", "basic", "smell", "valley", "nor", "double", "seat", "continue", "block", "chart", "hat", "sell", "success", "company", "subtract", "event", "particular", "deal", "swim", "term", "opposite", "wife", "shoe", "shoulder", "spread", "arrange", "camp", "invent", "cotton", "born", "determine", "quart", "nine", "truck", "noise", "level", "chance", "gather", "shop", "stretch", "throw", "shine", "property", "column", "molecule", "select", "wrong", "gray", "repeat", "require", "broad", "prepare", "salt", "nose", "plural", "anger", "claim", "continent"];
let wordCount = 50; // default word selection
let selectedWords = [];
let started = false;
let wordIndex = 0;
let currentWord = "";
let wordInput = "";
let wpmTimer, wpmDisplay, accDisplay;
let timerLength = 0;
let corrWords = 0;
let totalChar = 0, corrChar = 0, totalCorrChar = 0;
let curUserWord = "";
let wpm = 0, acc = 0, highscore = 0;
let highscoreDisplay;
let cookies = document.cookie;



$(function(){
    wordInput = $("#wordInput");        // select text input
    wpmDisplay = $("#wpm");             // select wpm display
    accDisplay = $("#acc");             // select acc display
    highscoreDisplay = $("#highscore"); // select highscore display

    // COOKIES
    // check if cookie has been set before
    if (cookies.search("highscore") < 0){
        // if not set default highscore. this is to avoid resetting cookie everytime
        document.cookie = "highscore=0";
    }
    // update cookie variable, not sure if necessary
    cookies = document.cookie;

    // update highscore variable, grab from = in cookie to end of string which is the val
    console.log();
    highscore = cookies.slice(cookies.search("=") + 1, cookies.length);

    // set current highscore
    highscoreDisplay.text(highscore);

    // set word selection
    wordSelection(wordCount);

    // KEYDOWN IS NOT UPDATING WRONG HIGHLIGHT ON CLICK SINCE KEY UP HASNT PUT IT INTO THE INPUT YET
    //keyup still tracks index properly.

    wordInput.on('input',function(){
        curUserWord = $(this).val();    // current value in textbox

       // on first input start the timer
        if (!started){
            wpmTimer = setInterval(function(){
                timerLength += 1;
            }, 1000);
            started = true;
        }

       //  highlight red if current letter is incorrect compared to selectedWords
        if (curUserWord === currentWord.text().slice(0, curUserWord.length)){
            wordInput.removeClass("wrongInput");
        } else {
            wordInput.addClass("wrongInput");
        }

        // space key
        if (curUserWord.slice(-1) === " "){
            curUserWord = $.trim(curUserWord);

            // used to count total correct characters, needed for ACC calculation
            for (let i = 0; i < curUserWord.length; i++){
                if (curUserWord.charAt(i) === currentWord.text().charAt(i)) {
                    totalCorrChar += 1;
                }
            }

            // last word case
            if (selectedWords[wordIndex] === selectedWords[selectedWords.length - 1]){
                // stop the timer
                clearInterval(wpmTimer);
                // display WPM and ACC
                // WPM == (Corrected CPM (only counts correct words) / 5) / time(minutes)
                wpm = Math.round((corrChar / 5) / (timerLength / 60));
                wpmDisplay.text(wpm);
                // ACC == total correct characters / total characters
                // loop through all selected words and get total characters
                $.each(selectedWords, function(key, word){
                    totalChar += word.length;
                });
                acc = Math.round(totalCorrChar / totalChar * 100);
                accDisplay.text(acc);

                // update cookie with highscore if highest
                if (wpm > highscore) {
                    highscore = wpm;
                    cookies = `highscore=${highscore}`;
                    console.log(cookies);

                    // update bottom display
                    highscoreDisplay.text(highscore);
                }
            }

            // increment corWords if correct
            if (curUserWord === currentWord.text()) {
                corrWords += 1;
                corrChar += curUserWord.length;
                // style green if correct
                currentWord.addClass("correctWord");
            } else {
                // incorrect case, style red
                currentWord.addClass("wrongWord");
            }

            // clear input, remove highlight
            wordInput.val("");
            wordInput.removeClass("wrongInput");

            // move word index, display next word, highlight
            wordIndex += 1;
            currentWord = $("#displayWords span:eq(" + wordIndex + ")");
            currentWord.toggleClass("highlight");
        }
    });
});

// wordSelection Method - Takes int wordCount
// Resets previous selected words and randomly selected another x amount based on wordCount
// also displays them all in their own individual spans
function wordSelection(wordCount) {
    // reset selected word array
    selectedWords = [];
    // randomly select x amount of words from the full english word list and append to selected word list
    for (let i = 0; i < wordCount; i++){
        selectedWords.push(englishWords[Math.floor(Math.random() * englishWords.length)]);
    }

    // fill in span with selectedWord array, with each word in a separate span
    $("#displayWords").html("<span>" + selectedWords.toString().replace(/,/g, '</span><span>') + "</span>");

    // set current word and highlight it on startup
    currentWord = $("#displayWords span:eq(0)");
    currentWord.toggleClass("highlight");
}

// wordCountChange Method - Takes html element
// Called when a new word count number is clicked
// Updates the wordCount variable, changes underline and regenerates words
function wordCountChange(element){
    // update current wordCount variable
    wordCount = element.textContent;

    // remove previous underline from the selected count
    $(".wordCount span").each(function(){
        $(this).removeClass("selectedCount");
    });

    // add underline to the newly selected number of words
    $(element).addClass("selectedCount");

    // regenerate words
    updateWords();
}

// updateWords Function
// Call to do the following;
//      - reset selected words with current wordCount & display them
//      - set currentWord and highlight
//      - clear input
//      - reset WPM and ACC
function updateWords(){
    // reset words in box with current wordcount
    wordSelection(wordCount);

    // clear text input
    wordInput.val("");

    // clear any highlight
    wordInput.removeClass("wrongInput");

    // reset WPM and ACC
    clearInterval(wpmTimer);
    wpmDisplay.text("XX");
    accDisplay.text("XX");


    // reset timing variables
    timerLength = 0;
    corrWords = 0;
    corrChar = 0;
    totalChar = 0;
    totalCorrChar = 0;
    wordIndex = 0;
    started = false;
}
