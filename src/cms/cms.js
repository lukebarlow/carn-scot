import CMS from 'netlify-cms'

import SectionsPreview from './preview-templates/SectionsPreview'

import { Widget as IdWidget } from '@ncwidgets/id'
import { Widget as ReorderWidget } from '@ncwidgets/reorder'
import { Widget as FileRelationWidget } from '@ncwidgets/file-relation'

CMS.registerWidget(IdWidget)
CMS.registerWidget(ReorderWidget)
CMS.registerWidget(FileRelationWidget)

CMS.registerPreviewTemplate('gallery', SectionsPreview)
CMS.registerPreviewTemplate('info', SectionsPreview)
CMS.registerPreviewTemplate('cook', SectionsPreview)
CMS.registerPreviewTemplate('build', SectionsPreview)