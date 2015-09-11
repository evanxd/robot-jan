'use strict';

(function(exports) {
  var TASK_MANAGER_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTczQUZBNkI1MDc3MTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTczQUZBNkE1MDc3MTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODBCRDMxNDUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODBCRDMxNTUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppv03LMAAAHqSURBVHja7NjNK0RRGMdxw1AsUGYWItFYkI0oNVHKS9l4SzaSlJ1sJGs1fwMLNhRZIGRDFmJBUlZeQ9jMAgsxkZcY31vP4qYZc+7MnTuj7qnPYu48Z+6v0zlnzr2OYDCYkszNYQe0A/6DgGXwmXCvV/Qb7eRUqHGh24SAT9F0Sk1J8mYHjLU5o+gzjhnFWm1RDFkd0I9DxdrmRIzgABoVa4sTEbBU2Isk2hGcx6pibQd6rA54hEXFWk8iRrATJYq1lYkIWCOSdg4aaafYxC0+kyngAYaxhwyZi5kokI1evWnnwQjqgsbaJNJRhGk8/fr+EoNwKtzb9IBL0A7BrQhEqN1BnpUB75ALL94V+2zLaIe9v5n/JBMIYErmXaTT9RzqMWjVHKxAi0LdC2rhxj2urBjBd5zLiPzV3tCGY2zALSu8KN6HBe3GX8jXXdtCEx7l84c8fO1jHVW62sJ4B8yWeRfQXcvBCepwg14JvQbvr/6BeG/UDpTjTHetGrtoke+0B/AVNIR4Xr6I5cFdO5yOKoRckLl1jSzd9Qe0YwRdIfrNoi+WVWyUL8TK/Qqzop/hiXWjNioNywrbjbaZt5nxTxJtyDG8hgl3JPtrxN+K99stlxxwq2Sl+2Ula0ewb/v9oB3QDmhC+xFgANyyExe4J+M2AAAAAElFTkSuQmCC';
  var WIFI_ON_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTQ2Qjg5MTQ1MDc4MTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTQ2Qjg5MTM1MDc4MTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODBCRDMxNDUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODBCRDMxNTUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgXu/NYAAAKaSURBVHja7NhNSBVRFMBxR00jKsoggiJKjNSUCgLBkooIK4halC0qKgUXrkJ3QVQQRNC6NgX2QeGiTSBICzGMPiAIyYww8BV90KOygjAtnf4XztDlcud5Z5zgQXPgt3jzcd+ZOXPunfc83/cL8jkKC/I80gTTBNME0wT/RhEWYl6SCRbHPG8JdqEBNVhtJKZm//cYwgDu4h4mIn+TWkkczcIB9GHKjx7fcRE1Eb7TKUEPTRj2kwl1cbdR4ZKgN81avAyd2GbZ9w7deIJnyOIrSjEf5ajFVmzBbON8Ve6TuICpOCVuxGfj6n+hCw1yZ11LNRetGLTc0V6URS1xsySjRw+qozw/FoUy9gdj7CGscC3xQVyHJ5/H0IFLlgJUYQfWoQJzMIkveI7H6JHS67EIV7BH2/YKm6X7Q0u8HOPalX1CnXFMMY5hwLEpJnALay3Nd9Y4ttulxC3SaVlUGvvqQ54jl5jEZSwwxjwh+zNY6drFR/FCShREO85bJvenMgmr40dl/1KsR6OUU48MdmNQ23YaVzESd6I+Z7kbnVgzzXnqcdhvuetqdtiQ1ETdbgz+RkodpXtVoqfkwoLIyjOf81yXtfibrK2eTMjb8dF44diEelmjf2IYvVrJfuOMlPUmSmR2KEpqLW6RO7fY2H4IIzmWtDuWRjsS1hBxSxzQu68ENxy79wf25hhrRmtxWFzDYe2zmpwfSCer8m3EKmPdVR3d9y9ftwLVxuuWev0qt0zC+zCqHfcwzvIYd01tliT7pdxhx9XJyvTa9ZlLKsEgySrjhXYnao3jjsdNbqYJmm/bj7RJvDWhcWM3iRlqHuzXPr9EZT79qstIJ+sJ5tXPzrdown10oS2pBL30/8E0wTTBNMH/PME/AgwA6HN+xEH/QEYAAAAASUVORK5CYII=';
  var WIFI_OFF_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTAxMjAwQjk1MDdCMTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTAxMjAwQjg1MDdCMTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODBCRDMxNDUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODBCRDMxNTUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqPJZY8AAALPSURBVHja7JjbSxRRHMd3zS5WalKZhHSxxC5aEYKRSWLQFUIq6qGHLkKQD5HWU089BD1F/QVlvfUaWHaBCoqIJLOLdKW2UmLLkqgsxKbPoTNw+DGzc3Z3gg3mBx92Zs7vnPOd3zm/38xs3HGcWC5bXizHLRIYCYwE5rDAwzA/0EvVwZAYAyVQGOAXhxPOX/sM61P552d492WwERqgGqqg0LxvGIA+6IUrcBNG4BQc0H6ToCCsCI6FHXADfjvp21e4Zpz/gs1B89oIU0uyHV442dlL4/gnbLIJTNASl0MHrPFo64dO6IZHkIQhGA9FUAE10ASVME/3G4Yt0GW1mVKoXweDIgojcB4adGRtEueM0f87rBU+02FKuku8V4sxrQsWpZnV54S4JuFTrrdOH8yxFbhTJMEP2O8jYiG0wVm4DT3QDVfhnjHGN1gt+k6F54aPEjozSOAsnV2ufYI64ZMPe6A3RUJ8FNm7yif5jol+nTYRbNERTMIC0bYSHgdkq7lvh6BejJEnzo9o3zcw13YP7vaIXLvHvlR2H05CK9wS4laIMcp0LawW1496ibOtg4rjQtQodMBi3T4OLhjtX6BWjFEKT4wo19rMbSOuXYh7q5fabZ8AF8USL/cYp1XfmGtJveezFthiZPVDmGG0FcBlkRzLUoy11UjChN+yZrLELTpypca1ifBARGSJ6FfsIWKXX0JkIzAmqr06fmeI+2DsR5dp+gZUgW5OMVZoAl0mw3tD3IAu2FJAj3hzaczkPTPdDkX6SeFaP1T5FOFtOptdu/OvBRbrx5lraokrA/rU6eglbPdcpgKVuLuGODVhhYefKj814trBTMXZCiwRy/raZ8LTRhHfF9a3jo3TBhjWk7+C2R4+S0UxfxqWQJvPzktQD9ehERIePoMwapw/C+vbNB7i32/qNb5Nfwoc0r85JTD66yMSGAmMBP6PAv8IMACkbVZirBDWRwAAAABJRU5ErkJggg==';
  var SOUND_ON_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTAxMjAwQzE1MDdCMTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTAxMjAwQzA1MDdCMTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODBCRDMxNDUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODBCRDMxNTUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq2HRroAAAHvSURBVHja7Jg/SwMxGId7tVpBKxUqCjroIDgJWtDqICgURKeCk0hnEQf9Ag5+Ax3UUR0cXDq7FKEIOioORRAVBRFExH8oVePv4C2E0KbmLnfckMBD6Nvk+pBckje1GGOhIJdwKODFCBpBI+iDYB1YAyUQ1y0Y0SC3C2aDOIKey7kRtMC2S7k2sAUWpa3so04RC2yyyiWu8JxR6nMua6dTTlXQ5oL6Jau1CStO6waYdzil9gqfEmL7VE9W/VFJNrNMD6ynz80gWUOiFTxX+S4H0qAdvFNsHORBAYypvIMx5qzIpjhLbTJcLApK4E11ihs17BBJYZ/NUz3Bxb7AJWjiZupf24zlUi4KjkCKi92Be9AvtC3KDg2vzmJ7ZE7BsBC/Aj1C7Inb+H1NFm5pQfDlEbQIsReZi5eCrMKronwB8lKwCzwIsQQ3YuVSHtFfPwXtRTIAToR4N7iusIErCzINiyQtCHaATnAmtO2juqSSD35qGMWC8DlN9SEXawC94ENV8BUsgWl6iF1iYNCFcIZEDrjYCDkc60i3amUytY66BJgRYqvUbyWo6VaR+g3pEtSZsKaoT1HWLuJwA16g9GvOxTt5A3boSAw5yQedXJpk+aDvt7ofkAV7Qb64lyXXwbcXgpb5A9MIGkEj6G35E2AA8xVTH3/btwoAAAAASUVORK5CYII=';
  var SOUND_OFF_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkZCMzJGRTg1MDdCMTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkZCMzJGRTc1MDdCMTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODBCRDMxNDUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODBCRDMxNTUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrubgOkAAAETSURBVHja7Ji9CsIwFEatOIkdtDoJOrpYd9HFzVmfxefwbXT0F3wAJ1dBcCiOrvErVpSilfQ26R3uB2cJTTgNCb23jlKqwDmOCIqgCIrg15TABGzBlbRSKJgxLlirZ3zqeibkduodVoJxuUwEszqDFbAEw9h4DxzzviS/5FgIJslZF+yCOah+jDVAK2GOVcFwp8aa65MFixrPNoln1TMtSEkfnIHPVfAEymDEVfAGgj8XKldBK5eEkhqoR+eQpWAH3MEqTd1mIwfQjs6hsR28ECWDNJN0dnAWvZCn8anLveR3wYJLsZBGkoVgkiQbwZdkWPEMshQ00TTtuTZNRtpOk437FGyojbv8mxFBERRBw3kIMABL+dBm/CJK5AAAAABJRU5ErkJggg==';
  var SCREEN_OFF_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTQ2Qjg5MEM1MDc4MTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTczQUZBNkU1MDc3MTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODBCRDMxNDUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODBCRDMxNTUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrkTfe8AAAFWSURBVHja7JgxTsNAEEVtlBrJJUoHVLS+AIVDxX3WN8D0VKkokaCksy8AIlJED0eIc4Plr5hIo9EaeUOydqL50pPiv5H3254drTa11iZj1kkycmnAow846fCfwOUAeR7BQ5+AV+AMLCOGuwbTvm/Q6Q3cRgy41kWiATWgBjyQgBkoQD7GgBVYgRp8gC8R1PlW4B7GeHyz64CGKEEKLkBLoc7Ff2eMBfNL5j/3mtXtqD18glfhrUAtvML+ytB1Tdfyfob8omM+xxrcSb/vG8yp9hrhN2x80BrMAsc3dVYLn9fov/aDUm3g+KzDL0VN7izggiZzK/Ke+QUb9316332afbWZOWsZCa3cioLPY2/5fSpZL6zo9zd9znZfAUPazIaM2kX+R8vYBm+bmWzxTG1oHelmQQNqQA14gIdHTje0e46l05CAL76DnAh6l0aqZ9QacGD9CDAAPsY6tBaKW8cAAAAASUVORK5CYII=';
  var ADD_FEATURE_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjgzNjg0NEE1MDc1MTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjgzNjg0NDk1MDc1MTFFNUI0NDI5NkNCMjMzRkEyMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODBCRDMxNDUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODBCRDMxNTUwNkExMUU1QjQ0Mjk2Q0IyMzNGQTIwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PodXbmUAAALXSURBVHja7JhNSFVBFMff9alolh89IiUS0yDbuOgDFEIzKFoUlBZIuQxdBRWBYhCtypXQrkUuCqSNtQgpl4WLIIKiL16UFJhfSPm0SE3z9T8wDw7DfXNn5s1FkXfgB3N5Z87878y8OWeul0wmI+vZciLr3LICN7zAXIcvWgm2gRKQABOCNRNYDFrAGdAItvj4zILnYBA8AgvGo9AxY0ghuAF+Js1sGlwF+SbjeYbnYD0YANU+v82BcTAtlrkKbPXx+wDawHvXM3gOLEmz8glcBtVp+uwBXeCr1O83OKEzrq6482CVDTALLoAczf554CL4xWLQy550IfCgNHPvQKXF3iVqwag0k7WZCCwAX1jAt6BM4X9JLGmTwmcH+MxivgSercAeaVl3BfgnhO+tAL868IfFbrMRuBn8YEE6NZZQVyBxjcWmVcr181OluhZ2TIyCfsdZrE8cSWQ14JhpLj7L2nfAimOBlFXusefTpgIbWHsopFrgMWs3mQgsBzGWT+MhCXwF/ok2Zad8XYHbWXvMLwGloUT83q3w4bYEpkQ7Ko2rFMgrk/mQS75F1taewTnW9kv4XhpS/XoVPrJtSiNWKfA7a+8MsfIuEvudbJkdO4EC6Y8xyZa7LiSBDWxW435HmWpmRoLOKAfG4z4zPQcfsHYHKHQsrgy0s+dBU4FP2F6kfXLFscDr4l5D9lpaMe2KupMl9EWwL8Cf7iq94HiAXzNYYbGP2pZbUVGvpWwMVFkWq7zUmmExn2ZaUe9mZRTZBKi3FNcslXBToMLFneQIWGCB/4KboFizfwzclpaVXvqAq0tTRJTx8l2Yquy74oYWk/xLQSu4L12WUquw3+WtLgWV/COKyznN8jdpS8g2DMp1x7TZR3TBaQdxwy8Lb8Ap0/G8DL6w0hl6CLSCw2AvyJMq5o8iQzwEL2wG8Rx+Ao6KerBU5PKET/23pgKzX1izAm3svwADAIiWcuRmRZ7JAAAAAElFTkSuQmCC';
  // var ORIGIN = 'app://1d60e1eb-b8bb-4443-8d19-e31bb961c460/manifest.webapp';
  var ORIGIN = 'app://312252e6-67aa-b845-b20d-dda0fbbc67f9/manifest.webapp';
  var SPRITE_ID = 'fxos-tamagotchi';
  var CLICK_INTERVAL = 250;
  var HOLD_INTERVAL = 350;
  var MOVE_THRESHOLD = 5;
  var WIFI_SHARING_KEY = 'tethering.wifi.enabled';

  function Tamagotchi(stage) {
    this._stage = stage;
    this._sprite = document.createElement('img');
    this._sprite.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABkCAYAAABO6zhfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDI4OEQ0NUM0RjJDMTFFNTk4MTM5QzM4MzIyMDhEMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDI4OEQ0NUQ0RjJDMTFFNTk4MTM5QzM4MzIyMDhEMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQTJDMDlGRjRFREYxMUU1OTgxMzlDMzgzMjIwOEQyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQTJDMEEwMDRFREYxMUU1OTgxMzlDMzgzMjIwOEQyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psg5RTsAABGUSURBVHja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';
    this._container = document.createElement('div');
    this._init();
  }

  Tamagotchi.prototype = {
    _stage: null,
    _sprite: null,

    _init: function() {
      this._render();
      this._registerEvents();
    },

    _registerEvents: function() {
      var sprite = this._sprite;
      var container = this._container;
      var taskManager = document.querySelector('#taskManager');
      var taskManagerText = taskManager.querySelector('.circular-menu-item-anchor');
      var newFeature = document.querySelector('#newFeature');
      var newFeatureText = newFeature.querySelector('.circular-menu-item-anchor');
      var screenOff = document.querySelector('#screenOff');
      var screenOffText = screenOff.querySelector('.circular-menu-item-anchor');
      this.wifiSharing = document.querySelector('#wifiSharing');
      this.wifiSharingText = document.querySelector('#wifiSharing .circular-menu-item-anchor');
      this.mute = document.querySelector('#muteAllChannel');
      this.muteText = document.querySelector('#muteAllChannel .circular-menu-item-anchor');
      var timerID;
      var touchStartTimeStamp;
      var touchPosition;
      var moved = false;
      var longPressed = false;

      navigator.mozApps.mgmt.addEventListener('enabledstatechange',
        this._handle_enabledstatechange.bind(this));
      sprite.addEventListener('touchstart', (evt) => {
        touchPosition = {
          'x': evt.touches[0].clientX,
          'y': evt.touches[0].clientY
        };
        moved = false;
        longPressed = false;
        touchStartTimeStamp = new Date();
        timerID = setTimeout(() => {
          var menu = this._menu;
          if (!menu.opened && ! moved) {
            navigator.vibrate(50);
            this._updateMenuState(() => {
              menu.open().then(() => {});
              longPressed = true;
            });
          }
        }, HOLD_INTERVAL);
      });
      sprite.addEventListener('touchend', () => {
        if (moved || longPressed) {
          return;
        }
        var menu = this._menu;
        var time = new Date() - touchStartTimeStamp;
        if (time < CLICK_INTERVAL) {
          navigator.vibrate(50);
          if (menu.opened) {
            menu.close();
          } else {
            window.dispatchEvent(new CustomEvent('home'));
          }
        }
        if (time < HOLD_INTERVAL) {
          clearTimeout(timerID);
          timerID = -1;
        }
      });
      sprite.addEventListener('touchmove', function(evt) {
        var diffX = touchPosition.x - evt.touches[0].clientX
        var diffY = touchPosition.y - evt.touches[0].clientY
        if (Math.abs(diffX) <= MOVE_THRESHOLD &&
            Math.abs(diffY) <= MOVE_THRESHOLD) {
          return;
        }
        touchPosition = {
          'x': evt.touches[0].clientX,
          'y': evt.touches[0].clientY
        };
        moved = true;
        var spriteTop = sprite.offsetTop - diffY;
        var spriteLeft = sprite.offsetLeft - diffX;
        sprite.style.bottom = null;
        sprite.style.top = spriteTop + 'px';
        sprite.style.left = spriteLeft + 'px';
        container.style.top = (spriteTop - 83) + 'px';
        container.style.left = (spriteLeft - 61) + 'px';
      });

      taskManagerText.innerHTML = '<img src="' + TASK_MANAGER_ICON + '">';
      screenOffText.innerHTML = '<img src="' + SCREEN_OFF_ICON + '">';
      newFeatureText.innerHTML = '<img src="' + ADD_FEATURE_ICON + '">';

      taskManager.addEventListener('click', function() {
        window.dispatchEvent(new CustomEvent('holdhome'));
      });

      screenOff.addEventListener('click', function() {
        window.dispatchEvent(new CustomEvent('sleep'));
      });

      this.wifiSharing.addEventListener('click', () => {
        var obj = {};
        obj[WIFI_SHARING_KEY] = ('on' !== wifiSharing.dataset.state);
        if ('on' !== wifiSharing.dataset.state) {
          this.wifiSharingText.innerHTML = '<img src="' + WIFI_OFF_ICON + '">';
          this.wifiSharing.dataset.state = 'on';
        } else {
          this.wifiSharingText.innerHTML = '<img src="' + WIFI_ON_ICON + '">';
          this.wifiSharing.dataset.state = 'off'
        }
        navigator.mozSettings.createLock().set(obj);
      });

      this.mute.addEventListener('click', () => {
        var sm = window.wrappedJSObject.core.soundManager;
        if ('muted' === this.mute.dataset.state) {
          this.muteText.innerHTML = '<img src="' + SOUND_OFF_ICON + '">';
          this.mute.dataset.state = 'unmuted'
          sm.changeVolume(10, 'content');
          sm.changeVolume(10, 'alarm');
          sm.changeVolume(10, 'notification');
        } else {
          this.muteText.innerHTML = '<img src="' + SOUND_ON_ICON + '">';
          this.mute.dataset.state = 'muted'
          sm.changeVolume(-sm.currentVolume['content'] - 1, 'content');
          sm.changeVolume(-sm.currentVolume['alarm'] - 1, 'alarm');
          sm.changeVolume(-sm.currentVolume['notification'] - 1, 'notification');
        }
      });
    },

    _updateMenuState: function(callback) {
      var req = navigator.mozSettings.createLock().get(WIFI_SHARING_KEY)
      req.onsuccess = () => {
        if (req.result[WIFI_SHARING_KEY] === true) {
          this.wifiSharingText.innerHTML = '<img src="' + WIFI_OFF_ICON + '">';
          this.wifiSharing.dataset.state = 'on';
        } else {
          this.wifiSharingText.innerHTML = '<img src="' + WIFI_ON_ICON + '">';
          this.wifiSharing.dataset.state = 'off'
        }
        callback();
      };
      var sm = window.wrappedJSObject.core.soundManager;
      var muted = sm.currentVolume['content'] <= 0 &&
                  sm.currentVolume['alarm'] <= 0 &&
                  sm.currentVolume['notification'] <= 0;
      if (muted) {
        this.muteText.innerHTML = '<img src="' + SOUND_ON_ICON + '">';
        this.mute.dataset.state = 'muted'
      } else {
        this.muteText.innerHTML = '<img src="' + SOUND_OFF_ICON + '">';
        this.mute.dataset.state = 'unmuted'
      }
    },

    _handle_enabledstatechange: function(evt) {
      var app = evt.application;
      if (app.manifestURL !== ORIGIN) {
        return;
      }
      !app.enabled && this._destroy();
      navigator.mozSettings.createLock().set(
        { 'software-button.enabled': !app.enabled }
      );
    },

    _render: function() {
      var sprite = this._sprite;
      var container = this._container;
      sprite.id = SPRITE_ID;
      this._stage.appendChild(sprite);
      container.id = 'menu-container';
      this._stage.appendChild(container);
      var left = (screen.width / 2) - 64;
      var style = `
        position: fixed;
        left: ${left}px;
        bottom: 0;
        z-index: 2147483647;
      `;
      sprite.setAttribute('style', style);
      sprite.setAttribute('data-z-index-level', 'fullscreen-layout-software-home-button');
      this._menu = new CircularMenu(container);
      var menu = this._menu;
      menu.marginAngle = 2;
      menu.addItem('taskManager', '');
      menu.addItem('wifiSharing', '');
      menu.addItem('muteAllChannel', '');
      menu.addItem('screenOff', '');
      menu.addItem('newFeature', '');
      menu.render();
      container.setAttribute('data-z-index-level', 'fullscreen-layout-software-home-button');
    },

    _destroy: function() {
      var style = document.querySelector('#fxos-tamagotchi-style');
      var sprite = this._sprite;
      var container = this._container;
      sprite.parentNode.removeChild(sprite);
      container.parentNode.removeChild(container);
      style.parentNode.removeChild(style);
    }
  };

  exports.Tamagotchi = Tamagotchi;
}(window));
