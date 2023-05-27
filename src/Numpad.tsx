import styles from './Numpad.module.css';
import NumpadNumber from './NumpadNumber';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

type NumpadProps = {
	handleClick: (num: number) => void;
};

const Numpad: React.FC<NumpadProps> = ({ handleClick }) => {
	return (
		<div className={styles.container}>
			{numbers.map((num, index) => (
				<NumpadNumber number={num} index={index} handleClick={handleClick} />
			))}
		</div>
	);
};

export default Numpad;
