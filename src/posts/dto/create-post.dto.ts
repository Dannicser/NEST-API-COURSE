export class CreatePostDto {
  readonly title: string;
  readonly content: string;
  readonly userId: number; // лучше доставать из токена
}
