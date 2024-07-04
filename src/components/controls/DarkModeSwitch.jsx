import useStore from "@/store"
import { Switch } from "../ui/switch"

export default function DarkModeSwitch() {
  const darkMode = useStore((state) => state.darkMode)
  const setDarkMode = useStore((state) => state.setDarkMode);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    mixpanel.track('Dark Mode Toggled', { darkMode: !darkMode }); // Track dark mode toggle event
  };

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        DarkMode
      </label>
      <Switch
        checked={darkMode}
        onCheckedChange={handleDarkModeToggle}
        className="my-1.5"
      />
    </div>
  )
}
