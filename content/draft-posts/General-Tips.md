# General Tips - Beginner's Notes

## Animations

First I want to say that it's great you're thinking about animations and transitions. They're sometimes the first things left on the cutting room floor.

When implementing animations and transitions, I'd urge you to consider the types of timings you use and what they say: does a bounce make sense? Or an ease-in-out? And Why? A bounce often provides a fun, almost cartoonish experience, while an ease-in-quad can give you a very sleek, calm transition. Think about the tone of the site and make sure the timing and ease quality fit the bill.

Consistency is key. If your navigation is smooth, fluid and gentle you don't want your button animations to be sharp and snappy. There's been a lot of great writing out there on the topic, don't be afraid to leverage the work others have done!

## Text
Legibility is important above all else. Period.

### Color
Color contrast is one of the hardest things to get right in general, but is important for readability (especially for accessibility users, but for all humans in general.) There are a lot of tools out there to help you meet Color contrast accessibiltiy requirements.  This helps all humans (phone on low brightness in the day time? Trying to look at something quickly? Color contrast can be the biggest hinderence to tese things. 

Your buttons are difficult to read because the font used is a very, very thin font and the colors are not distinct enough. Subtle color diffrences can be achieved with bolder, thicker fonts if you really want to.

The Popular Arrangement card contain absolutely unreadable prices. A comibnation of font weight, color, and drop shadow can help remedy that.

## Random Notes

1. The cards rotating is a fun trick, but try and tab through your website. You'll see the buttons on the reverse side of the card get the focus. For an abled, keyboard user this could be mildly annoying, but for someone who relies solely on the keyboard to navigate an individual would find themselves lost on the site.

2. Don't be afraid to let your links breathe a little on the left and right sides with padding.

3. Negative margin: If you're using it, you're probably gonna have a bad time in the scheme of things (especially considering you're using VH, which simply isn't a predictable value.) You can't count on any given browser window size, and it's harder to maintain in the long run. If you set .section-about 's padding to 2rem and remove the negative margin-top, the document will reflow how you want it to naturally at all sizes. (less break points to adjust it, etc etc)


