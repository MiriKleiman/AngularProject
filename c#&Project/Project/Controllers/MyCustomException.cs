using System.Runtime.Serialization;

namespace Project.Controllers
{
    [Serializable]
    internal class MyCustomException : Exception
    {
        public MyCustomException()
        {
        }

        public MyCustomException(string? message) : base(message)
        {
        }

        public MyCustomException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected MyCustomException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}