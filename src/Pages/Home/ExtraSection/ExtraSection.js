import React from 'react';

const ExtraSection = () => {
    return (
        <div>
               <div>
               <div className="flex flex-col w-full lg:flex-row mt-12 mb-12 justify-around bg-orange-600 pb-12 pt-12">
  <div><h2 className='font-bold text-3xl  text-white'>Sell fast with less work</h2></div>
  <div className='sm:mb-4'><input type="text" placeholder="SellCell Trade-In" className="input w-full  text-white input-light" /></div>
</div>
               </div>
               <div>
               <div className="flex flex-col w-full lg:flex-row mt-12 mb-12 justify-around bg-violet-600 pb-12 pt-12">
  <div><h2 className='font-bold text-3xl  text-white'>Buy Phone in less price</h2></div>
  <div><input type="text" placeholder="SellCell Trade-In" className="input w-full   text-white input-light" /></div>
</div>
               </div>
        
        </div>
    );
};

export default ExtraSection;