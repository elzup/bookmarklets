// GitHub Pages からリポジトリに移動する

javascript: (() => {
  const githubIoUrlToRepoUrl = (url) => {
    const m = url.match(/(([^/]+).github.io)\/?([^/]*)/);
    if (!m) {
      return false;
    }

    const [, host, githubId, repoPath] = m;

    const repo = repoPath || host;
    return `http://github.com/${githubId}/${repo}`;
  };

  const url = githubIoUrlToRepoUrl(location.href);
  console.log(url);

  if (!url) {
    alert('not github.io repository');
    return;
  }
  location.href = url;
})();
