// * PROJECT PLANNING - PPR2021 * //

/*

Current Notes {

  + Add the Godforsaken Media Queries {
    # This of course means designing a mobile version of each page, but it'll be important to get this into the workflow.
  }

  + Fix the Video Section {
    # Currently messy because of an issue with the container component. Refactor the video section to use another type of wrapper. 
  }

  + Add the footer {
    # Yeah, do that.
  }

  - Design and Build The Team Pages {
    # I feel like there are a couple ways this could go.
      1. Simple scrollable list 
      2. Full page list with a bit more flare to the design.
      3. Show all members and allow selection for more detail.
  }

  - Page Transitions {
    # I kind of like the cover transitions, but I'd like to experiment with other ideas. Just having swipes with more flowy physics would be cool. 
    # Would also be cool to have some cursor interaction to make the page feel even more fluid. 
    // 1. There's a jitter in the header when transitioning from hero to gallery.
    ^This came from the absence of a scrollbar on the entering page. 
    // 2. Not sure how component exit works with gsap, so this has yet to be added.
    ^Implemented AniLink and used built in transitions.
    // 3. Gatsby apparently has a Transition Link component. Hopefully this will help in solving the issue of handling different transitions for the same page, depending on which page is linking to it.
    ^ It did.
  }

  - Build in the fixed button functionality {
    # This could work as part of the layout, persisting on all pages as kind of a versatile option panel that varies in number and content based on the current page. Would like it to remain fixed so that it can do the cool blendy thing as it scrolls items. 
  }
}

*/