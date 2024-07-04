import { themes } from "@/options"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { cn } from "@/lib/utils"
import useStore from "@/store"

export default function ThemeSelect() {
  const theme = useStore((state) => state.theme)

  const handleThemeChange = (newTheme) => {
    useStore.setState({ newTheme })
    mixpanel.track('Theme Changed', { theme: newTheme }); // Track theme change event
  };
  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Theme
      </label>
      <Select
        value={theme}
        onValueChange={(e) => handleThemeChange(e.target.value)}
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Select Theme" />
        </SelectTrigger>
        <SelectContent className="dark">
          {Object.entries(themes).map(([name, theme]) => (
            <SelectItem key={name} value={name}>
              <div className="flex gap-2 items-center">
                <div className={cn("h-4 w-4 rounded-full", theme.background)} />
                <span className="capitalize">{name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
