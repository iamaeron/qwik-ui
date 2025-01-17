import {
  component$,
  QwikIntrinsicElements,
  Slot,
  useStylesScoped$,
} from '@builder.io/qwik';
import styles from './breadcrumb-item.css?inline';

export type BreadcrumbItemProps = QwikIntrinsicElements['div'] & {
  divider?: string;
};

export const BreadcrumbItem = component$((props: BreadcrumbItemProps) => {
  const { style, ...rest } = props;

  useStylesScoped$(styles);

  return (
    <div style={`--breadcrumb-divider: "${props.divider || '/'}" ${style}}`} {...rest}>
      <Slot />
    </div>
  );
});
