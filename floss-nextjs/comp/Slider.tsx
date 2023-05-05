import styles from '@/styles/Slider.module.css';

export function Slider(props: {
  checked: boolean;
  onClick(checked: boolean): void;
}) {
  const onClick = () => props.onClick(!props.checked);

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={props.checked} onClick={onClick}/>
      <span className={[styles.slider, styles.round].join(' ')} />
    </label>
  );
}
