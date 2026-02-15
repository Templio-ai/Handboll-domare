import { RichContentBlock } from '@/types';
import ScenarioBox from './ScenarioBox';
import TipBox from './TipBox';
import DidYouKnowBox from './DidYouKnowBox';
import EnhancedSignalCard from './EnhancedSignalCard';

interface Props {
  block: RichContentBlock;
}

export default function RichBlockRenderer({ block }: Props) {
  switch (block.type) {
    case 'scenario':
      return <ScenarioBox {...block} />;
    case 'tip':
      return <TipBox {...block} />;
    case 'didYouKnow':
      return <DidYouKnowBox {...block} />;
    case 'signal':
      return <EnhancedSignalCard {...block} />;
    default:
      return null;
  }
}
