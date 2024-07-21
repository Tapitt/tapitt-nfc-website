"use client"
import React, { useState, useEffect } from 'react';
import Tabs from '../../components/Tabs';
import Collection from '@/components/Collection';
//import Collection from './Collection';
import dynamic from 'next/dynamic';
import { ChevronDownIcon } from 'lucide-react';
//import { CollectionsData } from '@/lib/data';
import { CustomizableData, ProfessionData, DesignData, GradientData, RestroCafeData, RetailerData, ReviewData } from './data';

function Collections({ withTabs = true, tabs, data, isTabStyle = true }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [collectionData, setCollectionData] = useState([]);
  const [backgroundData, setBackgroundData] = useState([]);
  const [stickersData, setStickersData] = useState([]);
  const [activeSort, setActiveSort] = useState('Trending');

return (
    <>
			<div className="flex flex-col w-full items-start space-y-6">
				<div className="flex flex-col w-full items-start space-y-6 md:space-y-10">
					{withTabs ? (
						<>
							<div className="flex flex-col w-full flex-1 items-start space-y-6">
								<div className="flex flex-row md:divide-x md:divide-black items-center md:justify-start justify-between w-full">
									<div className="md:block hidden pl-5">
										<Tabs tabs={tabs} active={activeTab} setActive={setActiveTab} isTabStyle={isTabStyle} />
									</div>
									<div className="md:hidden block">
									<Tabs tabs={tabs} active={activeTab} setActive={setActiveTab} isTabStyle={isTabStyle} />
									</div>
								</div>

								{!isTabStyle && <div className="border-t border-theme-light-purple-50 flex w-full h-1"></div>}
							</div>
							<div>
								{activeTab === 'All' && <Collection collection={collectionData} />}
								{activeTab === 'Customizable' && <Collection collection={CustomizableData} />}
								{activeTab === 'Professional' && <Collection collection={ProfessionData} />}
								{activeTab === 'Designs' && <Collection collection={DesignData} />}
								{activeTab === 'Gradients' && <Collection collection={GradientData} />}
								{activeTab === 'Cafes' && <Collection collection={RestroCafeData} />}
								{activeTab === 'Retailers' && <Collection collection={RetailerData} />}
								{activeTab === 'Review' && <Collection collection={ReviewData} />}
							</div>
						</>
					) : (
						<div className="pt-6">
							<div className="border-t border-theme-light-purple-50 pb-10 flex w-full h-1"></div>
							<Collection collection={data} />
						</div>
					)}
				</div>
			</div>
		</>
)
}

export default Collections;
