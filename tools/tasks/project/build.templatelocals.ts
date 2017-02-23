import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';

import Config from '../../config';
import { templateLocals } from '../../utils';

const plugins = <any>gulpLoadPlugins();

export = () => {
  let files = [
      { path: 'app/pages/home/', name: 'home.component.html'},
      { path: 'app/pages/about/', name: 'about.component.html'},
      {
          path: 'app/pages/editor/components/board-explorer/',
          name: 'board-explorer.component.html'
      },
      { path: 'app/shared/navbar/', name: 'navbar.component.html'},
      { path: 'app/shared/footer/', name: 'footer.component.html'}
  ];

  for (let file of files) {
      gulp.src(join(Config.APP_SRC, file.path, file.name))
        .pipe(plugins.template(templateLocals()))
        .pipe(gulp.dest(join(Config.APP_DEST, file.path)));
  }
};
