import React from 'react';
import { BsDot } from 'react-icons/bs';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import {
	Button,
	Sparkline, Stacked, Doughnut
} from '../components';

const Ecommerce = () => {
	const { currentColor, currentMode } = useStateContext()

	const darkMode = currentMode === 'dark'
	const lightMode = currentMode === 'light'

	return (
		// <div className="mt-24 ">
		<div className={`mt-24 w-full h-full ${darkMode && 'bg-main-dark-bg'} ${lightMode && 'bg-white'} `} >
			<div className="flex flex-wrap lg:flex-nowrap justify-center ">
				<div className={`bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
				h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3`}>
					<div className="flex justify-between items-center">
						<div>
							<p className='font-bold text-gray-600 dark:text-slate-200 ' >Earnings</p>
							<p className='text-2xl' >RM 7,344.75</p>
						</div>
					</div>
					<div className='mt-6' >
						<Button
							color={'white'} bgColor={currentColor}
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
							<p className='text-sm text-gray-600 dark:text-slate-200 mt-1' >{item.title}</p>
						</div>
					))}
				</div>
			</div>

			{/* ___BIG CARD (REVENUE SECTION) ___ */}
			<div className='flex flex-wrap justify-center gap-10' >
				<div className='bg-white p-5 dark:text-slate-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780' >
					<div className="flex justify-between">
						<p className='font-semibold text-xl' >Revenue Updates</p>
						<div className='flex items-center gap-4 ' >
							<p className='flex items-center gap-2 font-semibold text-red-500 hover:drop-shadow-xl' >
								<span><BsDot /> </span>
								<span>Expense</span>
							</p>
							<p className='flex items-center gap-2 font-semibold text-green-500 hover:drop-shadow-xl' >
								<span><BsDot /> </span>
								<span>Budget</span>
							</p>
						</div>
					</div>
					<div className='mt-10 flex flex-wrap justify-center gap-10 ' >
						<div className="border-r-1 border-color m-4 pr-10 ">
							<div>
								<p>
									<span className='text-3xl font-semibold' >RM 6,800</span>
									<span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-500 ml-3 text-xs' >
										23%
									</span>
								</p>
								<p className='text-green-500 mt-1' >Budget</p>
							</div>
							<div className='mt-8' >
								<p>
									<span className='text-3xl font-semibold' >RM 4,600</span>

								</p>
								<p className='text-red-500 mt-1' >Expenses</p>
							</div>
							<div className='mt-5 ' >
								<Sparkline
									currentColor={currentColor}
									id={'line-sparkline'}
									type={'Line'}
									height={'80px'}
									width={'250px'}
									data={SparklineAreaData}
									color={currentColor}
								/>
							</div>
							<div className='mt-10' >
								<Button
									color={'white'} bgColor={currentColor}
									borderRadius={'10px'}
									text={'Download Report'}
								/>
							</div>
						</div>
						{/* STACKED CHART  */}
						<div>
							<Stacked
								width='320px' height={"360px"}
							/>
						</div>
					</div>
				</div>
				<div>
					<div className='rounded-2xl md:w-400 p-4 m-3 ' style={{ backgroundColor: currentColor }} >
						<div className='flex justify-between items-center ' >
							<p className='font-semibold text-white text-2xl ' >Earnings</p>
							<div>
								<p className="text-2xl text-white font-semibold mt-8">RM 3,248.78</p>
								<p className="text-gray-200">Monthly revenue</p>
							</div>
						</div>
						<div className='mt-4' >
							{/* SPARKLINE  */}
							<Sparkline
							type={'Column'}
							color={'white'}
							currentColor={currentColor}
							id={'column-'}
							data={SparklineAreaData}
							height={'100px'}
							width={'320'}
							/>
						</div>
					</div>
					<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
						<div>
							<p className="text-2xl font-semibold ">RM 9,246</p>
							<p className="text-gray-400">Yearly sales</p>
						</div>

						<div className="w-40">
							<Doughnut
								id='pie-chart'
								data={ecomPieChartData}
								legendVisiblity={false}
								height={'160px'}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Ecommerce