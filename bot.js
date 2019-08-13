var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	function getTime(hrs) { // hrs = hours off of GMT
		var  today = new Date(),
		h = today.getHours(),
		m = today.getMinutes(),
		min = checkTime(m)
		if (h < hrs + 1) {
			h_adj = h+24-hrs;
		} else {
			h_adj = h-hrs;
		}
		ampm = checkAMPM(h_adj);
		h_format = checkHour(h_adj);
		clockmoji = "\:clock"+h_format+":"
		return clockmoji+" "+h_format+":"+min+" "+ampm;
	}
	function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }
	function checkHour(i) {
		if (i <= 12) {
			hour = i;
		} else {
			hour = i - 12;
		}
		
		return hour
	}
	function checkAMPM(i) {
		return (i < 12 || i == 24) ? "AM" : "PM";
	}
	
	var responses = ["\:thinking:........pass", "\:runner:","\:zipper_mouth:","Obviously.","Next question.","Seriously? This is what you use my power for?", "Y'all hear sumn?", "You wish!", "Go outside.", "Turn off your phone.", "Smoke some weed about it.", "Only time will tell.", "Hmm... better not.", "I don't know, go ask your mother.", "Right now!", "Fuck it.", "I don't know, can you?", "\:skull:", "Maybe later.", "Ask again later.", "Unclear.", "Not likely.", "You'll see...", "If the stars align.", "Next.", "It is certain.", "It is certain.", "Probably not.", "Probably not.", "Grow up.", "pussy", "Aaaabsoluuuutely.", "Have you accepted Jesus Christ as your lord and savior?","Perhaps one day.", "Not likely.", "The oracle is tired. Ask again later.", "Yaaaaaaaas queen.", "That's tea.", "Allison Janney says yes."];
	
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
		psttime = getTime(8);
		pdttime = getTime(7);
		msttime = getTime(7);
		mdttime = getTime(6);
		csttime = getTime(6);
		cdttime = getTime(5);
		esttime = getTime(5);
		edttime = getTime(4);
        switch(cmd) {
            // !ping
			case 'ask':
				if (args.length < 1) {
					bot.sendMessage({
						to: channelID,
						message: "\:crystal_ball: I cannot answer that which does not exist."
					})
				} else {
					var num = Math.floor(Math.random() * responses.length);
					var response = "\:crystal_ball: "+responses[num];
					bot.sendMessage({
						to: channelID,
						message: response
					})
				}
			break;
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
			break;
			case 'goodnightpst':
				bot.sendMessage({
					to: channelID,
					message: "Goodnight! \:sleeping:\:crescent_moon:\n"+psttime
				});
            break;
			case 'goodnightpdt':
				bot.sendMessage({
					to: channelID,
					message: "Goodnight! \:sleeping:\:crescent_moon:\n"+pdttime
				});
			break;
			case 'goodnightmst':
				bot.sendMessage({
					to: channelID,
					message: "Goodnight! \:sleeping:\:crescent_moon:\n"+msttime
				});
            break;
			case 'goodnightmdt':
				bot.sendMessage({
					to: channelID,
					message: "Goodnight! \:sleeping:\:crescent_moon:\n"+mdttime
				});
            break;
			case 'goodnightcst':
				bot.sendMessage({
					to: channelID,
					message: "Goodnight! \:sleeping:\:crescent_moon:\n"+csttime
				});
            break;
			case 'goodnightcdt':
				bot.sendMessage({
					to: channelID,
					message: "Goodnight! \:sleeping:\:crescent_moon:\n"+cdttime
				});
            break;
			case 'goodnightest':
				bot.sendMessage({
					to: channelID,
					message: "Goodnight! \:sleeping:\:crescent_moon:\n"+esttime
				});
            break;
			case 'goodnightedt':
				bot.sendMessage({
					to: channelID,
					message: "Goodnight! \:sleeping:\:crescent_moon:\n"+edttime
				});
            break;
			case 'goodmorningpst':
				bot.sendMessage({
					to: channelID,
					message: "Good morning! \:sunrise:\n"+psttime
				});
            break;
			case 'goodmorningpdt':
				bot.sendMessage({
					to: channelID,
					message: "Good morning! \:sunrise:\n"+pdttime
				});
            break;
			case 'goodmorningmst':
				bot.sendMessage({
					to: channelID,
					message: "Good morning! \:sunrise:\n"+msttime
				});
            break;
			case 'goodmorningmdt':
				bot.sendMessage({
					to: channelID,
					message: "Good morning! \:sunrise:\n"+mdttime
				});
            break;
			case 'goodmorningcst':
				bot.sendMessage({
					to: channelID,
					message: "Good morning! \:sunrise:\n"+csttime
				});
            break;
			case 'goodmorningcdt':
				bot.sendMessage({
					to: channelID,
					message: "Good morning! \:sunrise:\n"+cdttime
				});
            break;
			case 'goodmorningest':
				bot.sendMessage({
					to: channelID,
					message: "Good morning! \:sunrise:\n"+esttime
				});
            break;
			case 'goodmorningedt':
				bot.sendMessage({
					to: channelID,
					message: "Good morning! \:sunrise:\n"+edttime
				});
            break;
			case 'timepst':
				bot.sendMessage({
					to: channelID,
					message: psttime
				});
            break;
			case 'timepdt':
				bot.sendMessage({
					to: channelID,
					message: pdttime
				});
            break;
			case 'timemst':
				bot.sendMessage({
					to: channelID,
					message: msttime
				});
            break;
			case 'timemdt':
				bot.sendMessage({
					to: channelID,
					message: mdttime
				});
            break;
			case 'timecst':
				bot.sendMessage({
					to: channelID,
					message: csttime
				});
            break;
			case 'timecdt':
				bot.sendMessage({
					to: channelID,
					message: cdttime
				});
            break;
			case 'timeest':
				bot.sendMessage({
					to: channelID,
					message: esttime
				});
            break;
			case 'timeedt':
				bot.sendMessage({
					to: channelID,
					message: edttime
				});
            break;
            // Just add any case commands if you want to..
         }
     }
});