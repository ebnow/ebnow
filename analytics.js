var days = [7, 14, 30, 90, 365];
var index = 0;
days.forEach(analytics);
function analytics(item, index) {
    var analytics = {
    contentRankings: {
    path: 'branch/analytics/contents/rankings',
    daysAgo: item
    },
postsRankings: {
    path: 'branch/analytics/posts/rankings',
    daysAgo: item
    },
postsTimeseries: {
    path: 'branch/analytics/posts/timeseries',
    daysAgo: 1000
    },
usersTimeseries: {
    path: 'branch/analytics/users/timeseries',
    daysAgo: 1000
    },
    chatsTimeseries: {
    path: 'branch/analytics/chats/timeseries',
    daysAgo: 1000
    }
},
links = "";
for (element in analytics) {
    var since = we.util.date.daysAgo(analytics[element].daysAgo).toISOString();
    links += "<a href='"
    + we.system.baseURL
    + "/" + we.api._apiPath
    + analytics[element].path
    + ";wesessid=" + we.authMgr.getSessionID()
    + "?since=" + since
    + "&format=csv"
    + "'>" + element + "</a><br>";
}
new we.ui.widget.Dialog({
    headline: 'Auswertung der letzten ' + item + ' Tage',
    content: links
    });
}

