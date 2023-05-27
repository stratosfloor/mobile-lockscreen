import styles from './PasscodeSymbols.module.css';

type PasscodeSymbolsProps = {
	numberOfStars: number;
	pressedNumbersLength: number;
};

const PasscodeSymbols: React.FC<PasscodeSymbolsProps> = ({
	numberOfStars,
	pressedNumbersLength,
}) => {
	return (
		<div className={styles.container}>
			{[...Array(numberOfStars)].map((x, i) => (
				<span className={pressedNumbersLength >= i + 1 ? styles.pressed : ''}>
					*
				</span>
			))}
		</div>
	);
};

export default PasscodeSymbols;
