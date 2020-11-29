using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace Portfolio
{
    public static class Extensions
    {
        [return: NotNullIfNotNull("str")]
        public static string? Unindent(this string? str)
        {
            if (String.IsNullOrEmpty(str))
            {
                return str;
            }

            var lines = str.Split(Environment.NewLine);
            var indentation = lines.Select(line => line.Length - line.TrimStart().Length).Min();

            return String.Join(
                Environment.NewLine,
                lines.Select(line => line[indentation..].TrimEnd().ToArray()));
        }

        public static IEnumerable<ImmutableList<T>> Buffer<T>(this IEnumerable<T> items, int count)
        {
            if (items is null)
            {
                throw new ArgumentNullException(nameof(items));
            }

            if (count <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(count), "The count must be positive");
            }

            var list = ImmutableList.CreateBuilder<T>();
            int currentCount = 0;

            foreach (var item in items)
            {
                list.Add(item);
                currentCount++;

                if (currentCount % count == 0)
                {
                    yield return list.ToImmutable();
                    currentCount = 0;
                    list.Clear();
                }
            }

            if (currentCount != 0)
            {
                yield return list.ToImmutable();
            }
        }
    }
}
