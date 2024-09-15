import { FC, ReactNode, useState } from 'react';
import { ArrowDown, GraphicIcon } from '../../assets';
import { motion } from 'framer-motion';

interface IAcordionCard {
	title: string;
	text: string;
	info: string;
	type: 'good' | 'bad';
	content: ReactNode;
}

const dropdownVariants = {
	open: {
		height: 'auto',
	},
	close: {
		height: 0,
	},
};

const AccordionCard: FC<IAcordionCard> = ({
	title,
	text,
	info,
	type,
	content,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='bg-white rounded-lg'>
			<div
				onClick={() => setIsOpen((prev) => !prev)}
				className='flex items-center justify-between pr-6'>
				<div className='grid gap-3 p-4'>
					<h2 className='text-2xl font-semibold text-black'>{title}</h2>
					<div className='grid grid-cols-[auto,auto] w-max gap-1'>
						<p className='font-medium text-gray'>{text}</p>
						<p
							className={`font-semibold grid grid-cols-[auto,auto] w-max gap-1 items-center ${
								type === 'good' ? 'text-green' : 'text-red'
							}`}>
							{info}{' '}
							<GraphicIcon
								className={`${type === 'good' ? 'text-green' : 'text-red'}`}
								width={23}
								height={11}
							/>
						</p>
					</div>
				</div>
				<ArrowDown
					className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition`}
					width={30}
					height={30}
				/>
			</div>
			<motion.div
				variants={dropdownVariants}
				animate={isOpen ? 'open' : 'close'}
				className={`overflow-hidden pt-0 px-3`}>
				{content}
			</motion.div>
		</div>
	);
};

export default AccordionCard;
