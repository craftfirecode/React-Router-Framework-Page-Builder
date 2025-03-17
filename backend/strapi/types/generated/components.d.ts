import type { Schema, Struct } from '@strapi/strapi';

export interface CmsContent extends Struct.ComponentSchema {
  collectionName: 'components_cms_contents';
  info: {
    description: '';
    displayName: 'Content';
  };
  attributes: {
    wysiwyg: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface ItemsNavItems extends Struct.ComponentSchema {
  collectionName: 'components_items_nav_items';
  info: {
    description: '';
    displayName: 'Nav-items';
    icon: 'apps';
  };
  attributes: {
    children: Schema.Attribute.Component<'items.nav-items-children', true>;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    to: Schema.Attribute.String;
  };
}

export interface ItemsNavItemsChildren extends Struct.ComponentSchema {
  collectionName: 'components_items_nav_items_children';
  info: {
    displayName: 'Nav-items-children';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    to: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cms.content': CmsContent;
      'items.nav-items': ItemsNavItems;
      'items.nav-items-children': ItemsNavItemsChildren;
    }
  }
}
