import { AccordionProps, Accordion } from '@mantine/core';
import styles from './DefaultAccordion.module.css';
import { themeState } from '@/renderer/state/settingStates';
import { useRecoilValue } from 'recoil';

type Props = AccordionProps;

const DefaultAccordion: React.FC<Props> = (props: Props) => {
  const theme = useRecoilValue(themeState);

  return (
    <Accordion
      classNames={{
        root: styles.root,
        control: styles.control,
        label: styles.label,
        item: styles.item,
      }}
      {...props}
    />
  );
};

export default DefaultAccordion;
