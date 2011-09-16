// brush: "turing" aliases: ["oot"]

Syntax.register('turing',function(brush) {
	brush.push(["black","blue","brightblue","brightcyan","brightgreen","brightmagenta","brightpurple","brightred","brightwhite","brown","brushErrorBase","cdMaxNumColors","cdMaxNumColours","cdMaxNumPages","cdScreenHeight","cdScreenWidth","clLanguageVersion","clMaxNumDirStreams","clMaxNumRunTimeArgs","clMaxNumStreams","clRelease","cmFPU","cmOS","cmProcessor","colorbg","colourbg","colorfg","colourfg","configErrorBase","cyan","darkgray","darkgrey","defFontID","defWinID","dirErrorBase","drawErrorBase","errWinID","fileErrorBase","fontDefaultID","fontErrorBase","fsysErrorBase","generalErrorBase","gray","green","grey","guiErrorBase","joystick1","joystick2","lexErrorBase","magenta","mouseErrorBase","musicErrorBase","penErrorBase","picXor","placeCenterDisplay","placeCentreWindow","printerErrorBase","purple","red","rgbErrorBase","spriteErrorBase","streamErrorBase","textErrorBase","timeErrorBase","unixSignalToException","viewErrorBase","white","windowErrorBase","yellow"],{klass: 'builtin-constant',options: 'g'});
	brush.push(["addressint","all","and","array","asm","assert","begin","bind","bits","body","boolean","break","by","case","char","cheat","checked","class","close","collection","condition","const","decreasing","def","deferred","div","else","elseif","elsif","end","endfor","endif","endloop","enum","exit","export","external","false","fcn","flexible","for","fork","forward","free","function","get","handler","if","implement","import","in","include","inherit","init","int","int1","int2","int4","invariant","label","loop","mod","module","monitor","nat","nat1","nat2","nat4","new","not","objectclass","of","opaque","open","or","packed","pause","pervasive","pointer","post","pre","priority","proc","procedure","process","put","quit","read","real","real4","real8","record","register","rem","result","return","seek","self","set","shl","shr","signal","skip","string","tag","tell","then","timeout","to","true","type","unchecked","union","unqualified","var","wait","when","write","xor "],{klass:'keyword',options:'g'});
	brush.push(["+","-","*","/","div","mod","and","or","xor","shl","shr","not","=",">=",">","<>","<=","<",",",":",":=","..","->","^","(",")"],{klass:'operator',options:'g'});
	brush.push(["abs","addr","arctan","arctand","anyclass","break","buttonchoose","buttonmoved","buttonwait","ceil","chr","clock","cls","color","colorback","colour","colourback","cos","cosd","date","delay","drawarc","drawbox","drawdot","drawfill","drawfillarc","drawfillbox","drawfillmapleleaf","drawfilloval","drawfillpolygon","drawfillstar","drawline","drawmapleleaf","drawoval","drawpic","drawpolygon","drawstar","empty","eof","erealstr","exp","fetcharg","floor","frealstr","getch","getchar","getenv","getpid","getpriority","hasch","index","intreal","intstr","length","ln","locate","locatexy","lower","max","maxcol","maxcolor","maxcolour","maxint","maxnat","maxrow","maxx","maxy","min","minint","minnat","mousehide","mouseshow","mousewhere","nargs","natreal","natstr","nil","ord","palette","play","playdone","pred","rand","randint","randnext","randomize","randseed","realstr","repeat","round","setpriority","setscreen","sign","simutime","sin","sind","sizeof","sizepic","sound","sqrt","strint","strintok","strnat","strnatok","strreal","strrealok","succ","sysclock","sysexit","system","takepic","time","upper","wallclock","whatcol","whatcolor","whatcolorback","whatcolour","whatcolourback","whatdotcolor","whatdotcolour","whatpalette","whatrow","whattextchar","whattextcolor","whattextcolorback","whattextcolour","whattextcolourback "],{klass:'builtin',options:'g'});
	brush.push({pattern: /[a-zA-Z_][a-zA-Z0-9_]*/g,klass:'symbol'});
	brush.push({pattern: /%.*/gm,klass:'comment',allow:['href']});
	brush.push(Syntax.lib.cStyleComment);
	brush.push(Syntax.lib.webLink);
	brush.push(Syntax.lib.singleQuotedString);
	brush.push(Syntax.lib.doubleQuotedString);
	brush.push(Syntax.lib.stringEscape);
	brush.push(Syntax.lib.decimalNumber);
	brush.push(Syntax.lib.hexNumber);
	brush.push(Syntax.lib.cStyleFunction);
});

