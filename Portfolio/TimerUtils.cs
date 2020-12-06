using System;
using System.Threading;

namespace Portfolio
{
    public static class TimerUtils
    {
        public static Timer StartLimitedEasingTimer(
            Action callback,
            Func<bool> condition,
            TimeSpan dueTime,
            TimeSpan period,
            TimeSpan periodIncrement)
        {
            Timer timer = null!;

            timer = new Timer(
                _ =>
                {
                    callback();

                    timer.Change(period += periodIncrement, period);

                    if (!condition())
                    {
                        timer.Dispose();
                    }
                },
                state: null,
                dueTime,
                period);

            return timer;
        }
    }
}
