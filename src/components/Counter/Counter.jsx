/**
 * - Зберігає стан count
 * - Збільшує поточне значення count при onClick
 * - Рендериться у App
 */

export default function Counter({ text = 'Click me:', onUpdate }) {
  return <button onClick={onUpdate}>{text}</button>;
}
