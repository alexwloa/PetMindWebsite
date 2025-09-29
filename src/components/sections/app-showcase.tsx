const AppShowcase = () => {
  return (
    <main className="flex justify-center mt-6 sm:mt-8 mb-12 sm:mb-20 px-4">
      {/* 
        This is the main container for the phone showcase.
        - flex justify-center: Centers the phone mockup horizontally.
        - Responsive margins and padding for different screen sizes.
      */}
      <div className="relative w-[240px] sm:w-[280px] h-[480px] sm:h-[580px] p-[8px] sm:p-[10px] bg-[#222222] rounded-[32px] sm:rounded-[40px] shadow-[0_15px_40px_0_rgba(0,0,0,0.15)] sm:shadow-[0_20px_50px_0_rgba(0,0,0,0.2)]">
        {/* 
          This is the iPhone frame.
          - w-[280px] h-[580px] p-[10px]: Dimensions and padding from computed styles.
          - bg-[#222222]: Background color from computed styles (rgb(34, 34, 34)).
          - rounded-[40px]: Border radius for the frame.
          - shadow-[...]: Box shadow from computed styles.
        */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] sm:w-[100px] h-[20px] sm:h-[25px] bg-[#222222] rounded-b-[12px] sm:rounded-b-[15px] z-10" />
        {/* 
          This is the iPhone notch.
          - absolute top-0 left-1/2 -translate-x-1/2: Positions the notch at the top center.
          - w-[100px] h-[25px]: Dimensions from computed styles.
          - rounded-b-[15px]: Rounded bottom corners for the notch shape.
          - z-10: Ensures notch is above the screen content.
        */}
        <div className="relative h-full w-full overflow-hidden rounded-[24px] sm:rounded-[30px] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          {/* 
            This is the iPhone screen container.
            - h-full w-full: Fills the padded area of the frame.
            - overflow-hidden rounded-[30px]: Clips the inner image to the screen's rounded corners.
            - bg-gradient-to-br from-blue-500 to-purple-600: Gradient background as placeholder.
          */}
          <div className="text-white text-center p-4 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">PetMind</h3>
            <p className="text-xs sm:text-sm opacity-80">App Screenshot</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppShowcase;