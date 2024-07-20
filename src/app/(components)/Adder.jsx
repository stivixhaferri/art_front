import React from 'react'

export const Adder = () => {
  return (
    <section className="bg-[#F7F7F7] pb-[5%]">
      <div className="gap-16 items-center py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 w-full px-[5%]">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Alabanian Rental Tourism
          </h2>
          <p className="mb-4 text-gray-700 py-4 relative z-[2] lg:text-[20px] text-[20px]">
            Faleminderit që na zgjodhët për nevojat tuaja të qiradhënies së makinave. Ne jemi një platformë e dedikuar për t&apos;ju ofruar zgjidhjet më të mira për udhëtimet tuaja. Me një gamë të gjerë makinash për çdo shije dhe nevojë, synojmë të bëjmë udhëtimin tuaj sa më të rehatshëm dhe të sigurt.
            <br />
            Ekipi ynë është gjithmonë këtu për t&apos;ju ndihmuar të gjeni makinën perfekte për udhëtimin tuaj, duke ju ofruar shërbim të shkëlqyer dhe mbështetje gjatë gjithë procesit. Na zgjidhni dhe përjetoni një udhëtim me stil dhe besueshmëri!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  )
}
