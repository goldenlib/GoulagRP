/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.04
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/GoulagRP.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "GoulagRP";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
	"backgrounds/images/2.jpg",
	"backgrounds/images/3.jpg",
	"backgrounds/images/4.jpg",
	"backgrounds/images/5.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = false;

/*Display actual song's name?*/
var l_musicDisplay = false;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "A5k1ueMRTNE", name: "Ghost & Kozmos - Tetris Theme [Electro Swing Remix]"},
	{youtube: "g1sR3Df-qDE", name: "Bendy and The Ink Machine - The Devil's Swing [Glitch Swing Remix (ft. OR3O)]"},
	{youtube: "NMciyV8O7T8", name: "Undertale AU | Underswap - The Greasers (test)"},
	{youtube: "ogxdPMbrP3E", name: "Gravity Falls - Theme Song [Electro Swing Remix]"},
	{youtube: "OzztwHeg_Og", name: "20,000 subs | Undertale - The Swing Brothers [Electro Swing Remix]"},
	{youtube: "U2UiZuqRYIs", name: "Undertale - Spear of Justice [Electro Swing Remix]"},
	{youtube: "cDy61yEZkvQ", name: "Ghost - Complex Code [Drum and Bass]"},
	{youtube: "7PBRFA7FhfI", name: "The Legend of Zelda: Breath of the Wild - Main Theme [Electro Swing]"},
	{youtube: "RbpKwdL-RDg", name: "Undertale AU | Underswap - Muffet's Parlor"}
];

/*Random music order?*/
var l_musicRandom = false;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"A la fin, c’est toujours la mort qui gagne. - Joseph Staline",
"En ce qui concerne l’avenir, les masses se fient à ceux qui les persuadent qu’ils représentent leurs intérêts mieux que les autres. - Joseph Staline",
"Dans l’armée rouge il faut bien plus de courage pour battre en retraite que pour avancer. - Joseph Staline",
"Ce qui compte ce n’est pas le vote, c’est comment on compte les votes. - Joseph Staline",
"La guerre résout tous les problèmes – Pas d’hommes, Pas de problème. - Joseph Staline",
"Oh ! Le pape ! Combien de divisions a-t-il ? - Joseph Staline",
"Ce qui est à moi est à moi, ce qui est à toi est négociable. - Joseph Staline",
"L’essentiel pour un homme politique est de savoir manoeuvrer en donnant satisfaction aux besoins immédiats les plus impérieux de la majorité de la population. - Joseph Staline",
"La mort d’un homme est une tragédie. La mort d’un million d’hommes est une statistique. - Joseph Staline",
"Les prolétaires n’ont rien à perdre que leurs chaînes. Ils ont un monde à gagner. Prolétaires de tous les pays, unissez-vous ! - Karl Marx",
"La propriété privée nous a rendus si stupides et si bornés qu’un objet n’est nôtre que lorsque nous le possédons. - Karl Marx",
"Ce qui distingue d'emblée le pire architecte de l'abeille la plus experte, c'est qu'il a construit la cellule dans sa tête avant de la construire dans la ruche. - Karl Marx",
"De chacun selon ses capacités, à chacun selon ses besoins. - Karl Marx",
"Les philosophes n'ont fait qu'interpréter diversement le monde, il s'agit maintenant de le transformer. - Karl Marx",
"Les pensées de la classe dominante sont aussi, à toutes les époques, les pensées dominantes. - Karl Marx",
"Les prolétaires n'ont pas de patrie. - Karl Marx",
"L'histoire de toute société jusqu'à nos jours n'a été que l'histoire de luttes de classes. - Karl Marx",
"Dans la famille, l'homme est le bourgeois ; la femme joue le rôle du prolétariat. - Karl Marx",
"Il n’y a qu’une seule façon de tuer le capitalisme : des impôts, des impôts et toujours plus d’impôts. - Karl Marx",
"L'athéisme est une négation de Dieu, et par cette négation, il pose l'existence de l'homme. - Karl Marx",
"Moins vous êtes, plus vous avez... Ainsi, toutes les passions et toutes les activités sont englouties dans la cupidité. - Karl Marx",
"La liberté est l'expression française de l'unité de l'être humain, de la conscience générique et du rapport social et humain de l'homme avec l'homme. - Karl Marx",
"Les individus ne constituent une classe que pour autant qu'ils ont à soutenir une lutte commune contre une autre classe ; pour le reste, ils s'affrontent en ennemis dans la concurrence. - Karl Marx",
"Une idée devient une force lorsqu’elle s’empare des masses. - Karl Marx"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;