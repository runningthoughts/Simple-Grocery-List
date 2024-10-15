# Grocery List Web App
I have had difficulty finding a good, simple grocery list app that is not bloated with "features." Most grocery list apps allow for multiple users of the same list (other family members), sync across devices, and add fields and whatnot that are just not generally necessary. They end up bloating the list and greatly increasing the time needed to create the list.

I want Palm Pilot checklist simplicity. Even simpler To Do lists allow for multipe lists, require you to tap a + button, move checked off items to a different folder, etc... multiple steps that make the input process more tedious.

I had such an app, called Int'l List, on iPhone, but it became unsupported in iOS 18 in September.

## Requirements
- Shall be a Progressive Web App
- Only needs to run on an iPhone
- The title shall be "Grocery List"
- It will only manage one list, always visible on the screen
- The first time it is ever run, the first line will be an empty checkbox and a blank, text entry field next to it
- The user will be able to tap in the empty field and start typing an item for the list
- Upon hitting return, this item will be added to the list.
- The blank, new entry line shall always be anchored at the top of the display and never scroll off the phone
- Once an item is added to the list, the list shall be alphabetized
- Text entry of the new item shall use the phone's standard keyboard entry that allows any language keyboard and appropriate language dictionary to be used
- The list shall be stored in device memory, so the next time you launch the app, it brings it up.
- Tapping the checkbox puts a checkmark in the box and crosses out the text.
- Items that are checked off shall be moved below the list to a section titled "Added to cart"
- Items in the "added to cart" list can be unchecked by tapping on the checked box, which will cause the item to go back to the main part of the list.
- Items in the "added to cart" list shall also remain alphabetized.
- In the top right corner of the app shall be a trash can icon
- Tapping the trash can icon will ask the user to confirm deleting items in the "added to cart" list.
- Set the colors of the list to cooler colors, using black text at a default text size, using the phone's main font
- As the list grows (the main list plus the checked off items before they are deleted), it shall become scrollable as long as the list is longer than the screen.

### Refinements
Some additional refinements were made after the fact to tweak how it worked
- Add Dark Mode support
- Permanently pull assets from cache to minimize the pings to the original website host.
	- The reason for this is I do not want my website to keep getting hits if thie app is installed by other people. I don't expect many people to use this, I wrote it for myself. But in the event it is, minimize the hits.
- The "Added to cart" section shall be invisible when it is empty

## As-is
This Progressive Web App is released as-is. The app screen tends to be a little rubbery- you can wiggle it side to side, so it could be locked down and only scroll horizontally when it is a long list (it already does scroll automatically). Additional theme colors could be added, but I picked colors I found pleasant.  The app is for me- feel free to use it or copy/modify it as desired.

It has a small quirk- if you have several items of the same name (i.e., duplicates), checking off one of them removes the duplicates. That's not a bad thing, as the app does not have duplicate detection as it is.

It is no frills, just pure and simple a grocery list. It could be cloned and also be a super simple ToDo list, if you wished to copy the source and give it a different title.  I may do that as well. I don't need or want ToDo lists that have account logins and fussy features.  Multiple lists are nice, but usually I don't require them.

*** This code is not copyrighted, as it was mostly written by ChatGPT-4o ***