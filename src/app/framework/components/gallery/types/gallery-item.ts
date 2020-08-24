export interface IFxGalleryItem {
  name: string;
  uri: string;
  width: number;
  height: number;
}

export class FxGalleryItem implements IFxGalleryItem {

  public name: string;
  public uri: string;
  public width: number;
  public height: number;

  static DEFAULT_WIDTH: number = 100;
  static DEFAULT_HEIGHT: number = 100;

  private constructor() {
  }

  public static create(name: string, uri: string, width?: number, height?: number): IFxGalleryItem {
    if (name === undefined|| name === null || name === '')
      throw new Error('name cannot be null or empty');
    if (uri === undefined || uri === null || uri === '')
      throw new Error('uri cannot be null or empty');

    let galleryItem: FxGalleryItem = new FxGalleryItem();
    galleryItem.name = name;
    galleryItem.uri = uri;
    galleryItem.width = width === null ? FxGalleryItem.DEFAULT_WIDTH : width;
    galleryItem.height = height === null ? FxGalleryItem.DEFAULT_HEIGHT : height;
    
    return galleryItem;
  }

  public static default(): IFxGalleryItem {
    let galleryItem: FxGalleryItem = new FxGalleryItem();
    galleryItem.name = null;
    galleryItem.uri = null;
    galleryItem.width = FxGalleryItem.DEFAULT_WIDTH;
    galleryItem.height= FxGalleryItem.DEFAULT_HEIGHT;

    return galleryItem;
  }

  public isAbsolute(): boolean {
    if (this.uri !== undefined && this.uri !== null 
      && /^(http|https)[:]\/\/$/.exec(this.uri))
      return true;
    return false;
  }

  public isRelative(): boolean {
    return !!this.isAbsolute();
  }
}