import type { Schema, Struct } from '@strapi/strapi';

export interface CmsButton extends Struct.ComponentSchema {
  collectionName: 'components_cms_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    blank: Schema.Attribute.Boolean;
    to: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

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

export interface CmsImage extends Struct.ComponentSchema {
  collectionName: 'components_cms_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    item: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CmsPostList extends Struct.ComponentSchema {
  collectionName: 'components_cms_post_lists';
  info: {
    description: '';
    displayName: 'Post List';
  };
  attributes: {
    headline: Schema.Attribute.String;
  };
}

export interface CmsSpace extends Struct.ComponentSchema {
  collectionName: 'components_cms_spaces';
  info: {
    description: '';
    displayName: 'Space';
  };
  attributes: {
    margin: Schema.Attribute.Enumeration<
      ['mt-5', 'mt-10', 'mt-15', 'mt-20', 'mt-30']
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
    description: '';
    displayName: 'Nav-items-children';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    to: Schema.Attribute.String;
  };
}

export interface ItemsPostTag extends Struct.ComponentSchema {
  collectionName: 'components_items_post_tags';
  info: {
    displayName: 'post-tag';
  };
  attributes: {
    tag: Schema.Attribute.Enumeration<['UX/ UI', 'Frontend', 'Full Stack']>;
  };
}

export interface MetaMeta extends Struct.ComponentSchema {
  collectionName: 'components_meta_metas';
  info: {
    description: '';
    displayName: 'meta';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cms.button': CmsButton;
      'cms.content': CmsContent;
      'cms.image': CmsImage;
      'cms.post-list': CmsPostList;
      'cms.space': CmsSpace;
      'items.nav-items': ItemsNavItems;
      'items.nav-items-children': ItemsNavItemsChildren;
      'items.post-tag': ItemsPostTag;
      'meta.meta': MetaMeta;
    }
  }
}
