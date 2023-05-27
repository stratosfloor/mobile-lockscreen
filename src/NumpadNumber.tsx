import styles from './NumpadNumber.module.css';

type NumpadNumberProps = {
	number: number;
	index: number;
	handleClick: (num: number) => void;
};

const NumpadNumber: React.FC<NumpadNumberProps> = ({
	number,
	index,
	handleClick,
}) => {
	return (
		<div
			className={styles.container}
			key={index}
			onClick={() => handleClick(number)}
		>
			{number}
		</div>
	);
};

export default NumpadNumber;
