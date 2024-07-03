import useStore from "@/store"
import mixpanel from 'mixpanel-browser';
import { Slider } from "../ui/slider"

export default function PaddingSlider() {
  const padding = useStore((state) => state.padding)

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Padding
      </label>
      <Slider
        className="w-44 my-5"
        value={[padding]}
        <Slider className="w-44 my-5" value={[padding]} onValueChange={([newPadding]) => { useStore.setState({ padding: newPadding }); mixpanel.track('padding', { padding_amount: newPadding, padding_changed: true }); }} max={128} step={8} />
        max={128}
        step={8}
      />
    </div>
  )
}
