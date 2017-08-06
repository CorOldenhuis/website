'use strict'

$('#feed1').FeedEk({
FeedUrl:'http://www.technewsworld.com/perl/syndication/rssfull.pl',
MaxCount : 5,
ShowDesc : true,
ShowPubDate:true,
DescCharacterLimit:600,
TitleLinkTarget:'_blank',
DateFormat: 'MM/DD/YYYY',
DateFormatLang:'en'
});

$('#feed2').FeedEk({
FeedUrl:'http://www.digitalartsonline.co.uk/rss/feeds/digitalarts-news.xml',
MaxCount : 5,
ShowDesc : true,
ShowPubDate:true,
DescCharacterLimit:600,
TitleLinkTarget:'_blank',
DateFormat: 'MM/DD/YYYY',
DateFormatLang:'en'
});
