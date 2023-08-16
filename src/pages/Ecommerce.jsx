import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import { Button } from '../components';

const Ecommerce = () => {
	return (
		// <div className="mt-24 ">
		<div className="mt-24 w-full h-full bg-red-700">
			<div className="flex flex-wrap lg:flex-nowrap justify-center ">
				<div className={`bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
				h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 
				bg-hero-pattern bg-no-repeat bg-cover bg-center`}>
					<div className="flex justify-between items-center">
						<div>
							<p className='font-bold text-gray-500' >Earnings</p>
							<p className='text-2xl' >RM 7,344.75</p>
						</div>
					</div>
					<div className='mt-6' >
						<Button
							color={'white'} bgColor={'red'}
							text='Download' borderRadius={'10px'} size={'md'}
						/>
					</div>
				</div>

				{/* ALL CARDS */}
				<div className='flex flex-wrap m-3 justify-center items-center gap-1' >
					{earningData.map(item => (
						<div key={item.title}
							className={`bg-white p-4 pt-9 rounded-2xl
						dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56`}
						>
							<button type='button'
								style={{ color: item.iconColor, backgroundColor: item.iconBg }} 
								className='text-2xl opacity-1 rounded-full p-4 hover:drop-shadow-xl'
								>	
								{item.icon}
							</button>
							<p className='mt-3' >
								<span className='text-lg font-semibold' >
									{item.amount}
								</span>
								<span className={`text-sm font-semibold text-${item.pcColor} ml-2 `} >
									{item.percentage}
								</span>
							</p>
							<p className='text-sm text-gray-600 mt-1' >{item.title}</p>
						</div>
					))}
				</div>
			</div>

			{/* ___BIG CARD___ */}
			<div></div>

		</div>
	)
}
export default Ecommerce