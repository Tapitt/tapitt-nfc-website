import Collections from './Collections.jsx'
import { tabs } from './data'
import {CustomizableData, DesignData} from "./data.js"

export default function Home() {
	return (
		<>
			
			<div className="flex flex-col px-5 py-5 md:py-10 md:px-20">
				<div className="py-1.5">
					<Collections withTabs={true} tabs={tabs} data={DesignData} />
				</div>
			</div>
		</>
	)
}
